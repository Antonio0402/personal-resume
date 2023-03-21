import { AboutMe, ProfessionalExperience } from "@/sections";
import { get } from "@vercel/edge-config";

export default async function Home() {
  const aboutMe = await get("aboutMe");
  const skills = await get("skills");
  const professionalData = await get("professionalData");

  return (
    <div className="">
      <AboutMe data={Object(aboutMe)} skills={Object(skills)} />
      <ProfessionalExperience data={Object(professionalData)} />
    </div>
  );
}
