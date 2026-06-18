import React from 'react';

function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Argus Presentation</title>
      </head>
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;