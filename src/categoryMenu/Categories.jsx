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
          <Link to="/" className="cat-link">
            Home
          </Link>
          <Link to="/copywriting" className="cat-link">
            Copy
          </Link>
          <Link to="/ux-writing" className="cat-link">
            UX
          </Link>
          <Link to="/articles" className="cat-link">
            Articles
          </Link>
          <Link to="/translation" className="cat-link">
            Translation
          </Link>
        </div>
      </section>
    </>
  );
};

export default Categories;
