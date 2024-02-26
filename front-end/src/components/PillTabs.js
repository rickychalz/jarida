import React from 'react';

const TopicTags = () => {
  const topics = ["Topic 1", "Topic 2", "Topic 3", "Topic 4"];

  return (
    <div className="flex">
      {topics.map((topic, index) => (
        <div
          key={index}
          className="cursor-pointer py-1 px-2 border border-blue-500 rounded-full mr-2 text-blue-500"
        >
          {topic}
        </div>
      ))}
    </div>
  );
};

export default TopicTags;
