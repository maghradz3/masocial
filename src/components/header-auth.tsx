"use client";

import {
  NavbarItem,
  Tooltip,
  Button,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { FcGoogle } from "react-icons/fc";

import { useSession } from "next-auth/react";
import * as actions from "@/actions";

export default function HeaderAuth() {
  const session = useSession();

  let authContent: React.ReactNode;
  if (session.status === "loading") {
    authContent = "";
  } else if (session.data?.user) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar src={session.data?.user.image || " "} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form action={actions.signOut}>
              <Button type="submit">Sign Out</Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Tooltip content="Log In with Google" closeDelay={100}>
              <Button isIconOnly type="submit" variant="light">
                <FcGoogle className=" w-5 h-5 md:w-10 md:h-10" />
              </Button>
            </Tooltip>
          </form>
        </NavbarItem>
      </>
    );
  }
  return authContent;
}
