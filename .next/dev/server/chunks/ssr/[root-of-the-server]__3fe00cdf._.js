module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/DF2-Tio/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/DF2-Tio/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/DF2-Tio/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
```
"use client";

import React, { useEffect } from 'react';
import ClientI18nProvider from '@/components/ClientI18nProvider';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import BusinessLines from '@/components/BusinessLines';
import Clients from '@/components/Clients';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  
  // Smooth scroll fix for Next.js
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <ClientI18nProvider>
      <main className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <Clients />
        <About />
        <BusinessLines />
        <Team />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </ClientI18nProvider>
  );
}
```;
}),
"[project]/DF2-Tio/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/DF2-Tio/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3fe00cdf._.js.map