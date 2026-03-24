"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ChevronDown,
  Menu,
  X,
  Users,
  Building2,
  Globe,
  Clock,
  CalendarDays,
  DollarSign,
  TrendingUp,
  UserCheck,
  BarChart3,
  Award,
  Shield,
  Receipt,
  Heart,
  Factory,
  Landmark,
  Activity,
  Truck,
  ShoppingBag,
  Briefcase,
  LayoutDashboard,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

// Deep teal as the single primary color
const TEAL = "#0b6b62"
const TEAL_DARK = "#095950"

const platformItems = [
  {
    title: "Employee Management",
    href: "/platform/employee-management",
    description: "Centralize employee data and streamline HR operations",
    icon: Users,
  },
  {
    title: "Multi-Branch Operations",
    href: "/platform/multi-branch-operations",
    description: "Manage multiple locations with unified controls",
    icon: Building2,
  },
  {
    title: "Global Employment",
    href: "/platform/global-employment",
    description: "Hire and manage talent across borders effortlessly",
    icon: Globe,
  },
  {
    title: "Time & Attendance",
    href: "/platform/time-attendance",
    description: "Track work hours and attendance with precision",
    icon: Clock,
  },
  {
    title: "Leave Management",
    href: "/platform/leave-management",
    description: "Streamline leave requests and approvals",
    icon: CalendarDays,
  },
  {
    title: "Payroll",
    href: "/platform/payroll",
    description: "Accurate, compliant payroll processing at scale",
    icon: DollarSign,
  },
  {
    title: "Performance Management",
    href: "/platform/performance-management",
    description: "Drive growth with structured performance reviews",
    icon: TrendingUp,
  },
  {
    title: "Onboarding & Offboarding",
    href: "/platform/onboarding-offboarding",
    description: "Seamless employee lifecycle management",
    icon: UserCheck,
  },
  {
    title: "Reports & Analytics",
    href: "/platform/reports-analytics",
    description: "Data-driven insights for strategic decisions",
    icon: BarChart3,
  },
  {
    title: "Compensation",
    href: "/platform/compensation",
    description: "Design competitive compensation structures",
    icon: Award,
  },
  {
    title: "Compliance & Security",
    href: "/platform/compliance-security",
    description: "Stay compliant and secure across jurisdictions",
    icon: Shield,
  },
  {
    title: "Claims & Expenses",
    href: "/platform/claims-expenses",
    description: "Simplify expense claims and reimbursements",
    icon: Receipt,
  },
  {
    title: "Employee Engagement & Surveys",
    href: "/platform/employee-engagement",
    description: "Foster culture and gather meaningful feedback",
    icon: Heart,
  },
]

