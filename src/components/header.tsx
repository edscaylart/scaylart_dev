import { AiFillGithub } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";

import { Link } from "./link";
import { siteConfig } from "@/config/site";
import { ScaylartLogo } from "./ui/scaylart-logo";

export const Header = () => {
  return (
    <div className="pointer-events-none fixed top-6 z-30 grid w-full grid-cols-[1fr,min(730px,100%),1fr] px-4">
      <nav className="pointer-events-auto col-start-2 -mx-px rounded-2xl border-[1px] border-background-800 bg-background-100 px-4 py-2.5">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center justify-between space-x-1"
          >
            <ScaylartLogo className="size-8" />
            {/* <span>Scaylart.Dev</span> */}
          </Link>
          <div className="flex items-center space-x-3">
            <Link
              href={siteConfig.githubUrl}
              external
              leftIcon={<AiFillGithub />}
              variant="icon-button"
            />
            <Link
              href={siteConfig.linkedinUrl}
              external
              leftIcon={<GrLinkedinOption />}
              variant="icon-button"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};
