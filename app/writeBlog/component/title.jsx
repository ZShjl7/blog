import React from 'react'
import { Michroma, Orbitron, Amiri } from "next/font/google";
const Mac = Michroma({ weight: "400", subsets: ["latin"] });
const Orb = Orbitron({ weight: "400", subsets: ["latin"] });
const Ami = Amiri({ weight: "700", subsets: ["latin"] });

export default function title({ title, settitle }) {
  return (
    <div className={`m-8 text-xl ml-2 ${Orb.className}`}>
          Title
          <input
            onChange={(e) => settitle(e.target.value)}
            name="Title "
            placeholder="Enter the Title"
            value={title}
            className=" ml-5 mb-4 p-2 rounded-md text-black"
          />
        </div>
  )
}