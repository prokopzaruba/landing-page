import { IonIcon } from "@ionic/react";
import { logoFacebook, logoInstagram, logoTwitter } from "ionicons/icons";

const Contact = () => {
  return (
    <div className="footer-part">
      <img className="footer-logo" src="./images/footer-logo.svg" alt="logo" />

      <p className="footer-text contact-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla
        quam, hendrerit lacinia vestibulum a, ultrices quis sem.
      </p>
      <div className="contact">
        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path d="M-3-3h24v24H-3z" />
            <path
              d="M17 12.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H1C.4 0 0 .4 0 1c0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM16 9h2c0-5-4-9-9-9v2c3.9 0 7 3.1 7 7zm-4 0h2c0-2.8-2.2-5-5-5v2c1.7 0 3 1.3 3 3z"
              fill="#FFF"
            />
          </g>
        </svg>
        <p className="contact-detail">Phone: +1-543-123-4567</p>
      </div>
      <div className="contact email">
        <svg width="20" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path d="M-2-4h24v24H-2z" />
            <path
              d="M18 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 14h-2V5.2L10 9 4 5.2V14H2V2h1.2L10 6.2 16.8 2H18v12z"
              fill="#FFF"
            />
          </g>
        </svg>
        <p className="contact-detail">example@huddle.com</p>
      </div>
      <div className="socials">
        <IonIcon
          className="socials-icon facebook"
          icon={logoFacebook}
          size="2rem;"
        ></IonIcon>
        <IonIcon
          className="socials-icon instagram"
          icon={logoInstagram}
          size="2rem;"
        ></IonIcon>
        <IonIcon
          className="socials-icon twitter"
          icon={logoTwitter}
          size="2rem;"
        ></IonIcon>
      </div>
    </div>
  );
};

export default Contact;
