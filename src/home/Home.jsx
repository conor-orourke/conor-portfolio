import { useFetchHome } from "./fetchHome";
import { Link } from "react-router-dom";
import Categories from "../categoryMenu/Categories";
import ScrollUp from "../categoryPages/BackToTopBtn";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  const { loading, home } = useFetchHome();

  const homePage = home[0];
  const footer = homePage?.footer;

  if (loading) {
    return <section className="loading"></section>;
  }

  return (
    <section className="section">
      <div className="wrapper">
        {home.map((homePage) => {
          const {
            id,
            logoContainer,
            logoContainerId,
            logoName,
            heroTxt,
            aboutTxt,
            aboutMeTitle,
            aboutMeImg,
            getInTouchTxt,
          } = homePage;

          return (
            <article key={id} className="title min-height">
              <Link to="/" className="cat-link-title">
                <div>{heroTxt}</div>
              </Link>
              <Categories />
              <div key={logoContainerId} className="logo-container">
                {logoContainer.map((logo) => {
                  const { logoId, logoHashLink, logoImage } = logo;

                  return (
                    <HashLink
                      smooth
                      to={logoHashLink}
                      key={logoId}
                      className="logo-links"
                    >
                      <img
                        key={logoId}
                        src={logoImage}
                        alt={logoName}
                        className="logo"
                      />
                    </HashLink>
                  );
                })}
              </div>
              <div className="hero aboutMe-hero">
                <div className="hero-heading">{aboutTxt}</div>
              </div>
              <div className="getInTouch-hero getInTouch">
                <div className="aboutMe-title">{aboutMeTitle}</div>
                <div className="getInTouch-container">
                  <div className="hero-heading getInTouch-text">
                    {getInTouchTxt}
                  </div>
                  <img
                    src={aboutMeImg}
                    alt="Conor O'Rourke"
                    className="about-img"
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <ScrollUp />
      <Link to="/LEGAL" className="footer-wrapper">
        <div className="footer">{footer}</div>
      </Link>
    </section>
  );
};

export default Home;
