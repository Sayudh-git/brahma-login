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
         
            <div className="isolate flex -space-x-[12px] overflow-hidden mb-4 py-4 px-1">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1.35" y="1.35" width="33.3" height="33.3" rx="16.65" fill="#18181C"/>
<rect x="1.35" y="1.35" width="33.3" height="33.3" rx="16.65" stroke="#494C56" stroke-width="1.3"/>
<circle cx="17.9999" cy="17.9999" r="12.6" fill="#627EEA"/>
<g clip-path="url(#clip0_6_276)">
<path d="M18.2349 8.5498V15.5349L24.1388 18.1731L18.2349 8.5498Z" fill="white" fill-opacity="0.602"/>
<path d="M18.2343 8.5498L12.3296 18.1731L18.2343 15.5349V8.5498Z" fill="white"/>
<path d="M18.2349 22.6997V27.4459L24.1427 19.2725L18.2349 22.6997Z" fill="white" fill-opacity="0.602"/>
<path d="M18.2343 27.4459V22.6989L12.3296 19.2725L18.2343 27.4459Z" fill="white"/>
<path d="M18.2349 21.6012L24.1388 18.1732L18.2349 15.5366V21.6012Z" fill="white" fill-opacity="0.2"/>
<path d="M12.3296 18.1732L18.2343 21.6012V15.5366L12.3296 18.1732Z" fill="white" fill-opacity="0.602"/>
</g>
<defs>
<clipPath id="clip0_6_276">
<rect width="11.8125" height="18.8961" fill="white" transform="translate(12.3296 8.5498)"/>
</clipPath>
</defs>
</svg>

