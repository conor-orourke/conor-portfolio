import { useState, useEffect } from "react";
import client from "../client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const useFetchCategoryPage = (contentId) => {
  const [loading, setLoading] = useState(true);
  const [categoryPage, setCategoryPage] = useState([]);
  const [categoryPageCards, setCategoryPageCards] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: contentId,
      });

      const categoryPage = response.items.map((item) => {
        const { contentPageTitle, categoryCards } = item.fields;
        const categoryPageId = item.sys.id;

        const categoryPageCards = categoryCards.map((item) => {
          const { exampleWorkTitle, exampleWorkText, exampleWorkImage } =
            item.fields;

          const categoryPageCardId = item.sys.id;
          const cardImg = exampleWorkImage?.fields?.file?.url;
          const portfolioText = documentToReactComponents(exampleWorkText);

          return {
            categoryPageCardId,
            exampleWorkTitle,
            portfolioText,
            cardImg,
          };
        });

        return {
          categoryPageId,
          contentPageTitle,
          categoryPageCards,
        };
      });

      setCategoryPage(categoryPage);
      setCategoryPageCards(categoryPageCards);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, categoryPage, categoryPageCards };
};