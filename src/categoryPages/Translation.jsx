import { useFetchCategoryPage } from "./fetchCategoryPage";
import { Link } from "react-router-dom";
import Categories from "../categoryMenu/Categories";
import ScrollUp from "./BackToTopBtn";

const Translation = () => {
  const { loading, categoryPage } = useFetchCategoryPage("translation");

  if (loading) {
    return <section className="loading"></section>;
  }

  return (
    <section className="section">
      <div className="wrapper">
        {categoryPage.map((categoryPage) => {
          const { categoryPageId, categoryPageCards, contentPageTitle } =
            categoryPage;

          return (
            <article key={categoryPageId}>
              <div className="page">
                <Link to="/" className="cat-link-title">
                  <h1>{contentPageTitle}</h1>
                </Link>
                <Categories />
                <div className="cards-container">
                  {categoryPageCards.map((card) => {
                    const {
                      categoryPageCardId,
                      exampleWorkTitle,
                      portfolioText,
                      cardImg,
                    } = card;

                    return (
                      <div key={categoryPageCardId} className="card-container">
                        <div className="card-left">
                          <h3 className="card-title">{exampleWorkTitle}</h3>
                          <div className="card-text">{portfolioText}</div>
                        </div>
                        <div className="card-right">
                          <img
                            src={cardImg}
                            alt={exampleWorkTitle}
                            className="card-img"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <ScrollUp />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Translation;
