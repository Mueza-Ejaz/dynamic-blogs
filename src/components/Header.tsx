"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ModeToggle } from "@/components/drop";
import { Button } from "@/components/ui/button";
import { CircleUserRound, FileText, House, Info } from "lucide-react";
import { UserButton } from '@clerk/clerk-react';
import { useUser } from '@clerk/clerk-react';

const Header = () => {
  const { user } = useUser();

  return (
    <header className="mb-8 h-[65px] bg-transparent backdrop-blur-md shadow-md sticky top-0 z-50 caret-transparent dark:border-b-[1px] border-gray-600 flex items-center justify-center">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-0">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600 dark:text-white hover:text-black">
          <Link href="/">MeezBlog</Link>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-6 font-semibold">
          <Link href="/" className=" hover:text-blue-600">
            <span className="flex gap-1 justify-center items-center">
              <House className="text-blue-600 dark:text-white" />
              Home
            </span>
          </Link>
          <Link href="/about" className=" hover:text-blue-600">
            <span className="flex gap-1 justify-center items-center">
              <Info className="text-blue-600 dark:text-white" />
              About
            </span>
          </Link>

          <Link href="/blogs" className=" hover:text-blue-600">
            <span className="flex gap-1 justify-center items-center">
              <FileText className="inline text-blue-600 dark:text-white" />
              Blogs
            </span>
          </Link>

          <Link href="/contact" className=" hover:text-blue-600">
            <span className="flex gap-1 justify-center items-center">
              <CircleUserRound className="text-blue-600 dark:text-white" />
              Contact
            </span>
          </Link>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex gap-2 items-center">
          {!user ? (
            // Static Sign-In Button
            <Button
              className="bg-blue-600 dark:bg-white cursor-not-allowed"
              onClick={(e) => e.preventDefault()}
            >
              Sign In
            </Button>
          ) : (
            <div className="flex justify-center items-center gap-2">
              <p className="text-xl font-semibold text-blue-600 border-b border-black">
                {user?.firstName}
              </p>
              <UserButton />
            </div>
          )}

          <ModeToggle />
        </div>

        <Sheet>
          <SheetTrigger className="md:hidden flex items-center justify-between space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <div className="flex justify-between items-center mt-14">
                  <strong className="text-2xl">MeezBlogs</strong>
                  <ModeToggle />
                </div>
              </SheetTitle>

              <SheetDescription>
                <div className="px-4 pb-3 text-xl font-semibold flex flex-col items-center gap-4 mt-10">
                  <Link
                    href="/"
                    className="block text-xl hover:text-blue-600 border-b-2 border-transparent hover:border-[unset]"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="block text-xl hover:text-blue-600 border-b-2 border-transparent hover:border-[unset]"
                  >
                    About
                  </Link>
                  <Link
                    href="/blogs"
                    className="block text-xl  hover:text-blue-600 border-b-2 border-transparent hover:border-[unset]"
                  >
                    Blogs
                  </Link>

                  <Link
                    href="/contact"
                    className="block text-xl  hover:text-blue-600 border-b-2 border-transparent hover:border-[unset]"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/input"
                    className="block text-xl  hover:text-blue-600 border-b-2 border-transparent hover:border-[unset]"
                  >
                    Create Blog
                  </Link>

                  <div className="mt-4 space-y-2">
                    <div className="flex gap-4"></div>
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
