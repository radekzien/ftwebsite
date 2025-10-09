import { NavLink } from "react-router";
import './Enquire.css'

export default function Enquire(){
    return(
        <div className="the-content">
            <div className="the-text">Interested in our services? Enquire now!</div>
            <div className="the-button"><NavLink to='/Contact'>Contact us</NavLink></div>
        </div>
    )
}