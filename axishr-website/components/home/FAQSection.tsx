"use client"

import { useState } from "react"
import { ChevronUp, ChevronDown, HelpCircle } from "lucide-react"

const TEAL = "#0b6b62"

const faqs = [
  {
    question: "What is Selevo?",
    answer:
      "Selevo is an all-in-one HR management platform designed to simplify people operations — from payroll and attendance to performance management and global employment — built for growing organisations across multiple entities and borders.",
  },
  {
    question: "How does payroll processing work on Selevo?",
    answer:
      "Selevo routes attendance, leave, claims, and approvals directly into payroll-ready inputs. Each pay cycle runs on validated workforce data, reducing manual corrections and ensuring accurate, compliant payroll processing in minutes.",
  },
  {
    question: "Can Selevo handle multi-country teams?",
    answer:
      "Yes. Selevo supports global employment with multi-currency payroll, localised compliance rules, and cross-border workforce visibility — all managed from a single platform without duplicating records.",
  },
  {
    question: "How does the onboarding module work?",
    answer:
      "Selevo automates the full onboarding journey — from document collection and role assignment to system access provisioning. New hires can be set up and ready to work in a structured, policy-driven workflow.",
  },
  {
    question: "Is my data secure on Selevo?",
    answer:
      "Selevo uses role-based access controls, field-level permissions, MFA-ready authentication, and full audit trails on every key action. Security and compliance are embedded into everyday workflows, not bolted on as an afterthought.",
  },
  {
    question: "Can Selevo integrate with existing accounting software?",
    answer:
      "Selevo is built with integrations in mind. Payroll outputs and expense data can be connected to major accounting and ERP systems, reducing manual data entry and keeping finance teams in sync.",
  },
  {
    question: "Can I manage multiple branches from one account?",
    answer:
      "Absolutely. Selevo supports multi-branch and multi-entity structures with a unified hierarchy — head office, regional offices, and individual branches — all under one account with branch-level controls.",
  },
  {
    question: "What kind of support does Selevo offer?",
    answer:
      "Selevo provides dedicated implementation support, onboarding assistance, and ongoing customer success management. Our team works with you through go-live and beyond to ensure smooth adoption and continuous improvement.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? -1 : i)

  return (
    <section className="px-4 sm:px-6 lg:px-8 bg-white" style={{ height: "100vh" }}>
      <div className="max-w-6xl mx-auto h-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 h-full items-center">

          {/* ── Left: heading ── */}
          <div>

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-6 text-xs font-semibold"
              style={{
                backgroundColor: "rgba(11,107,98,0.08)",
                color: TEAL,
                fontFamily: "var(--font-plus-jakarta)",
              }}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              Frequently asked questions
            </div>

            {/* Heading */}
            <h2
              className="text-4xl sm:text-5xl font-bold leading-tight mb-5"
              style={{ fontFamily: "var(--font-merriweather)" }}
            >
              <span className="text-slate-900">Frequently asked</span>
              <br />
              <span style={{ color: TEAL }}>questions</span>
            </h2>

            {/* Subtext */}
            <p
              className="text-sm text-slate-500 leading-relaxed max-w-xs"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Everything you need to know about Selevo. Can't find an answer?{" "}
              <a
                href="/contact"
                className="font-medium underline underline-offset-2 hover:opacity-75 transition-opacity"
                style={{ color: TEAL }}
              >
                Reach out to our team.
              </a>
            </p>
          </div>

          {/* ── Right: scrollable accordion ── */}
          <div
            className="flex flex-col gap-3 overflow-y-scroll no-scrollbar"
            style={{ maxHeight: "80vh", scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={i}
                  className="rounded-2xl transition-all duration-200"
                  style={{
                    backgroundColor: isOpen ? "#f0faf9" : "#f8fafc",
                    border: `1.5px solid ${isOpen ? "rgba(11,107,98,0.2)" : "rgba(0,0,0,0.06)"}`,
                  }}
                >
                  {/* Question row */}
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
                    <span
                      className="text-sm font-semibold pr-4"
                      style={{
                        fontFamily: "var(--font-plus-jakarta)",
                        color: isOpen ? TEAL : "#1e293b",
                      }}
                    >
                      {faq.question}
                    </span>

                    {/* Chevron circle */}
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
                      style={{
                        backgroundColor: isOpen ? TEAL : "rgba(11,107,98,0.10)",
                      }}
                    >
                      {isOpen
                        ? <ChevronUp className="w-4 h-4 text-white" />
                        : <ChevronDown className="w-4 h-4" style={{ color: TEAL }} />
                      }
                    </div>
                  </button>

                  {/* Answer */}
                  {isOpen && (
                    <div className="px-6 pb-5">
                      <p
                        className="text-sm text-slate-500 leading-relaxed"
                        style={{ fontFamily: "var(--font-plus-jakarta)" }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
