import React from 'react';
import { motion } from 'framer-motion';
import { FaChartBar, FaClock, FaTag, FaRocket } from 'react-icons/fa';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 70,
            damping: 18,
        },
    },
};

const cardHover = {
    y: -8,
    borderColor: "rgb(52, 211, 153)", 
    // Removed background color change from hover
    transition: { type: "spring", stiffness: 450, damping: 18 }, // Quicker, smoother lift
};

const Featured = () => {

    const features = [
        {
            title: 'Real-time Sentiment Analysis',
            description: 'Instantly gauge customer emotion and urgency across all communication channels to prioritize critical issues.',
            icon: FaChartBar,
        },
        {
            title: 'Smart Ticket Prioritization',
            description: 'Automatically assign severity and route tickets to the right agent, eliminating manual sorting and improving response time.',
            icon: FaClock,
        },
        {
            title: 'Root Cause Detection',
            description: 'AI analyzes patterns in historical data to identify and suggest fixes for underlying problems, preventing repeat complaints.',
            icon: FaTag,
        },
        {
            title: 'Performance Acceleration',
            description: 'Boost agent efficiency with suggested responses and a unified dashboard, leading to faster and consistent resolution.',
            icon: FaRocket,
        },
    ];

    return (
        <section className="w-full bg-transparent py-24 overflow-hidden text-white">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

                <div className="text-center mb-16">
                    <motion.h2
                        className="text-5xl max-sm:text-3xl font-bold text-white tracking-tight"
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Powerful AI-Driven Features
                    </motion.h2>
                    <motion.p
                        className="mt-4 text-xl text-gray-400 font-light"
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Everything you need to master complaint resolution.
                    </motion.p>
                </div>

                <motion.div
                    className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={cardHover}
                            // Base class setup for border-only hover
                            className="p-8 rounded-2xl bg-gray-900 transition-all duration-300 cursor-pointer 
                                border-2 border-transparent hover:border-green-500/0 h-full flex flex-col justify-start"
                        >
                            <div className="mb-4">
                                <feature.icon className="w-10 h-10 text-green-400" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-gray-400 text-base flex-grow">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Featured;