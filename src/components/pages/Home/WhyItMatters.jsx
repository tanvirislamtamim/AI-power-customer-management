import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaStar, FaTachometerAlt, FaChartLine } from 'react-icons/fa';

// --- Framer Motion Variants ---

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

const textItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 70,
            damping: 18,
        },
    },
};

const metricItemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 15,
        },
    },
};

const WhyItMatters = () => {
    
    // Content tailored for AI Complaint Management
    const benefits = [
        'Reduce resolution time by up to 60%.',
        'Identify complaint trends and root causes proactively.',
        'Empower agents with AI-driven actionable insights.',
        'Gain qualitative data for service improvement and strategy.',
    ];

    const metrics = [
        { value: '60%', label: 'Faster Resolution', icon: FaTachometerAlt, bgColor: 'from-green-700 to-green-600' },
        { value: '98%', label: 'Customer Satisfaction', icon: FaStar, bgColor: 'from-green-800 to-green-700' },
        { value: '10K+', label: 'Complaints Analyzed', icon: FaChartLine, bgColor: 'from-green-600 to-green-500' },
        { value: '4.9/5', label: 'Platform User Rating', icon: FaStar, bgColor: 'from-green-700 to-green-600' },
    ];

    return (
        <section className="w-full bg-transparent py-24 overflow-hidden text-white">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                
                <motion.div 
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Left Column: Text and Benefits */}
                    <div>
                        <motion.h2 
                            className="text-5xl font-extrabold text-white mb-6"
                            variants={textItemVariants}
                        >
                            Why It Matters
                        </motion.h2>
                        
                        <motion.p 
                            className="text-xl text-gray-400 mb-8 max-w-xl"
                            variants={textItemVariants}
                        >
                            In today's competitive landscape, effective resolution isn't just about reacting—it's about building loyalty and driving growth.
                        </motion.p>
                        
                        {/* Benefit List */}
                        <ul className="space-y-4 mb-10">
                            {benefits.map((benefit, index) => (
                                <motion.li 
                                    key={index} 
                                    className="flex items-start text-lg text-gray-300"
                                    variants={textItemVariants}
                                >
                                    <FaCheckCircle className="mt-1 mr-3 text-green-500 w-5 h-5 flex-shrink-0" />
                                    <span>{benefit}</span>
                                </motion.li>
                            ))}
                        </ul>
                        
                        {/* Call to Action Button */}
                        <motion.button 
                            className="px-8 py-3 bg-green-700 text-white font-semibold rounded-lg text-lg hover:bg-green-600 transition duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                            variants={textItemVariants}
                        >
                            Start Your Free Trial
                        </motion.button>
                    </div>
                    
                    {/* Right Column: Key Metrics (KPIs) */}
                    <div className="grid grid-cols-2 gap-6">
                        {metrics.map((metric, index) => (
                            <motion.div 
                                key={index}
                                className={`p-6 rounded-xl bg-gradient-to-br ${metric.bgColor} h-40 flex flex-col justify-center items-center`}
                                variants={metricItemVariants}
                                whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 300 } }}
                            >
                                <motion.div className="text-5xl font-extrabold mb-1" initial={{ y: 10 }} animate={{ y: 0, transition: { delay: index * 0.1 } }}>
                                    {metric.value}
                                </motion.div>
                                <motion.p className="text-sm font-medium text-gray-100 uppercase tracking-wider text-center" initial={{ y: 10 }} animate={{ y: 0, transition: { delay: index * 0.1 + 0.1 } }}>
                                    {metric.label}
                                </motion.p>
                            </motion.div>
                        ))}
                    </div>

                </motion.div>
                
            </div>
        </section>
    );
};

export default WhyItMatters;