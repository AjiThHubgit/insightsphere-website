import React from 'react';
import serImg from '../../../images/service1.webp';

function Service() {
  return (
    <>
      <div className='service-wrapper cfwrapper'>
        <div className='row cwrapper'>
          <h1 className='mb-0'>Our Services</h1>
          <p className='st-color mb-4'>Enhancing Digital Experiences with Data-Driven Insights</p>

        
            <div className='col-12 col-md-6 col-lg-4 mb-4 mb-lg-0 d-flex'>
              <div className='card-bs flex-grow-1'>
                <div className='img-wrapper'>
                  <img src={serImg} alt="service img" />
                </div>
                <div className='content-wrapper'>
                  <h4 className='font600'>Content Performance Analytics</h4>
                  <p className='p-medium mb-0'>
                    Get in-depth insights into your blog and content performance. Track views, engagement, and SEO effectiveness in real-time.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-12 col-md-6 col-lg-4 mb-4 mb-lg-0 d-flex'>
              <div className='card-bs flex-grow-1'>
                <div className='img-wrapper'>
                  <img src={serImg} alt="service img" />
                </div>
                <div className='content-wrapper'>
                  <h4 className='font600'>User Engagement & Feedback</h4>
                  <p className='p-medium mb-0'>
                    Analyze user comments, ratings, and interactions to improve your content strategy and enhance user experience.
                  </p>
                </div>
              </div>
            </div>

            <div className='col-12 col-md-6 col-lg-4 mb-4 mb-lg-0 d-flex'>
              <div className='card-bs flex-grow-1'>
                <div className='img-wrapper'>
                  <img src={serImg} alt="service img" />
                </div>
                <div className='content-wrapper'>
                  <h4 className='font600'>SEO & Performance Optimization</h4>
                  <p className='p-medium mb-0'>
                    Monitor your website's SEO rating, keyword rankings, and traffic trends to stay ahead of the competition.
                  </p>
                </div>
              </div>
            </div>

        </div>
      </div>
    </>
  );
}

export default Service;
