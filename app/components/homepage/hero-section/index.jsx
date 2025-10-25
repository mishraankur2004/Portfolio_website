"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare, FaBehance, FaInstagram } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { useEffect, useState } from "react";

function HeroSection() {
  const [code, setCode] = useState("");
  const fullCode = `# Creative Motion Demo 🎥
import cv2
import numpy as np
from moviepy.editor import VideoFileClip, TextClip, CompositeVideoClip

# Load your video
clip = VideoFileClip("my_project.mp4")

# Add animated title
txt = TextClip("Design. Edit. Create.", fontsize=70, color='pink', font='Arial-Bold')
txt = txt.set_pos('center').set_duration(5)

# Combine
final = CompositeVideoClip([clip, txt])

# Export
final.write_videofile("final_edit.mp4", fps=24)

print("✨ Video Render Complete!")`;

  // Typing animation
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setCode(fullCode.slice(0, i));
      i++;
      if (i > fullCode.length) i = 0;
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        {/* ---------- LEFT SIDE ---------- */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is <span className=" text-pink-500">{personalData.name}</span>
            {` , I'm a Professional `}
            <span className=" text-[#16f2b3]">{personalData.designation}</span>.
          </h1>

          {/* Social Links */}
          <div className="my-12 flex items-center gap-5">
            <Link href={personalData.github} target="_blank" className="text-pink-500 transition-all hover:scale-125 duration-300"><BsGithub size={30} /></Link>
            <Link href={personalData.linkedIn} target="_blank" className="text-pink-500 transition-all hover:scale-125 duration-300"><BsLinkedin size={30} /></Link>
            <Link href={personalData.behance || "#"} target="_blank" className="text-pink-500 transition-all hover:scale-125 duration-300"><FaBehance size={30} /></Link>
            <Link href={personalData.instagram || "#"} target="_blank" className="text-pink-500 transition-all hover:scale-125 duration-300"><FaInstagram size={30} /></Link>
            <Link href={personalData.twitter} target="_blank" className="text-pink-500 transition-all hover:scale-125 duration-300"><FaTwitterSquare size={30} /></Link>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            >
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              target="_blank"
              href={personalData.resume}
            >
              <span>Get Portfolio</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        {/* ---------- RIGHT SIDE (Stylish Terminal for Designers) ---------- */}
        <div className="order-1 lg:order-2 relative rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] shadow-[0_0_25px_rgba(255,0,128,0.2)] overflow-hidden">
          {/* Terminal Header */}
          <div className="flex flex-row px-4 py-3 border-b border-[#1b2c68a0]">
            <div className="h-3 w-3 rounded-full bg-red-400 mr-2"></div>
            <div className="h-3 w-3 rounded-full bg-orange-400 mr-2"></div>
            <div className="h-3 w-3 rounded-full bg-green-400"></div>
          </div>

          {/* Animated Code Display */}
          <div className="px-4 py-6 text-xs md:text-sm">
            <SyntaxHighlighter language="python" style={vs2015} showLineNumbers wrapLines>
              {code}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
