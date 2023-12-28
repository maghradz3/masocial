"use client";
import Link from "next/link";
import { Suspense } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarContent,
  Input,
} from "@nextui-org/react";
import HeaderAuth from "./header-auth";
import SearchInput from "./search-input";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Image from "next/image";
import maLogo from "../../public/masocialLogo.png";
import { FaPeopleGroup } from "react-icons/fa6";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

export default function Header() {
  return (
    <motion.div
      variants={fadeIn("down", 0.6)}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <Navbar
        maxWidth="full"
        isBlurred={true}
        className="bg-#001731 shadow  dark:shadow w-screen dark:shadow-blue-500/50 mb-6 flex  items-center  py-5 md:px-4 "
      >
        <NavbarContent justify="start">
          <NavbarBrand>
            <Link
              className="flex flex-col md:flex-row justify-center items-center gap-1"
              href="/"
            >
              {/* <Image width={80} height={80} src={maLogo} alt="masocial logo" /> */}
              <FaPeopleGroup className=" text-md md:text-2xl" />
              <h1 className=" text-md md:text-2xl">MaSocial</h1>
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent justify="center">
          <NavbarItem>
            <Suspense>
              <SearchInput />
            </Suspense>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent
          justify="end"
          className="flex flex-row justify-center items-center"
        >
          <ThemeSwitcher />
          <HeaderAuth />
        </NavbarContent>
      </Navbar>
    </motion.div>
  );
}
