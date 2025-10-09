import Enquire from "../components/Enquire";
import HomeInfo from "../components/Home/HomeInfo";
import NavBar from "../components/Nav/NavBar";
import Rights from "../components/Footer"
import Slideshow from "../components/ui/slideshow";
import {slideshowImages, slideshowCaptions} from "../data/slideshowImages";

export default function Home() {
  return ( 
    <div id='root' className="p-4">
      <NavBar />
      <Slideshow images={slideshowImages} captions={slideshowCaptions} />
      <HomeInfo />
      <Enquire />
      <Rights />
    </div>
  );
}