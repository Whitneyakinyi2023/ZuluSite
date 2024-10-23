import React, { useState } from 'react';
import './chat.css';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const handleSendMessage = () => {
        if (input.trim()) {
            const newMessages = [...messages, { sender: "You", text: input }];
            setMessages(newMessages);
            setInput("");

            setTimeout(() => {
                const botResponse = generateResponse(input);
                setMessages([...newMessages, { sender: "Bot", text: botResponse }]);
            }, 500);
        }
    };

    const generateResponse = (message) => {
        let response = "I'm not sure what you mean.";
        if (message.toLowerCase().includes("hello")) {
            response = "Hello! How can I assist you?";
        } else if (message.toLowerCase().includes("menu")) {
            response = "You can check out our drinks menu!";
        } else if (message.toLowerCase().includes("location")) {
            response = "We are located at Mirema Drive and Mirema Road.";
        }
        return response;
    };

    return (
        <div className="chat-wrapper">
            <div className="chat-container">
                <div className="chat-header">
                    <h3>Chat with us!</h3>
                </div>
                <div className="chat-box">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.sender === 'Bot' ? 'bot' : 'user'}`}>
                            <strong>{msg.sender}:</strong> {msg.text}
                        </div>
                    ))}
                </div>
                <div className="chat-input">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type a message..."
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Chat;
