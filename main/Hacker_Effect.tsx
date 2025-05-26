"use client"
import { cn } from '@/lib/utils';
import React, {useEffect, useRef} from 'react'

const HackerEffect = ({text = 'HACKER_EFFECT', className}: {text: string, className?: string}) => {

    const letters = [
        'A', 'B', 'C', 'D', '#', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', '$', 'O', 'P', 'Q', '@', 'S', 'T',
        'U', '%', 'W', 'X', 'Y', 'Z'
      ];

      const wordRef = useRef<HTMLHeadingElement>(null)

      useEffect(() => {
        const word = wordRef.current;
    
        if (word) {
          const handleMouseOver = () => {
            const def_value = text.toUpperCase();
            let iteration = 0;
            const intervalID = setInterval(()=> {
              const newWORD = word.innerText.split("").map((_, index) => {
                if (index < iteration) {
                    return def_value[index];
                }
                return letters[Math.floor(Math.random() * 26)];
              }).join("");
              console.log(newWORD);
              word.innerText = newWORD;
              if (iteration > newWORD.length) {
                clearInterval(intervalID);
              }
              iteration += 1 / 2;
            }, 40);
          };
    
          word.addEventListener('mouseover', handleMouseOver);
    
          return () => {
            word.removeEventListener('mouseover', handleMouseOver);
          };
        }
      });
  return (
            <span id='word' ref={wordRef} className={cn('font-sans font-semibold text-lg cursor-pointer text-neutral-950 dark:text-white', className)}>{text.toUpperCase()}</span>
  )
}

export default HackerEffect;