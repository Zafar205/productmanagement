import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import { PenBox } from 'lucide-react';
import UserMenu from './user-menu';

const Header = () => {
  return (
    <header className="bg-gray">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        {/* Logo */}
        <Link href="/" passHref>
          <Image
            src="/pman.png"
            alt="Logo"
            width={100}
            height={100}
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-4">
          <Link href="/project/create" passHref>
            <Button>
              <PenBox size={18}/>
              <span>Create Project</span>
            </Button>
          </Link>
          
          {/* Authentication Buttons */}
          <div className="ml-4">
            <SignedOut>
              <SignInButton forceRedirectUrl="/onboarding">
                <Button variant="outline">Login</Button>
              </SignInButton>
            </SignedOut>


            <SignedIn>
              <UserMenu />
            </SignedIn>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
