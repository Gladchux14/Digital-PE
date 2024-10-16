import Link from "next/link";

const GuideVpn = () => {
  return (
    <div className="bg-[#E1F2FD] py-8">
      <div className="max-w-5xl mx-auto py-8 px-4 ">
        <Link href="/tutorial">
          <p className="hover:underline hover:text-[#2196F3] flex items-center mb-6">
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
          </p>
        </Link>

        <h2 className="mb-6 mt-4 text-2xl md:text-3xl text-center">
          The DPE Guide to &nbsp;
          <span className="text-[#2196F3]">VPNs</span>
          &nbsp; and Setting up One for Your Gadget.
        </h2>

        <p className="mb-4">
          Protecting your privacy while browsing the web is more important than
          ever, and that is why we recommend using a Virtual Private Network
          (VPN). This is one of the best tools you can use to shield your data
          from prying eyes.
        </p>

        <p className="mb-4">
          By encrypting your internet traffic and masking your IP address, a VPN
          helps you browse the web anonymously and securely. Now, let's
          understand VPNs.
        </p>

        <div>
          <p className="my-5 font-bold">Virtual Private Networks (VPNs)</p>
          <ul className="list-disc list-inside">
            <li className="mb-5">
              <span className="font-bold">Definition:</span> A VPN creates an
              encrypted connection between your device and a VPN server, masking
              your IP address and securing data transmissions.
            </li>
            <li className="mb-5">
              <span className="font-bold">Why It’s Important:</span> It helps
              users maintain anonymity online, avoid data interception, and
              access restricted content.
            </li>
            <li className="mb-5">
              <span className="font-bold">Best Practices:</span>
              <ol
                style={{ listStyleType: "lower-alpha" }}
                className="list-inside ml-6"
              >
                <li>Choose a reliable, no-log VPN provider.</li>
                <li> Set up VPN on multiple devices (laptops, phones, tablets).</li>
                <li>
                  Understand VPN protocols like OpenVPN and WireGuard for
                  advanced users.
                </li>
                <li> Be cautious with free VPN services (they often sell data).</li>
              </ol>
            </li>
          </ul>
        </div>

        <div>
          <p className="my-4 font-bold">Choosing the Right VPN</p>
          <h3 className="mb-3">
            Before setting up a VPN, it is important to choose a provider that
            prioritizes your privacy. Here are key factors to consider:
          </h3>

          <p>
            (1) <span className="font-bold">No-Log Policy:</span> Ensure the VPN
            provider doesn’t store your data or browsing history.
          </p>
          <p>
            (2) <span className="font-bold">Security Protocols:</span> Look for
            modern encryption standards like OpenVPN or WireGuard.
          </p>
          <p>
            (3) <span className="font-bold">Paid vs. Free VPNs:</span> While
            free VPNs exist, they often compromise your privacy by selling data.
            Paid options like ExpressVPN, NordVPN, and ProtonVPN offer better
            protection.
          </p>
        </div>

        <h2 className="my-5 text-[#2196F3]">How to Set Up a VPN using ProtonVPN</h2>

        <p>
          We’ll use ProtonVPN for this guide, which offers a user-friendly
          interface and strong privacy features.
        </p>

        <div>
          <h3 className="pb-6 font-bold">1. Sign Up for ProtonVPN:</h3>

          <ul className="mb-6 list-disc list-inside">
            <li>
              Visit{" "}
              <a href="https://protonvpn.com" className="underline">
                ProtonVPN’s website
              </a>{" "}
              and click the ‘Get ProtonVPN Now’ button.
            </li>

            <div className="mb-6">
              <img
                src="/guide/image 2.png"
                alt="vpn-guide-img"
                className="max-w-72 md:max-w-md m-auto my-5 rounded-md"
              />
            </div>

            <li>
            A new page will show you if you want paid; choose your preferred plan and if you are going free, scroll down, till you come across this section shown in the image below
            </li>

            <div className="mb-6">
              <img
                src="/guide/image 3.png"
                alt="vpn-guide-img"
                className="max-w-72 md:max-w-md m-auto my-5 rounded-md"
              />
            </div>

            <li className="mb-6 list-disc list-inside">
            Create an account with your email address if you are going free and the ProtonVPN will suggest a password for you, which you can go for, if you want.
            </li>

            <div className="mb-6">
              <img
                src="/guide/image 4.png"
                alt="vpn-guide-img"
                className="max-w-72 md:max-w-md m-auto my-5 rounded-md"
              />
            </div>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-bold">2. Verify and Complete your ProtonVPN account:</h3>
          <ul className="mb-6 list-disc list-inside">
            <li>
              After creating your account, an email will be sent to you for
              verification. Click the verify button.
            </li>

            <div className="mb-6 mt-4">
              <img
                src="/guide/image 5.png"
                alt="vpn-guide-img"
                className="max-w-72 md:max-w-md m-auto rounded-md"
              />
            </div>

            <li>
              After clicking verify, you'll see a page confirming that your
              verification was successful.
            </li>

            <div className="mb-6 mt-4">
              <img
                src="/guide/image 6.png"
                alt="vpn-guide-img"
                className="max-w-60 md:max-w-md m-auto rounded-md"
              />
            </div>

            <li>
            Sign in to the ProtonVPN account again by clicking the sign-in
             button.
          </li>
         <li >
             After signing in, you will be brought to this page. Scroll down
             until you see the ProtonVPN option, which is the one you are going
            to choose.
          </li>

            <div className="mb-6 mt-4">
              <img
                src="/guide/image 7.png"
                alt="vpn-guide-img"
                className="max-w-72 md:max-w-md m-auto rounded-md"
              />
            </div>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-bold">3. Welcome to your ProtonVPN dashboard:</h3>
          <ul className="mb-6 list-disc list-inside">
            <li>
              You now have access to the ProtonVPN dashboard, where you can
              download the ProtonVPN application to your preferred devices.
            </li>
          </ul>

          <div className="mb-6">
            <img
              src="/guide/image 8.png"
              alt="vpn-guide-img"
              className="max-w-72 md:max-w-md m-auto pb-4 rounded-md"
            />
          </div>
        </div>

        <div>
        <h3  className="mb-4 font-bold">4. Connecting to the ProtonVPN App:</h3>
          <ul className="list-disc list-inside">

           <li>
            Open the ProtonVPN app after downloading the app based on your
            gadget of choice. 
         </li>
           <li >
             Enter your credentials (email address and password) to log in. 
           </li>
           <li >
             On the home page, you will see a Connect button. Please click that,
            and you will be taken to your device. 
           </li>

            <div className="my-4">
              <img
                src="/guide/image 9.png"
                alt="vpn-guide-img"
                className=" max-w-md m-auto rounded-md"
              />
            </div>

            <li>Once connected, your IP address will be hidden, and your data encrypted.</li>

            <div className="my-4">
              <img
                src="/guide/image 10.png"
                alt="vpn-guide-img"
                className=" max-w-md m-auto rounded-md"
              />
            </div>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 pt-5 font-bold">Advanced VPN Settings</h3>
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
           <h3 className="mb-2  mt-6 text-[#2196F3]">Testing Your VPN Connection</h3>
           <p className="mb-2">To ensure your VPN is working:</p>
           <ul className="list-disc list-inside">
             <li className="mb-1">
               Go to <a href="www.whatismyip.com" className="underline">WhatIsMyIP.com</a> before and
               after connecting to see if your IP address changes.
             </li>
             <li className="mb-1">
               Check for DNS Leaks using sites like{" "}
               <a href="dnsleaktest.com" className="underline">DNSLeakTest.com</a>.
             </li>
           </ul>
         </div>

        <div>
           <h3 className="mb-2  mt-6 text-[#2196F3]">Common Mistakes to Avoid:</h3>
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
