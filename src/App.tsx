import { Github } from "lucide-react";
import "./App.css";
import { KanbanBoard } from "./components/KanbanBoard";
// import { ThemeToggle } from "./components/ThemeToggle";
import { ThemeProvider } from "./components/theme-provider";
import { Button } from "./components/ui/button";
import AudioToggle from "./components/AudioToggle";
import QuoteBlock from "./components/QuoteBlock";

const FooterLink = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button
      variant="link"
      asChild
      className="scroll-m-20 text-green-800 text-xl font-semibold tracking-tight"
    >
      {children}
    </Button>
  );
};

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        {/* <div className=""> */}
        <div className="min-h-screen flex flex-col">
          <header className="flex justify-between w-full flex-row p-4 bg-[#66786b] backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
">      
            <Button variant="link" asChild className="text-primary h-8 w-8 p-0 mt-2">
              <a href="https://github.com/roychung96">
                <Github className="fill-current h-full w-full" />
              </a>
            </Button>
            {/* <Button variant="link" asChild className="text-primary h-16 w-16">
              <a href="https://griffa.dev">@griffadev</a>
            </Button> */}
                        <h1 className="scroll-m-20 mt-3 text-lg align-bottom  font-extrabold tracking-tight text-green-900  font-mono">
              Mindfulness ABC Kanban
            </h1>
            <AudioToggle/>
            {/* <ThemeToggle /> */}
          </header>
          <main className="mx-4 flex flex-col gap-6 mt-8">
            {/* <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Drag and Drop Kanban Board
            </h1> */}
            <KanbanBoard />
            {/* <p className="leading-7 [&:not(:first-child)]:mt-6">
              With Keyboard Controls and Screen Reader interactions.
            </p> */}
          <QuoteBlock/>
          </main>
          <footer className="mt-6">
            <ul className="flex items-center justify-center">
              <li>
                <FooterLink>
                  <a href="https://www.raturening.com/">Ratu Rening</a>
                </FooterLink>
              </li>
              <li>
                <FooterLink>
                  <a href="http://rainforestecotherapy.com/">Ecotherapy</a>
                </FooterLink>
              </li>
              <li>
                <FooterLink>
                  <a href="https://www.tedxpetalingstreet.com/zh">Tedx Petaling Street</a>
                </FooterLink>
              </li>

            </ul>
                        <p className="leading-7 [&:not(:first-child)]:mt-6">
              <a href="https://www.linkedin.com/in/roychung96/">Built by Roy</a>
            </p>
          </footer>
        </div>
        {/* </div> */}
      </ThemeProvider>
    </>
  );
}

export default App;
