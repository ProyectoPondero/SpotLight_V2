import React from "react";

export const SocialLink = () => {
  const socialLinks = [
    {
      href: "https://www.facebook.com/emiliojoaquin.ortizmalich",
      icon: "fab fa-facebook-f",
      color: "text-blue-600",
      hoverColor: "hover:text-blue-800",
    },
    {
      href: "https://x.com/Emilio_joa_16",
      icon: "fab fa-twitter",
      color: "text-blue-500",
      hoverColor: "hover:text-blue-700",
    },
    {
      href: "https://www.instagram.com/emilio_joaquin_13/",
      icon: "fab fa-instagram",
      color: "text-pink-600",
      hoverColor: "hover:text-pink-800",
    },
  ];
  return (
    <div className="mt-8 flex justify-center space-x-4">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className={`${link.color} ${link.hoverColor}`}
        >
          <i className={`${link.icon} text-2xl`}></i>
        </a>
      ))}
    </div>
  );
};
