import { motion } from "framer-motion"

const cards = [
    {
        title: "Dynamic Websites",
        desc: "Interactive React, Next.js, or WordPress builds.",
    },
    {
        title: "Static Websites",
        desc: "Fast, SEO-friendly landing pages.",
    },
    {
        title: "Admin Panels",
        desc: "Custom dashboards with analytics.",
    },
]

export function WebsiteDevelopment() {
    return (
        <section
            id="webdev"
            className="scroll-mt-24 border-t border-border py-16 md:py-24"
            aria-label="Website Development"
        >
            <div className="mx-auto max-w-6xl px-4">
                <motion.h2
                    className="font-heading text-3xl font-bold md:text-4xl text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                >
                    Website Development
                </motion.h2>
                <p className="mt-2 max-w-2xl text-foreground/80 text-center">
                    We craft websites that are fast, dynamic, and built to convert.
                </p>

                <div className="mt-8 flex flex-row gap-4 justify-center">
                    {cards.map((c, i) => (
                        <motion.div
                            key={c.title}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.45, delay: i * 0.05 }}
                            className="rounded-2xl border border-border bg-foreground/5 p-5 shadow-inner backdrop-blur ring-1 ring-inset ring-primary/10 flex-1 max-w-xs"
                        >
                            <div className="text-base font-semibold">{c.title}</div>
                            <p className="mt-2 text-sm text-foreground/70">{c.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <a
                        href="#portfolio"
                        className="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-foreground ring-1 ring-primary/20 transition-shadow hover:shadow-[0_0_28px] hover:shadow-primary/40 bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-purple)]"
                    >
                        View Our Work
                    </a>
                </div>
            </div>
        </section>
    )
}
