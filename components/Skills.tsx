"use client";

import { SkillProps } from "@/data/page-data";
import { atom, useAtom } from "jotai";

const ActiveTabAtom = atom<string>("soft");

const Skills = ({ data }: { data: SkillProps }) => {
  const [active, setActive] = useAtom(ActiveTabAtom);

  const tab = (
    <div className="flex">
      {["soft", "hard"].map((item, idx) => (
        <button
          key={idx}
          type="button"
          aria-selected={`${active === item}`}
          className={`btn text-right bg-gray-400 ${
            active === item && "!bg-yellow-400"
          } ${active === "soft" && "!text-left"} `}
          onClick={() => setActive(item)}
        >
          {item} Skills
        </button>
      ))}
    </div>
  );
  const content = (
    <ul
      className={`flex flex-wrap content-start list-none py-4 gap-2 justify-end ${
        active === "soft" && "!justify-start"
      }`}
    >
      {data[active as keyof SkillProps].map(({ icon, text }, idx) => (
        <li key={idx} className="bg-green-light text-lg py-2 px-4 rounded-md">
          <span>{icon}</span> {text}
        </li>
      ))}
    </ul>
  );
  return (
    <div>
      {tab}
      {content}
    </div>
  );
};

export default Skills;
