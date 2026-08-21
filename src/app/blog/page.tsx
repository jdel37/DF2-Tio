import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { posts } from '@/content/posts';

const baseUrl = 'https://www.d2fgestion.com';

export const metadata: Metadata = {
    title: 'Blog de Consultoría Empresarial Global',
    description:
        'Artículos y guías sobre consultoría empresarial, estrategia, transformación digital y crecimiento organizacional a nivel internacional, por D2F Consulting.',
    alternates: { canonical: `${baseUrl}/blog` },
    openGraph: {
        type: 'website',
        url: `${baseUrl}/blog`,
        title: 'Blog de Consultoría Empresarial Global | D2F Consulting',
        description:
            'Guías de consultoría empresarial, gestión estratégica, transformación digital y expansión internacional.',
    },
};

const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${baseUrl}/blog#blog`,
    name: 'Blog de D2F Consulting',
    url: `${baseUrl}/blog`,
    publisher: { '@id': `${baseUrl}/#organization` },
    blogPost: posts.map((p) => ({
        '@type': 'BlogPosting',
        headline: p.title,
        url: `${baseUrl}/blog/${p.slug}`,
        datePublished: p.datePublished,
        dateModified: p.dateModified,
        image: `${baseUrl}${p.image}`,
        description: p.description,
    })),
};

export default function BlogIndex() {
    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
            />

            {/* Header */}
            <header className="relative py-16 sm:py-20" style={{ background: 'linear-gradient(160deg, #071d30 0%, #10497a 100%)' }}>
                <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
                    <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm mb-8">
                        <ArrowLeft size={16} /> Volver al inicio
                    </Link>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-1 rounded-full bg-[#DF1021]" />
                        <span className="text-[#DF1021] font-bold text-xs uppercase tracking-widest">Blog</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Consultoría empresarial global
                    </h1>
                    <p className="text-white/70 mt-4 max-w-2xl text-sm sm:text-base leading-relaxed">
                        Guías prácticas sobre gestión estratégica, transformación digital, franquicias y crecimiento
                        empresarial para organizaciones con visión internacional.
                    </p>
                </div>
            </header>

            {/* Posts grid */}
            <section className="py-14 sm:py-20" aria-label="Artículos del blog">
                <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <article
                                key={post.slug}
                                className="group flex flex-col rounded-2xl border border-gray-100 overflow-hidden bg-white transition-shadow duration-300 hover:shadow-xl"
                                style={{ boxShadow: '0 4px 24px rgba(30,118,184,0.06)' }}
                            >
                                <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.imageAlt}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        quality={75}
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </Link>
                                <div className="flex flex-col flex-1 p-5">
                                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                                        <Clock size={13} /> {post.readingTime} de lectura
                                    </div>
                                    <h2 className="text-lg font-bold text-gray-900 leading-snug mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                        <Link href={`/blog/${post.slug}`} className="hover:text-[#1E76B8] transition-colors">
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-1">{post.excerpt}</p>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1E76B8] hover:gap-2.5 transition-all"
                                    >
                                        Leer artículo <ArrowRight size={15} />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-14 text-center" style={{ background: 'linear-gradient(160deg, #f8faff, #f0f4fa)' }}>
                <div className="container mx-auto px-4 max-w-2xl">
                    <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        ¿Listo para transformar tu empresa?
                    </h2>
                    <p className="text-gray-600 mb-6 text-sm sm:text-base">
                        Agenda una consulta inicial gratuita con nuestros consultores y definamos tu próximo paso.
                    </p>
                    <Link
                        href="/#contacto"
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-white text-sm transition-transform hover:-translate-y-0.5"
                        style={{ background: 'linear-gradient(135deg, #DF1021, #b80d1a)', boxShadow: '0 4px 20px rgba(223,16,33,0.4)' }}
                    >
                        Agenda tu consulta <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </main>
    );
}
