import React from 'react';
import ChartSection from './ChartSection';

function WebsiteOverview() {
    return (
        <>
            <div className='cwrapper'>
                <div className="row smtb-70">
                    <h1 className='mb-0'>Website Overview</h1>
                    <p className='st-color mb-4'>A Comprehensive Look at What We Offer</p>
                    <div className="col-12 col-lg-6">
                        <p>Our Overview section presents a clear and structured visualization of key website aspects, making it easier for users to understand engagement and content distribution. It provides insights into user activity and the platform's content landscape. This interactive representation allows users to explore different sections effortlessly, enhancing their understanding of the website's performance. By breaking down essential elements, it offers a concise yet comprehensive overview.</p>
                        <ul> 
                            <li className='mb-2'>Displays overall user activity and engagement levels.</li> 
                            <li className='mb-2'>Highlights the number of active users and new sign-ups.</li> 
                            <li className='mb-2'>Showcases the distribution of content, including blogs and services.</li> 
                            <li className='mb-2'>Helps users navigate and interact with different sections.</li> 
                            <li className='mb-2'>Provides a structured and insightful view of website performance.</li> </ul>
                    </div>
                    <div className="col-12 col-lg-6">
                        <ChartSection />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WebsiteOverview