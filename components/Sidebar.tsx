import { PersonalData } from "@/data/page-data";
import { Envelope, Twitter, Linkedin, Medium } from "@/icons";
import Image from "next/image";
import Link from "next/link";

const Sidebar = ({ data }: { data: PersonalData }) => {
  const { name, role, education, contactLinks } = data;
  return (
    <div className="bg-slate-700 grid w-full sm:w-1/3 sm:h-screen content-between sm:fixed sm:content-around">
      <div className="flex flex-col text-center gap-2 p-10 items-center text-white">
        <Image
          priority
          src="/images/porfolio-logo.jpg"
          alt="porfolio-avatar"
          aria-label="porfolio-avartar"
          width={300}
          height={300}
          className="rounded-full h-full object-contain mb-4"
        />
        <h1>{name}</h1>
        <h2 className="mb-6">{role}</h2>
        <p>{education[0]}</p>
        <p>{education[1]}</p>
        <div className="text-center py-2 sm:pt-6 space-y-2">
          <h3>CONTACT ME</h3>
          <div className="grid grid-flow-col gap-2">
            <Link
              href={contactLinks[0]}
              aria-label="email link"
              className="text-2xl m-2"
            >
              <Envelope className={""} />
            </Link>
            <Link
              href={contactLinks[1]}
              aria-label="twitter link"
              className="text-2xl m-2"
            >
              <Twitter className={""} />
            </Link>
            <Link
              href={contactLinks[2]}
              aria-label="linkedin link"
              className="text-2xl m-2"
            >
              <Linkedin className={""} />
            </Link>
            <Link
              href={contactLinks[3]}
              aria-label="medium link"
              className="text-2xl m-2"
            >
              <Medium className={""} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
