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
          <div className="">
             <div className="relative  mb-2 self-start ">
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
            {/* Text Welcome */}
            <h2 className="text-2xl text-white w-[28rem] mt-12 font-regular mb-4">
              Welcome to Console. The complete on chain execution and custody environment.
            </h2>

            {/* Stacked Logos */}
            <div className="isolate flex -space-x-1 overflow-hidden mb-4 py-4 px-1">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="relative z-30 inline-block h-10 w-10 rounded-full ring-2 ring-white"
              />
              <img
                alt=""
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="relative z-20 inline-block h-10 w-10 rounded-full ring-2 ring-white"
              />
              <img
                alt=""
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                className="relative z-10 inline-block h-10 w-10 rounded-full ring-2 ring-white"
              />
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="relative z-0 inline-block h-10 w-10 rounded-full ring-2 ring-white"
              />
            </div>

            {/* Login to Console Button */}
            <div className="flex items-center justify-between bg-[#B2F8FF] text-black p-3 rounded-lg mb-4 w-[27rem]">
            <span>Have an account?</span>  <button
                onClick={() => login()}
                className="font-semibold px-6 py-2 bg-black text-white rounded-lg "
              >
                Connect Wallet
              </button>
             
            </div>

            {/* Footer Text */}
            <p className="text-left  text-sm text-gray-400">
              By connecting wallet, you acknowledge and agree with our{' '}
              <a href="#" className="underline text-teal-300">
                Terms and Conditions
              </a>.
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
