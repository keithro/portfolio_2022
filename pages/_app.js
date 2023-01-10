import Script from "next/script";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        // src={`https://www.googletagmanager.com/gtag/js?id=G-4KWER04Q6H`}
        src="https://www.googletagmanager.com/gtag/js?id=G-4KWER04Q6H"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-4KWER04Q6H');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
