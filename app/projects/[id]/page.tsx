'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// This would typically come from a database or API
const projectsData = [
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
        timeline: 'January 2023 - March 2023',
        client: 'RetailTech Inc.',
        role: 'Lead Developer',
        challenge:
            'The main challenge was creating a seamless shopping experience across devices while ensuring secure payment processing and efficient inventory management.',
        solution:
            'I implemented a responsive design with Next.js for frontend and Node.js for backend services. MongoDB was used for the database, and Stripe was integrated for payment processing.',
        results:
            'The platform increased client sales by 35% in the first quarter after launch, with a 25% improvement in customer retention.',
        testimonial: {
            text: "The e-commerce platform exceeded our expectations. It's not only visually appealing but also highly functional and user-friendly.",
            author: 'Jane Smith, CEO of RetailTech Inc.',
        },
        gallery: [
            {
                url: '/path/to/gallery1.jpg',
                caption: 'Homepage design showcasing featured products',
            },
            {
                url: '/path/to/gallery2.jpg',
                caption: 'Product detail page with customization options',
            },
            { url: '/path/to/gallery3.jpg', caption: 'Shopping cart and checkout process' },
            { url: '/path/to/gallery4.jpg', caption: 'Admin dashboard for inventory management' },
        ],
    },
    {
        id: 'character-design',
        title: 'Character Design',
        category: 'Illustration',
        image: '/path/to/image2.jpg',
        description: 'Original character design for an animated series',
        details:
            'Created a set of character designs for an animated web series, including concept art, expression sheets, and turnarounds.',
        technologies: ['Procreate', 'Adobe Illustrator', 'Character Design'],
        link: '#',
        timeline: 'April 2023 - May 2023',
        client: 'AnimationStudio XYZ',
        role: 'Character Artist',
        challenge:
            'The challenge was to create distinctive, memorable characters that appeal to the target audience while maintaining consistency across different poses and expressions.',
        solution:
            'I developed detailed character sheets with consistent proportions and distinctive features, creating a unique visual style that aligned with the series tone.',
        results:
            'The character designs were approved on the first presentation and are now being used in production for the animated series.',
        testimonial: {
            text: "Rence's character designs captured exactly what we were looking for - distinctive, expressive, and full of personality.",
            author: 'Alex Johnson, Creative Director at AnimationStudio XYZ',
        },
        gallery: [
            { url: '/path/to/gallery1.jpg', caption: 'Main character concept art' },
            { url: '/path/to/gallery2.jpg', caption: 'Expression sheet showing various emotions' },
            { url: '/path/to/gallery3.jpg', caption: 'Character turnaround showing all angles' },
            {
                url: '/path/to/gallery4.jpg',
                caption: 'Action poses demonstrating character movement',
            },
        ],
    },
    // Add more detailed project data for all projects
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
        timeline: 'June 2023 - July 2023',
        client: 'TechStart Innovations',
        role: 'Brand Designer',
        challenge:
            "Creating a distinctive visual identity that communicates the company's innovative approach while remaining approachable and trustworthy.",
        solution:
            'I developed a modern, minimalist design system with a flexible logo that works across digital and print applications, supported by a comprehensive brand guidelines document.',
        results:
            'The new brand identity helped the client secure additional funding and establish a strong market presence.',
        testimonial: {
            text: "The brand identity perfectly captures our company's vision. It's modern, versatile, and has received overwhelmingly positive feedback from investors and customers alike.",
            author: 'Michael Chen, Founder of TechStart Innovations',
        },
        gallery: [
            { url: '/path/to/gallery1.jpg', caption: 'Logo design and variations' },
            { url: '/path/to/gallery2.jpg', caption: 'Color palette and typography system' },
            { url: '/path/to/gallery3.jpg', caption: 'Business card and stationery design' },
            { url: '/path/to/gallery4.jpg', caption: 'Digital application examples' },
        ],
    },
    // Add remaining projects with similar detailed structure
];

