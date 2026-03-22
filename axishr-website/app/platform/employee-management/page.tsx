import Link from "next/link"
import { PlatformFAQSection } from "@/components/platform/PlatformFAQSection"
import { PlatformVideoSection } from "@/components/platform/PlatformVideoSection"
import {
  Users, CheckCircle2, ArrowRight,
  FileText, GitBranch, Shield, Settings,
  UserCheck, Database, Eye, Briefcase,
} from "lucide-react"

const TEAL = "#0b6b62"

const steps = [
  {
    num: 1,
    icon: UserCheck,
    title: "Create Profile",
    body: "Create a complete employee profile with personal, role, and statutory details from day one.",
  },
  {
    num: 2,
    icon: GitBranch,
    title: "Assign Role & Branch",
    body: "Link the employee to the correct department, reporting line, and branch entity.",
  },
  {
    num: 3,
    icon: Settings,
    title: "Set Policies",
    body: "Apply leave entitlements, payroll rules, and attendance policies based on the employee's role.",
  },
  {
    num: 4,
    icon: Eye,
    title: "Enable Self-Service",
    body: "Activate self-service access so employees can view payslips, submit requests, and update details.",
  },
  {
    num: 5,
    icon: Shield,
    title: "Audit & Review",
    body: "Maintain a full history of every profile change with timestamps and user attribution.",
  },
]

const coreFeatures = [
  {
    icon: Users,
    title: "Employee Profiles",
    description:
      "Centralised records covering personal information, employment terms, documents, and status across the full employee lifecycle.",
  },
  {
    icon: GitBranch,
    title: "Organisation Chart",
    description:
      "Visual and hierarchical representation of your reporting structure across departments, branches, and entities.",
  },
  {
    icon: FileText,
    title: "Document Vault",
    description:
      "Secure storage for contracts, identification documents, certifications, and policy acknowledgements per employee.",
  },
  {
    icon: Briefcase,
    title: "Role Management",
    description:
      "Define and manage job roles, grades, and position attributes tied to compensation and leave policy rules.",
  },
  {
    icon: UserCheck,
    title: "Self-Service Portal",
    description:
      "Employees can update personal details, download documents, and submit requests without HR intervention.",
  },
  {
    icon: Database,
    title: "Data Change History",
    description:
      "Every field update is logged with the previous value, new value, editor identity, and timestamp for full traceability.",
  },
]

const faqs = [
  {
    question: "Can we manage employees across multiple entities in one view?",
    answer:
      "Yes. AxisHR supports multi-entity employee management with role-based visibility, so head office teams can view across all branches while branch managers are scoped to their own entities.",
  },
  {
    question: "How does the self-service portal work for employees?",
    answer:
      "Employees log in to a dedicated portal to view their payslips, leave balances, submitted claims, and personal details. They can raise update requests that go through an HR approval workflow before changes are applied.",
  },
  {
    question: "Is there an organisation chart feature?",
    answer:
      "Yes. AxisHR automatically generates a live organisational chart based on reporting line configurations. It updates in real time as roles, departments, and headcount change.",
  },
  {
    question: "What types of documents can be stored against an employee profile?",
    answer:
      "You can attach contracts, identity documents, signed policy acknowledgements, performance reviews, certifications, and any custom document category your HR team defines.",
  },
]

