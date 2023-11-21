const YourUsers = () => {
  return (
    <div className="info-subsection">
      <img
        className="background-animation top-animation"
        src="./images\bg-section-top-desktop-2.svg"
        alt="background-animation"
      />

      <div className="info-box info-box-blue">
        <div className="info-text">
          <h2 className="heading-secondary">Your Users</h2>
          <p className="description">
            It takes no time at all to integrate Huddle with your app's
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </p>
        </div>
        <div className="info-image">
          <img
            className="illustration"
            src="./images\illustration-your-users.svg"
            alt="background-animation"
          />
        </div>
      </div>
      <img
        className="background-animation bottom-animation"
        src="./images\bg-section-bottom-desktop-2.svg"
        alt="background-animation"
      />
    </div>
  );
};

export default YourUsers;
