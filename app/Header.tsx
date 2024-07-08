"use client"
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            {/* You can add a logo here */}
            {/* <Image src="/logo.png" alt="FrontForumFocus Logo" width={40} height={40} /> */}
            <h1 className="ml-2 text-xl font-bold text-gray-800">frontforumfocus</h1>
          </div>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/reports" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
                  Impact Reports
                </Link>
              </li>
              {/* Add more navigation items as needed */}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}