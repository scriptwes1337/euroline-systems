import React from 'react';
import { Nav } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer';

const Careers = () => {
  return (
    <>
    <Nav />
      <main style={{ maxWidth: 800, margin: "0 auto", padding: "2rem" }}>
        <h1>Careers</h1>
        <p>
          Join our team and help us build innovative solutions for our clients.
          We are always looking for talented and passionate individuals.
        </p>

        <section style={{ marginTop: "2rem" }}>
          <h2>Open Positions</h2>
          <p>There are currently no open positions available.</p>
          {/* <ul>
            <li>
              <strong>Software Engineer</strong>
              <p>
                Work with our development team to build scalable web
                applications.
              </p>
            </li>
            <li>
              <strong>UI/UX Designer</strong>
              <p>
                Design user-friendly interfaces and improve user experience
                across our products.
              </p>
            </li>
            <li>
              <strong>Project Manager</strong>
              <p>
                Lead projects and coordinate between clients and our technical
                teams.
              </p>
            </li>
          </ul> */}
        </section>

        <section style={{ marginTop: "2rem" }}>
          <h2>How to Apply</h2>
          <p>
            Send your resume and a brief cover letter to{" "}
            <a href="mailto:eurolinesystems@eurolinesystems.com">
              eurolinesystems@eurolinesystems.com
            </a>
            .
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Careers;