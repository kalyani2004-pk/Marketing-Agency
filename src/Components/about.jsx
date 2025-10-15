import { motion } from "framer-motion"

export function About() {
    return (
        <section id="about" className="scroll-mt-24 border-t border-border py-16 md:py-24" aria-label="About ContentOcean">
            <motion.div
                className="mx-auto max-w-6xl px-4 text-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="font-heading text-3xl font-bold md:text-4xl">Who We Are</h2>
                <p className="mt-4 text-foreground/80">
                    We are a future-forward agency crafting bold brands that thrive across social and web. Our work blends
                    strategy, design, and storytelling to help you grow faster.
                </p>

                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    {[
                        { title: "Our Vision", icon: "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941", desc: "To be the leading creative agency that empowers brands to thrive in the digital age through innovative storytelling and strategic design." },
                        { title: "Our Values", icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z", desc: "Integrity, creativity, and collaboration guide our work, ensuring every project delivers exceptional quality and measurable results." },
                        { title: "Our Edge", icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z", desc: "Cutting-edge technology and data-driven insights give us the competitive advantage to deliver ahead of trends." },
                    ].map((c, index) => (
                        <motion.div
                            key={c.title}
                            className="rounded-2xl border border-border bg-foreground/5 p-6 backdrop-blur text-center relative overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            {/* Animated background on hover */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0"
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.svg
                                className="h-8 w-8 text-primary mx-auto relative z-10"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                                whileHover={{
                                    scale: 1.2,
                                    rotate: 360,
                                    color: "var(--brand-purple)"
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                <path d={c.icon} />
                            </motion.svg>
                            <motion.div
                                className="mt-4 font-semibold text-lg relative z-10"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                {c.title}
                            </motion.div>
                            <motion.p
                                className="mt-2 text-sm text-foreground/70 leading-relaxed relative z-10"
                                initial={{ opacity: 0.8 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.2 }}
                            >
                                {c.desc}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* OUR TEAM Section */}
            <motion.div
                className="mt-16 text-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="font-heading text-3xl font-bold md:text-4xl">OUR TEAM</h2>
                <p className="mt-4 text-foreground/80 max-w-2xl mx-auto">
                    Meet the creative minds behind our innovative solutions. Our diverse team brings together expertise in design, strategy, and technology to deliver exceptional results.
                </p>

                <div className="mt-12 grid gap-6 px-4 md:grid-cols-3">
                    {[
                        {
                            name: "Jayesh Dhamale",
                            role: "Creative Director",
                            bio: "Leading design innovation with 10+ years of experience in branding and visual storytelling.",
                            image: "/client-portrait.jpg"
                        },
                        {
                            name: "Gajanan Chaudhari",
                            role: "Lead Developer",
                            bio: "Full-stack developer passionate about creating seamless user experiences and scalable solutions.",
                            image: "/client-portrait.jpg"
                        },
                        {
                            name: "Hemal Talele",
                            role: "Content Editor",
                            bio: "Expert editor refining content to captivate audiences and elevate brand storytelling with precision and creativity.",
                            image: "/client-portrait.jpg"
                        },
                        {
                            name: "Leena Bhole",
                            role: "Social Media Marketing",
                            bio: "Dynamic social media strategist building engaging online communities and driving brand visibility through innovative campaigns.",
                            image: "/client-portrait.jpg"
                        },
                        {
                            name: "Tejal Patil",
                            role: "Content Specialist",
                            bio: "Crafting compelling narratives that engage audiences and drive meaningful connections.",
                            image: "/client-portrait.jpg"
                        }
                    ].map((member, index) => (
                        <motion.div
                            key={member.name}
                            className="rounded-2xl border border-border bg-foreground/5 p-6 text-center backdrop-blur"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="mx-auto h-20 w-20 rounded-full object-cover border-2 border-primary/20"
                            />
                            <h3 className="mt-4 font-semibold text-lg">{member.name}</h3>
                            <p className="text-primary font-medium text-sm">{member.role}</p>
                            <p className="mt-2 text-sm text-foreground/70">{member.bio}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
