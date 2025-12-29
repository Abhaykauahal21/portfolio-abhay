"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FaReact, FaAws, FaDocker, FaNodeJs, FaGithub,
  FaTwitter, FaLinkedin, FaInstagram, FaGoogle, FaApple
} from "react-icons/fa";
import { SiNextdotjs, SiVercel, SiRedux, SiTypescript, SiFacebook } from "react-icons/si";
import { Dock, DockIcon } from "@/components/ui/dock"
export type IconProps = React.HTMLAttributes<SVGElement>
import AnimatedDownloadButton from "@/components/ui/download-hover-button"


const fallbackUrls = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  "https://upload.wikimedia.org/wikipedia/commons/9/96/Among_Us_icon.png"
];

const iconConfigs = [
  { Icon: FaReact, color: "#61DAFB" },
  { Icon: FaAws, color: "#FF9900" },
  { Icon: FaDocker, color: "#2496ED" },
  { Icon: FaNodeJs, color: "#339933" },
  { Icon: SiNextdotjs, color: "#000000" },
  { Icon: SiVercel, color: "#000000" },
  { Icon: SiRedux, color: "#764ABC" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: FaGithub, color: "#181717" },
  { Icon: FaTwitter, color: "#1DA1F2" },
  { Icon: FaLinkedin, color: "#0077B5" },
  { Icon: FaInstagram, color: "#E1306C" },
  { Icon: FaGoogle, color: "#DB4437" },
  { Icon: FaApple, color: "#000000" },
  { Icon: SiFacebook, color: "#1877F2" },
  { Icon: null, img: fallbackUrls[0] },
  { Icon: null, img: fallbackUrls[1] },
];

export default function FeatureSection() {
  const orbitCount = 3;
  const orbitGap = 8;
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  

  return (
    <section className="relative w-full my-24 bg-background overflow-hidden">
      <div className="relative mx-auto max-w-7xl flex items-center h-auto lg:h-[30rem]">

        {/* ================= TEXT SECTION ================= */}
       <div className="w-full lg:w-1/2 z-10 px-6 lg:pl-24 text-center lg:text-left">
  <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 text-foreground">
    Download Resume
  </h1>

  <p className="text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0">
    🔗 Connect with me 
  </p>

  {/* Buttons */}
  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">

    {/* Download Resume */}
    <AnimatedDownloadButton href="/resume.pdf" />

   
  </div>
</div>


        {/* ================= ANIMATION (DESKTOP ONLY) ================= */}
        <div className="hidden lg:flex absolute right-0 top-0 w-1/2 h-full items-center justify-end overflow-hidden">
          <div className="relative w-[50rem] h-[50rem] flex items-center justify-center">

            {/* Center Circle */}
            <div className="w-24 h-24 rounded-full bg-muted shadow-lg flex items-center justify-center">
              <FaReact className="w-12 h-12 text-blue-400" />
            </div>

            {/* Orbits */}
            {[...Array(orbitCount)].map((_, orbitIdx) => {
              const size = `${12 + orbitGap * (orbitIdx + 1)}rem`;
              const angleStep = (2 * Math.PI) / iconsPerOrbit;

              return (
                <div
                  key={orbitIdx}
                  className="absolute rounded-full border-2 border-dotted border-border"
                  style={{
                    width: size,
                    height: size,
                    animation: `spin ${12 + orbitIdx * 6}s linear infinite`,
                  }}
                >
                  {iconConfigs
                    .slice(
                      orbitIdx * iconsPerOrbit,
                      orbitIdx * iconsPerOrbit + iconsPerOrbit
                    )
                    .map((cfg, iconIdx) => {
                      const angle = iconIdx * angleStep;
                      const x = 50 + 50 * Math.cos(angle);
                      const y = 50 + 50 * Math.sin(angle);

                      return (
                        <div
                          key={iconIdx}
                          className="absolute bg-background rounded-full p-1 shadow-md"
                          style={{
                            left: `${x}%`,
                            top: `${y}%`,
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          {cfg.Icon ? (
                            <cfg.Icon className="w-8 h-8" style={{ color: cfg.color }} />
                          ) : (
                            <img
                              src={cfg.img}
                              alt="icon"
                              className="w-8 h-8 object-contain"
                            />
                          )}
                        </div>
                      );
                    })}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= ANIMATION KEYFRAMES ================= */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
