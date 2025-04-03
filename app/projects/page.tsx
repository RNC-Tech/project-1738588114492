'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Web Development', 'Illustration', 'Graphics', 'Music', 'Video'];

    const projects = [
        {
            id: 'e-commerce-platform',
            title: 'E-Commerce Platform',
            category: 'Web Development',
            image: '/path/to/image1.jpg',
            description: 'A full-stack e-commerce solution built with Next.js and Node.js',
            details:
                'This project involved creating a complete online shopping experience with user authentication, product catalog, shopping cart, and payment processing integration.',
            technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Stripe'],
            link: '#',
        },
        {
            title: 'Character Design',
            category: 'Illustration',
            image: '/path/to/image2.jpg',
            description: 'Original character design for an animated series',
            details:
                'Created a set of character designs for an animated web series, including concept art, expression sheets, and turnarounds.',
            technologies: ['Procreate', 'Adobe Illustrator', 'Character Design'],
            link: '#',
        },
        {
            id: 'brand-identity',
            title: 'Brand Identity',
            category: 'Graphics',
            image: '/path/to/image3.jpg',
            description: 'Complete brand identity design for a tech startup',
            details:
                'Developed a comprehensive brand identity including logo design, color palette, typography, and brand guidelines document.',
            technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Brand Strategy'],
            link: '#',
        },
        {
            id: 'electronic-ep',
            title: 'Electronic EP',
            category: 'Music',
            image: '/path/to/image4.jpg',
            description: 'Original electronic music production and mixing',
            details:
                'Produced a 5-track electronic music EP including composition, sound design, mixing, and mastering.',
            technologies: ['Ableton Live', 'Sound Design', 'Mixing', 'Mastering'],
            link: '#',
        },
        {
            id: 'short-film',
            title: 'Short Film',
            category: 'Video',
            image: '/path/to/image5.jpg',
            description: 'Cinematography and editing for a short documentary',
            details:
                'Shot and edited a 10-minute documentary about local artisans, including color grading and sound design.',
            technologies: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Cinematography'],
            link: '#',
        },
        {
            id: 'mobile-app-ui',
            title: 'Mobile App UI',
            category: 'Web Development',
            image: '/path/to/image6.jpg',
            description: 'UI/UX design and development for a fitness app',
            details:
                'Designed and developed the user interface for a fitness tracking mobile application with a focus on user experience and accessibility.',
            technologies: ['React Native', 'Figma', 'UI/UX Design'],
            link: '#',
        },
        {
            id: 'digital-art-collection',
            title: 'Digital Art Collection',
            category: 'Illustration',
            image: '/path/to/image7.jpg',
            description: 'Series of digital illustrations for an art exhibition',
            details:
                'Created a collection of digital artworks exploring themes of technology and nature for an online exhibition.',
            technologies: ['Digital Painting', 'Concept Art', 'Procreate'],
            link: '#',
        },
        {
            id: 'corporate-website',
            title: 'Corporate Website',
            category: 'Web Development',
            image: '/path/to/image8.jpg',
            description: 'Responsive website design and development for a corporate client',
            details:
                'Designed and developed a fully responsive corporate website with content management system and analytics integration.',
            technologies: ['React', 'Tailwind CSS', 'Headless CMS'],
            link: '#',
        },
        {
            id: 'album-cover-design',
            title: 'Album Cover Design',
            category: 'Graphics',
            image: '/path/to/image9.jpg',
            description: 'Album artwork and packaging design for a music release',
            details:
                'Created album artwork, packaging design, and promotional materials for a music release.',
            technologies: ['Adobe Photoshop', 'Adobe Illustrator', 'Print Design'],
            link: '#',
        },
        {
            id: 'music-video',
            title: 'Music Video',
            category: 'Video',
            image: '/path/to/image10.jpg',
            description: 'Directed and edited a music video for an indie artist',
            details:
                'Directed, shot, and edited a music video including storyboarding, production planning, and post-production.',
            technologies: ['Adobe Premiere Pro', 'After Effects', 'Direction'],
            link: '#',
        },
        {
            id: 'ambient-music-album',
            title: 'Ambient Music Album',
            category: 'Music',
            image: '/path/to/image11.jpg',
            description: 'Composed and produced an ambient music album',
            details:
                'Composed, produced, and mixed a full-length ambient music album exploring textural soundscapes and atmospheric compositions.',
            technologies: ['Ableton Live', 'Field Recording', 'Sound Design'],
            link: '#',
        },
        {
            id: 'portfolio-website',
            title: 'Portfolio Website',
            category: 'Web Development',
            image: '/path/to/image12.jpg',
            description: 'Personal portfolio website design and development',
            details:
                'Designed and developed a personal portfolio website showcasing creative work across multiple disciplines.',
            technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
            link: '#',
        },
    ];

    const filteredProjects =
        activeCategory === 'All'
            ? projects
            : projects.filter((project) => project.category === activeCategory);

    return (
        <div className="min-h-screen bg-slate-900 text-white p-8" data-oid="-09l7gv">
            <div className="max-w-6xl mx-auto" data-oid="vx9.492">
                <header className="py-12 text-center" data-oid="y3ek-ba">
                    <Link
                        href="/"
                        className="inline-block mb-8 text-purple-300 hover:text-pink-300 transition-colors"
                        data-oid="y8l0oeo"
                    >
                        ← Back to Home
                    </Link>
                    <h1
                        className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300"
                        data-oid="nwfmguy"
                    >
                        My Projects
                    </h1>
                    <p className="text-xl text-purple-200 max-w-3xl mx-auto" data-oid="juukkms">
                        A comprehensive collection of my work across web development, illustration,
                        graphics design, music production, and video editing.
                    </p>
                </header>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-16" data-oid="6g1blul">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full transition-colors
                                ${
                                    activeCategory === category
                                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                                        : 'bg-white/10 text-purple-200 hover:bg-white/20 hover:text-pink-300'
                                }`}
                            data-oid="n2y3m3x"
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    data-oid="ipiu41n"
                >
                    {filteredProjects.map((project, index) => (
                        <Link
                            href={`/projects/${project.id}`}
                            key={index}
                            className="block group bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden
                                     hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
                            data-oid="4:v9ax1"
                        >
                            <div
                                className="aspect-video bg-gradient-to-r from-purple-400 to-pink-400 relative"
                                data-oid="t9pg2sa"
                            >
                                {/* Replace with actual images */}
                                <div
                                    className="absolute inset-0 flex items-center justify-center text-white/50 bg-[#3E3E3E]"
                                    data-oid="8eq5f1g"
                                >
                                    {project.category}
                                </div>
                            </div>
                            <div className="p-6" data-oid="fvzkd-q">
                                <span
                                    className="text-sm text-pink-300 mb-2 block"
                                    data-oid="zko88g-"
                                >
                                    {project.category}
                                </span>
                                <h3 className="text-xl font-bold mb-2" data-oid="7demdz.">
                                    {project.title}
                                </h3>
                                <p className="text-purple-200 text-sm mb-4" data-oid="p8wxxhf">
                                    {project.description}
                                </p>
                                <div className="mb-4" data-oid="gf-skr0">
                                    <h4
                                        className="text-sm font-semibold text-purple-300 mb-2"
                                        data-oid="q4b6:lh"
                                    >
                                        Technologies:
                                    </h4>
                                    <div className="flex flex-wrap gap-2" data-oid="2amc23c">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-2 py-1 bg-white/5 rounded-full text-purple-200"
                                                data-oid=".qy.g6f"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-4" data-oid="3x0h0bi">
                                    <span
                                        className="inline-block text-sm px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:opacity-90 transition-opacity"
                                        data-oid="n8irb8e"
                                    >
                                        View Details
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
