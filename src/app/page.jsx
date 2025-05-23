import Image from "next/image";
import * as React from "react";
import classNames from "classnames";

// import { FlipWords } from "@/components/ui/flip-words";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { VerticalMovingCards } from "@/components/ui/vertical-moving-cards";
import { Feature } from "@/components/ui/feature-card";
import { Accordion } from "radix-ui";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export default function Home() {
  const words = [
    {
      text: "Visual Storytellers",
      className: "text-yellow-200 text-2xl",
    },
    { text: "Digital Dreamers", className: "text-yellow-200 text-2xl" },
    { text: "Media Innovators", className: "text-yellow-200 text-2xl" },
    { text: "Creative Minds", className: "text-yellow-200 text-2xl" },
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
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];
  const features = [
    {
      title: "Built for developers",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Ease of use",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Pricing like no other",
      description:
        "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "100% Uptime guarantee",
      description: "We just cannot be taken down by anyone.",
      icon: <IconCloud />,
    },
    {
      title: "Multi-tenant Architecture",
      description: "You can simply share passwords instead of buying new seats",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "We are available a 100% of the time. Atleast our AI Agents are.",
      icon: <IconHelp />,
    },
    {
      title: "Money back guarantee",
      description:
        "If you donot like EveryAI, we will convince you to like us.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "And everything else",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <IconHeart />,
    },
  ];
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="absolute w-full h-full overflow-auto">
      <header className=" h-[4.3rem] pt-4 w-full p-2.5 fixed z-50">
        <nav className="bg-neutral-900 h-full w-full rounded-full px-4">
          <div className="w-full h-full flex flex-row justify-between items-center">
            <div className="h-full flex flex-row space-x-1.5 items-center">
              <Image
                src="/logo.svg"
                alt="Creem Icon"
                width={28}
                height={28}
                className="border-[1px] border-yellow-200 rounded-full"
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

      <div className="mt-[5rem]">
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

        <div className="h-[5rem] flex justify-center items-center px-4">
          {/* <FlipWords
              words={words}
              duration={3000}
              className="!text-yellow-200"
            />{" "} */}
          <TypewriterEffectSmooth words={words} />

          <br />
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

      <div className="mt-20 grid grid-cols-1 gap-2 px-6">
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
            speed="slow"
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
                <h3 className="text-sm font-medium text-neutral-200">
                  Tax Report 2025
                </h3>
                <span className="px-2 py-1 text-xs font-medium text-emerald-500 bg-emerald-500/10 rounded-full">
                  Submitted
                </span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-400">VAT (EU)</span>
                  <span className="text-sm font-medium text-white">
                    €2,450.00
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-400">
                    Sales Tax (US)
                  </span>
                  <span className="text-sm font-medium text-white">
                    $3,120.00{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" h-auto w-full rounded-2xl [background-image:radial-gradient(88%_100%_at_top,rgba(255,255,255,0.5),rgba(255,255,255,0))] relative px-4 py-20 overflow-hidden">
          <div className="absolute inset-0 h-full w-full scale-[1.2] transform [mask-image:radial-gradient(#fff,transparent,75%)] opacity-10 bg-[url(https://www.creem.io/noise.webp)] bg-size-[30%]"></div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
          <div className="relative w-full h-full py-8">
            <div className="absolute -top-40 -left-40 w-[300px] h-[300px] bg-[radial-gradient(circle_at_top_left,_#FFBE98,_#FFA477)] rounded-full blur-[100px] opacity-20 z-20"></div>
            <div className="absolute -bottom-52 -right-52 w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 z-20"></div>
            <div className="absolute top-0 w-[80%] h-64 bg-gradient-to-b from-[#FFBE98]/20 to-transparent blur-2xl z-20"></div>
            <div className="relative grid md:grid-cols-2 gap-12 z-30 h-full">
              <div className="space-y-6">
                <div className="">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                    <span className="bg-gradient-to-r from-[#FFBE98] to-[#FFA477] bg-clip-text text-transparent">
                      Global Presence,
                    </span>
                    <br />
                    <span className="text-white">Local Excellence</span>
                  </h2>
                  <p className="mt-4 text-gray-300 text-lg">
                    Empowering teams across the globe to scale without
                    boundaries
                  </p>
                </div>
                <div className="flex items-center space-x-5 p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-earth w-10 h-10 text-[#FFBE98]"
                  >
                    <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
                    <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path>
                    <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                  <div className="">
                    <h3 className="font-semibold text-xl text-white">
                      Borderless Operations
                    </h3>
                    <p className="text-gray-300">
                      Scale your business globally with seamless integration
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/5">
                    <div className="text-3xl font-bold text-[#FFBE98]">
                      100+
                    </div>
                    <div className="text-gray-300 mt-1">
                      Countries Supported
                    </div>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/5">
                    <div className="text-3xl font-bold text-[#FFBE98]">
                      24/7
                    </div>
                    <div className="text-gray-300 mt-1">Global Support</div>
                  </div>
                </div>
              </div>
              <div className="relative h-full flex items-center">
                <div className="grid grid-cols-3 gap-4 w-full">
                  <div className="group relative">
                    <div className="aspect-video relative rounded-xl overflow-hidden bg-black/40 backdrop-blur-md border border-white/10 shadow-lg">
                      <Image
                        src="https://flagcdn.com/w320/us.png"
                        alt="United States flag"
                        fill
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
                    </div>
                  </div>
                  <div className="group relative">
                    <div className="aspect-video relative rounded-xl overflow-hidden bg-black/40 backdrop-blur-md border border-white/10 shadow-lg">
                      <Image
                        src="https://flagcdn.com/w320/br.png"
                        alt="United States flag"
                        fill
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
                    </div>
                  </div>{" "}
                  <div className="group relative">
                    <div className="aspect-video relative rounded-xl overflow-hidden bg-black/40 backdrop-blur-md border border-white/10 shadow-lg">
                      <Image
                        src="https://flagcdn.com/w320/ca.png"
                        alt="United States flag"
                        fill
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
                    </div>
                  </div>{" "}
                  <div className="group relative">
                    <div className="aspect-video relative rounded-xl overflow-hidden bg-black/40 backdrop-blur-md border border-white/10 shadow-lg">
                      <Image
                        src="https://flagcdn.com/w320/de.png"
                        alt="United States flag"
                        fill
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
                    </div>
                  </div>{" "}
                  <div className="group relative">
                    <div className="aspect-video relative rounded-xl overflow-hidden bg-black/40 backdrop-blur-md border border-white/10 shadow-lg">
                      <Image
                        src="https://flagcdn.com/w320/in.png"
                        alt="United States flag"
                        fill
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
                    </div>
                  </div>{" "}
                  <div className="group relative">
                    <div className="aspect-video relative rounded-xl overflow-hidden bg-black/40 backdrop-blur-md border border-white/10 shadow-lg">
                      <Image
                        src="https://flagcdn.com/w320/gb.png"
                        alt="United States flag"
                        fill
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
                    </div>
                  </div>{" "}
                  <div className="group relative">
                    <div className="aspect-video relative rounded-xl overflow-hidden bg-black/40 backdrop-blur-md border border-white/10 shadow-lg">
                      <Image
                        src="https://flagcdn.com/w320/cn.png"
                        alt="United States flag"
                        fill
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
                    </div>
                  </div>{" "}
                  <div className="group relative">
                    <div className="aspect-video relative rounded-xl overflow-hidden bg-black/40 backdrop-blur-md border border-white/10 shadow-lg">
                      <Image
                        src="https://flagcdn.com/w320/jp.png"
                        alt="United States flag"
                        fill
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
                    </div>
                  </div>{" "}
                  <div className="group relative">
                    <div className="aspect-video relative rounded-xl overflow-hidden bg-black/40 backdrop-blur-md border border-white/10 shadow-lg">
                      <Image
                        src="https://flagcdn.com/w320/kr.png"
                        alt="United States flag"
                        fill
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
                    </div>
                  </div>{" "}
                  <div className="group relative">
                    <div className="aspect-video relative rounded-xl overflow-hidden bg-black/40 backdrop-blur-md border border-white/10 shadow-lg">
                      <Image
                        src="https://flagcdn.com/w320/sg.png"
                        alt="United States flag"
                        fill
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
                    </div>
                  </div>{" "}
                  <div className="group relative">
                    <div className="aspect-video relative rounded-xl overflow-hidden bg-black/40 backdrop-blur-md border border-white/10 shadow-lg">
                      <Image
                        src="https://flagcdn.com/w320/au.png"
                        alt="United States flag"
                        fill
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
                    </div>
                  </div>{" "}
                  <div className="group relative">
                    <div className="aspect-video relative rounded-xl overflow-hidden bg-black/40 backdrop-blur-md border border-white/10 shadow-lg">
                      <Image
                        src="https://flagcdn.com/w320/za.png"
                        alt="United States flag"
                        fill
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="max-w-7xl mx-auto text-white relative z-10">
        <div className="mb-16 text-center">
          <h2 className="max-w-5xl mx-auto text-center tracking-tight font-medium text-white text-3xl md:text-5xl md:leading-tight mb-4">
            <span className="inline-block items-center text-balance">
              Smooth International Sales
            </span>
          </h2>
          <h2 className="text-sm md:text-base max-w-4xl my-4 px-10 mx-auto text-center font-normal dark:text-muted-dark text-gray-300">
            <span className="inline-block items-center text-balance">
              Everything you need to handle payments for your SaaS business{" "}
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Accordion.Root
            className="accordion-root w-[90%] flex flex-col justify-center mx-4"
            type="single"
            defaultValue="item-1"
            collapsible
          >
            <Accordion.Item
              className="accordion-item w-full border-b-[1px] border-b-gray-600  active:bg-neutral-900/50 cursor-pointer border-gray-800 overflow-hidden rounded-sm"
              value="item-1"
            >
              <AccordionTrigger className="flex-row w-full flex items-center justify-between py-4 px-4 text-left focus:outline-none">
                <div className="flex items-center py-3">
                  <span className="text-sm text-primary mr-3">01</span>
                  <h3 className="text-xl font-medium relative ">
                    Global tax compliance
                  </h3>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </Accordion.Item>

            <Accordion.Item className="accordion-item" value="item-2">
              <AccordionTrigger>Is it unstyled?</AccordionTrigger>
              <AccordionContent>
                Yes. It's unstyled by default, giving you freedom over the look
                and feel.
              </AccordionContent>
            </Accordion.Item>

            <Accordion.Item className="accordion-item" value="item-3">
              <AccordionTrigger>Can it be animated?</AccordionTrigger>
              <AccordionContent>
                Yes! You can animate the Accordion with CSS or JavaScript.
              </AccordionContent>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </div>

      <div className="mx-4 relative z-20 py-10 md:py-40">
        <h2 className="max-w-5xl mx-auto text-center tracking-tight font-medium text-white text-3xl md:text-5xl md:leading-tight">
          <span className="inline-block items-center text-balance">
            Tools for the next generation of companies
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>

      <div className="relative z-20 pt-0 pb-40">
        <h2 className="max-w-5xl mx-auto text-center tracking-tight font-medium text-white text-3xl md:text-5xl md:leading-tight">
          <span className="inline-block items-center text-balance">
            Loved by Indie Hackers and VC Backed SaaS
          </span>
        </h2>
        <h2 className="text-sm md:text-base my-4 text-muted text-neutral-400 font-normal dark:text-muted-dark px-10 text-center max-w-lg mx-auto">
          <span className="inline-block items-center text-wrap">
            Cadet Art Hub is used by companies of every size. Here's what some
            of them have to say.
          </span>
        </h2>
        <div className="h-[40rem] my-20 rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <VerticalMovingCards
            items={testimonials}
            direction="up"
            speed="normal"
          />
        </div>
      </div>

      <footer className="relative mt-20">
        <div className="border-t border-neutral-800 px-8 pt-20 pb-32 relative bg-black z-0">
          <div className="absolute inset-0 -z-9 flex items-center justify-center  pointer-events-none bg-transparent">
            <div className="h-full w-auto absolute left-0 inset-0 z-0">
              <Image
                src="/gun-man.jpeg"
                alt="gunman"
                width={500}
                height={500}
                className="object-cover z-10 opacity-20 h-full"
              />
            </div>
            <p className="text-center text-5xl z-9 md:text-9xl lg:text-[18rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 via-neutral-800 to-[#FFBE98]/30 select-none">
              CADET ART HUB
            </p>
          </div>
          <div className="max-w-7xl mx-auto text-sm text-neutral-400 flex sm:flex-row flex-col justify-between items-start z-0">
            <div>
              <div className="mr-4  md:flex mb-4 z-0">
                <a className="font-normal flex space-x-2 items-center text-sm  text-blackpy-1  relative z-20">
                  <Image
                    src="/logo-sq.png"
                    alt="Creem Icon"
                    width={50}
                    height={50}
                    className=" rounded-lg"
                  />
                  <span className="font-medium text-white">
                    Cadet Artistry Hub
                  </span>
                </a>
              </div>
              <div className="relative z-10">
                Copyright © 2025 Cadet Artistry Hub
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
      </footer>
    </div>
  );
}

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="accordion-header">
      <Accordion.Trigger
        className={classNames("accordion-trigger", className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="accordion-chevron" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames("accordion-content", className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="accordion-content-text">{children}</div>
    </Accordion.Content>
  )
);
AccordionContent.displayName = "AccordionContent";
