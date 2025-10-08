import { useState, useEffect } from "react";
import './slideshow.css'

interface SlideshowProps{
    images: string[],
    interval?: number,
}

export default function Slideshow({ images, interval = 3000 } : SlideshowProps){
    const[index, setIndex] = useState(0);
    /**useEffect(() => {
        const timer = setInterval(next, interval);

        return() => clearInterval(timer)
    }, [interval, images.length])**/

    const next = () => setIndex((index + 1) % images.length);
    const prev = () => setIndex((index - 1 + images.length) % images.length);

    return(
        <div className="slideshow">
            <img src={images[index]} className="slideshow-image"/>
            <button onClick={prev} className="prev">◀</button>
            <button onClick={next} className="next">▶</button>
        </div>
    )
}