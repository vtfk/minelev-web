import { Icon } from '../_lib-components/Icon'
import { Heading3 } from '../_lib-components/Typography'

function ClassPanel ({ icon, title, link, children, ...props }) {
  return (
    <div className='activity-panel'>
      <Heading3 as='h2' className='panel-title'>
        <Icon name={icon || 'activity'} size='small' /> {title}
      </Heading3>

      <table className='activity-panel-table'>
        <tbody>
          {children}
        </tbody>
      </table>

      {link}
    </div>

  )
}

export default ClassPanel
