import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import {
  Mail,
  Linkedin,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    setErrorMessage("");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (
        !serviceId ||
        !templateId ||
        !publicKey ||
        serviceId === "your_service_id"
      ) {
        throw new Error(
          "Email service is not configured. Please check environment variables.",
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
          name: "Yerqanat Yrymbai",
        },
        publicKey,
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset status after delay
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setErrorMessage(
        error.message || "Something went wrong. Please try again later.",
      );

      // Reset to idle after a delay so user can try again
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }
  };

  return (
    <SectionWrapper id="contact" className="mb-20">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-cyan-400 font-mono mb-4">05. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-slate-lightest mb-6">
          Get In Touch
        </h2>
        <p className="text-gray-600 dark:text-slate-light text-lg mb-12">
          I am actively looking for remote international opportunities in
          high-growth AI and full-stack roles. Whether you have a question about
          my stack, a project proposal, or just want to say hi, my inbox is
          always open!
        </p>

        <div className="flex justify-center gap-6 mb-12">
          <a
            href="mailto:yerqanat34@gmail.com"
            className="flex items-center gap-2 text-gray-600 dark:text-slate-light hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
          >
            <Mail /> yerqanat34@gmail.com
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-slate-light hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
          >
            <Linkedin /> LinkedIn
          </a>
        </div>

        <div className="bg-white dark:bg-navy-800 p-8 rounded-lg shadow-lg border border-gray-100 dark:border-navy-700 text-left relative overflow-hidden min-h-[400px]">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                    delay: 0.1,
                  }}
                  className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-bold text-navy-900 dark:text-slate-lightest mb-2"
                >
                  Message Sent!
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-600 dark:text-slate-light"
                >
                  Thanks for reaching out! I'll get back to you as soon as
                  possible.
                </motion.p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-slate-light mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-50 dark:bg-navy-900 border border-gray-300 dark:border-navy-700 rounded p-3 text-navy-900 dark:text-slate-lightest focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all disabled:opacity-50"
                      placeholder="John Doe"
                      disabled={status === "sending"}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-slate-light mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-50 dark:bg-navy-900 border border-gray-300 dark:border-navy-700 rounded p-3 text-navy-900 dark:text-slate-lightest focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all disabled:opacity-50"
                      placeholder="john@example.com"
                      disabled={status === "sending"}
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-slate-light mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 dark:bg-navy-900 border border-gray-300 dark:border-navy-700 rounded p-3 text-navy-900 dark:text-slate-lightest focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all disabled:opacity-50"
                    placeholder="Hi Yerqanat, I'd like to discuss a project..."
                    disabled={status === "sending"}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 rounded transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="animate-spin" /> Sending...
                    </>
                  ) : status === "error" ? (
                    <>
                      Try Again <AlertCircle size={18} />
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 text-red-500 text-sm text-center flex items-center justify-center gap-2"
                  >
                    <AlertCircle size={14} /> {errorMessage}
                  </motion.p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
