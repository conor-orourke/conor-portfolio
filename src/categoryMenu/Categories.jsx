import { useFetchCategoryPage } from "../categoryPages/fetchCategoryPage";
import { Link } from "react-router-dom";
import { LuTriangleRight } from "react-icons/lu";

const Categories = () => {
  return (
    <>
      <section className="back-to-home-container">
        <Link to="/" className="back-to-home">
          <LuTriangleRight className="back-to-home-btn" />
        </Link>
      </section>
      <section className="categories-container">
        <div className="categories">
          <span>I write </span>
          <Link to="/copywriting" className="cat-link ">
            Copy
          </Link>
          <span>, </span>
          <Link to="/ux-writing" className="cat-link ">
            UX
          </Link>
          <span>, </span>
          <Link to="/articles" className="cat-link ">
            Articles
          </Link>
          <span> and </span>
          <Link to="/translation" className="cat-link ">
            Translations
          </Link>
        </div>
      </section>
    </>
  );
};

export default Categories;
