import { Link } from "react-router-dom";
import { LuTriangleRight } from "react-icons/lu";
import { useFetchCategories } from "./fetchCategories";

const Categories = () => {
  const { categoriesMenu } = useFetchCategories();
  const categoriesMenuData = categoriesMenu[0];
  const firstLink = categoriesMenuData?.firstMenu?.fields?.contentMenuTitle;
  const secondLink = categoriesMenuData?.secondMenu?.fields?.contentMenuTitle;
  const thirdLink = categoriesMenuData?.thirdMenu?.fields?.contentMenuTitle;
  const fourthLink = categoriesMenuData?.fourthMenu?.fields?.contentMenuTitle;

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
            {firstLink}
          </Link>
          <span>, </span>
          <Link to="/ux-writing" className="cat-link ">
            {secondLink}
          </Link>
          <span>, </span>
          <Link to="/articles" className="cat-link ">
            {thirdLink}
          </Link>
          <span> and </span>
          <Link to="/translation" className="cat-link ">
            {fourthLink}
          </Link>
        </div>
      </section>
    </>
  );
};

export default Categories;