const industryItems = [
  {
    title: "Industry Overview",
    href: "/industries",
    description: "How Selevo powers HR across every sector",
    icon: LayoutDashboard,
  },
  {
    title: "Manufacturing",
    href: "/industries/manufacturing",
    description: "Workforce solutions built for the factory floor",
    icon: Factory,
  },
  {
    title: "Banking & Financial Services",
    href: "/industries/banking-financial-services",
    description: "Compliant HR for regulated financial institutions",
    icon: Landmark,
  },
  {
    title: "Healthcare",
    href: "/industries/healthcare",
    description: "People operations for care-driven organisations",
    icon: Activity,
  },
  {
    title: "Logistics & Distribution",
    href: "/industries/logistics-distribution",
    description: "Manage mobile, shift-based workforce at scale",
    icon: Truck,
  },
  {
    title: "Retail & FMCG",
    href: "/industries/retail-fmcg",
    description: "Flexible HR for fast-moving retail teams",
    icon: ShoppingBag,
  },
  {
    title: "Professional Services & Technology",
    href: "/industries/professional-services-technology",
    description: "Talent-centric HR for knowledge-driven firms",
    icon: Briefcase,
  },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false)
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false)

  const linkClass = (href: string) =>
    cn(
      "inline-flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors",
      "text-slate-600 hover:text-slate-900 hover:bg-slate-50",
      pathname === href && "bg-teal-50 font-semibold"
    )

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main bar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[68px]">

            {/* ── Logo + Desktop Nav (left-aligned) ── */}
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow"
                  style={{ backgroundColor: TEAL }}
                >
                  <span
                    className="text-white font-bold text-base"
                    style={{ fontFamily: "var(--font-merriweather)" }}
                  >
                    S
                  </span>
                </div>
                <span
                  className="text-xl font-bold text-slate-900 tracking-tight"
                  style={{ fontFamily: "var(--font-merriweather)", color: TEAL }}
                >
                  selevo
                </span>
              </Link>

              {/* ── Desktop Navigation ── */}
              <div className="hidden lg:flex items-center">
                <NavigationMenu>
                <NavigationMenuList className="gap-0">

                  {/* Why Selevo */}
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/why-selevo"
                        className={linkClass("/why-selevo")}
                        style={{
                          fontFamily: "var(--font-plus-jakarta)",
                          color: pathname === "/why-selevo" ? TEAL : undefined,
                        }}
                      >
                        Why Selevo
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  {/* Our Platform — mega dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={cn(
                        "px-4 py-2 text-sm font-medium rounded-md transition-colors bg-transparent",
                        "text-slate-600 hover:text-slate-900 hover:bg-slate-50 data-[state=open]:bg-slate-50 data-[state=open]:text-slate-900"
                      )}
                      style={{
                        fontFamily: "var(--font-plus-jakarta)",
                        color: pathname.startsWith("/platform") ? TEAL : undefined,
                      }}
                    >
                      Our Platform
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                      <div className="w-[780px] p-6 bg-white rounded-xl shadow-xl border border-slate-100">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-5">
                          <div>
                            <h3
                              className="text-lg font-bold text-slate-900"
                              style={{ fontFamily: "var(--font-merriweather)" }}
                            >
                              Our Platform
                            </h3>
                            <p
                              className="text-sm text-slate-500 mt-0.5"
                              style={{ fontFamily: "var(--font-plus-jakarta)" }}
                            >
                              Everything you need to manage your workforce — in one place.
                            </p>
                          </div>
                          <Link href="/platform">
                            <Button
                              size="sm"
                              className="text-white text-xs font-medium rounded-full px-4 hover:opacity-90 transition-opacity"
                              style={{
                                backgroundColor: TEAL,
                                fontFamily: "var(--font-plus-jakarta)",
                              }}
                            >
                              View All Features →
                            </Button>
                          </Link>
                        </div>

                        {/* 13-item grid */}
                        <div className="grid grid-cols-3 gap-1">
                          {platformItems.map((item) => {
                            const Icon = item.icon
                            const active = pathname === item.href
                            return (
                              <NavigationMenuLink asChild key={item.href}>
                                <Link
                                  href={item.href}
                                  className={cn(
                                    "group flex items-start gap-3 p-3 rounded-lg transition-colors",
                                    active ? "bg-teal-50" : "hover:bg-slate-50"
                                  )}
                                >
                                  <div
                                    className={cn(
                                      "mt-0.5 w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 transition-colors",
                                      active
                                        ? "bg-teal-100"
                                        : "bg-slate-100 group-hover:bg-teal-50"
                                    )}
                                  >
                                    <Icon
                                      className="w-4 h-4 transition-colors"
                                      style={{
                                        color: active ? TEAL : undefined,
                                      }}
                                      color={active ? TEAL : undefined}
                                    />
                                  </div>
                                  <div>
                                    <div
                                      className="text-sm font-semibold transition-colors group-hover:text-[#0d9488]"
                                      style={{
                                        fontFamily: "var(--font-plus-jakarta)",
                                        color: active ? TEAL : "#1e293b",
                                      }}
                                    >
                                      {item.title}
                                    </div>
                                    <div
                                      className="text-xs text-slate-500 mt-0.5 leading-relaxed"
                                      style={{ fontFamily: "var(--font-plus-jakarta)" }}
                                    >
                                      {item.description}
                                    </div>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            )
                          })}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* Industries — dropdown */}
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={cn(
                        "px-4 py-2 text-sm font-medium rounded-md transition-colors bg-transparent",
                        "text-slate-600 hover:text-slate-900 hover:bg-slate-50 data-[state=open]:bg-slate-50 data-[state=open]:text-slate-900"
                      )}
                      style={{
                        fontFamily: "var(--font-plus-jakarta)",
                        color: pathname.startsWith("/industries") ? TEAL : undefined,
                      }}
                    >
                      Industries
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                      <div className="w-[560px] p-6 bg-white rounded-xl shadow-xl border border-slate-100">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-5">
                          <div>
                            <h3
                              className="text-lg font-bold text-slate-900"
                              style={{ fontFamily: "var(--font-merriweather)" }}
                            >
                              Industries
                            </h3>
                            <p
                              className="text-sm text-slate-500 mt-0.5"
                              style={{ fontFamily: "var(--font-plus-jakarta)" }}
                            >
                              Tailored HR solutions for every sector.
                            </p>
                          </div>
                          <Link href="/industries">
                            <Button
                              size="sm"
                              className="text-white text-xs font-medium rounded-full px-4 hover:opacity-90 transition-opacity"
                              style={{
                                backgroundColor: TEAL,
                                fontFamily: "var(--font-plus-jakarta)",
                              }}
                            >
                              View All Industries →
                            </Button>
                          </Link>
                        </div>

                        {/* 7-item grid — 2 columns */}
                        <div className="grid grid-cols-2 gap-1">
                          {industryItems.map((item) => {
                            const Icon = item.icon
                            const active = pathname === item.href
                            return (
                              <NavigationMenuLink asChild key={item.href}>
                                <Link
                                  href={item.href}
                                  className={cn(
                                    "group flex items-start gap-3 p-3 rounded-lg transition-colors",
                                    active ? "bg-teal-50" : "hover:bg-slate-50"
                                  )}
                                >
                                  <div
                                    className={cn(
                                      "mt-0.5 w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 transition-colors",
                                      active
                                        ? "bg-teal-100"
                                        : "bg-slate-100 group-hover:bg-teal-50"
                                    )}
                                  >
                                    <Icon
                                      className="w-4 h-4 transition-colors"
                                      style={{ color: active ? TEAL : undefined }}
                                      color={active ? TEAL : undefined}
                                    />
                                  </div>
                                  <div>
                                    <div
                                      className="text-sm font-semibold transition-colors group-hover:text-[#0d9488]"
                                      style={{
                                        fontFamily: "var(--font-plus-jakarta)",
                                        color: active ? TEAL : "#1e293b",
                                      }}
                                    >
                                      {item.title}
                                    </div>
                                    <div
                                      className="text-xs text-slate-500 mt-0.5 leading-relaxed"
                                      style={{ fontFamily: "var(--font-plus-jakarta)" }}
                                    >
                                      {item.description}
                                    </div>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            )
                          })}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  {/* About */}
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/about"
                        className={linkClass("/about")}
                        style={{
                          fontFamily: "var(--font-plus-jakarta)",
                          color: pathname === "/about" ? TEAL : undefined,
                        }}
                      >
                        About
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  {/* Contact */}
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/contact"
                        className={linkClass("/contact")}
                        style={{
                          fontFamily: "var(--font-plus-jakarta)",
                          color: pathname === "/contact" ? TEAL : undefined,
                        }}
                      >
                        Contact
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                </NavigationMenuList>
              </NavigationMenu>
              </div>
            </div>

            {/* ── CTA Buttons (desktop) ── */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="outline"
                asChild
                className="rounded-full px-5 h-9 text-sm font-medium border-slate-300 text-slate-700 transition-colors"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = TEAL
                  e.currentTarget.style.color = TEAL
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = ""
                  e.currentTarget.style.color = ""
                }}
              >
                <Link href="/signin">Sign in</Link>
              </Button>
              <Button
                asChild
                className="rounded-full px-5 h-9 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
                style={{
                  backgroundColor: TEAL,
                  fontFamily: "var(--font-plus-jakarta)",
                }}
              >
                <Link href="/contact">Get a demo</Link>
              </Button>
            </div>

            {/* ── Hamburger (mobile) ── */}
            <button
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Teal accent line ── */}
      <div className="h-[2.5px]" style={{ backgroundColor: TEAL }} />

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">

            <Link
              href="/why-selevo"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              style={{
                fontFamily: "var(--font-plus-jakarta)",
                color: pathname === "/why-selevo" ? TEAL : undefined,
                backgroundColor: pathname === "/why-selevo" ? "#f0fdfa" : undefined,
              }}
            >
              Why Selevo
            </Link>

            {/* Our Platform accordion */}
            <div>
              <button
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                onClick={() => setMobilePlatformOpen(!mobilePlatformOpen)}
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Our Platform
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-slate-400 transition-transform duration-200",
                    mobilePlatformOpen && "rotate-180"
                  )}
                />
              </button>

              {mobilePlatformOpen && (
                <div className="mt-1 ml-4 space-y-0.5 border-l-2 pl-3" style={{ borderColor: "#99f6e4" }}>
                  {platformItems.map((item) => {
                    const Icon = item.icon
                    const active = pathname === item.href
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors hover:bg-slate-50"
                        style={{
                          fontFamily: "var(--font-plus-jakarta)",
                          color: active ? TEAL : "#475569",
                          backgroundColor: active ? "#f0fdfa" : undefined,
                        }}
                      >
                        <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                        {item.title}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Industries accordion */}
            <div>
              <button
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Industries
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-slate-400 transition-transform duration-200",
                    mobileIndustriesOpen && "rotate-180"
                  )}
                />
              </button>

              {mobileIndustriesOpen && (
                <div className="mt-1 ml-4 space-y-0.5 border-l-2 pl-3" style={{ borderColor: "#99f6e4" }}>
                  {industryItems.map((item) => {
                    const Icon = item.icon
                    const active = pathname === item.href
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors hover:bg-slate-50"
                        style={{
                          fontFamily: "var(--font-plus-jakarta)",
                          color: active ? TEAL : "#475569",
                          backgroundColor: active ? "#f0fdfa" : undefined,
                        }}
                      >
                        <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                        {item.title}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>

            {["About", "Contact"].map((label) => {
              const href = `/${label.toLowerCase()}`
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                  style={{
                    fontFamily: "var(--font-plus-jakarta)",
                    color: pathname === href ? TEAL : undefined,
                    backgroundColor: pathname === href ? "#f0fdfa" : undefined,
                  }}
                >
                  {label}
                </Link>
              )
            })}

            {/* Mobile CTAs */}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <Button
                variant="outline"
                asChild
                className="w-full rounded-full font-medium border-slate-300 text-slate-700"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                <Link href="/signin">Sign in</Link>
              </Button>
              <Button
                asChild
                className="w-full rounded-full font-semibold text-white hover:opacity-90 transition-opacity"
                style={{
                  backgroundColor: TEAL,
                  fontFamily: "var(--font-plus-jakarta)",
                }}
              >
                <Link href="/contact">Get a demo</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
