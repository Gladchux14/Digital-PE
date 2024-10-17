import FaSocial from "@/app/components/2fa-social";
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
          <span className="text-[#2196F3]">2FA Setup</span>
          &nbsp; and Securing your account on Gmail, Facebook, and Instagram.
        </h2>

        <p className="mb-4">
          <span className="font-bold">Two-factor authentication (2FA)</span> &nbsp;
          is an extra layer of security used to ensure that people trying to
          gain access to an online account are who they say they are.
        </p>

        <p className="mb-4">
          First, the user enters their username and a password, then, instead of
          immediately gaining access, they will be required to provide another
          piece of information.
        </p>

        <div>
          <p className="my-5 font-bold">This second factor could be:</p>
          <ul className="list-disc list-inside">
            <li className="mb-5">A code is sent to your phone.</li>
            <li className="mb-5">
              A code generated by  &nbsp;
              <span className="font-bold">authenticator app.</span>
            </li>
            <li className="mb-5">
              A biometric factor like a fingerprint or facial recognition
            </li>
          </ul>
        </div>

        <div>
          <p className="my-5 font-bold">Why You Need 2FA:</p>
          <ul className="list-disc list-inside">
            <li className="mb-5">
              Even if someone steals your password, they won’t be able to access
              your account without the second factor.
            </li>
            <li className="mb-5">
              It adds a simple yet powerful security measure to prevent account
              takeovers.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#2196F3] font-bold">Different 2FA Methods</h2>
          <p className="my-5 font-bold">
            There are several ways to set up 2FA. The most common methods
            include:
          </p>

          <ol
            style={{ listStyleType: "lower-alpha" }}
            className="list-inside ml-4 mt-4"
          >
            <li >
              <span className="font-bold">SMS-based 2FA:</span> You receive a
              one-time code via text message.
              <ul className="list-disc list-inside ">
                <li>
                  <span className="font-bold">Pros:</span> Easy to set up and
                  use
                </li>
                <li>
                  <span className="font-bold">Cons:</span> Less secure because
                  attackers can intercept SMS messages.
                </li>
              </ul>
            </li>

            <li className="pt-4">
              {" "}
              <span className="font-bold">
                {" "}
                App-based 2FA (Recommended):
              </span>{" "}
              You use an authenticator app (e.g., Google Authenticator, Authy)
              to generate a one-time code.
              <ul className="list-disc list-inside">
                <li>
                  <span className="font-bold">Pros:</span> More secure than SMS.
                  Codes change every 30 seconds.
                </li>
                <li>
                  <span className="font-bold">Cons:</span>Requires installing an
                  app on your phone.
                </li>
              </ul>
            </li>

            <li className="pt-4">
              <span className="font-bold"> Hardware-based 2FA:</span> Uses a
              physical security key (e.g., YubiKey).
              <ul className="list-disc list-inside">
                <li>
                  <span className="font-bold">Pros:</span> Extremely secure.
                </li>
                <li>
                  <span className="font-bold">Cons:</span> Requires purchasing a
                  physical device.
                </li>
              </ul>
            </li>
          </ol>
        </div>

        <h2 className="mb-3 mt-6 font-bold">
          For this guide, we’ll focus on app-based 2FA, which is the most secure
          and widely used method.
        </h2>

        <FaSocial />

        <div>
          <h2 className="text-lg font-bold mb-3">
            Using Authenticator Apps vs SMS
          </h2>
          <h3 className="text-lg  mb-3">
            Using an authenticator app is highly recommended over SMS-based 2FA
            for several reasons:
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className=" font-bold"> Security:</span> SMS codes can be
              intercepted through SIM-swapping attacks, while app-based codes
              are generated on your phone and change every 30 seconds.
            </li>
            <li>
              <span className=" font-bold">Convenience:</span> Authenticator
              apps work offline, and you don’t need cellular service to receive
              the codes..
            </li>
            <li>
              <span className=" font-bold">Multiple Accounts:</span> You can
              manage several accounts (Google, Facebook, banking apps) from one
              authenticator app
            </li>
          </ul>

          <h3 className="text-lg  mb-3">Popular authenticator apps</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className=" font-bold"> Google Authenticator:</span> Simple
              and secure.
            </li>
            <li>
              <span className=" font-bold"> Authy:</span> Offers backup and
              multi-device sync.
            </li>
          </ul>
        </div>

        <div>
          <h2 className=" font-bold mt-8 text-[#2196F3]">
            Backup Options and Best Practices
          </h2>

          <div>
            <h3 className="font-semibold mt-2">1.Backup Codes:</h3>
            <ul className="list-disc list-inside">
              <li>
                When setting up 2FA, most services provide backup codes in case
                you lose your phone or can't access the authenticator app. Print
                these codes or store them in a safe place.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mt-2">
              2.Backup Phone Number:
            </h3>
            <ul className="list-disc list-inside">
              <li>
                Add a trusted backup phone number to your account (family member
                or trusted friend).
              </li>
            </ul>
          </div>

          <div>
            <h3 className=" font-semibold mt-2">
              3.Review 2FA Settings Regularly:
            </h3>
            <ul className="list-disc list-inside ">
              <li>
                Make sure your 2FA settings are up-to-date. Regularly check
                backup methods and update them when needed.
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 mt-8">
            Common Mistakes to Avoid
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className=" font-bold">
                {" "}
                Not Backing Up Your 2FA Codes:
              </span>{" "}
              Always store backup codes safely. If you lose access to your
              authenticator app without backup codes, you may be locked out of
              your account.
            </li>
            <li>
              {" "}
              <span className=" font-bold">Using Only SMS for 2FA:</span> If
              possible, avoid SMS-based 2FA, as it’s vulnerable to SIM-swapping
              attacks.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GuideVpn;
