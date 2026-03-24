import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const defaultLines = [
  { text: "root@pranav-sec:~# ./init_red_team.sh", cmd: true },
  { text: "[+] Initializing security scan...", cmd: false },
  { text: "[+] Bypassing LLM guardrails (jailbreak_v4)... OK", cmd: false },
  { text: "[!] Vulnerability detected in model alignment.", cmd: false, color: "text-yellow-400" },
  { text: "[+] Exploit successful. Privileges escalated.", cmd: false, color: "text-green-400" },
  { text: "root@pranav-sec:~# cat skills.txt", cmd: true },
  { text: "Full-Stack Dev | Red Teaming | AI Safety | Penetration Testing", cmd: false, color: "text-cyan-400" },
  { text: "root@pranav-sec:~# echo 'Ready for next target.'", cmd: true },
  { text: "Ready for next target.", cmd: false }
];

export const HackerTerminal = () => {
  const [lines, setLines] = useState<any[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= defaultLines.length) return;

    const currentLine = defaultLines[currentLineIndex];

    // If it's a command being typed out
    if (currentLine.cmd) {
      if (currentCharIndex < currentLine.text.length) {
        const timeout = setTimeout(() => {
          setLines((prev) => {
            const newLines = [...prev];
            if (!newLines[currentLineIndex]) newLines[currentLineIndex] = { ...currentLine, text: "" };
            newLines[currentLineIndex].text = currentLine.text.substring(0, currentCharIndex + 1);
            return newLines;
          });
          setCurrentCharIndex(prev => prev + 1);
        }, 30 + Math.random() * 40); // Random delays for realism
        return () => clearTimeout(timeout);
      } else {
        // Line finished typing, wait a moment then go to next line
        const timeout = setTimeout(() => {
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, 400);
        return () => clearTimeout(timeout);
      }
    } else {
      // If it's pure output, print it instantly
      const timeout = setTimeout(() => {
        setLines(prev => {
          const newLines = [...prev];
          newLines[currentLineIndex] = currentLine;
          return newLines;
        });
        setCurrentLineIndex(prev => prev + 1);
      }, 500); // Small delay before printing output
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full rounded-xl overflow-hidden border border-gray-700 bg-[#0A0A0B] shadow-2xl font-mono text-sm sm:text-base relative"
    >
      {/* Mac OS Window Header */}
      <div className="bg-gray-800/80 border-b border-gray-700 px-4 py-2 sm:py-3 flex items-center gap-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="mx-auto text-xs text-gray-400 font-sans tracking-widest font-semibold flex items-center gap-2 opacity-50">
          root@pranav-sec
        </div>
        <div className="w-12"></div> {/* Spacer for balance */}
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-6 min-h-[250px] sm:min-h-[300px]">
        {lines.map((line, index) => (
          <div key={index} className={`mb-1.5 ${line.color || 'text-gray-300'}`}>
            {line.text}
          </div>
        ))}
        {/* Blinking Cursor */}
        {currentLineIndex < defaultLines.length && (
          <span className="inline-block w-2.5 h-4 sm:h-5 bg-gray-400 animate-pulse mt-1 align-middle ml-1"></span>
        )}
      </div>
    </motion.div>
  );
};

export default HackerTerminal;
