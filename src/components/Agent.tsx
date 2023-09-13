import { DataProperty } from '../App'

const Agent: React.FC<Pick<DataProperty, 'agent'>> = ({ agent }) => (
  <>
    <h3>Agent</h3>
    {agent.map(({ name, email, phone, isPaid }) =>
      isPaid ? (
        <>
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
          <div className="agent-private">Show Only Paid Member</div>
        </>
      )
    )}
  </>
)

export default Agent
