'use client';
import { useState } from 'react';
import Link from 'next/link';
export default function Page() {
    const [activeTab, setActiveTab] = useState('work');
    return (
        <div
            className="min-h-screen from-indigo-900 via-purple-900 to-pink-900 p-8 h-[fit-content] bg-none text-[rgba(0,_0,_0,_0)] opacity-[100%] bg-slate-900 rounded-none"
            data-oid="0sb9-ns"
        >
            {' '}
            <div className="max-w-4xl mx-auto" data-oid="8xe9z79">
                {' '}
                <section
                    className="hero mb-16 mt-8 py-16 flex flex-col items-center text-center"
                    data-oid="j3s3npq"
                >
                    {' '}
                    <div className="space-y-6" data-oid="bb76bpb">
                        {' '}
                        <h1
                            className="text-7xl font-bold mb-4 bg-clip-text text-transparent from-purple-300 to-pink-300 animate-pulse border-[rgb(229,_229,_229)] bg-[rgba(0,_0,_0,_0)] bg-[linear-gradient(to_right,_rgb(216,_180,_254),_rgb(249,_168,_212))] opacity-[100%]"
                            data-oid="cpha..z"
                        >
                            {' '}
                            RENCE SIMBAYA{' '}
                        </h1>{' '}
                        <p
                            className="text-2xl text-purple-200 mb-8 h-[fit-content]"
                            data-oid="9zx5ame"
                        >
                            {' '}
                            Full-stack Developer & Digital Artist{' '}
                        </p>{' '}
                        <p className="text-lg text-purple-200 max-w-2xl mx-auto" data-oid="ud:m35e">
                            {' '}
                            A versatile creative professional based in General Santos City,
                            Philippines, specializing in web development, illustration, and
                            multimedia production. With expertise in graphics design, music, and
                            digital content creation, I transform ideas into compelling digital
                            experiences. My commitment to excellence drives me to deliver innovative
                            solutions that perfectly align with my clients' vision and goals.{' '}
                        </p>{' '}
                        <div className="flex gap-4 justify-center mt-8" data-oid=":_6ifia">
                            {' '}
                            <Link href="/projects" data-oid="pu19t9j">
                                <button
                                    className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-[#FFFFFF]"
                                    data-oid="p.yn4_k"
                                >
                                    {' '}
                                    View Projects{' '}
                                </button>
                            </Link>{' '}
                            <button
                                className="border-2 border-purple-400 px-8 py-3 rounded-lg hover:border-pink-400 transition-colors text-[#FFFFFF]"
                                data-oid="2k.hx3h"
                            >
                                {' '}
                                Contact Me{' '}
                            </button>{' '}
                        </div>{' '}
                    </div>{' '}
                </section>{' '}
                <nav className="mb-12" data-oid="mj36.:_">
                    {' '}
                    <ul className="flex space-x-8 text-lg" data-oid="7cvnyj_">
                        {' '}
                        {['work', 'about', 'contact'].map((tab) => (
                            <li key={tab} data-oid="jtsrq4s">
                                {' '}
                                <button
                                    onClick={() => setActiveTab(tab)}
                                    className={`${activeTab === tab ? 'text-pink-300 border-b-2 border-pink-300' : 'text-purple-200 hover:text-pink-200'} pb-2 transition-colors duration-300`}
                                    data-oid="j1n66fs"
                                >
                                    {' '}
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}{' '}
                                </button>{' '}
                            </li>
                        ))}{' '}
                    </ul>{' '}
                </nav>{' '}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-oid="r740qc7">
                    {' '}
                    {activeTab === 'work' && (
                        <>
                            <div className="col-span-2 mb-8" data-oid="ij-yzbb">
                                <h2 className="text-3xl font-bold mb-4" data-oid="mgdx9e.">
                                    Portfolio
                                </h2>
                                <p className="text-lg text-purple-200 mb-8" data-oid="3ti0mjh">
                                    Explore my creative work across different domains
                                </p>

                                {/* Category Tabs */}
                                <div
                                    className="flex flex-wrap justify-center gap-4 mb-12"
                                    data-oid="ds37sj."
                                >
                                    {[
                                        'All',
                                        'Web Development',
                                        'Illustration',
                                        'Graphics',
                                        'Music',
                                        'Video',
                                    ].map((category) => (
                                        <button
                                            key={category}
                                            className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors
                                                     text-purple-200 hover:text-pink-300 focus:ring-2 focus:ring-pink-300"
                                            data-oid="f7nqnen"
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Portfolio Grid */}
                            <div
                                className="col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                                data-oid="x.2pnq6"
                            >
                                {[
                                    {
                                        title: 'E-Commerce Platform',
                                        category: 'Web Development',
                                        image: '/path/to/image1.jpg',
                                        description:
                                            'A full-stack e-commerce solution built with Next.js and Node.js',
                                    },
                                    {
                                        title: 'Character Design',
                                        category: 'Illustration',
                                        image: '/path/to/image2.jpg',
                                        description:
                                            'Original character design for an animated series',
                                    },
                                    {
                                        title: 'Brand Identity',
                                        category: 'Graphics',
                                        image: '/path/to/image3.jpg',
                                        description:
                                            'Complete brand identity design for a tech startup',
                                    },
                                    {
                                        title: 'Electronic EP',
                                        category: 'Music',
                                        image: '/path/to/image4.jpg',
                                        description:
                                            'Original electronic music production and mixing',
                                    },
                                    {
                                        title: 'Short Film',
                                        category: 'Video',
                                        image: '/path/to/image5.jpg',
                                        description:
                                            'Cinematography and editing for a short documentary',
                                    },
                                    {
                                        title: 'Mobile App UI',
                                        category: 'Web Development',
                                        image: '/path/to/image6.jpg',
                                        description:
                                            'UI/UX design and development for a fitness app',
                                    },
                                ].map((project, index) => (
                                    <div
                                        key={index}
                                        className="group relative bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden
                                                 hover:transform hover:scale-105 transition-all duration-300"
                                        data-oid="mc9-w57"
                                    >
                                        <div
                                            className="aspect-video bg-gradient-to-r from-purple-400 to-pink-400 relative"
                                            data-oid="ewhnktw"
                                        >
                                            {/* Replace with actual images */}
                                            <div
                                                className="absolute inset-0 flex items-center justify-center text-white/50 bg-[url(/images/s9H3.png)] border-[#00000000] bg-[#3E3E3E]"
                                                data-oid="030jhzp"
                                            >
                                                {project.category}
                                            </div>
                                        </div>
                                        <div className="p-6" data-oid="-:n7oxp">
                                            <span
                                                className="text-sm text-pink-300 mb-2 block"
                                                data-oid="5phh3_h"
                                            >
                                                {project.category}
                                            </span>
                                            <h3
                                                className="text-xl font-bold mb-2"
                                                data-oid="5mzlpr4"
                                            >
                                                {project.title}
                                            </h3>
                                            <p
                                                className="text-purple-200 text-sm"
                                                data-oid="24c0ub-"
                                            >
                                                {project.description}
                                            </p>
                                            <div className="mt-4 flex gap-2" data-oid="r_9l7b:">
                                                <button
                                                    className="text-sm px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                                                    data-oid="fnifzy6"
                                                >
                                                    View Details
                                                </button>
                                                <button
                                                    className="text-sm px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                                                    data-oid="3t5v46s"
                                                >
                                                    Live Demo
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}{' '}
                    {activeTab === 'about' && (
                        <div
                            className="col-span-2 bg-white/10 backdrop-blur-lg rounded-xl p-8"
                            data-oid="pawkva:"
                        >
                            {' '}
                            <h2 className="text-3xl font-bold mb-4" data-oid="783v5z7">
                                About Me
                            </h2>{' '}
                            <p className="text-lg text-purple-200 mb-4" data-oid="bm73t8l">
                                {' '}
                                I'm a passionate developer who loves creating beautiful and
                                functional web experiences. With 5 years of experience in full-stack
                                development, I specialize in React, Node.js, and creative
                                coding.{' '}
                            </p>{' '}
                            <div className="flex flex-wrap gap-4 mt-8" data-oid="bqhgimp">
                                {' '}
                                {[
                                    'React',
                                    'Blazor',
                                    'Figma',
                                    'UX / UI',
                                    'Branding',
                                    'Video Edit',
                                    `Music Production`,
                                ].map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-purple-500/30 rounded-full text-purple-200"
                                        data-oid="y1b0q4s"
                                    >
                                        {' '}
                                        {skill}{' '}
                                    </span>
                                ))}{' '}
                            </div>{' '}
                        </div>
                    )}{' '}
                    {activeTab === 'contact' && (
                        <div
                            className="col-span-2 bg-white/10 backdrop-blur-lg rounded-xl p-8"
                            data-oid="fu-e:7t"
                        >
                            {' '}
                            <h2 className="text-3xl font-bold mb-4" data-oid="f-pscgj">
                                Get in Touch
                            </h2>{' '}
                            <form className="space-y-6" data-oid=":tk.1-3">
                                {' '}
                                <div data-oid="-6xr09w">
                                    {' '}
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full bg-white/5 border border-purple-300/20 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-300"
                                        data-oid="xvyjd1d"
                                    />{' '}
                                </div>{' '}
                                <div data-oid="dksr4il">
                                    {' '}
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full bg-white/5 border border-purple-300/20 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-300"
                                        data-oid="cw_rxhp"
                                    />{' '}
                                </div>{' '}
                                <div data-oid="uugxx7o">
                                    {' '}
                                    <textarea
                                        placeholder="Message"
                                        rows={4}
                                        className="w-full bg-white/5 border border-purple-300/20 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-300"
                                        data-oid="-fr69q1"
                                    ></textarea>{' '}
                                </div>{' '}
                                <button
                                    className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-[#FFFFFF]"
                                    data-oid="0.w..t_"
                                >
                                    {' '}
                                    Send Message{' '}
                                </button>{' '}
                            </form>{' '}
                        </div>
                    )}{' '}
                </div>{' '}
                <footer className="mt-16 text-center text-purple-200" data-oid="6npx.-9">
                    {' '}
                    <div className="flex justify-center space-x-6 mb-4" data-oid="d_.4u1a">
                        {' '}
                        {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="hover:text-pink-300 transition-colors duration-300"
                                data-oid="c-4mopz"
                            >
                                {' '}
                                {social}{' '}
                            </a>
                        ))}{' '}
                    </div>{' '}
                    <p data-oid="mrfrkyi">© 2024 Rence Simbaya. All rights reserved.</p>{' '}
                </footer>{' '}
            </div>{' '}
        </div>
    );
}
