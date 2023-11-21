const Newsletter = () => {
  return (
    <div className="footer-part newsletter">
      <h3 className="heading-terciary">Newsletter</h3>
      <p className="footer-text newsletter-text">
        To recieve tips on how to grow your community, sign up to our weekly
        newsletter. We’ll never send you spam or pass on your email address
      </p>
      <form className="subscribe-form" action="submit">
        <input className="email-input" type="email" required />
        <button className="subscribe-button" type="submit">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
