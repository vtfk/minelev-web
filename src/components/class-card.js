import { Skeleton, Heading3, Paragraph } from '@vtfk/components'

function ClassCard ({ group, loading, ...props }) {
  if (!group) loading = true

  const { name, schoolName, grep } = group || {}

  // Basisgruppe = hent første tall i første tallrekke (_2_STA-4) // Annet = hent første tall i siste tallrekke (102NOR_1_206)
  const nameId = name || (grep && grep.kode) || ''
  const level = nameId.match(nameId.split('/')[0].match(/[0-9]/) ? /(?!.*\d)*(\d+)/ : /(\d+)(?!.*\d)/)

  return (
    <div className='class-information'>
      <div className='class-shortname'>
        VG{level && parseInt(level[0][0]) < 5 ? level[0][0] : 'S'}
      </div>
      <div className='text-wrapper'>
        <Heading3 className='name'>
          {
            loading
              ? <Skeleton width='240px' />
              : (grep && grep.kortform ? grep.kortform.nb : name)
          }
        </Heading3>
        <div className='other'>
          {
            loading
              ? <Paragraph><Skeleton width='140px' /></Paragraph>
              : (grep && grep.kortform ? <Paragraph>{name}</Paragraph> : '')
          }
          <Paragraph>
            {
              loading
                ? <Skeleton width='200px' />
                : schoolName
            }
          </Paragraph>
        </div>
      </div>
    </div>
  )
}

export default ClassCard
