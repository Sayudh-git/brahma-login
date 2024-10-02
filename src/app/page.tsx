'use client';

import { PrivyProvider, usePrivy } from '@privy-io/react-auth';
import { Logo } from '@/components/Logo';
import Link from 'next/link';
import { useState } from 'react';

// Import required components for Bento Grid
import { CalendarIcon, FileTextIcon, LockClosedIcon, MagicWandIcon } from "@radix-ui/react-icons";

import { BellIcon, Share2Icon, ShieldCheck, Lock, BookOpen } from "lucide-react";

import{ AnimatedBeamMultipleOutputDemo} from "@/components/ui/animated-beam-multiple-outputs";
import {AnimatedListDemo} from "@/components/ui/animated-list-demo";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Marquee from "@/components/ui/marquee";
import { Calendar } from "@/components/ui/calendar";
import BackgroundGradientAnimation  from "@/components/example/background-gradient-animation-demo"; 

import { cn } from "@/lib/utils";



const files = [
  {
    name: "Functionalities",
    body: "The central kernel within a Console is the Main Account (the main imported or created Safe), whose Console owners exclusively hold administrative privileges. ",
  },
  {
    name: "Access Control",
    body: "Access Control stands as one of the most powerful and functional features, screening every transaction conducted via Console Safes.",
  },
  {
    name: "Execution",
    body: "The Transaction Builder panel within Console is a powerful functionality that helps users to execute transactions at scale, optimise gas handling and speed up execution across diverse actions.",
  },
  {
    name: "Brahma Relayer",
    body: "A relayer sends transactions to the blockchain on behalf of the user, enabling a layer of abstraction that comes with an improved gas experience, batched transactions, faster transactions, and more.",
  },
  {
    name: "Accessibility",
    body: "Console seamlessly integrates with Safe, the leading on-chain custody solution securing $65B assets, to provide professional custodial solutions to its client base.",
  },
];
// Bento Demo Component
const features = [
  {
    Icon: BookOpen,
    name: "Setup Tutorial",
    description: "Create a console, step-by-step.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2 text-sm", // Make the class col-span-1 to stretch evenly
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[200px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: Lock,
    name: "Built on Safe",
    description: "Console is fully self custodial.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1 text-sm ", // Make the class col-span-1 to stretch evenly
    background: (
      <AnimatedBeamMultipleOutputDemo className="overflow-visible  absolute right-38 bottom-10 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 " />
    ),
  },
 
  {
    Icon: FileTextIcon,
    name: "Docs",
    description: "Console’s features, architecture & more.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-3 text-sm",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
 


];


function BentoDemo() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}

function SignInComponent() {
  const { authenticated, login } = usePrivy();
  const [email, setEmail] = useState('');

  return (
    <div className="flex min-h-screen">
      {/* Left Side: Content with Animated Background */}
      <div className="flex-[1.1] hidden md:flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background Gradient Animation */}
        <div className="absolute inset-0 z-0">
          <BackgroundGradientAnimation />
        </div>
  
        {/* Logo SVG */}
        <div className="relative z-10 mb-2 self-start pl-20">
  <svg width="154" height="24" viewBox="0 0 154 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4216_259)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.808956 23.1911C-0.654673 21.7275 0.237519 18.2735 2.78269 14.3226C3.18406 15.9358 4.0153 17.464 5.2764 18.7251L5.28085 18.7207L5.28189 18.7217C6.50252 19.9424 10.4899 17.9341 14.1879 14.236C14.9193 13.5046 15.5846 12.7619 16.1719 12.0315C15.5824 11.2975 14.914 10.5509 14.1788 9.81569C10.4826 6.11945 6.49726 4.1113 5.27456 5.32825C4.01384 6.58897 3.18226 8.11616 2.78075 9.72882C0.236117 5.7784 -0.655768 2.32491 0.807722 0.861419C3.02754 -1.35841 9.82573 1.84074 15.9919 8.00692C16.5989 8.61392 17.1772 9.22705 17.7243 9.84133C18.9778 7.78311 19.4043 6.06076 18.6736 5.33001L18.6725 5.32897L18.6742 5.32727C17.4133 4.06633 15.8853 3.23515 14.2724 2.83372C18.2223 0.289646 21.6753 -0.601932 23.1386 0.861419C24.8805 2.60332 23.2857 7.16441 19.5387 12.0271C23.2848 16.8892 24.8791 21.4494 23.1374 23.1911C21.6741 24.6545 18.2211 23.7629 14.2712 21.2189C15.8838 20.8174 17.4113 19.9863 18.6719 18.7256L18.6662 18.72C19.3937 17.9891 18.9687 16.2711 17.7197 14.2178C17.1743 14.8299 16.598 15.4408 15.9931 16.0456C9.82697 22.2118 3.02877 25.411 0.808956 23.1911Z" fill="white"/>
<path d="M48.6651 12.7303C48.4326 12.5093 48.1542 12.3371 47.8299 12.208C47.5056 12.0817 47.1497 11.9898 46.7565 11.9324C47.4137 11.7803 47.9332 11.5048 48.3063 11.0972C48.6823 10.6926 48.8717 10.0755 48.8717 9.24321C48.8717 8.13535 48.4843 7.31737 47.7179 6.78928C46.9516 6.26405 45.8151 6 44.314 6H33.6V17.9969H44.8335C45.5252 17.9969 46.1537 17.9338 46.7134 17.8075C47.2759 17.6812 47.7553 17.4803 48.1542 17.2105C48.5531 16.9379 48.8574 16.5963 49.0726 16.1859C49.285 15.7755 49.3941 15.2876 49.3941 14.7193C49.3941 14.2687 49.3309 13.8784 49.2046 13.5512C49.0784 13.2211 48.8975 12.9456 48.6679 12.7303H48.6651ZM36.2864 8.22145H44.314C44.9024 8.22145 45.3645 8.32478 45.7003 8.53142C46.0361 8.74094 46.2025 9.09396 46.2025 9.58761C46.2025 10.0812 46.0389 10.4429 45.7089 10.6265C45.3788 10.8131 44.9282 10.9049 44.3657 10.9049H36.2864V8.21858V8.22145ZM46.2399 15.4655C45.9127 15.675 45.4448 15.7755 44.8335 15.7755H36.2864V12.9858H44.8335C45.4936 12.9858 45.9701 13.1063 46.2714 13.3474C46.5699 13.5885 46.722 13.9358 46.722 14.3864C46.722 14.8972 46.5613 15.2531 46.2399 15.4626V15.4655Z" fill="white"/>
<path d="M68.1445 12.4605C68.5406 11.8176 68.7443 11.0657 68.7443 10.1989V10.1817C68.7443 9.56465 68.6467 9.00785 68.4573 8.49985C68.2679 7.98897 67.9665 7.54985 67.5475 7.18248C67.1313 6.81223 66.5918 6.51949 65.9345 6.31571C65.2744 6.1062 64.4851 6 63.5609 6H53.3836V8.41087V11.9812V17.9998H56.0729V14.2917H63.5782L66.0034 17.9998H69.0371L66.1928 13.9071C67.0969 13.5856 67.7455 13.1006 68.1473 12.4605H68.1445ZM66.0378 10.1989C66.0378 10.8131 65.8369 11.2608 65.438 11.5478C65.039 11.8377 64.4105 11.9812 63.5552 11.9812H53.3836V8.41087H63.5552C64.4105 8.41087 65.0362 8.55725 65.438 8.84139C65.8341 9.13127 66.0378 9.579 66.0378 10.1788V10.196V10.1989Z" fill="white"/>
<path d="M122.756 12.8854L116.184 6.00293H113.583V17.9999H116.304V9.81728L122.096 15.919H123.413L129.202 9.81728V17.9999H131.943V6.00293H129.323L122.756 12.8854Z" fill="white"/>
<path d="M106.707 10.7873H96.0623V6.00293H93.307V17.9999H96.0623V13.2499H106.707V17.9999H109.483V6.00293H106.707V10.7873Z" fill="white"/>
<path d="M82.2394 6.00293H79.4984L71.8037 17.9999H74.7857L80.8703 8.39371L86.9549 17.9999H89.9341L82.2394 6.00293Z" fill="white"/>
<path d="M146.255 6.00293H143.514L135.82 17.9999H138.802L144.886 8.39371L150.971 17.9999H153.95L146.255 6.00293Z" fill="white"/>
<path d="M85.7098 13.0789H75.9515V15.3749H85.7098V13.0789Z" fill="white"/>
<path d="M149.713 13.0789H139.955V15.3749H149.713V13.0789Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_4216_259">
<rect width="154" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

</div>
  
  {/* Bento Demo Component */}
  <div className="
  
  relative z-20 w-full max-w-2xl p-4 ">
    <BentoDemo />
  </div>
</div>

      {/* Right Side: Dot Background with Dark Mode */}
      <div className="flex-[0.9] flex items-center justify-center relative bg-neutral-900 dark:bg-gray-900 bg-dot-gray-700">
        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="max-w-md w-full p-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            
          </div>
          
          {/* Login Component */}
          {!authenticated && (
            <div className="bg-[#232325] p-7 rounded-3xl text-white">
              <h2 className="text-center text-sm font-normal mb-8">Login or sign up</h2>
              
              {/* Privy Logo */}
              <div className="flex justify-center mb-8">
                <svg width="160" height="52" viewBox="0 0 160 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <svg width="160" height="52" viewBox="0 0 160 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2011_7160)">
<path d="M37.5354 47.317C37.5354 49.4099 29.5583 51.1066 19.718 51.1066C9.87758 51.1066 1.90039 49.4099 1.90039 47.317C1.90039 45.224 9.87758 43.5273 19.718 43.5273C29.5583 43.5273 37.5354 45.224 37.5354 47.317Z" fill="#FCFCFC"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.565104 30.8601C0.565104 36.9777 6.22533 39.7211 11.7596 39.7382C24.7085 39.7382 39.0352 31.8067 38.9608 18.5332C38.9071 8.96359 30.083 0.816801 19.6412 0.895091C9.70514 0.895091 0.000656204 7.35978 0 16.1669C0 18.532 1.36162 20.8201 4.92097 21.0777C1.95322 24.0061 0.565104 27.5149 0.565104 30.8601ZM19.6753 22.2113C21.751 22.2113 23.4337 20.1965 23.4337 17.7111C23.4337 15.2257 21.751 13.2109 19.6753 13.2109C17.5997 13.2109 15.917 15.2257 15.917 17.7111C15.917 20.1965 17.5997 22.2113 19.6753 22.2113ZM30.4514 22.2113C32.527 22.2113 34.2097 20.1965 34.2097 17.7111C34.2097 15.2257 32.527 13.2109 30.4514 13.2109C28.3757 13.2109 26.693 15.2257 26.693 17.7111C26.693 20.1965 28.3757 22.2113 30.4514 22.2113Z" fill="#FCFCFC"/>
<path d="M56.254 41.875C56.8855 41.875 57.4022 41.3562 57.4022 40.7221C57.4022 37.3776 57.4022 34.0331 57.4022 30.6886C59.4116 30.6886 61.4209 30.6886 63.4303 30.6886C70.377 30.6886 75.4866 25.5584 75.4866 18.5836C75.4866 11.6087 70.377 6.47852 63.4303 6.47852H53.0964C52.4649 6.47852 51.9482 6.9973 51.9482 7.63138V40.7221C51.9482 41.3562 52.4649 41.875 53.0964 41.875H56.254ZM57.4022 25.2125C57.4022 20.7932 57.4022 16.3739 57.4022 11.9546C59.4116 11.9546 61.4209 11.9546 63.4303 11.9546C67.2194 11.9546 69.8603 14.6638 69.8603 18.5836C69.8603 22.5033 67.2194 25.2125 63.4303 25.2125C61.4209 25.2125 59.4116 25.2125 57.4022 25.2125Z" fill="#FCFCFC"/>
<path d="M82.928 41.8763C83.5595 41.8763 84.0762 41.3575 84.0762 40.7234V26.8891C84.0762 20.7789 88.1523 18.4732 92.6878 18.4732H93.836C94.4675 18.4732 94.9842 17.9544 94.9842 17.3203V14.2076C94.9842 13.5735 94.4675 13.0547 93.836 13.0547H92.6878C85.7973 13.0547 83.4173 17.8198 83.4173 17.8198C83.4173 17.8198 83.4173 14.8483 83.4173 14.2076C83.4173 13.298 82.9006 13.0547 82.2691 13.0547H80.0574C79.4259 13.0547 78.9092 13.5735 78.9092 14.2076V40.7234C78.9092 41.3575 79.4259 41.8763 80.0574 41.8763H82.928Z" fill="#FCFCFC"/>
<path d="M102.386 41.8763C103.017 41.8763 103.534 41.3575 103.534 40.7234V14.2076C103.534 13.5735 103.017 13.0547 102.386 13.0547H99.4002C98.7687 13.0547 98.252 13.5735 98.252 14.2076V40.7234C98.252 41.3575 98.7687 41.8763 99.4002 41.8763H102.386Z" fill="#FCFCFC"/>
<path d="M121.392 41.8763C121.908 41.8763 122.253 41.5881 122.483 41.0116L132.415 14.8417C132.529 14.5534 132.644 14.2076 132.644 13.8617C132.644 13.4582 132.185 13.0547 131.496 13.0547H127.937C127.42 13.0547 127.075 13.2853 126.846 13.9194C124.522 20.6172 119.777 33.5816 119.777 33.5816C119.777 33.5816 115.052 20.6328 112.723 13.9194C112.493 13.2853 112.149 13.0547 111.632 13.0547H108.072C107.383 13.0547 106.924 13.4582 106.924 13.9194C106.924 14.2076 107.039 14.5534 107.154 14.8417L117.143 41.0116C117.373 41.5881 117.717 41.8763 118.234 41.8763H121.392Z" fill="#FCFCFC"/>
<path d="M145.22 51.108C145.737 51.108 146.081 50.8774 146.311 50.2434L159.77 14.8417C159.885 14.5534 160 14.2076 160 13.9194C160 13.4582 159.541 13.0547 158.852 13.0547H155.35C154.833 13.0547 154.489 13.2853 154.259 13.9194C152.105 20.0848 147.484 33.5816 147.484 33.5816C147.484 33.5816 142.541 20.1483 140.193 13.9194C139.964 13.2853 139.619 13.0547 139.102 13.0547H135.6C134.912 13.0547 134.452 13.4582 134.452 13.9194C134.452 14.2076 134.567 14.5534 134.682 14.8417L144.269 39.2823C144.384 39.5705 144.442 39.7435 144.442 39.8588C144.442 40.0317 144.384 40.147 144.269 40.4928L141.144 49.4363C141.029 49.7246 140.972 49.9551 140.972 50.1857C140.972 50.6469 141.374 51.108 142.12 51.108H145.22Z" fill="#FCFCFC"/>
</g>
<defs>
<clipPath id="clip0_2011_7160">
<rect width="160" height="52" fill="white"/>
</clipPath>
</defs>
</svg>

                </svg>
              </div>

              {/* Email Input */}
              <div className="flex items-center bg-[#232325] border border-[#636363] rounded-2xl mb-4 px-3 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 mr-2 text-[#969696]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-transparent border-none text-[#969696] text-sm w-full focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="text-[#B2F9FE] text-sm font-semibold ">Submit</button>
              </div>

             {/* Google Button */}
<button className="flex items-center justify-start bg-[#232325] border border-[#636363] p-3 rounded-2xl w-full mb-4 text-[#969696] hover:bg-[#3E3E41] transition-colors text-sm">
  <svg width="24" height="24" viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
    <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/>
    <path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/>
    <path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/>
    <path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/>
  </svg>
  <span className="ml-2 text-white">Google</span>
</button>

{/* Discord Button */}
<button className="flex items-center justify-start bg-[#232325] border border-[#636363] p-3 rounded-2xl w-full mb-4 text-[#969696] hover:bg-[#3E3E41] transition-colors text-sm">
  <svg width="24" height="24" viewBox="0 -28.5 256 256" xmlns="http://www.w3.org/2000/svg">
    <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="#5865F2" />
  </svg>
  <span className="ml-2 text-white">Discord</span>
</button>

             {/* Other Socials */}
<button className="flex items-center justify-between w-full p-4 mb-4  bg-[#232325] border border-[#636363] p-3 rounded-2xl w-full mb-4 text-[#969696] hover:bg-[#3E3E41] transition-colors text-sm">

  <div className="flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-3 text-white">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
    <span className="text-white">Other socials</span>
  </div>
  <div>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18L15 12L9 6" stroke="#E2E2E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
</button>

{/* Wallet Login */}
<button className="flex items-center justify-between w-full p-4 mb-4  bg-[#232325] border border-[#636363] p-3 rounded-2xl w-full mb-4 text-[#969696] hover:bg-[#3E3E41] transition-colors text-sm">
  <div className="flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-3 text-white">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
    </svg>
    <span className="text-white">Continue with a wallet</span>
  </div>
  <div>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18L15 12L9 6" stroke="#E2E2E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
</button>


              {/* Passkey Link */}
              <p className="text-center text-teal-400 mb-6 font-medium text-sm">
                <a href="#" className="hover:underline">I have a passkey</a>
              </p>

              {/* Footer */}
              <p className="text-center text-[#969696] text-xs flex items-center justify-center">
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.871 10.5362C1.871 12.1999 3.40572 12.946 4.90628 12.9507C8.41727 12.9507 12.3018 10.7936 12.2816 7.18375C12.2671 4.58118 9.87451 2.36558 7.04331 2.38687C4.34924 2.38687 1.71795 4.14501 1.71777 6.54019C1.71777 7.18342 2.08697 7.80568 3.05205 7.87575C2.24737 8.67216 1.871 9.62641 1.871 10.5362ZM7.05257 8.18403C7.61537 8.18403 8.0716 7.63608 8.0716 6.96015C8.0716 6.28422 7.61537 5.73628 7.05257 5.73628C6.48977 5.73628 6.03353 6.28422 6.03353 6.96015C6.03353 7.63608 6.48977 8.18403 7.05257 8.18403ZM9.97439 8.18403C10.5372 8.18403 10.9934 7.63608 10.9934 6.96015C10.9934 6.28422 10.5372 5.73628 9.97439 5.73628C9.4116 5.73628 8.95536 6.28422 8.95536 6.96015C8.95536 7.63608 9.4116 8.18403 9.97439 8.18403Z" fill="#5D5D5E" />
                </svg>
                <span>Protected by Privy</span>
              </p>
            </div>
          )}
          
          {authenticated && (
            <div className="text-center text-gray-100 mt-4">
              <p>You are successfully logged in!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <PrivyProvider
      appId="cm1pqdma101et8t983kon63ru"
      config={{
        appearance: {
          theme: '#222224',
          accentColor: '#b2f8ff',
          logo: 'https://pub-dc971f65d0aa41d18c1839f8ab426dcb.r2.dev/privy-dark.png',
          showWalletLoginFirst: false,
          walletChainType: 'ethereum-only',
        },
        loginMethods: ['email', 'wallet', 'google', 'apple', 'github', 'discord'],
        fundingMethodConfig: {
          moonpay: {
            useSandbox: true,
          },
        },
        embeddedWallets: {
          createOnLogin: 'off',
          requireUserPasswordOnCreate: false,
        },
        mfa: {
          noPromptOnMfaRequired: false,
        },
      }}
    >
      <SignInComponent />
    </PrivyProvider>
  );
}
