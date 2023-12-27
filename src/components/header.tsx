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

export default function Header() {
  return (
    // <Navbar className="shadow mb-6">
    //   <NavbarBrand>
    //     <Link href="/" className="font-bold">
    //       Discuss
    //     </Link>
    //   </NavbarBrand>
    //   <NavbarContent justify="center">
    //     <NavbarItem>
    //       <Suspense>
    //         <SearchInput />
    //       </Suspense>
    //     </NavbarItem>
    //   </NavbarContent>
    //   <NavbarContent justify="end">
    //     <HeaderAuth />
    //   </NavbarContent>
    // </Navbar>
    <div className="shadow mb-6 flex justify-between items-center px-1 md:px-4">
      <div>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </div>
      <div>
        <div>
          <Suspense>
            <SearchInput />
          </Suspense>
        </div>
      </div>
      <div>
        <HeaderAuth />
      </div>
    </div>
  );
}
