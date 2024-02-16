import Head from "next/head";
const JeenaHead = () => {
  return (
    <Head>
      {/* Required meta tags */}
      <meta charSet="utf-8" />
      <meta name="description" content="" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {/* Title */}
      <title>
      Software, Data and AI | Innovative Cloud Solutions
      </title>
      {/* Favicon Icon */}
      <link
        rel="shortcut icon"
        href="/assets/images/favicon.png"
        type="image/x-icon"
      />
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      {/* Flaticon */}
      <link rel="stylesheet" href="/assets/css/flaticon.min.css" />
      {/* Font Awesome */}
      <link rel="stylesheet" href="/assets/css/fontawesome-5.14.0.min.css" />
      {/* Bootstrap */}
      <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
      {/* Magnific Popup */}
      <link rel="stylesheet" href="/assets/css/magnific-popup.min.css" />
      {/* Nice Select */}
      <link rel="stylesheet" href="/assets/css/nice-select.min.css" />
      {/* Animate */}
      <link rel="stylesheet" href="/assets/css/animate.min.css" />
      {/* Slick */}
      <link rel="stylesheet" href="/assets/css/slick.min.css" />
      {/* Main Style */}
      <link rel="stylesheet" href="/assets/css/style.css" />

      {/* <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c, l, a, r, i, t, y) {
              c[a] = c[a] || function() {
                (c[a].q = c[a].q || []).push(arguments);
              };
              t = l.createElement(r);
              t.async = 1;
              t.src = "https://www.clarity.ms/tag/" + i;
              y = l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t, y);
            })(window, document, "clarity", "script", "kxq69jmnxs");
          `,
        }}
      /> */}


{/* <!-- Google tag (gtag.js) --> */}
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-LMLSG0PP51"
></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)};
        gtag('js', new Date());
        gtag('config', 'G-LMLSG0PP51');
      }
    `,
  }}
></script>
    </Head>
  );
};
export default JeenaHead;
