"use client";

import { useState } from "react";
import { useI18n } from "@/i18n/LanguageProvider";

const services = [
  { label: "service.shopify.title", value: "Shopify Development" },
  { label: "service.shopifyB2B.title", value: "Shopify B2B" },
  { label: "service.flutter.title", value: "Flutter App Development" },
  { label: "service.mailing.title", value: "Mailing Campaign Operations" },
  { label: "service.pdf.title", value: "PDF to HTML Conversion" },
  { label: "service.workflow.title", value: "Business Workflow Automation" },
  { label: "contact.form.otherService", value: "Other / Not sure" },
];

const budgets = [
  { label: "contact.form.budget.under5k", value: "Under $5,000" },
  { label: "contact.form.budget.5to15", value: "$5,000 – $15,000" },
  { label: "contact.form.budget.15to50", value: "$15,000 – $50,000" },
  { label: "contact.form.budget.50plus", value: "$50,000+" },
  { label: "contact.form.budget.retainer", value: "Ongoing retainer" },
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
  const { t } = useI18n();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(data?.error ?? "contact.form.error");
      }

      setStatus("success");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "contact.form.errorEmail"
      );
      setStatus("error");
    }
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
          {t("contact.form.successTitle")}
        </h3>
        <p style={{ color: "var(--muted-foreground)" }}>
          {t(
            "contact.form.successBody"
          )}
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
            {t("contact.form.name")} <span style={{ color: "var(--accent)" }}>*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder={t("contact.form.placeholder.name")}
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
            {t("contact.form.email")} <span style={{ color: "var(--accent)" }}>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder={t("contact.form.placeholder.email")}
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
          {t("contact.form.company")}
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder={t("contact.form.placeholder.company")}
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
            {t("contact.form.service")}
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
              {t("contact.form.selectService")}
            </option>
            {services.map((service) => (
              <option
                key={service.value}
                value={service.value}
                style={{ background: "var(--surface)" }}
              >
                {t(service.label)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" style={labelStyle}>
            {t("contact.form.budget")}
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
              {t("contact.form.selectBudget")}
            </option>
            {budgets.map((budget) => (
              <option
                key={budget.value}
                value={budget.value}
                style={{ background: "var(--surface)" }}
              >
                {t(budget.label)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" style={labelStyle}>
          {t("contact.form.message")}{" "}
          <span style={{ color: "var(--accent)" }}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={t(
            "contact.form.placeholder.message"
          )}
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
        {status === "submitting" ? t("contact.form.sending") : t("contact.form.send")}
      </button>

      {status === "error" && (
        <p
          className="text-sm text-center"
          style={{ color: "var(--foreground)" }}
        >
          {t(errorMessage)}
        </p>
      )}

      <p className="text-xs text-center" style={{ color: "var(--subtle-foreground)" }}>
        {t("contact.form.note")}
      </p>
    </form>
  );
}
