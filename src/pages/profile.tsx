import { SignIn, SignedIn, SignedOut, UserProfile } from "@clerk/nextjs";

/* eslint-disable react/no-unescaped-entities */
export default function Profile() {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignedOut>
        <SignIn />
      </SignedOut>
      <SignedIn>
        <UserProfile />
      </SignedIn>
    </div>
  );
}
