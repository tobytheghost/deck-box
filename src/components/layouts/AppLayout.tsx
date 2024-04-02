import React from "react";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "~/components/ui/navigation-menu";

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <header className="flex gap-4 p-2">
        <div className="flex items-center justify-center">deck.box</div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuLink
              href="/"
              className="flex h-7 items-center justify-center rounded-full px-4 text-center text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
      <main className="container flex h-full flex-grow flex-col">
        {children}
      </main>
      <footer></footer>
    </div>
  );
};

export default AppLayout;
