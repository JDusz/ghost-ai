import { SignIn } from "@clerk/nextjs";
import { Sparkles, Share2, FileText } from "lucide-react";

const FEATURES = [
  {
    icon: Sparkles,
    title: "AI Architecture Generation",
    description: "Describe your system, AI maps it to nodes and edges on a live canvas.",
  },
  {
    icon: Share2,
    title: "Real-time Collaboration",
    description: "Live cursors, presence indicators, and shared node editing across your team.",
  },
  {
    icon: FileText,
    title: "Instant Spec Generation",
    description: "Export a complete Markdown technical spec directly from the canvas graph.",
  },
];

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-base flex">
      <aside className="hidden lg:flex flex-col justify-between px-16 py-12 w-[640px] shrink-0 bg-surface border-r border-border-default">
        <span className="text-accent-primary font-semibold text-lg tracking-tight">
          Ghost AI
        </span>

        <div className="max-w-md">
          <h1 className="text-4xl font-bold text-text-primary leading-tight">
            Design systems at the speed of thought.
          </h1>
          <p className="mt-4 text-text-secondary text-base leading-relaxed">
            Describe your architecture in plain English. Ghost AI maps it to a
            shared canvas your whole team can refine in real time.
          </p>

          <ul className="mt-10 space-y-6">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-primary-dim text-accent-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-medium text-text-primary">{title}</p>
                  <p className="mt-1 text-sm text-text-muted leading-relaxed">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs text-text-faint">
          © 2026 Ghost AI. All rights reserved.
        </p>
      </aside>

      <div className="flex flex-1 items-center justify-center px-6 py-12">
        <SignIn />
      </div>
    </div>
  );
}
