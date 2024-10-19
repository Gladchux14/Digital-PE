import Link from "next/link";

const GuideVpn = () => {
  return (
    <div className="bg-[#E1F2FD] py-8">
      <div className="max-w-5xl mx-auto py-8 px-4 ">
        <Link href="/tutorial" className="flex mb-6 gap-2">
              <img src="/back.svg" href="back icon" />
          <p className="hover:underline hover:text-[#2196F3]  ">
            Return to Contents
          </p>
        </Link>

        <h2 className="mb-6 mt-4 text-2xl md:text-3xl text-center">
          The DPE Guide To &nbsp;
          <span className="text-[#2196F3]">Securing</span>
          &nbsp; Your Online Accounts
        </h2>

        <p className="mb-4">
          Your online accounts hold a lot of sensitive data—{" "}
          <span className="font-bold">
            personal details, financial information, and other sensitive data.
          </span>{" "}
          That makes them prime targets for hackers, scammers, and identity
          thieves. If someone gains access to your accounts, the consequences
          could range from annoying to disastrous.
        </p>

        <p className="mb-4">
          This guide will walk you through simple, practical steps to secure
          your accounts,{" "}
          <span className="font-bold">
            covering how to create strong passwords, spot phishing scams,
          </span>{" "}
          and stay ahead by keeping your accounts up to date.
        </p>

        <p className="font-bold">
          Create Strong Passwords by Using a Password Manager
        </p>

        <div>
          <div className="mb-4">
            <p>
              {" "}
              Keeping track of multiple passwords for all your accounts takes a
              lot of work. That’s where password managers come in. They store
              your passwords securely and can even generate strong, unique ones.
              Some
            </p>
            <p className="my-5 font-bold">trusted password managers include:</p>
          </div>
          <ul className="list-disc list-inside">
            <li>Bitwarden (free & open-source).</li>
            <li>LastPass</li>
            <li>1Password</li>
            <li>KeePass (offline option)</li>
          </ul>
        </div>

        <div>
          <p className="my-5 font-bold">How to use one:</p>
          <ul className="list-disc list-inside">
            <li className="mb-5">
              Set up a master password (this will be the only password you need
              to remember).
            </li>
            <li className="mb-5">
              Save all your other passwords in the manager.
            </li>
            <li className="mb-5">
              Use the password manager’s browser extension or mobile app to
              autofill your credentials safely.
            </li>
          </ul>

          <p>
            {" "}
            <span className="font-bold">Pro tip:</span> Don’t reuse passwords
            across multiple sites, and let your password manager generate
            random, strong passwords for you.
          </p>
        </div>

        <div>
          <p className="my-5 font-bold text-[#2196F3]">
            Make Passwords Long and Unique
          </p>
          <div className="mb-4">
            <div>
              <p>
                Short or easy-to-guess passwords make your accounts vulnerable.
                Each account should have its own password.
              </p>
              <p className="my-5 font-bold">
                Here’s how to create a strong one:
              </p>
            </div>
            <ul className="list-disc list-inside">
              <li className="font-bold">Use 12-16 characters or more.</li>
              <li className="font-bold">
                Mix upper- and lowercase letters, numbers, and special symbols.
              </li>
              <li className="font-bold">
                Avoid personal information like your name, birthday, or pet’s
                name
              </li>
            </ul>

            <p className="py-4">
              {" "}
              Weak Password Example:
              <span className="text-[#2196F3]"> Michael123</span>{" "}
            </p>
            <p className="pb-4">
              {" "}
              Strong Password Example:
              <span className="text-[#2196F3]"> 9Lp!t@7Jnvq#x1K$</span>{" "}
            </p>
          </div>
        </div>

        <div>  
             <div>
             <h2 className="my-5 font-bold">How to Spot Phishing Scams</h2>
             <p className="my-5"> <span className="font-bold">Phishing</span> is when scammers trick you into revealing personal info by sending fake emails, texts, or social media messages. Falling for phishing attacks can give hackers access to your accounts.</p>
             </div>
          <p className="my-5 font-bold">How to Recognize a Phishing Attempt:</p>
          <ul className="list-disc list-inside ml-2">
            <li className="mb-5">
            The email looks urgent or threatening (e.g., "Update your password now or lose access").
            </li>
            <li className="mb-5">
            The sender’s address is strange or slightly off, like  <span className="text-[#2196F3]">admin@amazn-support.com.</span>
            </li>
            <li className="mb-5">
            The message contains bad grammar or spelling errors.
            </li>
            <li className="mb-5">
            There’s a link or attachment that doesn’t seem right
            </li>
          </ul>


          <p className="my-5 font-bold">What to Do if You Get a Suspicious Link:</p>
          <ul className="list-disc list-inside ml-2">
            <li className="mb-5">
            Don’t click on it. Instead, go directly to the official website by typing the URL yourself.
            </li>
            <li className="mb-5">
            Hover over the link with your mouse to see where it leads.
            </li>
            <li className="mb-5">
            Make sure the website you’re logging into has  <span className="text-[#2196F3]"> "https://".</span> at the beginning of the URL (this indicates it’s using encryption).
            </li>
            <li className="mb-5">
            There’s a link or attachment that doesn’t seem right
            </li>
          </ul>

          <p className="font-bold my-4">
            {" "}
            <span className="font-bold text-[#2196F3]">Bonus tip:</span> Use anti-phishing tools like browser extensions or antivirus software to warn you if a site looks sketchy.
          </p>
        </div>


        <div>
        
            <p className="my-5 font-bold">
            How You Can Keep Your Accounts Up to Date
            </p>
            <p className="my-5 ">Check for Breaches with <span className="font-bold">HaveIBeenPwned</span>.</p>
        
            <p>
            It’s easy to ignore breaches—until your data gets exposed. Tools like <span className="font-bold">HaveIBeenPwned</span>. allow you to check if your email or accounts have been compromised.
            </p>

            <div className="mb-6">
              <img
                src="/guide/image 12.png"
                alt="vpn-guide-img"
                className="max-w-72 md:max-w-md m-auto my-5 rounded-md"
              />
            </div>
        </div>

        <div> 
            <p className="my-5 font-bold"> How to use it:</p>
          
          <ul className="list-disc list-inside">
            <li className="mb-4">Go to the website and type in your email address in the Have I Been Pwned search bar.</li>
            <li className="mb-4">If your email has been in breach, change the password immediately for that account. </li>
            <li className="mb-4">Enable two-factor authentication (2FA) if the platform offers it.</li>
          </ul>
        </div>


        <div>
          <div className="mb-4">
            <p className="text-[#2196F3] mb-2">
              {" "}
              Update Your Recovery Information Regularly.
            </p>
            <p>
              {" "}
              Outdated recovery options (like an old phone number or email) can make it impossible to regain access to your account if something goes wrong.
            </p>
            <p className="my-4 font-bold">Make it a habit to review: </p>
          </div>
          <ul className="list-disc list-inside gap-4">
            <li>Phone numbers and backup emails associated with your accounts.</li>
            <li>Security questions—avoid easy ones like “What’s your favorite color?” and opt for something harder to guess.</li>
            <li>Store security question answers in your password manager if they’re not something you’ll easily remember.</li>
          </ul>
        </div>

        <div>
          <div className="mb-4">
            <p className="text-[#2196F3] mb-2">
              {" "}
             Conclusion
            </p>
           
            <p className="my-4 font-bold">Keeping your accounts secure isn’t about being paranoid—it’s about being prepared.
 Here’s a quick summary:
 </p>
          </div>
          <ul className="list-disc list-inside gap-4">
            <li>Use strong, unique passwords for each account and manage them with a password manager.</li>
            <li>Stay alert for phishing emails and avoid clicking on suspicious links.</li>
            <li>Update your accounts regularly and check if your data has been exposed in a breach. </li>
          </ul>

          <p className="my-4 font-bold">Taking these small steps now can save you from major headaches down the road. Stay safe, stay smart, and keep your accounts locked down. </p>
        </div>

      






        


        

        
       
      </div>
    </div>
  );
};

export default GuideVpn;
