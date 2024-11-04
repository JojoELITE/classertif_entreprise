import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";

const socialMediaLinks = [
  {
    id: "email",
    icon: <HiOutlineMailOpen size={19} className="text-black" />,
    action: () => window.location.href = `mailto:?subject=Partage d'une offre d'emploi&body=Voici une offre d'emploi que je voulais partager avec vous!`
  },
  {
    id: "facebook",
    icon: <FaFacebookSquare color="blue" size={19} />,
    action: () => window.open('https://www.facebook.com/sharer/sharer.php?u=YOUR_URL_HERE', '_blank')
  },
  {
    id: "twitter",
    icon: <FaXTwitter size={19} className="text-blue-400" />,
    action: () => window.open('https://twitter.com/intent/tweet?url=YOUR_URL_HERE&text=Check%20this%20job%20offer!', '_blank')
  },
  {
    id: "instagram",
    icon: <FaInstagramSquare size={19} className="text-pink-600" />,
    action: () => alert('impossible de le faire par lien merci')
  },
  {
    id: "whatsapp",
    icon: <FaWhatsapp size={19} className="text-green-600" />,
    action: () => window.open('https://api.whatsapp.com/send?text=Voici une offre d\'emploi que je voulais partager avec vous: YOUR_URL_HERE', '_blank')
  },
];

export default function Share() {
  return (
    <div className="w-full rounded border py-5">
      <div className="flex flex-col sm:w-full sm:items-center gap-3">
        <h1 className="text-center">Partager l&apos;offre d&apos;emploi</h1>
        <div className="flex gap-3 justify-center">
          {socialMediaLinks.map(({ id, icon, action }) => (
            <div key={id} className="flex cursor-pointer items-center justify-center p-2" onClick={action}>
              <div className="rounded border border-gray-300 p-2 bg-white">
                {icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