<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1.35" y="1.35" width="33.3" height="33.3" rx="16.65" fill="#18181C"/>
<rect x="1.35" y="1.35" width="33.3" height="33.3" rx="16.65" stroke="#494C56" stroke-width="1.3"/>
<g clip-path="url(#clip0_6_277)">
<path d="M7.6748 13.0607V22.9391C7.6748 23.5741 8.00744 24.1487 8.56184 24.4713L17.1198 29.4105C17.6641 29.7229 18.3394 29.7229 18.8838 29.4105L27.4417 24.4713C27.986 24.1588 28.3287 23.5741 28.3287 22.9391V13.0607C28.3287 12.4257 27.9961 11.8511 27.4417 11.5285L18.8838 6.58934C18.3394 6.27686 17.6641 6.27686 17.1198 6.58934L8.56184 11.5285C8.01752 11.841 7.68488 12.4257 7.68488 13.0607H7.6748Z" fill="#213147"/>
<path d="M19.8625 19.9149L18.6428 23.2614C18.6126 23.3522 18.6126 23.453 18.6428 23.5538L20.7394 29.3094L23.1687 27.9083L20.2556 19.9149C20.185 19.7334 19.933 19.7334 19.8625 19.9149Z" fill="#12AAFF"/>
<path d="M22.3127 14.2904C22.2422 14.1089 21.9902 14.1089 21.9196 14.2904L20.6999 17.6369C20.6697 17.7277 20.6697 17.8285 20.6999 17.9293L24.1372 27.3541L26.5665 25.9529L22.3127 14.3005V14.2904Z" fill="#12AAFF"/>
<path d="M17.9953 6.9623C18.0558 6.9623 18.1163 6.98246 18.1667 7.0127L27.4201 12.3551C27.531 12.4156 27.5915 12.5365 27.5915 12.6575V23.3423C27.5915 23.4633 27.5209 23.5842 27.4201 23.6447L18.1667 28.9871C18.1163 29.0173 18.0558 29.0375 17.9953 29.0375C17.9348 29.0375 17.8743 29.0173 17.8239 28.9871L8.5705 23.6447C8.45962 23.5842 8.39914 23.4633 8.39914 23.3423V12.6474C8.39914 12.5265 8.4697 12.4055 8.5705 12.345L17.8239 7.00262C17.8743 6.97238 17.9348 6.95222 17.9953 6.95222V6.9623ZM17.9953 5.3999C17.6627 5.3999 17.3401 5.48054 17.0377 5.6519L7.78426 10.9943C7.18954 11.337 6.82666 11.962 6.82666 12.6474V23.3322C6.82666 24.0177 7.18954 24.6426 7.78426 24.9853L17.0377 30.3277C17.33 30.4991 17.6627 30.5797 17.9953 30.5797C18.3279 30.5797 18.6505 30.4991 18.9529 30.3277L28.2063 24.9853C28.8011 24.6426 29.1639 24.0177 29.1639 23.3322V12.6474C29.1639 11.962 28.8011 11.337 28.2063 10.9943L18.9428 5.6519C18.6505 5.48054 18.3179 5.3999 17.9852 5.3999H17.9953Z" fill="#9DCCED"/>
<path d="M11.8682 27.3644L12.725 25.0259L14.4386 26.4472L12.8358 27.9188L11.8682 27.3644Z" fill="#213147"/>
<path d="M17.2126 11.8914H14.864C14.6926 11.8914 14.5313 12.0023 14.4708 12.1636L9.44092 25.953L11.8702 27.3541L17.4142 12.1636C17.4646 12.0225 17.3638 11.8813 17.2227 11.8813L17.2126 11.8914Z" fill="white"/>
<path d="M21.3253 11.8914H18.9766C18.8053 11.8914 18.644 12.0023 18.5835 12.1636L12.8379 27.9085L15.2672 29.3097L21.5168 12.1636C21.5672 12.0225 21.4664 11.8813 21.3253 11.8813V11.8914Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_6_277">
<rect width="25.2" height="25.2" fill="white" transform="translate(5.3999 5.3999)"/>
</clipPath>
</defs>
</svg>
<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1.35" y="1.35" width="33.3" height="33.3" rx="16.65" fill="black"></rect><rect x="1.35" y="1.35" width="33.3" height="33.3" rx="16.65" stroke="#494C56" stroke-width="1.3"></rect><path d="M9.70449 9.60001L5.38306 12.7267H26.9266L25.6777 16.316H17.0902L16.2987 18.9369H24.8144L23.4473 23.2015H11.4472L13.9192 15.3772L11.1647 13.3044L6.94542 26.4H22.5273L26.6336 24.3314L27.9453 19.856L25.3082 17.9025L29.3127 15.9003L30.6165 11.6223L27.9286 9.6004L9.70449 9.60001Z" fill="#F8FC53"></path></svg>

<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1.35" y="1.35" width="33.3" height="33.3" rx="16.65" fill="black"></rect><rect x="1.35" y="1.35" width="33.3" height="33.3" rx="16.65" stroke="#494C56" stroke-width="1.3"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M30.5226 18C30.5226 24.9035 24.9147 30.5 17.9969 30.5C11.4338 30.5 6.04962 25.4626 5.51489 19.0507H22.071V16.9493H5.51489C6.04962 10.5374 11.4338 5.49998 17.9969 5.49998C24.9147 5.49998 30.5226 11.0964 30.5226 18Z" fill="#3145FF"></path></svg>

<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1.35" y="1.35" width="33.3" height="33.3" rx="16.65" fill="black"></rect><rect x="1.35" y="1.35" width="33.3" height="33.3" rx="16.65" stroke="#494C56" stroke-width="1.3"></rect><g clip-path="url(#___SVG_ID__4__0___)"><path fill-rule="evenodd" clip-rule="evenodd" d="M31.306 18.1686C31.306 10.8969 25.409 4.99991 18.1372 4.99991C10.8655 4.99991 4.96851 10.8969 4.96851 18.1686C4.96851 25.4404 10.8655 31.3374 18.1372 31.3374C25.409 31.3374 31.306 25.4404 31.306 18.1686ZM18.6376 18.4979L20.8395 12.298H24.3924V23.1253H22.0088V17.7314L22.9623 14.6526L22.2827 14.4103L19.1855 23.1253H17.3682L14.2709 14.4103L13.5914 14.6526L14.5422 17.7314V23.1253H12.1586V12.298H15.7142L17.916 18.4979V20.3178H18.6376V18.4979Z" fill="#DFFE00"></path></g><defs><clipPath id="___SVG_ID__4__0___"><rect width="26.3374" height="26.3374" fill="white" transform="translate(4.96851 5)"></rect></clipPath></defs></svg>

