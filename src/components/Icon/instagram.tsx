import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const Instagram = (props: any) => {
  const image = useStaticQuery(graphql`
    {
      file(name: { eq: "instagram" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  return (
    <GatsbyImage
      image={image.file.childImageSharp.gatsbyImageData}
      alt="Instagram"
      className="w-4 h-4"
    />
  );
};

export default Instagram;
