import { useUser, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn, isLoaded, user } = useUser();
  return (
    <>
      <Header />
      {!isLoaded ? (
        <></>
      ) : (
        <main className="">
          <div className="">
            {isSignedIn ? (
              <>
                <div className="">Welcome {user.firstName}!</div>
              </>
            ) : (
              <div className="">Sign in to create your todo list!</div>
            )}
          </div>
        </main>
      )}
    </>
  );
}

const Header = () => {
  const { isSignedIn } = useUser();

  return (
    <header className="">
      <div>My Todo App</div>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <div>
          <SignInButton />
          &nbsp;
          <SignUpButton />
        </div>
      )}
    </header>
  );
};
