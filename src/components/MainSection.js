import React, { useState } from "react";
import Data from "../components/data.json";
import Info from "./Info";

const MainSection = () => {
  const [input, setinput] = useState("");

  return (
    <>
      <div className="flex">
        <div className="w-4/5">
          {Data &&
            Data.filter((val) => {
              if (input === "") {
                return val;
              } else if (val.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())){
                  return val;
              }
            }).map((items) => {
              return (
                <Info
                  id={items.id}
                  email={items.email}
                  album={items.title}
                  name={items.name}
                  website={items.website}
                  img={items.img}
                />
              );
            })}
        </div>
        <div className="w-1/4 m-5">
          <div className="flex flex-col w-48">
            <input
              className="border p-2 text-black-800 "
              type="text"
              placeholder="Enter User  "
              onChange={(e) => setinput(e.target.value)}
            />
          </div>
        </div>
      </div>
      )
    </>
  );
};

export default MainSection;
