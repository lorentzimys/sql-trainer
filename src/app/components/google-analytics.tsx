import Script from "next/script";
import React from "react";

interface GoogleAnalyticsProps {
  id: string;
}

export const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ id }) => (
  <>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />
      <Script id={id} dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${id}', {
          page_path: window.location.pathname,
        });
      `,
        }}
      />
  </>
)