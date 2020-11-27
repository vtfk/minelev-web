import React, { useState, useEffect } from 'react'
import Moment from 'react-moment'

import { DefaultLayout } from '../../layouts/Default'

import { ROUTES } from '../../config/constants'
import { API } from '../../config/app'

import { useSession } from '@vtfk/react-msal'

import { Heading1, Heading3, Paragraph, Link } from '../../_lib-components/Typography'
import { InitialsBadge } from '../../_lib-components/InitialsBadge'
import { Icon } from '../../_lib-components/Icon'

import './styles.scss'

export function Class ({ match, ...props }) {
  const { id } = match.params
  const [schoolClass, setSchoolClass] = useState({})
  const [documents, setDocuments] = useState([])
  const { apiGet } = useSession()

  useEffect(() => {
    async function getClass () {
      const c = await apiGet(API.URL + '/classes/' + id)
      setSchoolClass(c.data)
    }
    getClass()

    async function getDocuments () {
      const docs = await apiGet(API.URL + '/classes/' + id + '/documents')
      setDocuments(docs.data)
    }
    getDocuments()
  }, [])

  return (
    <DefaultLayout>
      <div className='class'>

        <Link className='back-link' href={`/${ROUTES.students}`} noStyle leftIcon={<Icon name='arrowLeft' size='xsmall' />}>Til klasseoversikten</Link>

        {
          schoolClass &&
          schoolClass.id &&
            <div>
              <div className='class-information'>
                <div className='class-shortname'>
                  [X]
                </div>
                <div className='text-wrapper'>
                  <Heading3 className='name'>
                    {schoolClass.name}
                  </Heading3>
                  <div className='other'>
                    <Paragraph>{schoolClass.schoolName}</Paragraph>
                  </div>
                </div>
              </div>

              <div className='numbers'>
                <div className='numbers-item'>
                  <Heading1 as='h2' className='numbers-item-title'>
                    [X]
                  </Heading1>
                  <Heading3 as='p' className='numbers-item-text'>varselbrev</Heading3>
                </div>
                <div className='numbers-item'>
                  <Heading1 as='h2' className='numbers-item-title'>
                    [X]
                  </Heading1>
                  <Heading3 as='p' className='numbers-item-text'>dokumenterte elevsamtaler</Heading3>
                </div>
                <div className='numbers-item'>
                  <Heading1 as='h2' className='numbers-item-title'>
                    [X]
                  </Heading1>
                  <Heading3 as='p' className='numbers-item-text'>lokale læreplaner arkivert</Heading3>
                </div>
                <div className='numbers-item'>
                  <Heading1 as='h2' className='numbers-item-title'>
                    [X]
                  </Heading1>
                  <Heading3 as='p' className='numbers-item-text'>notater til elevmappa</Heading3>
                </div>
                <div className='numbers-item'>
                  <Heading1 as='h2' className='numbers-item-title'>
                    [X]
                  </Heading1>
                  <Heading3 as='p' className='numbers-item-text'>utplasseringer</Heading3>
                </div>
                <div className='numbers-item'>
                  <Heading1 as='h2' className='numbers-item-title'>
                    [X]
                  </Heading1>
                  <Heading3 as='p' className='numbers-item-text'>tilbakemeldinger</Heading3>
                </div>
              </div>

              <div className='activity-panel'>
                <Heading3 as='h2' className='panel-title'>
                  <Icon name='students' size='small' /> Elever ({schoolClass.students.length})
                </Heading3>

                <table className='activity-panel-table'>
                  <tbody>
                    {
                      schoolClass.students.map(function (student, index) {
                        return (
                          <tr key={index}>
                            <td>
                              <div className='activity-name'>
                                <InitialsBadge firstName={student.firstName} lastName={student.lastName} size='small' />
                                <Paragraph>
                                  <Link href={`/${ROUTES.students}/${student.username}`}>
                                    {student.fullName}
                                  </Link>
                                </Paragraph>
                              </div>
                            </td>
                            <td>
                              <Paragraph><Moment locale='nb' format='DD. MMM YYYY'>{student.birthdate}</Moment></Paragraph>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>

              <div className='activity-panel'>
                <Heading3 as='h2' className='panel-title'>
                  <Icon name='activity' size='small' /> Varsler
                </Heading3>

                <table className='activity-panel-table'>
                  <tbody>
                    {
                      documents &&
                      documents.map(function (doc, index) {
                        return (
                          <tr key={doc.id}>
                            <td>
                              <Paragraph>{doc.type}</Paragraph>
                            </td>
                            <td>
                              <Paragraph><Moment locale='nb' format='DD. MMM YYYY'>{doc.status && doc.status[doc.status.length - 1] ? doc.status[doc.status.length - 1].timestamp : '-'}</Moment></Paragraph>
                            </td>
                            <td>
                              <Paragraph>{doc.status && doc.status[doc.status.length - 1] ? doc.status[doc.status.length - 1].status : '-'}</Paragraph>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>

              <div className='activity-panel'>
                <Heading3 as='h2' className='panel-title'>
                  <Icon name='activity' size='small' /> Samtaler
                </Heading3>

                <table className='activity-panel-table'>
                  <tbody>
                    {
                      documents &&
                      documents.map(function (doc, index) {
                        return (
                          <tr key={doc.id}>
                            <td>
                              <Paragraph>{doc.type}</Paragraph>
                            </td>
                            <td>
                              <Paragraph><Moment locale='nb' format='DD. MMM YYYY'>{doc.status && doc.status[doc.status.length - 1] ? doc.status[doc.status.length - 1].timestamp : '-'}</Moment></Paragraph>
                            </td>
                            <td>
                              <Paragraph>{doc.status && doc.status[doc.status.length - 1] ? doc.status[doc.status.length - 1].status : '-'}</Paragraph>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
        }
      </div>
    </DefaultLayout>
  )
}
