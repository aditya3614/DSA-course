'use client'
import { useState } from 'react';
import {BsRobot} from 'react-icons/bs';
import TypingAnimation from '@/app/Component/TypingAnimation';
import { buttonVariants } from '@/components/ui/button';


const ChatInterface = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = async () => {
    // Add the user's message to the chat history
    const userMessage = { role: 'user', content: inputMessage };
    setMessages([...messages, userMessage]);

    // Call your API to generate a response
    const response = await fetch('/api/generate-answer', {
      method: 'POST',
      body: JSON.stringify({ message: inputMessage }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    // Add the AI's response to the chat history
    const aiResponse = { role: 'ai', content: data.response };
    setMessages((prevMessages) => [...prevMessages, aiResponse]); 

    // Clear the input message
    setInputMessage('');
  };

  return (
    <div className="flex flex-col h-[80vh]">
        <div className='text-center'>
        <h2 className='z-0 '>Ask AI about topics you are lacking in</h2>
        </div>
      <div className="flex-grow p-4 border bg-neutral-50">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`px-2 py-1 z-10 rounded ${msg.role === 'user' ? 'bg-blue-400 text-white' : 'bg-indigo-500 rounded text-white mt-4 px-4'} `}>
              {msg.content}
            </span>
            
            
          </div>
        ))}
        
      </div>
     
      <div className="p-4 border-t-2 border-current flex flex-col items-center ">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
          className="w-full p-2 border-2 border-current rounded"
        />
        <div className='mt-8'>
        <button onClick={handleSendMessage} className={buttonVariants()}>
          Send
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default ChatInterface;
