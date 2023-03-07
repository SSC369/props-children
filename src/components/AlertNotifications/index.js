import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => {
  const data = [
    {
      id: 1,
      icon: <AiFillCheckCircle className="success-icon" />,
      heading: 'Success',
      description: 'You can access all the files in the folder',
    },
    {
      id: 2,
      icon: <RiErrorWarningFill className="error-icon" />,
      heading: 'Error',
      description:
        'Sorry, you are not authorized to have access to delete the file',
    },
    {
      id: 3,
      icon: <MdWarning className="warning-icon" />,
      heading: 'Warning',
      description: 'Viewers of this file can see comments and suggestions',
    },
    {
      id: 4,
      icon: <MdInfo className="info-icon" />,
      heading: 'Info',
      description: 'Anyone on the internet can view these files',
    },
  ]

  return (
    <div className="bg-container">
      <h1 className="title">Alert Notifications</h1>
      <ul className="notification-list">
        {data.map(eachItem => (
          <Notification key={eachItem.id}>{eachItem}</Notification>
        ))}
      </ul>
    </div>
  )
}

export default AlertNotifications
