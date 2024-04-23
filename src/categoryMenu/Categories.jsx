import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { LuTriangleRight } from "react-icons/lu";
import { useFetchCategories } from "./fetchCategories";

const Categories = () => {
  const { categoriesMenu } = useFetchCategories();
  const categoriesMenuData = categoriesMenu[0];
  const categoriesMenuId = categoriesMenuData?.categoriesMenuId;
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
      <section key={categoriesMenuId} className="categories-container">
        <div className="categories">
          <span>I write </span>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "none")}
            to="/COPY"
          >
            {firstLink}
          </NavLink>
          <span>, </span>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "none")}
            to="/UX"
          >
            {secondLink}
          </NavLink>
          <span>, </span>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "none")}
            to="/ARTICLES"
          >
            {thirdLink}
          </NavLink>
          <span>, and </span>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : "none")}
            to="/TRANSLATIONS"
          >
            {fourthLink}
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Categories;
