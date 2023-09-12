import { DataProperty } from '../App'

const Agent: React.FC<Pick<DataProperty, 'agent'>> = ({ agent }) => {
  return (
    <>
      {agent.map(({ name, email, phone, isMember }) =>
        isMember ? (
          <>
            <h3>Agent</h3>
            <ul>
              <li>
                <b>Name:</b> {name}
              </li>
              <li>
                <b>Email:</b> {email}
              </li>
              <li>
                <b>Phone:</b> {phone}
              </li>
            </ul>
          </>
        ) : (
          <>
            <h3>Agent</h3>
            <div className="agent-private">Show Only Paid Member</div>
          </>
        )
      )}
    </>
  )
}

export default Agent
