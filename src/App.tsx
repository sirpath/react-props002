import './App.css'

import Agent from './components/Agent'
import Detail from './components/Detail'
import Features from './components/Features'
import Header from './components/Header'
import Location from './components/Location'
import Property from './components/Property'

export type DataProperty = {
  headerName: string
  property: {
    hotelName: string
    img: string
  }
  detail: {
    price: number
    bedrooms: number
    bathrooms: number
    garage: number
  }
  features: Array<{
    feature: string
    isAvailable: boolean
  }>
  location: {
    street: string
    city: string
    state: string
    zip: string
  }
  agent: Array<{
    name: string
    email: string
    phone: string
    isPaid: boolean
  }>
}

const data: Array<DataProperty> = [
  {
    headerName: '🏠 Real Estate Listings',
    property: {
      hotelName: 'Luxury Villa in Beverly Hills',
      img: 'https://picsum.photos/200?1',
    },
    detail: {
      price: 8500000,
      bedrooms: 5,
      bathrooms: 6,
      garage: 1,
    },
    features: [
      { feature: 'Swimming pool', isAvailable: true },
      { feature: 'Home theater', isAvailable: true },
      { feature: 'Wine cellar', isAvailable: false },
      { feature: 'GYM', isAvailable: true },
    ],
    location: {
      street: '123 Palm Tree Road',
      city: 'Beverly Hills',
      state: 'Califonia',
      zip: '90210',
    },
    agent: [
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        isPaid: true,
      },
    ],
  },
  {
    headerName: '🏠 Real Estate Listings',
    property: {
      hotelName: 'Modern Apartment in New York',
      img: 'https://picsum.photos/200?2',
    },
    detail: {
      price: 3000000,
      bedrooms: 3,
      bathrooms: 3,
      garage: 1,
    },
    features: [
      { feature: 'Open concept layout', isAvailable: false },
      { feature: 'Floor-to-ceiling windows', isAvailable: false },
      { feature: 'Modern kitchen with high-end appliances', isAvailable: true },
    ],
    location: {
      street: '456 Broadway',
      city: 'New York',
      state: 'New York',
      zip: '10012',
    },
    agent: [
      {
        name: 'seqwe',
        email: 'jdasde.com',
        phone: '122220',
        isPaid: false,
      },
    ],
  },
  {
    headerName: '🏠 Real Estate Listings',
    property: {
      hotelName: 'Cozy Cottage in the Countryside',
      img: 'https://picsum.photos/200?3',
    },
    detail: {
      price: 500000,
      bedrooms: 2,
      bathrooms: 2,
      garage: 2,
    },
    features: [
      { feature: 'Large garden', isAvailable: true },
      { feature: 'Wood-burning fireplace', isAvailable: false },
      {
        feature: 'Beautiful views of the surrounding nature',
        isAvailable: true,
      },
    ],
    location: {
      street: '789 Country Lane',
      city: 'Smallville',
      state: 'Countryside',
      zip: '12345',
    },
    agent: [
      {
        name: 'Bob Johnson',
        email: 'bob.johnson@example.com',
        phone: '555-666-777',
        isPaid: true,
      },
    ],
  },
]

const App = () => (
  <>
    <Header headerName="🏠 Real Estate Listings" />
    <main>
      {data.map(({ property, detail, features, location, agent }) => (
        <Property hotelName={property.hotelName} img={property.img}>
          <Detail
            price={detail.price}
            bedrooms={detail.bedrooms}
            bathrooms={detail.bathrooms}
            garage={detail.garage}
          />
          <Features features={features} />
          <Location
            street={location.street}
            city={location.city}
            state={location.state}
            zip={location.zip}
          />
          <Agent agent={agent} />
        </Property>
      ))}
    </main>
  </>
)

export default App
