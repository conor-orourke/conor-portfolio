import { useState, useEffect } from "react";
import client from "../client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export const useFetchHome = () => {
  const [loading, setLoading] = useState(true);
  const [home, setHome] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "hero",
      });

      const home = response.items.map((item) => {
        const { heroText, aboutMe, getInTouch } = item.fields;
        const id = item.sys.id;

        const heroTxt = documentToReactComponents(heroText);
        const aboutTxt = documentToReactComponents(aboutMe);
        const getInTouchTxt = documentToReactComponents(getInTouch);

        return { id, heroTxt, aboutTxt, getInTouchTxt };
      });

      setHome(home);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return { loading, home };
};
