import { useFetchHome } from "./fetchHome";
import Categories from "../categoryMenu/Categories";

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
          // console.log(id);
          return (
            <article key={id} className="title">
              <div target="blank" rel="noreferrer" className="hero">
                <div>{heroTxt}</div>
              </div>
              <Categories />
              <div
                target="blank"
                rel="noreferrer"
                className="hero aboutMe-hero"
              >
                <div>{aboutTxt}</div>
              </div>
              <div
                target="blank"
                rel="noreferrer"
                className="hero getInTouch-hero"
              >
                <div>{getInTouchTxt}</div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Home;