<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1.35" y="1.35" width="33.3" height="33.3" rx="16.65" fill="black"></rect><rect x="1.35" y="1.35" width="33.3" height="33.3" rx="16.65" stroke="#494C56" stroke-width="1.3"></rect><g clip-path="url(#___SVG_ID__5__0___)"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.9393 30C21.495 30 24.6897 28.4534 26.8871 25.9962C25.8649 25.1079 24.3244 25.0539 23.2362 25.932L23.0283 26.0997C21.0359 27.7075 18.1326 27.4701 16.4278 25.56C15.498 24.5182 13.9056 24.4118 12.8455 25.3206L10.4486 27.3756C12.5016 29.0179 15.1057 30 17.9393 30ZM21.83 24.1893C23.7278 22.6579 26.3953 22.7128 28.2205 24.1918C29.3115 22.3841 29.9392 20.2654 29.9392 18C29.9392 15.4828 29.1642 13.1466 27.8398 11.2171C26.9859 11.0353 26.0604 11.2477 25.3579 11.8702L25.158 12.0474C23.2418 13.7454 20.3307 13.6422 18.5395 11.8128C17.5627 10.8151 15.9671 10.7823 14.95 11.7391L12.1607 14.3633L10.6263 12.7323L13.4156 10.1081C15.3207 8.31579 18.3097 8.37717 20.1397 10.2462C21.0958 11.2228 22.6499 11.2779 23.6728 10.3714L23.8727 10.1942C24.4937 9.64399 25.212 9.27305 25.9642 9.07796C23.8382 7.16449 21.0247 6 17.9393 6C11.8476 6 6.81607 10.5391 6.04239 16.4195C7.89267 15.5316 10.175 15.8733 11.6836 17.4182C12.636 18.3935 14.1696 18.4964 15.2438 17.6572L16.8033 16.4388C18.7634 14.9076 21.5341 14.9817 23.4094 16.6155L26.4457 19.2609L24.9747 20.9493L21.9384 18.304C20.8721 17.3749 19.2966 17.3327 18.182 18.2034L16.6225 19.4219C14.6488 20.9638 11.8313 20.7747 10.0815 18.9827C9.06394 17.9407 7.39978 17.9044 6.33773 18.901L6.00024 19.2177C6.25281 21.724 7.27664 24.0028 8.83079 25.8129L11.388 23.6206C13.3738 21.9181 16.3568 22.1173 18.0985 24.0688C19.0086 25.0885 20.5585 25.2152 21.6221 24.357L21.83 24.1893Z" fill="#B3272C"></path></g><defs><clipPath id="___SVG_ID__5__0___"><rect width="23.939" height="24" fill="white" transform="translate(6.00024 6)"></rect></clipPath></defs></svg>

