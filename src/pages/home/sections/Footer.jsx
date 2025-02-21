import React from 'react';

function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span>Connect with us on social media:</span>
          </div>
          {/* Left */}

          {/* Right */}
          <div>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
          {/* Right */}
        </section>
        {/* Section: Social media */}

        {/* Section: Links */}
        <section>
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-chart-line me-3"></i> Data Insights Hub
                </h6>
                <p>
                  Empowering businesses with AI-driven analytics, data visualization, and intelligent automation to optimize decision-making and performance.
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Our Solutions</h6>
                <p>
                  <a href="#!" className="text-reset">AI-Powered Analytics</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Data Visualization</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Customer Insights</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">SEO Optimization</a>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
                <p>
                  <a href="#!" className="text-reset">Blog</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Case Studies</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Testimonials</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Support</a>
                </p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
                <p><i className="fas fa-map-marker-alt me-3"></i> 123 Analytics St, Tech City, USA</p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  support@datahub.com
                </p>
                <p><i className="fas fa-phone me-3"></i> +1 234 567 890</p>
                <p><i className="fas fa-headset me-3"></i> 24/7 Customer Support</p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links */}

        {/* Copyright */}
        <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
          © {new Date().getFullYear()} Data Insights Hub. All Rights Reserved.
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>
  );
}

export default Footer;
