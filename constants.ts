import { 
  Bot, 
  Database, 
  ShieldCheck, 
  Cpu, 
  Network, 
  Terminal 
} from "lucide-react";
import { TechItem, ServiceItem, ProjectItem, NavItem } from "./types";

export const COMPANY_NAME = "Grand Neural";

export const NAV_ITEMS: NavItem[] = [
  { label: "Solutions", href: "#solutions" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

// Using JSDelivr for reliable raw SVGs which we will color using CSS masks
const ICON_BASE = "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons";

export const TECH_STACK: TechItem[] = [
  { name: "AWS Bedrock", logo: `${ICON_BASE}/amazonaws.svg`, category: "Model" },
  { name: "Terraform", logo: `${ICON_BASE}/terraform.svg`, category: "Infrastructure" },
  { name: "LangGraph", logo: `${ICON_BASE}/langchain.svg`, category: "Framework" },
  { name: "Pinecone", logo: `${ICON_BASE}/pinecone.svg`, category: "Database" },
  { name: "Docker", logo: `${ICON_BASE}/docker.svg`, category: "Infrastructure" },
  { name: "Python", logo: `${ICON_BASE}/python.svg`, category: "Framework" },
  { name: "Weaviate", logo: `${ICON_BASE}/weaviate.svg`, category: "Database" },
  { name: "Llama 3", logo: `${ICON_BASE}/meta.svg`, category: "Model" },
  { name: "CrewAI", logo: `${ICON_BASE}/robotframework.svg`, category: "Framework" }, // Proxy icon
  { name: "Mistral", logo: `${ICON_BASE}/huggingface.svg`, category: "Model" }, // Proxy icon
  { name: "Next.js", logo: `${ICON_BASE}/nextdotjs.svg`, category: "Framework" },
  { name: "AWS Lambda", logo: `${ICON_BASE}/awslambda.svg`, category: "Infrastructure" },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Multi-Agent Orchestration",
    description: "We orchestrate autonomous agents using LangGraph and AWS Bedrock AgentCore. By leveraging the Model Context Protocol (MCP), our agents don't just chat—they execute complex workflows, integrate with your APIs, and solve problems autonomously.",
    icon: Bot,
    techStack: ["LangGraph", "CrewAI", "MCP", "AWS Bedrock"],
    gridArea: "col-span-12 md:col-span-8 lg:col-span-8",
  },
  {
    title: "Enterprise RAG Pipelines",
    description: "Stop hallucinations. We build advanced retrieval pipelines with hybrid search and re-ranking using vector databases like Pinecone and Weaviate. Your data, indexed securely, delivering pinpoint accuracy.",
    icon: Database,
    techStack: ["Pinecone", "Weaviate", "Python"],
    gridArea: "col-span-12 md:col-span-4 lg:col-span-4",
  },
  {
    title: "Production Infrastructure",
    description: "No fragile notebooks. We deploy strictly using Terraform (IaC) and Docker containers on AWS Serverless (Lambda). We build scalable systems designed for high-concurrency production environments.",
    icon: Network,
    techStack: ["Terraform", "AWS Lambda", "Docker"],
    gridArea: "col-span-12 md:col-span-4 lg:col-span-4",
  },
  {
    title: "Secure Fine-Tuning",
    description: "Adapt open-source models (Llama 3, Mistral) to your specific domain using QLoRA and PEFT. Reduce inference costs while maintaining strict data sovereignty.",
    icon: Cpu,
    techStack: ["Llama 3", "Mistral", "Python"],
    gridArea: "col-span-12 md:col-span-8 lg:col-span-8",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "FinGuard",
    subtitle: "SaaS Financial Planner",
    description: "A multi-agent system capable of autonomous financial forecasting. Built on Aurora Serverless for infinite scaling.",
    tags: ["Multi-Agent Systems", "Aurora Serverless", "Python"],
    gradient: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "MedConnect",
    subtitle: "HIPAA-Compliant Healthcare App",
    description: "Patient triage system with secure auth (Clerk) and PII redaction pipelines. Zero-trust architecture from day one.",
    tags: ["Next.js", "Secure Auth", "HIPAA Ready"],
    gradient: "from-emerald-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "SecOps Sentinel",
    subtitle: "Cybersecurity Analyst Agent",
    description: "An autonomous agent utilizing MCP to interface with log streams and detect anomalies in real-time.",
    tags: ["MCP", "Log Analysis", "Cybersecurity"],
    gradient: "from-purple-500 to-indigo-500",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=1000",
  },
];

export const HERO_COPY = {
  headlineStart: "Deploy Autonomous AI Workforces on ",
  headlineEnd: "Your Own Infrastructure.",
  subhead: "We are production-grade AI architects. We build secure, scalable, and code-first AI systems using LangGraph, Terraform, and custom fine-tuning. No wrappers, just engineering.",
};