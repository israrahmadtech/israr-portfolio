'use client'
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function DarkModeToggle() {
    const [dark, setDark] = useState(true);

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [dark]);

    return (
        <button
            onClick={() => setDark(!dark)}
            className={`absolute z-50 top-4 right-4 flex items-center w-16 h-8 p-1 rounded-full transition-colors duration-300 
                ${dark ? 'bg-violet-500' : 'bg-gray-300'}`}
        >
            {/* Circle */}
            <span
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300
                    ${dark ? 'translate-x-8' : 'translate-x-0'}`}
            >
                {dark ? <Moon className="w-4 h-4 text-violet-500 m-1" /> : <Sun className="w-4 h-4 text-yellow-400 m-1" />}
            </span>
        </button>
    );
}
