import { DataProperty } from '../App'

const Features: React.FC<Pick<DataProperty, 'features'>> = ({ features }) => {
  const FeaturesList = features.map(({ feature, isAvailable }) =>
    isAvailable ? <li>✅ {feature}</li> : <li>❌ {feature}</li>
  )

  return (
    <>
      <h3>Features</h3>
      <ul className="features">{FeaturesList}</ul>
    </>
  )
}

export default Features
