import React from 'react';

function Query1() {
  return (
    <div className="max-w-2xl mx-auto p-6 sm:p-8">
      <h2 className="text-4xl font-bold mb-6 text-center sm:text-left">Have a Query? Contact Us!</h2>

      <form className="space-y-6">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-xl font-semibold mb-2">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-xl font-semibold mb-2">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Message Input */}
        <div>
          <label htmlFor="message" className="block text-xl font-semibold mb-2">Your Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center sm:justify-start">
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Submit Query
          </button>
        </div>
      </form>
    </div>
  );
}

export default Query1;
