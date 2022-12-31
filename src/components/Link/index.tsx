import React from "react";

const Link = ({ url, title, icon }: Link) => {
  return (
    <a
      href={url}
      target="_blank"
      className="shadow-lg rounded-full px-8 py-4 bg-secondary bg-opacity-75 hover:bg-opacity-100 flex items-center gap-4 hover:shadow-xl transition"
    >
      <div className="rounded-full bg-white w-[2.25em] h-[2.25em] flex shrink-0 items-center justify-center">
        {icon}
      </div>
      <span className="md:text-lg font-bold text-primaryDark">{title}</span>
    </a>
  );
};

export default Link;
