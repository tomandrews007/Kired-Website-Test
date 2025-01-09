import React from 'react';

    function App() {
      return (
        <div>
          <header>
            <div className="container">
              <h1>Kired</h1>
              <nav>
                <ul>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </nav>
            </div>
          </header>

          <section className="hero">
            <div className="container">
              <h2>Welcome to Kired</h2>
              <p>Your Digital Marketing Partner for SEO and AI SEO</p>
            </div>
          </section>

          <section id="services" className="services">
            <div className="container">
              <h3>Our Services</h3>
              <ul>
                <li>SEO Strategy</li>
                <li>AI SEO Optimization</li>
                <li>Content Marketing</li>
                <li>Technical SEO</li>
                <li>Link Building</li>
              </ul>
            </div>
          </section>

          <section id="about" className="about">
            <div className="container">
              <h3>About Us</h3>
              <p>Kired is a digital marketing agency specializing in SEO and AI SEO. We help businesses improve their online visibility and reach their target audience through effective strategies and innovative solutions. Our team of experts is dedicated to delivering results and driving growth for our clients.</p>
            </div>
          </section>

          <section id="contact" className="contact">
            <div className="container">
              <h3>Contact Us</h3>
              <form>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea placeholder="Your Message"></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </section>
        </div>
      );
    }

    export default App;
