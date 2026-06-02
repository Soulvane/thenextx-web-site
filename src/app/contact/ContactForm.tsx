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
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "0.75rem",
    padding: "0.75rem 1rem",
    color: "var(--foreground)",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.8125rem",
    fontWeight: 500,
    marginBottom: "0.5rem",
    color: "var(--secondary-foreground)",
  };

  if (status === "success") {
    return (
      <div
        className="rounded-lg p-12 text-center"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        <div className="mono-icon text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--foreground)" }}>
          Message received!
        </h3>
        <p style={{ color: "var(--muted-foreground)" }}>
          We&apos;ll be in touch within 24 hours with a detailed response. Check
          your inbox.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg p-8 space-y-5"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
      }}
    >
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" style={labelStyle}>
            Full name <span style={{ color: "var(--accent)" }}>*</span>
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
                "var(--border-strong)";
            }}
            onBlur={(e) => {
              (e.target as HTMLInputElement).style.borderColor =
                "var(--border)";
            }}
          />
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>
            Email address <span style={{ color: "var(--accent)" }}>*</span>
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
                "var(--border-strong)";
            }}
            onBlur={(e) => {
              (e.target as HTMLInputElement).style.borderColor =
                "var(--border)";
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
              "var(--border-strong)";
          }}
          onBlur={(e) => {
            (e.target as HTMLInputElement).style.borderColor =
              "var(--border)";
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
                "var(--border-strong)";
            }}
            onBlur={(e) => {
              (e.target as HTMLSelectElement).style.borderColor =
                "var(--border)";
            }}
          >
            <option value="" style={{ background: "var(--surface)" }}>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s} value={s} style={{ background: "var(--surface)" }}>
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
                "var(--border-strong)";
            }}
            onBlur={(e) => {
              (e.target as HTMLSelectElement).style.borderColor =
                "var(--border)";
            }}
          >
            <option value="" style={{ background: "var(--surface)" }}>
              Select budget
            </option>
            {[
              "Under $5,000",
              "$5,000 – $15,000",
              "$15,000 – $50,000",
              "$50,000+",
              "Ongoing retainer",
            ].map((b) => (
              <option key={b} value={b} style={{ background: "var(--surface)" }}>
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
          <span style={{ color: "var(--accent)" }}>*</span>
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
              "var(--border-strong)";
          }}
          onBlur={(e) => {
            (e.target as HTMLTextAreaElement).style.borderColor =
              "var(--border)";
          }}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-3.5 rounded-lg text-base font-semibold text-white transition-all duration-200"
        style={{
          background:
            status === "submitting"
              ? "var(--subtle-foreground)"
              : "var(--foreground)",
          boxShadow:
            status === "submitting"
              ? "none"
              : "0 8px 18px rgba(23, 23, 23, 0.12)",
          cursor: status === "submitting" ? "not-allowed" : "pointer",
        }}
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      <p className="text-xs text-center" style={{ color: "var(--subtle-foreground)" }}>
        We respond within 24 hours. No spam, ever.
      </p>
    </form>
  );
}
