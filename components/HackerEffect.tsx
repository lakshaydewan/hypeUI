"use client"
import React, { useEffect, useRef } from 'react'

const HackerEffect = ({ text }: { text: string }) => {

    const letters = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    const wordRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        const word = wordRef.current;

        if (word) {
            console.log(word.innerText); // Accessing innerText

            // Add the 'mouseover' event listener
            const handleMouseOver = (event: MouseEvent) => {
                const def_value = text.toUpperCase();
                console.log('Mouse over the word:', event);
                console.log("innerText: " + word.innerText)
                let iteration = 0;
                const intervalID = setInterval(() => {
                    const newWORD = word.innerText.split("").map((letter, index) => {
                        if (index < iteration) {
                            return def_value[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    }).join("");
                    word.innerText = newWORD;
                    if (iteration > def_value.length) {
                        clearInterval(intervalID);
                    }
                    iteration += 1 / 2;
                }, 30)
            };

            word.addEventListener('mouseover', handleMouseOver);

            // Cleanup the event listener when the component unmounts
            return () => {
                word.removeEventListener('mouseover', handleMouseOver);
            };
        }
    });
    return (
        <h1 id='word' ref={wordRef} className='font-sans font-semibold text-white'>{text.toUpperCase()}</h1>
    )
}

export default HackerEffect;