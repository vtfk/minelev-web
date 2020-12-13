import * as React from 'react'
import { PDFPreviewModal } from '../_lib-components/PDFPreviewModal'
import { API } from '../config/app'

function usePreview (poster) {
  const [previewModalState, setPreviewModalState] = React.useState(false)
  const [pdfPreviewBase64, setPdfPreviewBase64] = React.useState(null)
  const [pdfPreviewLoading, setPdfPreviewLoading] = React.useState(null)
  const [pdfPreviewError, setPdfPreviewError] = React.useState(null)

  async function getPdfPreview () {
    setPdfPreviewError(null)
    setPdfPreviewLoading(true)

    const { data } = await poster(API.URL + '/documents/preview', document)

    if (data.base64) {
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
    openPreviewModal,
    PreviewModal
  }
}

export default usePreview
