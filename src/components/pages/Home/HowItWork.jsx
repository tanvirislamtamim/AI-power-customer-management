import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaSearch, FaCommentDots } from 'react-icons/fa';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
        },
    },
};

const cardHover = {
    scale: 1.03,
    y: -7,
    borderColor: "rgb(52, 211, 153)",
};

const iconHover = {
    scale: 1.1,
    rotate: 5,
};

const HowItWork = () => {

    const steps = [
        {
            id: '01',
            title: 'Receive & Analyze',
            description: 'AI instantly captures and analyzes complaints from all channels (email, social, chat) to determine sentiment and urgency.',
            icon: FaRobot,
        },
        {
            id: '02',
            title: 'Intelligent Routing',
            description: 'Complaints are automatically categorized, tagged, and routed to the specialized agent or department for quick action.',
            icon: FaSearch,
        },
        {
            id: '03',
            title: 'Automated Resolution',
            description: 'AI suggests the best solution, auto-drafts responses, and learns from every interaction to continuously improve resolution rates.',
            icon: FaCommentDots,
        },
    ];

    return (
        <section className="w-full bg-transparent py-20 overflow-hidden text-white">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl max-sm:text-3xl font-bold text-white tracking-tight"
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        How We Drive Resolution
                    </motion.h2>
                    <motion.p
                        className="mt-3 text-xl text-gray-400 font-light"
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Automated, Intelligent, and Customer-Focused
                    </motion.p>
                </div>

                <motion.div
                    className="grid gap-12 lg:grid-cols-3 relative"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                >

                    {/* Horizontal Connector Line (Desktop/Large Screens) */}
                    <motion.div
                        className="hidden lg:block absolute inset-x-0 top-[2.5rem] h-0.5 bg-gray-500/20 transform -translate-y-1/2"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1, transition: { duration: 1, ease: "easeOut", delay: 0.3 } }}
                        viewport={{ once: true, amount: 0.4 }}
                        style={{ originX: 0 }}
                    />

                    {/* Vertical Connector Line (Mobile/Tablet Screens) */}
                    <div className="lg:hidden absolute left-[3rem] top-0 bottom-0 w-0.5 bg-gray-500/20"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            variants={itemVariants}
                            whileHover={cardHover}
                            className="relative pl-20 pr-8 py-8 md:p-8 md:pt-12 lg:p-8 lg:pt-12 rounded-xl bg-gray-900 transition-all duration-500 ease-in-out cursor-pointer group 
                                border-2 border-transparent hover:border-green-500 z-10"
                        >

                            {/* Step Number Badge (Positioned for Mobile/Desktop flow) */}
                            <div className="absolute top-1/2 left-0 lg:top-0 transform -translate-y-1/2 lg:-translate-y-1/2">
                                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white text-xl font-extrabold border-4 border-gray-900 shadow-xl lg:shadow-none">
                                    {step.id}
                                </span>
                            </div>

                            <motion.div
                                className="mb-6 p-3 inline-block rounded-lg bg-gra-500/20"
                                whileHover={iconHover}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <step.icon className="w-8 h-8 text-green-400 transition duration-300" />
                            </motion.div>

                            <h3 className="text-xl font-extrabold text-white mb-4">
                                {step.title}
                            </h3>

                            <p className="text-gray-400 text-base">
                                {step.description}
                            </p>

                            {/* Horizontal Flow Dot (Desktop) */}
                            <div className="hidden lg:block absolute inset-x-0 top-6 h-3 w-3 rounded-full bg-green-600 mx-auto z-20"></div>

                            {/* Vertical Flow Dot (Mobile/Tablet) */}
                            <div className="lg:hidden absolute left-[2.5rem] top-1/2 h-3 w-3 rounded-full bg-green-600 transform -translate-x-1/2 -translate-y-1/2 z-20"></div>

                            {/* Mobile Connector Overlap Fix */}
                            {index < steps.length - 1 && (
                                <div className="lg:hidden absolute left-[3rem] bottom-0 h-8 w-0.5 bg-gray-800 z-30"></div>
                            )}

                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default HowItWork;