'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Transition } from '@headlessui/react'
import type { StaticImageData } from "next/image";

type Item = {
  img: string | StaticImageData; // Allow both string URLs and StaticImageData from Next.js imports
  title: string;
  desc: string;
  buttonIcon: string | StaticImageData;
  width: number;
  height: number;
};

export default function ProgressSlider({ items }: { items: Item[] }) {
  const duration: number = 5000
  const itemsRef = useRef<HTMLDivElement>(null)
  const frame = useRef<number>(0)
  const firstFrameTime = useRef(performance.now())
  const [active, setActive] = useState<number>(0)
  const [progress, setProgress] = useState<number>(0)

  useEffect(() => {
    firstFrameTime.current = performance.now()
    frame.current = requestAnimationFrame(animate)
    return () => {
      cancelAnimationFrame(frame.current)
    }
  }, [active])

  const animate = (now: number) => {
    let timeFraction = (now - firstFrameTime.current) / duration
    if (timeFraction <= 1) {
      setProgress(timeFraction * 100)
      frame.current = requestAnimationFrame(animate)
    } else {
      timeFraction = 1
      setProgress(0)
      setActive((active + 1) % items.length)
    }
  }

  const heightFix = () => {
    if (itemsRef.current && itemsRef.current.parentElement) itemsRef.current.parentElement.style.height = `${itemsRef.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <div className="w-full max-w-5xl mx-auto text-center">
      {/* Item image */}
      <div className="transition-all duration-150 delay-300 ease-in-out">
        <div className="relative flex flex-col" ref={itemsRef}>
          {items.map((item, index) => (
            <Transition
              key={index}
              show={active === index}
              enter="transition ease-in-out duration-500 delay-200 order-first"
              enterFrom="opacity-0 scale-105"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in-out duration-300 absolute"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
              beforeEnter={() => heightFix()}
            >
              <Image
                className="rounded-xl"
                src={item.img}
                width={item.width}
                height={item.height}
                alt={item.desc}
              />
            </Transition>
          ))}
        </div>
      </div>
      {/* Buttons */}
      <div className="max-w-xs sm:max-w-sm md:max-w-3xl mx-auto justify-center grid grid-cols-2 md:grid-cols-3 gap-3 mt-8">
        {items.map((item, index) => (
          <button
            key={index}
            className="p-2 rounded focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 group"
            onClick={() => { setActive(index); setProgress(0) }}
          >
            <span className={`text-center flex flex-col items-center ${active === index ? '' : 'opacity-50 group-hover:opacity-100 group-focus:opacity-100 transition-opacity'}`}>
              <span className="flex items-center justify-center relative w-9 h-9 rounded-full  mb-2">
                <Image
                  src={item.buttonIcon}
                  width={36} // Example size for button icon
                  height={36}
                  alt={item.desc}
                />
              </span>
              <span className="block text-md font-medium text-white ">{item.desc}</span>    
                        <span className="block text-xs font-medium text-gray-300 mb-2">{item.title}</span>


              <span className="block relative w-full bg-slate-200 h-1 rounded-full" role="progressbar" aria-valuenow={active === index ? progress : 0}>
                <span className="absolute inset-0 bg-cyan-400 rounded-[inherit]" style={{ width: active === index ? `${progress}%` : '0%' }}></span>
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
