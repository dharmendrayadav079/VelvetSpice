import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react'; // Optional icon (install `lucide-react` or use emoji)

const productSuggestions = {
  pizza: ["Onion Pizza","Margherita Pizza","Pepperoni Pizza","Mushroom and Spinach Pizza","BBQ Chicken Pizza", "Paneer Tikka Pizza", "Hot Wings"],
  spicy: ["Spicy Chicken Burger", "Paneer Tikka Pizza", "Hot Wings"],
  sweet: ["Chocolate Shake","Classic Pancakes","Greek Yogurt Parfait","Fruit and Nut Oatmeal", "Vanilla Donut", "Sweet Corn Pizza"],
  veg: ["Veggie Delight","Vegetable Stir-Fry", "Margherita Pizza", "Salad Bowl"]

};

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // 🔁 Toggle state

  const handleSend = () => {
    const userMsg = { from: "user", text: input };
    let botMsg = { from: "bot", text: "Sorry, I didn't understand." };

    for (let keyword in productSuggestions) {
      if (input.toLowerCase().includes(keyword)) {
        botMsg.text = `You might like: ${productSuggestions[keyword].join(", ")}`;
        break;
      }
    }

    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div className="fixed right-0 top-20">
      {/* Chat Icon Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all"
        title={isOpen ? "Close chat" : "Open chat"}
      >
        💬
        {/* Or use: <MessageCircle size={24} /> */}
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div className="w-80 bg-white border shadow-xl rounded p-4 mt-2">
          <h2 className="font-bold mb-2">Ask Me 🤖</h2>
          <div className="h-40 overflow-y-auto mb-2 border p-2 rounded text-sm">
            {messages.map((msg, index) => (
              <div key={index} className={msg.from === "user" ? "text-right" : "text-left"}>
                <p className={msg.from === "user" ? "text-blue-600" : "text-gray-800"}>
                  {msg.text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              placeholder="Type something..."
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow border p-1 rounded"
            />
            <button onClick={handleSend} className="bg-blue-600 text-white px-3 py-1 rounded">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
