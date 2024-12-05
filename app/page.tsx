import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <ModeToggle></ModeToggle>
      <Button variant={"destructive"}>Cliquez moi</Button>
    </div>
  );
}
