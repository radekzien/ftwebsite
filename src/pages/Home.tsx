import NavBar from "../components/Nav/NavBar";
import Slideshow from "../components/ui/slideshow";

export default function Home() {
  return ( 
    <div id='root' className="p-4">
      <NavBar />
      <Slideshow images={['/slideshow/stock1.jpeg','/slideshow/stock2.jpeg','/slideshow/stock3.jpeg']} />
    </div>
  );
}