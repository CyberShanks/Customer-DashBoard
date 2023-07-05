
const LinkContainer = ({ icon, url, name}) => {

    return (
        <div className="link-container">
        <img className="icon" src={icon} alt="" />
        <a href={url}>
          <p className="side-text">{name}</p>
        </a>
      </div>
    )
}

export default LinkContainer;