export default function ProjectDetail() {
    const params = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Find the project that matches the ID from the URL
        const projectId = params.id;
        const foundProject = projectsData.find((p) => p.id === projectId);

        if (foundProject) {
            setProject(foundProject);
        }

        setLoading(false);
    }, [params.id]);

    if (loading) {
        return (
            <div
                className="min-h-screen bg-slate-900 text-white p-8 flex items-center justify-center"
                data-oid="lx5kjp3"
            >
                <div
                    className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"
                    data-oid="6ucp9dq"
                ></div>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen bg-slate-900 text-white p-8" data-oid="n3m0ceh">
                <div className="max-w-4xl mx-auto text-center py-20" data-oid="_.vt-kd">
                    <h1 className="text-4xl font-bold mb-6 text-pink-300" data-oid="50tkpnd">
                        Project Not Found
                    </h1>
                    <p className="text-xl text-purple-200 mb-8" data-oid=".c9a-jw">
                        The project you're looking for doesn't exist or has been moved.
                    </p>
                    <Link
                        href="/projects"
                        className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:opacity-90 transition-opacity"
                        data-oid="umssjn8"
                    >
                        Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-900 text-white p-8" data-oid="1yi.u:h">
            <div className="max-w-4xl mx-auto" data-oid="s67rh3:">
                {/* Navigation */}
                <div className="flex justify-between items-center mb-12" data-oid="3j05vyw">
                    <Link
                        href="/projects"
                        className="text-purple-300 hover:text-pink-300 transition-colors"
                        data-oid="5pxiyiq"
                    >
                        ← Back to Projects
                    </Link>
                    <span
                        className="px-4 py-1 bg-white/10 rounded-full text-sm text-purple-200"
                        data-oid="p-2xvzh"
                    >
                        {project.category}
                    </span>
                </div>

                {/* Project Header */}
                <header className="mb-16" data-oid="bdajpxo">
                    <h1
                        className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-300"
                        data-oid="-ar-r-x"
                    >
                        {project.title}
                    </h1>
                    <p className="text-xl text-purple-200 mb-8" data-oid="9:0d9:l">
                        {project.description}
                    </p>

                    {/* Project Image/Banner */}
                    <div
                        className="aspect-video bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl mb-8 flex items-center justify-center text-white/50 bg-[#3E3E3E]"
                        data-oid="831:mz5"
                    >
                        {/* Replace with actual project image */}
                        Project Banner Image
                    </div>

                    {/* Quick Info */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8" data-oid="j23ffwn">
                        <div className="bg-white/5 p-4 rounded-lg" data-oid="5vr232_">
                            <h3 className="text-sm text-pink-300 mb-1" data-oid="s8rxbfr">
                                Timeline
                            </h3>
                            <p className="text-purple-200" data-oid="yi01xkf">
                                {project.timeline}
                            </p>
                        </div>
                        <div className="bg-white/5 p-4 rounded-lg" data-oid="0rwpzvt">
                            <h3 className="text-sm text-pink-300 mb-1" data-oid="3jh908a">
                                Client
                            </h3>
                            <p className="text-purple-200" data-oid="_6s0d11">
                                {project.client}
                            </p>
                        </div>
                        <div className="bg-white/5 p-4 rounded-lg" data-oid="3dnu_36">
                            <h3 className="text-sm text-pink-300 mb-1" data-oid="o4v5jxp">
                                Role
                            </h3>
                            <p className="text-purple-200" data-oid="d9v6nu1">
                                {project.role}
                            </p>
                        </div>
                        <div className="bg-white/5 p-4 rounded-lg" data-oid="4zha5bn">
                            <h3 className="text-sm text-pink-300 mb-1" data-oid="mmdz832">
                                Technologies
                            </h3>
                            <div className="flex flex-wrap gap-1" data-oid="57tw6lc">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="text-xs px-2 py-1 bg-white/10 rounded-full text-purple-200"
                                        data-oid="q1ejb_3"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </header>

                {/* Project Content */}
                <div className="space-y-12 mb-16" data-oid="59:ed33">
                    <section data-oid="g1jp30i">
                        <h2 className="text-2xl font-bold mb-4 text-pink-300" data-oid="bhzm-_n">
                            Project Overview
                        </h2>
                        <p className="text-purple-200 leading-relaxed" data-oid="xiuca_4">
                            {project.details}
                        </p>
                    </section>

                    <section data-oid="1kpu944">
                        <h2 className="text-2xl font-bold mb-4 text-pink-300" data-oid="un8d2gs">
                            The Challenge
                        </h2>
                        <p className="text-purple-200 leading-relaxed" data-oid="n30hg-o">
                            {project.challenge}
                        </p>
                    </section>

                    <section data-oid="wpqgsmb">
                        <h2 className="text-2xl font-bold mb-4 text-pink-300" data-oid="139z837">
                            The Solution
                        </h2>
                        <p className="text-purple-200 leading-relaxed" data-oid="kaww7pj">
                            {project.solution}
                        </p>
                    </section>

                    <section data-oid="x1uq2-r">
                        <h2 className="text-2xl font-bold mb-4 text-pink-300" data-oid="26v70_3">
                            Results
                        </h2>
                        <p className="text-purple-200 leading-relaxed" data-oid="5tpn-zt">
                            {project.results}
                        </p>
                    </section>

                    {/* Project Gallery */}
                    <section data-oid="-7j:wh7">
                        <h2 className="text-2xl font-bold mb-6 text-pink-300" data-oid="nb_zyi4">
                            Project Gallery
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-oid="ulkxd6k">
                            {project.gallery.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white/5 rounded-lg overflow-hidden"
                                    data-oid="cv_0bls"
                                >
                                    <div
                                        className="aspect-video bg-gradient-to-r from-purple-400/30 to-pink-400/30 flex items-center justify-center text-white/30"
                                        data-oid="1v73qjh"
                                    >
                                        {/* Replace with actual gallery images */}
                                        Gallery Image {index + 1}
                                    </div>
                                    <div className="p-4" data-oid="4dey8eq">
                                        <p className="text-sm text-purple-200" data-oid="o1cf_gj">
                                            {item.caption}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Testimonial */}
                    {project.testimonial && (
                        <section className="bg-white/5 p-8 rounded-xl" data-oid="mbi:6iq">
                            <blockquote
                                className="text-xl italic text-purple-200 mb-4"
                                data-oid="pem59.4"
                            >
                                "{project.testimonial.text}"
                            </blockquote>
                            <cite className="text-pink-300 block" data-oid="9n9bmrt">
                                — {project.testimonial.author}
                            </cite>
                        </section>
                    )}
                </div>

                {/* Call to Action */}
                <div
                    className="flex flex-col md:flex-row gap-6 justify-center items-center bg-white/10 p-8 rounded-xl"
                    data-oid="5c5l1jj"
                >
                    <div className="text-center md:text-left" data-oid="xy7uo6b">
                        <h3 className="text-2xl font-bold mb-2 text-pink-300" data-oid="byb-c_y">
                            Interested in working together?
                        </h3>
                        <p className="text-purple-200" data-oid="mr_ft3o">
                            Let's discuss your project and create something amazing.
                        </p>
                    </div>
                    <Link
                        href="/contact"
                        className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
                        data-oid="93-w-w1"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>
        </div>
    );
}
