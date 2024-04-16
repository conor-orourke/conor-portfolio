import { useFetchHome } from "./fetchHome";
import { Link } from "react-router-dom";
import Categories from "../categoryMenu/Categories";
import ScrollUp from "../categoryPages/BackToTopBtn";

const Home = () => {
  const { loading, home } = useFetchHome();

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
                <div>{aboutTxt}</div>
              </div>
              <div
                target="blank"
                rel="noreferrer"
                className="hero getInTouch-hero"
              >
                <div>{getInTouchTxt}</div>
              </div>
              <ScrollUp />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Home;
{
  /* <Link to="/" className="cat-link">
            Home
          </Link> */
}
