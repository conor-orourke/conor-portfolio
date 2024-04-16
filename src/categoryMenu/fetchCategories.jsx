import { useState, useEffect } from "react";
import client from "../client";

export const useFetchCategories = () => {
  const [categoriesMenu, setCategoriesMenu] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "menu",
        limit: 1,
        include: 10,
      });

      const categoriesMenu = response.items.map((item) => {
        const { firstMenu, secondMenu, thirdMenu, fourthMenu } = item.fields;

        return { firstMenu, secondMenu, thirdMenu, fourthMenu };
      });

      setCategoriesMenu(categoriesMenu);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { categoriesMenu };
};
