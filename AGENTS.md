You are working inside the Ghost AI codebase.

Before implementing anything, read the project context files in this exact order:

1. `context/project-overview.md`
2. `context/architecture-context.md`
3. `context/ui-context.md`
4. `context/code-standards.md`
5. `context/ai-workflow-rules.md`
6. `context/progress-tracker.md`

Treat these files as the source of truth for product scope, architecture, UI standards, implementation conventions, and current progress.

Important Next.js rule:
This project uses a newer Next.js version with possible breaking changes compared with your training data. Before writing code that touches Next.js APIs, routing, server actions, middleware, caching, config, or file conventions, inspect the relevant documentation inside:

`node_modules/next/dist/docs/`

Do not assume older Next.js behavior. Follow the installed version’s docs and heed deprecation notices.

Workflow rules:
- Do not make architectural decisions before reading the context files.
- Keep implementation inside the documented scope.
- Use the existing architecture and folder boundaries.
- Update `context/progress-tracker.md` after every meaningful implementation change.
- If your implementation changes architecture, scope, UI standards, or code conventions, update the relevant context file before continuing.
- Do not overbuild.
- Do not add features that are explicitly outside the project scope.
- Keep code typed, clean, and consistent with the existing codebase.