import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import './Chat.css';

export function Chat(props) {
  const [isChatBoxVisible, setIsChatBoxVisible] = useState('');

  const toggleChatBox = () => {
    setIsChatBoxVisible(!isChatBoxVisible);
  };

  return (
    <div>
      <div className="chat" onClick={toggleChatBox}>
          <FontAwesomeIcon icon={faComment} />
      </div>
      <div className={`chatBox ${isChatBoxVisible ? 'visible' : ''}`}>
        <textarea></textarea>
        <input type="text" className='txCampo' />
      </div>
    </div>
  );
}
export default Chat;