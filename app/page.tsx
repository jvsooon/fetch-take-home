'use client'

import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import React from "react";
import { useAuth } from "./lib/api/auth";

export default function Home() {
  const [action, setAction] = React.useState(null);
  const { login } = useAuth();

  const handleLogin = async (data: { [x: string]: FormDataEntryValue; name?: any; email?: any; }) => {
    // e.preventDefault();
    await login(data.name, data.email);
  };

  return (
    <section className="flex justify-center items-center h-full">
      <Form
        className="flex flex-col gap-4 w-full max-w-xs"
        // onReset={() => setAction()}
        onSubmit={(e) => {
          e.preventDefault();
          let data = Object.fromEntries(new FormData(e.currentTarget));
          // console.log(e.target)
          handleLogin(data)
        }}
      >
        <Input
          isRequired
          label="Name"
          labelPlacement="outside"
          name="name"
          placeholder="Enter your name"
          type="text"
        />

        <Input
          isRequired
          label="Email"
          labelPlacement="outside"
          name="email"
          placeholder="Enter your email"
          type="email"
        />
        <div className="flex justify-center w-full">
          <Button color="primary" type="submit">
            Log In
          </Button>
        </div>
        {action && (
          <div className="text-small text-default-500">
            Action: <code>{action}</code>
          </div>
        )}
      </Form>

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
