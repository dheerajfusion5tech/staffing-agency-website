export type Job = {
  id: string
  title: string
  company: string
  location: string
  type: "Contract" | "Permanent" | "Temporary" | "Contract-to-Hire"
  category: string
  rate: string
  posted: string
  matchScore: number
  description: string
  tags: string[]
}

export const jobs: Job[] = [
  {
    id: "j1",
    title: "Senior React Engineer",
    company: "Northline Systems",
    location: "Remote — US",
    type: "Contract",
    category: "Engineering",
    rate: "$95–115/hr",
    posted: "2d ago",
    matchScore: 94,
    description: "Lead frontend architecture for a precision manufacturing platform. Strong TypeScript, TanStack, and design-system experience required.",
    tags: ["React", "TypeScript", "TanStack", "Design Systems"],
  },
  {
    id: "j2",
    title: "Staff Product Designer",
    company: "Aperture Labs",
    location: "New York, NY (Hybrid)",
    type: "Permanent",
    category: "Design",
    rate: "$160–185k",
    posted: "1d ago",
    matchScore: 91,
    description: "Own end-to-end product design for B2B tooling. Editorial visual systems and dense information interfaces preferred.",
    tags: ["Product Design", "Figma", "Design Systems", "B2B"],
  },
  {
    id: "j3",
    title: "DevOps / Platform Engineer",
    company: "Forge Internal",
    location: "Austin, TX / Remote",
    type: "Contract-to-Hire",
    category: "Infrastructure",
    rate: "$110–130/hr",
    posted: "4h ago",
    matchScore: 88,
    description: "Build and maintain CI/CD, observability, and deployment pipelines for high-throughput matching systems.",
    tags: ["Kubernetes", "Terraform", "Observability", "CI/CD"],
  },
  {
    id: "j4",
    title: "Technical Recruiter — Engineering",
    company: "Forge",
    location: "Remote — Global",
    type: "Permanent",
    category: "Recruiting",
    rate: "$95–120k + bonus",
    posted: "3d ago",
    matchScore: 86,
    description: "Source and close senior engineering talent for precision technology clients. Deep technical fluency required.",
    tags: ["Technical Recruiting", "Sourcing", "Engineering"],
  },
  {
    id: "j5",
    title: "Full-Stack Engineer (Node + React)",
    company: "Helix Analytics",
    location: "Chicago, IL (Hybrid)",
    type: "Permanent",
    category: "Engineering",
    rate: "$145–170k",
    posted: "5d ago",
    matchScore: 83,
    description: "Own features across the stack for a data-heavy analytics product. Strong preference for clean architecture.",
    tags: ["Node", "React", "PostgreSQL", "API Design"],
  },
  {
    id: "j6",
    title: "Contract UX Researcher",
    company: "Lumen Health",
    location: "Remote — US",
    type: "Contract",
    category: "Research",
    rate: "$85–100/hr",
    posted: "1d ago",
    matchScore: 79,
    description: "Run generative and evaluative research for complex enterprise workflows. Comfort with dense data interfaces essential.",
    tags: ["UX Research", "Enterprise", "Mixed Methods"],
  },
  {
    id: "j7",
    title: "Site Reliability Engineer",
    company: "Northline Systems",
    location: "Remote — US / EU",
    type: "Permanent",
    category: "Infrastructure",
    rate: "$155–180k",
    posted: "6d ago",
    matchScore: 77,
    description: "Own reliability for globally distributed matching and ranking services. On-call rotation and deep observability.",
    tags: ["SRE", "Go", "Prometheus", "Distributed Systems"],
  },
  {
    id: "j8",
    title: "Temporary Operations Coordinator",
    company: "Forge",
    location: "Denver, CO",
    type: "Temporary",
    category: "Operations",
    rate: "$32–38/hr",
    posted: "12h ago",
    matchScore: 72,
    description: "Support high-volume placement operations for 8–12 weeks. Strong process discipline and communication required.",
    tags: ["Operations", "Coordination", "Process"],
  },
]

export const categories = ["All", "Engineering", "Design", "Infrastructure", "Recruiting", "Research", "Operations"] as const
export const types = ["All", "Contract", "Permanent", "Temporary", "Contract-to-Hire"] as const
