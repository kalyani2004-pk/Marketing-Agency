import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Mail, Phone } from "lucide-react"

export function Contact() {
    const [status, setStatus] = useState("idle")

    function onSubmit(e) {
        e.preventDefault()
        setStatus("sent")
    }

    return (
        <section id="contact" className="scroll-mt-24 border-t border-border py-16 md:py-24" aria-label="Contact">
            <div className="mx-auto max-w-6xl px-4">
                <motion.h2
                    className="font-heading text-3xl font-bold md:text-4xl"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                >
                    Let’s build something amazing together.
                </motion.h2>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-foreground/5 p-5 backdrop-blur">
                        <label className="block text-sm">
                            Name
                            <input
                                type="text"
                                name="name"
                                required
                                className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm outline-none ring-0 focus:ring-2 focus:ring-primary/40"
                                aria-label="Name"
                            />
                        </label>

                        <label className="mt-4 block text-sm">
                            Email
                            <input
                                type="email"
                                name="email"
                                required
                                className="mt-1 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm outline-none ring-0 focus:ring-2 focus:ring-primary/40"
                                aria-label="Email"
                            />
                        </label>

                        <label className="mt-4 block text-sm">
                            Message
                            <textarea
                                name="message"
                                rows={5}
                                required
                                className="mt-1 w-full resize-y rounded-xl border border-input bg-background px-3 py-2 text-sm outline-none ring-0 focus:ring-2 focus:ring-primary/40"
                                aria-label="Message"
                            />
                        </label>

                        <button
                            type="submit"
                            className="mt-5 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-foreground ring-1 ring-primary/20 transition hover:animate-pulse bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-purple)]"
                        >
                            {status === "sent" ? "Message Sent ✓" : "Send Message"}
                        </button>
                    </form>

                    <div className="rounded-2xl border border-border bg-foreground/5 p-5 backdrop-blur">
                        <h3 className="font-heading text-xl font-bold mb-4">Grow Your Business with Expert Guidance!</h3>
                        <p className="text-sm text-muted-foreground mb-6">Connect with our experts, fill out the form, and let’s create a powerful online strategy together.</p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-sm">Location</p>
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=Ring+Road,+above+Hotel+Gulmohar,+near+JDCC+Bank,+Ganesh+Colony,+Jalgaon,+Maharashtra+425001"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        Ring Rd, above Hotel Gulmohar, near JDCC Bank, Ganesh Colony, Jalgaon, Maharashtra 425001
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-sm">E-Mail us</p>
                                    <a
                                        href="mailto:contact@contentocean.in"
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        contact@contentocean.in
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold text-sm">Phone</p>
                                    <p className="text-sm text-muted-foreground">
                                        +91 7875359828 | +91 7822860876
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating WhatsApp button */}
            <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full text-foreground shadow-lg ring-1 ring-primary/20 transition hover:shadow-[0_0_28px] hover:shadow-primary/40 bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-purple)]"
            >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                    <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 .02 5.35.02 11.96c0 2.11.55 4.19 1.6 6.02L0 24l6.16-1.6a12 12 0 0 0 5.84 1.49h.01c6.62 0 11.97-5.35 11.97-11.96 0-3.2-1.25-6.21-3.46-8.45Zm-8.52 19.1h-.01a9.96 9.96 0 0 1-5.07-1.39l-.36-.21-3.65.94.98-3.56-.23-.37A9.97 9.97 0 0 1 2.04 11.96C2.04 6.46 6.5 2 12 2c2.66 0 5.17 1.04 7.06 2.93A9.9 9.9 0 0 1 22 11.96c0 5.5-4.46 9.96-9.99 9.96Zm5.79-7.42c-.32-.16-1.9-.94-2.19-1.04-.3-.11-.52-.16-.74.16s-.85 1.04-1.05 1.25c-.19.2-.39.23-.71.08-.32-.16-1.34-.5-2.55-1.6-.94-.83-1.57-1.85-1.76-2.16-.19-.32-.02-.49.14-.65.14-.14.32-.36.47-.54.16-.19.21-.32.32-.53.11-.21.06-.4-.03-.57-.08-.16-.74-1.79-1.02-2.45-.27-.65-.54-.56-.74-.56h-.63c-.2 0-.52.08-.79.4s-1.04 1.02-1.04 2.48 1.07 2.88 1.22 3.08c.16.21 2.11 3.21 5.1 4.49.71.31 1.26.5 1.69.64.71.23 1.35.2 1.86.12.57-.08 1.9-.77 2.17-1.51.27-.75.27-1.39.19-1.51-.07-.12-.27-.19-.59-.35Z" />
                </svg>
            </a>
        </section>
    )
}
