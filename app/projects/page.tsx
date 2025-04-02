'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Web Development', 'Illustration', 'Graphics', 'Music', 'Video'];

    const projects = [
        {
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
        <div className="min-h-screen bg-slate-900 text-white p-8" data-oid="f3vktw4">
            <div className="max-w-6xl mx-auto" data-oid="j:61237">
                <header className="py-12 text-center" data-oid="ifp0gjh">
                    <Link
                        href="/"
                        className="inline-block mb-8 text-purple-300 hover:text-pink-300 transition-colors"
                        data-oid="0p.m-69"
                    >
                        ← Back to Home
                    </Link>
                    <h1
                        className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300"
                        data-oid="7udr3g_"
                    >
                        My Projects
                    </h1>
                    <p className="text-xl text-purple-200 max-w-3xl mx-auto" data-oid="rv3_3pu">
                        A comprehensive collection of my work across web development, illustration,
                        graphics design, music production, and video editing.
                    </p>
                </header>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-16" data-oid="4b29sav">
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
                            data-oid="nb2gkpu"
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    data-oid="gbzjl64"
                >
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden
                                     hover:transform hover:scale-105 transition-all duration-300"
                            data-oid="4s9pr46"
                        >
                            <div
                                className="aspect-video bg-gradient-to-r from-purple-400 to-pink-400 relative"
                                data-oid="a0tj7rh"
                            >
                                {/* Replace with actual images */}
                                <div
                                    className="absolute inset-0 flex items-center justify-center text-white/50 bg-[#3E3E3E]"
                                    data-oid="2vky_.z"
                                >
                                    {project.category}
                                </div>
                            </div>
                            <div className="p-6" data-oid="zxicglx">
                                <span
                                    className="text-sm text-pink-300 mb-2 block"
                                    data-oid="fozb5xo"
                                >
                                    {project.category}
                                </span>
                                <h3 className="text-xl font-bold mb-2" data-oid="1uxo81n">
                                    {project.title}
                                </h3>
                                <p className="text-purple-200 text-sm mb-4" data-oid="-w3.lv4">
                                    {project.description}
                                </p>
                                <div className="mb-4" data-oid="ky1p36f">
                                    <h4
                                        className="text-sm font-semibold text-purple-300 mb-2"
                                        data-oid="9utx8zh"
                                    >
                                        Technologies:
                                    </h4>
                                    <div className="flex flex-wrap gap-2" data-oid="r0i01h9">
                                        {project.technologies.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-2 py-1 bg-white/5 rounded-full text-purple-200"
                                                data-oid="n7i1c6:"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-4 flex gap-2" data-oid="3c1zqqe">
                                    <a
                                        href={project.link}
                                        className="text-sm px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:opacity-90 transition-opacity"
                                        data-oid="yoaofaj"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
