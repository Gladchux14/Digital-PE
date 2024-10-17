import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const toolsData = [
  {
    title: "Google Authenticator",
    description: "A widely used 2FA app for securing Google accounts and many others",
    link: "https://apps.apple.com/us/app/google-authenticator/id388497605",
  },
  {
    title: "NordVPN",
    description: "One of the best VPN services available for privacy and security.",
    link: "https://nordvpn.com/",
  },
  {
    title: "ProtonMail",
    description: "An email service with a focus on privacy, encryption, security.",
    link: "https://proton.me/mail",
  },
  {
    title: "Dashlane",
    description: "A secure password manager with integrated 2FA features.",
    link: "https://www.dashlane.com/",
  },
  {
    title: "YubiKey",
    description: "A hardware-based 2FA device that enhances security for your accounts.",
    link: "https://www.yubico.com/",
  },
  {
    title: "Microsoft Mobile Authenticator",
    description: "A commonly used 2FA for securing online media accounts.",
    link: "https://www.microsoft.com/en-us/security/mobile-authenticator-app",
  },
  {
    title: "BeenVerified",
    description: "Allows you to remove your information from our People Search Results.",
    link: "https://www.beenverified.com/svc/optout/search/optouts",
  },
  {
    title: "Have I Been Pwned",
    description: "Allows you to search across multiple data breaches to see any compromise.",
    link: "https://haveibeenpwned.com/",
  },
  {
    title: "GrapheneOS Auditor",
    description: "A security tool that verifies the integrity of Android devices.",
    link: "https://github.com/GrapheneOS/Auditor/releases",
  },
  {
    title: "BrowserLeaks.com",
    description: "Provides detailed insights into what personal data your browser leaks.",
    link: "https://browserleaks.com/",
  },
];

const LandingpageTools = () => {
  return (
    <div className="bg-[#E1F2FD] max-w-5xl mx-auto ">

<div className=" m-auto  flex items-center justify-between">
<p className=" font-bold text-xl">All Tools</p>
         <Link href="/resources" className="text-[#1C1D32] underline mt-5  flex items-end justify-end">
         <p>View All</p>
         </Link>
      </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-3 gap-6">
      {toolsData.slice(0, 3).map((tool, index) => (
        <div
          key={index}
          className="border border-[#9c9c9c] rounded-lg p-4 hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-bold mb-2">{tool.title}</h2>
          <p className="text-base mb-4">{tool.description}</p>
          <Link href={tool.link}>
            <p className="flex items-center text-[#2196F3] hover:underline">
              Learn More <FaArrowRight className="ml-2" />
            </p>
          </Link>
        </div>
      ))}
    </div>
  </div>
  )
};

export default LandingpageTools;
