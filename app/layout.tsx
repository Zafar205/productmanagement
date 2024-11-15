import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {ClerkProvider} from "@clerk/nextjs"
import {shadesOfPurple} from "@clerk/themes"

export const metadata: Metadata = {
  title: "Project Manager",
  description: "A Project Management app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{baseTheme : shadesOfPurple,  
    variables : {colorPrimary : "#3b82f6", colorBackground : "#1a202c", colorInputBackground : "#2D3748", colorInputText : "#F3F4F6"}, 
    elements : {formButtonPrimary :'bg-purple-600 hover:bg-purple-800 text-white', card : 'bg-color-800'}}}>

    <html lang="en" suppressHydrationWarning>
      <body className="antialiased dotted-background" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header/>
          <main className="min-h-screen">{children}</main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
    
    </ClerkProvider>
  );
}
