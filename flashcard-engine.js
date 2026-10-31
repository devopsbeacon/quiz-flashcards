function applyAntiCopy() {
  // Block Right-Click Context Menu
  document.addEventListener('contextmenu', e => e.preventDefault());
  
  // Block Copy, Cut, and Selection
  document.addEventListener('copy', e => e.preventDefault());
  document.addEventListener('cut', e => e.preventDefault());
  document.addEventListener('selectstart', e => e.preventDefault());

  // Block Shortcuts (F12, Ctrl+Shift+I, Ctrl+U, Ctrl+C / Cmd+C)
  document.addEventListener('keydown', function(e) {
    if (e.keyCode === 123) { e.preventDefault(); return false; } // F12
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) { e.preventDefault(); return false; } // Inspect
    if ((e.ctrlKey || e.metaKey) && e.keyCode === 85) { e.preventDefault(); return false; } // View Source
    if ((e.ctrlKey || e.metaKey) && e.keyCode === 67) { e.preventDefault(); return false; } // Copy
  });
}
function initFlashcards() {
  applyAntiCopy();
  const container = document.getElementById('db-flashcards-root');
  if (!container) {
    setTimeout(initFlashcards, 100);
    return;
  }

  if (container.dataset.initialized) return;
  container.dataset.initialized = "true";

  const flashcardDatabase = [
  // ==========================================
  // SUBJECT 1: AI & LLM FUNDAMENTALS (1 - 14)
  // ==========================================
  {
    id: 1,
    subject: "ai-llm",
    tag: "AI Basics",
    question: "What is Artificial Intelligence (AI) at its core?",
    answer: "AI is an umbrella term for software systems that simulate human cognitive functions like reasoning, learning, and decision-making."
  },
  {
    id: 2,
    subject: "ai-llm",
    tag: "AI vs ML",
    question: "How does Machine Learning (ML) differ from traditional software?",
    answer: "Traditional code follows explicit 'if/else' rules written by humans, whereas ML learns patterns directly from data to make predictions."
  },
  {
    id: 3,
    subject: "ai-llm",
    tag: "LLM Definition",
    question: "What is a Large Language Model (LLM)?",
    answer: "An LLM is a massive neural network trained on vast amounts of text to understand, generate, and process human language using statistical probability."
  },
  {
    id: 4,
    subject: "ai-llm",
    tag: "Monk Metaphor",
    question: "In the Code Monk framework, how does an LLM generate text?",
    answer: "Like a monk reading a Sacred Scroll of pattern memory, the LLM predicts the most statistically probable next token based on context."
  },
  {
    id: 5,
    subject: "ai-llm",
    tag: "LLM Capabilities",
    question: "Are LLMs conscious digital brains?",
    answer: "No. LLMs do not 'think' or feel—they are high-speed pattern-matching engines calculating probability matrices."
  },
  {
    id: 6,
    subject: "ai-llm",
    tag: "Static Knowledge",
    question: "Why can't a raw LLM tell you today's weather or real-time news?",
    answer: "An LLM's knowledge is frozen at its training cutoff date; it lacks native real-time access to the live internet."
  },
  {
    id: 7,
    subject: "ai-llm",
    tag: "DevOps Value",
    question: "How do LLMs help DevOps engineers in daily workflows?",
    answer: "They parse unstructured logs, explain stack traces, summarize complex incident reports, and suggest code fixes."
  },
  {
    id: 8,
    subject: "ai-llm",
    tag: "Hallucination",
    question: "What is an AI Hallucination?",
    answer: "When an LLM confidently outputs plausible-sounding facts or code that are logically incorrect or entirely fabricated."
  },
  {
    id: 9,
    subject: "ai-llm",
    tag: "Determinism",
    question: "Why is standard software deterministic while LLM output is probabilistic?",
    answer: "Standard code always produces the exact same output for an input, while LLMs select outputs based on probability distributions."
  },
  {
    id: 10,
    subject: "ai-llm",
    tag: "KISS Principle",
    question: "What is the KISS Principle rule for evaluating LLM outputs?",
    answer: "Treat LLMs as hyper-fast text and pattern assistants, never as infallible sources of absolute truth."
  },
  {
    id: 11,
    subject: "ai-llm",
    tag: "Foundation Models",
    question: "What is a Foundation Model?",
    answer: "A large deep learning model trained on broad data at scale that can be adapted to a wide variety of downstream tasks."
  },
  {
    id: 12,
    subject: "ai-llm",
    tag: "Generative AI",
    question: "How is Generative AI defined relative to classic AI?",
    answer: "Generative AI specifically creates new content (text, code, images, audio) rather than just classifying or scoring existing data."
  },
  {
    id: 13,
    subject: "ai-llm",
    tag: "Log Analysis",
    question: "Why are LLMs effective at reading messy Kubernetes or CI/CD logs?",
    answer: "Their transformer pattern-matching excels at spotting semantic anomalies across long streams of unstructured text."
  },
  {
    id: 14,
    subject: "ai-llm",
    tag: "Prompting",
    question: "What is Prompt Engineering?",
    answer: "The practice of structuring text inputs effectively so an LLM produces accurate, useful, and contextually grounded answers."
  },

  // ==========================================
  // SUBJECT 2: LLM MECHANICS (15 - 28)
  // ==========================================
  {
    id: 15,
    subject: "llm-mechanics",
    tag: "Tokens",
    question: "What is a Token in Large Language Models?",
    answer: "A token is a sub-word chunk of text (~4 characters or 0.75 words) that serves as the basic unit of LLM processing."
  },
  {
    id: 16,
    subject: "llm-mechanics",
    tag: "Tokenization",
    question: "What does a Tokenizer do?",
    answer: "It converts raw text sentences into numerical token IDs that neural network matrices can process."
  },
  {
    id: 17,
    subject: "llm-mechanics",
    tag: "Weights & Parameters",
    question: "What are LLM Weights and Parameters?",
    answer: "They are the numerical strengths or 'knobs' inside neural connections learned during training that store probability rules."
  },
  {
    id: 18,
    subject: "llm-mechanics",
    tag: "70B Parameters",
    question: "What does '70 Billion Parameters' signify in an LLM?",
    answer: "It means the model's neural network contains 70 billion adjustable weight variables that shape its probability calculations."
  },
  {
    id: 19,
    subject: "llm-mechanics",
    tag: "Context Window",
    question: "What is an LLM Context Window?",
    answer: "The maximum number of tokens (prompt + output) the model can hold in its working memory at a single time."
  },
  {
    id: 20,
    subject: "llm-mechanics",
    tag: "Context Amnesia",
    question: "What happens when a prompt exceeds the model's Context Window?",
    answer: "Earlier text drops out of the active context buffer, causing the model to forget earlier parts of the conversation."
  },
  {
    id: 21,
    subject: "llm-mechanics",
    tag: "API Costs",
    question: "How are LLM API fees calculated by cloud providers?",
    answer: "Based on the total number of input tokens sent in the prompt plus output tokens generated by the model."
  },
  {
    id: 22,
    subject: "llm-mechanics",
    tag: "Transformer Architecture",
    question: "What key innovation allows Transformers to process text so fast?",
    answer: "Self-attention mechanisms that process all tokens simultaneously in parallel, rather than sequentially word-by-word."
  },
  {
    id: 23,
    subject: "llm-mechanics",
    tag: "Self-Attention",
    question: "What does the Self-Attention mechanism do?",
    answer: "It calculates mathematical relevance scores between every token in a prompt to capture context and relationships."
  },
  {
    id: 24,
    subject: "llm-mechanics",
    tag: "Temperature",
    question: "What does the 'Temperature' parameter control in LLMs?",
    answer: "Lower temperature (0.0) produces deterministic, conservative outputs; higher temperature (>0.7) increases randomness."
  },
  {
    id: 25,
    subject: "llm-mechanics",
    tag: "System Prompt",
    question: "What is a System Prompt?",
    answer: "A foundational set of top-level instructions that define the model's persona, rules, capabilities, and safety guardrails."
  },
  {
    id: 26,
    subject: "llm-mechanics",
    tag: "KV Cache",
    question: "What is Key-Value (KV) Caching in LLM inference?",
    answer: "Storing previously computed token attention states in memory to avoid recalculating the entire prompt on every new token."
  },
  {
    id: 27,
    subject: "llm-mechanics",
    tag: "Token Economics",
    question: "Why do long log dumps dramatically increase LLM API bills?",
    answer: "Verbose logs consume tens of thousands of input tokens per request, inflating token consumption costs exponentially."
  },
  {
    id: 28,
    subject: "llm-mechanics",
    tag: "Context Limits",
    question: "How do modern agents manage long sessions within limited context windows?",
    answer: "Through memory compaction, tool-result clearing, and summarization loops."
  },

  // ==========================================
  // SUBJECT 3: MODEL CONTEXT PROTOCOL (29 - 41)
  // ==========================================
  {
    id: 29,
    subject: "mcp",
    tag: "MCP Definition",
    question: "What is the Model Context Protocol (MCP)?",
    answer: "MCP is an open standard that connects AI applications to external tools, databases, and APIs like a universal 'USB-C port for AI'."
  },
  {
    id: 30,
    subject: "mcp",
    tag: "N x M Problem",
    question: "What is the N x M Integration Problem that MCP solves?",
    answer: "Connecting N AI clients to M data sources required N x M custom connectors. MCP simplifies this to N + M standard connections."
  },
  {
    id: 31,
    subject: "mcp",
    tag: "MCP Host",
    question: "What is an MCP Host?",
    answer: "The primary AI application environment where the user interacts, such as Claude Desktop, Cursor IDE, or VS Code."
  },
  {
    id: 32,
    subject: "mcp",
    tag: "MCP Client",
    question: "What role does the MCP Client play?",
    answer: "It lives inside the MCP Host and translates the LLM's requests into standardized JSON-RPC protocol messages."
  },
  {
    id: 33,
    subject: "mcp",
    tag: "MCP Server",
    question: "What is an MCP Server?",
    answer: "A lightweight service wrapper that exposes specific external data sources, executable tools, or prompt templates to AI clients."
  },
  {
    id: 34,
    subject: "mcp",
    tag: "Transport Methods",
    question: "What are the two standard Transport Methods in MCP?",
    answer: "Standard Input/Output (stdio) for local tools, and Server-Sent Events (SSE) / HTTP for remote cloud services."
  },
  {
    id: 35,
    subject: "mcp",
    tag: "Communication",
    question: "Which messaging protocol does MCP use under the hood?",
    answer: "JSON-RPC 2.0 messages for stateful, bidirectional communication between host and server."
  },
  {
    id: 36,
    subject: "mcp",
    tag: "Primitives",
    question: "What are the three core capability primitives exposed by an MCP Server?",
    answer: "1. Resources (read-only data/files), 2. Tools (executable actions), and 3. Prompts (pre-built prompt templates)."
  },
  {
    id: 37,
    subject: "mcp",
    tag: "MCP vs RAG",
    question: "How does MCP differ from Retrieval-Augmented Generation (RAG)?",
    answer: "RAG passively retrieves static indexed documents for text generation; MCP actively executes two-way tool actions and live queries."
  },
  {
    id: 38,
    subject: "mcp",
    tag: "MCP vs APIs",
    question: "How does MCP differ from traditional REST APIs?",
    answer: "APIs require hardcoded endpoints; MCP exposes a machine-readable capability surface that AI discovers dynamically at runtime."
  },
  {
    id: 39,
    subject: "mcp",
    tag: "Security",
    question: "What is the primary security requirement for MCP tool execution?",
    answer: "Explicit user consent, scoped permissions, TLS encryption, and human-in-the-loop confirmation for sensitive write actions."
  },
  {
    id: 40,
    subject: "mcp",
    tag: "DevOps Value",
    question: "How does MCP transform a DevOps engineer's workflow?",
    answer: "An LLM can directly query live Postgres DBs, inspect CloudWatch logs, and push alerts to Slack through unified MCP servers."
  },
  {
    id: 41,
    subject: "mcp",
    tag: "Vendor Lock-In",
    question: "Why does MCP prevent vendor lock-in for enterprise AI?",
    answer: "Tool developers write an MCP server once, making it instantly compatible with any AI client or model supporting the standard."
  },

  // ==========================================
  // SUBJECT 4: AGENTIC AI & REACT LOOPS (42 - 54)
  // ==========================================
  {
    id: 42,
    subject: "agentic-ai",
    tag: "Agent Definition",
    question: "What is the core practitioner test for whether a system is an AI Agent?",
    answer: "If there is no loop, it's not an agent. Real agents execute autonomous Observe -> Plan -> Act -> Reflect decision loops."
  },
  {
    id: 43,
    subject: "agentic-ai",
    tag: "Chatbot vs Agent",
    question: "How does an AI Agent differ from a traditional Chatbot?",
    answer: "Chatbots give single-turn passive text advice; Agents actively break down goals, call tools, inspect results, and complete tasks."
  },
  {
    id: 44,
    subject: "agentic-ai",
    tag: "ReAct Pattern",
    question: "What is the ReAct (Reasoning + Acting) pattern?",
    answer: "An agentic loop alternating between Thought (reasoning), Action (calling a tool), and Observation (evaluating tool output)."
  },
  {
    id: 45,
    subject: "agentic-ai",
    tag: "Reflection Pattern",
    question: "How does the Reflection design pattern work?",
    answer: "An agent generates an output, critiques its own draft against rules or test outputs, and iteratively rewrites it before finalizing."
  },
  {
    id: 46,
    subject: "agentic-ai",
    tag: "Plan & Execute",
    question: "What is the Plan-and-Execute agent architecture?",
    answer: "A pattern where a Planner LLM generates a multi-step task graph upfront, and Executor workers run the steps without re-planning every turn."
  },
  {
    id: 47,
    subject: "agentic-ai",
    tag: "Orchestrator-Worker",
    question: "What is the Orchestrator-Worker multi-agent pattern?",
    answer: "A central Lead Agent receives a goal, delegates sub-tasks dynamically to specialized sub-agents, and synthesizes their results."
  },
  {
    id: 48,
    subject: "agentic-ai",
    tag: "4 Core Modules",
    question: "What are the 4 fundamental building blocks of an AI Agent?",
    answer: "1. Planning module, 2. Memory systems (short/long-term), 3. Tool-calling interface, and 4. Reflection/Reasoning loops."
  },
  {
    id: 49,
    subject: "agentic-ai",
    tag: "Agent Safety",
    question: "How do you prevent an AI Agent from getting stuck in an infinite loop?",
    answer: "Enforce explicit maximum iteration bounds, execution timeout thresholds, and human-in-the-loop escalation gates."
  },
  {
    id: 50,
    subject: "agentic-ai",
    tag: "CRITIC Pattern",
    question: "How does the CRITIC reflection variant prevent hallucinated feedback?",
    answer: "It grounds its critiques using deterministic external tools (linters, unit tests, compilers) rather than model self-judgment."
  },
  {
    id: 51,
    subject: "agentic-ai",
    tag: "Hierarchical Agents",
    question: "When is a Hierarchical Multi-Agent architecture necessary?",
    answer: "When domain complexity is too large for one orchestrator, requiring a tree of strategic, supervisory, and worker agent layers."
  },
  {
    id: 52,
    subject: "agentic-ai",
    tag: "Agent Memory",
    question: "What is the difference between Short-Term and Long-Term Agent Memory?",
    answer: "Short-term memory holds the current session's tool outputs; long-term memory persists facts across sessions via vector databases."
  },
  {
    id: 53,
    subject: "agentic-ai",
    tag: "Semantic Cache",
    question: "How does Semantic Caching optimize agentic AI operational costs?",
    answer: "It caches previous tool/agent responses based on query intent meaning, preventing redundant LLM re-computations."
  },
  {
    id: 54,
    subject: "agentic-ai",
    tag: "Human in the Loop",
    question: "Why is Human-in-the-Loop (HITL) considered a first-class agent pattern?",
    answer: "Because high-risk actions (deploying code, financial trades, deleting DBs) require human authorization before execution."
  },
{
    "id": 55,
    "subject": "docker-fundamentals",
    "tag": "Philosophy & Mindset",
    "question": "What does the Indian Monk mindset represent in Docker container architecture?",
    "answer": "It represents treating containers as clean, ephemeral, stateless micro-environments that hold no attachment to host resources and leave zero residual footprint when destroyed."
  },
{
    "id": 56,
    "subject": "docker-fundamentals",
    "tag": "Philosophy & Mindset",
    "question": "How does the KISS Principle apply to Docker design?",
    "answer": "It emphasizes keeping Dockerfiles, Compose files, and CLI workflows minimal and readable, focusing on the core 20% of commands that deliver 80% of production value without over-engineering."
  },
  {
    "id": 57,
    "subject": "docker-fundamentals",
    "tag": "Philosophy & Mindset",
    "question": "How does Nudge Theory shape container developer habits?",
    "answer": "It uses smart default configurations—such as non-root users, .dockerignore templates, and explicit memory limits—to guide developers toward secure, self-correcting habits naturally."
  },
  {
    "id": 58,
    "subject": "docker-fundamentals",
    "tag": "Container Foundations",
    "question": "What is the primary architectural difference between a Virtual Machine and a Container?",
    "answer": "A Virtual Machine packages a full guest OS, hypervisor, and virtual hardware, whereas a container shares the host Linux kernel and isolates only the application process and its dependencies."
  },
  {
    "id": 59,
    "subject": "docker-fundamentals",
    "tag": "Container Foundations",
    "question": "What occurs when you run a container with the --rm flag?",
    "answer": "The container and its temporary writable layer are automatically deleted immediately upon exit, preventing disk space bloat on the host machine."
  },
  {
    "id": 60,
    "subject": "docker-fundamentals",
    "tag": "Real-World Scenarios",
    "question": "How should ephemeral containers be used for testing payment gateways in fintech?",
    "answer": "By launching isolated mock server containers with '--rm' to run test API requests and self-destruct immediately, ensuring no sensitive tokens or mock data persist on local disks."
  },
  {
    "id": 61,
    "subject": "docker-fundamentals",
    "tag": "Real-World Scenarios",
    "question": "How do resource limit flags (--memory and --cpus) protect e-commerce platforms during high-traffic sales?",
    "answer": "They set hard boundary limits on container RAM and CPU consumption, preventing a bug or memory leak in a single microservice from crashing the entire host server."
  },
  {
    "id": 62,
    "subject": "docker-fundamentals",
    "tag": "Real-World Scenarios",
    "question": "Why is a tmpfs mount used when processing sensitive Healthcare/PHI data in containers?",
    "answer": "Mounting a tmpfs volume stores sensitive files purely inside volatile host RAM, ensuring patient data completely vanishes at the hardware level when the container stops."
  },
  {
    "id": 63,
    "subject": "docker-fundamentals",
    "tag": "Multi-Stage Builds",
    "question": "Why are multi-stage Dockerfiles essential for compiled languages like Java?",
    "answer": "They separate the heavy compilation stage (JDK, Maven/Gradle, source code) from the runtime stage (JRE), dramatically reducing final image sizes from ~850MB to ~150MB."
  },
  {
    "id": 64,
    "subject": "docker-fundamentals",
    "tag": "Multi-Stage Builds",
    "question": "Why should 'COPY pom.xml .' be placed before 'COPY src ./src' in a Dockerfile?",
    "answer": "It maximizes Docker layer caching by downloading Maven dependencies first, preventing unnecessary re-downloads on every build unless pom.xml changes."
  },
  {
    "id": 65,
    "subject": "docker-fundamentals",
    "tag": "Multi-Stage Builds",
    "question": "What is the syntax for copying compiled artifacts from a previous build stage?",
    "answer": "COPY --from=<stage_name> /path/in/builder /path/in/runner (for example: COPY --from=builder /app/target/app.jar app.jar)."
  },
  {
    "id": 66,
    "subject": "docker-fundamentals",
    "tag": "Storage & Persistence",
    "question": "What is the difference between an Image, a Container, and a Volume?",
    "answer": "An Image is a read-only blueprint; a Container is a running instance with a thin writable layer; a Volume is an independent directory on the host managed by Docker for persistent data."
  },
  {
    "id": 67,
    "subject": "docker-fundamentals",
    "tag": "Storage & Persistence",
    "question": "How do named Docker Volumes preserve data across container recreations?",
    "answer": "Volumes exist outside the container filesystem lifecycle, allowing new containers to mount the exact same volume directory and access existing files seamlessly."
  },
  {
    "id": 68,
    "subject": "docker-fundamentals",
    "tag": "Container Networking",
    "question": "Why does connecting containers via 'localhost' fail in multi-container setups?",
    "answer": "Each container runs inside its own isolated network namespace, so 'localhost' inside a container refers strictly to itself, not to host or neighboring containers."
  },
  {
    "id": 69,
    "subject": "docker-fundamentals",
    "tag": "Container Networking",
    "question": "How do custom Docker bridge networks enable inter-container communication?",
    "answer": "Bridge networks provide automatic internal DNS resolution, allowing containers connected to the same network to discover and talk to each other using their container names."
  },
  {
    "id": 70,
    "subject": "docker-fundamentals",
    "tag": "Docker Compose",
    "question": "What is the primary advantage of Docker Compose over standalone docker run commands?",
    "answer": "Docker Compose allows developers to define and launch the entire multi-container architecture (services, networks, volumes, environment vars) declaratively using a single YAML file."
  },
  {
    "id": 71,
    "subject": "docker-fundamentals",
    "tag": "Docker Compose",
    "question": "How do healthchecks and 'depends_on' conditions collaborate in docker-compose.yml?",
    "answer": "Using 'depends_on: <service>: condition: service_healthy' ensures an application container waits to launch until its database container passes its healthcheck (e.g., pg_isready)."
  },
  {
    "id": 72,
    "subject": "docker-fundamentals",
    "tag": "Docker Compose",
    "question": "What is the recommended practice for managing environment configuration in Docker Compose?",
    "answer": "Reference environment variables inside docker-compose.yml from an uncommitted local .env file, while committing a template .env.example file to version control for documentation."
  },
  {
    "id": 73,
    "subject": "docker-fundamentals",
    "tag": "Docker Compose",
    "question": "What does the 'restart: unless-stopped' policy achieve in production Compose stacks?",
    "answer": "It creates a self-healing service that automatically restarts the container if it crashes or if the host daemon reboots, unless manually stopped by an administrator."
  },
  {
    "id": 74,
    "subject": "docker-fundamentals",
    "tag": "Branching & Tagging",
    "question": "What is the fundamental rule of container image tagging in production registries?",
    "answer": "Container images must be immutable; existing release tags should never be overwritten. Any code update requires incrementing the version tag or appending a new Git commit SHA."
  },
  {
    "id": 75,
    "subject": "docker-fundamentals",
    "tag": "Branching & Tagging",
    "question": "How does Trunk-Based Development work with Docker container lifecycles?",
    "answer": "Every Pull Request triggers an automated build tagged with the PR ID (e.g., :pr-142) for ephemeral preview testing, which is destroyed automatically when the PR merges into main."
  },
  {
    "id": 76,
    "subject": "docker-fundamentals",
    "tag": "Branching & Tagging",
    "question": "What characterizes Feature Branching for staging environments in Docker workflows?",
    "answer": "Pushing to a feature branch builds an image tagged with the feature name (e.g., :feature-payment-v2) deployed to a shared staging environment for manual QA and review."
  },
  {
    "id": 77,
    "subject": "docker-fundamentals",
    "tag": "Branching & Tagging",
    "question": "How does GitFlow structure image tagging for compliance-audited releases?",
    "answer": "Development builds use integration tags (:dev-latest), release candidates use versioned candidate tags (:v2.0.0-rc1), and final merges use immutable Semantic Versioning (:v2.0.0)."
  },
  {
    "id": 78,
    "subject": "docker-fundamentals",
    "tag": "Branching & Tagging",
    "question": "Why should the mutable ':latest' tag be avoided in production deployments?",
    "answer": "Using ':latest' creates ambiguity regarding which exact code commit is running, breaks auditability, and prevents instantaneous rollbacks to prior known-good images."
  },
  {
    "id": 79,
    "subject": "docker-fundamentals",
    "tag": "Diagnostics & Troubleshooting",
    "question": "What are the four steps of the Zen Diagnostic Routine in order?",
    "answer": "1. docker logs (listen to stdout/stderr), 2. docker inspect (examine exit code/config), 3. docker exec -it (step inside environment), 4. docker stats (observe real-time RAM/CPU)."
  },
  {
    "id": 80,
    "subject": "docker-fundamentals",
    "tag": "Diagnostics & Troubleshooting",
    "question": "What does Exit Code 137 indicate, and what is its root cause in Java containers?",
    "answer": "Exit Code 137 is an OOMKilled signal. Legacy JVMs read total host physical RAM rather than container memory limits, causing garbage collection delays until the kernel kills the process."
  },
  {
    "id": 81,
    "subject": "docker-fundamentals",
    "tag": "Diagnostics & Troubleshooting",
    "question": "How do you fix Java JVM memory starvation (Exit Code 137) inside Docker containers?",
    "answer": "Set '-XX:+UseContainerSupport -XX:MaxRAMPercentage=75.0' in JAVA_OPTS, ensuring the JVM heap caps at 75% of allocated container RAM, leaving room for native JVM memory."
  },
  {
    "id": 82,
    "subject": "docker-fundamentals",
    "tag": "Diagnostics & Troubleshooting",
    "question": "What causes a 'bind: address already in use' error during container startup?",
    "answer": "Another process or container on the host machine is already listening on the requested host port. The solution is to remap the host port (e.g., -p 8081:8080)."
  },
  {
    "id": 83,
    "subject": "docker-fundamentals",
    "tag": "Diagnostics & Troubleshooting",
    "question": "Why does a container exit immediately with Exit Code 0 if its entrypoint command ends with '&'?",
    "answer": "Docker containers only stay alive as long as their primary PID 1 foreground process runs. Running a script in the background causes PID 1 to exit, prompting Docker to stop the container."
  },
  {
    "id": 84,
    "subject": "docker-fundamentals",
    "tag": "CI/CD & Security",
    "question": "What is the purpose of a .dockerignore file?",
    "answer": "It excludes unwanted files (.git history, local secrets, temporary IDE files, build targets) from the Docker build context, accelerating build times and preventing credential leaks."
  },
  {
    "id": 85,
    "subject": "docker-fundamentals",
    "tag": "CI/CD & Security",
    "question": "Why is running containers as a non-root system user (USER appuser) a critical security practice?",
    "answer": "It drops superuser privileges inside the container, mitigating the risk of privilege escalation or host system compromise in the event of an application exploit."
  },
  {
    "id": 86,
    "subject": "docker-fundamentals",
    "tag": "CI/CD & Security",
    "question": "How does automated GitHub Actions CI/CD streamline container delivery?",
    "answer": "It automatically checks out code, authenticates with container registries (e.g., GHCR), builds multi-stage images, and publishes immutable tagged images upon every Git push."
  },
  {
    "id": 87,
    "subject": "docker-fundamentals",
    "tag": "CI/CD & Security",
    "question": "How does vulnerability scanning (e.g., Trivy) protect CI/CD deployment pipelines?",
    "answer": "It automatically audits image layers for known CVEs during the build phase and fails the pipeline (exit-code 1) before vulnerable images reach production registries."
  },
  {
    "id": 88,
    "subject": "docker-fundamentals",
    "tag": "Advanced Security",
    "question": "What are Google Distroless base images and why are they highly secure?",
    "answer": "Distroless images contain only the application and its runtime dependencies (e.g., JRE), omitting Linux shells (sh/bash), package managers, and CLI tools to eliminate attack vectors."
  },
  {
    "id": 89,
    "subject": "docker-fundamentals",
    "tag": "Advanced Security",
    "question": "How does running containers with '--read-only' enhance security?",
    "answer": "It locks the root filesystem as read-only at runtime, preventing attackers from downloading malicious binaries or modifying configuration files if an application vulnerability occurs."
  },
  {
    "id": 90,
    "subject": "docker-fundamentals",
    "tag": "Advanced Security",
    "question": "How should BuildKit secret mounts (RUN --mount=type=secret) be used in Dockerfiles?",
    "answer": "They temporarily mount build credentials into volatile RAM during a specific RUN command, ensuring secrets never persist inside image layers or metadata history."
  },
  {
    "id": 91,
    "subject": "docker-fundamentals",
    "tag": "Advanced Security",
    "question": "What is achieved by passing '--cap-drop=ALL' to docker run?",
    "answer": "It strips all inherited Linux kernel capabilities from the container, enforcing a zero-trust runtime model where only strictly required system permissions are re-added."
  },
  {
    "id": 92,
    "subject": "docker-fundamentals",
    "tag": "Advanced Security",
    "question": "What security boundary does '--security-opt=no-new-privileges:true' enforce?",
    "answer": "It prevents child processes running inside the container from gaining elevated privileges through setuid or setgid binaries or system calls."
  },
  {
    "id": 93,
    "subject": "docker-fundamentals",
    "tag": "Advanced Security",
    "question": "What is Rootless Docker Mode and what protection does it provide?",
    "answer": "Rootless mode executes the Docker daemon and containers inside a unprivileged user namespace, ensuring host root privileges remain untouched even during a total container breakout."
  },
  {
    "id": 94,
    "subject": "docker-fundamentals",
    "tag": "Advanced Security",
    "question": "How does OCI image labeling (org.opencontainers.image.revision) enhance supply chain traceability?",
    "answer": "It embeds immutable key-value metadata into the container manifest, recording the exact Git commit SHA, build date, and build pipeline URL directly inside the image."
  },
  {
    "id": 95,
    "subject": "docker-fundamentals",
    "tag": "Maintenance & Cleanup",
    "question": "What does the command 'docker system prune --volumes' accomplish?",
    "answer": "It reclaims host disk space by purging all stopped containers, unused networks, dangling build images, and unreferenced build caches in a single operation."
  },
 {
    "id": 96,
    "subject": "jenkins",
    "tag": "Monk Mindset",
    "question": "How does the Indian Monk concept of 'Ekagrata' (single-pointed focus) apply to Jenkins Controller architecture?",
    "answer": "The Controller (Mind) must focus purely on coordinating workloads and webhooks—it should never execute heavy build compilations or unit tests directly on itself."
  },
  {
    "id": 97,
    "subject": "jenkins",
    "tag": "KISS Principle",
    "question": "What is the fundamental KISS feedback loop for a clean Jenkins job?",
    "answer": "Trigger Event (Commit/PR) -> Isolated Clean Execution -> Immediate Status Feedback. Any additional unneeded step adds operational noise."
  },
  {
    "id": 98,
    "subject": "jenkins",
    "tag": "Nudge Theory",
    "question": "How does Nudge Theory improve developer code quality before code reaches the main branch?",
    "answer": "By embedding automated fast-linting and visual status indicators directly into Pull Requests, gently guiding developers to fix issues locally."
  },
  {
    "id": 99,
    "subject": "jenkins",
    "tag": "Infrastructure",
    "question": "Why must `/var/jenkins_home` be strictly decoupled from the underlying operating system binaries?",
    "answer": "To enforce 'Sthirata' (firmness of foundation)—allowing the stateless Jenkins runtime or container to be upgraded instantly without risking data loss."
  },
  {
    "id": 100,
    "subject": "jenkins",
    "tag": "Production Setup",
    "question": "Why should a production Linux Jenkins installation always be fronted by an Nginx reverse proxy?",
    "answer": "To enforce TLS 1.3 encryption, manage SSL certificates, and prevent raw, unencrypted exposure of port 8080 to public or internal networks."
  },
  {
    "id": 101,
    "subject": "jenkins",
    "tag": "Docker Setup",
    "question": "How does Docker Compose embody the Monk principle of 'Sthirata' in regional Jenkins deployments?",
    "answer": "It provides a single declarative file for volume persistence, health checks, and port bindings, eliminating manual OS configuration drift."
  },
  {
    "id": 102,
    "subject": "jenkins",
    "tag": "Authentication",
    "question": "Why avoid local user databases inside a production Jenkins controller?",
    "answer": "Local accounts lack central Multi-Factor Authentication (MFA) and orphan tracking; production security demands identity federation via SAML 2.0 or OIDC."
  },
  {
    "id": 103,
    "subject": "jenkins",
    "tag": "Authorization & RBAC",
    "question": "How does Folder-Level Role-Based Access Control (RBAC) enforce the Principle of Least Privilege?",
    "answer": "By mapping permissions using folder regular expressions (e.g., 'orion-.*'), ensuring developers only see and build what belongs to their project scope."
  },
  {
    "id": 104,
    "subject": "jenkins",
    "tag": "Secret Security",
    "question": "How does `withCredentials` in Declarative Pipelines act as a security nudge?",
    "answer": "It dynamically binds secrets to runtime environment variables while automatically masking sensitive strings ('****') in build console outputs."
  },
  {
    "id": 105,
    "subject": "jenkins",
    "tag": "Pipeline-as-Code",
    "question": "Why favor Declarative `Jenkinsfile` syntax over legacy GUI Freestyle jobs?",
    "answer": "Declarative syntax lives in SCM, undergoes peer code reviews, supports multibranch discovery, and enforces structured error handling."
  },
  {
    "id": 106,
    "subject": "jenkins",
    "tag": "Shared Libraries",
    "question": "How do Jenkins Shared Libraries apply the KISS principle across microservice fleets?",
    "answer": "They encapsulate repetitive build, security scanning, and notification steps into central Groovy variables (`vars/`), keeping app `Jenkinsfile`s under 5 lines."
  },
  {
    "id": 107,
    "subject": "jenkins",
    "tag": "Monk Discipline",
    "question": "Why is invoking `cleanWs()` in the pipeline `post` block considered essential workspace hygiene?",
    "answer": "It enforces 'Shuddhi' (purity)—guaranteeing that worker agents purge temporary files, cached credentials, and build residue before returning to the pool."
  },
  {
    "id": 108,
    "subject": "jenkins",
    "tag": "Ephemeral Agents",
    "question": "How does the Monk concept of 'Anitya' (impermanence) eliminate 'snowflake' build servers?",
    "answer": "By treating worker agents as disposable, single-use containers that spin up on demand, execute isolated tasks, and immediately self-destruct."
  },
  {
    "id": 109,
    "subject": "jenkins",
    "tag": "Kubernetes Scaling",
    "question": "What is the advantage of executing integration tests inside Kubernetes Pod templates with sidecars?",
    "answer": "Application code and ephemeral database containers (e.g., PostgreSQL) run within the same pod boundary on `localhost`, isolated from other builds."
  },
  {
    "id": 110,
    "subject": "jenkins",
    "tag": "Performance Tuning",
    "question": "How can dynamic ephemeral agents achieve fast build speeds without storing project state?",
    "answer": "By mounting persistent host cache directories (e.g., `~/.m2`, `~/.ccache`) into the ephemeral container without leaving project source state behind."
  },
  {
    "id": 111,
    "subject": "jenkins",
    "tag": "Zero-GUI Admin",
    "question": "What is the fundamental rule of Jenkins Configuration as Code (JCasC)?",
    "answer": "If a system setting is not explicitly declared in `jenkins.yaml`, it does not exist. The Jenkins GUI becomes a read-only dashboard."
  },
  {
    "id": 112,
    "subject": "jenkins",
    "tag": "Plugin Governance",
    "question": "How does pinning plugin versions in `plugins.txt` enforce system reproducibility?",
    "answer": "It guarantees identical, battle-tested plugin dependency trees across all regional controllers using `jenkins-plugin-cli` during container assembly."
  },
  {
    "id": 113,
    "subject": "jenkins",
    "tag": "Maintenance Rituals",
    "question": "How do `/quietDown` and `/safeRestart` enable peaceful controller maintenance?",
    "answer": "`/quietDown` blocks new incoming jobs to drain active queues peacefully, allowing running pipelines to finish before `/safeRestart` reboots the server."
  },
  {
    "id": 114,
    "subject": "jenkins",
    "tag": "Observability",
    "question": "Which three high-signal metrics reflect a calm, healthy Jenkins sanctuary?",
    "answer": "Build Queue Wait Time, Controller JVM Memory/CPU Utilization, and Active Executor Saturation (monitored via Prometheus and Grafana)."
  },
  {
    "id": 115,
    "subject": "jenkins",
    "tag": "JVM Optimization",
    "question": "Why set initial heap (`-Xms`) equal to max heap (`-Xmx`) when configuring Jenkins with G1GC?",
    "answer": "It eliminates dynamic memory resizing overhead and significantly reduces stop-the-world Garbage Collection pauses during peak commit surges."
  },
  {
    "id": 116,
    "subject": "jenkins",
    "tag": "Disaster Recovery",
    "question": "What is the Monk discipline of automated backup rituals?",
    "answer": "Periodically synchronizing essential state files (`config.xml`, `secrets/`, `jobs/`) to encrypted cloud vaults while excluding temporary workspace noise."
  },
{
    "id": 117,
    "subject": "gitlab-ci",
    "tag": "Monk Philosophy",
    "question": "What is the core objective of the 'Context of Monks' in GitLab CI workspace setup?",
    "answer": "To create an unburdened, distraction-free environment that eliminates technical noise and allows developers to focus with single-minded clarity."
  },
  {
    "id": 118,
    "subject": "gitlab-ci",
    "tag": "KISS Principle",
    "question": "How does the KISS Principle simplify group hierarchies and access permissions?",
    "answer": "By eliminating complex nested structures—if a developer cannot identify where their repository belongs or what permissions they have in 10 seconds, it is over-engineered."
  },
  {
    "id": 119,
    "subject": "gitlab-ci",
    "tag": "Nudge Theory",
    "question": "How does Nudge Theory enforce security governance without blocking developer velocity?",
    "answer": "By making safe behavior the effortless default path, such as safe permission matrices, automatic variable masking, and 1-line security scanning templates."
  },
  {
    "id": 120,
    "subject": "gitlab-ci",
    "tag": "RBAC & User Management",
    "question": "Which GitLab role should be assigned to QA engineers or external auditors under Least Privilege?",
    "answer": "The Reporter role, providing read-only access to repository source code and execution logs without permission to alter code or branches."
  },
  {
    "id": 121,
    "subject": "gitlab-ci",
    "tag": "Token Governance",
    "question": "Why are Project Access Tokens preferred over Personal Access Tokens for CI/CD automation?",
    "answer": "Project access tokens are tightly scoped to a single repository, inherit project permissions, and terminate automatically if the repository is archived."
  },
  {
    "id": 122,
    "subject": "gitlab-ci",
    "tag": "Runner Architecture",
    "question": "Why is the Shell executor discouraged for standard microservice pipelines?",
    "answer": "It lacks container isolation, allowing concurrent jobs to pollute host memory, modify system files, and create state dependency baggage."
  },
  {
    "id": 123,
    "subject": "gitlab-ci",
    "tag": "Monk Philosophy",
    "question": "How do Docker and Kubernetes executors align with the Monk context of stateless purity?",
    "answer": "Like a monk who accumulates no unnecessary possessions, stateless executors start every job in a pristine container and leave zero residual state upon completion."
  },
  {
    "id": 124,
    "subject": "gitlab-ci",
    "tag": "Runner Security",
    "question": "What authentication token prefix replaces legacy registration tokens to prevent compute hijacking?",
    "answer": "The glrt- prefix, providing secure, traceable authentication when registering gitlab-runner instances."
  },
  {
    "id": 125,
    "subject": "gitlab-ci",
    "tag": "KISS Principle",
    "question": "How should build tools and compilers be managed across runners under the KISS Principle?",
    "answer": "Package all build dependencies inside versioned container images rather than manually installing software packages on bare-metal host servers."
  },
  {
    "id": 126,
    "subject": "gitlab-ci",
    "tag": "Minimalist YAML",
    "question": "What is the purpose of the top-level default: block in .gitlab-ci.yml?",
    "answer": "To declare repository-wide attributes like container images, retries, and timeouts once, keeping individual job definitions clean and uncluttered."
  },
  {
    "id": 127,
    "subject": "gitlab-ci",
    "tag": "State Management",
    "question": "What is the key architectural difference between GitLab CI Artifacts and Cache?",
    "answer": "Artifacts pass compiled build outputs between stages in a single pipeline run, whereas Cache preserves external dependencies across different pipeline runs."
  },
  {
    "id": 128,
    "subject": "gitlab-ci",
    "tag": "Nudge Theory",
    "question": "How does lockfile-based caching nudge developers toward faster build execution times?",
    "answer": "By automatically reusing dependency caches (such as .m2 or node_modules) based on pom.xml or package-lock.json hashes without manual scripting."
  },
  {
    "id": 129,
    "subject": "gitlab-ci",
    "tag": "CI Administration",
    "question": "How does the 'Keep Latest Artifact' policy support storage housekeeping?",
    "answer": "It automatically prunes intermediate, outdated build outputs while preserving only the artifact from the most recent successful pipeline."
  },
  {
    "id": 130,
    "subject": "gitlab-ci",
    "tag": "Quota Governance",
    "question": "How can administrators prevent a single repository from monopolizing shared compute resources?",
    "answer": "By setting monthly compute minute caps and pipeline concurrency ceilings at the sub-group level."
  },
  {
    "id": 131,
    "subject": "gitlab-ci",
    "tag": "Pipeline Security",
    "question": "What is the difference between a Masked Variable and a Protected Variable?",
    "answer": "Masked variables obfuscate secret values with [MASKED] in logs, whereas Protected variables are restricted exclusively to jobs running on protected branches or tags."
  },
  {
    "id": 132,
    "subject": "gitlab-ci",
    "tag": "KISS Principle",
    "question": "What is the simplest way to embed SAST and Secret Detection into a GitLab CI pipeline?",
    "answer": "Include GitLab's official native security templates using a single include: statement inside your .gitlab-ci.yml file."
  },
  {
    "id": 133,
    "subject": "gitlab-ci",
    "tag": "Deployment Gates",
    "question": "How do Protected Environments with manual triggers secure production releases?",
    "answer": "They restrict deployment execution rights to authorized roles and require explicit approval triggers before code reaches live environments."
  },
{
    "id": 134,
    "subject": "azure-devops",
    "tag": "Monk Mindset & Identity",
    "question": "How does the Indian Monk principle of 'Aparigraha' apply to Azure DevOps identity?",
    "answer": "By eliminating administrative clutter, unlinked local accounts, and loose permissions to maintain one sacred source of truth via Azure Entra ID."
  },
  {
    "id": 135,
    "subject": "azure-devops",
    "tag": "Nudge Theory & Security Defaults",
    "question": "How does Nudge Theory eliminate human error in Azure DevOps organization security?",
    "answer": "By setting secure defaults like disabling public projects, restricting project creation, and disallowing PAT creation for non-admin users."
  },
  {
    "id": 136,
    "subject": "azure-devops",
    "tag": "KISS Principle & RBAC",
    "question": "Why does the KISS principle prohibit direct user-level permission assignments?",
    "answer": "Direct assignments create complex, un-auditable permission trees; using Entra ID group rules ensures flat, role-based access that syncs automatically."
  },
  {
    "id": 137,
    "subject": "azure-devops",
    "tag": "Just-In-Time Elevation",
    "question": "How does Just-In-Time (JIT) access prevent standing admin privilege risks?",
    "answer": "Engineers receive temporary, time-bounded elevation via Entra ID PIM with mandatory MFA and ticket references, leaving zero static admin accounts."
  },
  {
    "id": 138,
    "subject": "azure-devops",
    "tag": "Monk Mindset & Sacred Codebase",
    "question": "What is the 'Eka Vriksha' concept in version control management?",
    "answer": "Treating the 'main' branch as a sacred, unpolluted trunk where direct commits are forbidden and all code arrives through verified, intentional pull requests."
  },
  {
    "id": 139,
    "subject": "azure-devops",
    "tag": "KISS & Trunk-Based Dev",
    "question": "Why does Trunk-Based Development align with the KISS principle over GitFlow?",
    "answer": "It eliminates cognitive overload from tangled release and develop branches by using short-lived feature branches that squash-merge back into 'main'."
  },
  {
    "id": 140,
    "subject": "azure-devops",
    "tag": "Nudge Theory & Code Review",
    "question": "How do Azure Repos branch policies act as a subtle nudge for code quality?",
    "answer": "They keep the 'Complete PR' button disabled until automated build checks pass, work items are linked, and two independent reviewers approve."
  },
  {
    "id": 141,
    "subject": "azure-devops",
    "tag": "Advanced Security & Secret Scanning",
    "question": "How does Advanced Security Push Protection protect repository hygiene?",
    "answer": "It scans commits at the local git push command line and rejects pushes instantly if unencrypted secrets or API keys are detected."
  },
  {
    "id": 142,
    "subject": "azure-devops",
    "tag": "Monk Mindset & Declarative Pipelines",
    "question": "Why are YAML pipelines viewed as 'Sutras' in the Monk's DevOps philosophy?",
    "answer": "They replace messy visual UI panels with succinct, version-controlled, declarative statements that execute deterministically without manual drift."
  },
  {
    "id": 143,
    "subject": "azure-devops",
    "tag": "KISS & Modular Templates",
    "question": "How do modular YAML templates uphold the KISS principle across microservices?",
    "answer": "They centralize build and security steps into reusable template files, keeping microservice pipeline files under 15 lines of code."
  },
  {
    "id": 144,
    "subject": "azure-devops",
    "tag": "Secretless OIDC & Workload Identity",
    "question": "Why is Workload Identity Federation (OIDC) superior to static service principal keys?",
    "answer": "It exchanges short-lived, federated tokens dynamically per pipeline run, eliminating static passwords, rotation overhead, and credential leaks."
  },
  {
    "id": 145,
    "subject": "azure-devops",
    "tag": "Nudge Theory & Multi-Stage CI/CD",
    "question": "How does multi-stage pipeline isolation enforce secure delivery?",
    "answer": "It separates artifact compilation from deployment stages, nudging teams to deploy only immutable, pre-tested build drop packages."
  },
  {
    "id": 146,
    "subject": "azure-devops",
    "tag": "Monk Mindset & Secret Sanctuary",
    "question": "What is 'Gupteya' in the context of cloud configuration management?",
    "answer": "The principle of treating secrets as invisible entities stored in a central Key Vault sanctuary, fetched dynamically in memory, and never logged."
  },
  {
    "id": 147,
    "subject": "azure-devops",
    "tag": "KISS & Variable Groups",
    "question": "How do linked Key Vault Variable Groups simplify secret management?",
    "answer": "They abstract secret fetching from application code, allowing pipelines to reference variables naturally without custom secret-retrieval scripts."
  },
  {
    "id": 148,
    "subject": "azure-devops",
    "tag": "Nudge Theory & Secret Masking",
    "question": "How does Azure DevOps protect pipeline logs from accidental credential exposure?",
    "answer": "It automatically scans stdout/stderr console streams in real time and replaces any detected secret variable values with '***'."
  },
  {
    "id": 149,
    "subject": "azure-devops",
    "tag": "Static Code Analysis & Sanctuary Scans",
    "question": "How does a sanctuary secret scan step prevent secret leaks before deployment?",
    "answer": "It runs regex checks against source files during compilation and fails the build stage immediately if plain-text password signatures exist."
  },
  {
    "id": 150,
    "subject": "azure-devops",
    "tag": "Monk Mindset & Production Sanctuary",
    "question": "Why is the Production Environment viewed as a 'Garbhagriha' (Sacred Threshold)?",
    "answer": "Because crossing into live production requires passing silent, automated health guardians rather than rushing blindly with untested code."
  },
  {
    "id": 151,
    "subject": "azure-devops",
    "tag": "Nudge Theory & Azure Monitor Gates",
    "question": "Why are automated Azure Monitor gates preferred over manual human approvals?",
    "answer": "Automated gates query Application Insights telemetry objectively, aborting deployments immediately if error rates spike and avoiding human rubber-stamping."
  },
  {
    "id": 152,
    "subject": "azure-devops",
    "tag": "KISS & Environment Branch Control",
    "question": "How do environment branch controls enforce release predictability?",
    "answer": "They restrict production environment deployments strictly to the 'main' branch, making accidental releases from feature branches impossible."
  },
  {
    "id": 153,
    "subject": "azure-devops",
    "tag": "Canary Rollout & Automated Rollback",
    "question": "How does a Canary deployment strategy protect live users during releases?",
    "answer": "It routes a small fraction of traffic to the new build, runs synthetic health probes, and automatically rolls back if latency or error thresholds fail."
  },
  {
    "id": 154,
    "subject": "azure-devops",
    "tag": "Monk Mindset & Sakshi Bhava",
    "question": "How does 'Sakshi Bhava' (Pure Witness) manifest in DevOps observability?",
    "answer": "Through continuous, unattached witnessing of system telemetry and streaming all audit logs to a central Log Analytics Workspace in real time."
  },
  {
    "id": 155,
    "subject": "azure-devops",
    "tag": "Nudge Theory & Drift Detection",
    "question": "How do nightly scheduled Terraform dry-runs enforce zero-drift operations?",
    "answer": "They silently compare running cloud infrastructure against Git source code every night and alert engineers instantly if unauthorized manual UI tweaks occurred."
  },
  {
    "id": 156,
    "subject": "azure-devops",
    "tag": "KISS & Centralized Auditing",
    "question": "Why is streaming Azure DevOps audit logs to Azure Log Analytics essential?",
    "answer": "It consolidates security, repository, and permission events into a single searchable KQL store, eliminating siloed dashboards and compliance gaps."
  },
  {
    "id": 157,
    "subject": "azure-devops",
    "tag": "Continuous Hygiene & Self-Cleaning",
    "question": "What daily hygiene rituals keep an Azure DevOps workspace free of entropy?",
    "answer": "Automatically deleting completed PR branches, revoking idle PAT tokens, and running automated cleanup scripts for orphaned preview environments."
  },
  {
    "id": 158,
    "subject": "sast-sonarqube",
    "tag": "Monk Philosophy",
    "question": "How does the Indian Monk principle of 'Svadhyaya' reframe Static Application Security Testing (SAST)?",
    "answer": "It transforms code inspection from a stressful external audit into a calm, daily ritual of self-study and non-judgmental reflection before code reaches production."
  },
  {
    "id": 159,
    "subject": "sast-sonarqube",
    "tag": "KISS Principle",
    "question": "What is the core distinction between SAST, DAST, and SCA?",
    "answer": "SAST proofreads raw source code before execution; DAST attacks a running application from the outside; SCA audits third-party open-source dependencies."
  },
  {
    "id": 160,
    "subject": "sast-sonarqube",
    "tag": "Nudge Theory",
    "question": "How does 'Clean as You Code' (CAYC) leverage Nudge Theory to eliminate technical debt anxiety?",
    "answer": "It focuses Quality Gates strictly on new or modified code in the current PR, allowing legacy debt to decay naturally without forcing painful cleanup sprints."
  },
  {
    "id": 161,
    "subject": "sast-sonarqube",
    "tag": "Monk Philosophy",
    "question": "How do the concepts of 'Karma Yoga' and 'Vartaman' apply to developer productivity?",
    "answer": "They free engineers from past codebase burdens by focusing 100% of their discipline on making today's immediate changes clean, secure, and well-tested."
  },
  {
    "id": 162,
    "subject": "sast-sonarqube",
    "tag": "Production Infrastructure",
    "question": "Why must the default embedded H2 database be replaced with PostgreSQL in production SonarQube setups?",
    "answer": "H2 cannot handle concurrent scanner connections, lacks data migration paths, and easily corrupts during ungraceful container shutdowns."
  },
  {
    "id": 163,
    "subject": "sast-sonarqube",
    "tag": "Linux Kernel Tuning",
    "question": "Which Linux kernel parameter must be set to at least 524288 for SonarQube's internal Elasticsearch engine?",
    "answer": "vm.max_map_count—without this memory mapping threshold, Elasticsearch will crash on startup during indexing."
  },
  {
    "id": 164,
    "subject": "sast-sonarqube",
    "tag": "Reverse Proxy & Security",
    "question": "Why should SonarQube be wrapped in an Nginx reverse proxy with TLS/SSL?",
    "answer": "To encrypt administrative tokens and source code snippets in transit, enforce HTTPS, and handle large scan upload buffers (client_max_body_size 100M)."
  },
  {
    "id": 165,
    "subject": "sast-sonarqube",
    "tag": "Monk Philosophy",
    "question": "How does 'Viveka' (Discernment) eliminate false-positive alert fatigue in SonarQube?",
    "answer": "By discarding superficial formatting noise and tailoring Quality Profiles to focus strictly on critical OWASP vulnerabilities and runtime bugs."
  },
  {
    "id": 166,
    "subject": "sast-sonarqube",
    "tag": "Quality Gates",
    "question": "What are the four essential Quality Gate conditions for New Code in a production setup?",
    "answer": "0 New Vulnerabilities, 0 New Unreviewed Security Hotspots, 80%+ Code Coverage on New Code, and Maintainability Rating A."
  },
  {
    "id": 167,
    "subject": "sast-sonarqube",
    "tag": "KISS Principle",
    "question": "How do you prevent auto-generated Maven build stubs from triggering false positives in SonarQube?",
    "answer": "By defining 'sonar.exclusions=**/target/generated-sources/**' in sonar-project.properties or Maven build options."
  },
  {
    "id": 168,
    "subject": "sast-sonarqube",
    "tag": "Monk Philosophy",
    "question": "How does the spiritual concept of 'Sahaja' relate to automated DevSecOps pipelines?",
    "answer": "It turns security analysis into an effortless, natural workflow where SAST triggers automatically on every push like an involuntary breath."
  },
  {
    "id": 169,
    "subject": "sast-sonarqube",
    "tag": "Nudge Theory",
    "question": "Why is Pull Request (PR) Decoration superior to traditional PDF security reports?",
    "answer": "It delivers immediate, contextual nudges directly on the changed lines of code inside GitHub/GitLab PR diffs where developers can fix them instantly."
  },
  {
    "id": 170,
    "subject": "sast-sonarqube",
    "tag": "CI/CD Optimization",
    "question": "Why is 'fetch-depth: 0' required in GitHub Actions checkout steps for SonarQube analysis?",
    "answer": "It fetches the complete git commit history so SonarQube can accurately calculate code diffs and evaluate Clean as You Code metrics."
  },
  {
    "id": 171,
    "subject": "sast-sonarqube",
    "tag": "KISS Principle",
    "question": "How does caching Maven repositories (~/.m2) and Sonar cache in CI/CD improve pipeline performance?",
    "answer": "It speeds up pipeline execution times from minutes to seconds by avoiding redundant dependency downloads on every push."
  },
  {
    "id": 172,
    "subject": "sast-sonarqube",
    "tag": "FinTech Case Study",
    "question": "What vulnerability occurs when user-controlled API input is concatenated directly into SQL query strings?",
    "answer": "SQL Injection (OWASP A03), allowing attackers to read, alter, or delete sensitive financial records."
  },
  {
    "id": 173,
    "subject": "sast-sonarqube",
    "tag": "Healthcare Case Study",
    "question": "Why does SonarQube flag direct logging of patient data objects as a Security Hotspot in HIPAA applications?",
    "answer": "Because logging unmasked PII/PHI in plain text creates severe privacy compliance violations and data leak risks."
  },
   {
    "id": 174,
    "subject": "springboot",
    "tag": "Mindful Maven Setup",
    "question": "Why does inheriting from 'spring-boot-starter-parent' embody the KISS principle in Maven configuration?",
    "answer": "It automatically manages compatible dependency versions, Java compiler settings, and plugin defaults, eliminating structural clutter from your pom.xml."
  },
  {
    "id": 175,
    "subject": "springboot",
    "tag": "Build Caching",
    "question": "How does running Maven in offline mode ('mvn clean package -o') align with the Monk mindset?",
    "answer": "It enables developers to work in deep, uninterrupted focus using locally cached dependencies in ~/.m2 without external network latency or distractions."
  },
  {
    "id": 176,
    "subject": "springboot",
    "tag": "KISS REST Controller",
    "question": "What makes @RestController the ultimate minimalist choice for HTTP endpoints?",
    "answer": "It combines @Controller and @ResponseBody into a single annotation, automatically serializing method return values directly into HTTP response bodies."
  },
  {
    "id": 177,
    "subject": "springboot",
    "tag": "Java Records & JSON",
    "question": "Why are Java Records recommended for API DTO payloads in modern Spring Boot apps?",
    "answer": "Java Records provide transparent, immutable data containers with zero boilerplate—eliminating manual getters, setters, or constructors."
  },
  {
    "id": 178,
    "subject": "springboot",
    "tag": "Isolated Unit Testing",
    "question": "How does @WebMvcTest act as an automated safety net while upholding the KISS principle?",
    "answer": "It boots only the web layer in isolation, allowing you to test REST controllers in milliseconds without loading backend database pools or full contexts."
  },
  {
    "id": 179,
    "subject": "springboot",
    "tag": "MockMvc & Assertions",
    "question": "How does seeing rapid green test feedback in the terminal apply Nudge Theory?",
    "answer": "It delivers immediate positive reinforcement, transforming software testing from a tedious chore into a rewarding habit of maintaining code quality."
  },
  {
    "id": 180,
    "subject": "springboot",
    "tag": "Defensive Parameters",
    "question": "Why is setting 'defaultValue' in @RequestParam a gentle nudge for resilient API design?",
    "answer": "It prevents HTTP 400 Bad Request errors when clients omit optional query parameters, providing graceful fallback values out of the box."
  },
  {
    "id": 181,
    "subject": "springboot",
    "tag": "Global Error Handling",
    "question": "How does @RestControllerAdvice promote calm resilience during unexpected API failures?",
    "answer": "It intercepts unhandled exceptions globally and converts them into predictable JSON error payloads instead of exposing confusing raw stack traces."
  },
  {
    "id": 182,
    "subject": "springboot",
    "tag": "Port Conflict Resolution",
    "question": "What is the most peaceful way to resolve a 'Port 8080 in use' error without forcibly killing processes?",
    "answer": "Reconfigure server.port=8081 in application.properties or pass --server.port=8081 as a command-line runtime argument."
  },
  {
    "id": 183,
    "subject": "springboot",
    "tag": "Zen Dockerfiles",
    "question": "Why choose 'eclipse-temurin:17-jre-alpine' over full JDK operating system images for container runtime?",
    "answer": "It drastically reduces container image size, speeds up deployments, and eliminates unnecessary OS utilities, minimizing security attack vectors."
  },
  {
    "id": 184,
    "subject": "springboot",
    "tag": "Multi-Stage Builds",
    "question": "How does a multi-stage Docker build reflect the Monk concept of 'carrying only what is necessary'?",
    "answer": "It compiles code in a temporary build stage with Maven, then copies ONLY the final executable JAR into a lean JRE runtime container, discarding build tools."
  },
  {
    "id": 185,
    "subject": "springboot",
    "tag": "Spring Boot Actuator",
    "question": "What is the difference between Actuator's /health/liveness and /health/readiness probes?",
    "answer": "Liveness indicates if the application runtime is alive (restart if failed), while Readiness indicates if the app is ready to accept network traffic (pause routing if failed)."
  },
  {
    "id": 186,
    "subject": "springboot",
    "tag": "Docker Health Checks",
    "question": "How does the HEALTHCHECK directive in a Dockerfile nudge cloud infrastructure toward self-healing?",
    "answer": "It allows Docker to periodically probe health endpoints and automatically mark or restart containers that become unresponsive."
  },
  {
    "id": 187,
    "subject": "springboot",
    "tag": "Declarative Deployments",
    "question": "How does declarative Kubernetes orchestration mirror the Monk mindset?",
    "answer": "Instead of executing manual terminal commands on every failure, you declare desired state in YAML and allow Kubernetes to silently reconcile and maintain that state."
  },
  {
    "id": 188,
    "subject": "springboot",
    "tag": "Self-Healing Pods",
    "question": "What happens in a Kubernetes cluster when a Spring Boot pod fails its liveness probe?",
    "answer": "Kubernetes automatically terminates the unhealthy pod and provisions a new replacement pod to restore the declared replica count."
  },
  {
    "id": 189,
    "subject": "springboot",
    "tag": "Ingress Gateway Routing",
    "question": "Why is a Kubernetes Ingress preferred over creating individual LoadBalancer services for every microservice?",
    "answer": "Ingress provides a single, unified entry gateway for external traffic, routing requests by host or path to backend services while reducing cloud costs."
  },
  {
    "id": 190,
    "subject": "springboot",
    "tag": "TLS Termination",
    "question": "What operational benefit does centralizing TLS/SSL termination at the Ingress controller provide?",
    "answer": "It decrypts HTTPS traffic at the cluster gateway, relieving backend Spring Boot microservices from managing SSL certificates and cryptographic overhead."
  },
  {
    "id": 191,
    "subject": "kubernetes-devsecops",
    
    "tag": "Declarative State",
    "question": "What is the fundamental difference between Imperative Chaos and Declarative Zen in Kubernetes?",
    "answer": "Imperative means issuing frantic manual commands ('start container now!'). Declarative Zen means writing down your desired state in YAML and letting the cluster's continuous reconciliation loop automatically maintain harmony 24/7."
  },
  {
    "id": 192,
    "subject": "kubernetes-devsecops",
    
    "tag": "etcd Quorum",
    "question": "Why must the etcd key-value store always run with an odd number of instances (3 or 5) in production?",
    "answer": "etcd is the monastery's sacred scroll of truth. Running an odd number guarantees a RAFT consensus majority (quorum) during network partitions, preventing split-brain corruption of your cluster state."
  },
  {
    "id": 193,
    "subject": "kubernetes-devsecops",
    
    "tag": "API Server",
    "question": "How does the kube-apiserver act as the single front door to the cluster sanctum?",
    "answer": "Every request from kubectl, CI/CD pipelines, or worker nodes must pass through kube-apiserver. It authenticates, validates RBAC policies, and is the ONLY component authorized to write directly to etcd."
  },
  {
    "id": 194,
    "subject": "kubernetes-devsecops",
    
    "tag": "Kubelet Envoy",
    "question": "What is the primary role of the kubelet agent on worker nodes?",
    "answer": "Kubelet is the temple envoy. It receives pod specifications from the control plane, instructs the local container runtime to start or stop containers, and continuously reports node health back to the API server."
  },
  {
    "id": 195,
    "subject": "kubernetes-devsecops",
    
    "tag": "Self-Healing Loop",
    "question": "How does Kubernetes automatically recover when a worker node crashes?",
    "answer": "The controller-manager detects that actual running pods (e.g. 2) fall short of desired state (3). The scheduler immediately assigns a replacement pod to a healthy node, restoring equilibrium without human intervention."
  },
  {
    "id": 196,
    "subject": "kubernetes-devsecops",

    "tag": "Pod Anatomy",
    "question": "Why do containers inside the same Pod cell communicate over localhost?",
    "answer": "Containers in a Pod share the exact same network namespace and IP address. This enables sidecars (like log shippers or secret proxies) to work in close, zero-latency harmony with the primary app."
  },
  {
    "id": 197,
    "subject": "kubernetes-devsecops",

    "tag": "Rolling Updates",
    "question": "How does setting maxUnavailable: 0 guarantee zero-downtime deployments?",
    "answer": "It instructs Kubernetes to launch new pod replicas and verify their readiness BEFORE terminating any old replicas, ensuring 100% processing capacity is maintained throughout the release."
  },
  {
    "id": 198,
    "subject": "kubernetes-devsecops",

    "tag": "Service Routing",
    "question": "When should you use a ClusterIP Service versus an Ingress Controller?",
    "answer": "Use ClusterIP for internal microservices and databases accessible only inside the cluster. Use an Ingress Controller as a smart reverse proxy to route public HTTPS traffic to internal services using host/path rules."
  },
  {
    "id": 199,
    "subject": "kubernetes-devsecops",

    "tag": "Secret Hygiene",
    "question": "Why is Base64 encoding in standard Kubernetes Secrets dangerous if unencrypted?",
    "answer": "Base64 is obfuscation, NOT encryption. Anyone with read access can decode Base64 in seconds. Production DevSecOps requires envelope encryption in etcd and tools like Vault, SOPS, or External Secrets Operator."
  },
  {
    "id": 200,
    "subject": "kubernetes-devsecops",

    "tag": "Health Probes",
    "question": "What is the crucial difference between a ReadinessProbe and a LivenessProbe?",
    "answer": "ReadinessProbe checks if the pod is ready to accept live user traffic (failing removes it from load balancing). LivenessProbe checks if the app is frozen or deadlocked (failing forces Kubernetes to restart the container)."
  },
  {
    "id": 201,
    "subject": "kubernetes-devsecops",

    "tag": "Storage Decoupling",
    "question": "Why does deleting a Pod attached to a PVC not destroy your application's physical data?",
    "answer": "Kubernetes decouples compute from storage. The PersistentVolume (PV) exists independently of pod lifecycles. When a pod dies, its replacement pod re-attaches to the exact same persistent storage claim (PVC)."
  },
  {
    "id": 202,
    "subject": "kubernetes-devsecops",

    "tag": "RWO vs RWX",
    "question": "When must you choose ReadWriteOnce (RWO) over ReadWriteMany (RWX) storage?",
    "answer": "Choose RWO for high-performance single-node workloads like relational databases (PostgreSQL/MySQL). Choose RWX when multiple pods across different nodes need concurrent read-write access to shared media or logs."
  },
  {
    "id": 203,
    "subject": "kubernetes-devsecops",

    "tag": "Stateful Workloads",
    "question": "Why do databases require a StatefulSet instead of a standard Deployment?",
    "answer": "StatefulSets provide predictable ordinal pod names (db-0, db-1), stable DNS hostnames, and dedicated storage volume templates that persist and re-attach to the exact same ordinal instance upon restart."
  },
  {
    "id": 204,
    "subject": "kubernetes-devsecops",

    "tag": "DB Automation",
    "question": "What is the role of a Database Operator like CloudNativePG in Kubernetes?",
    "answer": "Operators encode human operational wisdom into code. They automate complex database tasks like master-replica failover, connection pooling, logical backups, and zero-downtime rolling schema upgrades."
  },
  {
    "id": 205,
    "subject": "kubernetes-devsecops",

    "tag": "Immutable Backups",
    "question": "How does Velero enable complete cluster disaster recovery during region failures?",
    "answer": "Velero takes coordinated snapshots of both physical cloud storage volumes and Kubernetes resource manifests, streaming encrypted backups to off-cluster S3 object storage for instant cross-region restoration."
  },
  {
    "id": 206,
    "subject": "kubernetes-devsecops",

    "tag": "Least Privilege RBAC",
    "question": "Why should application ServiceAccounts never be granted cluster-admin or wildcard verbs?",
    "answer": "Principle of Least Privilege. If an application pod is compromised via remote code execution, restricted RBAC prevents the attacker from inspecting other namespaces, deleting databases, or escalating cluster privileges."
  },
  {
    "id": 207,
    "subject": "kubernetes-devsecops",

    "tag": "Network Isolation",
    "question": "What happens when you apply a default-deny-all NetworkPolicy to a namespace?",
    "answer": "It builds inner courtyard walls: all incoming (ingress) and outgoing (egress) traffic is blocked by default. You must explicitly declare allowable pod-to-pod network pathways to enable communication."
  },
  {
    "id": 208,
    "subject": "kubernetes-devsecops",

    "tag": "Container Hardening",
    "question": "Which three securityContext directives enforce strict Restricted Pod Security Standards?",
    "answer": "1) runAsNonRoot: true (disables root UID 0), 2) readOnlyRootFilesystem: true (prevents malware downloads), and 3) capabilities: drop: ['ALL'] (strips dangerous Linux kernel privileges)."
  },
  {
    "id": 209,
    "subject": "kubernetes-devsecops",

    "tag": "Shift-Left Vulnerability Scanning",
    "question": "How does integration of image scanners like Trivy in CI/CD pipelines protect the cluster?",
    "answer": "It practices continuous watchfulness at the gate—scanning container images for Known Exploits (CVEs) and blocking vulnerable artifacts from ever reaching the container registry or admission controller."
  },
  {
    "id": 210,
    "subject": "kubernetes-devsecops",

    "tag": "Admission Control",
    "question": "How does Kyverno enforce security guardrails at deployment time?",
    "answer": "Kyverno intercepts requests at the kube-apiserver as a Validating Webhook, rejecting non-compliant manifests (e.g., untrusted registries or missing drop-all capabilities) before they enter etcd."
  },
  {
    "id": 211,
    "subject": "kubernetes-devsecops",

    "tag": "Helm Templating",
    "question": "How does Helm eliminate configuration duplication across Dev, Staging, and Prod?",
    "answer": "Helm parameterizes manifests into reusable templates. You maintain generic chart templates and simply swap environment-specific values.yaml files (values-dev.yaml vs values-prod.yaml) to maintain DRY code."
  },
  {
    "id": 212,
    "subject": "kubernetes-devsecops",

    "tag": "GitOps Reconciliation",
    "question": "Why is ArgoCD's pull-based GitOps model more secure and resilient than push CI scripts?",
    "answer": "ArgoCD runs inside the cluster and pulls state from Git (the single source of truth). It requires no external admin keys exposed in CI systems and automatically self-heals manual configuration drift."
  },
  {
    "id": 213,
    "subject": "kubernetes-devsecops",

    "tag": "Observability",
    "question": "What are the Four Golden Signals of Kubernetes cluster observability?",
    "answer": "1) Latency (time to serve requests), 2) Traffic (demand volume/RPS), 3) Errors (rate of HTTP 5xx failures), and 4) Saturation (CPU, memory, disk, and network capacity utilization)."
  },
  {
    "id": 214,
    "subject": "kubernetes-devsecops",

    "tag": "Metrics-Driven Scaling",
    "question": "How does scaling on custom Prometheus metrics prevent HPA lag during flash sales?",
    "answer": "CPU utilization lags behind rapid traffic surges. Scaling on real-time HTTP requests per second (RPS) triggers replica expansion instantly before CPU saturation causes dropped checkout requests."
  },
  {
    "id": 215,
    "subject": "kubernetes-devsecops",

    "tag": "Node Scaling",
    "question": "What triggers cluster-level node autoscaling with tools like Karpenter?",
    "answer": "When Pod autoscaling (HPA) requests more replicas than existing worker nodes can hold, pending unschedulable pods trigger Karpenter to provision right-sized compute nodes from cloud providers in seconds."
  },

 {
    "id": 216,
    "subject": "istio",

    "tag": "Sanctuary Gate",
    "question": "What is the core purpose of Istio's Sidecar Pattern in simple terms?",
    "answer": "Like an invisible personal attendant standing at every monk's doorway, Envoy intercepts and handles all network communication (mTLS, retries, tracing) so application code can focus purely on business logic."
  },
  {
    "id": 217,
    "subject": "istio",

    "tag": "Sanctuary Gate",
    "question": "How does a Service Mesh differ from an API Gateway?",
    "answer": "An API Gateway manages North-South traffic at the cluster perimeter (user authentication, rate limiting), whereas a Service Mesh manages East-West inter-service traffic inside the cluster (mTLS, circuit breaking, tracing)."
  },
  {
    "id": 218,
    "subject": "istio",

    "tag": "Sanctuary Gate",
    "question": "What is the 60-Second Nudge check to determine if your stack needs Istio?",
    "answer": "Ask: Are developers importing custom code libraries into app repositories to handle retries and mTLS encryption, and can you cryptographically prove inter-service identity right now?"
  },
  {
    "id": 219,
    "subject": "istio",

    "tag": "Inner Temple",
    "question": "What is the difference between istiod (The Mind) and Envoy Proxy (The Body)?",
    "answer": "istiod (Control Plane) holds the blueprints and issues certificates without touching user packets; Envoy (Data Plane) runs inside pods to intercept, encrypt, and route real data traffic."
  },
  {
    "id": 220,
    "subject": "istio",

    "tag": "Inner Temple",
    "question": "How does Envoy intercept pod traffic without modifying application code?",
    "answer": "An init container (istio-init) executes iptables commands inside the pod's network namespace to redirect incoming (port 15006) and outgoing (port 15001) TCP traffic through Envoy."
  },
  {
    "id": 221,
    "subject": "istio",

    "tag": "Inner Temple",
    "question": "How do you solve startup race conditions where app containers boot faster than Envoy?",
    "answer": "Set 'holdApplicationUntilProxyStarts: true' in the proxy configuration so the main application container waits until Envoy is fully initialized before executing."
  },
  {
    "id": 222,
    "subject": "istio",

    "tag": "Inner Temple",
    "question": "How do you drastically reduce Envoy's memory footprint in large clusters?",
    "answer": "Apply a 'Sidecar' Custom Resource to scope down configuration visibility so each proxy only loads routing tables for services it actually needs to communicate with."
  },
  {
    "id": 223,
    "subject": "istio",

    "tag": "Sacred Security",
    "question": "What is a SPIFFE ID and where is it stored during mTLS communication?",
    "answer": "A SPIFFE ID is an immutable URI identity (e.g., spiffe://cluster.local/ns/finance/sa/payment-sa) embedded inside the Subject Alternative Name (SAN) field of X.509 SVID certificates."
  },
  {
    "id": 224,
    "subject": "istio",

    "tag": "Sacred Security",
    "question": "What is the golden rule when establishing a Zero-Trust security baseline in Istio?",
    "answer": "Apply a Deny-All AuthorizationPolicy (spec: {}) across the namespace, then grant explicit least-privilege ALLOW rules for approved identities and HTTP paths."
  },
  {
    "id": 225,
    "subject": "istio",

    "tag": "Sacred Security",
    "question": "How does Istio prevent compromised pods from exfiltrating data to external malicious IPs?",
    "answer": "Set 'outboundTrafficPolicy.mode = REGISTRY_ONLY' to block all outgoing traffic except explicitly approved destinations declared in Istio ServiceEntry manifests."
  },
  {
    "id": 226,
    "subject": "istio",

    "tag": "Sacred Security",
    "question": "How do PERMISSIVE and STRICT mTLS modes differ in PeerAuthentication?",
    "answer": "PERMISSIVE accepts both cleartext and mTLS traffic for smooth legacy migration; STRICT forces mTLS encryption and drops unencrypted requests immediately."
  },
  {
    "id": 227,
    "subject": "istio",

    "tag": "Mastery of Flow",
    "question": "What are the roles of VirtualService and DestinationRule in Istio traffic routing?",
    "answer": "VirtualService decides *where* traffic goes (URI paths, header matching, weight splits); DestinationRule decides *how* traffic is handled upon arrival (subsets, load balancing, circuit breaking)."
  },
  {
    "id": 228,
    "subject": "istio",

    "tag": "Mastery of Flow",
    "question": "How does Envoy Circuit Breaking (Outlier Detection) protect downstream databases?",
    "answer": "If a pod throws consecutive 5xx errors (e.g., 3 in 10s), Envoy temporarily ejects it from the load balancing pool for 30 seconds, preventing cascading cluster failures."
  },
  {
    "id": 229,
    "subject": "istio",

    "tag": "Mastery of Flow",
    "question": "How do you execute a header-based Canary rollout before opening to the public?",
    "answer": "Define a VirtualService route matching specific headers (e.g., x-qa-tester: true) to route internal QA to v2, followed by a weight-based rule (90% v1 / 10% v2) for general traffic."
  },
  {
    "id": 230,
    "subject": "istio",

    "tag": "Mastery of Flow",
    "question": "Why is Chaos Engineering via Fault Injection safer than breaking application code?",
    "answer": "Istio VirtualServices can inject synthetic 5-second delays or 500 status codes dynamically at the proxy layer without modifying backend code or risking database corruption."
  },
  {
    "id": 231,
    "subject": "istio",

    "tag": "The Third Eye",
    "question": "What are the RED Metrics captured automatically by Envoy sidecar proxies?",
    "answer": "Rate (request volume via istio_requests_total), Errors (5xx HTTP status counts), and Duration (latency distribution histograms)."
  },
  {
    "id": 232,
    "subject": "istio",

    "tag": "The Third Eye",
    "question": "What single responsibility does application code have for distributed tracing in Istio?",
    "answer": "Application code must copy incoming trace context headers (such as W3C 'traceparent' and 'x-request-id') to any outgoing HTTP calls it executes."
  },
  {
    "id": 233,
    "subject": "istio",

    "tag": "The Third Eye",
    "question": "What key insights does Kiali provide in a production service mesh?",
    "answer": "Real-time visual service topology maps, animated traffic flows, active mTLS encryption badges, and live Istio YAML configuration validation."
  },
  {
    "id": 234,
    "subject": "istio",

    "tag": "Hands-On Ashram",
    "question": "How do you enable automatic sidecar injection on a target Kubernetes namespace?",
    "answer": "Run 'kubectl label namespace <name> istio-injection=enabled'. All new pods deployed in that namespace will automatically receive the Envoy sidecar container."
  },
  {
    "id": 235,
    "subject": "istio",

    "tag": "Hands-On Ashram",
    "question": "How do you confirm that Envoy sidecars were injected properly into application pods?",
    "answer": "Check that 'kubectl get pods' displays '2/2 READY' containers (1 main application container + 1 Envoy proxy container)."
  },
  {
    "id": 236,
    "subject": "istio",

    "tag": "Hands-On Ashram",
    "question": "What Istio resources are required to expose internal cluster services to public web traffic?",
    "answer": "An Ingress Gateway to open port 80/443 and terminate TLS, paired with a VirtualService to route domain requests to internal service endpoints."
  },
  {
    "id": 237,
    "subject": "istio",

    "tag": "Continuous Mastery",
    "question": "How do Revision-Based Canary Upgrades prevent downtime during control plane upgrades?",
    "answer": "New istiod control planes run side-by-side with unique revision tags ('1-22-0' vs '1-23-0'), allowing single namespaces to be migrated and verified before global promotion."
  },
  {
    "id": 238,
    "subject": "istio",

    "tag": "Continuous Mastery",
    "question": "How does GitOps with ArgoCD enforce Istio configuration discipline?",
    "answer": "ArgoCD maintains Git as the single source of truth for all Istio CRDs, automatically detecting drift and self-healing if someone manually alters production cluster YAMLs."
  },
  {
    "id": 239,
    "subject": "istio",

    "tag": "Continuous Mastery",
    "question": "How do East-West Gateways enable multi-cluster service mesh federation?",
    "answer": "East-West Gateways pass mTLS traffic securely between clusters over port 15443 using AUTO_PASSTHROUGH, enabling cross-cluster endpoint discovery and failover."
  },

{
    "id": 240,
    "subject": "terraform",
    "tag": "Declarative Mindset",
    "question": "How does the Monk metaphor distinguish ClickOps from Declarative Infrastructure?",
    "answer": "ClickOps is chaotic manual clicking in web consoles; Declarative IaC is painting a sacred blueprint—defining the desired final state in code and letting Terraform safely manifest reality."
  },
  {
    "id": 241,
    "subject": "terraform",
    "tag": "KISS Principle",
    "question": "What is the KISS mental model comparing Imperative vs. Declarative logic?",
    "answer": "Imperative (Bash/Python) is a 50-step cooking recipe where one failed step ruins everything. Declarative (Terraform) is ordering a specific dish from a restaurant menu."
  },
  {
    "id": 242,
    "subject": "terraform",
    "tag": "DevSecOps Mindset",
    "question": "Why does the rule of Immutable Infrastructure forbid manual cloud console modifications?",
    "answer": "Because manual console tweaks cause invisible 'configuration drift', security vulnerabilities, and unrepeatable environments. Code must remain the single source of truth."
  },
  {
    "id": 243,
    "subject": "terraform",
    "tag": "Workflow Rituals",
    "question": "What are the three sacred commands of the Terraform deployment ritual?",
    "answer": "`terraform init` downloads provider plugins, `terraform plan` previews dry-run changes safely, and `terraform apply` manifests the approved state in the cloud."
  },
  {
    "id": 244,
    "subject": "terraform",
    "tag": "State Governance",
    "question": "Why is local `terraform.tfstate` considered a severe security anti-pattern?",
    "answer": "Local state stores passwords in plain text on developer laptops, crashes easily, and allows team members to run conflicting updates that destroy cloud state."
  },
  {
    "id": 245,
    "subject": "terraform",
    "tag": "The Temple Guard",
    "question": "How do S3 and DynamoDB collaborate as 'The Temple Guard' for remote state?",
    "answer": "Encrypted S3 provides durable, versioned storage for the sacred state file, while DynamoDB applies a lock string during execution to prevent simultaneous race conditions."
  },
  {
    "id": 246,
    "subject": "terraform",
    "tag": "Secret Hygiene",
    "question": "How do you prevent database passwords from leaking in Terraform terminal output?",
    "answer": "Mark input variables with `sensitive = true` and pass values via `TF_VAR_` environment variables or secret managers rather than hardcoding them on disk."
  },
  {
    "id": 247,
    "subject": "terraform",
    "tag": "Modular Dojo",
    "question": "What is the core benefit of sculpting reusable modules over copy-pasting HCL code?",
    "answer": "Copy-pasting multiplies security bugs across files. A reusable module centralizes security hardening and input validation into a single, version-pinned building block."
  },
  {
    "id": 248,
    "subject": "terraform",
    "tag": "Environment Isolation",
    "question": "Why is directory-based isolation safer than Terraform CLI workspaces for production?",
    "answer": "CLI workspaces share cloud credentials and rely on manual switching—one misstep can wipe prod. Directory separation strictly decouples state keys and IAM permissions."
  },
  {
    "id": 249,
    "subject": "terraform",
    "tag": "Static Security Scans",
    "question": "When should static analysis tools like `tflint` and `checkov` be executed?",
    "answer": "Inside developer pre-commit hooks and CI pipelines—catching syntax bugs, unencrypted storage, and open firewall rules before code ever touches the cloud."
  },
  {
    "id": 250,
    "subject": "terraform",
    "tag": "OIDC Authentication",
    "question": "Why does OpenID Connect (OIDC) replace static AWS access keys in CI/CD pipelines?",
    "answer": "OIDC eliminates leaked master keys by issuing short-lived, 15-minute temporary tokens granted strictly to authenticated, single-use pipeline runners."
  },
  {
    "id": 251,
    "subject": "terraform",
    "tag": "Declarative Import",
    "question": "How does Terraform 1.5+ adopt legacy unmanaged cloud resources without downtime?",
    "answer": "Using native `import {}` blocks and `terraform plan -generate-config-out`, auto-generating clean HCL code while bringing live resources safely into state."
  },
  {
    "id": 252,
    "subject": "terraform",
    "tag": "Drift Healing",
    "question": "How does an Unshakable Pipeline implement continuous watchfulness and self-healing?",
    "answer": "By running scheduled `terraform plan -detailed-exitcode` checks to spot console modifications, automatically reconciling infrastructure back to the Git baseline."
  },

{
    "id": 253,
    "subject": "prometheus-observability",

    "tag": "Monk Mindset (Pull vs Push)",
    "question": "How does the Monk's Monastery Elder metaphor explain Prometheus's pull architecture over traditional push monitoring?",
    "answer": "Instead of 500 monks frantically shouting at the Elder's door at once ('Push Disorder'), the Elder calmly opens his eyes at predictable intervals to observe everyone ('The Zen of Pull'). This prevents telemetry server crashes during high-volume flash sales."
  },
  {
    "id": 254,
    "subject": "prometheus-observability",

    "tag": "Signals of Clarity",
    "question": "What is the KISS distinction between Metrics, Logs, and Traces in production observability?",
    "answer": "Metrics answer 'Is something breaking right now?' (cheap numeric heartbeat), Logs answer 'Why did it break?' (detailed event diary), and Traces answer 'Where is the delay?' (distributed request journey)."
  },
  {
    "id": 255,
    "subject": "prometheus-observability",

    "tag": "Core Data Types",
    "question": "Why should you never query a raw Prometheus Counter metric directly in a Grafana dashboard?",
    "answer": "Counters only go up (like mala beads counted during meditation). Querying a raw counter gives cumulative totals rather than current activity; always wrap counters in rate() or increase() to measure velocity over time."
  },
  {
    "id": 256,
    "subject": "prometheus-observability",

    "tag": "Histograms vs Summaries",
    "question": "In a dynamic Kubernetes cluster, why choose Histograms over Summaries for tracking API request latency?",
    "answer": "Histograms sort data into client-side buckets that can be aggregated across thousands of dynamic pods using PromQL's histogram_quantile(), whereas Summaries calculate quantiles locally and cannot be combined across pods."
  },
  {
    "id": 257,
    "subject": "prometheus-observability",

    "tag": "Instant vs Range Vectors",
    "question": "What is the visual and technical difference between an Instant Vector and a Range Vector in PromQL?",
    "answer": "An Instant Vector is a single-point snapshot ('now') ready to plot as a point on a graph. A Range Vector holds a buffer of historical data points over a time window (e.g., [5m]) and must be converted by rate() before graphing."
  },
  {
    "id": 258,
    "subject": "prometheus-observability",

    "tag": "PromQL Resilience",
    "question": "How does PromQL's rate() function handle a microservice crash and counter reset gracefully?",
    "answer": "rate() automatically detects when a counter drops back to zero upon container restart and compensates for the reset, preserving smooth, accurate request rates without breaking your dashboard graphs."
  },
  {
    "id": 259,
    "subject": "prometheus-observability",

    "tag": "Cardinality Explosions",
    "question": "What causes a high-cardinality explosion in Prometheus TSDB memory, and how do you neutralize it?",
    "answer": "Attaching dynamic user parameters (User IDs, Order IDs, IP addresses) as metric labels creates millions of unique time-series streams in RAM. Fix it by dropping dynamic labels at scrape time or shifting user tracing to OpenTelemetry."
  },
  {
    "id": 260,
    "subject": "prometheus-observability",

    "tag": "Alertmanager Discipline",
    "question": "How do Alertmanager inhibition rules enforce noise reduction during a major infrastructure outage?",
    "answer": "Inhibition rules automatically mute downstream application alerts when a core root-dependency (such as a Network Switch or Kubernetes Host Node) is already confirmed down, keeping on-call engineers focused on the root cause."
  },
  {
    "id": 261,
    "subject": "prometheus-observability",

    "tag": "Declarative Auto-Discovery",
    "question": "How does a ServiceMonitor CRD automate Kubernetes target discovery without restarting Prometheus?",
    "answer": "ServiceMonitors use label selectors to match target Kubernetes Services automatically. When a new microservice pod appears inside the matching label selector, the Prometheus Operator detects it and begins scraping instantly."
  },
  {
    "id": 262,
    "subject": "prometheus-observability",

    "tag": "Selector Binding Chain",
    "question": "What are the three mandatory label-matching links required for Prometheus Operator auto-discovery to work?",
    "answer": "Link 1: Prometheus serviceMonitorSelector matches ServiceMonitor labels. Link 2: ServiceMonitor selector matches Kubernetes Service labels. Link 3: Kubernetes Service selector matches target Pod labels and named port."
  },
  {
    "id": 263,
    "subject": "prometheus-observability",

    "tag": "ServiceMonitor vs PodMonitor",
    "question": "When should you deploy a PodMonitor CRD instead of a standard ServiceMonitor CRD in Kubernetes?",
    "answer": "Deploy a PodMonitor when targeting dynamic pods that do not expose a Kubernetes ClusterIP Service abstraction, such as auto-scaled background queue workers, DaemonSets, or standalone batch jobs."
  },
  {
    "id": 264,
    "subject": "prometheus-observability",

    "tag": "Declarative Alert Rules",
    "question": "What is the DevSecOps advantage of using the PrometheusRule CRD over traditional mounted ConfigMaps?",
    "answer": "PrometheusRule manifests allow alerting rules to be managed as native, schema-validated Kubernetes YAML objects that hot-reload dynamically across namespaces without requiring pod restarts or manual mounts."
  },
  {
    "id": 265,
    "subject": "prometheus-observability",

    "tag": "DevSecOps Scrape Security",
    "question": "What three security controls are required to protect internal /metrics endpoints under PCI-DSS or HIPAA audit standards?",
    "answer": "1) Mutual TLS (mTLS) for encrypted transport, 2) Bearer Token authentication headers to restrict access, and 3) Container Security Context enforcing non-root execution (runAsUser: 65534)."
  },
  {
    "id": 266,
    "subject": "prometheus-observability",

    "tag": "OOMKill Prevention",
    "question": "How does configuring GOMEMLIMIT prevent Prometheus StatefulSets from getting OOMKilled under traffic surges?",
    "answer": "Setting GOMEMLIMIT to 80% of the container's hard memory limit forces the Go runtime garbage collector to run aggressively before the Linux kernel OOM-killer terminates the monitoring process."
  },
  {
    "id": 267,
    "subject": "prometheus-observability",

    "tag": "High Availability Pairs",
    "question": "How do Prometheus HA Pairs achieve zero-downtime monitoring without complex consensus protocols like Raft?",
    "answer": "HA Pairs run side-by-side, scraping identical targets independently with zero cross-communication. Duplicate alerts sent by both instances are seamlessly deduplicated by the shared Alertmanager cluster."
  },
  {
    "id": 268,
    "subject": "prometheus-observability",

    "tag": "Long-Term Archiving",
    "question": "How does the Thanos Sidecar architecture enable multi-year metric retention without exploding local volume storage costs?",
    "answer": "Thanos Sidecar continuously offloads compressed 2-hour TSDB blocks from local disk to Cloud Object Storage (S3/GCS), keeping local SSD storage minimal while Thanos Querier fetches historical data seamlessly."
  },
  {
    "id": 269,
    "subject": "prometheus-observability",

    "tag": "The Error Budget Middle Way",
    "question": "What is the Monk principle behind replacing rigid uptime targets with a calculated Error Budget?",
    "answer": "Demanding 100% uptime creates rigidity and 3:00 AM alert fatigue. An Error Budget calculates acceptable failure (100% - SLO), allowing teams to innovate and paging engineers ONLY when the budget burns dangerously fast."
  },
  {
    "id": 270,
    "subject": "prometheus-observability",

    "tag": "Dual-Window Burn-Rate Alerting",
    "question": "Why do production SLO burn-rate alerts require BOTH a short window (5m) and long window (1h) condition?",
    "answer": "The short window verifies the emergency is happening right now, while the long window proves the burn rate is sustained enough to threaten the monthly budget, eliminating false alarms from 15-second traffic blips."
  },
  {
    "id": 271,
    "subject": "prometheus-observability",

    "tag": "4-Step Incident Triage",
    "question": "What are the four disciplined steps in the Monk's Production Incident Triage sequence when an SLO alert fires?",
    "answer": "1) Detect (confirm budget burn rate alert), 2) Isolate (check target scrape health & up == 0), 3) Inspect (resource pressure, GC latency & cardinality), and 4) Mitigate (rollback release or scale replicas)."
  },
  {
    "id": 272,
    "subject": "prometheus-observability",

    "tag": "Production Readiness Oath",
    "question": "What are the top three audit items on the Monk's Production Readiness Checklist before going live?",
    "answer": "1) Non-root execution and mTLS/Bearer security on all scrapes, 2) Hard disk retention limits (--storage.tsdb.retention.size) paired with GOMEMLIMIT, and 3) Multi-window burn-rate SLO alerts replacing raw threshold noise."
  },

 {
    "id": 273,
    "subject": "grafana-observability",
    "tag": "Sattvic Observability",
    "question": "What is 'Sattvic Observability' in DevSecOps, and how does Grafana serve as the Monk's Mirror?",
    "answer": "Sattvic Observability is achieving total clarity by consolidating metrics, logs, and traces into a single pane of glass—reflecting system health instantly without cognitive noise or panic."
  },
  {
    "id": 274,
    "subject": "grafana-observability",
    "tag": "Observability Trinity",
    "question": "What are the 'Three Eyes of the Monk' in system monitoring, and what is each eye's core purpose?",
    "answer": "Metrics (The Pulse for fast health detection), Logs (The Journal for discrete event context), and Traces (The Footprints for end-to-end distributed request paths)."
  },
  {
    "id": 275,
    "subject": "grafana-observability",
    "tag": "Production Backend",
    "question": "Why must production Grafana replace embedded SQLite with a hardened PostgreSQL cluster?",
    "answer": "SQLite locks under concurrent writes and lacks High Availability. External PostgreSQL enables stateless multi-node scaling, encrypted backups, and high concurrency."
  },
  {
    "id": 276,
    "subject": "grafana-observability",
    "tag": "Backend Hardening",
    "question": "Which database connection parameters ensure production-grade security between Grafana and PostgreSQL?",
    "answer": "Using SCRAM-SHA-256 password encryption, restricting schema permissions to a dedicated user, and setting ssl_mode = verify-full with valid CA certs."
  },
  {
    "id": 277,
    "subject": "grafana-observability",
    "tag": "Dashboard Hygiene",
    "question": "What is the '5-Second Zen Rule' for Grafana dashboard design?",
    "answer": "If an engineer cannot determine system health and the failing component within 5 seconds during an outage, the dashboard has too much cognitive bloat."
  },
  {
    "id": 278,
    "subject": "grafana-observability",
    "tag": "RED Method",
    "question": "What three core panels form the RED Method mandala for service monitoring?",
    "answer": "Rate (Requests per second), Errors (HTTP 5xx failure rate percentage), and Duration (95th/99th percentile latency in seconds)."
  },
  {
    "id": 279,
    "subject": "grafana-observability",
    "tag": "PromQL Fundamentals",
    "question": "How do you calculate per-second request throughput across microservices in PromQL?",
    "answer": "Using 'sum(rate(http_requests_total[5m])) by (service)', which computes the 5-minute growth rate of the counter and aggregates it by service."
  },
  {
    "id": 280,
    "subject": "grafana-observability",
    "tag": "LogQL Fundamentals",
    "question": "How do you convert error log occurrences into a numeric time-series graph in LogQL?",
    "answer": "Using 'sum(count_over_time({app=\"checkout\"} |= \"ERROR\" [1m]))', which counts matching log lines over 1-minute sliding windows."
  },
  {
    "id": 281,
    "subject": "grafana-observability",
    "tag": "Alerting Philosophy",
    "question": "What is the difference between a 'Cause-Based Siren' and a 'Temple Bell' alert?",
    "answer": "Cause sirens panic teams on transient metric spikes (e.g. 80% CPU). Temple Bells alert only on actionable user-facing SLO breaches (e.g. error rate > 5% for 2m)."
  },
  {
    "id": 282,
    "subject": "grafana-observability",
    "tag": "Host Health PromQL",
    "question": "What PromQL formula measures real-time non-idle CPU workload across a server?",
    "answer": "'100 - (avg by (instance) (rate(node_cpu_seconds_total{mode=\"idle\"}[1m])) * 100)', subtracting idle CPU time from 100."
  },
  {
    "id": 283,
    "subject": "grafana-observability",
    "tag": "Dynamic Variables",
    "question": "How do dynamic Grafana variables eliminate 'ClickOps' and static panel clutter?",
    "answer": "Variables replace hardcoded parameters with dynamic query dropdowns like 'label_values(up, env)', letting one dashboard filter across all environments."
  },
  {
    "id": 284,
    "subject": "grafana-observability",
    "tag": "Chained Variables",
    "question": "What is a chained variable in Grafana, and how is it constructed?",
    "answer": "A variable whose values depend on a prior selection—e.g. 'label_values(up{env=\"$env\"}, job)', filtering services based on the selected environment."
  },
  {
    "id": 285,
    "subject": "grafana-observability",
    "tag": "High Availability",
    "question": "How do stateless Grafana cluster nodes share user sessions without dropping logged-in users?",
    "answer": "By offloading session storage from local memory/disk to an encrypted Redis cluster configured via the '[session] provider = redis' setting in grafana.ini."
  },
  {
    "id": 286,
    "subject": "grafana-observability",
    "tag": "GitOps & IaC",
    "question": "Why should Grafana resources be managed via Terraform ('grafana/grafana') rather than manual UI clicks?",
    "answer": "Terraform ensures version-controlled, audit-ready dashboard code, prevents multi-environment configuration drift, and automates CI/CD rollouts."
  },
  {
    "id": 287,
    "subject": "grafana-observability",
    "tag": "Enterprise IAM",
    "question": "How does OIDC/OAuth2 Keycloak integration enforce Zero-Trust access in Grafana?",
    "answer": "It eliminates local passwords and maps enterprise Keycloak group claims directly to Grafana roles (Admin, Editor, Viewer) with forced MFA."
  },
  {
    "id": 288,
    "subject": "grafana-observability",
    "tag": "Secrets Management",
    "question": "How do you prevent database credentials and API tokens from leaking in Grafana Git manifests?",
    "answer": "Inject secrets at container runtime using HashiCorp Vault environment variables (e.g. '$VAULT_KEYCLOAK_CLIENT_SECRET') instead of plain text."
  },
  {
    "id": 289,
    "subject": "grafana-observability",
    "tag": "FinTech Correlation",
    "question": "How do Loki derived fields bridge the gap between log lines and distributed traces in FinTech payment gateways?",
    "answer": "By extracting 'trace_id' from JSON log lines with regex, creating a clickable 'Zen Trace Hop' directly from Grafana log panels into Tempo traces."
  },
  {
    "id": 290,
    "subject": "grafana-observability",
    "tag": "Healthcare Compliance",
    "question": "How does Promtail enforce HIPAA compliance at the log ingestion edge?",
    "answer": "By applying pipeline replace stages with regex masks to redact Social Security Numbers and Patient Medical Record Numbers before pushing logs to Loki."
  },
  {
    "id": 291,
    "subject": "grafana-observability",
    "tag": "E-Commerce Scaling",
    "question": "How do you monitor a pod fleet that auto-scales from 5 to 50 instances without overcrowding the graph?",
    "answer": "Plot fleet summary metrics ('avg', 'quantile(0.95)', 'max') over a regex pod variable instead of rendering individual pod lines."
  },

 {
    "id": 292,
    "subject": "alert-manager",
    "tag": "Alert Fatigue",
    "question": "Why does ringing the 'temple bell' for every minor metric spike destroy operational security?",
    "answer": "Continuous noise creates alert fatigue. When engineers are desensitized by non-actionable notifications, critical production outages get buried. True operational mindfulness means alerting only when immediate human action is required."
  },
  {
    "id": 293,
    "subject": "alert-manager",
    "tag": "Separation of Concerns",
    "question": "In the Monk metaphor, what is the difference between Prometheus (The Watchman) and Alertmanager (The Wise Messenger)?",
    "answer": "Prometheus observes metrics in calm silence and evaluates rules (The Watchman). Alertmanager decides who gets awakened by deduplicating, grouping, inhibiting, and routing alerts to the right teams (The Wise Messenger)."
  },
  {
    "id": 294,
    "subject": "alert-manager",
    "tag": "Golden Rules",
    "question": "What is the fundamental rule regarding symptoms vs. causes in Zen Alerting?",
    "answer": "Always alert on user-impacting symptoms (e.g., HTTP 500 checkout failures), not transient causes (e.g., CPU at 85%). If an alert requires no immediate action within 15 minutes, demote it to a log or dashboard."
  },
  {
    "id": 295,
    "subject": "alert-manager",
    "tag": "Pillar 1: Grouping",
    "question": "How does Grouping prevent notification storms during a cascading outage?",
    "answer": "Grouping aggregates alerts sharing common labels (e.g., cluster, namespace) into a single unified notification buffer during a group_wait window, turning 50 individual pod alerts into 1 structured digest."
  },
  {
    "id": 296,
    "subject": "alert-manager",
    "tag": "Pillar 2: Inhibition",
    "question": "What is Alertmanager Inhibition and why is the 'equal' label parameter critical?",
    "answer": "Inhibition mutes secondary symptom alerts when a root-cause alert is already firing. The 'equal' array ensures suppression only occurs within the same boundary (e.g., equal: ['cluster']), preventing an outage in region A from muting region B."
  },
  {
    "id": 297,
    "subject": "alert-manager",
    "tag": "Pillar 3: Silencing",
    "question": "How does Silencing differ from stopping Prometheus alerting rules during maintenance?",
    "answer": "Silencing is a non-destructive, time-bound mute applied in Alertmanager. Prometheus continues to evaluate metrics and record alerts, but Alertmanager suppresses dispatching notifications to receivers during planned work."
  },
  {
    "id": 298,
    "subject": "alert-manager",
    "tag": "Route Tree Logic",
    "question": "What happens when 'continue: true' is configured on a child route in Alertmanager?",
    "answer": "By default, routing stops at the first matching node. Setting 'continue: true' forces Alertmanager to send the notification to the matched receiver AND continue evaluating sibling routes (e.g., paging SOC while logging to Slack)."
  },
  {
    "id": 299,
    "subject": "alert-manager",
    "tag": "Scriptures of Precision",
    "question": "What are the five core top-level blocks inside a production alertmanager.yml configuration?",
    "answer": "global (default settings/credentials), templates (custom Go notification files), route (grouping and route tree), inhibit_rules (cross-alert suppression), and receivers (external dispatch channels like PagerDuty or Slack)."
  },
  {
    "id": 300,
    "subject": "alert-manager",
    "tag": "Timing Throttles",
    "question": "What is the functional difference between group_wait, group_interval, and repeat_interval?",
    "answer": "group_wait buffers the initial batch before sending the first alert; group_interval waits before sending updates about NEW alerts joining an existing group; repeat_interval waits before re-sending unchanged firing alerts."
  },
  {
    "id": 301,
    "subject": "alert-manager",
    "tag": "Go Templating",
    "question": "Why should production notifications always include dynamic runbook URLs in custom Go templates?",
    "answer": "Including runbook_url in notification templates gives on-call engineers instant, 1-click access to Emergency Operating Procedures during 3 AM incidents, eliminating manual wiki searches under pressure."
  },
  {
    "id": 302,
    "subject": "alert-manager",
    "tag": "amtool Linting",
    "question": "Which two amtool commands must be executed before deploying an updated alertmanager.yml to production?",
    "answer": "Run 'amtool check-config <file>' to catch YAML syntax errors, and 'amtool config routes test' to simulate and verify that sample alert labels match the intended team receiver."
  },
  {
    "id": 303,
    "subject": "alert-manager",
    "tag": "The Monastery Workshop",
    "question": "Why is local fault injection (trial by fire) essential before launching alerting pipelines?",
    "answer": "Testing alerts in a local Docker Compose sandbox by intentionally injecting faults ensures your rules transition properly from Pending to Firing, verify webhook delivery, and catch routing bugs before real production outages."
  },
  {
    "id": 304,
    "subject": "alert-manager",
    "tag": "Debugging 'The Muted Bell'",
    "question": "What common configuration mistake causes an inhibition rule to silently drop ALL system alerts?",
    "answer": "Omitting specific alertname or severity matchers in target_match. If source_match and target_match only check environment: 'prod', the first firing alert will suppress every other alert across the entire infrastructure."
  },
  {
    "id": 305,
    "subject": "alert-manager",
    "tag": "Automated Silences",
    "question": "How should DevSecOps teams handle scheduled database snapshots in CI/CD automation pipelines?",
    "answer": "Use the Alertmanager REST API or amtool CLI to programmatically create an automated, time-bound silence 2 minutes before the backup starts, and automatically expire the silence upon completion."
  },
  {
    "id": 306,
    "subject": "alert-manager",
    "tag": "Actionability Check",
    "question": "What simple Nudge Test determines whether an alert belongs in PagerDuty versus a Slack summary channel?",
    "answer": "The 15-Minute Actionability Test: If an alert wakes an engineer at 3 AM but requires no immediate human intervention within 15 minutes, demote it to a daily Slack summary or dashboard."
  },

{
    "id": 307,
    "subject": "argocd-mastery",
    "tag": "Monk's Wisdom & GitOps",
    "question": "Why is ArgoCD's pull-based GitOps model compared to a monk holding up a mirror?",
    "answer": "Because like a monk calmly reflecting reality to wipe away dust, ArgoCD sits inside the cluster, constantly mirroring Git against live state to automatically heal drift without violent external force."
  },
  {
    "id": 308,
    "subject": "argocd-mastery",
    "tag": "Pull vs Push Security",
    "question": "Why does the pull-based model offer superior DevSecOps protection over traditional push pipelines?",
    "answer": "In the push model, CI runners hold broad cluster-admin credentials outside the cluster. ArgoCD pulls from inside, keeping sensitive cluster keys locked safely within cluster boundaries."
  },
  {
    "id": 309,
    "subject": "argocd-mastery",
    "tag": "Continuous Reconciliation",
    "question": "What three simple steps make up ArgoCD's continuous reconciliation loop?",
    "answer": "Observe (query Git and cluster API), Diff (compute structural drift between target and live states), and Act (auto-heal or alert to restore harmony)."
  },
  {
    "id": 310,
    "subject": "argocd-mastery",
    "tag": "Application CRD",
    "question": "What do the 'prune: true' and 'selfHeal: true' settings nudge your cluster to do?",
    "answer": "Prune automatically cleans up deleted resources when removed from Git, while selfHeal instantly overrides manual 'kubectl edit' changes back to the verified Git state."
  },
  {
    "id": 311,
    "subject": "argocd-mastery",
    "tag": "App-of-Apps & ApplicationSet",
    "question": "How does the Monk of GitOps manage hundreds of microservices across multiple sanctuaries without fatigue?",
    "answer": "Using the App-of-Apps pattern or ApplicationSets with Generators to dynamically discover and bootstrap entire cluster fleets from a single Git directory structure."
  },
  {
    "id": 312,
    "subject": "argocd-mastery",
    "tag": "Identity & SSO",
    "question": "Why should production ArgoCD instances immediately disable static local user accounts?",
    "answer": "Because centralizing identity via enterprise OIDC (Okta, Keycloak) enforces single-source authentication and lets you grant precise, role-based access based on group memberships."
  },
  {
    "id": 313,
    "subject": "argocd-mastery",
    "tag": "Least Privilege RBAC",
    "question": "What simple rule guides Casbin RBAC policies in argocd-rbac-cm?",
    "answer": "Default everyone to 'role:readonly', granting 'sync' and 'get' permissions strictly for specific application namespaces assigned to their team."
  },
  {
    "id": 314,
    "subject": "argocd-mastery",
    "tag": "Zero-Trust Secrets",
    "question": "How do Sealed Secrets protect raw API passwords stored in public Git repositories?",
    "answer": "Engineers encrypt secrets locally using the cluster's public certificate. Only the cluster's private controller holds the key to decrypt the SealedSecret manifest back into a live Secret."
  },
  {
    "id": 315,
    "subject": "argocd-mastery",
    "tag": "Progressive Delivery",
    "question": "How does Argo Rollouts apply the Monk's tea master metaphor during a release?",
    "answer": "Instead of pouring a full boiling kettle over guests, it routes a tiny 5% droplet of traffic to new pods first, testing health before opening the valve completely."
  },
  {
    "id": 316,
    "subject": "argocd-mastery",
    "tag": "Canary vs Blue-Green",
    "question": "When should you choose a Blue/Green deployment over a Canary release?",
    "answer": "Use Blue/Green when you need instant, sub-second traffic cutovers and pre-release synthetic testing on an isolated preview environment."
  },
  {
    "id": 317,
    "subject": "argocd-mastery",
    "tag": "Automated Analysis",
    "question": "How does an AnalysisTemplate act as an automated watchman during a rollout?",
    "answer": "It continuously queries Prometheus metrics (like HTTP error rates or latency). If thresholds fail, it automatically aborts the rollout and restores 100% stable traffic."
  },
  {
    "id": 318,
    "subject": "argocd-mastery",
    "tag": "High Availability",
    "question": "Why is a 3-node HA Redis Sentinel cluster required for production ArgoCD?",
    "answer": "Because a single Redis instance creates a single point of failure; an HA Sentinel cluster ensures cached state and session routing survive pod crashes without downtime."
  },
  {
    "id": 319,
    "subject": "argocd-mastery",
    "tag": "Controller Sharding",
    "question": "How does ArgoCD scale when managing thousands of Kubernetes resources simultaneously?",
    "answer": "By running the argocd-application-controller as a sharded StatefulSet, distributing application reconciliation across multiple replica workers."
  },
  {
    "id": 320,
    "subject": "argocd-mastery",
    "tag": "Observability & Alerts",
    "question": "Which three core triggers in argocd-notifications give teams immediate operational clarity?",
    "answer": "'on-deployed' (success confirmation), 'on-health-degraded' (urgent crash alert), and 'on-sync-failed' (manifest syntax blocking reconciliation)."
  },
  {
    "id": 321,
    "subject": "argocd-mastery",
    "tag": "Disaster Recovery",
    "question": "How can you rebuild a completely wiped ArgoCD management cluster in minutes?",
    "answer": "Run 'argocd-util admin export' regularly to back up all applications, clusters, and settings, then restore them into a fresh cluster using 'argocd-util admin import'."
  },
  {
    "id": 322,
    "subject": "argocd-mastery",
    "tag": "Self-Reflection Checkpoint",
    "question": "What micro-checkpoint question ensures your GitOps architecture stays truly Production-Grade?",
    "answer": "'If my central management cluster vanished right now, can my team restore full deployment capabilities from Git without manual cluster intervention?'"
  }

  ];

  let filteredDeck = [];
  let currentIndex = 0;

  // Inject Modern Themed CSS
  const style = document.createElement('style');
  style.textContent = `
    #db-quiz-root, #db-quiz-root * {
      -webkit-user-select: none !important;
      -moz-user-select: none !important;
      -ms-user-select: none !important;
      user-select: none !important;
    }
    .db-flashcard-wrapper {
      --db-bg: #f8fafc;
      --db-card-front: #ffffff;
      --db-card-back: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
      --db-text: #0f172a;
      --db-text-muted: #64748b;
      --db-border: #e2e8f0;
      --db-accent: #2563eb;
      --db-accent-hover: #1d4ed8;
      --db-btn-bg: #f1f5f9;
      --db-btn-text: #334155;
      --db-shadow: 0 12px 30px -8px rgba(15, 23, 42, 0.08), 0 4px 12px -4px rgba(15, 23, 42, 0.03);
      --db-tag-bg: #eff6ff;
      --db-tag-color: #2563eb;
      
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, sans-serif;
      max-width: 720px;
      margin: 0 auto;
      padding: 24px 16px;
      background: var(--db-bg);
      border-radius: 20px;
      transition: background-color 0.3s ease, color 0.3s ease;
      color: var(--db-text);
      box-sizing: border-box;
    }
    .db-flashcard-wrapper.dark-mode {
      --db-bg: #0f172a;
      --db-card-front: #1e293b;
      --db-card-back: linear-gradient(135deg, #0284c7 0%, #1e1b4b 100%);
      --db-text: #f8fafc;
      --db-text-muted: #94a3b8;
      --db-border: #334155;
      --db-accent: #38bdf8;
      --db-accent-hover: #0284c7;
      --db-btn-bg: #334155;
      --db-btn-text: #f1f5f9;
      --db-shadow: 0 12px 30px -8px rgba(0, 0, 0, 0.5);
      --db-tag-bg: #1e3a8a;
      --db-tag-color: #93c5fd;
    }
    .db-top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      gap: 12px;
    }
    .db-title-area {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .db-theme-toggle {
      background: var(--db-btn-bg);
      color: var(--db-btn-text);
      border: 1px solid var(--db-border);
      padding: 8px 14px;
      border-radius: 24px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s ease;
    }
    .db-theme-toggle:hover {
      transform: translateY(-1px);
    }
    .db-controls {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 20px;
    }
    .db-select, .db-input {
      padding: 12px 16px;
      font-size: 15px;
      border: 1px solid var(--db-border);
      border-radius: 12px;
      outline: none;
      background: var(--db-card-front);
      color: var(--db-text);
      box-sizing: border-box;
      transition: border-color 0.2s ease;
    }
    .db-select:focus, .db-input:focus {
      border-color: var(--db-accent);
    }
    .db-select { flex: 1 1 200px; font-weight: 600; cursor: pointer; }
    .db-input { flex: 1 1 200px; }
    .db-progress-bar-container {
      width: 100%;
      height: 6px;
      background: var(--db-border);
      border-radius: 4px;
      overflow: hidden;
      margin-bottom: 20px;
    }
    .db-progress-bar-fill {
      height: 100%;
      background: var(--db-accent);
      width: 0%;
      transition: width 0.3s ease;
    }
    .db-card-scene {
      width: 100%;
      height: 340px;
      perspective: 1200px;
      cursor: pointer;
    }
    .db-card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
      transform-style: preserve-3d;
      box-shadow: var(--db-shadow);
      border-radius: 20px;
    }
    .db-card-scene.is-flipped .db-card-inner {
      transform: rotateY(180deg);
    }
    .db-card-front, .db-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 20px;
      padding: 32px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      border: 1px solid var(--db-border);
    }
    .db-card-front {
      background: var(--db-card-front);
      color: var(--db-text);
    }
    .db-card-back {
      background: var(--db-card-back);
      color: #ffffff;
      transform: rotateY(180deg);
    }
    .db-card-tag {
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: 6px 14px;
      border-radius: 20px;
      background: var(--db-tag-bg);
      color: var(--db-tag-color);
    }
    .db-card-back .db-card-tag {
      background: rgba(255, 255, 255, 0.2);
      color: #e0f2fe;
    }
    .db-card-body {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
      margin: 16px 0;
    }
    .db-question {
      font-size: 20px;
      font-weight: 600;
      line-height: 1.45;
      margin: 0;
    }
    .db-answer {
      font-size: 17px;
      line-height: 1.55;
      margin: 0;
      color: #f1f5f9;
    }
    .db-card-hint {
      font-size: 13px;
      color: var(--db-text-muted);
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .db-card-back .db-card-hint {
      color: #bae6fd;
    }
    .db-deck-nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 24px;
      gap: 10px;
    }
    .db-btn {
      background: var(--db-accent);
      color: #ffffff;
      border: none;
      padding: 12px 20px;
      font-size: 14px;
      font-weight: 600;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .db-btn:hover {
      background: var(--db-accent-hover);
      transform: translateY(-1px);
    }
    .db-btn-secondary {
      background: var(--db-btn-bg);
      color: var(--db-btn-text);
      border: 1px solid var(--db-border);
    }
    .db-btn-secondary:hover {
      background: var(--db-border);
    }
    .db-progress {
      font-size: 14px;
      font-weight: 600;
      color: var(--db-text-muted);
    }
  `;
  document.head.appendChild(style);

  // Inject UI Shell
  container.innerHTML = `
    <div id="dbWrapper" class="db-flashcard-wrapper">
      <div class="db-top-bar">
        <div class="db-title-area">
          <span style="font-size: 20px;">⚡</span>
          <span style="font-weight: 700; font-size: 16px;">DevOps Beacon Deck</span>
        </div>
        <button id="dbThemeToggle" class="db-theme-toggle">
          <span id="dbThemeIcon">🌙</span> <span id="dbThemeLabel">Dark Mode</span>
        </button>
      </div>
      <div class="db-controls">
        <select id="dbSubjectSelect" class="db-select">
            <option value="ai-llm">🧠 1. AI & LLM Fundamentals</option>
            <option value="llm-mechanics">⚡ 2. LLM Mechanics & Tokens</option>
            <option value="mcp">🔌 3. Model Context Protocol</option>
            <option value="agentic-ai">🤖 4. Agentic AI & ReAct Loops</option>
            <option value="docker-fundamentals">🐳 5. Docker Fundamentals</option>
            <option value="jenkins">⚙️ 6. Jenkins</option>
            <option value="gitlab-ci">🦊 7. GitLab CI</option>
            <option value="azure-devops">☁️ 8. Azure DevOps</option>
            <option value="sast-sonarqube">🧘‍♂️ 9. Mindful SAST & SonarQube</option>
            <option value="springboot">🍃 10. Spring Boot API, Docker & Kubernetes Fundamentals</option>
            
            <option value="kubernetes-devsecops">☸️ 11. Kubernetes</option>
            <option value="istio">☸️ 12. Istio Service Mesh</option>
            <option value="terraform">🧘 13. Terraform</option>
            <option value="prometheus-observability">🎯 14. Prometheus</option>
            <option value="grafana-observability">🧘 15. Grafana</option>
            <option value="alert-manager">🧘 16. Alert Manager</option>
            <option value="argocd-mastery">⛵ 17. ArgoCD - GitOps</option>
              
            
        </select>
        <input type="text" id="dbSearchInput" class="db-input" placeholder="Search keywords...">
      </div>
      <div class="db-progress-bar-container">
        <div id="dbProgressBar" class="db-progress-bar-fill"></div>
      </div>
      <div id="dbCardScene" class="db-card-scene">
        <div class="db-card-inner">
          <div class="db-card-front">
            <span id="dbCardTagFront" class="db-card-tag">Tag</span>
            <div class="db-card-body"><p id="dbQuestionText" class="db-question"></p></div>
            <span class="db-card-hint">💡 Click card or press [Space] to reveal answer</span>
          </div>
          <div class="db-card-back">
            <span id="dbCardTagBack" class="db-card-tag">Answer</span>
            <div class="db-card-body"><p id="dbAnswerText" class="db-answer"></p></div>
            <span class="db-card-hint">🔄 Click card to flip back</span>
          </div>
        </div>
      </div>
      <div class="db-deck-nav">
        <button id="dbPrevBtn" class="db-btn db-btn-secondary">← Previous</button>
        <button id="dbShuffleBtn" class="db-btn db-btn-secondary">🔀 Shuffle</button>
        <span id="dbProgressText" class="db-progress">Card 1 of 24</span>
        <button id="dbNextBtn" class="db-btn">Next →</button>
      </div>
    </div>
  `;

  // Theme Management
  const wrapper = document.getElementById('dbWrapper');
  const themeToggle = document.getElementById('dbThemeToggle');
  const themeIcon = document.getElementById('dbThemeIcon');
  const themeLabel = document.getElementById('dbThemeLabel');

  const savedTheme = localStorage.getItem('db-flashcard-theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  if (savedTheme === 'dark') {
    wrapper.classList.add('dark-mode');
    themeIcon.innerText = '☀️';
    themeLabel.innerText = 'Light Mode';
  }

  themeToggle.addEventListener('click', () => {
    wrapper.classList.toggle('dark-mode');
    const isDark = wrapper.classList.contains('dark-mode');
    themeIcon.innerText = isDark ? '☀️' : '🌙';
    themeLabel.innerText = isDark ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('db-flashcard-theme', isDark ? 'dark' : 'light');
  });

  // Filter & Render
  function filterDeck() {
    const selectedSubject = document.getElementById('dbSubjectSelect').value;
    const searchQuery = document.getElementById('dbSearchInput').value.toLowerCase().trim();
    filteredDeck = flashcardDatabase.filter(card => {
      return card.subject === selectedSubject && 
            (card.question.toLowerCase().includes(searchQuery) || 
             card.answer.toLowerCase().includes(searchQuery) ||
             card.tag.toLowerCase().includes(searchQuery));
    });
    currentIndex = 0;
    renderCard();
  }

  function renderCard() {
    const scene = document.getElementById('dbCardScene');
    scene.classList.remove('is-flipped');
    
    if (filteredDeck.length === 0) {
      document.getElementById('dbCardTagFront').innerText = "Notice";
      document.getElementById('dbQuestionText').innerText = "No flashcards found matching your query.";
      document.getElementById('dbAnswerText').innerText = "Clear your search filter.";
      document.getElementById('dbProgressText').innerText = "0 of 0";
      document.getElementById('dbProgressBar').style.width = "0%";
      return;
    }

    const card = filteredDeck[currentIndex];
    document.getElementById('dbCardTagFront').innerText = card.tag;
    document.getElementById('dbCardTagBack').innerText = card.tag;
    document.getElementById('dbQuestionText').innerText = card.question;
    document.getElementById('dbAnswerText').innerText = card.answer;
    document.getElementById('dbProgressText').innerText = `Card ${currentIndex + 1} of ${filteredDeck.length}`;
    
    const progressPercent = ((currentIndex + 1) / filteredDeck.length) * 100;
    document.getElementById('dbProgressBar').style.width = `${progressPercent}%`;
  }

  // Navigation & Keyboard Listeners
  document.getElementById('dbCardScene').addEventListener('click', () => {
    document.getElementById('dbCardScene').classList.toggle('is-flipped');
  });
  document.getElementById('dbSubjectSelect').addEventListener('change', filterDeck);
  document.getElementById('dbSearchInput').addEventListener('input', filterDeck);
  
  document.getElementById('dbNextBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    if (filteredDeck.length) { currentIndex = (currentIndex + 1) % filteredDeck.length; renderCard(); }
  });
  
  document.getElementById('dbPrevBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    if (filteredDeck.length) { currentIndex = (currentIndex - 1 + filteredDeck.length) % filteredDeck.length; renderCard(); }
  });

  document.getElementById('dbShuffleBtn').addEventListener('click', (e) => {
    e.stopPropagation();
    for (let i = filteredDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filteredDeck[i], filteredDeck[j]] = [filteredDeck[j], filteredDeck[i]];
    }
    currentIndex = 0;
    renderCard();
  });

  document.addEventListener('keydown', (e) => {
    if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'SELECT') return;
    if (e.key === 'ArrowRight') {
      if (filteredDeck.length) { currentIndex = (currentIndex + 1) % filteredDeck.length; renderCard(); }
    } else if (e.key === 'ArrowLeft') {
      if (filteredDeck.length) { currentIndex = (currentIndex - 1 + filteredDeck.length) % filteredDeck.length; renderCard(); }
    } else if (e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault();
      document.getElementById('dbCardScene').classList.toggle('is-flipped');
    }
  });

  filterDeck();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFlashcards);
} else {
  initFlashcards();
}
