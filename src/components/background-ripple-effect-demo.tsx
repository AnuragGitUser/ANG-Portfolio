"use client";
import React from "react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export default function BackgroundRippleEffectDemo() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background">
      <BackgroundRippleEffect />
      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center">
        <h1 className="text-center text-4xl font-bold text-foreground md:text-6xl">
          Interactive Background Boxes Ripple Effect
        </h1>
        <p className="mt-4 max-w-xl text-center text-muted-foreground">
          Hover over the boxes above and click. To be used on backgrounds of hero
          sections OR Call to Action sections. I beg you don't use it
          everywhere.
        </p>
      </div>
    </div>
  );
}
