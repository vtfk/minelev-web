import * as React from 'react'
import { PDFPreviewModal } from '@vtfk/components'
import { API } from '../config/app'

/**
 * @typedef {Object} Hook
 * @property {Function} openPreviewModal - åpner modal med innsendt dokument
 * @property {Function} PreviewModal - jsx for selve modalen
 */

/**
 * Funksjon som håndterer pdf preview
 * @param {function} poster funksjon som håndterer asynkron posting til API
 * @returns {Hook} PreviewModal, openPreviewModal
 */
function usePreview (poster) {
  const [previewModalState, setPreviewModalState] = React.useState(false)
  const [pdfPreviewBase64, setPdfPreviewBase64] = React.useState(null)
  const [pdfPreviewLoading, setPdfPreviewLoading] = React.useState(null)
  const [pdfPreviewError, setPdfPreviewError] = React.useState(null)
  const openRef = React.useRef(previewModalState)

  async function getPdfPreview (document) {
    setPdfPreviewError(null)
    setPdfPreviewLoading(true)

    const { data } = await poster(API.URL + '/documents/preview', document)

    if (data && data.base64) {
      setPdfPreviewBase64(data.base64)
      setPdfPreviewError(null)
      setPdfPreviewLoading(false)
    } else {
      setPdfPreviewBase64(null)
      setPdfPreviewError(true)
      setPdfPreviewLoading(false)
    }
  }

  function openPreviewModal (document) {
    setPdfPreviewBase64(null)
    setPdfPreviewError(null)
    setPdfPreviewLoading(true)
    setPreviewModalState(true)
    getPdfPreview(document)
  }

  function closePreviewModal () {
    setPreviewModalState(false)
  }

  React.useEffect(() => {
    openRef.current = previewModalState
  }, [previewModalState])

  const PreviewModal = () => (
    <PDFPreviewModal
      open={previewModalState}
      title='Lukk forhåndsvisning'
      onDismiss={() => { setPreviewModalState(false) }}
      loading={pdfPreviewLoading}
      base64={pdfPreviewBase64}
      error={pdfPreviewError}
    />
  )

  return {
    openRef,
    openPreviewModal,
    closePreviewModal,
    PreviewModal
  }
}

export default usePreview
