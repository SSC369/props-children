import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <li className="each-item">
      {children}
      <GrFormClose className="close-icon" />
    </li>
  )
}

export default Notification

