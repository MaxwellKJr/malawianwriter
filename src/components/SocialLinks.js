import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const SocialLinks = () => {
  const socialLinks = [
    {
      id: 1,
      linkName: faFacebook,
      title: "Follow on Facebook",
      linkAddress: "https://web.facebook.com/malawianwriter/",
    },
    {
      id: 2,
      linkName: faTwitter,
      title: "Follow on Twitter",
      linkAddress: "https://twitter.com/malawianwriter/",
    },
    {
      id: 3,
      linkName: faInstagram,
      title: "Follow on Instagram",
      linkAddress: "https://instagram.com/malawianwriter/",
    },
    {
      id: 4,
      linkName: faTiktok,
      title: "Follow on TikTok",
      linkAddress: "https://www.tiktok.com/@malawianwriter/",
    },
  ];

  return (
    <ul className="flex mt-4 md:mt-0">
      {socialLinks.map((socialLink) => {
        return (
          <li key={socialLink.id}>
            <a
              href={socialLink.linkAddress}
              className="py-4 text-white"
              target="_blank"
              rel="noreferrer"
              title={socialLink.title}
            >
              <FontAwesomeIcon
                icon={socialLink.linkName}
                className="h-6 px-4 transition hover:scale-90"
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
