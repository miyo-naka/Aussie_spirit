"use client";

import Link from "next/link";
import { useState } from "react";

export function HumbergerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden bg-[#2C5D47] h-10">
      {/* ハンバーガーアイコン */}
      <div className="relative flex justify-between items-center">
        <button
          className="flex flex-col space-y-1 p-3"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block w-6 h-0.5 bg-white transition-transform duration-300"></span>
          <span className="block w-6 h-0.5 bg-white transition-transform duration-300"></span>
          <span className="block w-6 h-0.5 bg-white transition-transform duration-300"></span>
        </button>

        <Link
          href="/blog/20250526_atfirst"
          className="mr-4 text-xs hover:text-yellow-400 transition duration-200 rounded-full bg-[#A6C3B9] px-3 py-1"
        >
          はじめての方はこちら
        </Link>
      </div>
      {/* ドロワーメニュー（スライドイン） */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="bg-amber-50 w-64 h-full p-5">
          <button
            className="text-right w-full"
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>

          {/* メニューリスト */}
          <ul className="space-y-6 mt-6 text-[#2C5D47] text-lg font-bold">
            <li>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-400 transition duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/story"
                className="hover:text-yellow-400 transition duration-200"
              >
                Story
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-yellow-400 transition duration-200"
              >
                Blog
              </Link>
            </li>
            {/* {categories.map((category) => (
              <li key={category}>
                <Link href={`/${category}`} onClick={() => setIsOpen(false)}>
                  {category}
                </Link>
              </li>
            ))} */}
            <li>
              <Link
                href="/AboutUs"
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-400 transition duration-200"
              >
                About us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
