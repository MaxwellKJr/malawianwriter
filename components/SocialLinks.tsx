import { faFacebook, faInstagram, faThreads, faTiktok, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const socialLinks = [
  { href: "https://facebook.com/malawianwriter", icon: faFacebook, title: "Facebook" },
  { href: "https://twitter.com/malawianwriter", icon: faXTwitter, title: "Twitter" },
  { href: "https://instagram.com/malawianwriter", icon: faInstagram, title: "Instagram" },
  { href: "https://www.threads.net/@malawianwriter", icon: faThreads, title: "Threads" },
  { href: "https://tiktok.com/@malawianwriter", icon: faTiktok, title: "TikTok" },
];

const SocialLinks = () => {
  return (
    <ul className="flex flex-row">
      {socialLinks.map((link) => (
        <li key={link.href}>
          <a
            className="inline-block hover:text-brand first:pl-0 p-4 text-zinc-800 opacity-90 transform transition-all hover:-translate-y-2"
            href={link.href}
            title={`Follow on ${link.title}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={link.icon} className="w-5 h-5" />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
