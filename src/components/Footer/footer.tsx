import { InstagramLogo, FacebookLogo, WhatsappLogo } from "phosphor-react";
import "./footer.css";

function Footer() {
  return (
    <div className=" Footer relative bottom-0 ">
      <div className="w-screen h-5 bg-black flex flex-row "></div>
      <div className="flex gap-5 MainSocial ">
        <div className="Social ">
          <InstagramLogo className="icon"></InstagramLogo> Instagram
        </div>
        <div className="Social">
          <FacebookLogo className="icon"></FacebookLogo> Facebook
        </div>
        <div className="Social">
          <WhatsappLogo className="icon"></WhatsappLogo> Whatsapp
        </div>
      </div>
      <div className="w-screen h-5 none"></div>
    </div>
  );
}

export default Footer;
