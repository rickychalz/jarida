import React from 'react'

const LimitWords = ({text, limit}) => {
    const truncatedText = text.split('').slice(0, limit).join('');
  return (
    <div>
        {truncatedText}
        {text.split('').length > limit && '...'}
    </div>
  )
}

export default LimitWords