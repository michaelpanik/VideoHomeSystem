import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Link from "../components/Link";
import { data as content, links } from "../data";

const IndexPage = ({ data }) => {
  return (
    <main className="font-serif w-screen h-screen bg-gradient-to-b to-secondary via-tertiary from-primaryDark">
      <div className="max-w-2xl mx-auto px-3">
        <div className="text-center mb-8 pt-8 text-white">
          <GatsbyImage
            image={data.file.childImageSharp.gatsbyImageData}
            alt={content.title}
            className="w-48 md:w-80 mx-w-full mb-6"
          />
          <h1 className="text-3xl font-bold mb-4 sr-only">{content.title}</h1>
          <p className="text-lg md:text-xl text-white font-sans font-bold text-2xl mb-6">
            {content.handle}
          </p>
          <p className="md:text-xl text-white italic">{content.bio}</p>
        </div>
        <div className="grid gap-6">
          {links.map((link: Link) => (
            <Link {...link} />
          ))}
        </div>
      </div>
    </main>
  );
};

export const data = graphql`
  {
    file(name: { eq: "logo" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;

export default IndexPage;
