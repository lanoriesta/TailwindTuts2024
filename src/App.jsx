import { useState } from "react";

function App() {
  return (
    <>
      {/* <h1 className="w-1/2 bg-MyGreen md:bg-blue-300 lg:bg-pink-300 text-3xl text-white p-6">
          Hello, Tailwind
        </h1>
        <h1 className="w-1/2 bg-red-300 md:bg-orange-300 lg:bg-purple-300 text-3xl text-white p-6">
          Hello, Tailwind
        </h1> */}
      {/* <div className="flex min-h-screen">
        <div className="w-1/5  bg-red-300">Side Nav</div>
        <div className="w-4/5 h-fit bg-green-300">Main Content</div>
      </div> */}
      {/* <div className="Parent">
        <div className="bg-green-300">Header</div>
        <div className="flex flex-col md:flex-row">
          <div className="basis-3/12 bg-red-300">Side Bar</div>
          <div className="basis-9/12 bg-blue-300">Main Content</div>
        </div>
      </div> */}

      <div class="grid grid-cols-4 gap-4">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div>06</div>
        <div>07</div>
        <div>08</div>
        <div>09</div>
      </div>
    </>
  );
}

export default App;
