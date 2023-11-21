const GrowingTogether = () => {
  return (
    <div className="info-subsection">
      <div>
        <img
          className="background-animation top-animation"
          src="./images\bg-section-top-desktop-1.svg"
          alt="background-animation"
        />
      </div>

      <div className="info-box info-box-blue">
        <div className="info-text">
          <h2 className="heading-secondary">Grow Together</h2>
          <p className="description">
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </p>
        </div>
        <div className="info-image">
          <img
            className="illustration"
            src="./images\illustration-grow-together.svg"
            alt="background-animation"
          />
        </div>
      </div>
      <img
        className="background-animation bottom-animation"
        src="./images\bg-section-bottom-desktop-1.svg"
        alt="background-animation"
      />
    </div>
  );
};

export default GrowingTogether;
