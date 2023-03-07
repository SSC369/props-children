import {GrFormClose} from 'react-icons/gr'
import {Component} from 'react'
import './index.css'

class Notification extends Component {
  render() {
    const {children} = this.props
    const {icon, heading, description} = children
    return (
      <li className="each-item">
        {icon}
        <div className="content">
          <h1 className={`${heading}`}>{heading}</h1>
          <p className="description">{description}</p>
        </div>
        <GrFormClose className="close-icon" />
      </li>
    )
  }
}

export default Notification
