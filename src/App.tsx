import * as React from "react";
import { Minus, Plus } from "lucide-react";

import { Button } from "./components/ui/Button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./components/ui/drawer";
import { ThemeProvider } from "styled-components";
import TopBar from "./components/LayoutComponents/TopBar";
import BodyLayout from "./components/LayoutComponents/BodyLayout";

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

export default function App() {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <div className="dark roboto">
      <div className="h-screen w-full dark:bg-neutral-950 overflow-auto pb-6">
        <TopBar />
        <BodyLayout />

      </div>
    </div>
  );
}
