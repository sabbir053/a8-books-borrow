import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaMailBulk, FaMapPin, FaPhone, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-300 text-base-content">
            <div className="footer p-10 container mx-auto grid-cols-1 md:grid-cols-3">

                <aside>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="bg-primary p-2 rounded-lg">
                            <span className="text-primary-content font-bold text-xl">BV</span>
                        </div>
                        <span className="text-2xl font-bold tracking-tight">BookVibe</span>
                    </div>
                    <p className="max-w-xs">
                        Digitizing the traditional library experience.
                        Borrow your favorite titles with just a click.
                    </p>
                    <div className="flex gap-4 mt-4">
                        <a className="link link-hover hover:text-primary transition-colors">
                            <FaFacebook size={20}/>
                        </a>
                        <a className="link link-hover hover:text-primary transition-colors">
                            <FaTwitter size={20} />
                        </a>
                        <a className="link link-hover hover:text-primary transition-colors">
                            <FaInstagram size={20} />
                        </a>
                        <a className="link link-hover hover:text-primary transition-colors">
                            <FaGithub size={20} />
                        </a>
                    </div>
                </aside>

                <nav>
                    <h6 className="footer-title opacity-100 font-bold text-primary">Services</h6>
                    <a className="link link-hover">All Books</a>
                    <a className="link link-hover">My Profile</a>
                    <a className="link link-hover">Borrowing Policy</a>
                    <a className="link link-hover">Membership</a>
                </nav>

                <div>
                    <h6 className="footer-title opacity-100 font-bold text-primary">Contact Us</h6>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <FaMailBulk size={18} className="text-primary" />
                            <span>support@bookvibe.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaPhone size={18} className="text-primary" />
                            <span>+880 1234 567890</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaMapPin size={18} className="text-primary" />
                            <span>Dhaka, Bangladesh</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-base-300 bg-gray-300">
                <div className="container mx-auto px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p>© {new Date().getFullYear()} BookVibe. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a className="link link-hover">Privacy Policy</a>
                        <a className="link link-hover">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;