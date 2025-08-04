import CardList from "@/app/_components/CardList";
import { SearchingProvider } from "./_components/SearchingContext";
import SearchBar from "./_components/SearchBar";
import { Suspense } from "react";
import Loading from "./loading";
import BackToTopButton from "./_components/BackToTopButton";
import AddNewNoteButton from "./_components/AddNewNoteButton";
let cards = [
  {
    id: 1,
    color: "cyan",
    icon: "🚀",
    title: "Launch Project Titan",
    aiSummarize: "Key milestones and launch strategy for Project Titan.",
    pinned: true,
    note: "Final pre-launch checklist needs to be reviewed by the team. Marketing materials are approved and ready for distribution Final pre-launch checklist needs to be reviewed by the team. Marketing materials are approved and ready for distribution Final pre-launch checklist needs to be reviewed by the team. Marketing materials are approved and ready for distribution.",
  },
  {
    id: 2,
    color: "emerald",
    icon: "💡",
    title: "Q4 Brainstorming Session",
    aiSummarize:
      "A collection of innovative ideas for the upcoming quarter's features.",
    pinned: false,
    note: "Focus on user engagement and retention. We should explore gamification concepts and loyalty programs.",
  },
  {
    id: 3,
    color: "indigo",
    icon: "📈",
    title: "Analyze User Growth Metrics",
    aiSummarize:
      "Analysis of user acquisition and retention rates for November.",
    pinned: true,
    note: "Significant growth from the new marketing campaign. Need to analyze the cohort data to understand long-term value.",
  },
  {
    id: 4,
    color: "emerald",
    icon: "🛠️",
    title: "Develop API Integration",
    aiSummarize:
      "A list of technical tasks for integrating the new third-party payment API.",
    pinned: false,
    note: "Authentication and data mapping are the first priorities. Documentation has been shared in the engineering Slack channel.",
  },
  {
    id: 5,
    color: "cyan",
    icon: "🎨",
    title: "Review UI Redesign Mockups",
    aiSummarize:
      "Draft mockups and design concepts for the application's user interface refresh.",
    pinned: false,
    note: "Received feedback from the design review. Need to create high-fidelity prototypes for user testing next week.",
  },
  {
    id: 6,
    color: "indigo",
    icon: "💬",
    title: "Customer Feedback Synthesis",
    aiSummarize:
      "Summary of common themes and issues from recent customer support tickets.",
    pinned: true,
    note: "Recurring request for a dark mode feature and improved search functionality. This should be prioritized.",
  },
  {
    id: 7,
    color: "cyan",
    icon: "📅",
    title: "Plan Content Calendar",
    aiSummarize:
      "Scheduling blog posts, social media updates, and newsletters for January.",
    pinned: false,
    note: "Theme for the month is 'New Year, New Productivity'. Align all content around this central theme.",
  },
  {
    id: 8,
    color: "emerald",
    icon: "📄",
    title: "Draft Q1 Engineering Roadmap",
    aiSummarize:
      "Outline of major engineering initiatives and resource allocation for the first quarter.",
    pinned: false,
    note: "Includes technical debt repayment, core feature improvements, and one major new initiative.",
  },
  {
    id: 9,
    color: "indigo",
    icon: "🔒",
    title: "Security Audit Action Items",
    aiSummarize:
      "List of vulnerabilities and required patches from the latest security scan.",
    pinned: true,
    note: "Critical patch required for the authentication service. All engineers to be briefed on new security protocols.",
  },
  {
    id: 10,
    color: "emerald",
    icon: "🔗",
    title: "Refactor Authentication Flow",
    aiSummarize:
      "Technical plan to refactor the legacy user login and registration service.",
    pinned: false,
    note: "Aim to improve performance and security. Will require a phased rollout to avoid disruption.",
  },
  {
    id: 11,
    color: "cyan",
    icon: "📊",
    title: "Marketing Campaign ROI Analysis",
    aiSummarize:
      "Analyzing the return on investment for the 'Summer Sale' campaign.",
    pinned: false,
    note: "Email marketing channel showed the highest conversion rate. Social media ads were less effective than projected.",
  },
  {
    id: 12,
    color: "indigo",
    icon: "⚙️",
    title: "Optimize Database Queries",
    aiSummarize:
      "Identifying and improving slow-performing queries in the main application database.",
    pinned: false,
    note: "The user dashboard loading time is heavily impacted by three specific queries. Indexing tables is the first step.",
  },
  {
    id: 13,
    color: "emerald",
    icon: "🧑‍💻",
    title: "Onboarding Plan for New Devs",
    aiSummarize:
      "A structured 30-day plan for getting new software developers up to speed.",
    pinned: false,
    note: "Includes setting up the development environment, initial 'good first issues', and pairing sessions with senior devs.",
  },
  {
    id: 14,
    color: "cyan",
    icon: "🛒",
    title: "E-commerce Checkout Flow Bugs",
    aiSummarize:
      "A list of reported bugs and issues within the current e-commerce checkout process.",
    pinned: true,
    note: "Users on mobile are reporting issues with the address selection step. This is a high-priority fix.",
  },
  {
    id: 15,
    color: "indigo",
    icon: "📣",
    title: "Prepare for All-Hands Meeting",
    aiSummarize:
      "Agenda and presentation slides for the upcoming company-wide all-hands meeting.",
    pinned: false,
    note: "Each department head needs to submit their key updates by EOD Wednesday. Focus on celebrating recent wins.",
  },
  {
    id: 16,
    color: "cyan",
    icon: "🧠",
    title: "Competitor Research: Feature Gap",
    aiSummarize:
      "Identifying features our main competitors have that we currently lack.",
    pinned: false,
    note: "Competitor 'X' launched a collaborative feature that is getting positive reviews. We need to assess its impact.",
  },
  {
    id: 17,
    color: "emerald",
    icon: "📝",
    title: "Update Terms of Service",
    aiSummarize:
      "Revising the ToS and Privacy Policy to reflect new data regulations.",
    pinned: false,
    note: "Legal team has provided the new language. Needs to be implemented on the website and users notified.",
  },
  {
    id: 18,
    color: "indigo",
    icon: "✅",
    title: "Q3 Performance Reviews",
    aiSummarize:
      "Scheduling and preparation for the third-quarter employee performance reviews.",
    pinned: false,
    note: "Managers need to complete their review drafts in the HR portal by the 15th of the month.",
  },
  {
    id: 19,
    color: "emerald",
    icon: "🚀",
    title: "Project Nebula Scoping",
    aiSummarize:
      "Defining the scope and deliverables for the new internal tool, Project Nebula.",
    pinned: false,
    note: "Initial meetings with stakeholders have been completed. Now drafting the project requirements document (PRD).",
  },
  {
    id: 20,
    color: "cyan",
    icon: "📈",
    title: "A/B Test Results for Homepage",
    aiSummarize:
      "Analysis of the A/B test on the new homepage headline and call-to-action button.",
    pinned: true,
    note: "Variant B showed a 15% increase in sign-ups. We should roll this out to 100% of traffic.",
  },
  {
    id: 21,
    color: "indigo",
    icon: "💡",
    title: "Ideas for Annual Hackathon",
    aiSummarize:
      "A running list of potential project ideas for the company's annual hackathon event.",
    pinned: false,
    note: "Encourage cross-functional teams. Potential themes include AI-powered tools and sustainability.",
  },
  {
    id: 22,
    color: "cyan",
    icon: "🛠️",
    title: "CI/CD Pipeline Improvements",
    aiSummarize:
      "Tasks related to speeding up the build and deployment times for the main application.",
    pinned: false,
    note: "Investigating parallelizing test suites and optimizing the Docker image build process.",
  },
  {
    id: 23,
    color: "emerald",
    icon: "🎨",
    title: "Create New Brand Style Guide",
    aiSummarize:
      "Developing a comprehensive style guide for the company's refreshed branding.",
    pinned: false,
    note: "Will include logo usage, color palette, typography, and tone of voice guidelines.",
  },
  {
    id: 24,
    color: "indigo",
    icon: "📄",
    title: "Document Internal APIs",
    aiSummarize:
      "A project to create and update documentation for all internal microservices.",
    pinned: false,
    note: "Using Swagger/OpenAPI to automate documentation generation where possible. Crucial for new hire onboarding.",
  },
  {
    id: 25,
    color: "emerald",
    icon: "💬",
    title: "Social Media Engagement Strategy",
    aiSummarize:
      "Plan to increase user interaction and followers on key social media platforms.",
    pinned: false,
    note: "Focus on video content for TikTok and Instagram, and thought leadership articles for LinkedIn.",
  },
  {
    id: 26,
    color: "cyan",
    icon: "🔒",
    title: "Implement Two-Factor Auth",
    aiSummarize: "Plan and execute the rollout of 2FA for all user accounts.",
    pinned: true,
    note: "Starting with an optional beta for users before making it mandatory. Need to support both SMS and authenticator apps.",
  },
  {
    id: 27,
    color: "indigo",
    icon: "📊",
    title: "Churn Rate Investigation",
    aiSummarize:
      "Deep dive into the reasons behind the recent increase in customer churn.",
    pinned: false,
    note: "Correlate churn events with support tickets and feature usage data. Conduct exit surveys.",
  },
  {
    id: 28,
    color: "cyan",
    icon: "⚙️",
    title: "Server Infrastructure Migration",
    aiSummarize:
      "Planning the migration from on-premise servers to a cloud provider.",
    pinned: false,
    note: "Phase 1 is to migrate the staging environment. Cost analysis and provider comparison is complete.",
  },
  {
    id: 29,
    color: "emerald",
    icon: "🧑‍💻",
    title: "Frontend Tech Debt Meeting",
    aiSummarize:
      "A meeting to identify and prioritize the most critical frontend technical debt.",
    pinned: false,
    note: "Key areas of concern are the outdated state management library and inconsistent component styling.",
  },
  {
    id: 30,
    color: "indigo",
    icon: "🛒",
    title: "New Payment Gateway Research",
    aiSummarize:
      "Evaluating alternative payment gateways to reduce transaction fees.",
    pinned: false,
    note: "Comparing Stripe, Adyen, and Braintree based on fees, international support, and ease of integration.",
  },
  {
    id: 31,
    color: "emerald",
    icon: "🚀",
    title: "Mobile App Beta Launch",
    aiSummarize:
      "Coordinating the beta launch of the new iOS and Android applications.",
    pinned: true,
    note: "Invite list has been finalized. Need to set up TestFlight and Google Play Console for beta distribution.",
  },
  {
    id: 32,
    color: "indigo",
    icon: "📈",
    title: "SEO Keyword Performance",
    aiSummarize:
      "Monthly review of our search engine ranking for target keywords.",
    pinned: false,
    note: "Ranking has improved for 'enterprise solutions' but dropped for 'small business tools'. Need to adjust content.",
  },
  {
    id: 33,
    color: "cyan",
    icon: "💡",
    title: "AI-Powered Feature Ideas",
    aiSummarize:
      "Brainstorming ways to incorporate artificial intelligence into the product.",
    pinned: false,
    note: "Ideas include AI-generated summaries, intelligent search, and predictive analytics for users.",
  },
  {
    id: 34,
    color: "indigo",
    icon: "🛠️",
    title: "Fix for Memory Leak Issue",
    aiSummarize:
      "Investigating and resolving a memory leak in the data processing service.",
    pinned: true,
    note: "The issue appears to be related to how database connections are pooled. High priority.",
  },
  {
    id: 35,
    color: "emerald",
    icon: "🎨",
    title: "User Persona Updates",
    aiSummarize:
      "Refreshing our user personas based on recent market research and user interviews.",
    pinned: false,
    note: "The 'startup founder' persona needs to be updated to reflect new challenges in the current market.",
  },
  {
    id: 36,
    color: "cyan",
    icon: "📄",
    title: "Investor Update Deck",
    aiSummarize:
      "Preparing the quarterly update presentation for the board and key investors.",
    pinned: false,
    note: "Highlight key metrics: user growth, revenue, and major product milestones achieved this quarter.",
  },
  {
    id: 37,
    color: "indigo",
    icon: "📅",
    title: "Plan Team Offsite Event",
    aiSummarize:
      "Organizing the logistics for the annual engineering team offsite.",
    pinned: false,
    note: "Gathering suggestions for locations and activities. The goal is a mix of workshopping and team bonding.",
  },
  {
    id: 38,
    color: "emerald",
    icon: "💬",
    title: "User Interview Questions",
    aiSummarize:
      "Drafting questions for upcoming user interviews about a potential new feature.",
    pinned: false,
    note: "Focus on understanding the core problem and user workflow, not just asking if they want the feature.",
  },
  {
    id: 39,
    color: "cyan",
    icon: "🔗",
    title: "Dependency Audit and Update",
    aiSummarize:
      "Reviewing all third-party libraries and dependencies for security vulnerabilities.",
    pinned: false,
    note: "Several packages have new major versions available. Need to test for breaking changes before upgrading.",
  },
  {
    id: 40,
    color: "indigo",
    icon: "📣",
    title: "Press Release Draft",
    aiSummarize:
      "Writing the press release for the upcoming major product launch.",
    pinned: false,
    note: "Circulate the draft to the leadership team for quotes and feedback. Embargoed until launch day.",
  },
  {
    id: 41,
    color: "cyan",
    icon: "📊",
    title: "Dashboard Usability Testing",
    aiSummarize:
      "Plan and conduct usability tests on the new analytics dashboard design.",
    pinned: false,
    note: "Recruiting 5-7 existing users to perform a set of tasks and provide feedback on the new interface.",
  },
  {
    id: 42,
    color: "emerald",
    icon: "⚙️",
    title: "System Downtime Post-Mortem",
    aiSummarize:
      "Analysis of the cause of last week's system outage and plan for prevention.",
    pinned: true,
    note: "Root cause was a database configuration error. Action items include adding more alerts and updating deployment scripts.",
  },
  {
    id: 43,
    color: "indigo",
    icon: "🧑‍💻",
    title: "Code Review Guidelines",
    aiSummarize:
      "Establishing a formal set of guidelines for conducting code reviews.",
    pinned: false,
    note: "Guidelines should promote constructive feedback and ensure consistency in code quality and style.",
  },
  {
    id: 44,
    color: "emerald",
    icon: "🧠",
    title: "International Expansion Strategy",
    aiSummarize:
      "Research and planning for expanding the product into European markets.",
    pinned: false,
    note: "Initial focus on Germany and the UK. Need to investigate localization, pricing, and GDPR compliance.",
  },
  {
    id: 45,
    color: "cyan",
    icon: "📝",
    title: "Blog Post: '5 Tips for X'",
    aiSummarize:
      "Drafting a new blog post for the company website to drive organic traffic.",
    pinned: false,
    note: "Targeting the keyword 'productivity tips'. Include actionable advice and links to relevant product features.",
  },
  {
    id: 46,
    color: "indigo",
    icon: "✅",
    title: "Hiring Pipeline Review",
    aiSummarize: "Weekly review of the candidate pipeline for open roles.",
    pinned: false,
    note: "Strong pool of candidates for the Senior Frontend role, but need more applicants for the DevOps position.",
  },
  {
    id: 47,
    color: "cyan",
    icon: "🚀",
    title: "Feature Flag Cleanup",
    aiSummarize:
      "Identifying and removing old feature flags from the codebase for launched features.",
    pinned: false,
    note: "Old flags add unnecessary complexity. Create a ticket to remove any flag that has been at 100% for over a month.",
  },
  {
    id: 48,
    color: "emerald",
    icon: "📈",
    title: "Funnel Conversion Rate Analysis",
    aiSummarize:
      "Analyzing the drop-off points in the user conversion funnel from visitor to paid customer.",
    pinned: false,
    note: "Significant drop-off between the free trial sign-up and the plan selection page. Need to investigate this step.",
  },
  {
    id: 49,
    color: "indigo",
    icon: "🛠️",
    title: "Staging Environment Refresh",
    aiSummarize:
      "Plan to refresh the staging environment with production data to ensure accurate testing.",
    pinned: false,
    note: "Data must be anonymized to protect user privacy. Schedule the refresh for a low-traffic period.",
  },
  {
    id: 50,
    color: "cyan",
    icon: "🎨",
    title: "Email Template Redesign",
    aiSummarize:
      "Redesigning the transactional email templates (e.g., welcome email, password reset).",
    pinned: false,
    note: "Goal is to align them with the new brand style guide and improve mobile responsiveness.",
  },
];
// cards = [];

export default function Page() {
  return (
    <div className="bg-emerald-50 min-h-screen">
      <SearchingProvider cards={cards}>
        <SearchBar />
        <Suspense fallback={<Loading />}>
          <CardList />
        </Suspense>
      </SearchingProvider>
      <BackToTopButton />
      <AddNewNoteButton />
    </div>
  );
}
