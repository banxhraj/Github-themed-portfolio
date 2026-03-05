import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, Info, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const ContactForm = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error'
  const [errors, setErrors] = useState({});

  // Using Vite's environment variable system
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const validate = (data) => {
    let newErrors = {};
    if (!data.user_name) newErrors.user_name = "Name is required";
    if (!data.user_email) {
      newErrors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.user_email)) {
      newErrors.user_email = "Email format is invalid";
    }
    if (!data.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus(null);

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    const validationErrors = validate(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    // Using sendForm for direct integration with the HTML form
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        setLoading(false);
        setStatus("success");
        formRef.current.reset(); // Clear form on success
      },
      (error) => {
        console.log(error.text);
        setLoading(false);
        setStatus("error");
      },
    );
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-800/30 rounded-xl p-6 border border-[#d0d7de] dark:border-[#30363d]">
      <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
        {/* Name Input */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
            Name
          </label>
          <input
            name="user_name"
            type="text"
            className={`w-full bg-white dark:bg-[#0d1117] border ${errors.user_name ? "border-red-500" : "border-[#d0d7de] dark:border-slate-700"} rounded-lg px-4 py-2 focus:border-[#0969da] focus:ring-1 focus:ring-[#0969da] outline-none transition-all text-slate-900 dark:text-slate-100`}
            placeholder="Your Name"
          />
          {errors.user_name && (
            <p className="text-red-500 text-xs mt-1">{errors.user_name}</p>
          )}
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
            Email
          </label>
          <input
            name="user_email"
            type="email"
            className={`w-full bg-white dark:bg-[#0d1117] border ${errors.user_email ? "border-red-500" : "border-[#d0d7de] dark:border-slate-700"} rounded-lg px-4 py-2 focus:border-[#0969da] focus:ring-1 focus:ring-[#0969da] outline-none transition-all text-slate-900 dark:text-slate-100`}
            placeholder="your.email@example.com"
          />
          {errors.user_email && (
            <p className="text-red-500 text-xs mt-1">{errors.user_email}</p>
          )}
        </div>

        {/* Message Textarea */}
        <div>
          <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
            Message
          </label>
          <div
            className={`rounded-lg border ${errors.message ? "border-red-500" : "border-[#d0d7de] dark:border-slate-700"} overflow-hidden bg-white dark:bg-[#0d1117]`}
          >
            <textarea
              name="message"
              className="w-full border-none bg-transparent px-4 py-3 focus:ring-0 text-slate-900 dark:text-slate-100 resize-none"
              placeholder="Write your message here..."
              rows={6}
            />
          </div>
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>

        {/* Feedback Messages */}
        {status === "success" && (
          <div className="flex items-center gap-2 p-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-sm border border-green-200 dark:border-green-800">
            <CheckCircle className="w-4 h-4" />
            Message sent successfully!
          </div>
        )}
        {status === "error" && (
          <div className="flex items-center gap-2 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg text-sm border border-red-200 dark:border-red-800">
            <AlertCircle className="w-4 h-4" />
            Failed to send message. Please try again or check your credentials.
          </div>
        )}

        <div className="flex items-center justify-between pt-2">
          <p className="text-xs text-[#6e7781] flex items-center gap-1">
            <Info className="w-3 h-3" /> All fields are required
          </p>
          <button
            type="submit"
            disabled={loading}
            className="bg-[#0969da] hover:bg-[#0969da]/90 disabled:opacity-70 text-white font-bold py-2 px-6 rounded-lg transition-colors flex items-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send message
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
