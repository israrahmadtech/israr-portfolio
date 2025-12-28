// I'll merge your simple TechSnippet with the advanced CodeBlock
// Minimal clean version wired together.

"use client";
import { CodeBlock } from "@/app/components/TechSnippet/code-block";
import { useState } from "react";

export default function TechSnippet() {
    const [active, setActive] = useState("next");

    const snippets = {
        react: {
            name: "React",
            language: "jsx",
            code: `import Hero from "./components/Hero/Hero";

export function Home() {
  const items = ["Item 1", "Item 2", "Item 3"];
  return (
    <div className="p-4">
      <Hero />
      <ul>
        {items.map((i) => <li key={i}>{i}</li>)}
      </ul>
    </div>
  );
}`,
        },

        next: {
            name: "Next.js",
            language: "jsx",
            code: `import Sidebar from './components/Sidebar/Sidebar'
import './global.css'

export function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full h-screen">
        <Sidebar />
        <main className='w-full h-full'>
          {children}
        </main>
      </body>
    </html>
  );
}`,
        },

        tailwind: {
            name: "Tailwind",
            language: "html",
            code: `<div class="max-w-md mx-auto p-6 bg-violet-600 text-white rounded-xl shadow-lg">
  <h1 class="text-2xl font-bold mb-2">Tailwind is Love</h1>
  <p class="text-white/80">
    Use utility-first classes to rapidly build beautiful UI components.
  </p>
  <button class="mt-4 px-4 py-2 bg-white text-violet-600 rounded hover:bg-violet-700 hover:text-white transition">
    Click Me
  </button>
</div>`,
        },

        supabase: {
            name: "Supabase",
            language: "js",
            code: `import { createClient } from '@supabase/supabase-js';

const supabase = createClient('URL', 'KEY');

async function getUsers() {
  const { data } = await supabase.from('users').select('*');
  console.log(data);
}`,
        },

        workflow: {
            name: "Workflow",
            language: "text",
            code: `Plan UI in Figma with responsive layouts
Build reusable components in React + Tailwind
Connect APIs using Supabase for CRUD operations
Add authentication & state management
Test components & flows thoroughly
Deploy the app on Vercel with CI/CD
Monitor performance & iterate`,
        },
    };

    const activeSnippet = snippets[active];

    return (
        <div className="w-full max-w-md min-h-130 mx-auto bg-black dark:bg-[#01000394] border border-white/10 rounded-xl p-0 select-none shadow-[0_0_70px_10px_rgba(139,92,246,0.2)] overflow-hidden flex flex-col">

            {/* Tabs */}
            <div className="border-b border-white/10 flex w-full">
                {Object.entries(snippets).map(([key, item]) => (
                    <button
                        key={key}
                        onClick={() => setActive(key)}
                        className={`font-semibold flex-1 text-center py-3 text-sm transition border-r border-white/5 last:border-r-0
            ${active === key ? "text-violet-400 bg-[#33007249]" : "text-gray-400 hover:text-white"}`}
                    >
                        {item.name}
                    </button>
                ))}
            </div>

            {/* Code */}
            <CodeBlock
                language={activeSnippet.language}
                code={activeSnippet.code}
            />

            {/* Footer */}
            <div className="mt-auto border-t border-white/10 px-5 py-3 pt-1 text-sm text-gray-400 flex justify-between items-center">
                <span>Documentation →</span>
                <button
                    onClick={() => navigator.clipboard.writeText(activeSnippet.code)}
                    className="text-gray-500 hover:text-white transition"
                >
                    ⧉
                </button>
            </div>
        </div>
    );
}