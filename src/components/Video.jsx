import React from 'react';
import '../../public/assets/css/videogrid.css'; // Import your CSS file
import { videos } from '../data/HomeTwoData/HomeTwoData';

const Video = ({ videos }) => {
  return (
    <div className="video-container Container">
      <div  className='Row'>
        {videos.map((video, index) => (
          <div className='Col' key={index} xs={6} md={3}>
            <video width="100%" controls>
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;