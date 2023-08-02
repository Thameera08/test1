import React from 'react'
import './topicbox.css'

export default function TopicBox() {
    const topic = "Topic Page"
  return (
    <div>
      <div className="topicBox">
         <span className='text'>{topic}</span>
        </div>
    </div>
  )
}
