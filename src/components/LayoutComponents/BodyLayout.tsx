import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../components/ui/navigation-menu";
import NewsHighlights from "./NewsHighlights";

const BodyLayout = () => {
  const [news, setNews] = useState<string>("World");

  const tabs = [
    "World",
    "Politics",
    "Business",
    "Opinion",
    "Tech",
    "Science",
    "Health",
    "Support",
    "Entertainment",
    "Travel",
  ];
  return (
    <div className="container !px-0 mx-auto w-full pt-6">
      <h2 className="text-neutral-200 mx-auto w-full flex -ml-10 text-4xl justify-center items-center jacquard">
        The News Battalion
      </h2>

      <div className="border-t border-b mt-6 border-neutral-700 text-neutral-200 w-full items-center flex justify-center ">
        <NavigationMenu>
          <NavigationMenuList defaultValue={"World"}>
            {tabs.map((item) => (
              <NavigationMenuItem>
                <NavigationMenuTrigger onClick={() => setNews(item)}>
                  {item}
                </NavigationMenuTrigger>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <NewsHighlights news={news} />
    </div>
  );
};

export default BodyLayout;
