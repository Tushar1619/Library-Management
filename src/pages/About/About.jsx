import React, { useEffect } from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  useEffect(() => {
    scrollHalf();
  }, [])
  function scrollHalf() {
    window.scrollTo(0, document.body.scrollHeight / 3);
  }

  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src={aboutImg} alt="" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BPIT</h2>
            <p className='fs-17'>The BPIT Library Management System is a comprehensive platform designed to streamline and enhance the library experience for students, faculty, and staff at BPIT (Bhagwan Parshuram Institute of Technology). Our library boasts a vast collection of books, journals, and resources that cater to the diverse academic needs of the institution.

              With a user-friendly interface and advanced features, our library management system provides easy access to the library's extensive collection. Students and faculty members can explore and search for books based on various criteria, including title, author, subject, and publication date, ensuring a seamless and efficient search experience.

              Our system implements optimized pagination with lazy loading, allowing users to browse through the library catalog without the inconvenience of long loading times. As users scroll through the list of books, additional results are loaded dynamically, ensuring a smooth and uninterrupted browsing experience.</p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
