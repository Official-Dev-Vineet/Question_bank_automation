import "../styles/Footer.css";
import { List } from "../Utils/List";
import {
  aboutLinks,
  supportLinks,
} from "../Constant/Constant";
import { SocialIcon } from "../Utils/SocialIcon";
import { Logo } from "../Utils/Logo";
import PaymentPartner from "../Utils/PaymentPartner";
import { useState } from "react";
import { Button } from "rsuite";
import PopUp from "../Utils/PopUp";

export const Footer = () => {
  const [isShown, setIsShown] = useState(false);
   const setIsShownHandler=(data)=>{
     setIsShown(data)
   }
  return (
    <footer className="flex flex-wrap gap-2xl mt padding-2xl pb" style={{ "--value": 5 }}>
      <List title="Support" items={supportLinks} />
      <List title="About Us" items={aboutLinks} />
      <div className="flex flex-wrap gap-2xl">
        <PaymentPartner />
        <div className="flex flex-col align-center gap-md">
          <Logo size={150} />
          <SocialIcon />
        </div>
      </div>
      <h5 className="tac">
        Copyright&copy; 2022-{new Date().getFullYear()}. All Rights Reserved.
      </h5>
      <Button onClick={() => setIsShown(pre=>!pre)} appearance="ghost" className="ml-auto">Contact</Button>
      {
        isShown && <PopUp setIsShown={setIsShownHandler} />
      }
    </footer>
  );
};
