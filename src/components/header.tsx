"use client";
import Link from "next/link";
import { Suspense } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarContent,
} from "@nextui-org/react";
import HeaderAuth from "./header-auth";
import SearchInput from "./search-input";
import { ThemeSwitcher } from "./ThemeSwitcher";

import { FaPeopleGroup } from "react-icons/fa6";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

export default function Header() {
  return (
    <Navbar
      maxWidth="full"
      isBlurred={true}
      className="bg-#001731 shadow  dark:shadow w-screen py-3  md:px-4 md:py-6 "
    >
      <motion.div
        variants={fadeIn("down", 0.6)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className=" w-full  flex  items-center    "
      >
        <NavbarContent justify="start">
          <NavbarBrand>
            <Link
              className="flex flex-col md:flex-row justify-center items-center gap-1 text-md md:text-2xl"
              href="/"
            >
              <FaPeopleGroup />
              <h1>MaSocial</h1>
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
      </motion.div>
    </Navbar>
  );
}
