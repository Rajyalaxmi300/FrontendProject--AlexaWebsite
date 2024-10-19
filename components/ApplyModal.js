import { useState } from 'react';

export default function ApplyModal({ isOpen, closeModal }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-600 text-xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold text-center mb-4 text-green-500">
          Apply Now
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-700">Why do you want to join?</label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              rows="4"
              placeholder="Your answer"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-all duration-300"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
