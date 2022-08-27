import './App.css';
import email from './images/envelope.svg';
import phone from './images/phone-call.svg';
import whatsapp from './images/whatsapp.svg';
import instagram from './images/instagram.svg';
import telegram from './images/telegram.svg';
import linkedin from './images/linkedin.svg';
import facebook from './images/facebook.svg';

function App() {
  return (
    <div className="App" id='light'>
      <main>
        <article>
          <h1>CLICK
            HEIST</h1>
        </article>
      </main>
      <header>
        <section className="socials">
          <a href="https://www.facebook.com/clickheist/"><img src={facebook} alt="facebook-icon" className="social_links" /></a>
          <a href="https://www.instagram.com/clickheist_marketing/"><img src={instagram} alt="instagram-icon" className="social_links" /></a>
          <a href="https://t.me/clickheist"><img src={telegram} alt="telegram-icon" className="social_links" /></a>
          <a href="https://www.linkedin.com/company/clickheist/"><img src={linkedin} alt="linkedin-icon" className="social_links" /></a>
        </section>
        
        <section className="contact">
          <h2>CONTACT</h2>
          <div className="contacts">
            <a className="contact_link first" href='tel:+917994797664'>
            <img src={phone} alt="phone-icon" className="contact_img" />
            <p className="contact_name">+91 7994797664</p>
          </a>
          <a className="contact_link" href='mailto:service.clickheist@gmail.com'>
            <img src={email} alt="email-icon" className="contact_img" />
            <p className="contact_name">service.clickheist@gmail.com</p>
          </a>
          <a className="contact_link" href='https://wa.me/+917994797664'>
            <img src={whatsapp} alt="whatsapp-icon" className="contact_img" />
            <p className="contact_name">+91 7994797664</p>
          </a>
          </div>
          
        </section>
      </header>
      <footer>
        <article className='footer_article'><p className="footer_content">MARKETING | BUSINESS DEVELOPMENT | STRATEGY BUILDING | EVENT ORGANISING | ADVERTISEMENT</p></article>
      </footer>
    </div>
  );
}

export default App;
