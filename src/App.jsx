import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-green p-6">
        <h1 className="text-3xl font-bold underline text-white">
          Hello, Tailwind
        </h1>
      </div>
    </>
  );
}

export default App;
