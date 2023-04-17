import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import DOMPurify from 'dompurify';
import Header from './components/Header';
import Footer from './components/Footer';
import Checklist from './components/Checklist';
// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const services = {
  id: 'services',
  headerText: 'Services and Amenities',
  descriptionText: 'Our services and amenities are designed to make your travel easy, your stay comfortable, and your experience one-of-a-kind.',
  items: [
    'Indoor pool',
    '24-hour fitness center',
    'Massage therapy',
    'Full service spa',
    'In-room jacuzzi tubs',
    'Rooftop caf&eacute;  &amp; smoothie bar',
    'Coffee bar  &amp; pastry shop',
    'Traditional continental breakfast',
    '24-hour concierge service',
    'Business center',
    'Complimentary wireless service',
    'Laundry &amp; dry cleaning service',
    'Daily paper',
    'Certified &quot;green&quot; hotel',
    'Pet-friendly rooms  &amp; common areas'
  ].map(a => DOMPurify.sanitize(a))
};
const accessibility = {
  id: 'accessibility',
  headerText: 'Accessibility',
  descriptionText: 'We&apos;re committed to maintaining the same quality of service for every individual. We offer the following facilities for those with special needs:',
  items: [
    'Grab bars on tub walls',
    'Shower chairs',
    'Hand held shower sprayers',
    'Higher toilets &amp; toilet modifiers',
    'Lower sink faucet handles',
    'Wheelchair clearance under sinks &amp; vanity',
    'Lower racks in closet',
    'TDD machines',
    'Telephone light signalers  &amp; smoke alarms',
    'Telephone amplification handsets',
    'Closed captioned television converters',
    'Vibrating alarm clocks',
    'Telephones with volume control',
  ].map(a => DOMPurify.sanitize(a))
}
export default function Home() {
  return (
    <div className="App">
      <Header />
      <main id="wrapper">
        <div className="scene" id="welcome">
          <article className="content">
            <div className="gallery">
              <img src="https://landonhotel.com/images/hotel/intro_room.jpg" alt="Intro Gallery Room Sample Pictures" />
              <img src="https://landonhotel.com/images/hotel/intro_pool.jpg" alt="Intro Gallery Pool Sample Pictures" />
              <img src="https://landonhotel.com/images/hotel/intro_dining.jpg" alt="Intro Gallery Dining Sample Pictures" />
              <img src="https://landonhotel.com/images/hotel/intro_attractions.jpg" alt="Intro Gallery Attractions Sample Pictures" />
              <img className="hidesm" src="https://landonhotel.com/images/hotel/intro_wedding.jpg" alt="Intro Gallery Dining Sample Pictures" />
            </div>
            <h1>Welcome to the Landon&nbsp;Hotel</h1>
            <p>The original Landon perseveres after 50 years in the heart of West London. The West End neighborhood has something for everyone—from theater to dining to historic sights. And the not-to-miss Rooftop Cafe is a great place for travelers and locals to engage over drinks, food, and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel in the West End, browse our website and <a href="files/landon_information_sheet_London.pdf">download our handy information sheet</a>.</p>
          </article>
        </div>

        <div className="scene" id="hotelinfo">
          <article className="heading">
            <h1>Essential Info</h1>
          </article>
          <article id="usefulinfo">
            <section id="arrivalinfo">
              <h2>Arrival Information</h2>
              <ul>
                <li><strong>Check-in:</strong> 3:00 PM</li>
                <li><strong>Check-out:</strong> 11:00 AM</li>
                <li><strong>Parking:</strong> Self-parking in the underground garage is ￡15 per day and valet-parking is ￡50 per day.</li>
                <li><strong>Airport Shuttle:</strong> Our complimentary airport shuttles leave every hour on the hour, and make trips to Heathrow and Gatwick airports.</li>
                <li><strong>Trains:</strong> The nearest Underground station is at Leicester Square.</li>
                <li><strong>Pet Policy:</strong> Pets of all sizes and types are allowed in designated pet rooms, and the specified common areas. Service animals are allowed everywhere.</li>
              </ul>
            </section>
            <Checklist
              id={services.id}
              headerText={services.headerText}
              descriptionText={services.descriptionText}
              items={services.items}  
            />
            <Checklist
              id={accessibility.id}
              headerText={accessibility.headerText}
              descriptionText={accessibility.descriptionText}
              items={accessibility.items}  
            />
          </article>
          <article id="greenprogram">
            <h2>Landon Green Program</h2>
            <p><strong>The Landon Hotel - London</strong> was recently renovated, and we considered the impact on the earth the entire way. From green building materials, to solar power, to energy-friendly lighting and appliances throughout the hotel - we’re saving energy in every socket, outlet, and switch. We’ve also initiated a recycling and composting program that reduces the load to local landfills, while providing valuable raw material for use in new products, or in the case of compost, for use in local gardens and landscapes.</p>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
