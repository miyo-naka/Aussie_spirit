"use client";

import Link from "next/link";
import { useState } from "react";

export function HumbergerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const categories = ["AussieLife", "English", "Parenting"];

  return (
    <div className="md:hidden bg-[#2C5D47] h-8">
      {/* ハンバーガーアイコン */}
      <button
        className="flex flex-col space-y-1 p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block w-6 h-0.5 bg-white transition-transform duration-300"></span>
        <span className="block w-6 h-0.5 bg-white transition-transform duration-300"></span>
        <span className="block w-6 h-0.5 bg-white transition-transform duration-300"></span>
      </button>

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
          <ul className="space-y-6 mt-6">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            {categories.map((category) => (
              <li key={category}>
                <Link href={`/${category}`} onClick={() => setIsOpen(false)}>
                  {category}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/AboutUs" onClick={() => setIsOpen(false)}>
                About us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
