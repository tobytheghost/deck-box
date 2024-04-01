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
    <>
      <header>
        <NavigationMenu className="p-2">
          <NavigationMenuList>
            <NavigationMenuLink
              href="/"
              className="hover:text-primary text-muted-foreground flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors"
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
      <main className="flex h-screen flex-col bg-gray-100">{children}</main>
      <footer></footer>
    </>
  );
};

export default AppLayout;
