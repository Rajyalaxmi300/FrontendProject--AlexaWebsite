export default function ApplyForm() {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-center mb-4">Apply for Alexa Developers SRM</h2>
          
          {/* Form Fields */}
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Enter your full name" />
            </div>
  
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input type="email" className="w-full px-4 py-2 border rounded-lg" placeholder="Enter your email" />
            </div>
  
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Year of Study</label>
              <select className="w-full px-4 py-2 border rounded-lg">
                <option>First Year</option>
                <option>Second Year</option>
              </select>
            </div>
  
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    );
  }
  