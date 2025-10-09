import './Footer.css'
export default function Rights(){
    return(
        <footer className="the-footer">
            <div className="footer-section-left">
                <h4>Friendly Transport Ltd.</h4>
                <p>Friendlier Logistics since 2025.</p>
            </div>

            <div className="footer-section-left">
                <h4>Quick Links</h4>
                <a href="/Home">Home</a>
                <a href="/Clients">Home</a>
                <a href="/About">About</a>
                <a href="/Contact">Contact</a>
                <a href="/Privacy">Privacy Policy</a>
            </div>

            <div className="footer-section-right">
                <h4>Created by Radoslaw Zienkiewicz</h4>
                <div className="creator-links">
                Add links
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 Friendly Transport Ltd. All rights reserved.</p>
            </div>
            </footer>
    )
}