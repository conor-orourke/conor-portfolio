import { useFetchCategoryPage } from "./fetchCategoryPage";
import { Link } from "react-router-dom";
import Categories from "../categoryMenu/Categories";
import ScrollUp from "./BackToTopBtn";

const CopyWriting = () => {
  const { loading, categoryPage } = useFetchCategoryPage("copywriting");

  const copyPage = categoryPage[0];
  const footer = copyPage?.footer;

  if (loading) {
    return <section className="loading"></section>;
  }

  return (
    <section className="section">
      <div className="wrapper">
        {categoryPage.map((categoryPage) => {
          const {
            categoryPageId,
            categoryPageCards,
            contentPageTitle,
            catInfo,
            catContact,
          } = categoryPage;

          return (
            <article key={categoryPageId}>
              <div className="page">
                <Link to="/" className="cat-link-title">
                  <h1>{contentPageTitle}</h1>
                </Link>
                <Categories />
                <div className="cat-info">{catInfo}</div>
                <div className="cards-container">
                  {categoryPageCards.map((card) => {
                    const {
                      categoryPageCardId,
                      exampleWorkTitle,
                      portfolioText,
                      cardImg,
                    } = card;

                    return (
                      <div
                        key={categoryPageCardId}
                        id={categoryPageCardId}
                        className="card-container"
                      >
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
                  <div className="cat-contact">{catContact}</div>
                </div>
              </div>
            </article>
          );
        })}
        <ScrollUp />
      </div>
      <Link to="/LEGAL" className="footer-wrapper">
        <div className="footer">{footer}</div>
      </Link>
    </section>
  );
};

export default CopyWriting;
