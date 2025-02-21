import React from 'react';
import { IoPlayCircleOutline } from "react-icons/io5";

function HeroSection() {
  return (
    <>
      <section className='hero-section-wrapper'>
        <div className='cwrapper' style={{ paddingTop: '120px' }}>
          <div className="row">
            <div className="col-12 col-lg-6 pb-5">
              <h1 className='mb-3'>Streamline Your Workflow & Boost Productivity</h1>
              <p className='mb-4'>Manage tasks, collaborate seamlessly, and keep everything organized in one powerful platform.</p>

              <form className="mb-3 d-block d-md-flex flex-wrap gap-3">
                <div className='mb-3'>
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
                <div>
                  <button type="button" className="cb btn btn-primary hbgb me-3">Get Started for Free</button>
                </div>
              </form>

              <div className="watch-demo">
                <button type='button'>Watch Demo <IoPlayCircleOutline className='fs24 ms-1 h-0' /></button>
              </div>

            </div>
            <div className="col-12 col-lg-6 img-wrapper">
                <img src='https://images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png?w=2280&fm=webp' alt='hero image'/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection;
