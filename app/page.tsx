import { AboutMe, ProfessionalExperience } from "@/sections";
import { aboutMe, skills, professionalData } from "@/data/page-data";

export default function Home() {
  return (
    <div className="">
      <AboutMe data={aboutMe} skills={skills} />
      <ProfessionalExperience data={professionalData} />
    </div>
  );
}
