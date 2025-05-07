import { SignedOut, SignInButton, SignUpButton, SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
        <SignedOut>
           <SignInButton mode="modal"/>
           <SignUpButton />
        </SignedOut>
        
        <SignedIn>
           <UserButton />
        </SignedIn>
    </div>
  );
}
