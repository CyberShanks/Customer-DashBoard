const SideSocials = () => {
  return (
    <div className="social-links">
      <div className="link-container">
        <div className="icon">
          <img src="assets/account.svg" alt="" />
        </div>
        <p className="side-text">GitHub</p>
      </div>
      <div className="link-container">
        <div className="icon">
          <img src="assets/message-text.svg" alt="" />
        </div>
        <p className="side-text">LinkedIn</p>
      </div>
      <div className="link-container">
        <div className="icon">
          <img src="assets/file-document.svg" alt="" />
        </div>
        <p className="side-text">Google</p>
      </div>
    </div>
  );
};

export default SideSocials;
