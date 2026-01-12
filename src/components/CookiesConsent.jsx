import { useEffect, useState } from "react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-300">
          We use cookies to improve your experience. By clicking{" "}
          <span className="font-semibold text-white">Allow Cookies</span>, you
          agree to our use of cookies.
        </p>

        <button
          onClick={acceptCookies}
          className="w-full sm:w-auto rounded-md bg-green-500 px-5 py-2 text-sm font-medium text-white hover:bg-green-600 transition"
        >
          Allow Cookies
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
