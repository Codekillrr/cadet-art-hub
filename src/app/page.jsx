import Image from "next/image";
// import { FlipWords } from "@/components/ui/flip-words";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Home() {
  const words = [
    "Visual Storytellers",
    "Digital Dreamers",
    "Media Innovators",
    "Creative Minds",
  ];
  const wordItems = [
    {
      quote: "Design System",
      name: "",
      title: "",
      imgsrc: "/carousel icons/icon1.svg",
    },
    {
      quote: "UI Components",
      name: "",
      title: "",
      imgsrc: "/carousel icons/icon2.svg",
    },
    {
      quote: "React",
      name: "",
      title: "",
      imgsrc: "/carousel icons/icon3.svg",
    },
    {
      quote: "Next.js",
      name: "",
      title: "",
      imgsrc: "/carousel icons/icon1.svg",
    },
    {
      quote: "Tailwind CSS",
      name: "",
      title: "",
      imgsrc: "/carousel icons/icon1.svg",
    },
    {
      quote: "TypeScript",
      name: "",
      title: "",
      imgsrc: "/carousel icons/icon1.svg",
    },
    {
      quote: "Animations",
      name: "",
      title: "",
      imgsrc: "/carousel icons/icon1.svg",
    },
    {
      quote: "Responsive",
      name: "",
      title: "",
      imgsrc: "/carousel icons/mobile.svg",
    },
    {
      quote: "Accessible",
      name: "",
      title: "",
      imgsrc: "/carousel icons/icon1.svg",
    },
    {
      quote: "SSL Security",
      name: "",
      title: "",
      imgsrc: "/carousel icons/security.svg",
    },
    {
      quote: "Performance",
      name: "",
      title: "",
      imgsrc: "/carousel icons/icon1.svg",
    },
    {
      quote: "SEO",
      name: "",
      title: "",
      imgsrc: "/carousel icons/icon1.svg",
    },
  ];

  return (
    <div className="absolute w-full h-full overflow-auto">
      <header className=" h-[4.3rem] pt-4 w-full p-2.5 fixed z-50">
        <nav className="bg-neutral-900 h-full w-full rounded-full px-4">
          <div className="w-full h-full flex flex-row justify-between items-center">
            <div className="h-full flex flex-row space-x-0.5 items-center">
              <Image
                src="/reshot-icon-yellow-flower-GLBAP6YNMU.svg"
                alt="Creem Icon"
                width={40}
                height={40}
              />
              <div className="text-white">Cadet Artistry Hub</div>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="yellow"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </div>
        </nav>
      </header>
      <div className="mt-[4.7rem]">
        <div className="flex justify-center m-2 mb-0">
          <button className="bg-neutral-800  border-neutral-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-700 rounded-full p-px text-[0.6rem] font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-neutral-800 py-1.5 px-5 ring-1 ring-white/10 ">
              <span>
                Save up to 50% on fees with our competitive pricing 🎉
              </span>
              <svg
                fill="none"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
        </div>
        <h1 className="text-2xl md:text-4xl lg:text-8xl font-semibold max-w-6xl mx-auto text-center flex justify-center mt-6 relative z-10 drop-shadow-2xl">
          <span className="h-full flex justify-center items-start pr-2">
            <span className="absolute mx-auto font-geistMono text-[1.5rem] flex border w-fit bg-white blur-xl   bg-clip-text box-content font-extrabold text-transparent text-center select-none">
              Cadet Artistry Hub
            </span>
            <h1 className="relative top-0 font-geistMono w-fit h-auto justify-center flex bg-white items-center  bg-clip-text font-extrabold text-transparent text-center select-auto">
              Cadet Artistry Hub
            </h1>
          </span>
          <span className="flex items-start text-white"> For </span>
        </h1>
        <div className="h-[4rem] flex justify-center items-center px-4">
          <div className="text-2xl mx-auto font-normal ">
            {/* <FlipWords
              words={words}
              duration={3000}
              className="!text-yellow-200"
            />{" "} */}

            <br />
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 text-white text-[1rem] text-center w-full flex flex-col justify-center items-center">
        <p className="w-[65%]">
          Empowering small teams to achieve big business outcomes.
        </p>
        <p className="w-[100%]">
          A complete financial infrastructure for the next generation of
          efficient companies.{" "}
        </p>
        <p className="mt-8 text-[1.1rem] font-bold text-yellow-200">
          Create for the future of art.
        </p>
      </div>

      <div className="mt-4 flex justify-evenly mx-4">
        <button className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-neutral-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-neutral-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Get Started For Free 🍦
          </span>
        </button>
        <button className="px-8 py-2  bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
          <span className="flex flex-row items-center">
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 pl-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </span>
        </button>
      </div>
      <div className="p-4 border bg-neutral-800 border-neutral-700 rounded-[32px] mt-20 relative">
        <div className="absolute inset-x-0 bottom-0 h-40 w-full bg-gradient-to-b from-transparent via-black/80 to-black scale-[1.1] pointer-events-none"></div>
        <div className="p-2 bg-black border-neutral-700 border rounded-[24px]">
          <Image
            src="/header.webp"
            alt="Description"
            width={1920}
            height={108}
          />
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-4 px-6">
        <section className=" h-[30rem] w-full rounded-2xl [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))] relative px-4 py-20 overflow-hidden">
          <div className="absolute inset-0 h-full w-full scale-[1.2] transform [mask-image:radial-gradient(#fff,transparent,75%)] opacity-10 bg-[url(https://www.creem.io/noise.webp)] bg-size-[30%]"></div>
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-primary text-yellow-200">
              The future of work needs new financial tools
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              Small teams are achieving what used to require 150+ people.
              <br />
              <br />
              We're building the financial infrastructure to power this
              revolution.
            </p>
          </div>
          <InfiniteMovingCards
            items={wordItems}
            direction="left"
            speed="normal"
            className="my-5 mx-2"
          />
          <Image
            src="https://www.creem.io/code-pretty.png"
            alt="code"
            width={400}
            height={400}
            className="absolute -right-4 lg:-right-[10%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </section>
        <section className=" h-[30rem] w-full rounded-2xl [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))] relative px-4 py-20 overflow-hidden">
          <div className="absolute inset-0 h-full w-full scale-[1.2] transform [mask-image:radial-gradient(#fff,transparent,75%)] opacity-10 bg-[url(https://www.creem.io/noise.webp)] bg-size-[30%]"></div>

          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-primary text-yellow-200">
            Global Merchant of Record{" "}
          </h2>
          <div className="mt-4 max-w-[26rem] text-left text-base/6 text-white">
            <p>
              Focus on your product, not on bureaucracy. We handle the heavy
              lifting of
              <strong> Tax Compliance. </strong>
            </p>
            <div className="mt-6 bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-6 border border-neutral-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className=""></h3>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="relative mt-20">
        <div className="border-t border-neutral-800 px-8 pt-20 pb-32 relative bg-black z-0">
          <div className="absolute inset-0 -z-9 flex items-center justify-center overflow-hidden pointer-events-none bg-transparent">
            <p className="text-center text-5xl z-9 md:text-9xl lg:text-[18rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 via-neutral-800 to-[#FFBE98]/30 select-none">
              CADET ART HUB
            </p>
          </div>
          <div className="max-w-7xl mx-auto text-sm text-neutral-400 flex sm:flex-row flex-col justify-between items-start z-0">
            <div>
              <div className="mr-4  md:flex mb-4 z-0">
                <a className="font-normal flex space-x-1 items-center text-sm  text-blackpy-1  relative z-20">
                  <Image
                    src="/reshot-icon-yellow-flower-GLBAP6YNMU.svg"
                    alt="Creem Icon"
                    width={40}
                    height={40}
                    className=""
                  />
                  <span className="font-medium text-white">
                    Cadet Artistry Hub
                  </span>
                </a>
              </div>
              <div className="relative z-10">
                Copyright © 2025 Cadet Artistry Hub OÜ
              </div>
              <div className="mt-2 relative z-10">All rights reserved</div>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-10 items-start mt-10 md:mt-0">
            <div className="flex justify-center space-y-4 flex-col mt-4 relative z-10">
              <span className="text-white">Pages</span>
              <a className="transition-colors text-slate-300 text-muted-dark hover:text-neutral-400 text-xs sm:text-sm">
                Pricing
              </a>
              <a className="transition-colors text-slate-300 text-muted-dark hover:text-neutral-400 text-xs sm:text-sm">
                Contact
              </a>
              <a className="transition-colors text-slate-300 text-muted-dark hover:text-neutral-400 text-xs sm:text-sm">
                Blog
              </a>
            </div>
            <div className="flex justify-center space-y-4 flex-col mt-4 relative z-10">
              <span className="text-white">Legal</span>
              <a className="transition-colors text-slate-300 text-muted-dark hover:text-neutral-400 text-xs sm:text-sm">
                Privacy Policy
              </a>
              <a className="transition-colors text-slate-300 text-muted-dark hover:text-neutral-400 text-xs sm:text-sm">
                Terms of Service
              </a>
              <a className="transition-colors text-slate-300 text-muted-dark hover:text-neutral-400 text-xs sm:text-sm">
                About Us
              </a>
            </div>
            <div className="flex justify-center space-y-4 flex-col mt-4 relative z-10">
              <span className="text-white">Socials</span>
              <a className="transition-colors text-slate-300 text-muted-dark hover:text-neutral-400 text-xs sm:text-sm">
                Twitter
              </a>
              <a className="transition-colors text-slate-300 text-muted-dark hover:text-neutral-400 text-xs sm:text-sm">
                Discord
              </a>
            </div>
            <div className="flex justify-center space-y-4 flex-col mt-4 relative z-10">
              <span className="text-white">Integrations</span>
              <a className="transition-colors text-slate-300 text-muted-dark hover:text-neutral-400 text-xs sm:text-sm">
                AI Negotiation
              </a>
              <a className="transition-colors text-slate-300 text-muted-dark hover:text-neutral-400 text-xs sm:text-sm">
                Affiliates
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
