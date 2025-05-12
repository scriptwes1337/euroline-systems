import React from 'react'
import { Nav } from '../../components/navbar/navbar'
import { Footer } from '../../components/footer'

const About = () => {
  return (
    <div>
      <Nav />
      <main style={{ maxWidth: 800, margin: '0 auto', padding: '2rem' }}>
        <h1>About Us</h1>
        <section>
          <h2>Company Overview</h2>
          <p>
            <strong>Euroline Systems Pte Ltd</strong> was founded in January 2018 by the former team of K&H Facade Pte Ltd, under the leadership of Mr. Tan Bak Khoon. We specialize in the design, fabrication, and installation of aluminum profiles for commercial buildings, hotels, and residential properties.
          </p>
        </section>

        <section>
          <h2>Core Offerings</h2>
          <h3>Products</h3>
          <ul>
            <li>Sliding systems (EL 90SN, EL 60SN, EL 160SM)</li>
            <li>Swing systems (EL 50N, EL 76E thermal break)</li>
            <li>Curtain wall systems (EL 50F, EL 50FG, EL 85ML)</li>
            <li>Louvre &amp; sunshade systems</li>
            <li>Specialized systems (wood finish, thermal break, soundproof)</li>
          </ul>
        </section>

        <section>
          <h2>Key Differentiators</h2>
          <ul>
            <li>High-quality Italian "GS slim sliding door profile" (30mm thick)</li>
            <li>Tested for water penetration (750PA) and wind load (1800 pascal)</li>
            <li>Strong technical expertise with in-house talent</li>
            <li>Fast customer service response</li>
          </ul>
        </section>

        <section>
          <h2>Testing Standards</h2>
          <ul>
            <li>Complies with European standards (EN1026, EN1027, EN12211)</li>
            <li>Tested for air permeability, watertightness, wind resistance, soundproof, and thermal insulation</li>
          </ul>
        </section>

        <section>
          <h2>Notable Projects</h2>
          <ul>
            <li>Mandarin Oriental Singapore (façade retrofit)</li>
            <li>H&amp;M Orchard (aluminum cladding)</li>
            <li>Kuwait Embassy Singapore (stainless steel doors)</li>
            <li>Marina Bay Sands (Celavi Restaurant, Lavo Restaurant)</li>
            <li>Multiple high-end residential projects (Ardmore Park, Sentosa Cove, etc.)</li>
          </ul>
        </section>

        <section>
          <h2>Vision &amp; Values</h2>
          <ul>
            <li>
              <strong>Vision:</strong> Become the leading aluminum profile provider in Singapore and the region within 5 years.
            </li>
            <li>
              <strong>Mission:</strong> Turn customer ideas into reality with cost-effective, quality solutions.
            </li>
            <li>
              <strong>Values:</strong>
              <ul>
                <li>Deliver innovative designs and uncompromised quality</li>
                <li>Invest in workforce training and motivation</li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h2>Client Testimonial</h2>
          <blockquote>
            Mandarin Oriental's Director of Engineering praised Euroline Systems for their professionalism and outstanding service, ability to handle demanding projects, consistent quality across complex projects, honesty, and helpfulness.
          </blockquote>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default About