import NavBar from "../components/Nav/NavBar";
import Rights from "../components/Footer"


export default function Privacy() {
  return ( 
    <div id='root' className="p-4">
      <NavBar />
      <h4>
        1. Information We Collect<br />
<br />
We only collect personal information that you voluntarily provide through our website forms, such as your email address.<br />
<br /><br />
2. How We Use Your Information<br />
<br />
Any emails you submit are sent directly to our company inbox to respond to inquiries or provide requested information. We do not store your emails on the website or in any database.<br />
<br /><br />
3. Cookies and Tracking<br />
<br />
Our website does not use cookies, track IP addresses, or collect other personal information. We do not use third-party analytics tools.<br />
<br /><br />
4. Third-Party Hosting<br />
<br />
Our website is hosted by Vercel. Vercel handles the website hosting and delivery but does not have access to your submitted emails.<br />
<br /><br />
5. Data Retention<br />
<br />
Emails submitted through forms remain in our company inbox for as long as necessary to respond to your inquiry and are not retained on the website.<br />
<br /><br />
6. Your Rights<br />
<br />
You may contact us at any time to:<br />
<br />
Request information about emails you submitted.<br />
<br />
Request deletion of your email from our company inbox (if applicable).<br />
<br /><br />
7. Contact Us<br />
<br />
If you have any questions about this Privacy Policy, please contact us at:<br />
Email: [your company email]<br />
Address: [your company address, optional]<br />
<br /><br />
8. Changes to this Policy<br />
<br />
We may update this Privacy Policy from time to time. Any updates will be posted on this page with a revised “Effective Date.”
      </h4>
      <Rights />
    </div>
  );
}