"use client";

import { AiFillGithub } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { FaDiceD20 } from "react-icons/fa";

import { Link } from "./link";
import { siteConfig } from "@/config/site";
import { ScaylartLogo } from "./ui/scaylart-logo";
import clsx from "clsx";
import { useEffect, useState } from "react";

export const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    setHasScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="pointer-events-none fixed top-6 z-30 grid w-full grid-cols-[1fr,min(730px,100%),1fr] px-4">
      <nav
        className={clsx(
          "pointer-events-auto col-start-2 -mx-px rounded-2xl bg-background-100 transition-all duration-300",
          {
            "px-1 py-1": !hasScrolled,
            "border-[1px] border-background-800 px-4 py-2.5": hasScrolled,
          },
        )}
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center justify-between space-x-1"
          >
            <ScaylartLogo className="size-8" />
            <span className="transition-all duration-300 ease-out group-hover:text-background-700">
              Scaylart.Dev
            </span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/profile" size="sm" leftIcon={<FaDiceD20 />}>
              <span className="transition-all duration-300 ease-out group-hover:text-background-700">
                My Profile
              </span>
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
        </div>
      </nav>
    </header>
  );
};
