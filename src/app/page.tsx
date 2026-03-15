"use client";

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Clients from '@/components/Clients';
import About from '@/components/About';

// Lazy load below-fold components
const BusinessLines = dynamic(() => import('@/components/BusinessLines'), {
    loading: () => <div className="py-20 text-center">Loading...</div>,
});
const Team = dynamic(() => import('@/components/Team'), {
    loading: () => <div className="py-20 text-center">Loading...</div>,
});
const Testimonials = dynamic(() => import('@/components/Testimonials'), {
    loading: () => <div className="py-20 text-center">Loading...</div>,
});
const Contact = dynamic(() => import('@/components/Contact'), {
    loading: () => <div className="py-20 text-center">Loading...</div>,
});
const Footer = dynamic(() => import('@/components/Footer'), {
    loading: () => <div className="py-8 text-center">Loading...</div>,
});

// Import i18n directly - initializes on load
import '@/i18n-client';

export default function Home() {

    // Smooth scroll fix for Next.js
    useEffect(() => {
        if (window.location.hash) {
            const id = window.location.hash.substring(1);
            setTimeout(() => {
                const target = document.getElementById(id);
                const navbar = document.getElementById("navbar");
                if (target) {
                    const navbarHeight = navbar?.offsetHeight || 80;
                    const y = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 10;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 100);
        }
    }, []);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <Hero />

            <About />
            <BusinessLines />
            <Team />
            <Clients />
            <Testimonials />

            <Contact />
            <Footer />
        </main>
    );
}
