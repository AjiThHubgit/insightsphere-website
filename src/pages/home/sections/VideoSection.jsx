import React from 'react';
import videoBg from '../../../assets/bd-video.mp4';

function VideoSection() {
    return (
        <>
            <div className="video-wrapper smtb-70 mb-0">
                <video src={videoBg} autoPlay loop muted />
                <div className="text-overlay">
                    {/* Updated Heading: Focused on Data-Driven Digital Solutions */}
                    <h1 className="mb-3">Transform Your Business with Data-Driven Insights</h1>
                    
                    {/* Updated Subtitle: Emphasizing Analytics, AI, and Digital Growth */}
                    <h4 className="mb-3">
                        Unlock the power of AI, analytics, and automation to drive smarter decisions and maximize business growth.
                    </h4>

                    {/* Updated Call-to-Action: Encouraging Users to Get a Consultation */}
                    <button type="button" className="cb btn btn-outline-white">
                        Get a Free Consultation
                    </button>
                </div>
            </div>
        </>
    );
}

export default VideoSection;