export default function EmployeeManagementPage() {
  return (
    <main>

      {/* ── Hero ── */}
      <section className="relative min-h-[calc(100vh-71px)] flex items-center overflow-hidden bg-white">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(11,107,98,0.07) 1.5px, transparent 1.5px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 75% 85% at 100% 0%, rgba(11,107,98,0.13) 0%, rgba(11,107,98,0.05) 45%, transparent 70%)`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-9">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold"
                style={{
                  backgroundColor: "rgba(11,107,98,0.08)",
                  color: TEAL,
                  fontFamily: "var(--font-plus-jakarta)",
                }}
              >
                <Users className="w-3.5 h-3.5" />
                Platform · Employee Management
              </div>
              <div className="space-y-5">
                <h1
                  className="text-5xl xl:text-[3.6rem] font-bold leading-[1.1] text-slate-900"
                  style={{ fontFamily: "var(--font-merriweather)" }}
                >
                  Your people, managed
                  <br />
                  <span style={{ color: TEAL }}>with complete clarity.</span>
                </h1>
                <p
                  className="text-[1.05rem] text-slate-500 max-w-md leading-relaxed"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  From hire to exit — AxisHR gives you a single, structured view of every employee
                  across entities, roles, and branches.
                </p>
              </div>
              <ul className="space-y-2.5">
                {[
                  "Centralised employee profiles with full history",
                  "Role and department hierarchy management",
                  "Self-service access for employees",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: TEAL }} />
                    <span className="text-sm text-slate-600" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-5 flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold text-white transition-all hover:opacity-90 active:scale-95"
                  style={{ backgroundColor: TEAL, fontFamily: "var(--font-plus-jakarta)" }}
                >
                  Get a demo
                </Link>
                <Link
                  href="/platform"
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors group"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  See all features
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div
                className="relative w-full rounded-2xl overflow-hidden"
                style={{
                  boxShadow: "0 24px 80px rgba(11,107,98,0.18), 0 4px 24px rgba(0,0,0,0.08)",
                  minHeight: "400px",
                  background: "linear-gradient(135deg, #cde8e4 0%, #0b6b62 100%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#071f1c" }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl sm:text-4xl font-bold leading-tight text-center mb-16 text-white"
            style={{ fontFamily: "var(--font-merriweather)" }}
          >
            Employee Management Built For{" "}
            <span style={{ color: "#4ecdc4" }}>Structure, Visibility, And Scale</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                minHeight: "360px",
                background: "linear-gradient(135deg, #0f3d38 0%, #1a6b5e 100%)",
              }}
            />
            <div className="space-y-8">
              {[
                {
                  label: "Why This Matters",
                  body: "Disorganised employee records create downstream errors in payroll, compliance, and planning. A clean, structured employee database is the foundation every HR operation depends on.",
                },
                {
                  label: "The Operational Job",
                  body: "Maintain accurate, up-to-date employee records across all departments and entities, with clear ownership of roles, reporting lines, and policy assignments.",
                },
                {
                  label: "The Operational Challenge",
                  body: "HR teams often manage employee data across spreadsheets, legacy systems, and disparate tools — leading to inconsistencies, outdated records, and limited visibility for leadership.",
                },
                {
                  label: "How AxisHR Resolves It",
                  body: "AxisHR consolidates all employee data into a single structured system with versioned history, policy linkage, and self-service capabilities — eliminating manual upkeep and data fragmentation.",
                },
              ].map(({ label, body }) => (
                <div key={label} className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-1 rounded-full mt-1"
                    style={{ backgroundColor: "#4ecdc4", minHeight: "100%" }}
                  />
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-widest mb-1.5"
                      style={{ color: "#4ecdc4", fontFamily: "var(--font-plus-jakarta)" }}
                    >
                      {label}
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.58)", fontFamily: "var(--font-plus-jakarta)" }}
                    >
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Features ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-center text-3xl sm:text-4xl font-bold mb-16"
            style={{ fontFamily: "var(--font-merriweather)", color: TEAL }}
          >
            Core Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-14">
            {coreFeatures.map((feat) => {
              const Icon = feat.icon
              return (
                <div key={feat.title} className="flex flex-col items-center text-center">
                  <div className="mb-5">
                    <Icon className="w-10 h-10" style={{ color: TEAL }} strokeWidth={1.4} />
                  </div>
                  <h3
                    className="text-base font-bold text-slate-900 mb-3"
                    style={{ fontFamily: "var(--font-merriweather)" }}
                  >
                    {feat.title}
                  </h3>
                  <p
                    className="text-sm text-slate-500 leading-relaxed max-w-[240px]"
                    style={{ fontFamily: "var(--font-plus-jakarta)" }}
                  >
                    {feat.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Implementation Process ── */}
      <section
        className="relative flex flex-col justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ backgroundColor: "#071f1c", minHeight: "100vh" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(78,205,196,0.09) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative max-w-6xl mx-auto w-full py-24">
          <div className="text-center mb-28">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "#4ecdc4", fontFamily: "var(--font-plus-jakarta)" }}
            >
              Step by Step
            </p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-merriweather)" }}
            >
              Implementation Process
            </h2>
          </div>
          {/* Desktop */}
          <div className="hidden lg:block relative">
            <div
              className="absolute left-[10%] right-[10%]"
              style={{
                top: "2.5rem",
                height: "1px",
                background: "linear-gradient(to right, transparent, rgba(78,205,196,0.35) 15%, rgba(78,205,196,0.35) 85%, transparent)",
              }}
            />
            <div className="grid grid-cols-5 gap-8">
              {steps.map(({ num, icon: Icon, title, body }) => (
                <div key={num} className="flex flex-col items-center text-center">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center font-bold text-xl mb-10 relative z-10 border-2"
                    style={{
                      backgroundColor: "#071f1c",
                      borderColor: "#4ecdc4",
                      color: "#4ecdc4",
                      fontFamily: "var(--font-plus-jakarta)",
                      boxShadow: "0 0 24px rgba(78,205,196,0.22), 0 0 6px rgba(78,205,196,0.15)",
                    }}
                  >
                    {num}
                  </div>
                  <Icon size={28} strokeWidth={1.4} style={{ color: "#4ecdc4" }} className="mb-5" />
                  <h3 className="text-base font-bold text-white mb-3" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.48)", fontFamily: "var(--font-plus-jakarta)" }}>
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Mobile */}
          <div className="lg:hidden relative">
            <div
              className="absolute w-px"
              style={{
                left: "2.5rem",
                top: "2.5rem",
                bottom: "2.5rem",
                background: "linear-gradient(to bottom, transparent, rgba(78,205,196,0.35) 10%, rgba(78,205,196,0.35) 90%, transparent)",
              }}
            />
            <div className="space-y-14">
              {steps.map(({ num, icon: Icon, title, body }) => (
                <div key={num} className="flex gap-8 relative">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 relative z-10 border-2"
                    style={{
                      backgroundColor: "#071f1c",
                      borderColor: "#4ecdc4",
                      color: "#4ecdc4",
                      fontFamily: "var(--font-plus-jakarta)",
                      boxShadow: "0 0 24px rgba(78,205,196,0.22)",
                    }}
                  >
                    {num}
                  </div>
                  <div className="pt-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={18} strokeWidth={1.4} style={{ color: "#4ecdc4" }} />
                      <h3 className="text-base font-bold text-white" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                        {title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.48)", fontFamily: "var(--font-plus-jakarta)" }}>
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Context Section ── */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div
              className="lg:sticky lg:top-28 rounded-2xl overflow-hidden"
              style={{
                minHeight: "400px",
                background: "linear-gradient(135deg, #cde8e4 0%, #0b6b62 100%)",
              }}
            />
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: TEAL, fontFamily: "var(--font-plus-jakarta)" }}
              >
                HR Operations
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold leading-tight mb-8"
                style={{ fontFamily: "var(--font-merriweather)", color: TEAL }}
              >
                Structured Employee Records For Every Entity
              </h2>
              <p
                className="text-slate-500 leading-relaxed mb-5 text-sm"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Accurate employee data is not just an operational requirement — it is a governance obligation. From statutory reporting to internal audits, organisations must maintain defensible records of employment terms, role changes, and policy assignments at every stage of the employee lifecycle.
              </p>
              <p
                className="text-slate-500 leading-relaxed mb-12 text-sm"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                AxisHR is designed to serve multi-entity businesses operating across branches and jurisdictions, where employee records must be accurate at both the local and group level without duplication or manual synchronisation.
              </p>
              <div className="h-px mb-10" style={{ backgroundColor: "rgba(11,107,98,0.1)" }} />
              <p
                className="text-xs font-bold uppercase tracking-widest mb-7"
                style={{ color: TEAL, fontFamily: "var(--font-plus-jakarta)" }}
              >
                Who Uses This Feature
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: Users,
                    role: "HR Administrators",
                    desc: "Managing onboarding, profile updates, document storage, and employee data integrity across the organisation.",
                  },
                  {
                    icon: Briefcase,
                    role: "Department Managers",
                    desc: "Viewing team headcount, reporting lines, and role assignments within their department or branch.",
                  },
                  {
                    icon: UserCheck,
                    role: "Employees (Self-Service)",
                    desc: "Accessing their own profile, payslips, leave balances, and submitting personal detail update requests.",
                  },
                ].map(({ icon: Icon, role, desc }) => (
                  <div key={role} className="flex items-start gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(11,107,98,0.07)" }}
                    >
                      <Icon size={19} strokeWidth={1.4} style={{ color: TEAL }} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 mb-0.5" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                        {role}
                      </p>
                      <p className="text-sm text-slate-500" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Video ── */}
      <PlatformVideoSection
        heading="See Employee Management"
        headingAccent="in Action"
        subtitle="Watch how AxisHR centralises employee data, org structures, and self-service into one seamless system."
        videoId="f-tyrSsy04k"
      />

      {/* ── FAQ ── */}
      <PlatformFAQSection faqs={faqs} />

    </main>
  )
}
