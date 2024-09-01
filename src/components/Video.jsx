import React, { useRef } from 'react'

const Video = ({ src, width, height }) => {
    const videoRef = useRef(null);

  const handleResize = () => {
    const video = videoRef.current;
    const parentWidth = video.parentElement.clientWidth;
    const aspectRatio = video.videoWidth / video.videoHeight;
    const videoHeight = parentWidth / aspectRatio;
    video.style.height = videoHeight + 'px';
  };
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <video
        ref={videoRef}
        src={src}
        width={width}
        height={height}
        onLoadedMetadata={handleResize}
        onResize={handleResize}
      />
    </div>
  )
}

export default Video
