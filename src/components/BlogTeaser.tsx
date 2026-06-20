"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { posts } from "@/content/posts";

export default function BlogTeaser() {
    // Feature the brand page first so it gets homepage link equity (helps "D2F" brand search),
    // then fill with the most recent posts.
    const featuredSlug = "d2f-consulting-quienes-somos";
    const featured = posts.find((p) => p.slug === featuredSlug);
    const latest = [
        ...(featured ? [featured] : []),
        ...posts.filter((p) => p.slug !== featuredSlug),
    ].slice(0, 3);

    return (
        <section
            id="blog"
            aria-label="Artículos y recursos de D2F Consulting"
            className="py-20 sm:py-28 bg-white relative overflow-hidden"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-8 h-px bg-[#DF1021]" />
                        <span className="text-[#DF1021] font-bold text-xs tracking-widest uppercase">Recursos</span>
                        <div className="w-8 h-px bg-[#DF1021]" />
                    </div>
                    <h2
                        className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                        Blog de Consultoría Empresarial
                    </h2>
                    <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Guías prácticas sobre gestión estratégica, transformación digital y crecimiento empresarial en Colombia.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                    {latest.map((post, idx) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group flex flex-col rounded-2xl border border-gray-100 overflow-hidden bg-white transition-shadow duration-300 hover:shadow-xl"
                            style={{ boxShadow: "0 4px 24px rgba(30,118,184,0.06)" }}
                        >
                            <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.imageAlt}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    quality={75}
                                    loading="lazy"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </Link>
                            <div className="flex flex-col flex-1 p-5">
                                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                                    <Clock size={13} /> {post.readingTime} de lectura
                                </div>
                                <h3 className="text-base font-bold text-gray-900 leading-snug mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                                    <Link href={`/blog/${post.slug}`} className="hover:text-[#1E76B8] transition-colors">
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed mb-5 flex-1">{post.excerpt}</p>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1E76B8] hover:gap-2.5 transition-all"
                                >
                                    Leer artículo <ArrowRight size={15} />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* See all */}
                <div className="text-center mt-12">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-[#1E76B8] border-2 border-[#1E76B8]/20 hover:border-[#1E76B8] hover:bg-[#1E76B8]/5 transition-all"
                    >
                        <BookOpen size={16} /> Ver todos los artículos
                    </Link>
                </div>
            </div>
        </section>
    );
}
