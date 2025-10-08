import { useState, useEffect } from "react";
import './slideshow.css'

interface SlideshowProps{
    images: string[],
    captions: string[],
    interval?: number,
}

export default function Slideshow({ images, interval = 5000, captions } : SlideshowProps){
    const[index, setIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if(paused){ return;}

        const timer = setInterval(() => {
            setIndex(prev => (prev + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [paused, interval, images.length]);

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


    const next = () => {setIndex(prev => (prev + 1) % images.length);
                        setDisplayedText("")}
    const prev = () => {setIndex(prev => (prev - 1 + images.length) % images.length);
                        setDisplayedText("");}

    return(
        <div className="slideshow"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}>
            <img src={images[index]} className="slideshow-image"/>
            <div className="caption">{displayedText}</div>
            <button onClick={prev} className="prev">◀</button>
            <button onClick={next} className="next">▶</button>
        </div>
    )
}
