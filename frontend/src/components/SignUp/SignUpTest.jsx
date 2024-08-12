import React, { useState } from 'react';

const SignUpTest = () => {

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Student Sign Up Form */}
      {role === 'student' && (
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h2 className="text-xl font-bold mb-4">Student Sign Up</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input type="email" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Sign Up as Student
            </button>
          </form>
        </div>
      )}

      {/* Parent Sign Up Form */}
      {role === 'parent' && (
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h2 className="text-xl font-bold mb-4">Parent Sign Up</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Child's Name</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md">
              Sign Up as Parent
            </button>
          </form>
        </div>
      )}

      {/* Back Button to Re-select Role */}
      {role && (
        <button
          className="mt-4 text-gray-500 underline"
          onClick={() => setRole(null)}
        >
          Choose a Different Role
        </button>
      )}
    </div>
  );
};

export default SignUpTest;
