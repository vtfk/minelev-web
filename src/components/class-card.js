import { SkeletonLoader } from '../_lib-components/SkeletonLoader'
import { Heading3, Paragraph } from '../_lib-components/Typography'

function ClassCard ({ group, loading, ...props }) {
  if (!group) loading = true

  const { name, schoolName, grep, type } = group || {}

  // Basisgruppe = hent første tall i første tallrekke (_2_STA-4) // Annet = hent første tall i siste tallrekke (102NOR_1_206)
  const level = ((grep && grep.kode) || name || '').match(type === 'basisgruppe' ? /(?!.*\d)*(\d+)/ : /(\d+)(?!.*\d)/)
  
  return (
    <div className='class-information'>
      <div className='class-shortname'>
        VG{level && parseInt(level[0][0]) < 5 ? level[0][0] : 'S'}
      </div>
      <div className='text-wrapper'>
        <Heading3 className='name'>
          {
            loading
            ? <SkeletonLoader width='240px' />
            : (grep && grep.kortform ? grep.kortform.nb : name)
          }
        </Heading3>
        <div className='other'>
          {
            loading
            ? <Paragraph><SkeletonLoader width='140px' /></Paragraph>
            : (grep && grep.kortform ? <Paragraph>{name}</Paragraph> : '')
          }
          <Paragraph>
            {
              loading
              ? <SkeletonLoader width='200px' />
              : schoolName
            }
          </Paragraph>
        </div>
      </div>
    </div>
  )
}

export default ClassCard
