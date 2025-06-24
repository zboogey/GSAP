import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { navLinks } from '../../constants/index.js';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top',
            },
        });

        navTween.fromTo(
            'nav',
            { backgroundColor: 'transparent' },
            {
                backgroundColor: '#00000050',
                backdropFilter: 'blur(10px)',
                duration: 1,
                ease: 'power1.inOut',
            }
        );
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full z-50">
            <div className="flex justify-between items-center px-6 py-4">
                <a href="#home" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="logo" className="w-8 h-8" />
                    <p className="text-white font-bold">Velvet Pour</p>
                </a>
                <ul className="flex gap-6 text-white">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
