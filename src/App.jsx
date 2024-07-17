import { useState } from "react";
import { ArrowDown } from "./assets/arrowDown";
import { MessageIcon } from "./assets/messageIcon";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectValue, setSelectValue] = useState("Option 1");

  function updateValue(value) {
    setSelectValue((v) => (v = value));
    setIsOpen(false);
  }

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

      {/** GRID >>>>>>>>>>>>>>>>>>>>>*/}
      {/* <div className="h-screen text-white Parent bg-slate-900">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10">
            <div className="p-6 rounded-lg bg-sky-500 col-span-2">
              First Column
            </div>
            <div className="p-6 rounded-lg bg-sky-500 col-span-2">
              Second Column
            </div>
            <div className="p-6 rounded-lg bg-sky-500 col-span-3">
              Third Column
            </div>
            <div className="p-6 rounded-lg bg-sky-500">Fourth Column</div>
            <div className="p-6 rounded-lg bg-sky-500">Fifth Column</div>
            <div className="p-6 rounded-lg bg-sky-500 col-span-3">
              Sixth Column
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="Parent h-screen text-white bg-slate-800">
        <div className="container mx-auto">
          <div className="grid grid-flow-col grid-rows-3 gap-4">
            <div className="p-6 rounded-lg bg-sky-500">01</div>
            <div className="p-6 rounded-lg bg-sky-500">02</div>
            <div className="p-6 rounded-lg bg-sky-500">03</div>
            <div className="p-6 rounded-lg bg-sky-500">04</div>
            <div className="p-6 rounded-lg bg-sky-500">05</div>
            <div className="p-6 rounded-lg bg-sky-500">06</div>
          </div>
        </div>
      </div> */}
      {/* <div className="Parent h-screen text-white bg-slate-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-3 grid-rows-3 gap-4 grid-flow-row-dense">
            <div className="p-6 rounded-lg bg-sky-500 col-span-2">01</div>
            <div className="p-6 rounded-lg bg-sky-500 col-span-2">02</div>
            <div className="p-6 rounded-lg bg-sky-500">03</div>
            <div className="p-6 rounded-lg bg-sky-500 col-span-2">04</div>
            <div className="p-6 rounded-lg bg-sky-500 row-span-2">05</div>
            <div className="p-6 rounded-lg bg-sky-500">06</div>
          </div>
        </div>
      </div> */}

      {/** LAYOUT >>>>>>>>>>>>>>>>>>>>>*/}

      {/* <div className="h-screen text-white bg-slate-800">
        <div className="container bg-red-500 p-6">
          <h1>Hello</h1>
        </div>
      </div> */}

      {/* <div className="h-screen text-white bg-slate-800">
        <div className="container columns-lg">
          <img
            src="https://images.pexels.com/photos/26926255/pexels-photo-26926255/free-photo-of-after-the-rains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            srcset=""
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit minima
            repudiandae accusamus officiis at quam et qui id. A, accusamus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            culpa cumque corporis nobis perferendis, et aperiam repellendus
            earum voluptatem doloribus quia, eum est odit. Impedit expedita
            ullam ab accusantium illo!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita, assumenda nobis non minus debitis optio laudantium at!
            Provident commodi hic, possimus recusandae suscipit placeat iure.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit minima
            repudiandae accusamus officiis at quam et qui id. A, accusamus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            culpa cumque corporis nobis perferendis, et aperiam repellendus
            earum voluptatem doloribus quia, eum est odit. Impedit expedita
            ullam ab accusantium illo!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            expedita, assumenda nobis non minus debitis optio laudantium at!
            Provident commodi hic, possimus recusandae suscipit placeat iure.
          </p>
        </div>
      </div> */}

      {/* <div className="h-screen Parent text-white bg-slate-800">
        <div className="container px-2">
          <div className="relative bg-red-500 p-8 rounded-lg w-32 h-32">
            <div className="w-24 h-24 bg-green-500 rounded-lg absolute top-0"></div>
          </div>
        </div>
      </div> */}

      {/* <div className="h-screen text-white bg-slate-800">
        <div className="container py-2 flex ">
          <div className="h-16 w-16 z-30 bg-green-500 rounded-full text-center border-4 -mr-4 border-slate-800">
            01
          </div>
          <div className="h-16 w-16 z-20 bg-green-500 rounded-full text-center border-4 -mr-4 border-slate-800">
            02
          </div>
          <div className="h-16 w-16 z-10 bg-green-500 rounded-full text-center border-4 -mr-4 border-slate-800">
            03
          </div>
          <div className="h-16 w-16 z-0 bg-green-500 rounded-full text-center border-4 -mr-4 border-slate-800">
            04
          </div>
        </div>
      </div> */}

      {/* BORDERS >>>>>>>>>>>>>>>>> */}
      {/* <div className="h-screen text-white Parent bg-slate-800">
        <div className="container">
          <header className="w-full border-b py-4">Header</header>
        </div>
      </div> */}
      {/* <div className="h-screen text-white bg-slate-800">
        <div className="container">
          <div className="divide-y divide-blue-100 ">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </div>
      </div> */}

      {/* <div className="h-screen text-white bg-slate-800">
        <div className="container">
          <input
            type="text"
            className="outline outline-0 text-black p-2 rounded-sm shadow-md shadow-red-500/50 my-2"
          />
        </div>
      </div> */}

      {/* Cards >>>>>>>>>> */}
      {/* <div className="h-screen Parent bg-white py-3">
        <div className="container bg-white grid grid-cols-3 space-x-2">
          <div className="border border-l-8 border-l-green-600 rounded-lg shadow-md p-4">
            <img
              src="https://images.pexels.com/photos/2820906/pexels-photo-2820906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className=" saturate-150 rounded-md"
            />
            <h1 className="text-xl font-bold">James</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              excepturi.
            </p>
            <button className="transition ease-in-out hover:translate-y-1 bg-green-500 py-3 px-8 mt-3 text-white rounded-md hover:shadow-lg hover:shadow-green-400/50 ">
              Add
            </button>
          </div>
          <div className="border border-l-8 border-l-green-600 rounded-lg shadow-md p-4">
            <img
              src="https://images.pexels.com/photos/2820906/pexels-photo-2820906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className=" saturate-150 rounded-md"
            />
            <h1 className="text-xl font-bold">Anthony</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              excepturi.
            </p>
            <button className="transition ease-in-out hover:translate-y-1 bg-green-500 py-3 px-8 mt-3 text-white rounded-md hover: shadow-lg hover:shadow-green-400/50 ">
              Add
            </button>
          </div>
          <div className="border border-l-8 border-l-green-600 rounded-lg shadow-md p-4">
            <img
              src="https://images.pexels.com/photos/2820906/pexels-photo-2820906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className=" saturate-150 rounded-md"
            />
            <h1 className="text-xl font-bold">Kobe</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
              excepturi.
            </p>
            <button className="transition ease-in-out hover:translate-y-1 bg-green-500 py-3 px-8 mt-3 text-white rounded-md hover: shadow-lg hover:shadow-green-400/50 ">
              Add
            </button>
          </div>
        </div>
      </div> */}

      {/* Design Systems >>>>>>>>>>> */}
      {/* <div>
        <div className="Select">
          <div
            className="child flex items-center justify-between"
            onClick={() => setIsOpen((o) => (o = !isOpen))}
          >
            <span>{selectValue}</span>
            <div
              className={
                isOpen
                  ? "rotate-180 transition delay-75 duration-150"
                  : "rotate-0 transition delay-75 duration-150"
              }
            >
              <ArrowDown />
            </div>
          </div>
          {isOpen && (
            <div>
              <ul className="flex flex-col divide-y border-t">
                <li className="child" onClick={() => updateValue("Option 1")}>
                  Option 1
                </li>
                <li className="child" onClick={() => updateValue("Option 2")}>
                  Option 2
                </li>
                <li className="child" onClick={() => updateValue("Option 3")}>
                  Option 3
                </li>
              </ul>
            </div>
          )}
        </div>
        <h1>This is a title/H1</h1>
        <h2>This is a subtitle/H2</h2>
        <p>This is a paragraph</p>
        <a href="#">This is an anchor</a>
        <div>
          <button>This is a standard button</button>
        </div>
        <div>
          <button disabled>This is a disabled button</button>
        </div>
        <div>
          <button className="btn-primary">This is a primary button</button>
        </div>
        <div>
          <button className="btn-secondary">This is a seconday button</button>
        </div>
        <div>
          <input type="text" placeholder="E-mail" />
        </div>
        <div>
          <input disabled type="text" placeholder="E-mail" />
        </div>
        <div>
          <input type="date" />
        </div>
        <div>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Checkbox</label>
        </div>
        <div className="flex items-start">
          <input type="checkbox" id="paragraph" />
          <label htmlFor="paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            atque qui, dignissimos est neque voluptatibus autem, accusamus quae
            sequi porro facere dicta necessitatibus quas quam cupiditate hic
            libero assumenda praesentium! Aspernatur magnam incidunt veritatis
            illo ab, aut sed perferendis consequatur beatae ullam nam dolores a.
          </label>
        </div>
        <div>
          <select>
            <option>Value 1</option>
            <option>Value 2</option>
          </select>
        </div>
      </div> */}

      {/* Core Concept */}

      <div className="p-4 m-2 rounded-xl bg-white text-black flex  items-center shadow-lg space-x-4 max-w-sm">
        <div className="drop-shadow-lg shrink-0">
          <MessageIcon />
        </div>
        <div>
          <div className="font-semibold text-2xl">ChitChat</div>
          <p className="text-slate-700">You have a new message!</p>
        </div>
      </div>
    </>
  );
}

export default App;
