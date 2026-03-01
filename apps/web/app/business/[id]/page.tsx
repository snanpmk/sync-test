"use client";

import { useState } from 'react';
import { useParams } from 'next/navigation';
import {
    Star,
    MapPin,
    Phone,
    Globe,
    Share2,
    Clock,
    Image as ImageIcon,
    Compass,
    X,
    Send,
    Instagram,
    MessageCircle,
    Facebook,
    Twitter,
    FileText,
    Download,
    ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock Data
type Business = {
    id: string;
    name: string;
    category: string;
    description: string;
    mainPic: string;
    address: string;
    phone: string;
    socials: { name: string; url: string; icon: any }[];
    hours: { days: string; timings: string }[];
    resources?: { title: string; type: string; url: string; size: string }[];
    googleReviewLink: string;
    features: { title: string; description: string }[];
    gallery: string[];
};

const MOCK_BUSINESSES: Record<string, Business> = {
    "1": {
        id: "1",
        name: "The Artisan Coffee Roasters",
        category: "Specialty Coffee Shop",
        description: "Ethically sourced, carefully roasted, precisely brewed. Experience coffee like never before.",
        mainPic: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
        address: "123 Brew St, Coffee District, NY 10012",
        phone: "+1 (555) 123-4567",
        socials: [
            { name: "Website", url: "https://example.com", icon: Globe },
            { name: "Instagram", url: "https://instagram.com/artisancoffee", icon: Instagram },
            { name: "Twitter", url: "https://twitter.com/artisancoffee", icon: Twitter }
        ],
        hours: [
            { days: "Mon - Fri", timings: "7am - 7pm" },
            { days: "Saturday", timings: "8am - 6pm" },
            { days: "Sunday", timings: "Closed" }
        ],
        resources: [
            { title: "Full Coffee Menu", type: "pdf", url: "#", size: "1.2 MB" },
            { title: "Catering Brochure", type: "pdf", url: "#", size: "3.8 MB" }
        ],
        googleReviewLink: "https://search.google.com/local/writereview?placeid=123", // Mock Redirect Link
        features: [
            { title: "Premium Roasts", description: "Freshly roasted beans every week." },
            { title: "Co-working Space", description: "Fast WiFi & plenty of power outlets." },
            { title: "Artisan Pastries", description: "Baked fresh daily by our local partners." }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1000&auto=format&fit=crop",
        ]
    },
    "2": {
        id: "2",
        name: "Urban Cuts Barbershop",
        category: "Premium Grooming",
        description: "Classic cuts meet modern style. Walk-ins welcome, appointments preferred.",
        mainPic: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop",
        address: "45 Style Ave, Downtown, NY 10013",
        phone: "+1 (555) 987-6543",
        socials: [
            { name: "Instagram", url: "https://instagram.com/urbancuts", icon: Instagram },
            { name: "WhatsApp", url: "https://wa.me/15559876543", icon: MessageCircle },
            { name: "Facebook", url: "https://facebook.com/urbancuts", icon: Facebook }
        ],
        hours: [
            { days: "Tue - Sat", timings: "9am - 8pm" },
            { days: "Sunday", timings: "10am - 4pm" },
            { days: "Monday", timings: "Closed" }
        ],
        resources: [
            { title: "Services & Pricing Menu", type: "pdf", url: "#", size: "850 KB" }
        ],
        googleReviewLink: "https://search.google.com/local/writereview?placeid=456",
        features: [
            { title: "Classic Shave", description: "Hot towel traditional straight razor shave." },
            { title: "Precision Cuts", description: "Tailored to your face shape and style." },
            { title: "Beard Trim", description: "Sculpting and conditioning." }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1521484197-046646ce6d37?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1000&auto=format&fit=crop",
        ]
    }
};

export default function BusinessProfilePage() {
    const params = useParams();
    const id = (params?.id as string) || "1";
    const business = MOCK_BUSINESSES[id] || MOCK_BUSINESSES["1"];

    // Rating state
    const [hoveredStar, setHoveredStar] = useState<number>(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [feedback, setFeedback] = useState("");
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

    const handleRatingClick = (rating: number) => {
        if (rating >= 3) {
            // Redirect to Google Review
            window.open(business.googleReviewLink, '_blank');
        } else {
            // Open Private Feedback Modal
            setIsModalOpen(true);
            setFeedbackSubmitted(false);
            setFeedback("");
        }
    };

    const handleFeedbackSubmit = () => {
        // Handle feedback logic here (e.g., API call)
        console.log("Feedback submitted:", feedback);
        setFeedbackSubmitted(true);
        setTimeout(() => {
            setIsModalOpen(false);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white pb-20 selection:bg-primary selection:text-black font-sans">
            {/* Main Picture Header */}
            <div className="relative h-64 sm:h-80 md:h-96 w-full bg-[#050505] overflow-hidden">
                <div className="absolute inset-0 ">
                    <img
                        src={business.mainPic}
                        alt={business.name}
                        className="w-full h-full object-cover filter  scale-105"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent z-10 w-full h-full"></div>

                {/* Header Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-5 lg:p-8 z-20">
                    <div className="max-w-3xl mx-auto">
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight mb-1 sm:mb-2 drop-shadow-md"
                        >
                            {business.name}
                        </motion.h1>
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-4 text-zinc-300 font-medium text-xs sm:text-base drop-shadow-md"
                        >
                            <span className="text-primary">{business.category}</span>
                            <span className="hidden sm:inline">•</span>
                            <span className="flex items-center gap-1.5"><MapPin size={16} /> {business.address}</span>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-5 lg:px-8 relative z-20 w-full mt-6">

                {/* Description */}
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-zinc-400 leading-relaxed text-base sm:text-lg font-light mb-6"
                >
                    {business.description}
                </motion.p>

                {/* Social Media Links */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.25 }}
                    className="mb-8 flex flex-wrap gap-2.5 sm:gap-3"
                >
                    {business.socials.map((social, idx) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={idx}
                                href={social.url}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center gap-2 bg-zinc-900/60 border border-zinc-800/60 w-11 h-11 sm:w-auto sm:h-auto sm:px-5 sm:py-2.5 rounded-full hover:border-zinc-600 hover:bg-zinc-800 transition-all duration-300 group backdrop-blur-md shadow-sm"
                            >
                                <Icon size={18} className="text-zinc-400 group-hover:text-white transition-colors sm:w-4 sm:h-4" />
                                <span className="hidden sm:inline text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">{social.name}</span>
                            </a>
                        );
                    })}
                </motion.div>

                {/* Rate Us Card */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-zinc-900/40 border border-zinc-800/80 p-6 sm:p-8 rounded-[2rem] flex flex-col items-center justify-center text-center shadow-lg backdrop-blur-sm mb-12"
                >
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">How was your experience?</h3>
                    <p className="text-zinc-400 text-sm sm:text-base mb-6">Tap a star to rate us. Your feedback helps us improve!</p>

                    <div className="flex gap-2 sm:gap-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                className="focus:outline-none transition-transform hover:scale-110 active:scale-90"
                                onMouseEnter={() => setHoveredStar(star)}
                                onMouseLeave={() => setHoveredStar(0)}
                                onClick={() => handleRatingClick(star)}
                            >
                                <Star
                                    size={42}
                                    className={`transition-colors duration-200 ${hoveredStar >= star ? 'fill-yellow-400 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]' : 'fill-zinc-800 text-zinc-700'}`}
                                />
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Quick Actions */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="grid grid-cols-3 gap-2 sm:gap-3 mb-8 sm:mb-10"
                >
                    <a href={`tel:${business.phone}`} className="flex flex-col items-center justify-center gap-1.5 sm:gap-2 bg-zinc-900/40 border border-zinc-800/60 p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-zinc-800 hover:border-zinc-600 transition-all group active:scale-95">
                        <Phone size={20} className="text-zinc-400 group-hover:text-primary transition-colors sm:w-[22px] sm:h-[22px]" />
                        <span className="text-xs sm:text-sm font-medium text-zinc-300">Call Us</span>
                    </a>

                    <a href={`https://maps.google.com/?q=${encodeURIComponent(business.address)}`} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-1.5 sm:gap-2 bg-zinc-900/40 border border-zinc-800/60 p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-zinc-800 hover:border-zinc-600 transition-all group active:scale-95">
                        <MapPin size={20} className="text-zinc-400 group-hover:text-primary transition-colors sm:w-[22px] sm:h-[22px]" />
                        <span className="text-xs sm:text-sm font-medium text-zinc-300 transform group-hover:scale-105 transition-transform">Directions</span>
                    </a>

                    <button className="flex flex-col items-center justify-center gap-1.5 sm:gap-2 bg-zinc-900/40 border border-zinc-800/60 p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-zinc-800 hover:border-zinc-600 transition-all group active:scale-95">
                        <Share2 size={20} className="text-zinc-400 group-hover:text-primary transition-colors sm:w-[22px] sm:h-[22px]" />
                        <span className="text-xs sm:text-sm font-medium text-zinc-300 transform group-hover:scale-105 transition-transform">Share</span>
                    </button>
                </motion.div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent my-10 sm:my-14" />

                {/* Features */}
                <div className="space-y-6">
                    <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 tracking-tight">
                        <span className="p-2 bg-zinc-900 rounded-xl border border-zinc-800/60"><Compass size={20} className="text-primary" /></span>
                        What We Offer
                    </h2>
                    <div className="flex flex-col gap-4">
                        {business.features.map((feature, idx) => (
                            <div key={idx} className="bg-zinc-900/20 border border-zinc-800/50 p-4 sm:p-5 rounded-2xl hover:border-zinc-600 transition-all duration-300 group backdrop-blur-md">
                                <h3 className="text-base sm:text-lg font-semibold text-zinc-100 mb-1">{feature.title}</h3>
                                <p className="text-xs sm:text-base text-zinc-500 font-light">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent my-10 sm:my-14" />

                {/* Resources / Brochures */}
                {(business.resources && business.resources.length > 0) && (
                    <div className="space-y-6 mb-10 sm:mb-14">
                        <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 tracking-tight">
                            <span className="p-2 bg-zinc-900 rounded-xl border border-zinc-800/60"><FileText size={20} className="text-primary" /></span>
                            Resources & Menus
                        </h2>
                        <div className="flex flex-col gap-3 sm:gap-4">
                            {business.resources.map((resource, idx) => (
                                <a
                                    key={idx}
                                    href={resource.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-between p-4 sm:p-5 bg-zinc-900/40 border border-zinc-800/60 rounded-2xl hover:bg-zinc-800 hover:border-zinc-500 transition-all duration-300 group backdrop-blur-md active:scale-[0.98]"
                                >
                                    <div className="flex items-center gap-3 sm:gap-4 overflow-hidden">
                                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-zinc-950 flex flex-shrink-0 items-center justify-center border border-zinc-800/80 group-hover:border-primary/50 transition-colors">
                                            <FileText size={16} className="text-zinc-400 group-hover:text-primary transition-colors sm:w-[18px] sm:h-[18px]" />
                                        </div>
                                        <div className="overflow-hidden">
                                            <h3 className="text-sm sm:text-lg font-medium text-zinc-200 group-hover:text-white transition-colors truncate">{resource.title}</h3>
                                            <p className="text-[11px] sm:text-sm text-zinc-500 mt-0.5">{resource.type.toUpperCase()} • {resource.size}</p>
                                        </div>
                                    </div>
                                    <div className="p-2 sm:p-3 rounded-full bg-zinc-950 border border-zinc-800/80 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all flex-shrink-0">
                                        {resource.type === 'pdf' ? (
                                            <Download size={14} className="text-zinc-400 group-hover:text-primary transition-colors sm:w-4 sm:h-4" />
                                        ) : (
                                            <ExternalLink size={14} className="text-zinc-400 group-hover:text-primary transition-colors sm:w-4 sm:h-4" />
                                        )}
                                    </div>
                                </a>
                            ))}
                        </div>
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent mt-10 sm:mt-14" />
                    </div>
                )}

                {/* Working Hours */}
                <div className="space-y-6">
                    <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 tracking-tight">
                        <span className="p-2 bg-zinc-900 rounded-xl border border-zinc-800/60"><Clock size={20} className="text-primary" /></span>
                        Working Hours
                    </h2>
                    <div className="bg-zinc-900/20 border border-zinc-800/50 p-6 sm:p-8 rounded-[2rem] backdrop-blur-md">
                        <div className="flex flex-col gap-5">
                            {business.hours.map((schedule, idx) => (
                                <div key={idx} className="flex justify-between items-center border-b border-zinc-800/50 last:border-0 pb-5 last:pb-0">
                                    <span className="text-zinc-300 font-medium sm:text-lg">{schedule.days}</span>
                                    <span className={`font-semibold sm:text-lg ${schedule.timings.toLowerCase() === 'closed' ? 'text-zinc-500 italic' : 'text-zinc-100'}`}>{schedule.timings}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent my-10 sm:my-14" />

                {/* Gallery */}
                <div className="space-y-6 mb-16">
                    <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 tracking-tight">
                        <span className="p-2 bg-zinc-900 rounded-xl border border-zinc-800/60"><ImageIcon size={20} className="text-primary" /></span>
                        Gallery
                    </h2>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4 auto-rows-[160px] sm:auto-rows-[200px]">
                        {business.gallery.map((img, idx) => (
                            <div
                                key={idx}
                                className={`rounded-2xl overflow-hidden bg-[#050505] border border-zinc-800/40 group relative ${idx === 0 ? 'col-span-2 row-span-2' : ''}`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500 z-10"></div>
                                <img
                                    src={img}
                                    alt={`Gallery photo ${idx + 1}`}
                                    className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Private Feedback Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 p-2 bg-zinc-800/50 hover:bg-zinc-700 rounded-full text-zinc-400 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>

                            {feedbackSubmitted ? (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary/30">
                                        <Send size={30} className="text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 text-white">Thank You!</h3>
                                    <p className="text-zinc-400">Your feedback has been sent directly to our management team.</p>
                                </div>
                            ) : (
                                <>
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold mb-2 text-white">Rate your experience</h3>
                                        <p className="text-zinc-400 text-sm">We're sorry we didn't meet your expectations. Please tell us how we can improve.</p>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <textarea
                                                value={feedback}
                                                onChange={(e) => setFeedback(e.target.value)}
                                                placeholder="What went wrong? How can we make it right?"
                                                className="w-full h-32 bg-zinc-950 border border-zinc-800 rounded-xl p-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                                            ></textarea>
                                        </div>

                                        <div className="flex gap-3">
                                            <button
                                                onClick={() => setIsModalOpen(false)}
                                                className="flex-1 py-3 px-4 rounded-xl border border-zinc-700 text-zinc-300 font-medium hover:bg-zinc-800 transition-colors"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                onClick={handleFeedbackSubmit}
                                                disabled={!feedback.trim()}
                                                className="flex-1 py-3 px-4 rounded-xl bg-primary text-black font-bold hover:bg-[#a5d002] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                                            >
                                                <Send size={18} />
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    );
}
