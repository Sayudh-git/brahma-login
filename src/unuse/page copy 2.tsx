'use client';

import { PrivyProvider } from '@privy-io/react-auth';
import { Logo } from '@/components/Logo';
import Link from 'next/link';
import { usePrivy } from '@privy-io/react-auth';

function SignInComponent() {
  const { login, ready, authenticated, user } = usePrivy();

  if (!ready) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Left Side: Dot Background */}
      <div className="flex-1 hidden md:flex items-center justify-center relative bg-gray-200 dark:bg-gray-800 bg-dot-gray-300 dark:bg-dot-gray-700">
        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 text-gray-800 dark:text-gray-300">
          Welcome Back!
        </p>
      </div>
      {/* Right Side: Sign In Form */}
      <div className="flex-1 flex items-center justify-center bg-neutral-900 dark:bg-gray-900">
        <div className="max-w-md w-full p-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>

            
          </div>
          {/* Privy Login Component */}
          <div className="w-full">
            {!authenticated ? (
              <div className="space-y-4">
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded w-full"
                  onClick={() => login()}
                >
                  Log in with Wallet
                </button>
                <button
                  className="bg-gray-600 text-white px-4 py-2 rounded w-full"
                  onClick={() => login()}
                >
                  Log in with Email
                </button>
                <button
                  className="bg-red-600 text-white px-4 py-2 rounded w-full"
                  onClick={() => login()}
                >
                  Log in with Google
                </button>
                {/* Add more buttons for other login methods as needed */}
              </div>
            ) : (
              <div className="text-center text-gray-100">
                <p>Welcome, {user?.email || user?.wallet?.address}</p>
                <p>You are successfully logged in!</p>
              </div>
            )}
          </div>
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