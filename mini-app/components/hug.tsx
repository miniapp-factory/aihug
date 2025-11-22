"use client";

import { Button } from "@/components/ui/button";

export default function Hug() {
  return (
    <div className="flex flex-col items-center gap-4">
      <span className="text-4xl">🤗</span>
      <p className="text-center text-lg">
        Sending you a comforting virtual hug! Take a deep breath and feel the warmth.
      </p>
      <Button variant="outline">Send another hug</Button>
    </div>
  );
}
