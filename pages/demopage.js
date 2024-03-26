// pages/demo.js

const DemoPage = () => {
    return (
      <div className="bg-gray-100 min-h-screen flex justify-center items-left">
        <div className="bg-white p-8 rounded shadow-md">
          <h1 className="text-2xl font-bold text mb-4 bg-red">Tailwind CSS Demo Page</h1>
          <p className="text-lg text-gray-700">Welcome to this demo page!</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Click me</button>
        </div>
      </div>
    );
  };
  
  export default DemoPage;
  