import { useState, useEffect } from "react";
import './slideshow.css'

interface SlideshowProps{
    images: string[],
    captions: string[],
    interval?: number,
}

export default function Slideshow({ images, interval = 3000, captions } : SlideshowProps){
    const[index, setIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState(""); // what is currently shown
    const [charIndex, setCharIndex] = useState(0);
    /**useEffect(() => {
        const timer = setInterval(next, interval);

        return() => clearInterval(timer)
    }, [interval, images.length])**/

    useEffect(() => {
        setDisplayedText(""); 
        setCharIndex(0);

        const caption = captions[index];
        const typingInterval = setInterval(() => {
        setCharIndex((prev) => {
            if (prev < caption.length) {
            setDisplayedText(caption.slice(0, prev + 1));
            return prev + 1;
            } else {
            clearInterval(typingInterval);
            return prev;
            }
        });
    }, 50);

    return () => clearInterval(typingInterval);
  }, [index, captions]);


    const next = () => setIndex((index + 1) % images.length);
    const prev = () => setIndex((index - 1 + images.length) % images.length);

    return(
        <div className="slideshow">
            <img src={images[index]} className="slideshow-image"/>
            <div className="caption">{captions[index]}</div>
            <button onClick={prev} className="prev">◀</button>
            <button onClick={next} className="next">▶</button>
        </div>
    )
}

function setDisplayedText(arg0: string) {
    throw new Error("Function not implemented.");
}
