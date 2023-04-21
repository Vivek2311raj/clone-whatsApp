import React from 'react';
import Sidebar from './Sidebar';
import Chatcontainer from './Chatcontainer';
import  "./ChatPage.css";

function ChatPage({currentUser ,signOut}) {
  return (
  
    <div className="chatPage">
      <div className="chatpage-container">
        {/* sidebar */}
      <Sidebar currentUser={currentUser} signOut={signOut}/>
      {/*chatcontainer */}
      <Chatcontainer currentUser={currentUser}/>
      </div>
      </div>
  );
  
}

export default ChatPage;