<svg   width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1.35" y="1.35" width="33.3" height="33.3" rx="16.65" fill="black"></rect><rect x="1.35" y="1.35" width="33.3" height="33.3" rx="16.65" stroke="#494C56" stroke-width="1.3"></rect><path d="M27.7734 21.8086V8.51961C27.7557 7.40767 26.8909 6.5127 25.8055 6.5127H12.2684C9.34737 6.5579 7 9.00778 7 12.0091C7 13.0216 7.26474 13.8895 7.67068 14.6488C8.01484 15.2816 8.55315 15.8783 9.08263 16.3213C9.23265 16.4478 9.16206 16.3936 9.62094 16.6829C10.2563 17.0806 10.9799 17.2795 10.9799 17.2795L10.9711 25.2258C10.9888 25.6055 11.0241 25.9671 11.1211 26.3016C11.4212 27.4226 12.1801 28.2814 13.2126 28.6972C13.645 28.869 14.1304 28.9865 14.651 28.9956L25.4613 29.0317C27.6145 29.0317 29.3618 27.2418 29.3618 25.0269C29.3706 23.7161 28.7353 22.5409 27.7734 21.8086Z" fill="#FFEEDA"></path><path d="M28.038 25.1264C27.9939 26.5457 26.8555 27.6847 25.4612 27.6847L18.022 27.6576C18.6132 26.9525 18.975 26.0394 18.975 25.045C18.975 23.4811 18.0661 22.4053 18.0661 22.4053H25.47C26.8908 22.4053 28.0468 23.5895 28.0468 25.045L28.038 25.1264Z" fill="#EBC28E"></path><path d="M9.78861 15.2003C8.93261 14.3686 8.33253 13.2929 8.33253 12.0182V11.8826C8.40313 9.70392 10.1504 7.95013 12.2772 7.88685H25.8143C26.1673 7.90493 26.4497 8.15806 26.4497 8.5287V20.2628C26.7585 20.3171 26.9085 20.3623 27.2086 20.4708C27.4469 20.5612 27.7734 20.751 27.7734 20.751V8.5287C27.7557 7.41676 26.8909 6.52179 25.8055 6.52179H12.2684C9.34737 6.56699 7 9.01687 7 12.0182C7 13.7629 7.77658 15.2546 9.04733 16.3032C9.13558 16.3756 9.215 16.466 9.44445 16.466C9.84156 16.466 10.124 16.1405 10.1063 15.7879C10.0975 15.4896 9.97393 15.3811 9.78861 15.2003Z" fill="#101010"></path><path d="M25.4611 21.0312H14.845C14.1302 21.0402 13.5565 21.6279 13.5565 22.3601V23.924C13.5742 24.6473 14.1743 25.262 14.8891 25.262H15.6745V23.924H14.8891V22.3963C14.8891 22.3963 15.0832 22.3963 15.3215 22.3963C16.6628 22.3963 17.6513 23.6709 17.6513 25.036C17.6513 26.2474 16.5746 27.7932 14.7744 27.6667C13.1771 27.5582 12.3123 26.1027 12.3123 25.036V11.7831C12.3123 11.1865 11.8357 10.6983 11.2533 10.6983H10.1943V12.0543H10.9797V25.045C10.9356 27.6848 12.8153 29.0137 14.7744 29.0137L25.47 29.0498C27.6232 29.0498 29.3705 27.2599 29.3705 25.045C29.3705 22.8302 27.6144 21.0312 25.4611 21.0312ZM28.0379 25.1264C27.9938 26.5457 26.8554 27.6848 25.4611 27.6848L18.0219 27.6576C18.6132 26.9525 18.975 26.0394 18.975 25.045C18.975 23.4811 18.066 22.4053 18.066 22.4053H25.47C26.8907 22.4053 28.0468 23.5896 28.0468 25.045L28.0379 25.1264Z" fill="#101010"></path><path d="M22.6017 12.2986H14.5977V10.9426H22.6017C22.9635 10.9426 23.2636 11.2409 23.2636 11.6206C23.2636 11.9912 22.9724 12.2986 22.6017 12.2986Z" fill="#101010"></path><path d="M22.6017 18.6807H14.5977V17.3246H22.6017C22.9635 17.3246 23.2636 17.623 23.2636 18.0027C23.2636 18.3733 22.9724 18.6807 22.6017 18.6807Z" fill="#101010"></path><path d="M24.0137 15.4896H14.5977V14.1336H24.0048C24.3667 14.1336 24.6667 14.4319 24.6667 14.8116C24.6755 15.1823 24.3755 15.4896 24.0137 15.4896Z" fill="#101010"></path></svg>


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
