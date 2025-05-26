import Image from "next/image";
import * as React from "react";
// import classNames from "classnames";
import { cn } from "@/lib/utils";

import NavBar from "@/components/NavBar";
import Button1 from "@/components/Button1";
import GlowTittle from "@/components/GlowTittle";
import Button2 from "@/components/Button2";

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

  return (
    <div className="absolute w-full h-full overflow-x-hidden overflow-auto">
      {/* <video
        className="top-0 left-0 w-full h-full object-cover z-[-1] pointer-events-none opacity-30 mix-blend-screen fixed "
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/bgvid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <header className=" h-[4.6rem] pt-4 w-full p-2.5 fixed z-50">
        <NavBar />
      </header>

      <div className="pt-[5rem] relative [font-family:var(--tech)] font-bold">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover object-[37%_center] z-[-1] pointer-events-none opacity-50 mix-blend-screen"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/bgvid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="flex justify-center m-2 mb-0">
          <Button1>
            <span className="text-[0.75rem]">
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
          </Button1>
        </div>

        <h1 className="text-[1.7rem] md:text-4xl lg:text-8xl font-semibold max-w-6xl mx-auto text-center flex justify-center mt-6 relative z-10 drop-shadow-2xl">
          <GlowTittle text={"Cadet"} className={"text-slate-300"} />
          <GlowTittle text={"Artistry"} className={"bg-blue-400"} />
          <GlowTittle text={"Hub"} className={"bg-red-400"} />
          <span className="flex items-start text-white"> For </span>
        </h1>

        <div className="h-[5rem] flex justify-center items-center px-4">
          <TypewriterEffectSmooth words={words} className="text-[1.5rem]" />
          <br />
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
          <Button2 label={"Get Started For Free 🍦"} />
          <button className="px-8 py-2  bg-transparent text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
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
      </div>

      <div className="mt-20 grid grid-cols-1 gap-2 px-6 [font-family:var(--tech)]">
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

      <div className="max-w-7xl mx-auto text-white relative z-10 [font-family:var(--tech)]">
        <div className="mb-14 text-center">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
          <Accordion.Root
            className="accordion-root w-[100%] flex flex-col justify-center"
            type="single"
            defaultValue="item-1"
            collapsible
          >
            <Accordion.Item
              className="accordion-item w-full  active:bg-neutral-900/50 cursor-pointer border-gray-800 overflow-hidden rounded-md"
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
                <div className="py-4 px-4">
                  <p className="text-gray-300 relative">
                    We're your merchant of record. That means we handle
                    payments, merchant fees, fraud and sales tax without you
                    lifting a finger.
                  </p>
                  <div className="md:hidden relative overflow-hidden mt-6 bg-neutral-900/40 border border-neutral-800/40 rounded-lg p-4">
                    <div className="p-6 rounded-lg w-full relative space-y-8">
                      <div className="border-[1px] background-blur rounded-lg shadow-md p-4 relative">
                        <div className="flex items-center">
                          <Image
                            src="/logo.svg"
                            alt="Creem Icon"
                            width={25}
                            height={25}
                            className="border-[1px] border-yellow-200 mr-2 rounded-full"
                          />
                          <div>
                            <div className="text-sm text-white">
                              Alec Erasmus purchased
                            </div>
                            <div className="text-xs text-gray-300">
                              AI Headshots Plus
                            </div>
                          </div>
                          <div className="ml-auto text-green-400 font-medium">
                            +$35.00
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute w-full h-full squarePattern top-0 left-0"></div>
                    <div class="absolute -top-40 -left-40 w-[300px] h-[300px] bg-[radial-gradient(circle_at_top_left,_#FFBD98,_#FFA477)] rounded-full blur-[100px] opacity-10 z-20"></div>
                    <div class="absolute -bottom-52 -right-52 w-[400px] h-[400px] bg-[radial-gradient(circle_at_bottom_right,_#FFA477,_#FFBD98)] rounded-full blur-[100px] opacity-15 z-20"></div>
                    <div class="absolute top-0 w-[80%] h-64 bg-gradient-to-b from-white/20 to-transparent blur-2xl z-20"></div>
                  </div>
                </div>
              </AccordionContent>
              <div className="flex justify-center">
                <div className="shrink-0 bg-gray-600 h-[1px] w-11/12"></div>
              </div>
            </Accordion.Item>
            <Accordion.Item
              className="accordion-item w-full  active:bg-neutral-900/50 cursor-pointer border-gray-800 overflow-hidden rounded-md"
              value="item-2"
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
                <div className="py-4 px-4">
                  <p className="text-gray-300 relative">
                    We're your merchant of record. That means we handle
                    payments, merchant fees, fraud and sales tax without you
                    lifting a finger.
                  </p>
                  <div className="md:hidden relative overflow-hidden mt-6 bg-neutral-900/40 border border-neutral-800/40 rounded-lg p-4">
                    <div className="p-6 rounded-lg w-full relative space-y-8">
                      <div className="border-[1px] background-blur rounded-lg shadow-md p-4 relative">
                        <div className="flex items-center">
                          <Image
                            src="/logo.svg"
                            alt="Creem Icon"
                            width={25}
                            height={25}
                            className="border-[1px] border-yellow-200 mr-2 rounded-full"
                          />
                          <div>
                            <div class="text-sm text-white">
                              Alec Erasmus purchased
                            </div>
                            <div class="text-xs text-gray-300">
                              AI Headshots Plus
                            </div>
                          </div>
                          <div class="ml-auto text-green-400 font-medium">
                            +$35.00
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute w-full h-full squarePattern top-0 left-0"></div>
                    <div class="absolute -top-40 -left-40 w-[300px] h-[300px] bg-[radial-gradient(circle_at_top_left,_#FFBD98,_#FFA477)] rounded-full blur-[100px] opacity-10 z-20"></div>
                    <div class="absolute -bottom-52 -right-52 w-[400px] h-[400px] bg-[radial-gradient(circle_at_bottom_right,_#FFA477,_#FFBD98)] rounded-full blur-[100px] opacity-15 z-20"></div>
                    <div class="absolute top-0 w-[80%] h-64 bg-gradient-to-b from-white/20 to-transparent blur-2xl z-20"></div>
                  </div>
                </div>
              </AccordionContent>
              <div className="flex justify-center">
                <div className="shrink-0 bg-gray-600 h-[1px] w-11/12"></div>
              </div>
            </Accordion.Item>
            <Accordion.Item
              className="accordion-item w-full  active:bg-neutral-900/50 cursor-pointer border-gray-800 overflow-hidden rounded-md"
              value="item-3"
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
                <div className="py-4 px-4">
                  <p className="text-gray-300 relative">
                    We're your merchant of record. That means we handle
                    payments, merchant fees, fraud and sales tax without you
                    lifting a finger.
                  </p>
                  <div className="md:hidden relative overflow-hidden mt-6 bg-neutral-900/40 border border-neutral-800/40 rounded-lg p-4">
                    <div className="p-6 rounded-lg w-full relative space-y-8">
                      <div className="border-[1px] background-blur rounded-lg shadow-md p-4 relative">
                        <div className="flex items-center">
                          <Image
                            src="/logo.svg"
                            alt="Creem Icon"
                            width={25}
                            height={25}
                            className="border-[1px] border-yellow-200 mr-2 rounded-full"
                          />
                          <div>
                            <div class="text-sm text-white">
                              Alec Erasmus purchased
                            </div>
                            <div class="text-xs text-gray-300">
                              AI Headshots Plus
                            </div>
                          </div>
                          <div class="ml-auto text-green-400 font-medium">
                            +$35.00
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute w-full h-full squarePattern top-0 left-0"></div>
                    <div class="absolute -top-40 -left-40 w-[300px] h-[300px] bg-[radial-gradient(circle_at_top_left,_#FFBD98,_#FFA477)] rounded-full blur-[100px] opacity-10 z-20"></div>
                    <div class="absolute -bottom-52 -right-52 w-[400px] h-[400px] bg-[radial-gradient(circle_at_bottom_right,_#FFA477,_#FFBD98)] rounded-full blur-[100px] opacity-15 z-20"></div>
                    <div class="absolute top-0 w-[80%] h-64 bg-gradient-to-b from-white/20 to-transparent blur-2xl z-20"></div>
                  </div>
                </div>
              </AccordionContent>
              <div className="flex justify-center">
                <div className="shrink-0 bg-gray-600 h-[1px] w-11/12"></div>
              </div>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </div>

      <div className="mx-4 mt-15 relative z-20 py-10 md:py-40 [font-family:var(--tech)]">
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

      <div className="relative z-20 pt-0 pb-40 [font-family:var(--tech)]">
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

      <div className="relative">
        <section className=" pb-40 w-full  overflow-hidden relative z-30 [font-family:var(--tech)]">
          <div className="mx-auto w-full relative z-20 sm:max-w-[40rem]  md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[80rem] bg-gradient-to-br from-neutral-900 to-black sm:rounded-2xl">
            <div className="relative -mx-6   sm:mx-0 sm:rounded-2xl overflow-hidden px-6  md:px-8 ">
              <div className="absolute inset-0 w-full h-full opacity-10 bg-noise fade-vignette [mask-image:radial-gradient(#fff,transparent,75%)]"></div>
              <div class="pointer-events-none absolute inset-y-0 right-0 select-none overflow-hidden rounded-2xl"></div>{" "}
              {/* style="mask:radial-gradient(33.875rem 33.875rem at calc(100% - 8.9375rem) 0, white 3%, transparent 70%)" */}
              <div className="absolute inset-0 h-full w-full scale-[1.2] transform [mask-image:radial-gradient(#fff,transparent,75%)] opacity-5 bg-[url(https://www.creem.io/noise.webp)] bg-size-[30%]"></div>
              <div className="relative px-6 pb-14 pt-20 sm:px-10 sm:pb-20 lg:px-[4.5rem]">
                <h2 class="text-center text-balance mx-auto text-3xl md:text-5xl font-semibold tracking-[-0.015em] text-white">
                  Ready to build the future?
                </h2>
                <p className="mt-4 max-w-[26rem] text-center mx-auto text-base/6 text-neutral-200">
                  Join the next generation of efficient teams. <br /> Get
                  started with Creem's Financial OS today.
                </p>
                <div className="w-full flex justify-center mt-6">
                  <Button2 label={"Im Ready! >"} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="relative mt-20 [font-family:var(--tech)]">
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
            {/* <p className="text-center text-5xl z-9 md:text-9xl lg:text-[18rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 via-neutral-800 to-[#FFBE98]/30 select-none">
              CADET ART HUB
            </p> */}
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
                Copyright © 2025 Ibadullah Memon
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
        className={cn("accordion-trigger", className)}
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
      className={cn("accordion-content", className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="accordion-content-text">{children}</div>
    </Accordion.Content>
  )
);
AccordionContent.displayName = "AccordionContent";
