import { ProfessionalData } from "@/data/type";
import React from "react";

const ProfessionalExperience = ({ data }: { data: ProfessionalData }) => {
  const { title, experiences } = data;
  return (
    <section>
      <h2 className="mb-6 uppercase">{title}</h2>
      <div className="grid gap-6">
        {experiences.map(({ role, description, current }, idx) => (
          <div key={idx} className="grid rounded-lg">
            <span
              className={`h-2 ${current ? "bg-green-400" : "bg-gray-400"}`}
            />
            <div className="bg-grey-light p-6 drop-shadow-md space-y-2">
              <h3>{role}</h3>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalExperience;
