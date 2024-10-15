import Link from "next/link";

const GuideVpn = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 bg-[#E1F2FD]">
      <Link href="/">
        <a className="text-[#2196F3] hover:underline flex items-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          Return to Contents
        </a>
      </Link>

      <h2>
        The DPE Guide to{" "}
        <span className="mb-4 text-[#2196F3] text-base font-bold"> VPNs</span>{" "}
        and Setting up One for Your Gadget.{" "}
      </h2>
      {/* Two Paragraphs */}
      <p className="mb-4">
        Protecting your privacy while browsing the web is more important than
        ever, and that is why we recommend using a Virtual Private Network
        (VPN). This is one of the best tools you can use to shield your data
        from prying eyes.
      </p>

      <p className="mb-4">
        By encrypting your internet traffic and masking your IP address, a VPN
        helps you browse the web anonymously and securely. Now, let's understand
        VPNs.
      </p>

      <div>
        <p className="mb-4 font-bold">Virtual Private Networks (VPNs)</p>
        <ul className="list-disc list-inside">
          <li className="mb-1">
            {" "}
            <span>Definition:</span> A VPN creates an encrypted connection
            between your device and a VPN server, masking your IP address and
            securing data transmissions.
          </li>
          <li className="mb-1">
            {" "}
            <span>Why It’s Important:</span> It helps users maintain anonymity
            online, avoid data interception, and access restricted content.
          </li>
          <li className="mb-1">
            <span>Best Practices:</span>
            (a) Choose a reliable, no-log VPN provider. (b) Set up VPN on
            multiple devices (laptops, phones, tablets). (c) Understand VPN
            protocols like OpenVPN and WireGuard for advanced users. (d) Be
            cautious with free VPN services (they often sell data).
          </li>
        </ul>
      </div>

      <div>
        <p className="mb-4 font-bold">Choosing the Right VPN</p>
        <h3>
          {" "}
          Before setting up a VPN, it is important to choose a provider that
          prioritizes your privacy. Here are key factors to consider:
        </h3>

        <p>
          (1) <span>No-Log Policy:</span> Ensure the VPN provider doesn’t store
          your data or browsing history.
        </p>
        <p>
          (2) <span> Security Protocols:</span> Look for modern encryption
          standards like OpenVPN or WireGuard.
        </p>
        <p>
          (3) <span>Paid vs. Free VPNs:</span> While free VPNs exist, they often
          compromise your privacy by selling data. Paid options like ExpressVPN,
          NordVPN, and ProtonVPN offer better protection.
        </p>
      </div>

      <h2 className="mb-6 text-[#2196F3]">
        How to Set Up a VPN using ProtonVPN
      </h2>

      <div>
        <p>
          We’ll use ProtonVPN for this guide, which offers a user-friendly
          interface and strong privacy features.
        </p>
        <h3>Sign Up for ProtonVPN:</h3>

        <p className="mb-6 list-disc list-inside">
          Visit ProtonVPN’s website and click the ‘Get ProtonVPN Now’ button
        </p>

        {/* Image */}
        <div className="mb-6">
          <img
            src="/guide/image 2.png" // Replace with your image path
            alt="Example"
            className="w-full h-auto rounded-md"
          />
        </div>

        <p className="mb-6 list-disc list-inside">
          A new page will show you if you want paid; choose your preferred plan
          and if you are going free, scroll down, till you come across this
          section shown in the image below
        </p>
        <div className="mb-6">
          <div className="mb-6">
            <img
              src="/guide/image 3.png" // Replace with your image path
              alt="Example"
              className="w-full h-auto rounded-md"
            />
          </div>

          <p className="mb-6 list-disc list-inside">
            Create an account with your email address if you are going free and
            the ProtonVPN will suggest a password for you, which you can go for,
            if you want.
          </p>

          <div className="mb-6">
            <img
              src="/guide/image 4.png" // Replace with your image path
              alt="Example"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>

        <div>
          <h3>Verify and Complete your ProtonVPN account:</h3>
          <p className="mb-6 list-disc list-inside">
            After creating your account with your email and password, an email
            will be sent to the signup email asking you to verify, click on the
            verify email address button
          </p>

          {/* Image */}
          <div className="mb-6">
            <img
              src="/guide/image 5.png" // Replace with your image path
              alt="Example"
              className="w-full h-auto rounded-md"
            />
          </div>

          <p className="mb-6 list-disc list-inside">
            Clicking on the verify email address button will take you to a page
            where the visual below will show that your verification was
            successful.
          </p>

          <div className="mb-6">
            <img
              src="/guide/image 6.png" // Replace with your image path
              alt="Example"
              className="w-full h-auto rounded-md"
            />
          </div>

          <p className="mb-6 list-disc list-inside">
            Sign in to the ProtonVPN account again by clicking the sign-in
            button.
          </p>
          <p className="mb-6 list-disc list-inside">
            After signing in, you will be brought to this page. Scroll down
            until you see the ProtonVPN option, which is the one you are going
            to choose.
          </p>

          <div className="mb-6">
            <img
              src="/guide/image 7.png" // Replace with your image path
              alt="Example"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>

        <div>
          <h3>Welcome to your ProtonVPN dashboard:</h3>
          <p className="mb-6 list-disc list-inside">
            You can now have access to a ProtonVPN dashboard, where you can
            download the ProtonVPN application to your preferred devices.
          </p>

          {/* Image */}
          <div className="mb-6">
            <img
              src="/guide/image 8.png" // Replace with your image path
              alt="Example"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>

        <div>
          <h3>Connecting to the ProtonVPN App:</h3>
          <p className="mb-6 list-disc list-inside">
            Open the ProtonVPN app after downloading the app based on your
            gadget of choice. 
          </p>
          <p className="mb-6 list-disc list-inside">
            Enter your credentials (email address and password) to log in. 
          </p>
          <p className="mb-6 list-disc list-inside">
            On the home page, you will see a Connect button. Please click that,
            and you will be taken to your device. 
          </p>

          {/* Image */}
          <div className="mb-6">
            <img
              src="/guide/image 9.png" // Replace with your image path
              alt="Example"
              className="w-full h-auto rounded-md"
            />
          </div>

          <p className="mb-6 list-disc list-inside">
            Once connected, your IP address is now hidden, and your data is
            encrypted.
          </p>

          <div className="mb-6">
            <img
              src="//guide/image 10.png" // Replace with your image path
              alt="Example"
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>

        {/* Paragraph with Bullet Points */}
        <div>
          <h3 className="mb-2">Advanced VPN Settings</h3>
          <p className="mb-2">
            For paid users, ProtonVPN offers additional settings:
          </p>
          <ul className="list-disc list-inside">
            <li className="mb-1">
              <span className=" font-bold">Switching Protocols:</span> You can
              choose between OpenVPN and WireGuard, depending on your security
              needs.
            </li>
            <li className="mb-1">
              {" "}
              <span className=" font-bold">Kill Switch: </span>Ensure the VPN
              app’s kill switch is activated, which automatically cuts off your
              internet connection if the VPN disconnects, preventing accidental
              exposure.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-[#2196F3]">Testing Your VPN Connection</h3>
          <p className="mb-2">To ensure your VPN is working:</p>
          <ul className="list-disc list-inside">
            <li className="mb-1">
              Go to <a href="www.whatismyip.com">WhatIsMyIP.com</a> before and
              after connecting to see if your IP address changes.
            </li>
            <li className="mb-1">
              Check for DNS Leaks using sites like{" "}
              <a href="dnsleaktest.com">DNSLeakTest.com</a>.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-[#2196F3]">Common Mistakes to Avoid:</h3>
          <ul className="list-disc list-inside">
            <li className="mb-1">
              <span className=" font-bold"> Free VPNs:</span> Some free VPNs
              sell user data, so research before using them.
            </li>
            <li className="mb-1">
              {" "}
              <span className=" font-bold">Relying Only on a VPN:</span> A VPN
              doesn’t make you invincible. Combine it with good security
              practices like using strong passwords and 2FA.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GuideVpn;
