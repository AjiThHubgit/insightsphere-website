import React, { useEffect } from "react";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css"; // Import the CSS
import { CiPlay1 } from "react-icons/ci";

const VideoPopupSection = () => {
  useEffect(() => {
    const videoTwo = GLightbox({
      selector: ".glightbox",
      type: "video",
      source: "youtube",
      width: 900,
      autoplayVideos: true,
    });

    return () => videoTwo.destroy(); // Cleanup on unmount
  }, []);

  return (
    <section className="video-area video-one smtb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12">
            <div className="video-title text-center">
              <h1>A Productivity Powerhouse for Your Website</h1>
              <h4>Enhance efficiency with simple, flexible, and powerful tools. Use boards, lists, and cards to organize tasks, track progress, and streamline workflows—all in one place.</h4>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="video-content text-center">
              <img
                src="https://cdn.ayroui.com/1.0/images/video/video.png"
                alt="Video"
              />
              <a
                className="video-popup glightbox"
                href="https://www.youtube.com/watch?v=NJbXptdalP0"
              >
                <CiPlay1 />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPopupSection;
