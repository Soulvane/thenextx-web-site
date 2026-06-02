"use client";

import { useState } from "react";

const services = [
  "AI Agent Operations",
  "Shopify Development",
  "Shopify B2B",
  "Flutter App Development",
  "Mailing Campaign Operations",
  "PDF to HTML Conversion",
  "Business Workflow Automation",
  "Other / Not sure",
];

type FormState = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
};

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // Simulate async submission (no backend connected)
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(13, 13, 26, 0.8)",
    border: "1px solid rgba(59, 130, 246, 0.2)",
    borderRadius: "0.75rem",
    padding: "0.75rem 1rem",
    color: "#f0f0f8",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.8125rem",
    fontWeight: 500,
    marginBottom: "0.5rem",
    color: "#a0a0b8",
  };

  if (status === "success") {
    return (
      <div
        className="rounded-2xl p-12 text-center"
        style={{
          background: "rgba(13, 13, 26, 0.8)",
          border: "1px solid rgba(59, 130, 246, 0.2)",
        }}
      >
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-bold mb-2" style={{ color: "#f0f0f8" }}>
          Message received!
        </h3>
        <p style={{ color: "#6b6b8a" }}>
          We&apos;ll be in touch within 24 hours with a detailed response. Check
          your inbox.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl p-8 space-y-5"
      style={{
        background: "rgba(13, 13, 26, 0.8)",
        border: "1px solid rgba(59, 130, 246, 0.15)",
      }}
    >
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" style={labelStyle}>
            Full name <span style={{ color: "#3b82f6" }}>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            value={form.name}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => {
              (e.target as HTMLInputElement).style.borderColor =
                "rgba(59, 130, 246, 0.6)";
            }}
            onBlur={(e) => {
              (e.target as HTMLInputElement).style.borderColor =
                "rgba(59, 130, 246, 0.2)";
            }}
          />
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>
            Email address <span style={{ color: "#3b82f6" }}>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            value={form.email}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => {
              (e.target as HTMLInputElement).style.borderColor =
                "rgba(59, 130, 246, 0.6)";
            }}
            onBlur={(e) => {
              (e.target as HTMLInputElement).style.borderColor =
                "rgba(59, 130, 246, 0.2)";
            }}
          />
        </div>
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" style={labelStyle}>
          Company / Brand
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Acme Inc."
          value={form.company}
          onChange={handleChange}
          style={inputStyle}
          onFocus={(e) => {
            (e.target as HTMLInputElement).style.borderColor =
              "rgba(59, 130, 246, 0.6)";
          }}
          onBlur={(e) => {
            (e.target as HTMLInputElement).style.borderColor =
              "rgba(59, 130, 246, 0.2)";
          }}
        />
      </div>

      {/* Service + Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="service" style={labelStyle}>
            Service needed
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            style={{ ...inputStyle, cursor: "pointer" }}
            onFocus={(e) => {
              (e.target as HTMLSelectElement).style.borderColor =
                "rgba(59, 130, 246, 0.6)";
            }}
            onBlur={(e) => {
              (e.target as HTMLSelectElement).style.borderColor =
                "rgba(59, 130, 246, 0.2)";
            }}
          >
            <option value="" style={{ background: "#0d0d1a" }}>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s} value={s} style={{ background: "#0d0d1a" }}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" style={labelStyle}>
            Budget range
          </label>
          <select
            id="budget"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            style={{ ...inputStyle, cursor: "pointer" }}
            onFocus={(e) => {
              (e.target as HTMLSelectElement).style.borderColor =
                "rgba(59, 130, 246, 0.6)";
            }}
            onBlur={(e) => {
              (e.target as HTMLSelectElement).style.borderColor =
                "rgba(59, 130, 246, 0.2)";
            }}
          >
            <option value="" style={{ background: "#0d0d1a" }}>
              Select budget
            </option>
            {[
              "Under $5,000",
              "$5,000 – $15,000",
              "$15,000 – $50,000",
              "$50,000+",
              "Ongoing retainer",
            ].map((b) => (
              <option key={b} value={b} style={{ background: "#0d0d1a" }}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" style={labelStyle}>
          Tell us about your project{" "}
          <span style={{ color: "#3b82f6" }}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Describe your goals, current setup, and any specific requirements..."
          value={form.message}
          onChange={handleChange}
          style={{ ...inputStyle, resize: "vertical" }}
          onFocus={(e) => {
            (e.target as HTMLTextAreaElement).style.borderColor =
              "rgba(59, 130, 246, 0.6)";
          }}
          onBlur={(e) => {
            (e.target as HTMLTextAreaElement).style.borderColor =
              "rgba(59, 130, 246, 0.2)";
          }}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-3.5 rounded-xl text-base font-semibold text-white transition-all duration-200"
        style={{
          background:
            status === "submitting"
              ? "rgba(59, 130, 246, 0.4)"
              : "linear-gradient(135deg, #3b82f6, #8b5cf6)",
          boxShadow:
            status === "submitting"
              ? "none"
              : "0 0 30px rgba(59, 130, 246, 0.3)",
          cursor: status === "submitting" ? "not-allowed" : "pointer",
        }}
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      <p className="text-xs text-center" style={{ color: "#4a4a6a" }}>
        We respond within 24 hours. No spam, ever.
      </p>
    </form>
  );
}
