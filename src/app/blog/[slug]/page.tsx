import type { Metadata } from 'next';
import { cookies, headers } from 'next/headers';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { posts, getLocalizedPost, getLocalizedPosts, type Block, type SupportedLocale } from '@/content/posts';

const baseUrl = 'https://www.d2fgestion.com';

async function getServerLocale(): Promise<SupportedLocale> {
    const cookieLocale = (await cookies()).get('i18nextLng')?.value as SupportedLocale | undefined;
    if (cookieLocale === 'en' || cookieLocale === 'es') {
        return cookieLocale;
    }

    const acceptLanguage = (await headers()).get('accept-language') ?? '';
    return acceptLanguage.toLowerCase().startsWith('en') ? 'en' : 'es';
}

export function generateStaticParams() {
    return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const locale = await getServerLocale();
    const post = getLocalizedPost(slug, locale);
    if (!post) return {};

    const url = `${baseUrl}/blog/${post.slug}`;
    return {
        title: post.title,
        description: post.description,
        keywords: post.keywords,
        alternates: { canonical: url },
        openGraph: {
            type: 'article',
            url,
            title: post.title,
            description: post.description,
            publishedTime: post.datePublished,
            modifiedTime: post.dateModified,
            authors: ['D2F Consulting'],
            images: [{ url: post.image, alt: post.imageAlt }],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
            images: [post.image],
        },
    };
}

function renderBlock(block: Block, i: number, locale: SupportedLocale) {
    switch (block.type) {
        case 'h2':
            return (
                <h2 key={i} className="text-2xl sm:text-3xl font-black text-gray-900 mt-12 mb-4 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {block.text}
                </h2>
            );
        case 'h3':
            return (
                <h3 key={i} className="text-lg sm:text-xl font-bold text-[#1E76B8] mt-8 mb-3">
                    {block.text}
                </h3>
            );
        case 'ul':
            return (
                <ul key={i} className="my-5 space-y-2.5">
                    {block.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#DF1021] flex-shrink-0" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            );
        case 'cta':
            return (
                <div key={i} className="my-10 rounded-2xl p-6 sm:p-8 text-center" style={{ background: 'linear-gradient(135deg, #1E76B8, #155a94)' }}>
                    <p className="text-white text-base sm:text-lg font-medium mb-5 leading-relaxed">{block.text}</p>
                    <Link
                        href="/#contacto"
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-[#1E76B8] bg-white text-sm transition-transform hover:-translate-y-0.5"
                    >
                        {locale === 'en' ? 'Book your free consultation' : 'Agenda tu consulta gratuita'} <ArrowRight size={16} />
                    </Link>
                </div>
            );
        default:
            return (
                <p key={i} className="text-gray-700 leading-relaxed my-4 text-[15px] sm:text-base">
                    {block.text}
                </p>
            );
    }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const locale = await getServerLocale();
    const post = getLocalizedPost(slug, locale);
    if (!post) notFound();

    const url = `${baseUrl}/blog/${post.slug}`;
    const related = getLocalizedPosts(locale).filter((p) => p.slug !== post.slug).slice(0, 2);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'BlogPosting',
                '@id': `${url}#article`,
                headline: post.title,
                description: post.description,
                image: `${baseUrl}${post.image}`,
                datePublished: post.datePublished,
                dateModified: post.dateModified,
                inLanguage: locale === 'en' ? 'en-US' : 'es-ES',
                mainEntityOfPage: { '@type': 'WebPage', '@id': url },
                author: { '@id': `${baseUrl}/#organization` },
                publisher: { '@id': `${baseUrl}/#organization` },
                keywords: post.keywords.join(', '),
            },
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Inicio', item: baseUrl },
                    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
                    { '@type': 'ListItem', position: 3, name: post.title, item: url },
                ],
            },
        ],
    };

    return (
        <main className="min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            {/* Hero */}
            <header className="relative pt-14 pb-10 sm:pt-20 sm:pb-12" style={{ background: 'linear-gradient(160deg, #071d30 0%, #10497a 100%)' }}>
                <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
                    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/60">
                        <Link href="/" className="hover:text-white transition-colors">{locale === 'en' ? 'Home' : 'Inicio'}</Link>
                        <span className="mx-2">/</span>
                        <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                    </nav>
                    <div className="flex items-center gap-2 text-xs text-white/60 mb-4">
                        <Clock size={13} /> {post.readingTime} {locale === 'en' ? 'read' : 'de lectura'}
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-black text-white leading-[1.12]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {post.title}
                    </h1>
                </div>
            </header>

            {/* Cover image */}
            <div className="container mx-auto px-4 sm:px-6 max-w-3xl -mt-6 sm:-mt-8 relative z-10">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, 768px"
                        quality={80}
                        priority
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Body */}
            <article className="container mx-auto px-4 sm:px-6 max-w-3xl py-12">
                {post.body.map((block, index) => renderBlock(block, index, locale))}

                <div className="mt-12 pt-8 border-t border-gray-100">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-[#1E76B8] hover:gap-3 transition-all">
                        <ArrowLeft size={16} /> {locale === 'en' ? 'See all articles' : 'Ver todos los artículos'}
                    </Link>
                </div>
            </article>

            {/* Related */}
            {related.length > 0 && (
                <section className="py-14" style={{ background: 'linear-gradient(160deg, #f8faff, #f0f4fa)' }} aria-label="Artículos relacionados">
                    <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
                        <h2 className="text-xl font-black text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            {locale === 'en' ? 'Keep reading' : 'Sigue leyendo'}
                        </h2>
                        <div className="grid gap-5 sm:grid-cols-2">
                            {related.map((r) => (
                                <Link
                                    key={r.slug}
                                    href={`/blog/${r.slug}`}
                                    className="group flex flex-col rounded-2xl bg-white border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
                                >
                                    <div className="relative aspect-[16/9] overflow-hidden">
                                        <Image src={r.image} alt={r.imageAlt} fill sizes="(max-width: 640px) 100vw, 50vw" quality={70} className="object-cover transition-transform duration-500 group-hover:scale-105" />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-[#1E76B8] transition-colors">{r.title}</h3>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}
