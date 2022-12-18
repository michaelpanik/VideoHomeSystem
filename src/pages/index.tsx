import React from "react";
import { Spotify } from "../components/Icon";
import Link from "../components/Link";
import { data, links } from "../data";

const IndexPage = () => {
  return (
    <main className="w-screen h-screen bg-blue-900">
      <div className="max-w-2xl mx-auto px-3">
        <div className="text-center mb-8 pt-8 text-white">
          <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
          <p className="text-xl">{data.bio}</p>
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

export default IndexPage;
