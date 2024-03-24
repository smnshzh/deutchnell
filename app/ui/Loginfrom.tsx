
export default function Login (){

    return(
        <div className="bg-gray-100 h-screen flex items-center justify-center">
        
              <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                  <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                  <form action="#" method="POST">
                      <div className="mb-4">
                          <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
                          <input type="text" id="username" name="username" className="w-full px-3 py-2 border rounded-md mt-1 focus:outline-none focus:ring focus:ring-blue-300" required />
                      </div>
                      <div className="mb-6">
                          <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                          <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-md mt-1 focus:outline-none focus:ring focus:ring-blue-300" required />
                      </div>
                      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-300">Login</button>
                  </form>
              </div>
          </div>
  
        
        
        )

}