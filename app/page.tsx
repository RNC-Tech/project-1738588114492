'use client';
import { useState } from 'react';
import Link from 'next/link';
export default function Page() {
    const [activeTab, setActiveTab] = useState('work');
    return (
        <div
            className="min-h-screen from-indigo-900 via-purple-900 to-pink-900 p-8 h-[fit-content] bg-none text-[rgba(0,_0,_0,_0)] opacity-[100%] bg-slate-900"
            data-oid="-zzlshm"
        >
            {' '}
            <div className="max-w-4xl mx-auto" data-oid="a9q58jn">
                {' '}
                <section
                    className="hero mb-16 mt-8 py-16 flex flex-col items-center text-center"
                    data-oid=":th7x10"
                >
                    {' '}
                    <div className="space-y-6" data-oid="7s2slzv">
                        {' '}
                        <h1
                            className="text-7xl font-bold mb-4 bg-clip-text text-transparent from-purple-300 to-pink-300 animate-pulse border-[rgb(229,_229,_229)] bg-[rgba(0,_0,_0,_0)] bg-[linear-gradient(to_right,_rgb(216,_180,_254),_rgb(249,_168,_212))] opacity-[100%]"
                            data-oid="7ckxk5m"
                        >
                            {' '}
                            RENCE SIMBAYA{' '}
                        </h1>{' '}
                        <p
                            className="text-2xl text-purple-200 mb-8 h-[fit-content]"
                            data-oid="s6e83mr"
                        >
                            {' '}
                            Full-stack Developer & Digital Artist{' '}
                        </p>{' '}
                        <p className="text-lg text-purple-200 max-w-2xl mx-auto" data-oid="ltzf38d">
                            {' '}
                            A versatile creative professional based in General Santos City,
                            Philippines, specializing in web development, illustration, and
                            multimedia production. With expertise in graphics design, music, and
                            digital content creation, I transform ideas into compelling digital
                            experiences. My commitment to excellence drives me to deliver innovative
                            solutions that perfectly align with my clients' vision and goals.{' '}
                        </p>{' '}
                        <div className="flex gap-4 justify-center mt-8" data-oid="y9r7-d:">
                            {' '}
                            <Link href="/projects" data-oid="nu7txcj">
                                <button
                                    className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-[#FFFFFF]"
                                    data-oid="3r.sfgu"
                                >
                                    {' '}
                                    View Projects{' '}
                                </button>
                            </Link>{' '}
                            <button
                                className="border-2 border-purple-400 px-8 py-3 rounded-lg hover:border-pink-400 transition-colors text-[#FFFFFF]"
                                data-oid="jmyu1bd"
                            >
                                {' '}
                                Contact Me{' '}
                            </button>{' '}
                        </div>{' '}
                    </div>{' '}
                </section>{' '}
                <nav className="mb-12" data-oid="yopdvrm">
                    {' '}
                    <ul className="flex space-x-8 text-lg" data-oid="s6mne.w">
                        {' '}
                        {['work', 'about', 'contact'].map((tab) => (
                            <li key={tab} data-oid="otp9big">
                                {' '}
                                <button
                                    onClick={() => setActiveTab(tab)}
                                    className={`${activeTab === tab ? 'text-pink-300 border-b-2 border-pink-300' : 'text-purple-200 hover:text-pink-200'} pb-2 transition-colors duration-300`}
                                    data-oid="g_sc3b3"
                                >
                                    {' '}
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}{' '}
                                </button>{' '}
                            </li>
                        ))}{' '}
                    </ul>{' '}
                </nav>{' '}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-oid=".y1fg-h">
                    {' '}
                    {activeTab === 'work' && (
                        <>
                            <div className="col-span-2 mb-8" data-oid="x0ruz6h">
                                <h2 className="text-3xl font-bold mb-4" data-oid=":p3r3qw">
                                    Portfolio
                                </h2>
                                <p className="text-lg text-purple-200 mb-8" data-oid="b7:y3sc">
                                    Explore my creative work across different domains
                                </p>

                                {/* Category Tabs */}
                                <div
                                    className="flex flex-wrap justify-center gap-4 mb-12"
                                    data-oid="ni56aqv"
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
                                            data-oid="-caq4b3"
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Portfolio Grid */}
                            <div
                                className="col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                                data-oid="63uyey8"
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
                                        data-oid="8mgsxiw"
                                    >
                                        <div
                                            className="aspect-video bg-gradient-to-r from-purple-400 to-pink-400 relative"
                                            data-oid="776hx6."
                                        >
                                            {/* Replace with actual images */}
                                            <div
                                                className="absolute inset-0 flex items-center justify-center text-white/50 bg-[url(/images/s9H3.png)] border-[#00000000] bg-[#3E3E3E]"
                                                data-oid=".-138k5"
                                            >
                                                {project.category}
                                            </div>
                                        </div>
                                        <div className="p-6" data-oid="jj.susy">
                                            <span
                                                className="text-sm text-pink-300 mb-2 block"
                                                data-oid=".554jui"
                                            >
                                                {project.category}
                                            </span>
                                            <h3
                                                className="text-xl font-bold mb-2"
                                                data-oid="7a4:wpd"
                                            >
                                                {project.title}
                                            </h3>
                                            <p
                                                className="text-purple-200 text-sm"
                                                data-oid="gah426-"
                                            >
                                                {project.description}
                                            </p>
                                            <div className="mt-4 flex gap-2" data-oid=".0vsv4l">
                                                <button
                                                    className="text-sm px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                                                    data-oid="cwnklqw"
                                                >
                                                    View Details
                                                </button>
                                                <button
                                                    className="text-sm px-4 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                                                    data-oid="m69h7l6"
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
                            data-oid="56hk1sl"
                        >
                            {' '}
                            <h2 className="text-3xl font-bold mb-4" data-oid="ga15:ls">
                                About Me
                            </h2>{' '}
                            <p className="text-lg text-purple-200 mb-4" data-oid="vck-s42">
                                {' '}
                                I'm a passionate developer who loves creating beautiful and
                                functional web experiences. With 5 years of experience in full-stack
                                development, I specialize in React, Node.js, and creative
                                coding.{' '}
                            </p>{' '}
                            <div className="flex flex-wrap gap-4 mt-8" data-oid="ukda:ko">
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
                                        data-oid="ag9klow"
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
                            data-oid="rgf4pyh"
                        >
                            {' '}
                            <h2 className="text-3xl font-bold mb-4" data-oid="ne7602i">
                                Get in Touch
                            </h2>{' '}
                            <form className="space-y-6" data-oid="-59tkx2">
                                {' '}
                                <div data-oid="n5lc:mj">
                                    {' '}
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full bg-white/5 border border-purple-300/20 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-300"
                                        data-oid="2u9t2g6"
                                    />{' '}
                                </div>{' '}
                                <div data-oid="c2fm69_">
                                    {' '}
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full bg-white/5 border border-purple-300/20 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-300"
                                        data-oid="e-.xmqt"
                                    />{' '}
                                </div>{' '}
                                <div data-oid="zolvxg3">
                                    {' '}
                                    <textarea
                                        placeholder="Message"
                                        rows={4}
                                        className="w-full bg-white/5 border border-purple-300/20 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-300"
                                        data-oid=":p3mrx3"
                                    ></textarea>{' '}
                                </div>{' '}
                                <button
                                    className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-[#FFFFFF]"
                                    data-oid="xdobwa5"
                                >
                                    {' '}
                                    Send Message{' '}
                                </button>{' '}
                            </form>{' '}
                        </div>
                    )}{' '}
                </div>{' '}
                <footer className="mt-16 text-center text-purple-200" data-oid="v9u:nxt">
                    {' '}
                    <div className="flex justify-center space-x-6 mb-4" data-oid=".::o8dx">
                        {' '}
                        {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="hover:text-pink-300 transition-colors duration-300"
                                data-oid="y.7xjul"
                            >
                                {' '}
                                {social}{' '}
                            </a>
                        ))}{' '}
                    </div>{' '}
                    <p data-oid="se.83j0">© 2024 Rence Simbaya. All rights reserved.</p>{' '}
                </footer>{' '}
            </div>{' '}
        </div>
    );
}
