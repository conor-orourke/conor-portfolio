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
        limit: 1,
        include: 10,
      });

      const home = response.items.map((item) => {
        const {
          heroText,
          heroLogos,
          aboutMe,
          aboutMeTitle,
          aboutMeImage,
          getInTouch,
          footer,
        } = item.fields;
        const id = item.sys.id;
        const logoContainerId = heroLogos.sys.id;
        const { logoCard } = heroLogos?.fields;
        const aboutMeImg = aboutMeImage?.fields?.file?.url;

        const options = {
          renderText: (text) => {
            return text.split("\n").reduce((children, textSegment, index) => {
              return [
                ...children,
                index > 0 && <br key={index} />,
                textSegment,
              ];
            }, []);
          },
        };

        const heroTxt = documentToReactComponents(heroText, options);
        const aboutTxt = documentToReactComponents(aboutMe, options);
        const getInTouchTxt = documentToReactComponents(getInTouch, options);

        const logoContainer = logoCard.map((item) => {
          const { logo, logoHashLink } = item.fields;
          const logoImage = logo?.fields?.file?.url;
          const logoId = item.sys.id;
          const logoName = logo?.fields?.title;

          return {
            logoId,
            logoHashLink,
            logoName,
            logoImage,
          };
        });

        return {
          id,
          heroTxt,
          logoContainer,
          logoContainerId,
          aboutTxt,
          aboutMeTitle,
          aboutMeImg,
          getInTouchTxt,
          footer,
        };
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
