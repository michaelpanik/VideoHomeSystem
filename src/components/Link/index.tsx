import React from "react";

const Link = ({ url, title, icon }: Link) => {
  return (
    <a
      href={url}
      target="_blank"
      className="shadow-lg rounded-full px-8 py-4 bg-white bg-opacity-50 hover:bg-opacity-100 flex items-center gap-4 hover:shadow-xl transition"
    >
      <div className="rounded-full bg-white w-[2.25em] h-[2.25em] flex items-center justify-center">
        {icon}
      </div>
      <span className="text-lg font-bold">{title}</span>
    </a>
  );
};

export default Link;
