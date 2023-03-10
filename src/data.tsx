import React from "react";
import {
  Bandcamp,
  Envelope,
  Instagram,
  Record,
  Spotify,
} from "./components/Icon";

export const data = {
  title: "Video Home System",
  handle: "@videohomesystemmusic",
  bio: "In your heart, in your home.",
};

const iconStyle = { maxWidth: "1.5em", maxHeight: "1.5em" };

export const links: Link[] = [
  {
    title: "First album out now on Spotify",
    icon: <Spotify style={iconStyle} />,
    url: "https://open.spotify.com/album/1MjsxXRRmcE6BF7dgo0hoQ",
  },
  {
    title: "Buy our music on Bandcamp",
    icon: <Bandcamp style={iconStyle} />,
    url: "https://videohomesystem.bandcamp.com/",
  },
  {
    title: "Photos, videos, fun synth jams on Instagram",
    icon: <Instagram style={iconStyle} />,
    url: "https://instagram.com/videohomesystemmusic",
  },
  {
    title: "Email for booking, promotion, hatemail, whatever",
    icon: <Envelope style={iconStyle} />,
    url: "mailto:videohomesystemmusic@gmail.com",
  },
  {
    title: "Our benevolent overlords at Great Set Record Collective",
    icon: <Record style={iconStyle} />,
    url: "https://greatsetrecords.com/video-home-system",
  },
];
