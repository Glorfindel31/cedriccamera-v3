import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/theme-toggle";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav className="flex h-full w-[40vw] flex-row items-center">
        <ul className="flex flex-col items-center gap-4">
          <li>
            <h1>Cedric Florentin</h1>
          </li>
          <li>
            <ThemeToggle />
          </li>
          <li>
            <Button variant={"ghost"} asChild>
              <Link href={"/all"}>All</Link>
            </Button>
          </li>
          <li>
            <Button variant={"ghost"} asChild>
              <Link href={"/all"}>Digital // Commercial</Link>
            </Button>
          </li>
          <li>
            <Button variant={"ghost"} asChild>
              <Link href={"/all"}>Digital // Others</Link>
            </Button>
          </li>
          <li>
            <Button variant={"ghost"} asChild>
              <Link href={"/all"}>Film // Commercial</Link>
            </Button>
          </li>
          <li>
            <Button variant={"ghost"} asChild>
              <Link href={"/all"}>Film // Other</Link>
            </Button>
          </li>
          <li>
            <Button variant={"ghost"} asChild>
              <Link href={"/all"}>Instagram</Link>
            </Button>
          </li>
          <li>
            <Button variant={"ghost"} asChild>
              <Link href={"/all"}>About Me</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </main>
  );
}
