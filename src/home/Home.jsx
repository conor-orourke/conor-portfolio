import { useFetchHome } from "./fetchHome";
import { Link } from "react-router-dom";
import Categories from "../categoryMenu/Categories";
import ScrollUp from "../categoryPages/BackToTopBtn";

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
          const { id, heroTxt, aboutTxt, getInTouchTxt } = homePage;

          return (
            <article key={id} className="title ">
              <Link to="/" className="cat-link-title">
                <div>{heroTxt}</div>
              </Link>
              <Categories />
              <div className="hero aboutMe-hero">
                <div className="hero-heading">{aboutTxt}</div>
              </div>
              <div
                target="blank"
                rel="noreferrer"
                className="hero getInTouch-hero"
              >
                <div className="hero-heading">{getInTouchTxt}</div>
              </div>
            </article>
          );
        })}
      </div>
      <ScrollUp />
      <Link to="/LEGAL" className="footer-wrapper-home">
        <div className="footer">{footer}</div>
      </Link>
    </section>
  );
};

export default Home;
