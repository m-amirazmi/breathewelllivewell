import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const [groupSelection, setGroupSelection] = useState<"A" | "B">("A");

  return (
    <div>
      <div className="bg-[linear-gradient(180deg,#2f7e9b,#b3f1ff)] px-4">
        <div className="relative container mx-auto">
          <img
            src="/assets/images/hero_banner.webp"
            alt="karnival_kesihatan_2025"
          />
          <Button
            asChild
            variant="ida"
            className="text-lg md:text-xl py-6 px-8 absolute right-1/2 translate-x-1/2 bottom-4 z-10"
          >
            <a
              target="_blank"
              href="https://forms.gle/GCh7CD5j8cgNxscu9"
              rel="noreferrer"
            >
              Borang Soal Selidik Pra-Program
            </a>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="scroll-m-20 pb-4 text-3xl font-semibold tracking-tight first:mt-0">
          Tentatif Program
        </h2>
        <div className="flex gap-4">
          <Button
            variant="ida"
            className={`cursor-pointer ${groupSelection === "A" ? "bg-black text-white hover:bg-black hover:text-white" : ""}`}
            onClick={() => setGroupSelection("A")}
          >
            Group A (10 - 59 Tahun)
          </Button>
          <Button
            className={`cursor-pointer ${groupSelection === "B" ? "bg-black text-white hover:bg-black hover:text-white" : ""}`}
            onClick={() => setGroupSelection("B")}
            variant="ida"
          >
            Group B (18 Tahun Keatas)
          </Button>
        </div>
        <div>
          table {groupSelection} content here
        </div>
      </div>
      {/* 3 Image Pameran */}
    </div>
  );
}
