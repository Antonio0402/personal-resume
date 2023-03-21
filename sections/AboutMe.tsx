import { AboutMe, SkillProps } from "@/data/page-data";
import { Skills } from "@/components";

const AboutMe = ({ data, skills }: { data: AboutMe; skills: SkillProps }) => {
  const { title, body } = data;

  return (
    <section>
      <h2 className="uppercase text-slate-700 mb-8">{title}</h2>
      {body.map((item, idx) => (
        <p key={idx} className="my-6">
          {item}
        </p>
      ))}
      <Skills data={skills} />
    </section>
  );
};

export default AboutMe;
