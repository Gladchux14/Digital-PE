"use client";
import { useState } from "react";

const FaSocial = () => {
  const [openSections, setOpenSections] = useState({
    google: false,
    facebook: false,
    instagram: false,
  });

  const toggleOpen = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div>
      <section>
        <div className="max-w-5xl mx-auto">
      
          <div
            className="flex items-center  cursor-pointer text-[#2196F3] "
            onClick={() => toggleOpen("google")}
          >
            <h2 className=" flex md:text-lg font-bold">
              How to Set Up 2FA on Google (Gmail)
              <img src="/arrow-down.svg" href="back icon" 
              
               className={`w-6 h-6 transition-transform duration-300 sm:mr-10  ${
                openSections.google ? "rotate-180" : "rotate-0"
               }`}
              />
            </h2>
            
           
          </div>

         
          {openSections.google && (
            <div className="mt-6 space-y-8">
            
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  1.Sign in to your Google Account:
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Go to myaccount.google.com</li>
                  <li>Once the dashboard loads for you</li>
                  <li>Go to the security option.</li>

                  <div className="mb-6">
                    <img
                      src="/guide/image 11.png"
                      alt="vpn-guide-img"
                      className="max-w-72 md:max-w-md m-auto my-5 rounded-md"
                    />
                  </div>

                  <li>
                    Scroll down while still on the security dashboard until you
                    see turn on the option to add{" "}
                    <span className=" font-bold">Authenticator App</span>.
                  </li>
                  <li>
                    Click the <span className=" font-bold">Authenticator</span>{" "}
                    option and Google will prompt you to sign in again
                  </li>
                  <li className=" font-bold">
                    If you do not have the 2FA set up via text message or phone
                    call, then step 2 is for you; if you do skip step 2
                  </li>
                </ul>
              </div>


              <div>
                <h3 className="text-lg font-semibold mb-3">2. Set Up 2FA:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Google will ask you to enter your phone number. Choose{" "}
                    <span className=" font-bold">&quot;Text message&quot;</span> or{" "}
                    <span className=" font-bold"> &quot;Phone call&quot;</span> spa to
                    receive the code.
                  </li>
                  <li>
                    Once you&quot;ve entered the code sent to your phone, click Next.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">
                  3. Setting up the Authenticator App:
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    After setting up step 2, click the{" "}
                    <span className=" font-bold">&quot;Authenticator&quot;</span> option
                    again
                  </li>
                  <li>
                    Google will ask you to download{" "}
                    <span className=" font-bold">Google Authenticator</span> on
                    your phone but for preference, I like the Microsoft
                    Authenticator App, therefore this tutorial will focus on the{" "}
                    <span className=" font-bold">Microsoft Authenticator </span>
                    app.
                  </li>
                  <li>
                    Click the Setup authenticator, after downloading the
                    authenticator app of your choice on your phone.
                  </li>
                  <li>
                    Google will prompt you to add a second step using an
                    authenticator app.{" "}
                    <span className=" font-bold">
                      Download Google Authenticator or Microsoft Authenticator{" "}
                    </span>{" "}
                    from the App Store or Google Play.
                  </li>
                </ul>
              </div>

         
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  4. Link Your Account:
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Open the app, click Begin Setup, and either scan the QR code
                    displayed on the screen or manually enter the code provided
                    by Google
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">
                  5. Backup Options:
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Google will offer backup methods, such as{" "}
                    <span className=" font-bold">backup codes</span> or setting
                    up another phone number, in case you lose access to your
                    phone.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">6. Confirmation:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Once set up, every time you log into your Google account,
                    you’ll be required to enter a code from the authenticator
                    app in addition to your password.
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="max-w-5xl mx-auto">
     
          <div
            className="flex items-center cursor-pointer text-[#2196F3] "
            onClick={() => toggleOpen("facebook")}
          >
            <h2 className="text-lg font-bold">How to Set Up 2FA on Facebook</h2>
            <img src="/arrow-down.svg" href="back icon" 
            alt="arrow svg"
          className={`w-6 h-6 transition-transform duration-300 ${
           openSections.facebook ? "rotate-180" : "rotate-0"
          }`}
         />
          </div>

          {openSections.facebook && (
            <div className="mt-6 space-y-8">
            
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  1.Access Security Settings:
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Open your Facebook account and navigate to{" "}
                    <span className=" font-bold">
                      Settings → Security and Login → Use Two-Factor
                      Authentication{" "}
                    </span>
                    .
                  </li>
                </ul>
              </div>

          
              <div>
                <h3 className="text-lg font-semibold mb-3">2. Set Up 2FA:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Facebook will offer you options to enable 2FA via SMS or an
                    authenticator app. Choose Use an authenticator app.
                  </li>
                </ul>
              </div>

           
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  3. Download the Authenticator App:
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Download Google{" "}
                    <span className=" font-bold">Authenticator</span> or{" "}
                    <span className=" font-bold">Authy</span> if you haven&quot;t
                    already.
                  </li>
                </ul>
              </div>

        
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  4. Link Your Facebook Account:
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Open the authenticator app, scan the QR code, or manually
                    enter the <span className=" font-bold">setup key </span>
                    provided by Facebooke
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">5. Backup Codes:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Make sure to note down the backup codes provided by Facebook
                    for emergency login.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">
                  6. Test the Setup:
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Once set up, every time you log into your Google account,
                    you&quot;ll be required to enter a code from the authenticator
                    app in addition to your password.
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="max-w-6xl mb-4 mx-auto">
        
          <div
            className="flex items-center  cursor-pointer text-[#2196F3] "
            onClick={() => toggleOpen("instagram")}
          >
            <h2 className="text-lg font-bold">
              How to Set Up 2FA on Instagram
            </h2>
            <img src="/arrow-down.svg" href="back icon" 
          
          className={`w-6 h-6 transition-transform duration-300 ${
           openSections.instagram ? "rotate-180" : "rotate-0"
          }`}
         />
          </div>

       
          {openSections.instagram && (
            <div className="mt-6 space-y-8">
         
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  1.Open Instagram App:
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Go to your profile and tap the menu icon (three horizontal
                    lines) in the upper-right corner.
                  </li>
                  <li>
                    Select{" "}
                    <span className=" font-bold">Settings and Privacy</span>.
                  </li>
                </ul>
              </div>

             
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  2. Access 2FA Settings:
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Scroll down and tap{" "}
                    <span className=" font-bold">
                      Accounts Center → Password and security
                    </span>
                    .
                  </li>
                  <li>
                    Click on{" "}
                    <span className=" font-bold">
                      Two-Factor Authentication
                    </span>
                    .
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">
                  3. Select 2FA Method:
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Instagram offers multiple authentication options:
                    <ol
                      style={{ listStyleType: "lower-alpha" }}
                      className="list-inside ml-6"
                    >
                      <li>
                        Authentication App (e.g., Google Authenticator, Authy)
                      </li>
                      <li> Text Message (SMS) .</li>
                      <li>WhatsApp.</li>
                    </ol>
                  </li>
                </ul>
              </div>

           
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  4.Authentication App Setup:
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    If using an app, Instagram will provide a setup key or QR
                    code.
                  </li>
                  <li>
                    Open your chosen app, add a new account, and scan the QR
                    code or enter the key.
                  </li>
                  <li>
                    Enter the 6-digit code from the app back into Instagram. .
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">
                  5.SMS Setup (Optional):
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    If using SMS, enter your phone number and wait for a
                    confirmation code.
                  </li>
                  <li>Input the code to verify the phone number.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">6. Backup Codes:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Instagram will provide backup codes in case you lose access
                    to your 2FA device.
                  </li>
                  <li>
                    Save these codes somewhere safe (you can take a screenshot
                    or write them down).
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">
                  7.Final Verification:
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    After successfully setting up 2FA, you&quot;ll see a confirmation
                    message.
                  </li>
                  <li>
                    Test the setup by logging out and logging back in to verify
                    that 2FA is functioning correctly.
                  </li>
                </ul>
              </div>

              <h3 className="font-bold">
                You can manage or disable 2FA at any time from the same settings
                page. For more details, visit the official <a href="help.instagram.com" className="underline ">Instagram Help
                Center.</a>
              </h3>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default FaSocial;
