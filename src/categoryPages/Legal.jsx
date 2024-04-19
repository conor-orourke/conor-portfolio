import { useFetchCategoryPage } from "../categoryPages/fetchCategoryPage";
import { Link } from "react-router-dom";
import Categories from "../categoryMenu/Categories";
import ScrollUp from "../categoryPages/BackToTopBtn";

const Legal = () => {
  const { loading, categoryPage } = useFetchCategoryPage("legal");

  const legalPage = categoryPage[0];
  const legalPageTitle = legalPage?.contentPageTitle;
  const legalPageID = legalPage?.categoryPageId;
  const legalPageInfo = legalPage?.catInfo;
  const legalPageFooter = legalPage?.footer;

  if (loading) {
    return <section className="loading"></section>;
  }

  return (
    <section className="section">
      <div className="wrapper">
        <article key={legalPageID} className="min-height">
          <div className="page">
            <Link to="/" className="cat-link-title">
              <h1>{legalPageTitle}</h1>
            </Link>
            <Categories />
            <div className="cat-info">{legalPageInfo}</div>
          </div>
        </article>
      </div>
      <ScrollUp />
      <Link to="/LEGAL" className="footer-wrapper">
        <div className="footer">{legalPageFooter}</div>
      </Link>
    </section>
  );
};

export default Legal;
