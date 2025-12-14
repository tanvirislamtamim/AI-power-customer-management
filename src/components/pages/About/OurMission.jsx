import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const OurMission = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const floatingAnimation = {
        y: [0, -10, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <div className="relative overflow-hidden bg-gray-900 py-16 md:py-24">
            {/* Background Decorative Elements - Dark Theme */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-tr from-cyan-900/20 to-pink-900/20 rounded-full blur-3xl"></div>

            {/* Grid Pattern Background - Dark */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(to right, #4f46e5 1px, transparent 1px),
                           linear-gradient(to bottom, #4f46e5 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                }}></div>
            </div>

            <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                >
                    {/* Left Side - Image */}
                    <motion.div
                        variants={imageVariants}
                        className="relative"
                    >
                        {/* Main Image Container */}
                        <motion.div
                            animate={floatingAnimation}
                            className="relative z-10"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/30">
                                {/* Gradient Border Effect - Dark */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-3xl blur-lg opacity-30"></div>

                                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-1 rounded-3xl">
                                    <img
                                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                        alt="AI Customer Support"
                                        className="w-full h-[400px] object-cover rounded-2xl brightness-90 contrast-110"
                                    />
                                    {/* Image Overlay for Dark Theme */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent rounded-2xl"></div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating Elements Around Image - Dark Theme */}
                        <motion.div
                            animate={{ y: [-5, 5, -5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl rotate-12 shadow-xl shadow-blue-500/30 flex items-center justify-center"
                        >
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                            </svg>
                        </motion.div>

                        <motion.div
                            animate={{ y: [5, -5, 5] }}
                            transition={{ duration: 2.5, repeat: Infinity }}
                            className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl -rotate-12 shadow-xl shadow-purple-500/30 flex items-center justify-center"
                        >
                            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                            </svg>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        <div className="text-start mb-16">
                            <motion.div
                                className="inline-flex items-center gap-2 mb-6"
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
                                <span className="text-sm font-medium bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                                    AI-Powered Process
                                </span>
                            </motion.div>

                            <motion.h2
                                className="text-3xl max-sm:text-2xl font-bold text-white tracking-tight mb-6"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                                    Transforming Customer
                                </span>{' '}
                                Experience with AI
                            </motion.h2>

                            <motion.p
                                className="mt-4 text-xl text-gray-300 font-light max-w-2xl mx-auto"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                Everything you need to master complaint resolution with intelligent automation
                            </motion.p>
                        </div>

                        {/* Mission Points - Dark Theme */}
                        <motion.div
                            variants={containerVariants}
                            className="space-y-6"
                        >
                            {[
                                {
                                    icon: '🤖',
                                    title: 'AI-Powered Resolution',
                                    description: 'Leverage cutting-edge artificial intelligence to automatically analyze, categorize, and resolve customer complaints with unprecedented accuracy.'
                                },
                                {
                                    icon: '📈',
                                    title: 'Data-Driven Insights',
                                    description: 'Transform complaints into actionable business intelligence that drives improvement and fosters customer loyalty.'
                                },
                                {
                                    icon: '⚡',
                                    title: 'Real-Time Processing',
                                    description: 'Handle customer concerns instantly with our 24/7 automated system, reducing resolution time by up to 70%.'
                                },
                               
                            ].map((point, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    className="group flex items-start space-x-4 p-5 rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 cursor-pointer"
                                >
                                    {/* Icon - Dark Theme */}
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-gray-700 group-hover:border-blue-400">
                                        <span className="text-2xl">{point.icon}</span>
                                    </div>

                                    {/* Content - Dark Theme */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                                            {point.title}
                                        </h3>
                                        <p className="text-gray-400 group-hover:text-gray-300">
                                            {point.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>


                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default OurMission;