'use client'

import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default function Home() {

  return (
    <section className="flex flex-col gap-4 justify-center items-center py-8 md:py-10">
      
      
      {/* <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div> */}
    </section>
  );
}
