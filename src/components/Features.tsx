import { DataProperty } from '../App'

const Features: React.FC<Pick<DataProperty, 'features'>> = ({ features }) => (
  <>
    <h3>Features</h3>
    <ul className="features">
      {features.map(({ feature, isAvailable }) =>
        isAvailable ? <li>✅ {feature}</li> : <li>❌ {feature}</li>
      )}
    </ul>
  </>
)

export default Features
