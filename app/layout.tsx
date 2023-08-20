'use client';

import './globals.css'


import StyledComponentsRegistry from './registry';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body suppressHydrationWarning={true} >
        <StyledComponentsRegistry>
          {children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
