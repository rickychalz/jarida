import React, { useState, useEffect } from 'react';
import NoDataImage from '../../assets/noData.png'; // Import your "No Data" image
import Post from '../../components/Post';

const HistoryFeed = () => {
  const [contentAvailable, setContentAvailable] = useState(false);

  // Assume some logic that determines if content is available
  // For this example, we'll assume there is no content available
  // You would replace this with your actual logic
  const checkContentAvailability = () => {
    setContentAvailable(false); // Set contentAvailable to false to simulate no data
  }

  // Check content availability when component mounts
  useEffect(() => {
    checkContentAvailability();
  }, []);

  return (
    <div className="mx-0 md:mx-4 flex flex-col gap-5 pb-8 ">
      {contentAvailable ? (
        // Render content if available
        <Post/>
      ) : (
        // Render "No Data" image if no content available
        <div className='flex items-center justify-center h-screen'>
        <img src={NoDataImage} alt="No Data Available" className="w-56 h-56" />
        </div>
      )}
    </div>
  );
};

export default HistoryFeed;
