import { Link } from "react-router";
import './Enquire.css'

export default function Enquire(){
    return(
        <div className="the-content">
            <div className="the-text">Interested in our services? Enquire now!</div>
            <div className="the-button"><Link to='/contact'>Contact us</Link></div>
        </div>
    )
}