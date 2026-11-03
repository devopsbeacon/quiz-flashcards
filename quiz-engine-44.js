/**
 * DevOps Beacon Quiz Engine v2.1 (with Passing Celebration)
 * GitHub: devopsbeacon/quiz
 */

(function () {
  const quizDataset = [
  {
    "subject": "docker_foundations",
    "subjectLabel": "Docker Foundations & Mindset",
    "question": "1. What is the primary characteristic of the Indian Monk mindset in container design?",
    "options": "WyJCdWlsZGluZyBoZWF2eSBndWVzdCBPUyBpbWFnZXMgd2l0aCBhbGwgZGVidWdnaW5nIHRvb2xzIGluY2x1ZGVkIiwiQ3JlYXRpbmcgY2xlYW4sIGVwaGVtZXJhbCwgc3RhdGVsZXNzIG1pY3JvLWVudmlyb25tZW50cyB0aGF0IGxlYXZlIHplcm8gdHJhY2Ugd2hlbiBkZXN0cm95ZWQiLCJFbmZvcmNpbmcgcGVybWFuZW50IHJvb3QgcGVybWlzc2lvbnMgYWNyb3NzIGFsbCBwcm9kdWN0aW9uIGNvbnRhaW5lcnMiLCJEZXBsb3lpbmcgbW9ub2xpdGhpYyBhcmNoaXRlY3R1cmVzIGluc2lkZSBzaW5nbGUgY29udGFpbmVycyJd",
    "answer": "MQ=="
  },
  {
    "subject": "docker_foundations",
    "subjectLabel": "Docker Foundations & Mindset",
    "question": "2. What occurs when a container is executed with the '--rm' runtime flag?",
    "options": "WyJJdCBydW5zIGNvbnRpbnVvdXNseSBpbiBkZXRhY2hlZCBiYWNrZ3JvdW5kIG1vZGUiLCJJdCBhdXRvbWF0aWNhbGx5IGRlbGV0ZXMgaXRzZWxmIGFuZCBpdHMgd3JpdGFibGUgbGF5ZXIgdXBvbiBleGl0IiwiSXQgbW91bnRzIGEgcGVyc2lzdGVudCBob3N0IHZvbHVtZSBhdXRvbWF0aWNhbGx5IiwiSXQgYnlwYXNzZXMgY29udGFpbmVyIG5ldHdvcmsgaXNvbGF0aW9uIl0=",
    "answer": "MQ=="
  },
  {
    "subject": "docker_foundations",
    "subjectLabel": "Docker Foundations & Mindset",
    "question": "3. Which command provides real-time streaming metrics for active container CPU and RAM usage?",
    "options": "WyJkb2NrZXIgaW5zcGVjdCIsImRvY2tlciBsb2dzIiwiZG9ja2VyIHN0YXRzIiwiZG9ja2VyIHBzIC1hIl0=",
    "answer": "Mg=="
  },
  {
    "subject": "docker_foundations",
    "subjectLabel": "Multi-Stage Builds & Compose",
    "question": "4. Why are multi-stage Dockerfiles recommended for Java application deployments?",
    "options": "WyJUaGV5IGluY3JlYXNlIGNvbXBpbGF0aW9uIHNwZWVkIGJ5IGRpc2FibGluZyB1bml0IHRlc3RzIiwiVGhleSBzZXBhcmF0ZSBoZWF2eSBKREsgYnVpbGQgZW52aXJvbm1lbnRzIGZyb20gbGlnaHR3ZWlnaHQgSlJFIHJ1bnRpbWUgaW1hZ2VzIiwiVGhleSBlbmZvcmNlIHJvb3QgcGVybWlzc2lvbnMgZm9yIGFwcGxpY2F0aW9uIGV4ZWN1dGlvbiIsIlRoZXkgYnlwYXNzIERvY2tlcidzIGxheWVyIGNhY2hpbmcgbWVjaGFuaXNtIl0=",
    "answer": "MQ=="
  },
  {
    "subject": "docker_foundations",
    "subjectLabel": "Multi-Stage Builds & Compose",
    "question": "5. What root cause does Exit Code 137 (OOMKilled) indicate in container diagnostics?",
    "options": "WyJOZXR3b3JrIHBvcnQgYmluZGluZyBjb25mbGljdCBvbiB0aGUgaG9zdCBzZXJ2ZXIiLCJNaXNzaW5nIGZvcmVncm91bmQgZW50cnlwb2ludCBzY3JpcHQiLCJUaGUgY29udGFpbmVyIHByb2Nlc3MgZXhjZWVkZWQgaXRzIGFsbG9jYXRlZCBSQU0gbGltaXRzIGFuZCB3YXMgdGVybWluYXRlZCBieSB0aGUga2VybmVsIiwiU3VjY2Vzc2Z1bCBhcHBsaWNhdGlvbiBwcm9jZXNzIHNodXRkb3duIl0=",
    "answer": "Mg=="
  },
  {
    "subject": "docker_foundations",
    "subjectLabel": "Multi-Stage Builds & Compose",
    "question": "6. In Docker Compose, how do you ensure a web API waits until PostgreSQL is ready for connections?",
    "options": "WyJCeSBzZXR0aW5nICdyZXN0YXJ0OiBhbHdheXMnIiwiVXNpbmcgJ2RlcGVuZHNfb24nIHBhaXJlZCB3aXRoICdjb25kaXRpb246IHNlcnZpY2VfaGVhbHRoeSciLCJCeSBtYXBwaW5nIGhvc3QgcG9ydHMgZXhwbGljaXRseSIsIkJ5IGRlZmluaW5nIHZhcmlhYmxlcyBpbnNpZGUgYSAuZW52IGZpbGUiXQ==",
    "answer": "MQ=="
  },
  {
    "subject": "docker_foundations",
    "subjectLabel": "Multi-Stage Builds & Compose",
    "question": "7. Why should 'COPY pom.xml .' precede 'COPY src ./src' in a Java Dockerfile?",
    "options": "WyJUbyBlbmFibGUgcm9vdCBleGVjdXRpb24gcGVybWlzc2lvbnMiLCJUbyBtYXhpbWl6ZSBsYXllciBjYWNoaW5nIGZvciBkb3dubG9hZGVkIGRlcGVuZGVuY2llcyB3aGVuIHNvdXJjZSBjb2RlIGNoYW5nZXMiLCJUbyBlbmZvcmNlIG1lbW9yeSBib3VuZGFyeSBsaW1pdHMiLCJUbyBieXBhc3MgdGhlIC5kb2NrZXJpZ25vcmUgZmlsZSJd",
    "answer": "MQ=="
  },
  {
    "subject": "docker_foundations",
    "subjectLabel": "Advanced Security & Hardening",
    "question": "8. Why are Google Distroless base images significantly more secure than standard OS images?",
    "options": "WyJUaGV5IGluY2x1ZGUgcHJlLWluc3RhbGxlZCBkZWJ1Z2dpbmcgdG9vbHMgYW5kIHNoZWxscyIsIlRoZXkgY29udGFpbiBubyBzaGVsbCBiaW5hcmllcyAoc2gvYmFzaCkgb3IgcGFja2FnZSBtYW5hZ2VycywgZWxpbWluYXRpbmcgcmVtb3RlIHNoZWxsIGFjY2VzcyIsIlRoZXkgZXhlY3V0ZSBwcm9jZXNzZXMgYXMgcm9vdCBieSBkZWZhdWx0IiwiVGhleSBieXBhc3MgaG9zdCBrZXJuZWwgZmlyZXdhbGwgcnVsZXMiXQ==",
    "answer": "MQ=="
  },
  {
    "subject": "docker_foundations",
    "subjectLabel": "Advanced Security & Hardening",
    "question": "9. What security boundary is enforced by running a container with the '--read-only' flag?",
    "options": "WyJJdCByZW5kZXJzIGNvbnRhaW5lciBsb2cgZmlsZXMgcmVhZC1vbmx5IiwiSXQgbG9ja3MgdGhlIHJvb3QgZmlsZXN5c3RlbSB0byBwcmV2ZW50IHVuYXV0aG9yaXplZCBiaW5hcnkgd3JpdGVzIG9yIG1hbHdhcmUgZHJvcHMiLCJJdCBkaXNhYmxlcyB2b2x1bWUgbW91bnRpbmcgY29tcGxldGVseSIsIkl0IHJlc3RyaWN0cyBjb250YWluZXIgbmV0d29yayBiYW5kd2lkdGgiXQ==",
    "answer": "MQ=="
  },
  {
    "subject": "docker_foundations",
    "subjectLabel": "Advanced Security & Hardening",
    "question": "10. How should build secrets be passed in a Dockerfile using BuildKit to prevent layer leaks?",
    "options": "WyJVc2luZyBzdGFuZGFyZCBBUkcgdmFyaWFibGVzIiwiVXNpbmcgc3RhbmRhcmQgRU5WIHZhcmlhYmxlcyIsIlVzaW5nICdSVU4gLS1tb3VudD10eXBlPXNlY3JldCciLCJIYXJkY29kaW5nIGNyZWRlbnRpYWxzIGRpcmVjdGx5IGluc2lkZSBwb20ueG1sIl0=",
    "answer": "Mg=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "11. Why has traditional, approval-centric change governance become obsolete in modern cloud-native environments?",
    "options": "WyJCZWNhdXNlIGNsb3VkIGVudmlyb25tZW50cyBkZXBsb3kgY29kZSBpbmZyZXF1ZW50bHksIG1ha2luZyByZXZpZXcgbWVldGluZ3MgdW5uZWNlc3NhcnkiLCJCZWNhdXNlIG1vZGVybiBzb2Z0d2FyZSBjb250YWlucyB6ZXJvIGJ1Z3MgYW5kIHJlcXVpcmVzIG5vIHNlY3VyaXR5IG92ZXJzaWdodCIsIkJlY2F1c2UgbWFudWFsIHJldmlld3Mgc3RydWdnbGUgdG8gcHJvY2VzcyBoaWdoLWZyZXF1ZW5jeSBjaGFuZ2VzLCBjcmVhdGluZyBib3R0bGVuZWNrcyBhbmQgcmV2aWV3IGZhdGlndWUiLCJCZWNhdXNlIENoYW5nZSBBZHZpc29yeSBCb2FyZHMgYXJlIHJlcXVpcmVkIGJ5IGxhdyB0byBiZSByZXBsYWNlZCBieSBhdXRvbm9tb3VzIG5ldXJhbCBuZXR3b3JrcyJd",
    "answer": "Mg=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "12. What fundamental shift defines the transition from traditional CABs to AI-assisted change governance?",
    "options": "WyJNb3ZpbmcgZnJvbSBtYW51YWwgZm9ybS1jaGVja2luZyB0byBldmlkZW5jZS1jZW50cmljIGZsb3cgcG93ZXJlZCBieSBhdXRvbWF0ZWQgRGVjaXNpb24gUGFja3MiLCJTaGlmdGluZyB0b3RhbCBvcGVyYXRpb25hbCBsaWFiaWxpdHkgZnJvbSBodW1hbiBlbmdpbmVlcnMgdG8gdGhpcmQtcGFydHkgc29mdHdhcmUgdmVuZG9ycyIsIlJlcGxhY2luZyBhbGwgR2l0IHJlcG9zaXRvcmllcyB3aXRoIGNlbnRyYWxpemVkIHBhcGVyLWJhc2VkIHNpZ24tb2ZmIGJpbmRlcnMiLCJFbGltaW5hdGluZyBwcmUtcHJvZHVjdGlvbiB0ZXN0aW5nIGluIGZhdm9yIG9mIGxpdmUgY3VzdG9tZXIgdGVzdGluZyJd",
    "answer": "MA=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "13. In Info-Gap Decision Theory (IGDT), what does the 'Robustness' metric quantify?",
    "options": "WyJUaGUgdG90YWwgbW9uZXRhcnkgY29zdCBvZiBydW5uaW5nIGEgS3ViZXJuZXRlcyBjbHVzdGVyIGZvciBvbmUgeWVhciIsIkhvdyBzYWZlbHkgYSBwcm9wb3NlZCBjaGFuZ2UgdG9sZXJhdGVzIG9wZXJhdGlvbmFsIHVuY2VydGFpbnR5IGFuZCB1bmV4cGVjdGVkIGZhaWx1cmUgbW9kZXMiLCJUaGUgZXhhY3QgbnVtYmVyIG9mIGxpbmVzIG9mIGNvZGUgYWRkZWQgaW4gYSBwdWxsIHJlcXVlc3QiLCJUaGUgc3BlZWQgYXQgd2hpY2ggYW4gQUkgYWdlbnQgZ2VuZXJhdGVzIHRleHQgcmVzcG9uc2VzIl0=",
    "answer": "MQ=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "14. How is 'Opportuneness' defined when evaluating a change request under Info-Gap Decision Theory?",
    "options": "WyJUaGUgZmluYW5jaWFsIHBlbmFsdHkgaW5jdXJyZWQgaWYgYSBzb2Z0d2FyZSBsaWNlbnNlIGV4cGlyZXMiLCJUaGUgcGVyY2VudGFnZSBvZiBDUFUgbWVtb3J5IGNvbnN1bWVkIGR1cmluZyBhIGRhdGFiYXNlIG1pZ3JhdGlvbiIsIlRoZSB0b3RhbCBudW1iZXIgb2YgYXR0ZW5kZWVzIHByZXNlbnQgaW4gYSBDaGFuZ2UgQWR2aXNvcnkgQm9hcmQgbWVldGluZyIsIlRoZSB1cHNpZGUgdmFsdWUgb3IgcmlzayByZWR1Y3Rpb24gdW5sb2NrZWQgYnkgYWN0aW5nIHN3aWZ0bHkgd2l0aG91dCB1bm5lY2Vzc2FyeSBkZWxheSJd",
    "answer": "Mw=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "15. How does Info-Gap Decision Theory differ from traditional 'Low/Medium/High' static risk buckets?",
    "options": "WyJJdCBlbGltaW5hdGVzIGh1bWFuIGRlY2lzaW9uLW1ha2luZyBlbnRpcmVseSBmcm9tIHRoZSByZWxlYXNlIHBpcGVsaW5lIiwiSXQgcmVxdWlyZXMgYWxsIHJlbGVhc2VzIHRvIGJlIGNsYXNzaWZpZWQgYXMgSGlnaCBSaXNrIHJlZ2FyZGxlc3Mgb2YgdGVzdCBjb3ZlcmFnZSIsIkl0IGV2YWx1YXRlcyBjaGFuZ2VzIGFjcm9zcyBkdWFsIGRpbWVuc2lvbnMgb2YgdW5jZXJ0YWludHkgdG9sZXJhbmNlIGFuZCB0aW1lLXNlbnNpdGl2ZSBvcHBvcnR1bml0eSIsIkl0IHJlbGllcyBvbiBzdWJqZWN0aXZlIGd1ZXNzZXMgbWFkZSBieSBleHRlcm5hbCBjb25zdWx0YW50cyJd",
    "answer": "Mg=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "16. What critical security feature ensures Gemini Enterprise agents respect user permission boundaries?",
    "options": "WyJXb3JrZm9yY2UgSWRlbnRpdHkgRmVkZXJhdGlvbiwgZW5zdXJpbmcgYWdlbnRzIG9ubHkgYWNjZXNzIGRhdGEgdGhlIGh1bWFuIHVzZXIgaXMgYXV0aG9yaXplZCB0byBzZWUiLCJIYXJkY29kaW5nIHJvb3QgYWRtaW5pc3RyYXRpdmUgcGFzc3dvcmRzIGRpcmVjdGx5IGluc2lkZSBBSSBwcm9tcHQgdGVtcGxhdGVzIiwiRGlzYWJsaW5nIGFsbCBmaXJld2FsbCBydWxlcyBkdXJpbmcgZXZpZGVuY2UgY29sbGVjdGlvbiIsIlN0b3JpbmcgYWxsIG9wZXJhdGlvbmFsIGxvZ3MgaW4gcHVibGljIHdlYiByZXBvc2l0b3JpZXMiXQ==",
    "answer": "MA=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "17. What role do enterprise connectors play in the Gemini Enterprise Enabled Architecture?",
    "options": "WyJUaGV5IGF1dG9tYXRpY2FsbHkgZGVsZXRlIG91dGRhdGVkIHNvdXJjZSBjb2RlIHJlcG9zaXRvcmllcyBldmVyeSB3ZWVrZW5kIiwiVGhleSBhbGxvdyBleHRlcm5hbCBoYWNrZXJzIHRvIGluc3BlY3QgaW50ZXJuYWwgcHJvZHVjdGlvbiBkYXRhYmFzZXMiLCJUaGV5IHNlY3VyZWx5IHB1bGwgY29udGV4dCBhY3Jvc3MgR2l0IHJlcG9zLCBDSS9DRCBsb2dzLCBKaXJhIHRpY2tldHMsIGFuZCBTTE8gZGFzaGJvYXJkcyBpbnRvIERlY2lzaW9uIFBhY2tzIiwiVGhleSByZXBsYWNlIGh1bWFuIGRldmVsb3BlcnMgYnkgd3JpdGluZyBlbnRpcmUgYXBwbGljYXRpb24gY29kZWJhc2VzIGF1dG9tYXRpY2FsbHkiXQ==",
    "answer": "Mg=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "18. What are the four core layers of the Human + AI Change Governance Model?",
    "options": "WyJQbGFubmluZywgQ29kaW5nLCBUZXN0aW5nLCBhbmQgTWFya2V0aW5nIiwiQWxlcnRpbmcsIElnbm9yaW5nLCBSZXN0YXJ0aW5nLCBhbmQgRXNjYWxhdGluZyIsIkRyYWZ0aW5nLCBQcmludGluZywgRmlsaW5nLCBhbmQgQXJjaGl2aW5nIiwiQUkgRXZpZGVuY2UgU3ludGhlc2lzLCBIdW1hbiBKdWRnbWVudCwgRGV0ZXJtaW5pc3RpYyBFeGVjdXRpb24sIGFuZCBDbG9zZWQtTG9vcCBMZWFybmluZyJd",
    "answer": "Mw=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "19. In the Human + AI Governance Model, what executes an approved change in production?",
    "options": "WyJHZW5lcmF0aXZlIEFJIGFnZW50cyB3cml0aW5nIGRpcmVjdGx5IHRvIHByb2R1Y3Rpb24gc2VydmVycyIsIkRldGVybWluaXN0aWMgYXV0b21hdGlvbiB0b29scyBzdWNoIGFzIENJL0NEIHBpcGVsaW5lcywgR2l0T3BzIHN5bmMsIGFuZCBwb2xpY3ktYXMtY29kZSBnYXRlcyIsIk1hbnVhbCB0ZXJtaW5hbCBjb21tYW5kcyB0eXBlZCBieSBqdW5pb3IgaGVscGRlc2sgc3RhZmYiLCJVbnZlcmlmaWVkIHRoaXJkLXBhcnR5IGJyb3dzZXIgZXh0ZW5zaW9ucyJd",
    "answer": "MQ=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "20. What does the Zen metaphor of 'carrying water buckets vs. building aqueducts' represent for IT leaders?",
    "options": "WyJNb3ZpbmcgZnJvbSBtYW51YWwsIHJlcGV0aXRpdmUgdGlja2V0IHJldmlld3MgKGJ1Y2tldHMpIHRvIGJ1aWxkaW5nIGF1dG9tYXRlZCBldmlkZW5jZSBwaXBlbGluZXMgKGFxdWVkdWN0cykiLCJTd2l0Y2hpbmcgZnJvbSBjbG91ZCBjb21wdXRpbmcgYmFjayB0byBwaHlzaWNhbCBvbi1wcmVtaXNlIGRhdGEgY2VudGVycyIsIlJlcGxhY2luZyBzb2Z0d2FyZSBlbmdpbmVlcnMgd2l0aCBjaXZpbCBpbmZyYXN0cnVjdHVyZSB3b3JrZXJzIiwiSWdub3Jpbmcgb3BlcmF0aW9uYWwgZWZmaWNpZW5jeSB0byBmb2N1cyBzb2xlbHkgb24gaGFyZHdhcmUgY29vbGluZyBzeXN0ZW1zIl0=",
    "answer": "MA=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "21. How does the role of a 'Human-AI Orchestrator' differ from a traditional 'Change Approver'?",
    "options": "WyJPcmNoZXN0cmF0b3JzIHJ1YmJlci1zdGFtcCBhbGwgQUkgb3V0cHV0cyB3aXRob3V0IHJlYWRpbmcgdGhlIGF0dGFjaGVkIGV2aWRlbmNlIiwiT3JjaGVzdHJhdG9ycyBzcGVuZCAxMDAlIG9mIHRoZWlyIGRheSB3cml0aW5nIHJhdyBZQU1MIGZpbGVzIGJ5IGhhbmQiLCJPcmNoZXN0cmF0b3JzIGRlc2lnbiBkZWNpc2lvbiBzeXN0ZW1zLCBzZXQgcmlzayBndWFyZHJhaWxzLCBhbmQgZXZhbHVhdGUgdHJhZGUtb2ZmcyByYXRoZXIgdGhhbiBtYW51YWxseSBodW50aW5nIGxvZ3MiLCJPcmNoZXN0cmF0b3JzIGRlbGVnYXRlIGxlZ2FsIGFjY291bnRhYmlsaXR5IGZvciBvdXRhZ2VzIHRvIEFJIHNvZnR3YXJlIHZlbmRvcnMiXQ==",
    "answer": "Mg=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "22. Which new skill is required for an AI-augmented change expert to query operational data effectively?",
    "options": "WyJNYW51YWwgYXNzZW1ibHkgb2YgcGFwZXIgYXVkaXQgYmluZGVycyIsIlN0cmF0ZWdpYyBQcm9tcHQgRGVzaWduIGFuZCBjb250ZXh0IGZyYW1pbmciLCJIaWdoLXNwZWVkIGFscGhhbnVtZXJpYyBkYXRhIGVudHJ5IiwiQ29ib2wgcHJvZ3JhbW1pbmcgbGFuZ3VhZ2UgdHJhbnNsYXRpb24iXQ==",
    "answer": "MQ=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "23. Why is 'Critical Data Evaluation' an essential skill when working with AI decision support systems?",
    "options": "WyJUbyBlbmFibGUgaHVtYW4gcmV2aWV3ZXJzIHRvIG1lbW9yaXplIGFsbCBzeXN0ZW0gbG9nIGVudHJpZXMgYnkgaGVhcnQiLCJUbyBjb252ZXJ0IG51bWVyaWMgbWV0cmljcyBpbnRvIGhhbmR3cml0dGVuIGNoYXJ0cyIsIlRvIGJ5cGFzcyBhbGwgY29ycG9yYXRlIHNlY3VyaXR5IGFuZCBjb21wbGlhbmNlIHJ1bGVzIiwiVG8gZW5zdXJlIGh1bWFuIHJldmlld2VycyBjYW4gc3BvdCBtaXNzaW5nIHRlbGVtZXRyeSwgd2VhayBhc3N1bXB0aW9ucywgb3IgcG90ZW50aWFsIG1vZGVsIGhhbGx1Y2luYXRpb25zIl0=",
    "answer": "Mw=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "24. How does 'Counterfactual Reasoning' help a Change Advisory Board approve an urgent release safely?",
    "options": "WyJJdCBwcmVkaWN0cyB3aGF0IGd1YXJkcmFpbHMgKGUuZy4sIGNhbmFyeSByb2xsb3V0cyBvciBTTE8gZ2F0ZXMpIHdpbGwgZWxldmF0ZSBhIGNoYW5nZSdzIHNhZmV0eSBzY29yZSIsIkl0IHByb3ZlcyB0aGF0IHNvZnR3YXJlIGNoYW5nZXMgbmV2ZXIgY2F1c2UgcHJvZHVjdGlvbiBvdXRhZ2VzIiwiSXQgYXV0b21hdGljYWxseSBnZW5lcmF0ZXMgbGVnYWwgZGlzY2xhaW1lcnMgZm9yIGVuZC11c2VyIGxpY2Vuc2UgYWdyZWVtZW50cyIsIkl0IGZvcmNlcyByZXZpZXdlcnMgdG8gcmVqZWN0IGFsbCBlbWVyZ2VuY3kgcGF0Y2hlcyBieSBkZWZhdWx0Il0=",
    "answer": "MA=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "25. What is contained within an AI-generated 'Decision Pack' prepared for a CAB review?",
    "options": "WyJSYXcsIHVuZm9ybWF0dGVkIHN5c3RlbSBsb2dzIHNwYW5uaW5nIDUwMCBwYWdlcyB3aXRob3V0IHN1bW1hcmllcyIsIkltcGFjdCBtYXBwaW5nLCBoaXN0b3JpY2FsIGZhaWx1cmUgc2lnbmFscywgSW5mby1HYXAgc2NvcmVzLCBYQUkgbm90ZXMsIGFuZCByZWNvbW1lbmRlZCBndWFyZHJhaWxzIiwiTWFya2V0aW5nIGJyb2NodXJlcyBhbmQgZW1wbG95ZWUgYXR0ZW5kYW5jZSByZWNvcmRzIiwiRW5jcnlwdGVkIHNvdXJjZSBjb2RlIHRoYXQgY2Fubm90IGJlIGluc3BlY3RlZCBieSBodW1hbiByZXZpZXdlcnMiXQ==",
    "answer": "MQ=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "26. In the CAB case study, how should a low-urgency, non-critical monitoring agent upgrade be handled?",
    "options": "WyJUcmVhdCBpdCBhcyBhbiBlbWVyZ2VuY3kgcGF0Y2ggYW5kIGRlcGxveSBpdCBpbW1lZGlhdGVseSBhdCBtaWRuaWdodCIsIlN1YmplY3QgaXQgdG8gYSA0LWhvdXIgZXhlY3V0aXZlIHJldmlldyBib2FyZCBtZWV0aW5nIHdpdGggYWxsIEMtbGV2ZWwgb2ZmaWNlcnMiLCJCdW5kbGUgaXQgaW50byBzY2hlZHVsZWQgbWFpbnRlbmFuY2Ugb3IgY2xhc3NpZnkgaXQgYXMgYSBwcmUtYXBwcm92ZWQgc3RhbmRhcmQgY2hhbmdlIiwiUmVqZWN0IGl0IHBlcm1hbmVudGx5IHRvIHByZXZlbnQgYW55IG1vZGlmaWNhdGlvbiB0byBtb25pdG9yaW5nIHRvb2xzIl0=",
    "answer": "Mg=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "27. In the Change Approval Matrix, what action is recommended for Quadrant I (High Robustness + High Opportuneness)?",
    "options": "WyJEZWZlciBhcHByb3ZhbCB1bnRpbCBwcmUtcHJvZHVjdGlvbiB0ZXN0aW5nIGlzIHJlcGVhdGVkIGZpdmUgdGltZXMiLCJSZWplY3QgdGhlIGNoYW5nZSBkdWUgdG8gZXhjZXNzIGJ1c2luZXNzIHZhbHVlIiwiUm91dGUgdGhlIGNoYW5nZSB0byBhbiBvZmZsaW5lIGV4dGVybmFsIGF1ZGl0IGNvbW1pdHRlZSIsIkZhc3QtVHJhY2sgYXBwcm92YWwgdGhyb3VnaCBhY2NlbGVyYXRlZCwgY29udHJvbGxlZCBhdXRvbWF0aW9uIHBpcGVsaW5lcyJd",
    "answer": "Mw=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "28. How should a change in Quadrant II (Low Robustness + High Opportuneness, e.g., an emergency patch) be governed?",
    "options": "WyJBcHBseSB0YXJnZXRlZCBndWFyZHJhaWxzIChlLmcuLCBzaW5nbGUtY2x1c3RlciBjYW5hcnkgKyBhdXRvbWF0ZWQgU0xPIGdhdGVzKSB0byBlbGV2YXRlIHNhZmV0eSBiZWZvcmUgYXBwcm92YWwiLCJSZWplY3QgdGhlIHBhdGNoIGltbWVkaWF0ZWx5IGFuZCBhY2NlcHQgemVyby1kYXkgc2VjdXJpdHkgZXhwbG9pdGF0aW9uIiwiQnlwYXNzIGFsbCByZXZpZXdzIGFuZCBkZXBsb3kgZ2xvYmFsbHkgd2l0aG91dCB0ZWxlbWV0cnkgbW9uaXRvcmluZyIsIkFyY2hpdmUgdGhlIGNoYW5nZSB0aWNrZXQgYW5kIHJlLWV2YWx1YXRlIGluIHRoZSBuZXh0IHF1YXJ0ZXIiXQ==",
    "answer": "MA=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "29. What is the recommended strategy for Quadrant III changes (High Robustness + Low Opportuneness)?",
    "options": "WyJGYXN0LXRyYWNrIGFzIGFuIGVtZXJnZW5jeSByZWxlYXNlIGR1cmluZyBwZWFrIGJ1c2luZXNzIGhvdXJzIiwiU2NoZWR1bGUgZHVyaW5nIHJvdXRpbmUgbWFpbnRlbmFuY2Ugd2luZG93cywgYnVuZGxlIHdpdGggb3RoZXIgdXBkYXRlcywgb3IgY29udmVydCB0byBhIHN0YW5kYXJkIGNoYW5nZSIsIkVzY2FsYXRlIGRpcmVjdGx5IHRvIHRoZSBCb2FyZCBvZiBEaXJlY3RvcnMgZm9yIHJpc2sgYXBwcm92YWwiLCJEZWxldGUgdGhlIHB1bGwgcmVxdWVzdCB0byByZWR1Y2UgYmFja2xvZyBzaXplIl0=",
    "answer": "MQ=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "30. What action does the Change Approval Matrix specify for Quadrant IV (Low Robustness + Low Opportuneness)?",
    "options": "WyJBcHByb3ZlIGltbWVkaWF0ZWx5IHdpdGhvdXQgdGVzdGluZyIsIkZhc3QtdHJhY2sgdGhyb3VnaCBjYW5hcnkgcGlwZWxpbmVzIiwiRGVmZXIgYXBwcm92YWwsIHJlcXVpcmUgcHJlLXByb2R1Y3Rpb24gdmFsaWRhdGlvbiwgYW5kIGdhdGhlciBtaXNzaW5nIHRlbGVtZXRyeSBldmlkZW5jZSIsIkdyYW50IHBlcm1hbmVudCBhZG1pbmlzdHJhdGl2ZSBieXBhc3MgcHJpdmlsZWdlcyB0byB0aGUgYXV0aG9yIl0=",
    "answer": "Mg=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "31. What takes place during the 'Closed-Loop Learning' stage of the Gemini Enterprise architecture?",
    "options": "WyJBbGwgb3BlcmF0aW9uYWwgbG9ncyBhcmUgZXJhc2VkIHRvIHNhdmUgY2xvdWQgc3RvcmFnZSBzcGFjZSIsIkRldmVsb3BlcnMgYXJlIGZvcmJpZGRlbiBmcm9tIG1vZGlmeWluZyBkZXBsb3llZCBtaWNyb3NlcnZpY2VzIiwiQUkgYWdlbnRzIG1vbml0b3IgcG9zdC1kZXBsb3ltZW50IFNMT3MgYW5kIGNvbnZlcnQgc3VjY2Vzc2Z1bCByZWxlYXNlIHBhdHRlcm5zIGludG8gcHJlLWFwcHJvdmVkIHN0YW5kYXJkIHJ1bGVzIiwiQUkgYWdlbnRzIGF1dG9ub21vdXNseSByZXdyaXRlIGNvcnBvcmF0ZSBnb3Zlcm5hbmNlIHBvbGljaWVzIHdpdGhvdXQgaHVtYW4gb3ZlcnNpZ2h0Il0=",
    "answer": "Mg=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "32. During an emergency CVE 9.8 vulnerability disclosure, why is 'Opportuneness' considered exceptionally high?",
    "options": "WyJCZWNhdXNlIGVtZXJnZW5jeSBwYXRjaGVzIGFyZSBmcmVlIG9mIHRlY2huaWNhbCBkZWJ0IiwiQmVjYXVzZSB6ZXJvLWRheSB2dWxuZXJhYmlsaXRpZXMgaW5jcmVhc2Ugc3lzdGVtIHByb2Nlc3Npbmcgc3BlZWQiLCJCZWNhdXNlIHNlY3VyaXR5IGZpeGVzIGRvIG5vdCByZXF1aXJlIHRlc3Rpbmcgb3IgdmFsaWRhdGlvbiIsIkJlY2F1c2UgZGVsYXlpbmcgdGhlIHBhdGNoIGxlYXZlcyBjcml0aWNhbCBpbnRlcm5ldC1mYWNpbmcgYXNzZXRzIGV4cG9zZWQgdG8gYWN0aXZlIGV4cGxvaXRhdGlvbiJd",
    "answer": "Mw=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "33. How does counterfactual guidance assist security leaders during an emergency patching event?",
    "options": "WyJJdCBwcm92ZXMgdGhhdCBzZWN1cml0eSBwYXRjaGVzIGFyZSB1bm5lY2Vzc2FyeSIsIkl0IGlkZW50aWZpZXMgZXhhY3Qgb3BlcmF0aW9uYWwgY29uc3RyYWludHMgKGUuZy4sIHJlc3RyaWN0aW5nIHJvbGxvdXQgdG8gQ2x1c3RlciBBKSB0aGF0IHJhaXNlIFJvYnVzdG5lc3MgdG8gYWNjZXB0YWJsZSBsZXZlbHMiLCJJdCBhdXRvbWF0aWNhbGx5IGRpc2FibGVzIGV4dGVybmFsIG5ldHdvcmsgdHJhZmZpYyBhY3Jvc3MgdGhlIGVudGlyZSBlbnRlcnByaXNlIiwiSXQgZ2VuZXJhdGVzIHJhbmRvbSByaXNrIHNjb3JlcyB0byBzYXRpc2Z5IGNvbXBsaWFuY2UgYXVkaXRzIl0=",
    "answer": "MQ=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "34. Why is human-in-the-loop (HITL) authorization legally and operationally non-negotiable in AI governance?",
    "options": "WyJCZWNhdXNlIEFJIG1vZGVscyBjYW5ub3QgaG9sZCBsZWdhbCBhY2NvdW50YWJpbGl0eSwgYWNjZXB0IGJ1c2luZXNzIHJpc2ssIG9yIHVuZGVyc3RhbmQgZW50ZXJwcmlzZSBjb250ZXh0IiwiQmVjYXVzZSBzb2Z0d2FyZSBkZXZlbG9wZXJzIGVuam95IGF0dGVuZGluZyBsZW5ndGh5IGFwcHJvdmFsIG1lZXRpbmdzIiwiQmVjYXVzZSBBSSBzeXN0ZW1zIGFyZSBpbmNhcGFibGUgb2YgcmVhZGluZyBkaWdpdGFsIGxvZyBmaWxlcyIsIkJlY2F1c2UgY2xvdWQgcHJvdmlkZXJzIHByb2hpYml0IHRoZSB1c2Ugb2YgYXV0b21hdGlvbiBpbiBwcm9kdWN0aW9uIl0=",
    "answer": "MA=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "35. What is 'automation bias' in the context of Change Advisory Board reviews?",
    "options": "WyJUaGUgcmVmdXNhbCBvZiBzb2Z0d2FyZSBlbmdpbmVlcnMgdG8gdXNlIGF1dG9tYXRlZCBkZXBsb3ltZW50IHBpcGVsaW5lcyIsIkEgYnVnIGluIENJL0NEIHBpcGVsaW5lcyB0aGF0IGNhdXNlcyBidWlsZCBzZXJ2ZXJzIHRvIGNyYXNoIiwiVGhlIHRlbmRlbmN5IGZvciBodW1hbiByZXZpZXdlcnMgdG8gdW5jcml0aWNhbGx5IHJ1YmJlci1zdGFtcCBBSSByZWNvbW1lbmRhdGlvbnMgd2l0aG91dCB2YWxpZGF0aW5nIGV2aWRlbmNlIiwiVGhlIHByZWZlcmVuY2UgZm9yIG1hbnVhbCBwYXBlciBmb3JtcyBvdmVyIGRpZ2l0YWwgdGlja2V0cyJd",
    "answer": "Mg=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "36. How do SHAP/LIME feature attributions improve Explainable AI (XAI) transparency for reviewers?",
    "options": "WyJUaGV5IHRyYW5zbGF0ZSBjb2RlIGNvbW1lbnRzIGludG8gYW5jaWVudCBsYW5ndWFnZXMiLCJUaGV5IGJyZWFrIGRvd24gZXhhY3QgcmlzayBkcml2ZXJzIChlLmcuLCAtMzAlIFVudGVzdGVkIFJvbGxiYWNrLCArMjAlIENhbmFyeSBDb3ZlcmFnZSkgYmVoaW5kIGEgc2NvcmUiLCJUaGV5IGhpZGUgcmlzayBzY29yZXMgYmVoaW5kIGVuY3J5cHRlZCBzZWN1cml0eSBwYXNzd29yZHMiLCJUaGV5IGF1dG9tYXRpY2FsbHkgYXBwcm92ZSBhbGwgcHVsbCByZXF1ZXN0cyBzdWJtaXR0ZWQgYnkgc2VuaW9yIGRldmVsb3BlcnMiXQ==",
    "answer": "MQ=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "37. What is the purpose of a 'Visible Assumption Log' in an AI-generated Decision Pack?",
    "options": "WyJUbyBleHBvc2UgdW52ZXJpZmllZCBvciB3ZWFrIGRhdGEgYXNzdW1wdGlvbnMgc28gaHVtYW4gcmV2aWV3ZXJzIGNhbiBjaGFsbGVuZ2UgdGhlbSBkdXJpbmcgQ0FCIHJldmlld3MiLCJUbyByZWNvcmQgZGV2ZWxvcGVyIGF0dGVuZGFuY2UgZHVyaW5nIHNwcmludCBwbGFubmluZyBzZXNzaW9ucyIsIlRvIHN0b3JlIHVzZXIgcGFzc3dvcmRzIGluIHBsYWluIHRleHQgZm9yIGVhc3kgYXVkaXRpbmciLCJUbyB0cmFjayBoYXJkd2FyZSBjb29saW5nIHRlbXBlcmF0dXJlcyBpbiBkYXRhIGNlbnRlcnMiXQ==",
    "answer": "MA=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "38. Which international standard defines guidelines for an AI Management System (AIMS) in enterprise operations?",
    "options": "WyJJU08gOTAwMSIsIklFRUUgODAyLjMiLCJQQ0ktRFNTIDMuMiIsIklTTy9JRUMgNDIwMDEiXQ==",
    "answer": "Mw=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "39. Under ISO/IEC 42001 guidelines, how are production-impacting decision-support agents classified?",
    "options": "WyJBcyBVbnJlZ3VsYXRlZCBDb25zdW1lciBUb3lzIHdpdGggemVybyBjb21wbGlhbmNlIG92ZXJzaWdodCIsIkFzIEhpZ2gtUmlzayBBSSBTeXN0ZW1zIHJlcXVpcmluZyBmb3JtYWwgcmlzayBtYW5hZ2VtZW50LCB0cmFuc3BhcmVuY3ksIGFuZCBodW1hbiBvdmVyc2lnaHQiLCJBcyBBdXRvbm9tb3VzIFN5c3RlbXMgd2l0aCBjb21wbGV0ZSBhdXRob3JpdHkgb3ZlciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyIsIkFzIERlcHJlY2F0ZWQgTGVnYWN5IFNvZnR3YXJlIHNjaGVkdWxlZCBmb3IgZGVsZXRpb24iXQ==",
    "answer": "MQ=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "40. How does Gemini Enterprise prevent 'governance bypass' by rogue or compromised agents?",
    "options": "WyJCeSBkaXNhYmxpbmcgYWxsIHNlY3VyaXR5IGxvZ2dpbmcgYWNyb3NzIHByb2R1Y3Rpb24gY2x1c3RlcnMiLCJCeSBhbGxvd2luZyBhZ2VudHMgdG8gbW9kaWZ5IHRoZWlyIG93biBhZG1pbmlzdHJhdGl2ZSBwZXJtaXNzaW9ucyBkeW5hbWljYWxseSIsIkJ5IGVuZm9yY2luZyBhZ2VudCBhY3Rpb24gcmVnaXN0cmllcyB0aGF0IHJlc3RyaWN0IEFJIGFnZW50cyB0byBldmlkZW5jZSBjb2xsZWN0aW9uIHdoaWxlIGJsb2NraW5nIGF1dG9ub21vdXMgZXhlY3V0aW9uIiwiQnkgcmVxdWlyaW5nIGh1bWFuIGVuZ2luZWVycyB0byBzaGFyZSByb290IHBhc3N3b3JkcyB3aXRoIEFJIG1vZGVscyJd",
    "answer": "Mg=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "41. Why are vanity activity metrics (e.g., number of tickets processed) flawed indicators of governance success?",
    "options": "WyJCZWNhdXNlIGNsb3VkIHBsYXRmb3JtcyBkbyBub3QgZ2VuZXJhdGUgdGlja2V0IGRhdGEiLCJCZWNhdXNlIG1lYXN1cmluZyB0aWNrZXQgdGhyb3VnaHB1dCBjYXVzZXMgQ0kvQ0QgcGlwZWxpbmVzIHRvIGZhaWwiLCJCZWNhdXNlIHZhbml0eSBtZXRyaWNzIGFyZSBwcm9oaWJpdGVkIGJ5IGludGVybmF0aW9uYWwgYWNjb3VudGluZyBsYXdzIiwiQmVjYXVzZSBwcm9jZXNzaW5nIG1vcmUgdGlja2V0cyBtYW51YWxseSBkb2VzIG5vdCBtZWFuIHN5c3RlbSBzdGFiaWxpdHkgb3IgcmVsZWFzZSBzYWZldHkgaGFzIGltcHJvdmVkIl0=",
    "answer": "Mw=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "42. Which metric directly measures the security value delivered by fast-tracking emergency patches?",
    "options": "WyJTZWN1cml0eSBFeHBvc3VyZSBEYXlzIEF2b2lkZWQiLCJUb3RhbCBsaW5lcyBvZiBkb2N1bWVudGF0aW9uIHdyaXR0ZW4iLCJOdW1iZXIgb2YgcmV2aWV3IGJvYXJkIG1lZXRpbmdzIGhlbGQiLCJBdmVyYWdlIGFnZSBvZiBkYXRhIGNlbnRlciBzZXJ2ZXIgcmFja3MiXQ==",
    "answer": "MA=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "43. How is toil reduction measured in an AI-assisted change governance framework?",
    "options": "WyJCeSBjb3VudGluZyB0aGUgbnVtYmVyIG9mIGVtYWlscyBzZW50IGR1cmluZyBhIHN5c3RlbSBvdXRhZ2UiLCJCeSBjYWxjdWxhdGluZyBtYW51YWwgcHJlcGFyYXRpb24gYW5kIGNvbnRleHQtZ2F0aGVyaW5nIGhvdXJzIHNhdmVkIGZvciBTUkVzIGFuZCBkZXZlbG9wZXJzIiwiQnkgdHJhY2tpbmcgdGhlIGRlY3JlYXNlIGluIHBoeXNpY2FsIG9mZmljZSBhdHRlbmRhbmNlIiwiQnkgbWVhc3VyaW5nIGtleWJvYXJkIHR5cGluZyBzcGVlZCBhY3Jvc3MgZW5naW5lZXJpbmcgdGVhbXMiXQ==",
    "answer": "MQ=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "44. What is Step 1 in the Executive Roadmap for implementing AI-assisted change governance?",
    "options": "WyJSZXBsYWNlIGFsbCBDaGFuZ2UgQWR2aXNvcnkgQm9hcmRzIGFjcm9zcyB0aGUgZW50aXJlIGVudGVycHJpc2UgaW4gYSBzaW5nbGUgd2Vla2VuZCIsIlB1cmNoYXNlIHRlbiBkaWZmZXJlbnQgQUkgdG9vbHMgd2l0aG91dCBzZXR0aW5nIGdvdmVybmFuY2UgcG9saWNpZXMiLCJTdGFydCBzbWFsbCB3aXRoIGEgZm9jdXNlZCBwaWxvdCBpbiBhIGhpZ2gtdmFsdWUgZG9tYWluIChlLmcuLCBLdWJlcm5ldGVzIHVwZ3JhZGVzKSIsIkJhbiBhbGwgcHJvZHVjdGlvbiBkZXBsb3ltZW50cyBmb3Igc2l4IG1vbnRocyB0byBjb25kdWN0IGF1ZGl0cyJd",
    "answer": "Mg=="
  },
  {
    "subject": "change_governance",
    "subjectLabel": "🧘 AI-Assisted Change Governance & AIOps",
    "question": "45. What is the ultimate goal of Step 6 (Transformation) in the Sixfold Leadership Roadmap?",
    "options": "WyJSZXBsYWNpbmcgYWxsIGh1bWFuIHNvZnR3YXJlIGRldmVsb3BlcnMgd2l0aCBvZmZzaG9yZSBjb250cmFjdG9ycyIsIkJ1aWxkaW5nIGEgc2VsZi1pbXByb3ZpbmcgZGVjaXNpb24gc3lzdGVtIHRoYXQgbGVhcm5zIGZyb20gcG9zdC1jaGFuZ2UgdGVsZW1ldHJ5IHRvIHN0cmVhbWxpbmUgZnV0dXJlIHJlbGVhc2VzIiwiRWxpbWluYXRpbmcgYWxsIGNvbXBsaWFuY2UgYW5kIGF1ZGl0aW5nIHJlcXVpcmVtZW50cyBwZXJtYW5lbnRseSIsIk1pZ3JhdGluZyBhbGwgZW50ZXJwcmlzZSBhcHBsaWNhdGlvbnMgYmFjayB0byBtYWluZnJhbWUgY29tcHV0ZXJzIl0=",
    "answer": "MQ=="
  },
  {
    "subject": "jenkins",
    "subjectLabel": "🧘 Monk Mindset & Core Architecture",
    "question": "46. How does the Indian Monk concept of 'Ekagrata' (single-pointed focus) guide the architectural role of the Jenkins Controller?",
    "options": "WyJUaGUgQ29udHJvbGxlciBydW5zIGJ1aWxkcyBpbnNpZGUgaW50ZXJuYWwgSlZNIHRocmVhZHMgd2hpbGUgYnlwYXNzaW5nIHdvcmtlciBub2Rlcy4iLCJUaGUgQ29udHJvbGxlciBmb2N1c2VzIHN0cmljdGx5IG9uIG9yY2hlc3RyYXRpb24gYW5kIHdlYmhvb2tzLCBvZmZsb2FkaW5nIGFsbCBoZWF2eSBidWlsZCB3b3JrbG9hZHMgdG8gaXNvbGF0ZWQgYWdlbnRzLiIsIlRoZSBDb250cm9sbGVyIG11c3QgZXhlY3V0ZSBhbGwgY29tcGlsYXRpb24gYW5kIHRlc3RpbmcgbG9jYWxseSB0byBtYWludGFpbiBjb21wbGV0ZSBjb250cm9sLiIsIlRoZSBDb250cm9sbGVyIHN0b3JlcyBhbGwgYXBwbGljYXRpb24gc291cmNlIGNvZGUgZGlyZWN0bHkgaW4gaXRzIGxvY2FsIGNhY2hlLiJd",
    "answer": "MQ=="
  },
  {
    "subject": "jenkins",
    "subjectLabel": "🧘 Monk Mindset & Core Architecture",
    "question": "47. In accordance with the KISS Principle, what constitutes the fundamental, uncluttered CI feedback loop?",
    "options": "WyJTY2hlZHVsZWQgQ3JvbiBUcmlnZ2VyIC0+IExvY2FsIFNoZWxsIEV4ZWN1dGlvbiAtPiBQZXJtYW5lbnQgRmlsZSBTYXZlIC0+IEFkbWluIEVtYWlsIiwiV2ViaG9vayBFdmVudCAtPiBTY3JpcHRlZCBHcm9vdnkgUGFyc2UgLT4gTG9jYWwgQXJ0aWZhY3QgU3RvcmUgLT4gU2xhY2sgRGlnZXN0IiwiVHJpZ2dlciBFdmVudCAoQ29tbWl0L1BSKSAtPiBJc29sYXRlZCBDbGVhbiBFeGVjdXRpb24gLT4gSW1tZWRpYXRlIFN0YXR1cyBGZWVkYmFjayIsIkdVSSBKb2IgVHJpZ2dlciAtPiBNYW51YWwgQXBwcm92YWwgR2F0ZSAtPiBNdWx0aS1zdGFnZSBEZXBsb3ltZW50IC0+IE5vdGlmaWNhdGlvbiBQb2xsIl0=",
    "answer": "Mg=="
  },
  {
    "subject": "jenkins",
    "subjectLabel": "🧘 Monk Mindset & Core Architecture",
    "question": "48. How does Nudge Theory improve developer code quality before code reaches the main branch?",
    "options": "WyJCeSBzZW5kaW5nIGRhaWx5IGF1dG9tYXRlZCB3YXJuaW5nIGVtYWlscyB0byBkZXZlbG9wZXJzIHdobyBoYXZlIGZhaWxpbmcgdW5pdCB0ZXN0cy4iLCJCeSBibG9ja2luZyBkZXZlbG9wZXJzIGZyb20gb3BlbmluZyBQdWxsIFJlcXVlc3RzIHVudGlsIGEgbWFuYWdlciBtYW51YWxseSBhcHByb3ZlcyB0aGVpciBjb2RlLiIsIkJ5IGF1dG9tYXRpY2FsbHkgcmVqZWN0aW5nIGFueSBjb21taXQgdGhhdCBjb250YWlucyBtb3JlIHRoYW4gMTAwIGxpbmVzIG9mIGNvZGUuIiwiQnkgZW1iZWRkaW5nIGF1dG9tYXRlZCBmYXN0LWxpbnRpbmcgYW5kIHZpc3VhbCBzdGF0dXMgaW5kaWNhdG9ycyBkaXJlY3RseSBpbnRvIFB1bGwgUmVxdWVzdHMsIGdlbnRseSBndWlkaW5nIGRldmVsb3BlcnMgdG8gZml4IGlzc3VlcyBsb2NhbGx5LiJd",
    "answer": "Mw=="
  },
  {
    "subject": "jenkins",
    "subjectLabel": "🏗️ Multi-Environment Setup & Installation",
    "question": "49. To enforce the principle of 'Sthirata' (firmness of foundation), how must `/var/jenkins_home` be managed on Linux deployments?",
    "options": "WyJJdCBtdXN0IGJlIHN0cmljdGx5IGRlY291cGxlZCBvbnRvIGEgZGVkaWNhdGVkLCBoaWdoLUlPUFMgcGVyc2lzdGVudCBzdG9yYWdlIHZvbHVtZS4iLCJJdCBzaG91bGQgYmUgc3RvcmVkIGluc2lkZSB0aGUgcm9vdCBvcGVyYXRpbmcgc3lzdGVtIGZpbGVzeXN0ZW0gYWxvbmdzaWRlIHN5c3RlbSBiaW5hcmllcy4iLCJJdCBzaG91bGQgYmUgZXBoZW1lcmFsIGFuZCB3aXBlZCBvbiBldmVyeSBvcGVyYXRpbmcgc3lzdGVtIHJlYm9vdC4iLCJJdCBzaG91bGQgYmUgc3RvcmVkIGVudGlyZWx5IGluIHN5c3RlbSBSQU0gZm9yIG1heGltdW0gSU9QUyBwZXJmb3JtYW5jZS4iXQ==",
    "answer": "MA=="
  },
  {
    "subject": "jenkins",
    "subjectLabel": "🏗️ Multi-Environment Setup & Installation",
    "question": "50. Why should a production Linux Jenkins installation always be fronted by a reverse proxy like Nginx?",
    "options": "WyJUbyBhbGxvdyBKZW5raW5zIGFnZW50cyB0byBjb21tdW5pY2F0ZSB3aXRob3V0IG5lZWRpbmcgbmV0d29yayBwb3J0cy4iLCJUbyBlbmZvcmNlIFRMUyAxLjMgZW5jcnlwdGlvbiwgbWFuYWdlIFNTTCBjZXJ0aWZpY2F0ZXMsIGFuZCBwcmV2ZW50IHJhdywgdW5lbmNyeXB0ZWQgZXhwb3N1cmUgb2YgcG9ydCA4MDgwLiIsIlRvIHNwZWVkIHVwIEphdmEgVmlydHVhbCBNYWNoaW5lIGdhcmJhZ2UgY29sbGVjdGlvbiBjeWNsZXMuIiwiVG8gcmVwbGFjZSB0aGUgSmVua2lucyB3ZWIgaW50ZXJmYWNlIHdpdGggYSBjdXN0b20gSFRNTCBkYXNoYm9hcmQuIl0=",
    "answer": "MQ=="
  },
  {
    "subject": "jenkins",
    "subjectLabel": "🏗️ Multi-Environment Setup & Installation",
    "question": "51. In a cloud-native Kubernetes deployment using Helm, which component guarantees zero state loss when the Jenkins controller pod is rescheduled?",
    "options": "WyJDbHVzdGVySVAgc2VydmljZSByb3V0aW5nIiwiQ29uZmlnTWFwIGVudmlyb25tZW50IHZhcmlhYmxlcyIsIkVwaGVtZXJhbCBlbXB0eURpciB2b2x1bWUgbW91bnRzIiwiUGVyc2lzdGVudCBWb2x1bWUgQ2xhaW0gKFBWQykgYmFja2VkIGJ5IGhpZ2gtc3BlZWQgYmxvY2sgc3RvcmFnZSJd",
    "answer": "Mw=="
  },
  {
    "subject": "jenkins",
    "subjectLabel": "🔐 Hardening Security & Access Control",
    "question": "52. Why is local user database management strongly discouraged inside a production Jenkins controller?",
    "options": "WyJMb2NhbCB1c2VyIGFjY291bnRzIGNvbnN1bWUgZXhjZXNzaXZlIEpWTSBoZWFwIG1lbW9yeSBhbmQgY2F1c2UgZ2FyYmFnZSBjb2xsZWN0aW9uIGRlbGF5cy4iLCJMb2NhbCBhY2NvdW50cyBsYWNrIGNlbnRyYWwgTXVsdGktRmFjdG9yIEF1dGhlbnRpY2F0aW9uIChNRkEpIGFuZCBjZW50cmFsaXplZCBhdWRpdCB0cmFpbHM7IHByb2R1Y3Rpb24gZGVtYW5kcyBpZGVudGl0eSBmZWRlcmF0aW9uIHZpYSBTQU1MIDIuMCBvciBPSURDLiIsIkxvY2FsIGFjY291bnRzIHByZXZlbnQgSmVua2lucyBmcm9tIHJ1bm5pbmcgRGVjbGFyYXRpdmUgUGlwZWxpbmVzLiIsIkxvY2FsIGFjY291bnRzIGF1dG9tYXRpY2FsbHkgZ3JhbnQgZnVsbCBhZG1pbmlzdHJhdGl2ZSBhY2Nlc3MgdG8gYWxsIGF1dGhlbnRpY2F0ZWQgdXNlcnMuIl0=",
    "answer": "MQ=="
  },
  {
    "subject": "jenkins",
    "subjectLabel": "🔐 Hardening Security & Access Control",
    "question": "53. How does Folder-Level Role-Based Access Control (RBAC) enforce the Principle of Least Privilege across multi-project teams?",
    "options": "WyJCeSBtYXBwaW5nIHBlcm1pc3Npb25zIHVzaW5nIGZvbGRlciByZWd1bGFyIGV4cHJlc3Npb25zIChlLmcuLCAnb3Jpb24tLionKSwgcmVzdHJpY3RpbmcgZGV2ZWxvcGVycyB0byB0aGVpciB0ZWFtJ3MgcHJvamVjdCBzY29wZS4iLCJCeSBhc3NpZ25pbmcgZ2xvYmFsIGFkbWluaXN0cmF0aXZlIHJpZ2h0cyB0byBldmVyeSBkZXZlbG9wZXIgaW4gdGhlIG9yZ2FuaXphdGlvbi4iLCJCeSByZXF1aXJpbmcgbXVsdGktZmFjdG9yIGF1dGhlbnRpY2F0aW9uIGJlZm9yZSBldmVyeSBzaW5nbGUgYnVpbGQgZXhlY3V0aW9uLiIsIkJ5IGRpc2FibGluZyByZWFkIHBlcm1pc3Npb25zIGZvciBhbGwgbm9uLWFkbWluaXN0cmF0aXZlIHVzZXJzIGFjcm9zcyB0aGUgZW50aXJlIGNvbnRyb2xsZXIuIl0=",
    "answer": "MA=="
  },
  {
    "subject": "jenkins",
    "subjectLabel": "🔐 Hardening Security & Access Control",
    "question": "54. How does the `withCredentials` pipeline wrapper act as a security nudge during build execution?",
    "options": "WyJJdCBmb3JjZXMgZGV2ZWxvcGVycyB0byB0eXBlIHRoZWlyIHBhc3N3b3JkcyBkaXJlY3RseSBpbnRvIHRoZSBidWlsZCBjb25zb2xlIGlucHV0LiIsIkl0IGR5bmFtaWNhbGx5IGJpbmRzIHNlY3JldHMgdG8gcnVudGltZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgd2hpbGUgYXV0b21hdGljYWxseSBtYXNraW5nIHNlbnNpdGl2ZSBzdHJpbmdzICgnKioqKicpIGluIGNvbnNvbGUgbG9ncy4iLCJJdCB3cml0ZXMgc2VjcmV0cyB0byBhIHRlbXBvcmFyeSBwbGFpbi10ZXh0IGZpbGUgaW4gdGhlIHdvcmtzcGFjZSBkaXJlY3RvcnkuIiwiSXQgYXV0b21hdGljYWxseSByb3RhdGVzIEFXUyBJQU0ga2V5cyBldmVyeSA1IG1pbnV0ZXMgZHVyaW5nIGV4ZWN1dGlvbi4iXQ==",
    "answer": "MQ=="
  },
  {
    "subject": "jenkins",
    "subjectLabel": "📜 Declarative Pipelines & Shared Libraries",
    "question": "55. Why do production engineering standards mandate Declarative `Jenkinsfile` definitions over GUI-based Freestyle jobs?",
    "options": "WyJEZWNsYXJhdGl2ZSBqb2JzIHJ1biAxMHggZmFzdGVyIHRoYW4gRnJlZXN0eWxlIGpvYnMgYmVjYXVzZSB0aGV5IHNraXAgSmF2YSBjb21waWxhdGlvbi4iLCJGcmVlc3R5bGUgam9icyBjYW5ub3QgYmUgZXhlY3V0ZWQgb24gcmVtb3RlIGJ1aWxkIGFnZW50cy4iLCJEZWNsYXJhdGl2ZSBwaXBlbGluZXMgbGl2ZSBpbiBTQ00sIHVuZGVyZ28gcGVlciBjb2RlIHJldmlld3MsIHN1cHBvcnQgbXVsdGlicmFuY2ggZGlzY292ZXJ5LCBhbmQgZW5mb3JjZSBzdHJ1Y3R1cmVkIGVycm9yIGhhbmRsaW5nLiIsIkRlY2xhcmF0aXZlIHN5bnRheCBhbGxvd3MgZGV2ZWxvcGVycyB0byB3cml0ZSByYXcgc2hlbGwgc2NyaXB0cyB3aXRob3V0IG5lZWRpbmcgdmVyc2lvbiBjb250cm9sLiJd",
    "answer": "Mg=="
  },
  {
    "subject": "jenkins",
    "subjectLabel": "📜 Declarative Pipelines & Shared Libraries",
    "question": "56. How do Jenkins Shared Libraries (`vars/`) apply the KISS principle across enterprise microservice fleets?",
    "options": "WyJUaGV5IGVuY2Fwc3VsYXRlIHJlcGV0aXRpdmUgYnVpbGQsIHRlc3QsIGFuZCBub3RpZmljYXRpb24gbG9naWMgaW50byBjZW50cmFsIEdyb292eSBzdGVwcywga2VlcGluZyBhcHBsaWNhdGlvbiBgSmVua2luc2ZpbGVgIGRlZmluaXRpb25zIHVuZGVyIDUgbGluZXMuIiwiVGhleSByZXBsYWNlIGFsbCBgSmVua2luc2ZpbGVgIGRlZmluaXRpb25zIHdpdGggYSBzaW5nbGUgWE1MIGNvbmZpZ3VyYXRpb24gZmlsZS4iLCJUaGV5IGFsbG93IGRldmVsb3BlcnMgdG8gcnVuIGJ1aWxkcyB3aXRob3V0IG5lZWRpbmcgYSBKZW5raW5zIGNvbnRyb2xsZXIuIiwiVGhleSBhdXRvbWF0aWNhbGx5IGNvbnZlcnQgR3Jvb3Z5IGNvZGUgaW50byBjb21waWxlZCBDKysgYmluYXJpZXMuIl0=",
    "answer": "MA=="
  },
  {
    "subject": "jenkins",
    "subjectLabel": "📜 Declarative Pipelines & Shared Libraries",
    "question": "57. In the Monk tradition of 'Shuddhi' (purity), why is calling `cleanWs()` inside the pipeline `post` block essential?",
    "options": "WyJJdCBkZWxldGVzIHRoZSBwaXBlbGluZSBkZWZpbml0aW9uIGZyb20gdmVyc2lvbiBjb250cm9sIHRvIHByZXZlbnQgdW5hdXRob3JpemVkIGFjY2Vzcy4iLCJJdCByZXNldHMgdGhlIEplbmtpbnMgY29udHJvbGxlciBjb25maWd1cmF0aW9uIGJhY2sgdG8gZGVmYXVsdCBzZXR0aW5ncy4iLCJJdCBjbGVhcnMgYWxsIGhpc3RvcmljYWwgYnVpbGQgbG9ncyBmcm9tIHRoZSBQcm9tZXRoZXVzIG1ldHJpY3MgZW5kcG9pbnQuIiwiSXQgZ3VhcmFudGVlcyB0aGF0IHdvcmtlciBhZ2VudHMgcHVyZ2UgdGVtcG9yYXJ5IGJ1aWxkIGZpbGVzLCBjYWNoZWQgY3JlZGVudGlhbHMsIGFuZCB3b3Jrc3BhY2UgcmVzaWR1ZSBiZWZvcmUgcmV0dXJuaW5nIHRvIHRoZSBleGVjdXRvciBwb29sLiJd",
    "answer": "Mw=="
  },
  {
    "subject": "jenkins",
    "subjectLabel": "⚡ Ephemeral Agents & Execution Scaling",
    "question": "58. How does the Monk concept of 'Anitya' (impermanence) eliminate fragile 'snowflake' build servers?",
    "options": "WyJCeSBydW5uaW5nIGFsbCBidWlsZCB3b3JrbG9hZHMgaW5zaWRlIHN0YXRpYyBsb25nLWxpdmVkIHZpcnR1YWwgbWFjaGluZXMgdGhhdCBhcmUgbmV2ZXIgcmVib290ZWQuIiwiQnkgcmVwbGFjaW5nIGFsbCBMaW51eCBzZXJ2ZXJzIHdpdGggcGVybWFuZW50IFdpbmRvd3MgdmlydHVhbCBtYWNoaW5lcy4iLCJCeSB0cmVhdGluZyB3b3JrZXIgYWdlbnRzIGFzIGRpc3Bvc2FibGUsIHNpbmdsZS11c2UgY29udGFpbmVycyB0aGF0IHNwaW4gdXAgb24gZGVtYW5kLCBleGVjdXRlIGlzb2xhdGVkIHRhc2tzLCBhbmQgc2VsZi1kZXN0cnVjdC4iLCJCeSBkaXNhYmxpbmcgYnVpbGQgYWdlbnQgYXV0by1zY2FsaW5nIGR1cmluZyBidXNpbmVzcyBob3Vycy4iXQ==",
    "answer": "Mg=="
  },
  {
    "subject": "jenkins",
    "subjectLabel": "⚡ Ephemeral Agents & Execution Scaling",
    "question": "59. What is a key architectural benefit of running integration tests inside a Kubernetes Pod template with sidecar containers?",
    "options": "WyJBcHBsaWNhdGlvbiBjb2RlIGFuZCBlcGhlbWVyYWwgZGF0YWJhc2Ugc2lkZWNhcnMgKGUuZy4sIFBvc3RncmVTUUwpIHJ1biB3aXRoaW4gdGhlIHNhbWUgcG9kIGJvdW5kYXJ5IG9uIGBsb2NhbGhvc3RgLCBpc29sYXRlZCBmcm9tIG90aGVyIGJ1aWxkcy4iLCJTaWRlY2FyIGNvbnRhaW5lcnMgYXV0b21hdGljYWxseSBieXBhc3MgbmV0d29yayBzZWN1cml0eSBmaXJld2FsbHMuIiwiUG9kIHRlbXBsYXRlcyBlbGltaW5hdGUgdGhlIG5lZWQgZm9yIGNvbnRhaW5lciBpbWFnZXMuIiwiSW50ZWdyYXRpb24gdGVzdCBzaWRlY2FycyBjYW4gcnVuIHdpdGhvdXQgY29uc3VtaW5nIENQVSBvciBtZW1vcnkgcmVzb3VyY2VzLiJd",
    "answer": "MA=="
  },
  {
    "subject": "jenkins",
    "subjectLabel": "⚡ Ephemeral Agents & Execution Scaling",
    "question": "60. How can dynamic ephemeral agents achieve rapid compilation speeds without preserving state across builds?",
    "options": "WyJCeSBkaXNhYmxpbmcgdW5pdCB0ZXN0cyBkdXJpbmcgcGVhayBwcm9kdWN0aW9uIGhvdXJzLiIsIkJ5IG1vdW50aW5nIHBlcnNpc3RlbnQgaG9zdCBjYWNoZSBkaXJlY3RvcmllcyAoZS5nLiwgYH4vLm0yYCwgYH4vLmNjYWNoZWApIGludG8gdGhlIGVwaGVtZXJhbCBjb250YWluZXIgc3BlYy4iLCJCeSBydW5uaW5nIGJ1aWxkcyBkaXJlY3RseSBpbnNpZGUgdGhlIEplbmtpbnMgY29udHJvbGxlciBKVk0gbWVtb3J5LiIsIkJ5IHN0b3JpbmcgYWxsIHByb2plY3Qgc291cmNlIGNvZGUgaW5zaWRlIERvY2tlciBpbWFnZSBsYXllcnMuIl0=",
    "answer": "MQ=="
  },
  {
    "subject": "jenkins",
    "subjectLabel": "⚙️ Administration & Configuration as Code (JCasC)",
    "question": "61. What is the fundamental rule of Jenkins Configuration as Code (JCasC)?",
    "options": "WyJBbGwgcGx1Z2luIGluc3RhbGxhdGlvbnMgbXVzdCBiZSBjb25maWd1cmVkIG1hbnVhbGx5IHVzaW5nIHRoZSBKZW5raW5zIEdVSS4iLCJTeXN0ZW0gY29uZmlndXJhdGlvbnMgbXVzdCBiZSBzcGxpdCBhY3Jvc3MgYXQgbGVhc3QgMTAgc2VwYXJhdGUgWE1MIGZpbGVzLiIsIklmIGEgc3lzdGVtIHNldHRpbmcgaXMgbm90IGV4cGxpY2l0bHkgZGVjbGFyZWQgaW4gYGplbmtpbnMueWFtbGAsIGl0IGRvZXMgbm90IGV4aXN04oCUdGhlIEdVSSBiZWNvbWVzIGEgcmVhZC1vbmx5IGRhc2hib2FyZC4iLCJKQ2FzQyBjYW4gb25seSBiZSB1c2VkIG9uIHNpbmdsZS1ub2RlIGJhcmUtbWV0YWwgaW5zdGFsbGF0aW9ucy4iXQ==",
    "answer": "Mg=="
  },
  {
    "subject": "jenkins",
    "subjectLabel": "⚙️ Administration & Configuration as Code (JCasC)",
    "question": "62. How does pinning plugin versions in a `plugins.txt` file enforce system reproducibility?",
    "options": "WyJJdCBhbGxvd3MgSmVua2lucyB0byBkb3dubG9hZCB1bnJlbGVhc2VkIGV4cGVyaW1lbnRhbCBwbHVnaW5zIGF1dG9tYXRpY2FsbHkuIiwiSXQgZ3VhcmFudGVlcyBpZGVudGljYWwsIGJhdHRsZS10ZXN0ZWQgcGx1Z2luIGRlcGVuZGVuY3kgdHJlZXMgYWNyb3NzIGFsbCByZWdpb25hbCBjb250cm9sbGVycyB1c2luZyBgamVua2lucy1wbHVnaW4tY2xpYCBkdXJpbmcgaW1hZ2UgYXNzZW1ibHkuIiwiSXQgcHJldmVudHMgZGV2ZWxvcGVycyBmcm9tIG1vZGlmeWluZyBhcHBsaWNhdGlvbiBzb3VyY2UgY29kZSBpbiBTQ00uIiwiSXQgZGlzYWJsZXMgcGx1Z2luIHNlY3VyaXR5IHdhcm5pbmdzIGluIHRoZSBhZG1pbiBjb25zb2xlLiJd",
    "answer": "MQ=="
  },
  {
    "subject": "jenkins",
    "subjectLabel": "⚙️ Administration & Configuration as Code (JCasC)",
    "question": "63. How do `/quietDown` and `/safeRestart` endpoints facilitate peaceful controller maintenance?",
    "options": "WyJgL3F1aWV0RG93bmAgYmxvY2tzIG5ldyBpbmNvbWluZyBqb2JzIHRvIGRyYWluIGFjdGl2ZSBxdWV1ZXMgZ3JhY2VmdWxseSwgYWxsb3dpbmcgcnVubmluZyBwaXBlbGluZXMgdG8gZmluaXNoIGJlZm9yZSBgL3NhZmVSZXN0YXJ0YCByZWJvb3RzIHRoZSBzZXJ2ZXIuIiwiYC9xdWlldERvd25gIGltbWVkaWF0ZWx5IGtpbGxzIGFsbCBydW5uaW5nIHByb2Nlc3NlcyBhbmQgd2lwZXMgdGhlIGAvdmFyL2plbmtpbnNfaG9tZWAgZGlyZWN0b3J5LiIsImAvcXVpZXREb3duYCB0dXJucyBvZmYgbG9nIG91dHB1dCB0byBzYXZlIGRpc2sgc3BhY2UgZHVyaW5nIGFjdGl2ZSBidWlsZHMuIiwiYC9xdWlldERvd25gIHBhdXNlcyBhbGwgd2ViaG9va3MgcGVybWFuZW50bHkgdW50aWwgbWFudWFsbHkgY2xlYXJlZCBpbiB0aGUgR1VJLiJd",
    "answer": "MA=="
  },
  {
    "subject": "jenkins",
    "subjectLabel": "📊 Production Operations & Resilience",
    "question": "64. Which three high-signal metrics best reflect a calm, healthy, and responsive Jenkins controller?",
    "options": "WyJUb3RhbCBMaW5lcyBvZiBDb2RlIFdyaXR0ZW4sIEdpdCBDb21taXRzIHBlciBEYXksIGFuZCBTbGFjayBNZXNzYWdlIENvdW50IiwiTnVtYmVyIG9mIEluc3RhbGxlZCBQbHVnaW5zLCBUb3RhbCBVc2VyIEFjY291bnRzLCBhbmQgV29ya3NwYWNlIERpc2sgVXNhZ2UiLCJCdWlsZCBRdWV1ZSBXYWl0IFRpbWUsIENvbnRyb2xsZXIgSlZNIE1lbW9yeS9DUFUgVXRpbGl6YXRpb24sIGFuZCBBY3RpdmUgRXhlY3V0b3IgU2F0dXJhdGlvbiIsIkhUVFAgMjAwIFJlc3BvbnNlIENvdW50LCBEb2NrZXIgSW1hZ2UgU2l6ZSwgYW5kIFdlYmhvb2sgUmV0cnkgRnJlcXVlbmN5Il0=",
    "answer": "Mg=="
  },
  {
    "subject": "jenkins",
    "subjectLabel": "📊 Production Operations & Resilience",
    "question": "65. Why set initial heap (`-Xms`) equal to max heap (`-Xmx`) when configuring Jenkins with the G1GC garbage collector?",
    "options": "WyJJdCBhbGxvd3MgSmF2YSB0byBhbGxvY2F0ZSB1bmxpbWl0ZWQgUkFNIGR1cmluZyBidWlsZCBzcGlrZXMuIiwiSXQgZWxpbWluYXRlcyBkeW5hbWljIGhlYXAgcmVzaXppbmcgb3ZlcmhlYWQgYW5kIHNpZ25pZmljYW50bHkgcmVkdWNlcyBzdG9wLXRoZS13b3JsZCBHYXJiYWdlIENvbGxlY3Rpb24gcGF1c2VzLiIsIkl0IGRpc2FibGVzIGdhcmJhZ2UgY29sbGVjdGlvbiBlbnRpcmVseSBkdXJpbmcgYnVzaW5lc3MgaG91cnMuIiwiSXQgZm9yY2VzIEplbmtpbnMgdG8gcnVuIHN0cmljdGx5IGluc2lkZSBzd2FwIG1lbW9yeS4iXQ==",
    "answer": "MQ=="
  },
  {
    "subject": "gitlab-ci",
    "subjectLabel": "🦊 GitLab CI Production Grade",
    "question": "66. Under the 'Context of Monks' and Principle of Least Privilege, which GitLab role should be assigned to external auditors who need to review repository code and build execution logs without altering code?",
    "options": "WyJHdWVzdCIsIkRldmVsb3BlciIsIlJlcG9ydGVyIiwiTWFpbnRhaW5lciJd",
    "answer": "Mg=="
  },
  {
    "subject": "gitlab-ci",
    "subjectLabel": "🦊 GitLab CI Production Grade",
    "question": "67. To follow the KISS Principle in group hierarchy design, how should top-level sub-groups be structured across an enterprise?",
    "options": "WyJCeSBjb3JlIGJ1c2luZXNzIGNhcGFiaWxpdHkvZG9tYWluIHJhdGhlciB0aGFuIHRlbXBvcmFyeSBwcm9qZWN0IGNvZGVzIiwiQnkgaW5kaXZpZHVhbCBkZXZlbG9wZXIgcGVyc29uYWwgbmFtZXMgdG8gbWF4aW1pemUgZnJlZWRvbSIsIkJ5IGRlZXBseSBuZXN0aW5nIDE1IGxldmVscyBvZiBzdWItZ3JvdXBzIGZvciBldmVyeSBtaWNyby1mZWF0dXJlIiwiQnkgY3JlYXRpbmcgYSBmbGF0IGxpc3Qgb2YgNSwwMDAgdW5vcmdhbml6ZWQgcmVwb3NpdG9yaWVzIHVuZGVyIG9uZSB1c2VyIl0=",
    "answer": "MA=="
  },
  {
    "subject": "gitlab-ci",
    "subjectLabel": "🦊 GitLab CI Production Grade",
    "question": "68. Applying Nudge Theory to token governance, why are Project Access Tokens preferred over Personal Access Tokens for pipeline automation bots?",
    "options": "WyJUaGV5IGdpdmUgZ2xvYmFsIHJvb3QgYWRtaW4gcHJpdmlsZWdlcyBhY3Jvc3MgdGhlIGVudGlyZSBHaXRMYWIgaW5zdGFuY2UiLCJUaGV5IG5ldmVyIGV4cGlyZSBhbmQgY2Fubm90IGJlIHJldm9rZWQgYnkgYWRtaW5pc3RyYXRvcnMiLCJUaGV5IGJ5cGFzcyBhbGwgYnJhbmNoIHByb3RlY3Rpb24gcnVsZXMgYW5kIHNlY3VyaXR5IHNjYW5uaW5nIGdhdGVzIiwiVGhleSBhcmUgc2NvcGVkIHN0cmljdGx5IHRvIGEgc2luZ2xlIHByb2plY3QgYW5kIHRlcm1pbmF0ZSBhdXRvbWF0aWNhbGx5IGlmIHRoZSByZXBvc2l0b3J5IGlzIGFyY2hpdmVkIl0=",
    "answer": "Mw=="
  },
  {
    "subject": "gitlab-ci",
    "subjectLabel": "🦊 GitLab CI Production Grade",
    "question": "69. Why does the Shell executor violate the Monk context of 'stateless purity' in production microservice pipelines?",
    "options": "WyJJdCBydW5zIGJ1aWxkcyBpbnNpZGUgZXBoZW1lcmFsIEt1YmVybmV0ZXMgcG9kcyB0aGF0IGF1dG8tZGVsZXRlIiwiSXQgZXhlY3V0ZXMgY29tbWFuZHMgZGlyZWN0bHkgb24gdGhlIGhvc3QgT1MsIGxlYXZpbmcgcmVzaWR1YWwgZmlsZXMgYW5kIHN0YXRlIHRoYXQgY29udGFtaW5hdGUgZnV0dXJlIGJ1aWxkcyIsIkl0IGVuZm9yY2VzIERvY2tlciBjb250YWluZXIgaXNvbGF0aW9uIGZvciBldmVyeSBqb2IiLCJJdCBhdXRvbWF0aWNhbGx5IGVuY3J5cHRzIGFsbCBsb2NhbCBob3N0IGRpcmVjdG9yaWVzIHVwb24gZXhpdCJd",
    "answer": "MQ=="
  },
  {
    "subject": "gitlab-ci",
    "subjectLabel": "🦊 GitLab CI Production Grade",
    "question": "70. What prefix is used by modern, secure GitLab runner authentication tokens to replace legacy registration tokens?",
    "options": "WyJnbHBhdC0iLCJnbGNmdC0iLCJnbHJ0LSIsImdsc2FzdC0iXQ==",
    "answer": "Mg=="
  },
  {
    "subject": "gitlab-ci",
    "subjectLabel": "🦊 GitLab CI Production Grade",
    "question": "71. Under the KISS Principle, how should build toolchains (like JDKs, Node.js, or GCC) be managed across runner hosts?",
    "options": "WyJNYW51YWxseSBpbnN0YWxsIGV2ZXJ5IGNvbXBpbGVyIHZlcnNpb24gZGlyZWN0bHkgb24gdGhlIGJhcmUtbWV0YWwgcnVubmVyIGhvc3QiLCJQYWNrYWdlIHRoZSByZXF1aXJlZCBidWlsZCBlbnZpcm9ubWVudCBpbnNpZGUgdmVyc2lvbmVkIERvY2tlciBjb250YWluZXIgaW1hZ2VzIiwiV3JpdGUgNTAwLWxpbmUgc2hlbGwgc2NyaXB0cyBpbnNpZGUgZXZlcnkgam9iIHRvIGNvbXBpbGUgR0NDIGZyb20gc291cmNlIiwiU3RvcmUgY29tcGlsZXIgYmluYXJpZXMgaW4gdW5lbmNyeXB0ZWQgcGVyc29uYWwgYWNjZXNzIHRva2VuIHJlcG9zaXRvcmllcyJd",
    "answer": "MQ=="
  },
  {
    "subject": "gitlab-ci",
    "subjectLabel": "🦊 GitLab CI Production Grade",
    "question": "72. Which `.gitlab-ci.yml` keyword allows a downstream job to start immediately as soon as its prerequisite finishes, bypassing traditional stage boundaries?",
    "options": "WyJleHRlbmRzOiIsImluY2x1ZGU6IiwiaW5oZXJpdDoiLCJuZWVkczoiXQ==",
    "answer": "Mw=="
  },
  {
    "subject": "gitlab-ci",
    "subjectLabel": "🦊 GitLab CI Production Grade",
    "question": "73. What is the primary architectural difference between GitLab CI Artifacts and Cache?",
    "options": "WyJBcnRpZmFjdHMgcGFzcyBpbnRlcm1lZGlhdGUgYnVpbGQgb3V0cHV0cyBiZXR3ZWVuIHN0YWdlcyBpbiBhIHNpbmdsZSBwaXBlbGluZSBydW4sIHdoaWxlIENhY2hlIHJldXNlcyBleHRlcm5hbCBkZXBlbmRlbmNpZXMgYWNyb3NzIHJ1bnMiLCJBcnRpZmFjdHMgcHJlc2VydmUgdGhpcmQtcGFydHkgcGFja2FnZXMgYWNyb3NzIHBpcGVsaW5lIHJ1bnMsIHdoaWxlIENhY2hlIHBhc3NlcyBvdXRwdXRzIGJldHdlZW4gc3RhZ2VzIiwiQXJ0aWZhY3RzIGFyZSBzdG9yZWQgcGVybWFuZW50bHkgaW4gZ2l0IGhpc3RvcnksIHdoaWxlIENhY2hlIGV4aXN0cyBvbmx5IGluIFJBTSIsIkFydGlmYWN0cyBjYW4gb25seSBiZSBjcmVhdGVkIG9uIFNoZWxsIGV4ZWN1dG9ycywgd2hpbGUgQ2FjaGUgcmVxdWlyZXMgS3ViZXJuZXRlcyJd",
    "answer": "MA=="
  },
  {
    "subject": "gitlab-ci",
    "subjectLabel": "🦊 GitLab CI Production Grade",
    "question": "74. How does Nudge Theory streamline dependency caching in Maven or Node.js pipelines?",
    "options": "WyJCeSBwcm9tcHRpbmcgZGV2ZWxvcGVycyB0byB1cGxvYWQgemlwIGZpbGVzIG1hbnVhbGx5IGFmdGVyIGV2ZXJ5IGNvbW1pdCIsIkJ5IGtleWluZyB0aGUgY2FjaGUgb24gbG9ja2ZpbGUgaGFzaGVzIChwb20ueG1sIG9yIHBhY2thZ2UtbG9jay5qc29uKSBzbyBkZXBlbmRlbmN5IHJldXNlIGhhcHBlbnMgYXV0b21hdGljYWxseSIsIkJ5IGRlbGV0aW5nIHRoZSBjYWNoZSBldmVyeSA1IG1pbnV0ZXMgcmVnYXJkbGVzcyBvZiBidWlsZCBhY3Rpdml0eSIsIkJ5IGZvcmNpbmcgZXZlcnkgam9iIHRvIHJlLWRvd25sb2FkIGFsbCBkZXBlbmRlbmNpZXMgZnJvbSBwdWJsaWMgbWlycm9ycyJd",
    "answer": "MQ=="
  },
  {
    "subject": "gitlab-ci",
    "subjectLabel": "🦊 GitLab CI Production Grade",
    "question": "75. What group-level housekeeping policy prevents object storage bloat from accumulating old build outputs?",
    "options": "WyJGb3JjZSBSZXRhaW4gQWxsIEFydGlmYWN0cyBmb3JldmVyIiwiRGlzYWJsZSBPYmplY3QgU3RvcmFnZSBlbnRpcmVseSIsIktlZXAgTGF0ZXN0IEFydGlmYWN0IHBvbGljeSIsIkRlbGV0ZSByZXBvc2l0b3J5IGdpdCBoaXN0b3J5IG9uIGV2ZXJ5IHB1c2giXQ==",
    "answer": "Mg=="
  },
  {
    "subject": "gitlab-ci",
    "subjectLabel": "🦊 GitLab CI Production Grade",
    "question": "76. How can platform administrators prevent a single resource-intensive repository from starving other projects of runner compute?",
    "options": "WyJCeSBncmFudGluZyB1bmxpbWl0ZWQgcm9vdCBhY2Nlc3MgdG8gYWxsIHVzZXJzIiwiQnkgZGlzYWJsaW5nIHJ1bm5lciB0YWdzIGFjcm9zcyB0aGUgZW50aXJlIGluc3RhbmNlIiwiQnkgY29udmVydGluZyBhbGwgRG9ja2VyIGV4ZWN1dG9ycyB0byBiYXJlLW1ldGFsIFNoZWxsIHJ1bm5lcnMiLCJCeSBlc3RhYmxpc2hpbmcgbW9udGhseSBjb21wdXRlIG1pbnV0ZSBxdW90YXMgYW5kIGpvYiBjb25jdXJyZW5jeSBjZWlsaW5ncyBhdCB0aGUgc3ViLWdyb3VwIGxldmVsIl0=",
    "answer": "Mw=="
  },
  {
    "subject": "gitlab-ci",
    "subjectLabel": "🦊 GitLab CI Production Grade",
    "question": "77. In the context of automated housekeeping, how should ephemeral or offline runner nodes be handled when they stop reporting heartbeats?",
    "options": "WyJBdXRvbWF0aWNhbGx5IHVucmVnaXN0ZXIgb2ZmbGluZSBydW5uZXJzIHVzaW5nIEFQSSBjbGVhbnVwIHNjcmlwdHMgYWZ0ZXIgYSBkZXNpZ25hdGVkIHN0YWxlIHRocmVzaG9sZCIsIkxlYXZlIHRoZW0gcmVnaXN0ZXJlZCBpbmRlZmluaXRlbHkgdG8gYWNjdW11bGF0ZSBqb2IgcXVldWVzIiwiUmVib290IHRoZSBtYXN0ZXIgR2l0TGFiIGRhdGFiYXNlIHNlcnZlciBldmVyeSBob3VyIiwiSW5jcmVhc2Ugam9iIHRpbWVvdXQgbGltaXRzIHRvIDQ4IGhvdXJzIGZvciBhbGwgcGVuZGluZyBqb2JzIl0=",
    "answer": "MA=="
  },
  {
    "subject": "gitlab-ci",
    "subjectLabel": "🦊 GitLab CI Production Grade",
    "question": "78. What happens when a CI/CD variable is configured with the 'Masked' attribute in GitLab?",
    "options": "WyJUaGUgdmFyaWFibGUgaXMgZGVsZXRlZCBpbW1lZGlhdGVseSBhZnRlciB0aGUgcGlwZWxpbmUgc3RhcnRzIiwiSXRzIHZhbHVlIGlzIGF1dG9tYXRpY2FsbHkgb2JmdXNjYXRlZCBhcyBbTUFTS0VEXSBpbiBjb25zb2xlIGpvYiBsb2dzIGlmIGFjY2lkZW50YWxseSBwcmludGVkIiwiSXQgY2FuIG9ubHkgYmUgdmlld2VkIGJ5IEd1ZXN0IHVzZXJzIGluIHRoZSByZXBvc2l0b3J5IFVJIiwiSXQgaXMgYXBwZW5kZWQgdG8gZXZlcnkgY29tbWl0IG1lc3NhZ2UgYXV0b21hdGljYWxseSJd",
    "answer": "MQ=="
  },
  {
    "subject": "gitlab-ci",
    "subjectLabel": "🦊 GitLab CI Production Grade",
    "question": "79. What restriction does the 'Protected Variable' flag impose on pipeline execution?",
    "options": "WyJUaGUgdmFyaWFibGUgaXMgb25seSBhY2Nlc3NpYmxlIHRvIGpvYnMgcnVubmluZyBvbiBQcm90ZWN0ZWQgQnJhbmNoZXMgb3IgUHJvdGVjdGVkIFRhZ3MiLCJUaGUgdmFyaWFibGUgY2FuIG9ubHkgYmUgdXNlZCBpbnNpZGUgZG9ja2VyLWluLWRvY2tlciBjb250YWluZXJzIiwiVGhlIHZhcmlhYmxlIGlzIHZpc2libGUgdG8gYWxsIHB1YmxpYyBwdWxsIHJlcXVlc3RzIGZyb20gZXh0ZXJuYWwgZm9ya3MiLCJUaGUgdmFyaWFibGUgZXhwaXJlcyBhdXRvbWF0aWNhbGx5IGFmdGVyIDYwIHNlY29uZHMiXQ==",
    "answer": "MA=="
  },
  {
    "subject": "gitlab-ci",
    "subjectLabel": "🦊 GitLab CI Production Grade",
    "question": "80. Applying the KISS Principle to security scanning, how should SAST and Secret Detection be enabled in `.gitlab-ci.yml`?",
    "options": "WyJCeSB3cml0aW5nIGN1c3RvbSByZWdleCBwYXJzaW5nIHNjcmlwdHMgaW4gUHl0aG9uIGZvciBldmVyeSByZXBvc2l0b3J5IiwiQnkgbWFudWFsbHkgZXhlY3V0aW5nIGV4dGVybmFsIGNvbW1lcmNpYWwgc2Nhbm5lcnMgb24gbG9jYWwgZGV2ZWxvcGVyIGxhcHRvcHMiLCJCeSBpbmNsdWRpbmcgb2ZmaWNpYWwgR2l0TGFiIFNlY3VyaXR5IFRlbXBsYXRlcyB2aWEgYSBzaW5nbGUgJ2luY2x1ZGU6JyBzdGF0ZW1lbnQiLCJCeSBkaXNhYmxpbmcgYWxsIGF1dG9tYXRlZCBjaGVja3MgYW5kIHJlbHlpbmcgb24gYW5udWFsIG1hbnVhbCBhdWRpdHMiXQ==",
    "answer": "Mg=="
  },
  {
    "subject": "gitlab-ci",
    "subjectLabel": "🦊 GitLab CI Production Grade",
    "question": "81. How does OIDC (OpenID Connect) integration with HashiCorp Vault enhance pipeline secret security?",
    "options": "WyJJdCBoYXJkY29kZXMgbG9uZy1saXZlZCByb290IHBhc3N3b3JkcyBkaXJlY3RseSBpbnRvIC5naXRsYWItY2kueW1sIiwiSXQgYnlwYXNzZXMgYWxsIG5ldHdvcmsgZmlyZXdhbGxzIGFuZCBTU0wgY2VydGlmaWNhdGUgY2hlY2tzIiwiSXQgZmV0Y2hlcyBkeW5hbWljLCBzaG9ydC1saXZlZCBjcmVkZW50aWFscyBmb3IgcGlwZWxpbmUgam9icyB3aXRob3V0IHN0b3Jpbmcgc3RhdGljIHBhc3N3b3JkcyBpbiBHaXRMYWIiLCJJdCBhdXRvbWF0aWNhbGx5IGVtYWlscyBwcml2YXRlIGtleXMgdG8gYWxsIGdyb3VwIG1lbWJlcnMgdXBvbiBqb2IgY29tcGxldGlvbiJd",
    "answer": "Mg=="
  },
  {
    "subject": "gitlab-ci",
    "subjectLabel": "🦊 GitLab CI Production Grade",
    "question": "82. What is the role of a `.gitlab/CODEOWNERS` file in production deployment governance?",
    "options": "WyJJdCBhdXRvbWF0aWNhbGx5IGFzc2lnbnMgdXNlciBiaWxsaW5nIHJhdGVzIHRvIGluZGl2aWR1YWwgbGluZXMgb2YgY29kZSIsIkl0IGVuZm9yY2VzIG1hbmRhdG9yeSBjb2RlIG93bmVyIHJldmlld3MgYW5kIGFwcHJvdmFscyBiZWZvcmUgY2hhbmdlcyB0byBzZW5zaXRpdmUgZmlsZXMgb3IgcGF0aHMgY2FuIGJlIG1lcmdlZCIsIkl0IGNvbnZlcnRzIGFsbCBZQU1MIGZpbGVzIGludG8gZXhlY3V0YWJsZSBiYXNoIHNjcmlwdHMiLCJJdCBncmFudHMgR3Vlc3QgdXNlcnMgd3JpdGUgYWNjZXNzIHRvIHRoZSBtYWluIGJyYW5jaCJd",
    "answer": "MQ=="
  },
  {
    "subject": "gitlab-ci",
    "subjectLabel": "🦊 GitLab CI Production Grade",
    "question": "83. What is the purpose of the `default:` block in `.gitlab-ci.yml`?",
    "options": "WyJUbyBkZWZpbmUgZmFsbGJhY2sgc2V0dGluZ3MgbGlrZSBiYXNlIGNvbnRhaW5lciBpbWFnZXMsIHJldHJpZXMsIGFuZCB0aW1lb3V0cyBhY3Jvc3MgYWxsIGpvYnMiLCJUbyBvdmVycmlkZSBhbGwgdmFyaWFibGUgdmFsdWVzIHdpdGggYmxhbmsgc3RyaW5ncyIsIlRvIGZvcmNlIGFsbCBqb2JzIHRvIHJ1biBzZXF1ZW50aWFsbHkgd2l0aG91dCBwYXJhbGxlbCBleGVjdXRpb24iLCJUbyBsb2NrIHRoZSBnaXQgcmVwb3NpdG9yeSBhZ2FpbnN0IGZ1cnRoZXIgY29tbWl0cyJd",
    "answer": "MA=="
  },
  {
    "subject": "gitlab-ci",
    "subjectLabel": "🦊 GitLab CI Production Grade",
    "question": "84. Which executor type dynamically provisions ephemeral Kubernetes Pods on demand for high-volume enterprise pipelines?",
    "options": "WyJTaGVsbCBFeGVjdXRvciIsIlZpcnR1YWxCb3ggRXhlY3V0b3IiLCJTU0ggRXhlY3V0b3IiLCJLdWJlcm5ldGVzIEV4ZWN1dG9yIl0=",
    "answer": "Mw=="
  },
  {
    "subject": "gitlab-ci",
    "subjectLabel": "🦊 GitLab CI Production Grade",
    "question": "85. How does a Protected Environment with `when: manual` nudge teams toward safe production deployments?",
    "options": "WyJCeSB0cmlnZ2VyaW5nIGF1dG9tYXRpYyBkZXBsb3ltZW50cyBvbiBldmVyeSBicm9rZW4gY29tbWl0IiwiQnkgcmVxdWlyaW5nIGV4cGxpY2l0IG1hbnVhbCBhcHByb3ZhbCBhbmQgYXV0aG9yaXplZCB1c2VyIHJvbGVzIGJlZm9yZSBleGVjdXRpbmcgbGl2ZSBlbnZpcm9ubWVudCBkZXBsb3ltZW50cyIsIkJ5IGRlbGV0aW5nIHN0YWdpbmcgZGF0YWJhc2VzIGF1dG9tYXRpY2FsbHkgcHJpb3IgdG8gcmVsZWFzZSIsIkJ5IHNraXBwaW5nIGFsbCB1bml0IHRlc3RzIGR1cmluZyBwcm9kdWN0aW9uIGRlcGxveW1lbnQiXQ==",
    "answer": "MQ=="
  },
  {
    "subject": "azure-devops",
    "subjectLabel": "☁️ Azure DevOps Production-Grade Mastery",
    "question": "86. According to the Indian Monk principle of 'Aparigraha' in Azure DevOps, how should user identities and access be managed to maintain a clean, zero-trust foundation?",
    "options": "WyJCeSBjcmVhdGluZyBsb2NhbCBhZG1pbmlzdHJhdGl2ZSBhY2NvdW50cyBkaXJlY3RseSBpbnNpZGUgZWFjaCBBenVyZSBEZXZPcHMgcHJvamVjdCBmb3IgcXVpY2sgZW1lcmdlbmN5IGFjY2VzcyIsIkJ5IGNvbm5lY3RpbmcgQXp1cmUgRGV2T3BzIGRpcmVjdGx5IHRvIEF6dXJlIEVudHJhIElEIGFuZCBhdXRvbWF0aW5nIGVudGl0bGVtZW50cyB1c2luZyBncm91cCBydWxlcyByYXRoZXIgdGhhbiB1bmxpbmtlZCBsb2NhbCBhY2NvdW50cyIsIkJ5IGRpc3RyaWJ1dGluZyBwZXJzb25hbCBhY2Nlc3MgdG9rZW5zIChQQVRzKSB3aXRoIGxvbmcgZXhwaXJhdGlvbiBwZXJpb2RzIHRvIGF2b2lkIHJlLWF1dGhlbnRpY2F0aW9uIGZyaWN0aW9uIiwiQnkgYXNzaWduaW5nIGluZGl2aWR1YWwgcGVybWlzc2lvbnMgdG8gZWFjaCBkZXZlbG9wZXIgYmFzZWQgb24gdGhlaXIgY3VycmVudCBhY3RpdmUgdGFza3MiXQ==",
    "answer": "MQ=="
  },
  {
    "subject": "azure-devops",
    "subjectLabel": "☁️ Azure DevOps Production-Grade Mastery",
    "question": "87. Which Azure DevOps organization policy configuration acts as a subtle 'Nudge' to prevent accidental code exposure and force workload identity usage?",
    "options": "WyJEaXNhYmxpbmcgcHVibGljIHByb2plY3RzLCByZXN0cmljdGluZyBwcm9qZWN0IGNyZWF0aW9uLCBhbmQgZGlzYWxsb3dpbmcgUEFUIGNyZWF0aW9uIGZvciBub24tYWRtaW4gdXNlcnMiLCJNYW5kYXRpbmcgd2Vla2x5IHBhc3N3b3JkIGNoYW5nZXMgZm9yIGFsbCBkZXZlbG9wZXJzIGluIHRoZSBvcmdhbml6YXRpb24iLCJEaXNhYmxpbmcgYWxsIHBpcGVsaW5lIGJ1aWxkIHZhbGlkYXRpb24gY2hlY2tzIGFjcm9zcyByZXBvc2l0b3JpZXMiLCJBbGxvd2luZyBwdWJsaWMgYWNjZXNzIHRvIGFsbCByZXBvc2l0b3J5IGJyYW5jaGVzIHdoaWxlIHJlcXVpcmluZyBlbWFpbCBub3RpZmljYXRpb25zIl0=",
    "answer": "MA=="
  },
  {
    "subject": "azure-devops",
    "subjectLabel": "☁️ Azure DevOps Production-Grade Mastery",
    "question": "88. How does Just-In-Time (JIT) elevation via Entra ID Privileged Identity Management (PIM) eliminate standing admin privilege risks?",
    "options": "WyJJdCBhdXRvLWFwcHJvdmVzIGFsbCBhZG1pbiByZXF1ZXN0cyB3aXRob3V0IHJlcXVpcmluZyBtdWx0aS1mYWN0b3IgYXV0aGVudGljYXRpb24iLCJJdCBncmFudHMgcGVybWFuZW50IGFkbWluIHJpZ2h0cyBidXQgbG9ncyBldmVyeSBhY3Rpb24gdG8gYSB0ZXh0IGZpbGUgb24gYSBsb2NhbCBzZXJ2ZXIiLCJJdCBncmFudHMgdGVtcG9yYXJ5LCB0aW1lLWJvdW5kZWQgZWxldmF0aW9uIHJlcXVpcmluZyBNRkEgYW5kIHRpY2tldCByZWZlcmVuY2VzLCBsZWF2aW5nIHplcm8gc3RhdGljIGFkbWluIGFjY291bnRzIiwiSXQgcm90YXRlcyBzdGF0aWMgcGFzc3dvcmRzIGV2ZXJ5IDI0IGhvdXJzIHdoaWxlIGtlZXBpbmcgdXNlciBwZXJtaXNzaW9ucyBhY3RpdmUgaW5kZWZpbml0ZWx5Il0=",
    "answer": "Mg=="
  },
  {
    "subject": "azure-devops",
    "subjectLabel": "☁️ Azure DevOps Production-Grade Mastery",
    "question": "89. In the context of 'Eka Vriksha' and the KISS principle, why is Trunk-Based Development preferred over legacy multi-branch GitFlow?",
    "options": "WyJCZWNhdXNlIGl0IHJlcXVpcmVzIGRldmVsb3BlcnMgdG8gbWFpbnRhaW4gcmVsZWFzZSwgaG90Zml4LCBmZWF0dXJlLCBhbmQgZGV2ZWxvcCBicmFuY2hlcyBzaW11bHRhbmVvdXNseSIsIkJlY2F1c2UgZGlyZWN0IGNvbW1pdHMgdG8gdGhlICdtYWluJyBicmFuY2ggc3BlZWQgdXAgZGVwbG95bWVudCB0aW1lcyBkdXJpbmcgcGVhayBidXNpbmVzcyBob3VycyIsIkJlY2F1c2UgaXQgcHJldmVudHMgYXV0b21hdGVkIENJIHBpcGVsaW5lcyBmcm9tIHJ1bm5pbmcgdW5pdCB0ZXN0cyBvbiBwdWxsIHJlcXVlc3RzIiwiQmVjYXVzZSBpdCBlbGltaW5hdGVzIGNvZ25pdGl2ZSBjbHV0dGVyIGJ5IHVzaW5nIHNob3J0LWxpdmVkIGZlYXR1cmUgYnJhbmNoZXMgdGhhdCBzcXVhc2gtbWVyZ2UgZGlyZWN0bHkgaW50byB0aGUgc2FjcmVkICdtYWluJyB0cnVuayJd",
    "answer": "Mw=="
  },
  {
    "subject": "azure-devops",
    "subjectLabel": "☁️ Azure DevOps Production-Grade Mastery",
    "question": "90. How do Azure Repos branch policies nudge developers toward high-quality, audited code before merging into 'main'?",
    "options": "WyJCeSBzZW5kaW5nIGF1dG9tYXRlZCByZW1pbmRlciBlbWFpbHMgZXZlcnkgbW9ybmluZyB0byBjb21wbGV0ZSBwZW5kaW5nIHB1bGwgcmVxdWVzdHMiLCJCeSBkaXNhYmxpbmcgdGhlICdDb21wbGV0ZSBQUicgYnV0dG9uIHVudGlsIG1hbmRhdG9yeSBidWlsZCB2YWxpZGF0aW9uIGNoZWNrcyBwYXNzLCB3b3JrIGl0ZW1zIGFyZSBsaW5rZWQsIGFuZCByZXF1aXJlZCByZXZpZXdlcnMgYXBwcm92ZSIsIkJ5IGF1dG9tYXRpY2FsbHkgZGVsZXRpbmcgZmVhdHVyZSBicmFuY2hlcyBpZiBhIGJ1aWxkIGZhaWx1cmUgb2NjdXJzIGR1cmluZyBjb21waWxhdGlvbiIsIkJ5IGFsbG93aW5nIGRldmVsb3BlcnMgdG8gYXBwcm92ZSB0aGVpciBvd24gcHVsbCByZXF1ZXN0cyBpZiB0aGV5IHBhc3MgbG9jYWwgdW5pdCB0ZXN0cyJd",
    "answer": "MQ=="
  },
  {
    "subject": "azure-devops",
    "subjectLabel": "☁️ Azure DevOps Production-Grade Mastery",
    "question": "91. How does Advanced Security Push Protection in Azure Repos uphold repository hygiene when a developer commits an API token?",
    "options": "WyJJdCBhY2NlcHRzIHRoZSBwdXNoIGJ1dCBzaWxlbnRseSBlbWFpbHMgdGhlIHNlY3VyaXR5IHRlYW0gMjQgaG91cnMgbGF0ZXIiLCJJdCBpbnRlcmNlcHRzIHRoZSAnZ2l0IHB1c2gnIGNvbW1hbmQgYXQgdGhlIGxvY2FsIHRlcm1pbmFsIGFuZCByZWplY3RzIHRoZSBwdXNoIGluc3RhbnRseSBpZiB1bmVuY3J5cHRlZCBjcmVkZW50aWFscyBhcmUgZGV0ZWN0ZWQiLCJJdCBhdXRvbWF0aWNhbGx5IGVuY3J5cHRzIHRoZSBzZWNyZXQgYW5kIHJlcGxhY2VzIGl0IHdpdGggYSBwbGFjZWhvbGRlciBpbiB0aGUgcmVwb3NpdG9yeSBoaXN0b3J5IiwiSXQgY3JlYXRlcyBhIG5ldyBicmFuY2ggbmFtZWQgJ3NlY3VyaXR5LWZpeCcgYW5kIGNvbW1pdHMgdGhlIHNlY3JldCB0aGVyZSBhdXRvbWF0aWNhbGx5Il0=",
    "answer": "MQ=="
  },
  {
    "subject": "azure-devops",
    "subjectLabel": "☁️ Azure DevOps Production-Grade Mastery",
    "question": "92. Why are declarative YAML pipelines described as 'Sutras' in the Monk's DevOps philosophy compared to Classic visual UI pipelines?",
    "options": "WyJCZWNhdXNlIHZpc3VhbCBVSSBwaXBlbGluZXMgb2ZmZXIgYmV0dGVyIHZlcnNpb24gY29udHJvbCBoaXN0b3J5IGFuZCBicmFuY2ggaXNvbGF0aW9uIiwiQmVjYXVzZSBDbGFzc2ljIFVJIHBpcGVsaW5lcyBhdXRvbWF0aWNhbGx5IHVwZGF0ZSB3aGVuIG5ldyBjbG91ZCByZXNvdXJjZXMgYXJlIHByb3Zpc2lvbmVkIGluIEF6dXJlIiwiQmVjYXVzZSBZQU1MIHBpcGVsaW5lcyBhcmUgc3VjY2luY3QsIHZlcnNpb24tY29udHJvbGxlZCB0ZXh0IGluc3RydWN0aW9ucyBsaXZpbmcgYWxvbmdzaWRlIGNvZGUsIHByZXZlbnRpbmcgc2lsZW50IGNvbmZpZ3VyYXRpb24gZHJpZnQiLCJCZWNhdXNlIFlBTUwgc2NyaXB0cyByZXF1aXJlIGNvbXBsZXggdmlzdWFsIGRyYWctYW5kLWRyb3AgaW50ZXJmYWNlcyB0byBjb21waWxlIHByb3Blcmx5Il0=",
    "answer": "Mg=="
  },
  {
    "subject": "azure-devops",
    "subjectLabel": "☁️ Azure DevOps Production-Grade Mastery",
    "question": "93. What is the primary operational advantage of using Workload Identity Federation (OIDC) for Azure Service Connections over static Service Principal keys?",
    "options": "WyJJdCBleGNoYW5nZXMgc2hvcnQtbGl2ZWQsIGZlZGVyYXRlZCB0b2tlbnMgZHluYW1pY2FsbHkgcGVyIHBpcGVsaW5lIHJ1biwgZWxpbWluYXRpbmcgc3RhdGljIHBhc3N3b3Jkcywgcm90YXRpb24gb3ZlcmhlYWQsIGFuZCBzZWNyZXQgbGVha3MiLCJJdCByZXF1aXJlcyBzdG9yaW5nIGNsaWVudCBzZWNyZXRzIGluc2lkZSBBenVyZSBLZXkgVmF1bHQgd2l0aCA5MC1kYXkgcm90YXRpb24gc2NoZWR1bGVzIiwiSXQgYnlwYXNzZXMgQXp1cmUgRW50cmEgSUQgcm9sZS1iYXNlZCBhY2Nlc3MgY29udHJvbCB0byBhY2NlbGVyYXRlIGRlcGxveW1lbnQgc3BlZWRzIiwiSXQgYWxsb3dzIHBpcGVsaW5lcyB0byBhdXRoZW50aWNhdGUgdXNpbmcgdW5lbmNyeXB0ZWQgbG9jYWwgU1NIIGtleXMgc3RvcmVkIG9uIGJ1aWxkIGFnZW50cyJd",
    "answer": "MA=="
  },
  {
    "subject": "azure-devops",
    "subjectLabel": "☁️ Azure DevOps Production-Grade Mastery",
    "question": "94. How does modular template composition keep microservice YAML pipelines under 15 lines of code while enforcing enterprise build standards?",
    "options": "WyJCeSBlbWJlZGRpbmcgaW5saW5lIGJhc2ggc2NyaXB0cyBkaXJlY3RseSBpbnRvIGV2ZXJ5IHJlcG9zaXRvcnkncyByb290IFlBTUwgZmlsZSIsIkJ5IHN0b3JpbmcgcGlwZWxpbmUgc2V0dGluZ3MgaW4gZXh0ZXJuYWwgc3ByZWFkc2hlZXRzIHVwbG9hZGVkIHRvIEF6dXJlIEJsb2IgU3RvcmFnZSIsIkJ5IGNlbnRyYWxpemluZyBjb21waWxhdGlvbiwgc2VjdXJpdHkgc2Nhbm5pbmcsIGFuZCB0ZXN0aW5nIHN0ZXBzIGludG8gcmV1c2FibGUgdGVtcGxhdGUgZmlsZXMgcmVmZXJlbmNlZCBieSBhcHBsaWNhdGlvbiByZXBvc2l0b3JpZXMiLCJCeSBza2lwcGluZyBjb21waWxhdGlvbiBzdGVwcyBhbmQgcnVubmluZyB1bml0IHRlc3RzIGRpcmVjdGx5IGluc2lkZSBwcm9kdWN0aW9uIGNvbnRhaW5lciBpbnN0YW5jZXMiXQ==",
    "answer": "Mg=="
  },
  {
    "subject": "azure-devops",
    "subjectLabel": "☁️ Azure DevOps Production-Grade Mastery",
    "question": "95. What does the monastic concept of 'Gupteya' represent when architecting application secrets in cloud environments?",
    "options": "WyJTdG9yaW5nIHNlY3JldHMgaW4gcGxhaW4tdGV4dCBhcHBzZXR0aW5ncy5qc29uIGZpbGVzIHByb3RlY3RlZCBieSBvcGVyYXRpbmcgc3lzdGVtIGZpbGUgcGVybWlzc2lvbnMiLCJQcmludGluZyBkeW5hbWljIHNlY3JldCB2YWx1ZXMgdG8gcGlwZWxpbmUgc3Rkb3V0IGxvZ3MgZHVyaW5nIGRlYnVnZ2luZyBzZXNzaW9ucyB0byBjb25maXJtIGNvbm5lY3Rpb24gc3RyaW5ncyIsIkhhcmRjb2RpbmcgY29ubmVjdGlvbiBrZXlzIGRpcmVjdGx5IGluc2lkZSBEb2NrZXJmaWxlIGVudmlyb25tZW50IHZhcmlhYmxlcyIsIlRyZWF0aW5nIHNlY3JldHMgYXMgaW52aXNpYmxlIGVudGl0aWVzIHN0b3JlZCBpbiBhIGNlbnRyYWwgS2V5IFZhdWx0IHNhbmN0dWFyeSwgZmV0Y2hlZCBkeW5hbWljYWxseSBpbiBtZW1vcnksIGFuZCBuZXZlciBsb2dnZWQgb3IgaGFyZGNvZGVkIl0=",
    "answer": "Mw=="
  },
  {
    "subject": "azure-devops",
    "subjectLabel": "☁️ Azure DevOps Production-Grade Mastery",
    "question": "96. When linking an Azure Key Vault to an Azure DevOps Variable Group, how does the platform enforce the KISS principle during deployment runs?",
    "options": "WyJEZXZlbG9wZXJzIG11c3Qgd3JpdGUgY3VzdG9tIFBvd2VyU2hlbGwgc2NyaXB0cyBpbiBldmVyeSBwaXBlbGluZSBzdGVwIHRvIGZldGNoIHNlY3JldHMgdXNpbmcgUkVTVCBBUElzIiwiU2VjcmV0cyBhcmUgYXV0b21hdGljYWxseSBhYnN0cmFjdGVkIGludG8gcGlwZWxpbmUgZW52aXJvbm1lbnQgdmFyaWFibGVzIHdpdGhvdXQgcmVxdWlyaW5nIGN1c3RvbSBzZWNyZXQtcmV0cmlldmFsIGNvZGUgaW4gYXBwbGljYXRpb24gc2NyaXB0cyIsIlNlY3JldHMgYXJlIGRvd25sb2FkZWQgdG8gYSB0ZXh0IGZpbGUgb24gdGhlIGFnZW50J3Mgd29ya3NwYWNlIGZvbGRlciBiZWZvcmUgZXhlY3V0aW9uIGJlZ2lucyIsIlNlY3JldHMgYXJlIGhhcmRjb2RlZCBpbnRvIHRoZSBwaXBlbGluZSdzIFlBTUwgc291cmNlIGZpbGUgZHVyaW5nIHB1bGwgcmVxdWVzdCByZXZpZXdzIl0=",
    "answer": "MQ=="
  },
  {
    "subject": "azure-devops",
    "subjectLabel": "☁️ Azure DevOps Production-Grade Mastery",
    "question": "97. What automatic security guardrail does Azure DevOps execute if a deployment script accidentally echoes a Key Vault variable to standard console output?",
    "options": "WyJJdCB0ZXJtaW5hdGVzIHRoZSBlbnRpcmUgQXp1cmUgRGV2T3BzIG9yZ2FuaXphdGlvbiBpbW1lZGlhdGVseSIsIkl0IGVtYWlscyB0aGUgcGxhaW4tdGV4dCBzZWNyZXQgdmFsdWUgdG8gYWxsIG9yZ2FuaXphdGlvbiBhZG1pbmlzdHJhdG9ycyBmb3IgdmVyaWZpY2F0aW9uIiwiSXQgd3JpdGVzIHRoZSB1bm1hc2tlZCBzZWNyZXQgaW50byB0aGUgcmVwb3NpdG9yeSdzIG1haW4gYnJhbmNoIGNvbW1pdCBoaXN0b3J5IiwiSXQgYXV0b21hdGljYWxseSBpbnRlcmNlcHRzIHRoZSBvdXRwdXQgc3RyZWFtIGFuZCBjb252ZXJ0cyB0aGUgc2VjcmV0IHZhbHVlIGludG8gJyoqKicgaW4gdGhlIGNvbnNvbGUgbG9ncyJd",
    "answer": "Mw=="
  },
  {
    "subject": "azure-devops",
    "subjectLabel": "☁️ Azure DevOps Production-Grade Mastery",
    "question": "98. Viewing the Production Environment as a 'Garbhagriha' (Sacred Threshold) implies that releases must be governed by:",
    "options": "WyJJbnN0YW50LCBtYW51YWwgb3ZlcnJpZGVzIGJ5IGFueSBkZXZlbG9wZXIgZHVyaW5nIGVtZXJnZW5jeSBob3RmaXggc2NlbmFyaW9zIiwiVW5yZXN0cmljdGVkIGNvbnRpbnVvdXMgZGVwbG95bWVudCBzY3JpcHRzIHJ1bm5pbmcgc3RyYWlnaHQgZnJvbSBleHBlcmltZW50YWwgZmVhdHVyZSBicmFuY2hlcyIsIlNpbGVudCwgYXV0b21hdGVkIGhlYWx0aCBndWFyZGlhbnMgYW5kIHBvbGljeSBjaGVja3MgdGhhdCB2ZXJpZnkgc3RhYmlsaXR5IGJlZm9yZSBhbGxvd2luZyBwYXNzYWdlIGludG8gbGl2ZSBlbnZpcm9ubWVudHMiLCJXZWVrbHkgbWFudWFsIGVtYWlsIGNvbmZpcm1hdGlvbnMgc2VudCB0byB0ZWFtIGxlYWRzIGFmdGVyIGNvZGUgaXMgZGVwbG95ZWQgdG8gbGl2ZSB1c2VycyJd",
    "answer": "Mg=="
  },
  {
    "subject": "azure-devops",
    "subjectLabel": "☁️ Azure DevOps Production-Grade Mastery",
    "question": "99. How do automated Azure Monitor gates nudge engineering teams away from tiredness-induced 'rubber-stamping' of manual approvals?",
    "options": "WyJUaGV5IGF1dG9tYXRpY2FsbHkgcXVlcnkgdGVsZW1ldHJ5IGxpa2UgQXBwbGljYXRpb24gSW5zaWdodHMgYW5kIGFib3J0IHRoZSByZWxlYXNlIGlmIHN0YWdpbmcgZXJyb3Igc3Bpa2VzIGFyZSBkZXRlY3RlZCwgYmVmb3JlIG5vdGlmeWluZyBhIGh1bWFuIGFwcHJvdmVyIiwiVGhleSBzZW5kIFNNUyBub3RpZmljYXRpb25zIGV2ZXJ5IDUgbWludXRlcyB1bnRpbCBhbiBlbmdpbmVlciBtYW51YWxseSBhcHByb3ZlcyB0aGUgcmVsZWFzZSIsIlRoZXkgYXV0b21hdGljYWxseSBhcHByb3ZlIGFsbCBwcm9kdWN0aW9uIHJlbGVhc2VzIGlmIG5vIHRlYW0gbWVtYmVyIHJlc3BvbmRzIHdpdGhpbiAxNSBtaW51dGVzIiwiVGhleSByZXF1aXJlIGZvdXIgZGlmZmVyZW50IGh1bWFuIG1hbmFnZXJzIHRvIHNpZ24gb2ZmIG9uIHBoeXNpY2FsIHBhcGVyIGRvY3VtZW50cyBiZWZvcmUgZGVwbG95bWVudCJd",
    "answer": "MA=="
  },
  {
    "subject": "azure-devops",
    "subjectLabel": "☁️ Azure DevOps Production-Grade Mastery",
    "question": "100. In a Canary deployment strategy, how does Azure Pipelines handle a failure during post-traffic routing synthetic health probes?",
    "options": "WyJJdCBwYXVzZXMgdGhlIHBpcGVsaW5lIGluZGVmaW5pdGVseSB1bnRpbCBhIGRldmVsb3BlciBsb2dzIGludG8gdGhlIHNlcnZlciB0byBkZWJ1ZyIsIkl0IGNvbXBsZXRlcyB0aGUgZGVwbG95bWVudCB0byAxMDAlIG9mIHVzZXJzIGFuZCBsb2dzIGEgd2FybmluZyBtZXNzYWdlIGluIEF6dXJlIE1vbml0b3IiLCJJdCBleGVjdXRlcyBhdXRvbWF0ZWQgcm9sbGJhY2sgc3RlcHMgZGVmaW5lZCBpbiB0aGUgWUFNTCBwaXBlbGluZSB0byBzYWZlbHkgcmV2ZXJ0IHRyYWZmaWMgYXdheSBmcm9tIHRoZSBjYW5hcnkgc2xvdCIsIkl0IGRlbGV0ZXMgdGhlIHRhcmdldCBBenVyZSBSZXNvdXJjZSBHcm91cCB0byBwcmV2ZW50IGZ1cnRoZXIgdHJhZmZpYyBwcm9jZXNzaW5nIl0=",
    "answer": "Mg=="
  },
  {
    "subject": "azure-devops",
    "subjectLabel": "☁️ Azure DevOps Production-Grade Mastery",
    "question": "101. What happens when a developer attempts to run a YAML deployment pipeline targeting the 'Production' environment from a 'feature/test-patch' branch with Branch Control enabled for 'refs/heads/main'?",
    "options": "WyJUaGUgZGVwbG95bWVudCBydW5zIHN1Y2Nlc3NmdWxseSwgYnV0IGlzc3VlcyBhIHdhcm5pbmcgYmFubmVyIGluIHRoZSBwaXBlbGluZSBkYXNoYm9hcmQiLCJUaGUgZmVhdHVyZSBicmFuY2ggaXMgYXV0b21hdGljYWxseSBtZXJnZWQgaW50byAnbWFpbicgdG8gc2F0aXNmeSB0aGUgY29uc3RyYWludCIsIlRoZSBwaXBlbGluZSBjcmVhdGVzIGEgdGVtcG9yYXJ5IHByb2R1Y3Rpb24gZW52aXJvbm1lbnQgbmFtZWQgJ1Byb2R1Y3Rpb24tdGVzdC1wYXRjaCciLCJUaGUgZGVwbG95bWVudCBjaGVjayBmYWlscyBhdXRvbWF0aWNhbGx5LCBwcmV2ZW50aW5nIHRoZSBwaXBlbGluZSBmcm9tIHRvdWNoaW5nIHRoZSBQcm9kdWN0aW9uIGVudmlyb25tZW50Il0=",
    "answer": "Mw=="
  },
  {
    "subject": "azure-devops",
    "subjectLabel": "☁️ Azure DevOps Production-Grade Mastery",
    "question": "102. How is 'Sakshi Bhava' (Pure Witnessing) operationalized in Azure DevOps governance?",
    "options": "WyJCeSBtYW51YWxseSBpbnNwZWN0aW5nIHBpcGVsaW5lIGxvZ3Mgb25jZSBldmVyeSBtb250aCBkdXJpbmcgc2NoZWR1bGVkIG1haW50ZW5hbmNlIHdpbmRvd3MiLCJCeSBzdHJlYW1pbmcgYWxsIG9yZ2FuaXphdGlvbiBhdWRpdCBldmVudHMgYW5kIHBpcGVsaW5lIHRlbGVtZXRyeSBpbiByZWFsIHRpbWUgdG8gYSBjZW50cmFsaXplZCBMb2cgQW5hbHl0aWNzIFdvcmtzcGFjZSIsIkJ5IHJlcXVpcmluZyBkZXZlbG9wZXJzIHRvIGNhcHR1cmUgc2NyZWVuc2hvdHMgb2Ygc3VjY2Vzc2Z1bCBkZXBsb3ltZW50IHJ1bnMiLCJCeSBkaXNhYmxpbmcgYXVkaXQgbG9nZ2luZyB0byByZWR1Y2UgY2xvdWQgc3RvcmFnZSBjb3N0cyBhbmQgcGlwZWxpbmUgbGF0ZW5jeSJd",
    "answer": "MQ=="
  },
  {
    "subject": "azure-devops",
    "subjectLabel": "☁️ Azure DevOps Production-Grade Mastery",
    "question": "103. How does a scheduled nightly Terraform 'dry-run' pipeline act as an automated nudge against configuration drift?",
    "options": "WyJJdCBhdXRvbWF0aWNhbGx5IHVwZGF0ZXMgR2l0IHNvdXJjZSBjb2RlIHRvIG1hdGNoIHdoYXRldmVyIG1hbnVhbCB0d2Vha3MgZW5naW5lZXJzIG1hZGUgaW4gdGhlIEF6dXJlIFBvcnRhbCIsIkl0IGNvbXBhcmVzIHJ1bm5pbmcgY2xvdWQgaW5mcmFzdHJ1Y3R1cmUgYWdhaW5zdCBHaXQgZGVjbGFyYXRpdmUgc3RhdGUgYW5kIGFsZXJ0cyBlbmdpbmVlcnMgaWYgdW5hdXRob3JpemVkIG1hbnVhbCBwb3J0YWwgY2hhbmdlcyBvY2N1cnJlZCIsIkl0IGRlbGV0ZXMgYW55IGNsb3VkIHJlc291cmNlIHRoYXQgd2FzIGNyZWF0ZWQgbW9yZSB0aGFuIDcgZGF5cyBhZ28iLCJJdCBzaHV0cyBkb3duIGFsbCBwcm9kdWN0aW9uIHZpcnR1YWwgbWFjaGluZXMgZHVyaW5nIG9mZi1wZWFrIGhvdXJzIHRvIHNhdmUgY29zdHMiXQ==",
    "answer": "MQ=="
  },
  {
    "subject": "azure-devops",
    "subjectLabel": "☁️ Azure DevOps Production-Grade Mastery",
    "question": "104. Which daily hygiene practice aligns with the Monk Mindset to keep an Azure DevOps project free of operational entropy?",
    "options": "WyJBdXRvbWF0aWNhbGx5IGRlbGV0aW5nIGhlYWQgYnJhbmNoZXMgcG9zdC1QUiBjb21wbGV0aW9uLCByZXZva2luZyBpZGxlIFBBVHMsIGFuZCBwdXJnaW5nIG9ycGhhbmVkIHByZXZpZXcgZW52aXJvbm1lbnRzIiwiUmV0YWluaW5nIGFsbCBjb21wbGV0ZWQgZmVhdHVyZSBicmFuY2hlcyBpbmRlZmluaXRlbHkgaW4gR2l0IGZvciBoaXN0b3JpY2FsIHRyYWNraW5nIiwiR3JhbnRpbmcgcGVybWFuZW50IE9yZ2FuaXphdGlvbiBPd25lciBwcml2aWxlZ2VzIHRvIGFsbCB0ZWFtIG1lbWJlcnMgdG8gYXZvaWQgdGlja2V0IGJvdHRsZW5lY2tzIiwiS2VlcGluZyBsZWdhY3kgdmlzdWFsIENsYXNzaWMgcGlwZWxpbmVzIGFjdGl2ZSBhbG9uZ3NpZGUgbmV3IFlBTUwgcGlwZWxpbmVzIGZvciBiYWNrdXAiXQ==",
    "answer": "MA=="
  },
  {
    "subject": "azure-devops",
    "subjectLabel": "☁️ Azure DevOps Production-Grade Mastery",
    "question": "105. What is the ultimate goal of combining the Monk Mindset, KISS Principle, and Nudge Theory in production-grade Azure DevOps architecture?",
    "options": "WyJUbyBtYXhpbWl6ZSB0aGUgbnVtYmVyIG9mIG1hbnVhbCBhcHByb3ZhbCBnYXRlcyBhbmQgdmlzdWFsIFVJIGNvbmZpZ3VyYXRpb24gc2NyZWVucyIsIlRvIGJ1aWxkIGNvbXBsZXgsIG11bHRpLWxheWVyZWQgcGVybWlzc2lvbiBtYXRyaWNlcyB0aGF0IHJlcXVpcmUgZGVkaWNhdGVkIGFkbWluaXN0cmF0aW9uIHRlYW1zIiwiVG8gY3JlYXRlIGEgcXVpZXQsIHplcm8tZHJpZnQsIGhpZ2hseSBhdXRvbWF0ZWQgZW52aXJvbm1lbnQgd2hlcmUgdGhlIHNlY3VyZSwgY29tcGxpYW50IHBhdGggaXMgdGhlIGVhc2llc3QgZGVmYXVsdCBjaG9pY2UgZm9yIGRldmVsb3BlcnMiLCJUbyBlbGltaW5hdGUgQ0kvQ0QgYXV0b21hdGlvbiBhbmQgcmVseSBwdXJlbHkgb24gbG9jYWwgdGVybWluYWwgc2NyaXB0cyBleGVjdXRlZCBieSBzZW5pb3IgYXJjaGl0ZWN0cyJd",
    "answer": "Mg=="
  },
  {
    "subject": "sast_sonarqube",
    "subjectLabel": "🧘‍♂️ Mindful SAST & Production SonarQube",
    "question": "106. In the context of Part 1, how does the Indian Monk principle of 'Svadhyaya' reframe Static Application Security Testing (SAST)?",
    "options": "WyJBcyBhIGhpZ2gtcHJlc3N1cmUgYXVkaXQgZGVzaWduZWQgdG8gcGVuYWxpemUgZGV2ZWxvcGVycyBmb3IgcGFzdCBtaXN0YWtlcyIsIkFzIGEgZGFpbHksIG5vbi1qdWRnbWVudGFsIHJpdHVhbCBvZiBzZWxmLWluc3BlY3Rpb24gYW5kIHBlYWNlZnVsIHJlZmxlY3Rpb24gb24gc291cmNlIGNvZGUiLCJBcyBhIG1hbmRhdG9yeSBjb21wbGlhbmNlIGNoZWNrIGV4ZWN1dGVkIHJpZ2h0IGJlZm9yZSBwcm9kdWN0aW9uIGRlcGxveW1lbnQiLCJBcyBhbiBhdXRvbWF0ZWQgdG9vbCB0aGF0IGF1dG9tYXRpY2FsbHkgcmV3cml0ZXMgYWxsIGRldmVsb3BlciBjb2RlIl0=",
    "answer": "MQ=="
  },
  {
    "subject": "sast_sonarqube",
    "subjectLabel": "🧘‍♂️ Mindful SAST & Production SonarQube",
    "question": "107. Which security analysis methodology specifically inspects raw source code for flaws without executing the application?",
    "options": "WyJEQVNUIChEeW5hbWljIEFwcGxpY2F0aW9uIFNlY3VyaXR5IFRlc3RpbmcpIiwiU0NBIChTb2Z0d2FyZSBDb21wb3NpdGlvbiBBbmFseXNpcykiLCJTQVNUIChTdGF0aWMgQXBwbGljYXRpb24gU2VjdXJpdHkgVGVzdGluZykiLCJJQVNUIChJbnRlcmFjdGl2ZSBBcHBsaWNhdGlvbiBTZWN1cml0eSBUZXN0aW5nKSJd",
    "answer": "Mg=="
  },
  {
    "subject": "sast_sonarqube",
    "subjectLabel": "🧘‍♂️ Mindful SAST & Production SonarQube",
    "question": "108. How does 'Shift-Left' security apply the KISS Principle to reduce software defects?",
    "options": "WyJCeSBkZWZlcnJpbmcgc2VjdXJpdHkgdGVzdGluZyB1bnRpbCB0aGUgbmlnaHQgYmVmb3JlIHByb2R1Y3Rpb24gcmVsZWFzZSIsIkJ5IGNhdGNoaW5nIGFuZCBmaXhpbmcgdnVsbmVyYWJpbGl0aWVzIGVhcmx5IGluIHRoZSBJREUgb3IgY29tbWl0IHBoYXNlIHdoZW4gZml4ZXMgYXJlIHNpbXBsZXN0IiwiQnkgcmVtb3ZpbmcgYWxsIHVuaXQgdGVzdHMgdG8gc3BlZWQgdXAgQ0kvQ0QgYnVpbGQgZXhlY3V0aW9uIiwiQnkgZW5mb3JjaW5nIDQsMDAwIGRlZmF1bHQgc2VjdXJpdHkgcnVsZXMgb24gZXZlcnkgcHVsbCByZXF1ZXN0Il0=",
    "answer": "MQ=="
  },
  {
    "subject": "sast_sonarqube",
    "subjectLabel": "🧘‍♂️ Mindful SAST & Production SonarQube",
    "question": "109. In Part 2, how does Nudge Theory guide technical debt management in SonarQube?",
    "options": "WyJCeSBmb3JjaW5nIGRldmVsb3BlcnMgdG8gY2xlYXIgYWxsIDEwIHllYXJzIG9mIGhpc3RvcmljYWwgdGVjaG5pY2FsIGRlYnQgaW4gYSBzaW5nbGUgc3ByaW50IiwiQnkgcHVibGljbHkgZW1haWxpbmcgbWFuYWdlbWVudCB3aGVuZXZlciBhIGRldmVsb3BlciBpbnRyb2R1Y2VzIGEgY29kZSBzbWVsbCIsIkJ5IHByaXZhdGVseSBhbGVydGluZyBkZXZlbG9wZXJzIHRvIGlzc3VlcyBpbiB0aGVpciBjdXJyZW50IHB1bGwgcmVxdWVzdCBkaWZmIHVzaW5nICdDbGVhbiBhcyBZb3UgQ29kZSciLCJCeSBsb2NraW5nIGRldmVsb3BlciByZXBvc2l0b3JpZXMgd2hlbmV2ZXIgdGVzdCBjb3ZlcmFnZSBkcm9wcyBiZWxvdyA5NSUiXQ==",
    "answer": "Mg=="
  },
  {
    "subject": "sast_sonarqube",
    "subjectLabel": "🧘‍♂️ Mindful SAST & Production SonarQube",
    "question": "110. Which spiritual concept from Indian philosophy underpins 'Clean as You Code' by emphasizing present-moment focus over past burdens?",
    "options": "WyJLYXJtYSBZb2dhIGFuZCBWYXJ0YW1hbiAoRm9jdXNpbmcgZW50aXJlbHkgb24gdG9kYXkncyBhY3Rpb24pIiwiU2Ftc2FyYSAoRW5kbGVzcyBjeWNsZSBvZiBidWlsZCBmYWlsdXJlcykiLCJUYXBhcyAoUHVuaXNoaW5nIGRldmVsb3BlcnMgZm9yIGJyb2tlbiBidWlsZHMpIiwiTW9rc2hhIChEZWxldGluZyB0aGUgcmVwb3NpdG9yeSB0byBlbGltaW5hdGUgdGVjaG5pY2FsIGRlYnQpIl0=",
    "answer": "MA=="
  },
  {
    "subject": "sast_sonarqube",
    "subjectLabel": "🧘‍♂️ Mindful SAST & Production SonarQube",
    "question": "111. Why is SonarQube's default embedded H2 database strictly prohibited in production environments?",
    "options": "WyJJdCBkb2VzIG5vdCBzdXBwb3J0IEphdmEgbWljcm9zZXJ2aWNlcyIsIkl0IHJlcXVpcmVzIGEgcGFpZCBsaWNlbnNlIGZvciBvcGVuLXNvdXJjZSBwcm9qZWN0cyIsIkl0IGZvcmNlcyBOZ2lueCByZXZlcnNlIHByb3hpZXMgdG8gY3Jhc2giLCJJdCBjYW5ub3QgaGFuZGxlIGNvbmN1cnJlbnQgY29ubmVjdGlvbnMsIGxhY2tzIG1pZ3JhdGlvbiBwYXRocywgYW5kIGVhc2lseSBjb3JydXB0cyBkdXJpbmcgdW5ncmFjZWZ1bCBzaHV0ZG93bnMiXQ==",
    "answer": "Mw=="
  },
  {
    "subject": "sast_sonarqube",
    "subjectLabel": "🧘‍♂️ Mindful SAST & Production SonarQube",
    "question": "112. Which Linux host kernel parameter MUST be tuned to at least 524288 to prevent internal Elasticsearch memory allocation crashes in SonarQube?",
    "options": "WyJuZXQuaXB2NC5pcF9mb3J3YXJkIiwidm0ubWF4X21hcF9jb3VudCIsImZzLmZpbGUtbWF4Iiwia2VybmVsLnBpZF9tYXgiXQ==",
    "answer": "MQ=="
  },
  {
    "subject": "sast_sonarqube",
    "subjectLabel": "🧘‍♂️ Mindful SAST & Production SonarQube",
    "question": "113. In a production Nginx reverse proxy setup for SonarQube, what is the primary purpose of setting 'client_max_body_size 100M;'?",
    "options": "WyJUbyBhbGxvdyBsYXJnZSBzb3VyY2UgY29kZSBhbmFseXNpcyBwYXlsb2FkcyBhbmQgcmVwb3J0cyB0byBiZSB1cGxvYWRlZCBieSBzY2FubmVyIHBpcGVsaW5lcyIsIlRvIGluY3JlYXNlIGRhdGFiYXNlIHF1ZXJ5IGV4ZWN1dGlvbiBzcGVlZCIsIlRvIHJlc3RyaWN0IHVzZXIgZmlsZSBkb3dubG9hZHMgZnJvbSB0aGUgU29uYXJRdWJlIHdlYiBVSSIsIlRvIGFsbG9jYXRlIDEwME1CIG9mIFJBTSB0byBFbGFzdGljc2VhcmNoIl0=",
    "answer": "MA=="
  },
  {
    "subject": "sast_sonarqube",
    "subjectLabel": "🧘‍♂️ Mindful SAST & Production SonarQube",
    "question": "114. How does the monastic principle of 'Viveka' (Discernment) apply to SonarQube Quality Profiles?",
    "options": "WyJFbmFibGluZyBhbGwgNCwwMDAgYXZhaWxhYmxlIGRlZmF1bHQgcnVsZXMgdG8gbWF4aW1pemUgcmVwb3J0IGxlbmd0aCIsIklnbm9yaW5nIGFsbCBzZWN1cml0eSB2dWxuZXJhYmlsaXRpZXMgYW5kIHRyYWNraW5nIG9ubHkgY29kZSBmb3JtYXR0aW5nIiwiU2VwYXJhdGluZyB0aGUgZXNzZW50aWFsIGZyb20gbm9uLWVzc2VudGlhbCBieSBkaXNhYmxpbmcgbm9pc3kgc3R5bGUgd2FybmluZ3MgYW5kIGZvY3VzaW5nIG9uIGNyaXRpY2FsIE9XQVNQIHZ1bG5lcmFiaWxpdGllcyIsIkRlbGV0aW5nIGFsbCBjdXN0b20gUXVhbGl0eSBQcm9maWxlcyBhbmQgdXNpbmcgZGVmYXVsdCByZWFkLW9ubHkgcHJvZmlsZXMiXQ==",
    "answer": "Mg=="
  },
  {
    "subject": "sast_sonarqube",
    "subjectLabel": "🧘‍♂️ Mindful SAST & Production SonarQube",
    "question": "115. Which set of Quality Gate conditions best represents the 'Clean as You Code' production standard for New Code?",
    "options": "WyIxMDAlIENvdmVyYWdlIG9uIExlZ2FjeSBDb2RlLCAwIENvZGUgU21lbGxzIGFjcm9zcyAxMCB5ZWFycyBvZiBoaXN0b3J5IiwiMCBOZXcgVnVsbmVyYWJpbGl0aWVzLCAwIE5ldyBIb3RzcG90cywgPjgwJSBDb3ZlcmFnZSBvbiBOZXcgQ29kZSIsIjUgTmV3IFZ1bG5lcmFiaWxpdGllcyBhbGxvd2VkLCA1MCUgQ292ZXJhZ2Ugb24gTmV3IENvZGUiLCIwIENvZGUgU21lbGxzIG9uIExlZ2FjeSBDb2RlLCAwIFVuaXQgVGVzdHMgcmVxdWlyZWQgb24gTmV3IENvZGUiXQ==",
    "answer": "MQ=="
  },
  {
    "subject": "sast_sonarqube",
    "subjectLabel": "🧘‍♂️ Mindful SAST & Production SonarQube",
    "question": "116. How can developers prevent auto-generated Maven build files (e.g. under 'target/generated-sources') from triggering false positives in SonarQube?",
    "options": "WyJCeSBkZWxldGluZyB0aGUgcG9tLnhtbCBmaWxlIGJlZm9yZSBzY2FubmluZyIsIkJ5IGRpc2FibGluZyBKYXZhIGFuYWx5c2lzIGVudGlyZWx5IGluIFF1YWxpdHkgUHJvZmlsZXMiLCJCeSBhZGRpbmcgJ3NvbmFyLmV4Y2x1c2lvbnM9KiovdGFyZ2V0L2dlbmVyYXRlZC1zb3VyY2VzLyoqJyBpbiBzb25hci1wcm9qZWN0LnByb3BlcnRpZXMiLCJCeSBpbmNyZWFzaW5nIHRoZSBob3N0IG1lbW9yeSBsaW1pdCB0byA2NEdCIl0=",
    "answer": "Mg=="
  },
  {
    "subject": "sast_sonarqube",
    "subjectLabel": "🧘‍♂️ Mindful SAST & Production SonarQube",
    "question": "117. In Part 5, what does the concept of 'Sahaja' (Effortless Flow) represent in DevSecOps?",
    "options": "WyJNYW51YWxseSBydW5uaW5nIHNjYW5zIGZyb20gYSBkZXNrdG9wIHRlcm1pbmFsIG9uY2UgcGVyIHF1YXJ0ZXIiLCJCeXBhc3Npbmcgc2VjdXJpdHkgY2hlY2tzIHdoZW4gcGlwZWxpbmVzIHRha2UgbG9uZ2VyIHRoYW4gMzAgc2Vjb25kcyIsIldyaXRpbmcgY3VzdG9tIHNlY3VyaXR5IHNjcmlwdHMgZm9yIGV2ZXJ5IGluZGl2aWR1YWwgbWljcm9zZXJ2aWNlIiwiQXV0b21hdGluZyBzZWN1cml0eSBzY2FucyBzZWFtbGVzc2x5IHdpdGhpbiBDSS9DRCBwaXBlbGluZXMgc28gY29kZSBhbmFseXNpcyBoYXBwZW5zIG5hdHVyYWxseSBvbiBldmVyeSBwdXNoIl0=",
    "answer": "Mw=="
  },
  {
    "subject": "sast_sonarqube",
    "subjectLabel": "🧘‍♂️ Mindful SAST & Production SonarQube",
    "question": "118. What behavioral advantage does Pull Request (PR) Decoration provide over traditional PDF security reports?",
    "options": "WyJJdCBzZW5kcyBTTVMgYWxlcnRzIHRvIHByb2plY3QgbWFuYWdlcnMgd2hlbmV2ZXIgYSBidWlsZCBmYWlscyIsIkl0IGRlbGl2ZXJzIGlubGluZSwgYWN0aW9uYWJsZSBmZWVkYmFjayBkaXJlY3RseSBvbiB0aGUgc3BlY2lmaWMgbGluZXMgb2YgY29kZSBjaGFuZ2VkIGluc2lkZSBHaXRIdWIvR2l0TGFiIFBSIGRpZmZzIiwiSXQgYXV0b21hdGljYWxseSBtZXJnZXMgcHVsbCByZXF1ZXN0cyB3aXRob3V0IGh1bWFuIHJldmlldyIsIkl0IGhpZGVzIHZ1bG5lcmFiaWxpdHkgZGV0YWlscyBmcm9tIGRldmVsb3BlcnMgdG8gcHJldmVudCBwYW5pYyJd",
    "answer": "MQ=="
  },
  {
    "subject": "sast_sonarqube",
    "subjectLabel": "🧘‍♂️ Mindful SAST & Production SonarQube",
    "question": "119. In a GitHub Actions pipeline, what parameter ensures SonarScanner waits for the Quality Gate result before proceeding?",
    "options": "WyItRHNvbmFyLmZhaWxPbldhcm5pbmc9dHJ1ZSIsIi1Ec29uYXIuYmxvY2tQaXBlbGluZT1hbHdheXMiLCItRHNvbmFyLnF1YWxpdHlnYXRlLndhaXQ9dHJ1ZSIsIi1Ec29uYXIuc3luYz1mb3JjZSJd",
    "answer": "Mg=="
  },
  {
    "subject": "sast_sonarqube",
    "subjectLabel": "🧘‍♂️ Mindful SAST & Production SonarQube",
    "question": "120. In FinTech applications, which vulnerability type is caught by SAST when user inputs are directly concatenated into SQL strings?",
    "options": "WyJTUUwgSW5qZWN0aW9uIChPV0FTUCBBMDMpIiwiQ3Jvc3MtU2l0ZSBSZXF1ZXN0IEZvcmdlcnkgKENTUkYpIiwiSW5zZWN1cmUgRGlyZWN0IE9iamVjdCBSZWZlcmVuY2UgKElET1IpIiwiQnJva2VuIE9iamVjdCBMZXZlbCBBdXRob3JpemF0aW9uIl0=",
    "answer": "MA=="
  },
  {
    "subject": "sast_sonarqube",
    "subjectLabel": "🧘‍♂️ Mindful SAST & Production SonarQube",
    "question": "121. In healthcare applications subject to HIPAA, why does SonarQube flag logging raw patient objects as a Security Hotspot?",
    "options": "WyJCZWNhdXNlIGxvZyBmaWxlcyBydW4gb3V0IG9mIGRpc2sgc3BhY2UgcXVpY2tseSIsIkJlY2F1c2UgbG9nZ2luZyBQZXJzb25hbGx5IElkZW50aWZpYWJsZSBJbmZvcm1hdGlvbiAoUElJL1BISSkgZXhwb3NlcyBzZW5zaXRpdmUgbWVkaWNhbCBkYXRhIGluIHBsYWluIHRleHQgbG9ncyIsIkJlY2F1c2UgbG9nZ2luZyBzbG93cyBkb3duIEphdmEgZGF0YWJhc2UgY29ubmVjdGlvbiBwb29scyIsIkJlY2F1c2UgUHl0aG9uIGxvZ2dpbmcgZnVuY3Rpb25zIGFyZSBkZXByZWNhdGVkIl0=",
    "answer": "MQ=="
  },
  {
    "subject": "sast_sonarqube",
    "subjectLabel": "🧘‍♂️ Mindful SAST & Production SonarQube",
    "question": "122. Why is 'fetch-depth: 0' required when running 'actions/checkout@v4' in GitHub Actions for SonarQube analysis?",
    "options": "WyJUbyBkb3dubG9hZCBhbGwgdGhpcmQtcGFydHkgTWF2ZW4gZGVwZW5kZW5jaWVzIiwiVG8gY29tcGlsZSBDKysgZXh0ZW5zaW9ucyBpbnNpZGUgRG9ja2VyIGNvbnRhaW5lcnMiLCJUbyBmZXRjaCBmdWxsIGdpdCBoaXN0b3J5IHNvIFNvbmFyUXViZSBjYW4gYWNjdXJhdGVseSBjYWxjdWxhdGUgY29kZSBkaWZmcyBmb3IgJ0NsZWFuIGFzIFlvdSBDb2RlJyIsIlRvIGVuYWJsZSBTU0wgY2VydGlmaWNhdGUgdmVyaWZpY2F0aW9uIl0=",
    "answer": "Mg=="
  },
  {
    "subject": "sast_sonarqube",
    "subjectLabel": "🧘‍♂️ Mindful SAST & Production SonarQube",
    "question": "123. How does caching '~/.m2/repository' and '~/.sonar/cache' in CI/CD pipelines adhere to the KISS principle?",
    "options": "WyJJdCBzcGVlZHMgdXAgcGlwZWxpbmUgZXhlY3V0aW9uIHRpbWVzIGJ5IGF2b2lkaW5nIHJlZHVuZGFudCBkZXBlbmRlbmN5IGRvd25sb2FkcyIsIkl0IGVsaW1pbmF0ZXMgdGhlIG5lZWQgZm9yIFBvc3RncmVTUUwgZGF0YWJhc2UgYmFja2VuZHMiLCJJdCBhdXRvbWF0aWNhbGx5IHJlc29sdmVzIGFsbCBPV0FTUCB2dWxuZXJhYmlsaXRpZXMiLCJJdCBieXBhc3NlcyBRdWFsaXR5IEdhdGUgZXZhbHVhdGlvbiBvbiBwdWxsIHJlcXVlc3RzIl0=",
    "answer": "MA=="
  },
  {
    "subject": "sast_sonarqube",
    "subjectLabel": "🧘‍♂️ Mindful SAST & Production SonarQube",
    "question": "124. What is the primary difference between SAST and DAST?",
    "options": "WyJTQVNUIHRlc3RzIG9wZW4tc291cmNlIGRlcGVuZGVuY2llcywgd2hpbGUgREFTVCB0ZXN0cyBEb2NrZXIgY29udGFpbmVycyIsIlNBU1QgaW5zcGVjdHMgcmF3IHNvdXJjZSBjb2RlIHdpdGhvdXQgcnVubmluZyBpdCwgd2hpbGUgREFTVCB0ZXN0cyBhIHJ1bm5pbmcgYXBwbGljYXRpb24gZnJvbSB0aGUgb3V0c2lkZSIsIlNBU1QgcnVucyBvbmx5IGluIHByb2R1Y3Rpb24sIHdoaWxlIERBU1QgcnVucyBvbmx5IG9uIGxvY2FsIGxhcHRvcHMiLCJTQVNUIHJlcXVpcmVzIGEgcnVubmluZyBkYXRhYmFzZSwgd2hpbGUgREFTVCByZXF1aXJlcyBzb3VyY2UgY29kZSBmaWxlcyJd",
    "answer": "MQ=="
  },
  {
    "subject": "sast_sonarqube",
    "subjectLabel": "🧘‍♂️ Mindful SAST & Production SonarQube",
    "question": "125. Under the KISS Principle, what should a team do when faced with 15,000 legacy code smells on an existing project?",
    "options": "WyJIYWx0IGFsbCBmZWF0dXJlIGRldmVsb3BtZW50IGZvciA2IG1vbnRocyB0byBmaXggZXZlcnkgc21lbGwiLCJEZWxldGUgdGhlIFNvbmFyUXViZSBwcm9qZWN0IGFuZCByZWJ1aWxkIHRoZSBtaWNyb3NlcnZpY2UgZnJvbSBzY3JhdGNoIiwiQXBwbHkgQ2xlYW4gYXMgWW91IENvZGUgdG8gYmxvY2sgbmV3IGlzc3VlcyB3aGlsZSBsZXR0aW5nIGxlZ2FjeSBkZWJ0IGRlY2F5IG9yZ2FuaWNhbGx5IGFzIGNvZGUgaXMgdG91Y2hlZCIsIkRpc2FibGUgYWxsIHNlY3VyaXR5IHNjYW5uaW5nIGFjcm9zcyB0aGUgY29tcGFueSJd",
    "answer": "Mg=="
  },
  {
    "subject": "springboot",
    "subjectLabel": "Mindful Maven & Build Execution",
    "question": "126. Applying the Monk mindset of single-minded focus to Maven builds, what is the primary benefit of inheriting from 'spring-boot-starter-parent' in your pom.xml?",
    "options": "WyJJdCBhdXRvbWF0aWNhbGx5IGNvbm5lY3RzIHlvdXIgbG9jYWwgbWFjaGluZSB0byBhIHJlbW90ZSBwcm9kdWN0aW9uIEt1YmVybmV0ZXMgY2x1c3Rlci4iLCJJdCBtYW5hZ2VzIGNvbXBhdGlibGUgZGVwZW5kZW5jeSB2ZXJzaW9ucyBhbmQgY29tcGlsZXIgZGVmYXVsdHMgd2l0aG91dCBjbHV0dGVyaW5nIHlvdXIgYnVpbGQgZmlsZS4iLCJJdCBmb3JjZXMgYWxsIFJFU1QgY29udHJvbGxlcnMgdG8gZXhlY3V0ZSBpbiBtdWx0aS10aHJlYWRlZCByZWFjdGl2ZSBtb2RlLiIsIkl0IHByZXZlbnRzIGRldmVsb3BlcnMgZnJvbSBydW5uaW5nIHVuaXQgdGVzdHMgbG9jYWxseS4iXQ==",
    "answer": "MQ=="
  },
  {
    "subject": "springboot",
    "subjectLabel": "Mindful Maven & Build Execution",
    "question": "127. How does using the Maven Wrapper (`mvnw`) act as a behavioral nudge in a team development environment?",
    "options": "WyJJdCByZXF1aXJlcyBkZXZlbG9wZXJzIHRvIG1hbnVhbGx5IGRvd25sb2FkIGFuZCBjb25maWd1cmUgTWF2ZW4gYmluYXJpZXMgb24gZXZlcnkgbWFjaGluZS4iLCJJdCByZXN0cmljdHMgY29kZSBleGVjdXRpb24gdG8gV2luZG93cyBvcGVyYXRpbmcgc3lzdGVtcyBvbmx5LiIsIkl0IGF1dG9tYXRpY2FsbHkgY29tcGlsZXMgSmF2YSBjb2RlIGludG8gUHl0aG9uIHNjcmlwdHMuIiwiSXQgZW5zdXJlcyBldmVyeSBkZXZlbG9wZXIgYW5kIENJL0NEIHNlcnZlciB1c2VzIHRoZSBleGFjdCBzYW1lIE1hdmVuIHZlcnNpb24gYXV0b21hdGljYWxseSB3aXRob3V0IGVudmlyb25tZW50IHNldHVwIGZyaWN0aW9uLiJd",
    "answer": "Mw=="
  },
  {
    "subject": "springboot",
    "subjectLabel": "Mindful Maven & Build Execution",
    "question": "128. To practice uninterrupted focus (Context of Monks) during offline work, which Maven flag forces offline build resolution from your local `.m2` repository cache?",
    "options": "WyJtdm4gY2xlYW4gcGFja2FnZSAtbyIsIm12biBjbGVhbiBwYWNrYWdlIC0tbm8tY2FjaGUiLCJtdm4gY2xlYW4gcGFja2FnZSAtZmFzdCIsIm12biBjbGVhbiBwYWNrYWdlIC0tc2tpcC1wb20iXQ==",
    "answer": "MA=="
  },
  {
    "subject": "springboot",
    "subjectLabel": "KISS REST Controllers & Endpoints",
    "question": "129. Following the KISS principle in Spring Boot REST design, what is the core responsibility of the `@RestController` annotation?",
    "options": "WyJJdCBhdXRvbWF0aWNhbGx5IGNyZWF0ZXMgZGF0YWJhc2UgdGFibGVzIGFuZCBoYW5kbGVzIFNRTCB0cmFuc2FjdGlvbnMuIiwiSXQgY29uZmlndXJlcyBEb2NrZXIgY29udGFpbmVyIHBvcnQgbWFwcGluZ3Mgb24gaG9zdCBtYWNoaW5lcy4iLCJJdCBtYXJrcyB0aGUgY2xhc3MgYXMgYW4gSFRUUCByZXF1ZXN0IGhhbmRsZXIgdGhhdCBzZXJpYWxpemVzIHJldHVybiB2YWx1ZXMgZGlyZWN0bHkgaW50byB0aGUgcmVzcG9uc2UgYm9keS4iLCJJdCBlbmNyeXB0cyBpbmNvbWluZyBIVFRQIGhlYWRlcnMgdXNpbmcgQUVTLTI1Ni4iXQ==",
    "answer": "Mg=="
  },
  {
    "subject": "springboot",
    "subjectLabel": "KISS REST Controllers & Endpoints",
    "question": "130. Why are Java Records recommended for JSON DTO payloads in modern Spring Boot APIs when practicing clean code?",
    "options": "WyJUaGV5IGZvcmNlIFNwcmluZyBCb290IHRvIGdlbmVyYXRlIGN1c3RvbSBIVE1MIGZyb250ZW5kIHZpZXdzLiIsIlRoZXkgcHJvdmlkZSBpbW11dGFibGUgZGF0YSBjYXJyaWVycyB3aXRoIHplcm8gYm9pbGVycGxhdGUgZ2V0dGVycywgc2V0dGVycywgb3IgY29uc3RydWN0b3JzLiIsIlRoZXkgYXV0b21hdGljYWxseSB0cmFuc2xhdGUgUkVTVCBjYWxscyBpbnRvIGdSUEMgcHJvdG9jb2wgYnVmZmVycy4iLCJUaGV5IHJlcXVpcmUgYW4gZXh0ZXJuYWwgZGF0YWJhc2UgZHJpdmVyIHRvIGNvbXBpbGUuIl0=",
    "answer": "MQ=="
  },
  {
    "subject": "springboot",
    "subjectLabel": "KISS REST Controllers & Endpoints",
    "question": "131. Which annotation should be used to extract dynamic path parameters from an incoming URL like `/api/v1/greet/{learnerName}`?",
    "options": "WyJAUmVxdWVzdFBhcmFtIiwiQFJlcXVlc3RCb2R5IiwiQENvbnRleHRBdHRyaWJ1dGUiLCJAUGF0aFZhcmlhYmxlIl0=",
    "answer": "Mw=="
  },
  {
    "subject": "springboot",
    "subjectLabel": "The Green Safety Net & Isolated Testing",
    "question": "132. How does `@WebMvcTest` embody the KISS principle when testing Spring Boot REST Controllers?",
    "options": "WyJJdCBpbnN0YW50aWF0ZXMgb25seSB0aGUgd2ViIGxheWVyIGluIGlzb2xhdGlvbiB3aXRob3V0IGJvb3RpbmcgdGhlIGZ1bGwgYXBwbGljYXRpb24gY29udGV4dCBvciBiYWNrZW5kIHNlcnZpY2VzLiIsIkl0IGRlbGV0ZXMgZXhpc3RpbmcgdGVzdCBkYXRhYmFzZXMgYmVmb3JlIHJ1bm5pbmcgdGVzdHMuIiwiSXQgcmVxdWlyZXMgYSBsaXZlIEt1YmVybmV0ZXMgY2x1c3RlciB0byBleGVjdXRlIHRlc3QgY2FzZXMuIiwiSXQgYXV0b21hdGljYWxseSBza2lwcyBhbGwgYXNzZXJ0aW9ucyB0byBlbnN1cmUgMTAwJSBidWlsZCBzdWNjZXNzLiJd",
    "answer": "MA=="
  },
  {
    "subject": "springboot",
    "subjectLabel": "The Green Safety Net & Isolated Testing",
    "question": "133. According to Nudge Theory, how does seeing rapid green test feedback in the terminal influence developer behavior?",
    "options": "WyJJdCBlbmNvdXJhZ2VzIGRldmVsb3BlcnMgdG8gYXZvaWQgcnVubmluZyBidWlsZHMgYWx0b2dldGhlci4iLCJJdCBjcmVhdGVzIGNvbmZ1c2lvbiBieSBtYXNraW5nIHVuZGVybHlpbmcgY29tcGlsZXIgd2FybmluZ3MuIiwiSXQgb2ZmZXJzIGltbWVkaWF0ZSBwb3NpdGl2ZSByZWluZm9yY2VtZW50LCB0cmFuc2Zvcm1pbmcgdGVzdGluZyBpbnRvIGEgcmV3YXJkaW5nIGhhYml0IG9mIG1haW50YWluaW5nIGNvZGUgcXVhbGl0eS4iLCJJdCBzbG93cyBkb3duIHRoZSBDSS9DRCBwaXBlbGluZSBieSBmb3JjaW5nIG1hbnVhbCBjb2RlIHJldmlld3MuIl0=",
    "answer": "Mg=="
  },
  {
    "subject": "springboot",
    "subjectLabel": "The Green Safety Net & Isolated Testing",
    "question": "134. When asserting JSON payload structures in a MockMvc test, which tool allows you to verify individual JSON fields like `$.serviceName` cleanly?",
    "options": "WyJSZWdFeCBNYXRjaGVyIiwiSnNvblBhdGgiLCJYUGF0aCBRdWVyeSIsIkphY2tzb24gUGFyc2VyIFN0cmVhbSJd",
    "answer": "MQ=="
  },
  {
    "subject": "springboot",
    "subjectLabel": "Nudges, Defaults & Graceful Error Handling",
    "question": "135. In `@RequestParam` annotations, how does setting `defaultValue = \"Seeker\"` serve as a gentle nudge for defensive API design?",
    "options": "WyJJdCBwcmV2ZW50cyBIVFRQIDQwMCBCYWQgUmVxdWVzdCBlcnJvcnMgd2hlbiBjbGllbnRzIG9taXQgb3B0aW9uYWwgcXVlcnkgcGFyYW1ldGVycy4iLCJJdCBmb3JjZXMgY2xpZW50cyB0byBwYXNzIGF1dGhvcml6YXRpb24gaGVhZGVycyB3aXRoIGV2ZXJ5IHJlcXVlc3QuIiwiSXQgZW5jcnlwdHMgbWlzc2luZyBwYXJhbWV0ZXIgdmFsdWVzIGJlZm9yZSBzYXZpbmcgdG8gdGhlIGRhdGFiYXNlLiIsIkl0IGF1dG9tYXRpY2FsbHkgcmVkaXJlY3RzIHRyYWZmaWMgdG8gYSBmYWxsYmFjayBtaWNyb3NlcnZpY2UuIl0=",
    "answer": "MA=="
  },
  {
    "subject": "springboot",
    "subjectLabel": "Nudges, Defaults & Graceful Error Handling",
    "question": "136. Channeling the calm resilience of a Monk during unexpected API errors, what is the best practice for handling unhandled exceptions globally in Spring Boot?",
    "options": "WyJMZXQgdGhlIGFwcGxpY2F0aW9uIGNyYXNoIGFuZCBwcmludCByYXcgc3RhY2sgdHJhY2VzIHRvIHRoZSBjbGllbnQgYnJvd3Nlci4iLCJDYXRjaCBhbGwgZXhjZXB0aW9ucyBpbnNpZGUgYSB0cnktY2F0Y2ggYmxvY2sgaW4gZXZlcnkgY29udHJvbGxlciBtZXRob2QuIiwiRGlzYWJsZSBlcnJvciBsb2dnaW5nIGNvbXBsZXRlbHkgaW4gYXBwbGljYXRpb24ucHJvcGVydGllcy4iLCJVc2UgYEBSZXN0Q29udHJvbGxlckFkdmljZWAgdG8gaW50ZXJjZXB0IGV4Y2VwdGlvbnMgZ2xvYmFsbHkgYW5kIHJldHVybiBzdHJ1Y3R1cmVkIEpTT04gZXJyb3IgcGF5bG9hZHMuIl0=",
    "answer": "Mw=="
  },
  {
    "subject": "springboot",
    "subjectLabel": "Nudges, Defaults & Graceful Error Handling",
    "question": "137. When encountering `WebServerException: Port 8080 was already in use`, what is the most peaceful way to resolve the conflict without killing system processes?",
    "options": "WyJSZWluc3RhbGwgdGhlIG9wZXJhdGluZyBzeXN0ZW0uIiwiRGVsZXRlIHRoZSB0YXJnZXQgZm9sZGVyIGFuZCByZWJ1aWxkIHRoZSBwcm9qZWN0LiIsIlJlY29uZmlndXJlIGBzZXJ2ZXIucG9ydD04MDgxYCBpbiBgYXBwbGljYXRpb24ucHJvcGVydGllc2Agb3IgcGFzcyBgLS1zZXJ2ZXIucG9ydD04MDgxYCBhdCBleGVjdXRpb24uIiwiRGlzYWJsZSBIVFRQIHRyYWZmaWMgaW4gU3ByaW5nIEJvb3QuIl0=",
    "answer": "Mg=="
  },
  {
    "subject": "springboot",
    "subjectLabel": "Zen Docker Containers & Multi-Stage Builds",
    "question": "138. How does a multi-stage Dockerfile embody the Monk concept of 'carrying only what is necessary'?",
    "options": "WyJJdCBwYWNrcyBib3RoIEpESyBjb21waWxlcnMgYW5kIGRhdGFiYXNlIHNlcnZlcnMgaW50byB0aGUgZmluYWwgcnVudGltZSBpbWFnZS4iLCJJdCBjb21waWxlcyBjb2RlIGluIGFuIGVwaGVtZXJhbCBidWlsZGVyIHN0YWdlIGFuZCBjb3BpZXMgb25seSB0aGUgZmluYWwgZXhlY3V0YWJsZSBKQVIgaW50byBhIHNsaW0gSlJFIHJ1bnRpbWUgaW1hZ2UuIiwiSXQgcHJldmVudHMgRG9ja2VyIGNvbnRhaW5lcnMgZnJvbSBzdG9wcGluZyB3aGVuIGZhdGFsIGVycm9ycyBvY2N1ci4iLCJJdCByZXF1aXJlcyBkZXZlbG9wZXJzIHRvIGJ1aWxkIEpBUiBmaWxlcyBtYW51YWxseSBvbiBob3N0IG1hY2hpbmVzIGJlZm9yZSBydW5uaW5nIERvY2tlci4iXQ==",
    "answer": "MQ=="
  },
  {
    "subject": "springboot",
    "subjectLabel": "Zen Docker Containers & Multi-Stage Builds",
    "question": "139. Why is `eclipse-temurin:17-jre-alpine` preferred over a full Ubuntu JDK image for production Spring Boot containers?",
    "options": "WyJJdCBzaWduaWZpY2FudGx5IHJlZHVjZXMgaW1hZ2Ugc2l6ZSwgbG93ZXJzIGRvd25sb2FkIHRpbWVzLCBhbmQgbWluaW1pemVzIHNlY3VyaXR5IGF0dGFjayBzdXJmYWNlcy4iLCJJdCBpbmNsdWRlcyBidWlsdC1pbiBncmFwaGljYWwgdXNlciBpbnRlcmZhY2UgKEdVSSkgdG9vbHMuIiwiSXQgYXV0b21hdGljYWxseSB0cmFuc2xhdGVzIEphdmEgYnl0ZWNvZGUgaW50byBDKysgYmluYXJpZXMuIiwiSXQgYnlwYXNzZXMgY29udGFpbmVyIHNlY3VyaXR5IGNvbnN0cmFpbnRzIGluIGVudGVycHJpc2UgZW52aXJvbm1lbnRzLiJd",
    "answer": "MA=="
  },
  {
    "subject": "springboot",
    "subjectLabel": "Spring Boot Actuator & Container Probes",
    "question": "140. Which Spring Boot Actuator endpoint specifically reports whether the application is ready to accept live network traffic?",
    "options": "WyIvYWN0dWF0b3IvbWV0cmljcyIsIi9hY3R1YXRvci9pbmZvIiwiL2FjdHVhdG9yL2VudiIsIi9hY3R1YXRvci9oZWFsdGgvcmVhZGluZXNzIl0=",
    "answer": "Mw=="
  },
  {
    "subject": "springboot",
    "subjectLabel": "Spring Boot Actuator & Container Probes",
    "question": "141. How does adding a native `HEALTHCHECK` directive in a Dockerfile nudge cloud infrastructure toward automated self-healing?",
    "options": "WyJJdCBzZW5kcyBhbGVydCBlbWFpbHMgdG8gZGV2ZWxvcGVycyB3aGVuZXZlciBtZW1vcnkgdXNhZ2UgZXhjZWVkcyA1MCUuIiwiSXQgYXV0b21hdGljYWxseSBmaXhlcyBicm9rZW4gSmF2YSBjb2RlIGluc2lkZSB0aGUgcnVubmluZyBjb250YWluZXIuIiwiSXQgYWxsb3dzIERvY2tlciB0byBjb250aW51b3VzbHkgbW9uaXRvciBhcHBsaWNhdGlvbiBzdGF0dXMgYW5kIG1hcmsgb3IgcmVzdGFydCB1bnJlc3BvbnNpdmUgY29udGFpbmVycyBhdXRvbWF0aWNhbGx5LiIsIkl0IGRpc2FibGVzIEhUVFAgcG9ydHMgd2hlbiB0cmFmZmljIGxldmVscyBiZWNvbWUgdG9vIGhpZ2guIl0=",
    "answer": "Mg=="
  },
  {
    "subject": "springboot",
    "subjectLabel": "Declarative Kubernetes Orchestration",
    "question": "142. In Kubernetes, what distinguishes the declarative approach (Monk mindset) from imperative container management?",
    "options": "WyJZb3UgZXhlY3V0ZSBtYW51YWwgdGVybWluYWwgY29tbWFuZHMgZXZlcnkgdGltZSBhIHBvZCBjcmFzaGVzLiIsIllvdSBkZWZpbmUgdGhlIGRlc2lyZWQgZW5kIHN0YXRlIGluIFlBTUwgbWFuaWZlc3RzLCBhbmQgdGhlIGNsdXN0ZXIgY29udGludW91c2x5IG1haW50YWlucyB0aGF0IHN0YXRlIGF1dG9tYXRpY2FsbHkuIiwiWW91IG11c3QgcmVzdGFydCB3b3JrZXIgbm9kZXMgbWFudWFsbHkgYWZ0ZXIgZXZlcnkgYXBwbGljYXRpb24gZGVwbG95bWVudC4iLCJZb3Ugd3JpdGUgc2hlbGwgc2NyaXB0cyB0byBwdWxsIERvY2tlciBpbWFnZXMgb24gaW5kaXZpZHVhbCBzZXJ2ZXJzLiJd",
    "answer": "MQ=="
  },
  {
    "subject": "springboot",
    "subjectLabel": "Declarative Kubernetes Orchestration",
    "question": "143. What happens when a Spring Boot pod fails its liveness probe in a Kubernetes Deployment?",
    "options": "WyJLdWJlcm5ldGVzIGtpbGxzIHRoZSB1bmhlYWx0aHkgcG9kIGFuZCBjcmVhdGVzIGEgbmV3IHJlcGxhY2VtZW50IHBvZCBhdXRvbWF0aWNhbGx5LiIsIkt1YmVybmV0ZXMgc2h1dHMgZG93biB0aGUgZW50aXJlIGNsdXN0ZXIuIiwiS3ViZXJuZXRlcyBpZ25vcmVzIHRoZSBmYWlsdXJlIGFuZCBrZWVwcyByb3V0aW5nIHRyYWZmaWMgdG8gdGhlIGJyb2tlbiBwb2QuIiwiS3ViZXJuZXRlcyBjb252ZXJ0cyB0aGUgcG9kIGludG8gYSBzdGF0aWMgZmlsZSBzZXJ2ZXIuIl0=",
    "answer": "MA=="
  },
  {
    "subject": "springboot",
    "subjectLabel": "Kubernetes Ingress & Traffic Management",
    "question": "144. Following the KISS principle, why is a Kubernetes Ingress preferred over creating individual `LoadBalancer` services for every microservice?",
    "options": "WyJMb2FkQmFsYW5jZXIgc2VydmljZXMgZG8gbm90IHN1cHBvcnQgSFRUUCBHRVQgcmVxdWVzdHMuIiwiSW5ncmVzcyByZXF1aXJlcyBldmVyeSBtaWNyb3NlcnZpY2UgdG8gcnVuIG9uIHBvcnQgODAuIiwiTG9hZEJhbGFuY2VyIHNlcnZpY2VzIGNhbm5vdCBiZSBkZXBsb3llZCBpbiBjbG91ZCBlbnZpcm9ubWVudHMuIiwiSW5ncmVzcyBhY3RzIGFzIGEgc2luZ2xlIGludGVsbGlnZW50IGdhdGV3YXksIHJlZHVjaW5nIGNsb3VkIGluZnJhc3RydWN0dXJlIGNvc3RzIGFuZCBjZW50cmFsaXppbmcgZG9tYWluIGFuZCBUTFMgbWFuYWdlbWVudC4iXQ==",
    "answer": "Mw=="
  },
  {
    "subject": "springboot",
    "subjectLabel": "Kubernetes Ingress & Traffic Management",
    "question": "145. What is the role of TLS termination at the Kubernetes Ingress level?",
    "options": "WyJJdCBmb3JjZXMgYWxsIGJhY2tlbmQgbWljcm9zZXJ2aWNlcyB0byBkZWNyeXB0IG5ldHdvcmsgdHJhZmZpYyB0d2ljZS4iLCJJdCByZXF1aXJlcyBkZXZlbG9wZXJzIHRvIHN0b3JlIHByaXZhdGUgU1NMIGtleXMgZGlyZWN0bHkgaW5zaWRlIEphdmEgc291cmNlIGNvZGUuIiwiSXQgZGVjcnlwdHMgaW5jb21pbmcgSFRUUFMgdHJhZmZpYyBhdCB0aGUgSW5ncmVzcyBnYXRld2F5IHNvIGJhY2tlbmQgU3ByaW5nIEJvb3QgcG9kcyByZWNlaXZlIGNsZWFuIGludGVybmFsIHRyYWZmaWMgd2l0aG91dCBtYW5hZ2luZyBTU0wgY2VydGlmaWNhdGVzLiIsIkl0IGRpc2FibGVzIFNTTCBlbmNyeXB0aW9uIGZvciBleHRlcm5hbCB3ZWIgdXNlcnMuIl0=",
    "answer": "Mg=="
  },
  {
    "subject": "kubernetes-devsecops",
    "subjectLabel": "☸️ Kubernetes DevSecOps Mastery",
    "question": "146. In the monastery of Kubernetes, what is the core benefit of Declarative Zen over Imperative command execution?",
    "options": "WyJJbXBlcmF0aXZlIGNvbW1hbmRzIHJ1biBmYXN0ZXIgYmVjYXVzZSB0aGV5IGJ5cGFzcyB0aGUgQVBJIHNlcnZlciBlbnRpcmVseS4iLCJEZWNsYXJhdGl2ZSBaZW4gZGVmaW5lcyB0aGUgZGVzaXJlZCBzdGF0ZSBpbiBZQU1MLCBhbGxvd2luZyB0aGUgY29udGludW91cyByZWNvbmNpbGlhdGlvbiBsb29wIHRvIG1haW50YWluIGVxdWlsaWJyaXVtIGF1dG9tYXRpY2FsbHkuIiwiSW1wZXJhdGl2ZSBleGVjdXRpb24gZ3VhcmFudGVlcyB6ZXJvIGNvbmZpZ3VyYXRpb24gZHJpZnQgYWNyb3NzIHdvcmtlciBub2Rlcy4iLCJEZWNsYXJhdGl2ZSBaZW4gaXMgc3RyaWN0bHkgZm9yIGJhcmUtbWV0YWwgc2VydmVycyBhbmQgY2Fubm90IGJlIHVzZWQgaW4gY2xvdWQgZW52aXJvbm1lbnRzLiJd",
    "answer": "MQ=="
  },
  {
    "subject": "kubernetes-devsecops",
    "subjectLabel": "☸️ Kubernetes DevSecOps Mastery",
    "question": "147. Why must the etcd sacred scroll of cluster truth always maintain an odd quorum (3 or 5 nodes) in production?",
    "options": "WyJUbyBwcmV2ZW50IHNwbGl0LWJyYWluIHN0YXRlIGNvcnJ1cHRpb24gZHVyaW5nIG5ldHdvcmsgcGFydGl0aW9ucyBieSBzZWN1cmluZyBhIFJBRlQgY29uc2Vuc3VzIG1ham9yaXR5LiIsIkJlY2F1c2UgZXRjZCBjYW4gb25seSBvcGVuIFRDUCBuZXR3b3JrIHNvY2tldHMgb24gb2RkLW51bWJlcmVkIHBvcnQgYWxsb2NhdGlvbnMuIiwiVG8gZW5zdXJlIHdvcmtlciBub2RlcyByZWNlaXZlIGVxdWFsIGJhbmR3aWR0aCBhbGxvY2F0aW9ucyBmcm9tIGNsb3VkIHJvdXRlcnMuIiwiQmVjYXVzZSBldmVuLW51bWJlcmVkIGV0Y2Qgbm9kZXMgYXV0b21hdGljYWxseSBkZWxldGUgc2VjcmV0IGVuY3J5cHRpb24ga2V5cy4iXQ==",
    "answer": "MA=="
  },
  {
    "subject": "kubernetes-devsecops",
    "subjectLabel": "☸️ Kubernetes DevSecOps Mastery",
    "question": "148. Which Control Plane component acts as the wise assigner, evaluating node taints, affinity, and resource capacity to place unassigned Pods?",
    "options": "WyJrdWJlbGV0Iiwia3ViZS1wcm94eSIsImt1YmUtc2NoZWR1bGVyIiwia3ViZS1jb250cm9sbGVyLW1hbmFnZXIiXQ==",
    "answer": "Mg=="
  },
  {
    "subject": "kubernetes-devsecops",
    "subjectLabel": "☸️ Kubernetes DevSecOps Mastery",
    "question": "149. What is the fundamental responsibility of the kubelet agent running on each worker node?",
    "options": "WyJUbyBkaXJlY3RseSB3cml0ZSBzdGF0ZSBtYW5pZmVzdHMgaW50byB0aGUgZXRjZCBrZXktdmFsdWUgc3RvcmUuIiwiVG8gYWN0IGFzIHRoZSBub2RlIGVudm95LCBjb21tdW5pY2F0aW5nIHdpdGggdGhlIENvbnRyb2wgUGxhbmUgdG8gbWFuYWdlIGNvbnRhaW5lciBsaWZlY3ljbGVzIHZpYSB0aGUgcnVudGltZSBlbmdpbmUuIiwiVG8gZ2VuZXJhdGUgcHVibGljIFNTTCBUTFMgY2VydGlmaWNhdGVzIHVzaW5nIGNlcnQtbWFuYWdlci4iLCJUbyBleGVjdXRlIGNvbnRpbnVvdXMgdnVsbmVyYWJpbGl0eSBzY2FucyBvbiBjb250YWluZXIgaW1hZ2UgbGF5ZXJzLiJd",
    "answer": "MQ=="
  },
  {
    "subject": "kubernetes-devsecops",
    "subjectLabel": "☸️ Kubernetes DevSecOps Mastery",
    "question": "150. Why do containers residing inside the same Pod cell communicate seamlessly over localhost?",
    "options": "WyJUaGV5IHJvdXRlIGludGVybmFsIHRyYWZmaWMgdGhyb3VnaCBhbiBleHRlcm5hbCBDbG91ZCBMb2FkQmFsYW5jZXIuIiwiVGhleSBzaGFyZSB0aGUgZXhhY3Qgc2FtZSBuZXR3b3JrIG5hbWVzcGFjZSBhbmQgSVAgYWRkcmVzcyBhbGxvY2F0aW9uLiIsIlRoZXkgY29tYmluZSB0aGVpciBhcHBsaWNhdGlvbiBiaW5hcmllcyBpbnRvIGEgc2luZ2xlIG1vbm9saXRoaWMgZmlsZSBhdCBydW50aW1lLiIsIlRoZXkgc2hhcmUgaG9zdCBvcGVyYXRpbmcgc3lzdGVtIHJvb3QgcHJpdmlsZWdlcyBhdXRvbWF0aWNhbGx5LiJd",
    "answer": "MQ=="
  },
  {
    "subject": "kubernetes-devsecops",
    "subjectLabel": "☸️ Kubernetes DevSecOps Mastery",
    "question": "151. During application updates, how does configuring 'maxUnavailable: 0' guarantee zero-downtime releases?",
    "options": "WyJJdCB0ZXJtaW5hdGVzIG9sZCBwb2RzIGltbWVkaWF0ZWx5IGJlZm9yZSBwdWxsaW5nIG5ldyBjb250YWluZXIgaW1hZ2VzLiIsIkl0IHByZXZlbnRzIGFueSBuZXcgcG9kcyBmcm9tIGxhdW5jaGluZyB1bnRpbCBhbGwgb2xkIHBvZHMgYXJlIGRlbGV0ZWQuIiwiSXQgdmVyaWZpZXMgbmV3IHBvZHMgYXJlIGhlYWx0aHkgYW5kIFJlYWR5IGJlZm9yZSB0ZXJtaW5hdGluZyBhbnkgb2xkIHBvZHMsIHByZXNlcnZpbmcgMTAwJSBwcm9jZXNzaW5nIGNhcGFjaXR5LiIsIkl0IHJlc3RyaWN0cyBkZXBsb3ltZW50cyB0byBhIHNpbmdsZSB3b3JrZXIgbm9kZSBpbiB0aGUgY2x1c3Rlci4iXQ==",
    "answer": "Mg=="
  },
  {
    "subject": "kubernetes-devsecops",
    "subjectLabel": "☸️ Kubernetes DevSecOps Mastery",
    "question": "152. How does a ReadinessProbe differ from a LivenessProbe in managing pod health?",
    "options": "WyJSZWFkaW5lc3NQcm9iZSBkZXRlcm1pbmVzIGlmIGEgcG9kIGNhbiBhY2NlcHQgbGl2ZSB1c2VyIHRyYWZmaWM7IExpdmVuZXNzUHJvYmUgZGV0ZXJtaW5lcyBpZiBhIGZyb3plbiBjb250YWluZXIgc2hvdWxkIGJlIHJlc3RhcnRlZC4iLCJSZWFkaW5lc3NQcm9iZSBydW5zIG9ubHkgb24gY29udHJvbCBwbGFuZSBub2RlczsgTGl2ZW5lc3NQcm9iZSBydW5zIHN0cmljdGx5IG9uIHdvcmtlciBub2Rlcy4iLCJSZWFkaW5lc3NQcm9iZSBkZWxldGVzIGZhaWxpbmcgWUFNTCBtYW5pZmVzdHMgZnJvbSBHaXQ7IExpdmVuZXNzUHJvYmUgaW5jcmVhc2VzIENQVSBsaW1pdHMuIiwiUmVhZGluZXNzUHJvYmUgaGFuZGxlcyBkYXRhYmFzZSBiYWNrdXBzOyBMaXZlbmVzc1Byb2JlIG1hbmFnZXMgc2VjcmV0IHJvdGF0aW9uLiJd",
    "answer": "MA=="
  },
  {
    "subject": "kubernetes-devsecops",
    "subjectLabel": "☸️ Kubernetes DevSecOps Mastery",
    "question": "153. Why is storing sensitive credentials in standard Base64-encoded Kubernetes Secrets unsafe without encryption?",
    "options": "WyJCYXNlNjQgZW5jb2RpbmcgZXhwaXJlcyBhbmQgY29ycnVwdHMgcG9kIG1lbW9yeSBhZnRlciAxNSBtaW51dGVzLiIsIkJhc2U2NCBpcyBzaW1wbGUgb2JmdXNjYXRpb24sIG5vdCBlbmNyeXB0aW9u4oCUYW55b25lIHdpdGggcmVhZCBhY2Nlc3MgY2FuIGRlY29kZSBwbGFpbiB0ZXh0IHBhc3N3b3JkcyBpbnN0YW50bHkuIiwiQmFzZTY0IHN0cmluZ3MgYXJlIHJlamVjdGVkIGJ5IGNsb3VkIGNvbnRhaW5lciBydW50aW1lcyBsaWtlIGNvbnRhaW5lcmQuIiwiQmFzZTY0IGNhdXNlcyBuZXR3b3JrIGxhdGVuY3kgZHVyaW5nIHBvZCBzY2FsaW5nIGV2ZW50cy4iXQ==",
    "answer": "MQ=="
  },
  {
    "subject": "kubernetes-devsecops",
    "subjectLabel": "☸️ Kubernetes DevSecOps Mastery",
    "question": "154. Why does deleting a Pod attached to a PersistentVolumeClaim (PVC) NOT destroy your application's physical database storage?",
    "options": "WyJCZWNhdXNlIEt1YmVybmV0ZXMgYXV0b21hdGljYWxseSB1cGxvYWRzIHZvbHVtZSBzbmFwc2hvdHMgdG8gRG9ja2VyIEh1Yi4iLCJCZWNhdXNlIGNvbXB1dGUgbG9naWMgaXMgZGVjb3VwbGVkIGZyb20gcGVyc2lzdGVudCBzdG9yYWdl4oCUdGhlIFBlcnNpc3RlbnRWb2x1bWUgZXhpc3RzIGluZGVwZW5kZW50bHkgb2YgdGhlIHBvZCBsaWZlY3ljbGUuIiwiQmVjYXVzZSBQVkNzIHN0b3JlIGRhdGFiYXNlIHJvd3MgZGlyZWN0bHkgaW5zaWRlIGV0Y2Qga2V5LXZhbHVlIG1lbW9yeS4iLCJCZWNhdXNlIHdvcmtlciBub2RlcyByZXRhaW4gbG9jYWwgZXBoZW1lcmFsIG1lbW9yeSBmb3IgMzAgZGF5cyBhZnRlciBwb2QgZGVsZXRpb24uIl0=",
    "answer": "MQ=="
  },
  {
    "subject": "kubernetes-devsecops",
    "subjectLabel": "☸️ Kubernetes DevSecOps Mastery",
    "question": "155. When must an engineer select ReadWriteOnce (RWO) storage over ReadWriteMany (RWX)?",
    "options": "WyJXaGVuIGFsbG9jYXRpbmcgaGlnaC1wZXJmb3JtYW5jZSBkZWRpY2F0ZWQgc3RvcmFnZSBmb3Igc2luZ2xlLW5vZGUgcmVsYXRpb25hbCBkYXRhYmFzZSB3b3JrbG9hZHMgbGlrZSBQb3N0Z3JlU1FMIG9yIE15U1FMLiIsIldoZW4gc2hhcmluZyB3ZWIgbWVkaWEgYXNzZXRzIGFjcm9zcyA1MCBjb25jdXJyZW50IHBvZHMgc3Bhbm5pbmcgbXVsdGlwbGUgd29ya2VyIG5vZGVzLiIsIldoZW4gY3JlYXRpbmcgZXBoZW1lcmFsIHNjcmF0Y2ggc3RvcmFnZSBvbiBpbi1tZW1vcnkgdG1wZnMgbW91bnRzLiIsIldoZW4gY29uZmlndXJpbmcgcHVibGljIEluZ3Jlc3Mgcm91dGluZyB0YWJsZXMuIl0=",
    "answer": "MA=="
  },
  {
    "subject": "kubernetes-devsecops",
    "subjectLabel": "☸️ Kubernetes DevSecOps Mastery",
    "question": "156. What critical feature makes a StatefulSet necessary for running distributed database clusters instead of a standard Deployment?",
    "options": "WyJTdGF0ZWZ1bFNldHMgcnVuIGNvbnRhaW5lcnMgYXMgcm9vdCBVSUQgMCBhdXRvbWF0aWNhbGx5LiIsIlN0YXRlZnVsU2V0cyBieXBhc3MgdGhlIGt1YmUtYXBpc2VydmVyIGZvciBkaXJlY3QgZGlzayB3cml0ZXMuIiwiU3RhdGVmdWxTZXRzIHByb3ZpZGUgcHJlZGljdGFibGUgb3JkaW5hbCBwb2QgbmFtZXMgKGRiLTAsIGRiLTEpLCBzdGFibGUgbmV0d29yayBJRHMsIGFuZCBkZWRpY2F0ZWQgc3RvcmFnZSB2b2x1bWUgdGVtcGxhdGVzLiIsIlN0YXRlZnVsU2V0cyBhdXRvbWF0aWNhbGx5IGRpc2FibGUgbGl2ZW5lc3MgYW5kIHJlYWRpbmVzcyBwcm9iZXMgZHVyaW5nIGZhaWxvdmVycy4iXQ==",
    "answer": "Mg=="
  },
  {
    "subject": "kubernetes-devsecops",
    "subjectLabel": "☸️ Kubernetes DevSecOps Mastery",
    "question": "157. What primary benefit does a Database Operator (such as CloudNativePG) bring to Kubernetes stateful workloads?",
    "options": "WyJJdCByZXBsYWNlcyBldGNkIGFzIHRoZSBjbHVzdGVyJ3MgcHJpbWFyeSBrZXktdmFsdWUgc3RvcmFnZSBlbmdpbmUuIiwiSXQgZW5jb2RlcyBvcGVyYXRpb25hbCB3aXNkb20gaW50byBjb2RlIHRvIGF1dG9tYXRlIG1hc3Rlci1yZXBsaWNhIGZhaWxvdmVyLCBjb250aW51b3VzIFdBTCBsb2cgYXJjaGl2aW5nLCBhbmQgcG9pbnQtaW4tdGltZSByZWNvdmVyeS4iLCJJdCBjb252ZXJ0cyByZWxhdGlvbmFsIFNRTCB0YWJsZXMgaW50byBwbGFpbiBKU09OIHRleHQgZmlsZXMgYXV0b21hdGljYWxseS4iLCJJdCBhbGxvd3MgZGF0YWJhc2VzIHRvIGV4ZWN1dGUgd2l0aG91dCBwaHlzaWNhbCBvciBwZXJzaXN0ZW50IHN0b3JhZ2UuIl0=",
    "answer": "MQ=="
  },
  {
    "subject": "kubernetes-devsecops",
    "subjectLabel": "☸️ Kubernetes DevSecOps Mastery",
    "question": "158. Under the DevSecOps principle of least privilege, why should application ServiceAccounts NEVER hold cluster-admin permissions?",
    "options": "WyJCZWNhdXNlIGNsdXN0ZXItYWRtaW4gcGVybWlzc2lvbnMgdHJpZ2dlciBhdXRvbWF0aWMgd29ya2VyIG5vZGUgcmVzdGFydHMuIiwiVG8gbGltaXQgYmxhc3QgcmFkaXVz4oCUaWYgYW4gYXBwIHBvZCBpcyBjb21wcm9taXNlZCwgcmVzdHJpY3RlZCBSQkFDIHByZXZlbnRzIHRoZSBhdHRhY2tlciBmcm9tIGVzY2FsYXRpbmcgcHJpdmlsZWdlcyBvciBpbnNwZWN0aW5nIG90aGVyIG5hbWVzcGFjZXMuIiwiQmVjYXVzZSB0aGUgS3ViZXJuZXRlcyBBUEkgc2VydmVyIGRyb3BzIG5ldHdvcmsgcmVxdWVzdHMgZnJvbSBjbHVzdGVyLWFkbWluIGFjY291bnRzLiIsIkJlY2F1c2UgY2x1c3Rlci1hZG1pbiByZXF1aXJlcyBwYWlkIHRoaXJkLXBhcnR5IGVudGVycHJpc2UgbGljZW5zZSBrZXlzLiJd",
    "answer": "MQ=="
  },
  {
    "subject": "kubernetes-devsecops",
    "subjectLabel": "☸️ Kubernetes DevSecOps Mastery",
    "question": "159. What immediate protection occurs when you apply a default-deny-all NetworkPolicy to an operational namespace?",
    "options": "WyJBbGwgcnVubmluZyBwb2RzIGFuZCBzZXJ2aWNlcyBpbiB0aGUgbmFtZXNwYWNlIGFyZSBpbnN0YW50bHkgZGVsZXRlZC4iLCJBbGwgaW5jb21pbmcgYW5kIG91dGdvaW5nIHBvZCBuZXR3b3JrIHRyYWZmaWMgaXMgYmxvY2tlZCBieSBkZWZhdWx0IHVudGlsIGV4cGxpY2l0IGVncmVzcy9pbmdyZXNzIGNvbm5lY3Rpb24gcnVsZXMgYXJlIGRlY2xhcmVkLiIsIlRoZSBuYW1lc3BhY2UgaXMgY29udmVydGVkIGludG8gYSByZWFkLW9ubHkgR2l0T3BzIHJlcG9zaXRvcnkuIiwiV29ya2VyIG5vZGVzIGluIHRoZSBuYW1lc3BhY2UgZHJvcCBhbGwgaW5jb21pbmcgU1NIIGNvbm5lY3Rpb25zLiJd",
    "answer": "MQ=="
  },
  {
    "subject": "kubernetes-devsecops",
    "subjectLabel": "☸️ Kubernetes DevSecOps Mastery",
    "question": "160. Which set of securityContext directives enforces strict Restricted Pod Security Standards for container hardening?",
    "options": "WyJwcml2aWxlZ2VkOiB0cnVlLCBydW5Bc1Jvb3Q6IHRydWUsIGhvc3ROZXR3b3JrOiB0cnVlIiwicnVuQXNOb25Sb290OiB0cnVlLCByZWFkT25seVJvb3RGaWxlc3lzdGVtOiB0cnVlLCBhbmQgY2FwYWJpbGl0aWVzOiBkcm9wOiBbJ0FMTCddIiwiYXV0b21vdW50U2VydmljZUFjY291bnRUb2tlbjogdHJ1ZSwgYWxsb3dQcml2aWxlZ2VFc2NhbGF0aW9uOiB0cnVlLCBwb3J0OiA4MCIsInN0cmF0ZWd5OiBSZWNyZWF0ZSwgbWF4U3VyZ2U6IDUwJSwgc3RvcmFnZUNsYXNzOiBncDIiXQ==",
    "answer": "MQ=="
  },
  {
    "subject": "kubernetes-devsecops",
    "subjectLabel": "☸️ Kubernetes DevSecOps Mastery",
    "question": "161. How does an Admission Control Policy Engine like Kyverno protect a cluster at deployment time?",
    "options": "WyJCeSBzY2FubmluZyBob3N0IE9TIEJJT1Mgc2V0dGluZ3MgZHVyaW5nIG5vZGUgYm9vdHMuIiwiQnkgaW50ZXJjZXB0aW5nIHJlcXVlc3RzIGF0IHRoZSBBUEkgc2VydmVyIGFuZCByZWplY3Rpbmcgbm9uLWNvbXBsaWFudCBtYW5pZmVzdHMgYmVmb3JlIHRoZXkgcmVhY2ggZXRjZC4iLCJCeSBhdXRvbWF0aWNhbGx5IHJld3JpdGluZyBhcHBsaWNhdGlvbiBzb3VyY2UgY29kZSBpbiBHaXQgcmVwb3NpdG9yaWVzLiIsIkJ5IGVuY3J5cHRpbmcgZXh0ZXJuYWwgdHJhZmZpYyBlbnRlcmluZyBjbG91ZCByb3V0ZXJzLiJd",
    "answer": "MQ=="
  },
  {
    "subject": "kubernetes-devsecops",
    "subjectLabel": "☸️ Kubernetes DevSecOps Mastery",
    "question": "162. How does Helm eliminate manifest duplication when managing environments across Dev, Staging, and Production?",
    "options": "WyJCeSBidW5kbGluZyBhbGwgZW52aXJvbm1lbnQgdmFyaWFibGVzIGludG8gYSBzaW5nbGUgdW5lbmNyeXB0ZWQgQ29uZmlnTWFwLiIsIkJ5IHBhcmFtZXRlcml6aW5nIG1hbmlmZXN0cyBpbnRvIGdlbmVyaWMgY2hhcnQgdGVtcGxhdGVzIGFuZCBzd2FwcGluZyBlbnZpcm9ubWVudC1zcGVjaWZpYyB2YWx1ZXMueWFtbCBmaWxlcy4iLCJCeSBjb21waWxpbmcgWUFNTCBtYW5pZmVzdHMgaW50byBiaW5hcnkgQysrIGV4ZWN1dGFibGUgZmlsZXMuIiwiQnkgZ2VuZXJhdGluZyByYW5kb20gY29udGFpbmVyIGltYWdlIHRhZ3MgZHVyaW5nIGRlcGxveW1lbnQuIl0=",
    "answer": "MQ=="
  },
  {
    "subject": "kubernetes-devsecops",
    "subjectLabel": "☸️ Kubernetes DevSecOps Mastery",
    "question": "163. Why is ArgoCD's pull-based GitOps model superior to traditional CI push deployment scripts?",
    "options": "WyJJdCBhbGxvd3MgZGV2ZWxvcGVycyB0byBkZXBsb3kgY29kZSB3aXRob3V0IGNvbW1pdHRpbmcgdG8gR2l0LiIsIkl0IHJ1bnMgaW5zaWRlIHRoZSBjbHVzdGVyLCB1c2VzIEdpdCBhcyB0aGUgc2luZ2xlIHNvdXJjZSBvZiB0cnV0aCwgZWxpbWluYXRlcyBleHBvc2VkIGFkbWluIGtleXMgaW4gQ0ksIGFuZCBzZWxmLWhlYWxzIG1hbnVhbCBkcmlmdCBhdXRvbWF0aWNhbGx5LiIsIkl0IGVsaW1pbmF0ZXMgdGhlIG5lZWQgZm9yIEt1YmVybmV0ZXMgd29ya2VyIG5vZGVzLiIsIkl0IGF1dG9tYXRpY2FsbHkgcmV3cml0ZXMgZmFpbGluZyBhcHBsaWNhdGlvbiBjb2RlIGJlZm9yZSBkZXBsb3lpbmcuIl0=",
    "answer": "MQ=="
  },
  {
    "subject": "kubernetes-devsecops",
    "subjectLabel": "☸️ Kubernetes DevSecOps Mastery",
    "question": "164. What are the Four Golden Signals of observability essential for mindful cluster monitoring?",
    "options": "WyJDUFUsIE1lbW9yeSwgRGlzaywgYW5kIE5ldHdvcmsiLCJMYXRlbmN5LCBUcmFmZmljLCBFcnJvcnMsIGFuZCBTYXR1cmF0aW9uIiwiUG9kcywgU2VydmljZXMsIERlcGxveW1lbnRzLCBhbmQgSW5ncmVzcyIsIkF1dGhlbnRpY2F0aW9uLCBBdXRob3JpemF0aW9uLCBFbmNyeXB0aW9uLCBhbmQgQXVkaXRpbmciXQ==",
    "answer": "MQ=="
  },
  {
    "subject": "kubernetes-devsecops",
    "subjectLabel": "☸️ Kubernetes DevSecOps Mastery",
    "question": "165. Why is scaling on custom Prometheus metrics (such as HTTP requests/sec) more effective than CPU utilization during sudden flash sales?",
    "options": "WyJCZWNhdXNlIENQVSB1dGlsaXphdGlvbiBtZXRyaWNzIGFyZSB1cGRhdGVkIG9ubHkgb25jZSBwZXIgd2Vlay4iLCJCZWNhdXNlIHRyYWZmaWMgc3Bpa2VzIG9jY3VyIGluc3RhbnRseSwgdHJpZ2dlcmluZyBQb2Qgc2NhbGluZyBiZWZvcmUgQ1BVIHNhdHVyYXRpb24gY2F1c2VzIGRyb3BwZWQgY3VzdG9tZXIgY2hlY2tvdXRzLiIsIkJlY2F1c2UgY3VzdG9tIG1ldHJpY3MgZG8gbm90IHJlcXVpcmUgSG9yaXpvbnRhbCBQb2QgQXV0b3NjYWxlcnMuIiwiQmVjYXVzZSBDUFUgYXV0b3NjYWxpbmcgd29ya3MgZXhjbHVzaXZlbHkgb24gc2luZ2xlLWNvcmUgbm9kZXMuIl0=",
    "answer": "MQ=="
  },
  {
    "subject": "istio",
    "subjectLabel": "☸️ Istio: The Zen Path to Service Mesh",
    "question": "166. In the Monk metaphor, if application code represents the monk meditating inside a dwelling, what does the Envoy sidecar proxy represent?",
    "options": "WyJUaGUgb3V0ZXIgcGVyaW1ldGVyIHN0b25lIHdhbGwgc3Vycm91bmRpbmcgdGhlIGVudGlyZSBtb25hc3RlcnkiLCJUaGUgbWFzdGVyIGJlbGwgdG93ZXIgc2lnbmFsaW5nIG1lYWwgdGltZXMgYWNyb3NzIHRoZSB2YWxsZXkiLCJUaGUgZGlzY2lwbGluZWQgcGVyc29uYWwgYXR0ZW5kYW50IHN0YW5kaW5nIGF0IHRoZSBkb29yd2F5IGludGVyY2VwdGluZyBhbmQgZW5jcnlwdGluZyBldmVyeSBtZXNzYWdlIiwiVGhlIGNlbnRyYWwgbGlicmFyeSBzdG9yaW5nIGFsbCBoaXN0b3JpY2FsIHNjcm9sbHMgYW5kIGRvY3VtZW50cyJd",
    "answer": "Mg=="
  },
  {
    "subject": "istio",
    "subjectLabel": "☸️ Istio: The Zen Path to Service Mesh",
    "question": "167. Where does Istio's core service mesh operate compared to a traditional edge API Gateway?",
    "options": "WyJJdCBoYW5kbGVzIE5vcnRoLVNvdXRoIHRyYWZmaWMgZW50ZXJpbmcgZnJvbSBleHRlcm5hbCBwdWJsaWMgbmV0d29ya3MiLCJJdCBtYW5hZ2VzIEVhc3QtV2VzdCB0cmFmZmljIG1vdmluZyBiZXR3ZWVuIGludGVybmFsIG1pY3Jvc2VydmljZXMgaW5zaWRlIHRoZSBjbHVzdGVyIiwiSXQgcnVucyBvbmx5IG9uIGRhdGFiYXNlIHNlcnZlcnMgdG8gbWFuYWdlIGRpc2sgSS9PIG9wZXJhdGlvbnMiLCJJdCByZXBsYWNlcyB0aGUgS3ViZXJuZXRlcyBBUEkgc2VydmVyIGZvciBzY2hlZHVsaW5nIHBvZHMiXQ==",
    "answer": "MQ=="
  },
  {
    "subject": "istio",
    "subjectLabel": "☸️ Istio: The Zen Path to Service Mesh",
    "question": "168. If istiod (The Mind) experiences a temporary OOM crash in production, what happens to live traffic moving between running application pods?",
    "options": "WyJFbnZveSBzaWRlY2FycyBjb250aW51ZSByb3V0aW5nIGVuY3J5cHRlZCB0cmFmZmljIHVzaW5nIHRoZSBsYXN0LWtub3duIGdvb2QgY29uZmlndXJhdGlvbiBjYWNoZWQgaW4gbWVtb3J5IiwiQWxsIHJ1bm5pbmcgYXBwbGljYXRpb24gcG9kcyBpbW1lZGlhdGVseSBzdG9wIHByb2Nlc3NpbmcgbmV0d29yayByZXF1ZXN0cyIsIkt1YmVybmV0ZXMgYXV0b21hdGljYWxseSBkZWxldGVzIGFsbCBwb2RzIGluIHRoZSBuYW1lc3BhY2UiLCJBbGwgaW50ZXItc2VydmljZSB0cmFmZmljIHJldmVydHMgdG8gdW5lbmNyeXB0ZWQgcGxhaW50ZXh0Il0=",
    "answer": "MA=="
  },
  {
    "subject": "istio",
    "subjectLabel": "☸️ Istio: The Zen Path to Service Mesh",
    "question": "169. How does istio-init redirect incoming and outgoing pod traffic to the Envoy proxy without changing application code?",
    "options": "WyJCeSByZXdyaXRpbmcgdGhlIGFwcGxpY2F0aW9uJ3Mgc291cmNlIGNvZGUgYmluYXJ5IG9uIHN0YXJ0dXAiLCJCeSBjb25maWd1cmluZyBhbiBleHRlcm5hbCBoYXJkd2FyZSByb3V0ZXIgb3V0c2lkZSB0aGUgY2xvdWQgbm9kZSIsIkJ5IG1vZGlmeWluZyBETlMgcmVjb3JkcyBpbiB0aGUgY2xvdWQgcHJvdmlkZXIncyBETlMgY29uc29sZSIsIkJ5IGV4ZWN1dGluZyBMaW51eCBpcHRhYmxlcyBjb21tYW5kcyBpbiB0aGUgcG9kJ3MgbmV0d29yayBuYW1lc3BhY2UgdG8gZm9yd2FyZCBwb3J0IDE1MDA2IChpbmJvdW5kKSBhbmQgMTUwMDEgKG91dGJvdW5kKSJd",
    "answer": "Mw=="
  },
  {
    "subject": "istio",
    "subjectLabel": "☸️ Istio: The Zen Path to Service Mesh",
    "question": "170. How do you prevent startup race conditions where an application container boots before Envoy and fails its initial database connection?",
    "options": "WyJJbmNyZWFzZSB0aGUgcG9kJ3MgQ1BVIHJlcXVlc3RzIGluIEt1YmVybmV0ZXMiLCJEaXNhYmxlIEVudm95IHNpZGVjYXIgaW5qZWN0aW9uIG9uIHRoZSBuYW1lc3BhY2UiLCJBbm5vdGF0ZSB0aGUgZGVwbG95bWVudCB3aXRoIHByb3h5LmlzdGlvLmlvL2NvbmZpZzogJ2hvbGRBcHBsaWNhdGlvblVudGlsUHJveHlTdGFydHM6IHRydWUnIiwiSGFyZGNvZGUgdGhlIGRhdGFiYXNlIElQIGFkZHJlc3MgaW50byB0aGUgYXBwbGljYXRpb24gY29kZSJd",
    "answer": "Mg=="
  },
  {
    "subject": "istio",
    "subjectLabel": "☸️ Istio: The Zen Path to Service Mesh",
    "question": "171. In a large cluster with 1,000 services, how can you reduce Envoy proxy memory usage from 150MB down to ~20MB?",
    "options": "WyJBcHBseSBhbiBJc3RpbyBTaWRlY2FyIHJlc291cmNlIHRvIHNjb3BlIGRvd24gY29uZmlndXJhdGlvbiB2aXNpYmlsaXR5IHRvIG9ubHkgbmVjZXNzYXJ5IGRlc3RpbmF0aW9uIG5hbWVzcGFjZXMiLCJSZXN0YXJ0IGlzdGlvZCBldmVyeSAxMCBtaW51dGVzIHVzaW5nIGEgQ3JvbkpvYiIsIkNvbnZlcnQgYWxsIHNlcnZpY2VzIGZyb20gSFRUUCB0byBwbGFpbiBUQ1AiLCJEaXNhYmxlIFByb21ldGhldXMgbWV0cmljcyBjb2xsZWN0aW9uIGdsb2JhbGx5Il0=",
    "answer": "MA=="
  },
  {
    "subject": "istio",
    "subjectLabel": "☸️ Istio: The Zen Path to Service Mesh",
    "question": "172. Where is a workload's SPIFFE ID (e.g., spiffe://cluster.local/ns/finance/sa/payment-sa) cryptographically embedded during mTLS?",
    "options": "WyJJbiB0aGUgSFRUUCBBdXRob3JpemF0aW9uIGhlYWRlciBhcyBhIGJlYXJlciB0b2tlbiIsIkluIHRoZSBwb2QncyBlbnZpcm9ubWVudCB2YXJpYWJsZXMgdW5kZXIgU1BJRkZFX1NFQ1JFVCIsIkluIHRoZSBTdWJqZWN0IEFsdGVybmF0aXZlIE5hbWUgKFNBTikgZmllbGQgb2YgdGhlIHdvcmtsb2FkJ3MgWC41MDkgU1ZJRCBjZXJ0aWZpY2F0ZSIsIkluIHRoZSBLdWJlcm5ldGVzIENvbmZpZ01hcCBpbnNpZGUga3ViZS1zeXN0ZW0iXQ==",
    "answer": "Mg=="
  },
  {
    "subject": "istio",
    "subjectLabel": "☸️ Istio: The Zen Path to Service Mesh",
    "question": "173. What is the DevSecOps 'Zero-Trust Baseline' best practice when configuring AuthorizationPolicy manifests?",
    "options": "WyJBbGxvdyBhbGwgdHJhZmZpYyBieSBkZWZhdWx0IGFuZCBibG9jayBzcGVjaWZpYyBiYWQgSVAgYWRkcmVzc2VzIiwiQXBwbHkgYSBuYW1lc3BhY2Utd2lkZSBEZW55LUFsbCBwb2xpY3kgKHNwZWM6IHt9KSwgdGhlbiBhZGQgZXhwbGljaXQgbGVhc3QtcHJpdmlsZWdlIEFMTE9XIHJ1bGVzIiwiRGlzYWJsZSBhdXRoZW50aWNhdGlvbiBkdXJpbmcgYnVzaW5lc3MgaG91cnMgYW5kIGVuYWJsZSBpdCBhdCBuaWdodCIsIlRydXN0IGFueSByZXF1ZXN0IHRoYXQgb3JpZ2luYXRlcyBmcm9tIGFuIGludGVybmFsIDEwLngueC54IElQIGFkZHJlc3MiXQ==",
    "answer": "MQ=="
  },
  {
    "subject": "istio",
    "subjectLabel": "☸️ Istio: The Zen Path to Service Mesh",
    "question": "174. How do you prevent a compromised container from making unauthorized outbound calls to malicious external C2 servers on the internet?",
    "options": "WyJSZW1vdmUgdGhlIGludGVybmV0IGdhdGV3YXkgZnJvbSB5b3VyIGhvbWUgcm91dGVyIiwiQ2hhbmdlIHRoZSBjb250YWluZXIgdXNlciB0byByb290IiwiU2V0IFBlZXJBdXRoZW50aWNhdGlvbiBtb2RlIHRvIFBFUk1JU1NJVkUiLCJTZXQgbWVzaENvbmZpZy5vdXRib3VuZFRyYWZmaWNQb2xpY3kubW9kZSA9IFJFR0lTVFJZX09OTFkgYW5kIHdoaXRlbGlzdCBhcHByb3ZlZCBleHRlcm5hbCBob3N0bmFtZXMgaW4gU2VydmljZUVudHJ5IG1hbmlmZXN0cyJd",
    "answer": "Mw=="
  },
  {
    "subject": "istio",
    "subjectLabel": "☸️ Istio: The Zen Path to Service Mesh",
    "question": "175. Why is offloading OAuth2 / JWT validation to Istio RequestAuthentication superior to validating tokens inside application code?",
    "options": "WyJJdCBtYWtlcyBKV1QgdG9rZW5zIHZhbGlkIGZvcmV2ZXIgd2l0aG91dCBleHBpcmF0aW9uIiwiSXQgdmFsaWRhdGVzIHNpZ25hdHVyZXMgYW5kIGNsYWltcyBhdCB0aGUgRW52b3kgZWRnZSBiZWZvcmUgdW5hdXRoZW50aWNhdGVkIHJlcXVlc3RzIGV2ZXIgdG91Y2ggYXBwbGljYXRpb24gY29kZSIsIkl0IHN0b3JlcyB1c2VyIHBhc3N3b3JkcyBkaXJlY3RseSBpbnNpZGUgdGhlIEVudm95IHByb3h5IiwiSXQgZWxpbWluYXRlcyB0aGUgbmVlZCBmb3IgaWRlbnRpdHkgcHJvdmlkZXJzIGxpa2UgQXV0aDAgb3IgS2V5Y2xvYWsiXQ==",
    "answer": "MQ=="
  },
  {
    "subject": "istio",
    "subjectLabel": "☸️ Istio: The Zen Path to Service Mesh",
    "question": "176. What is the fundamental difference between a VirtualService and a DestinationRule in Istio traffic management?",
    "options": "WyJWaXJ0dWFsU2VydmljZSBkZWZpbmVzIHdoZXJlIHRyYWZmaWMgZ29lcyAocm91dGluZyBkZWNpc2lvbnMpOyBEZXN0aW5hdGlvblJ1bGUgZGVmaW5lcyBwb2xpY2llcyBhcHBsaWVkIHdoZW4gdHJhZmZpYyBhcnJpdmVzIChzdWJzZXRzLCBjaXJjdWl0IGJyZWFraW5nKSIsIlZpcnR1YWxTZXJ2aWNlIGhhbmRsZXMgZGF0YWJhc2UgcXVlcmllczsgRGVzdGluYXRpb25SdWxlIGhhbmRsZXMgc3RhdGljIEhUTUwgYXNzZXRzIiwiVmlydHVhbFNlcnZpY2UgcnVucyBvbiBMaW51eDsgRGVzdGluYXRpb25SdWxlIHJ1bnMgb24gV2luZG93cyIsIlZpcnR1YWxTZXJ2aWNlIG1hbmFnZXMgZXh0ZXJuYWwgRE5TOyBEZXN0aW5hdGlvblJ1bGUgbWFuYWdlcyBsb2NhbCBob3N0cyBmaWxlcyJd",
    "answer": "MA=="
  },
  {
    "subject": "istio",
    "subjectLabel": "☸️ Istio: The Zen Path to Service Mesh",
    "question": "177. How can an e-commerce platform safely test a new Checkout-Service:v2 with internal QA engineers before releasing it to 10% of live customers?",
    "options": "WyJEZXBsb3kgdjIgb24gYSBzZXBhcmF0ZSBwaHlzaWNhbCBzZXJ2ZXIgYW5kIGFzayBRQSBlbmdpbmVlcnMgdG8gY2hhbmdlIHRoZWlyIEROUyBob3N0cyBmaWxlIiwiRGVsZXRlIHYxIGFuZCBtb25pdG9yIGN1c3RvbWVyIGNvbXBsYWludCB2b2x1bWUgb24gVHdpdHRlciIsIlVzZSBhbiBJc3RpbyBWaXJ0dWFsU2VydmljZSB0byBtYXRjaCBoZWFkZXIgeC1xYS10ZXN0ZXI6IHRydWUgZm9yIDEwMCUgdjIgcm91dGluZywgZm9sbG93ZWQgYnkgYSB3ZWlnaHQgc3BsaXQgKDkwJSB2MSAvIDEwJSB2MikgZm9yIGdlbmVyYWwgdHJhZmZpYyIsIkluY3JlYXNlIEt1YmVybmV0ZXMgcG9kIG1lbW9yeSBsaW1pdHMgdG8gNjRHQiJd",
    "answer": "Mg=="
  },
  {
    "subject": "istio",
    "subjectLabel": "☸️ Istio: The Zen Path to Service Mesh",
    "question": "178. What happens when an Envoy proxy detects 3 consecutive HTTP 5xx errors from a specific backend pod within a 10-second window?",
    "options": "WyJFbnZveSBkZWxldGVzIHRoZSBlbnRpcmUgS3ViZXJuZXRlcyBjbHVzdGVyIiwiRW52b3kgZWplY3RzIHRoZSBmYWlsaW5nIHBvZCBpbnN0YW5jZSBmcm9tIHRoZSBsb2FkIGJhbGFuY2luZyBwb29sIGZvciAzMCBzZWNvbmRzIChPdXRsaWVyIERldGVjdGlvbikiLCJFbnZveSBjb252ZXJ0cyBhbGwgNXh4IGVycm9ycyBpbnRvIEhUVFAgMjAwIE9LIHJlc3BvbnNlcyBhdXRvbWF0aWNhbGx5IiwiRW52b3kgcmVib290cyB0aGUgdW5kZXJseWluZyBwaHlzaWNhbCBzZXJ2ZXIgbm9kZSJd",
    "answer": "MQ=="
  },
  {
    "subject": "istio",
    "subjectLabel": "☸️ Istio: The Zen Path to Service Mesh",
    "question": "179. What is the primary benefit of using Istio Fault Injection for Chaos Engineering?",
    "options": "WyJJdCBhdXRvbWF0aWNhbGx5IHdyaXRlcyB1bml0IHRlc3QgY29kZSBmb3IgeW91ciBzb2Z0d2FyZSB0ZWFtIiwiSXQgZm9yY2VzIHlvdXIgY2xvdWQgcHJvdmlkZXIgdG8gZ3JhbnQgZnJlZSBjcmVkaXRzIiwiSXQgc2ltdWxhdGVzIDUtc2Vjb25kIGRlbGF5cyBvciA1MDAgZXJyb3IgcmVzcG9uc2VzIGF0IHRoZSBwcm94eSBsYXllciB0byB0ZXN0IGZyb250ZW5kIHJlc2lsaWVuY2Ugd2l0aG91dCBicmVha2luZyBiYWNrZW5kIGFwcGxpY2F0aW9uIGNvZGUgb3IgZGF0YWJhc2VzIiwiSXQgZW5jcnlwdHMgYWxsIGxvY2FsIGRhdGFiYXNlIHN0b3JhZ2Ugd2l0aCBBRVMtMjU2Il0=",
    "answer": "Mg=="
  },
  {
    "subject": "istio",
    "subjectLabel": "☸️ Istio: The Zen Path to Service Mesh",
    "question": "180. Which three golden signals comprise the RED metrics pattern captured automatically by Envoy proxies?",
    "options": "WyJSZWFkaW5lc3MsIEVuY3J5cHRpb24sIERlcGxveW1lbnQiLCJSYXRlIChyZXF1ZXN0IHZvbHVtZSksIEVycm9ycyAoZmFpbHVyZSBjb3VudCksIGFuZCBEdXJhdGlvbiAobGF0ZW5jeSBkaXN0cmlidXRpb24pIiwiUkFNLCBFZ3Jlc3MsIERpc2sgdXRpbGl6YXRpb24iLCJSZXBvc2l0b3J5LCBFbmRwb2ludCwgRG9tYWluIl0=",
    "answer": "MQ=="
  },
  {
    "subject": "istio",
    "subjectLabel": "☸️ Istio: The Zen Path to Service Mesh",
    "question": "181. What lightweight action must application code perform to enable end-to-end distributed tracing across microservice call chains in Jaeger?",
    "options": "WyJJbnN0YWxsIGEgNTBNQiB0cmFjaW5nIFNESyBpbiBldmVyeSBhcHBsaWNhdGlvbiByZXBvc2l0b3J5IiwiV3JpdGUgYWxsIHRyYWNlIGxvZ3MgdG8gZGlzayBpbiBYTUwgZm9ybWF0IiwiRm9yd2FyZCBpbmNvbWluZyB0cmFjZSBjb250ZXh0IGhlYWRlcnMgKHN1Y2ggYXMgdHJhY2VwYXJlbnQgYW5kIHgtcmVxdWVzdC1pZCkgaW50byBvdXRnb2luZyBIVFRQIHJlcXVlc3RzIiwiU2VuZCBhIFNsYWNrIG1lc3NhZ2Ugd2hlbmV2ZXIgYW4gQVBJIGNhbGwgZmluaXNoZXMiXQ==",
    "answer": "Mg=="
  },
  {
    "subject": "istio",
    "subjectLabel": "☸️ Istio: The Zen Path to Service Mesh",
    "question": "182. How does Kiali help DevSecOps teams identify traffic misconfigurations in real time?",
    "options": "WyJCeSBhdXRvbWF0aWNhbGx5IGRlbGV0aW5nIGJyb2tlbiBwb2RzIiwiQnkgZGlzcGxheWluZyBhIHJlYWwtdGltZSB0b3BvbG9neSBncmFwaCBjb2xvci1jb2RpbmcgdHJhZmZpYyBlcnJvcnMgYW5kIHZhbGlkYXRpbmcgSXN0aW8gWUFNTCBtYW5pZmVzdHMgYWdhaW5zdCBjbHVzdGVyIHN0YXRlIiwiQnkgZW1haWxpbmcgbmlnaHRseSBQREYgcmVwb3J0cyB0byBjb21wYW55IGV4ZWN1dGl2ZXMiLCJCeSBnZW5lcmF0aW5nIEFJIHZvaWNlIHN1bW1hcmllcyBvZiBzeXN0ZW0gbG9ncyJd",
    "answer": "MQ=="
  },
  {
    "subject": "istio",
    "subjectLabel": "☸️ Istio: The Zen Path to Service Mesh",
    "question": "183. When deploying an application in the Hands-On Ashram, how do you verify that automatic sidecar injection successfully hooked into a pod?",
    "options": "WyJDaGVjayB0aGF0IGt1YmVjdGwgZ2V0IHBvZHMgc2hvd3MgMi8yIFJFQURZIGNvbnRhaW5lcnMgKDEgYXBwIGNvbnRhaW5lciArIDEgRW52b3kgcHJveHkgY29udGFpbmVyKSIsIkNoZWNrIGlmIHRoZSBwb2QgSVAgYWRkcmVzcyBzdGFydHMgd2l0aCAxOTIuMTY4IiwiVmVyaWZ5IHRoYXQgdGhlIGFwcGxpY2F0aW9uIGNvbnRhaW5lciBpbWFnZSB0YWcgaXMgc2V0IHRvIGxhdGVzdCIsIlJ1biBwaW5nIGdvb2dsZS5jb20gaW5zaWRlIHRoZSBwb2Qgc2hlbGwiXQ==",
    "answer": "MA=="
  },
  {
    "subject": "istio",
    "subjectLabel": "☸️ Istio: The Zen Path to Service Mesh",
    "question": "184. Why are Revision-Based Canary Upgrades (istioctl tag) safer than in-place control plane upgrades?",
    "options": "WyJUaGV5IG1ha2UgY29udHJvbCBwbGFuZSBkb3dubG9hZHMgMTB4IGZhc3RlciIsIlRoZXkgYWxsb3cgb2xkICgxLTIyLTApIGFuZCBuZXcgKDEtMjMtMCkgY29udHJvbCBwbGFuZXMgdG8gcnVuIHNpZGUtYnktc2lkZSwgZW5hYmxpbmcgc2luZ2xlIG5hbWVzcGFjZSBtaWdyYXRpb25zIGFuZCBpbnN0YW50IHJvbGxiYWNrcyBiZWZvcmUgZ2xvYmFsIHByb21vdGlvbiIsIlRoZXkgYWxsb3cgdXBncmFkaW5nIElzdGlvIHdpdGhvdXQgaGF2aW5nIGEgS3ViZXJuZXRlcyBjbHVzdGVyIiwiVGhleSBhdXRvbWF0aWNhbGx5IGZpeCBicm9rZW4gYXBwbGljYXRpb24gY29kZSBzeW50YXgiXQ==",
    "answer": "MQ=="
  },
  {
    "subject": "istio",
    "subjectLabel": "☸️ Istio: The Zen Path to Service Mesh",
    "question": "185. In a GitOps workflow with ArgoCD, what happens if an engineer manually alters an AuthorizationPolicy on the production cluster using kubectl?",
    "options": "WyJBcmdvQ0QgZGV0ZWN0cyB0aGUgY29uZmlndXJhdGlvbiBkcmlmdCBhbmQgYXV0b21hdGljYWxseSBzZWxmLWhlYWxzIHRoZSBjbHVzdGVyIGJhY2sgdG8gbWF0Y2ggdGhlIEdpdCByZXBvc2l0b3J5IHN0YXRlIiwiQXJnb0NEIHBlcm1hbmVudGx5IGRlbGV0ZXMgdGhlIEdpdCByZXBvc2l0b3J5IiwiVGhlIEt1YmVybmV0ZXMgQVBJIHNlcnZlciBwZXJtYW5lbnRseSBsb2NrcyBkb3duIiwiVGhlIGNoYW5nZSBpcyBhdXRvbWF0aWNhbGx5IHB1c2hlZCB0byB0aGUgbWFzdGVyIGJyYW5jaCBpbiBHaXQiXQ==",
    "answer": "MA=="
  },
  {
    "subject": "terraform",
    "subjectLabel": "🧘 Terraform Infrastructure Mastery",
    "question": "186. In the Monk's KISS mental model, how does Terraform's declarative approach differ from imperative Bash scripting?",
    "options": "WyJJbXBlcmF0aXZlIGNvZGUgZGVmaW5lcyB0aGUgZmluYWwgb3V0Y29tZSwgd2hpbGUgZGVjbGFyYXRpdmUgY29kZSBzcGVjaWZpZXMgZXZlcnkgc2luZ2xlIGV4ZWN1dGlvbiBzdGVwLiIsIkltcGVyYXRpdmUgY29kZSByZXF1aXJlcyBhbiBTMyBiYWNrZW5kLCB3aGlsZSBkZWNsYXJhdGl2ZSBjb2RlIHdvcmtzIG9ubHkgb24gbG9jYWwgd29ya3N0YXRpb25zLiIsIkltcGVyYXRpdmUgY29kZSBpcyBsaWtlIGEgNTAtc3RlcCBjdWxpbmFyeSByZWNpcGUsIHdoaWxlIGRlY2xhcmF0aXZlIGNvZGUgaXMgbGlrZSBwb2ludGluZyB0byBhbiBpdGVtIG9uIGEgcmVzdGF1cmFudCBtZW51LiIsIkltcGVyYXRpdmUgY29kZSB1c2VzIEhDTCBzeW50YXgsIHdoaWxlIGRlY2xhcmF0aXZlIGNvZGUgcmVsaWVzIGV4Y2x1c2l2ZWx5IG9uIFB5dGhvbiBTREtzLiJd",
    "answer": "Mg=="
  },
  {
    "subject": "terraform",
    "subjectLabel": "🧘 Terraform Infrastructure Mastery",
    "question": "187. What primary risk does 'ClickOps' (manual cloud console modifications) introduce into production environments?",
    "options": "WyJJdCBjcmVhdGVzIGNvbmZpZ3VyYXRpb24gZHJpZnQsIG1ha2luZyBlbnZpcm9ubWVudHMgbm9uLXJlcGVhdGFibGUgYW5kIGhpZGluZyBzZWN1cml0eSB2dWxuZXJhYmlsaXRpZXMuIiwiSXQgZm9yY2VzIFRlcnJhZm9ybSB0byByZWNyZWF0ZSBhbGwgVlBDIHN1Ym5ldHMgb24gZXZlcnkgZXhlY3V0aW9uLiIsIkl0IHByZXZlbnRzIGRldmVsb3BlcnMgZnJvbSBhY2Nlc3NpbmcgY2xvdWQgcHJvdmlkZXIgYmlsbGluZyBkYXNoYm9hcmRzLiIsIkl0IGF1dG9tYXRpY2FsbHkgZW5jcnlwdHMgUzMgYnVja2V0cyB3aXRob3V0IGRldmVsb3BlciBhdXRob3JpemF0aW9uLiJd",
    "answer": "MA=="
  },
  {
    "subject": "terraform",
    "subjectLabel": "🧘 Terraform Infrastructure Mastery",
    "question": "188. What is the precise purpose of running `terraform plan` during the deployment ritual?",
    "options": "WyJJdCBkb3dubG9hZHMgYW5kIGluc3RhbGxzIGNsb3VkIHByb3ZpZGVyIHBsdWdpbnMgaW50byB0aGUgbG9jYWwgZGlyZWN0b3J5LiIsIkl0IGxvY2tzIHRoZSByZW1vdGUgRHluYW1vREIgdGFibGUgdG8gYmxvY2sgb3RoZXIgZW5naW5lZXJzIGZyb20gdmlld2luZyB0aGUgc3RhdGUuIiwiSXQgYXV0b21hdGljYWxseSByZWZhY3RvcnMgbW9ub2xpdGhpYyBjb25maWd1cmF0aW9ucyBpbnRvIG1vZHVsYXIgZmlsZXMuIiwiSXQgcHJvdmlkZXMgYSBkcnktcnVuIHByZXZpZXcgc2hvd2luZyBleGFjdGx5IHdoYXQgcmVzb3VyY2VzIHdpbGwgYmUgYWRkZWQsIG1vZGlmaWVkLCBvciBkZXN0cm95ZWQgYmVmb3JlIG1ha2luZyBjaGFuZ2VzLiJd",
    "answer": "Mw=="
  },
  {
    "subject": "terraform",
    "subjectLabel": "🧘 Terraform Infrastructure Mastery",
    "question": "189. According to the principle of Immutable Infrastructure, how should a running server be updated when a configuration change is required?",
    "options": "WyJTU0ggZGlyZWN0bHkgaW50byB0aGUgaW5zdGFuY2UgYW5kIGVkaXQgdGhlIGNvbmZpZ3VyYXRpb24gZmlsZXMgbWFudWFsbHkuIiwiVXBkYXRlIHRoZSBkZWNsYXJhdGl2ZSBjb2RlIGluIEdpdCwgc2NhbiBpdCwgYW5kIGxldCBUZXJyYWZvcm0gcmVwbGFjZSBvciByZWNvbmZpZ3VyZSB0aGUgcmVzb3VyY2UgcHJlZGljdGFibHkuIiwiVG9nZ2xlIHRoZSBjb25maWd1cmF0aW9uIHN3aXRjaCBpbnNpZGUgdGhlIGNsb3VkIHdlYiBjb25zb2xlIGR1cmluZyBsb3ctdHJhZmZpYyBob3Vycy4iLCJEZWxldGUgdGhlIGxvY2FsIGAudGVycmFmb3JtYCBjYWNoZSBmb2xkZXIgYW5kIHJlLXJ1biBgdGVycmFmb3JtIGluaXRgLiJd",
    "answer": "MQ=="
  },
  {
    "subject": "terraform",
    "subjectLabel": "🧘 Terraform Infrastructure Mastery",
    "question": "190. What subtle nudge indicates that your infrastructure team is ready to transition to Infrastructure as Code (IaC)?",
    "options": "WyJXaGVuIHlvdSByZWFsaXplIHlvdSBjYW5ub3QgcmVidWlsZCBhIG1hbnVhbGx5IGNyZWF0ZWQgY2xvdWQgZW52aXJvbm1lbnQgaW4gNSBtaW51dGVzIGZyb20gY29kZSBpZiBhIHJlZ2lvbiBmYWlscy4iLCJXaGVuIHlvdXIgY2xvdWQgcHJvdmlkZXIgc2VuZHMgYSBtb250aGx5IGJpbGwgZXhjZWVkaW5nICQxMCwwMDAuIiwiV2hlbiBhbGwgdGVhbSBtZW1iZXJzIHNoYXJlIGEgc2luZ2xlIEFXUyByb290IGFjY291bnQgcGFzc3dvcmQuIiwiV2hlbiB5b3Ugc3dpdGNoIGZyb20gbWFjT1MgdG8gVWJ1bnR1IExpbnV4IHdvcmtzdGF0aW9ucy4iXQ==",
    "answer": "MA=="
  },
  {
    "subject": "terraform",
    "subjectLabel": "🧘 Terraform Infrastructure Mastery",
    "question": "191. What is the fundamental purpose of the `terraform.tfstate` file (The Sacred Scroll)?",
    "options": "WyJUbyBzdG9yZSBjb21waWxlZCBiaW5hcnkgZXhlY3V0YWJsZXMgZm9yIHRoZSBUZXJyYWZvcm0gQ0xJIHRvb2wuIiwiVG8gbG9nIEhUVFAgcmVxdWVzdCB0cmFmZmljIHBhc3NpbmcgdGhyb3VnaCB5b3VyIGFwcGxpY2F0aW9uIGxvYWQgYmFsYW5jZXJzLiIsIlRvIHN0b3JlIHVzZXIgYXV0aGVudGljYXRpb24gcGFzc3dvcmRzIGZvciB0aGUgQVdTIE1hbmFnZW1lbnQgQ29uc29sZS4iLCJUbyBtYXAgeW91ciBodW1hbi1yZWFkYWJsZSBIQ0wgY29kZSB0byByZWFsLXdvcmxkIGNsb3VkIHJlc291cmNlIElEcyBhbmQgYXR0cmlidXRlcy4iXQ==",
    "answer": "Mw=="
  },
  {
    "subject": "terraform",
    "subjectLabel": "🧘 Terraform Infrastructure Mastery",
    "question": "192. How does the 'Temple Guard' (DynamoDB State Locking) protect team deployments?",
    "options": "WyJCeSBlbmNyeXB0aW5nIFMzIG9iamVjdHMgdXNpbmcgY3VzdG9tZXItbWFuYWdlZCBLTVMga2V5cy4iLCJCeSBibG9ja2luZyBpbmNvbWluZyBIVFRQIHdlYiB0cmFmZmljIGR1cmluZyBzY2hlZHVsZWQgZGF0YWJhc2UgbWFpbnRlbmFuY2UuIiwiQnkgcGxhY2luZyBhIHRlbXBvcmFyeSBsb2NrIG9uIHRoZSBzdGF0ZSBmaWxlIGR1cmluZyBleGVjdXRpb24gdG8gcHJldmVudCBjb25jdXJyZW50IHJhY2UgY29uZGl0aW9ucy4iLCJCeSBhdXRvbWF0aWNhbGx5IHJldm9raW5nIGV4cGlyZWQgSUFNIGFjY2VzcyBrZXlzIGV2ZXJ5IDE1IG1pbnV0ZXMuIl0=",
    "answer": "Mg=="
  },
  {
    "subject": "terraform",
    "subjectLabel": "🧘 Terraform Infrastructure Mastery",
    "question": "193. Why is committing `terraform.tfstate` to a Git repository considered a severe security violation?",
    "options": "WyJCZWNhdXNlIEdpdCBhdXRvbWF0aWNhbGx5IGRlbGV0ZXMgYmluYXJ5IGZpbGVzIGxhcmdlciB0aGFuIDFNQi4iLCJCZWNhdXNlIHN0YXRlIGZpbGVzIG9mdGVuIGNvbnRhaW4gcGxhaW4tdGV4dCBkYXRhYmFzZSBjcmVkZW50aWFscywgQVBJIHRva2VucywgYW5kIHByaXZhdGUga2V5cy4iLCJCZWNhdXNlIGB0ZXJyYWZvcm0gcGxhbmAgZmFpbHMgaWYgYSBzdGF0ZSBmaWxlIGlzIHRyYWNrZWQgaW4gR2l0LiIsIkJlY2F1c2UgaXQgcHJldmVudHMgb3RoZXIgdGVhbSBtZW1iZXJzIGZyb20gcnVubmluZyBgZ2l0IHB1bGxgLiJd",
    "answer": "MQ=="
  },
  {
    "subject": "terraform",
    "subjectLabel": "🧘 Terraform Infrastructure Mastery",
    "question": "194. How should sensitive input variables (such as database master passwords) be declared in `variables.tf` to prevent terminal log exposure?",
    "options": "WyJTZXQgYHNlbnNpdGl2ZSA9IHRydWVgIG9uIHRoZSB2YXJpYWJsZSBkZWZpbml0aW9uLiIsIlNldCBgcHVibGljID0gZmFsc2VgIG9uIHRoZSByZXNvdXJjZSBibG9jay4iLCJFbmNyeXB0IHRoZSB2YXJpYWJsZSBuYW1lIHVzaW5nIGJhc2U2NCBlbmNvZGluZy4iLCJTdG9yZSB0aGUgcGFzc3dvcmQgaW4gYHRlcnJhZm9ybS50ZnN0YXRlYCB1bmRlciB0aGUgcm9vdCBtb2R1bGUuIl0=",
    "answer": "MA=="
  },
  {
    "subject": "terraform",
    "subjectLabel": "🧘 Terraform Infrastructure Mastery",
    "question": "195. Which command safely migrates an existing local `terraform.tfstate` file into a newly configured remote S3 backend?",
    "options": "WyJ0ZXJyYWZvcm0gYXBwbHkgLWZvcmNlLW1pZ3JhdGUiLCJ0ZXJyYWZvcm0gc3RhdGUgcHVzaCBzMzovL215LWJ1Y2tldCIsInRlcnJhZm9ybSBpbml0IC1taWdyYXRlLXN0YXRlIiwidGVycmFmb3JtIHJlZnJlc2ggLWJhY2tlbmQ9czMiXQ==",
    "answer": "Mg=="
  },
  {
    "subject": "terraform",
    "subjectLabel": "🧘 Terraform Infrastructure Mastery",
    "question": "196. In the Modular Dojo, what is the core architectural objective of creating reusable Terraform modules?",
    "options": "WyJUbyBpbmNyZWFzZSB0aGUgdG90YWwgbGluZSBjb3VudCBvZiBIQ0wgZmlsZXMgYWNyb3NzIGFsbCBlbnZpcm9ubWVudCBkaXJlY3Rvcmllcy4iLCJUbyBieXBhc3MgQVdTIElBTSBwZXJtaXNzaW9uIGNoZWNrcyBkdXJpbmcgYHRlcnJhZm9ybSBhcHBseWAuIiwiVG8gYWxsb3cgZGV2ZWxvcGVycyB0byBtb2RpZnkgcHJvZHVjdGlvbiBpbmZyYXN0cnVjdHVyZSB3aXRob3V0IHBlZXIgcmV2aWV3LiIsIlRvIGVuY2Fwc3VsYXRlIGNvbXBsZXggaW5mcmFzdHJ1Y3R1cmUgaW50byBzdGFuZGFyZGl6ZWQsIHByZS10ZXN0ZWQgYnVpbGRpbmcgYmxvY2tzIGFuZCBhZGhlcmUgdG8gRFJZIHByaW5jaXBsZXMuIl0=",
    "answer": "Mw=="
  },
  {
    "subject": "terraform",
    "subjectLabel": "🧘 Terraform Infrastructure Mastery",
    "question": "197. How can a module author prevent illegal input values (e.g. setting an environment string to 'test' instead of 'dev'/'staging'/'prod')?",
    "options": "WyJCeSBydW5uaW5nIGB0ZXJyYWZvcm0gZGVzdHJveWAgd2hlbmV2ZXIgYW4gdW5leHBlY3RlZCBlbnZpcm9ubWVudCBpcyBkZXRlY3RlZC4iLCJCeSBhZGRpbmcgYSBjdXN0b20gYHZhbGlkYXRpb25gIGJsb2NrIGluc2lkZSBgdmFyaWFibGVzLnRmYCB3aXRoIGEgY29uZGl0aW9uIGNoZWNrLiIsIkJ5IGhhcmRjb2RpbmcgdGhlIGVudmlyb25tZW50IHN0cmluZyBkaXJlY3RseSBpbnNpZGUgYG1haW4udGZgLiIsIkJ5IHN0b3JpbmcgdmFsaWQgZW52aXJvbm1lbnQgbmFtZXMgaW4gYSBsb2NhbCB0ZXh0IGZpbGUuIl0=",
    "answer": "MQ=="
  },
  {
    "subject": "terraform",
    "subjectLabel": "🧘 Terraform Infrastructure Mastery",
    "question": "198. Why is directory-based environment isolation preferred over CLI workspaces (`terraform workspace select`) for production DevSecOps?",
    "options": "WyJEaXJlY3Rvcnkgc2VwYXJhdGlvbiBzdHJpY3RseSBkZWNvdXBsZXMgc3RhdGUgZmlsZXMgYW5kIElBTSBwZXJtaXNzaW9ucywgZWxpbWluYXRpbmcgdGhlIHJpc2sgb2YgYWNjaWRlbnRhbGx5IHJ1bm5pbmcgYHRlcnJhZm9ybSBkZXN0cm95YCBvbiBwcm9kdWN0aW9uLiIsIldvcmtzcGFjZXMgaW5jcmVhc2UgQVdTIG1vbnRobHkgYmlsbGluZyBjb3N0cyBieSA1MCUuIiwiV29ya3NwYWNlcyBkbyBub3Qgc3VwcG9ydCBgdGVycmFmb3JtIHBsYW5gIGV4ZWN1dGlvbi4iLCJEaXJlY3RvcnktYmFzZWQgaXNvbGF0aW9uIHJlcXVpcmVzIG5vIGJhY2tlbmQgY29uZmlndXJhdGlvbi4iXQ==",
    "answer": "MA=="
  },
  {
    "subject": "terraform",
    "subjectLabel": "🧘 Terraform Infrastructure Mastery",
    "question": "199. What role do static analysis tools like `checkov` and `tfsec` play in modular DevSecOps?",
    "options": "WyJUaGV5IGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGUgZG9jdW1lbnRhdGlvbiBkaWFncmFtcyBmb3IgQVdTIHN1Ym5ldHMuIiwiVGhleSBjb21wcmVzcyBzdGF0ZSBmaWxlcyBzdG9yZWQgaW4gQW1hem9uIFMzIHRvIHJlZHVjZSBzdG9yYWdlIGNvc3RzLiIsIlRoZXkgc2NhbiBIQ0wgY29kZSBhZ2FpbnN0IHNlY3VyaXR5IHBvbGljaWVzIGJlZm9yZSBkZXBsb3ltZW50LCBjYXRjaGluZyBtaXNjb25maWd1cmF0aW9ucyBsaWtlIHVuZW5jcnlwdGVkIHN0b3JhZ2Ugb3Igb3BlbiBmaXJld2FsbCBydWxlcy4iLCJUaGV5IGNvbnZlcnQgSENMIGNvZGUgaW50byBleGVjdXRhYmxlIFB5dGhvbiBzY3JpcHRzLiJd",
    "answer": "Mg=="
  },
  {
    "subject": "terraform",
    "subjectLabel": "🧘 Terraform Infrastructure Mastery",
    "question": "200. Why should consumers source modules using explicit Git tags (e.g. `source = \"git::...?ref=v2.1.0\"`)?",
    "options": "WyJUbyBhbGxvdyBUZXJyYWZvcm0gdG8gcnVuIHdpdGhvdXQgYW4gYWN0aXZlIGludGVybmV0IGNvbm5lY3Rpb24uIiwiVG8gYXV0b21hdGljYWxseSBncmFudCBhZG1pbiByaWdodHMgdG8gdGhlIENJL0NEIHBpcGVsaW5lIHJ1bm5lci4iLCJUbyByZWR1Y2UgYHRlcnJhZm9ybSBpbml0YCBleGVjdXRpb24gdGltZSBieSA5MCUuIiwiVG8gZW5zdXJlIHVwZGF0ZXMgaW4gdGhlIG1vZHVsZSByZXBvc2l0b3J5IGRvIG5vdCB1bmV4cGVjdGVkbHkgYnJlYWsgZG93bnN0cmVhbSBlbnZpcm9ubWVudCBkZXBsb3ltZW50cy4iXQ==",
    "answer": "Mw=="
  },
  {
    "subject": "terraform",
    "subjectLabel": "🧘 Terraform Infrastructure Mastery",
    "question": "201. How does OpenID Connect (OIDC) improve pipeline security compared to static `AWS_ACCESS_KEY_ID` credentials stored in CI/CD secrets?",
    "options": "WyJPSURDIGVuY3J5cHRzIHN0YXRpYyBhY2Nlc3Mga2V5cyB3aXRoIGEgNDA5Ni1iaXQgUlNBIGtleSBzdG9yZWQgb24gbG9jYWwgZGlzay4iLCJPSURDIGVsaW1pbmF0ZXMgbG9uZy1saXZlZCBtYXN0ZXIga2V5cyBieSBleGNoYW5naW5nIEpXVCB0b2tlbnMgZm9yIHNob3J0LWxpdmVkLCAxNS1taW51dGUgdGVtcG9yYXJ5IEFXUyBjcmVkZW50aWFscy4iLCJPSURDIGJ5cGFzc2VzIElBTSBwZXJtaXNzaW9ucyBhbmQgYWxsb3dzIHBpcGVsaW5lcyB0byBydW4gYXMgcm9vdC4iLCJPSURDIHN0b3JlcyBjbG91ZCBwYXNzd29yZHMgaW5zaWRlIHRoZSBgLnRlcnJhZm9ybS9gIHdvcmtzcGFjZSBmb2xkZXIuIl0=",
    "answer": "MQ=="
  },
  {
    "subject": "terraform",
    "subjectLabel": "🧘 Terraform Infrastructure Mastery",
    "question": "202. In a production GitOps workflow, what trigger should initiate `terraform apply`?",
    "options": "WyJBIHBlZXItcmV2aWV3ZWQgY29kZSBtZXJnZSB0byB0aGUgYG1haW5gIGJyYW5jaCBhZnRlciBzdWNjZXNzZnVsIHBsYW4gYW5kIHNlY3VyaXR5IGNoZWNrcy4iLCJBIGRldmVsb3BlciBwcmVzc2luZyBgRW50ZXJgIGluIHRoZWlyIGxvY2FsIHRlcm1pbmFsIHdvcmtzdGF0aW9uLiIsIkFuIGF1dG9tYXRlZCBjcm9uIGpvYiBydW5uaW5nIGV2ZXJ5IDUgbWludXRlcyBpbiBkZXYuIiwiQSBkaXJlY3QgU1NIIGxvZ2luIHRvIGFuIEVDMiBiYXN0aW9uIGhvc3QuIl0=",
    "answer": "MA=="
  },
  {
    "subject": "terraform",
    "subjectLabel": "🧘 Terraform Infrastructure Mastery",
    "question": "203. How does Terraform 1.5+ adopt an existing unmanaged cloud resource (e.g., an RDS database created manually in 2021) into state?",
    "options": "WyJCeSBydW5uaW5nIGB0ZXJyYWZvcm0gZGVzdHJveWAgb24gdGhlIGRhdGFiYXNlIGFuZCByZWNyZWF0aW5nIGl0IGZyb20gY29kZS4iLCJCeSBjb3B5aW5nIHRoZSBBV1MgY29uc29sZSBVUkwgaW50byBgdGVycmFmb3JtLnRmdmFyc2AuIiwiQnkgd3JpdGluZyBhIG5hdGl2ZSBgaW1wb3J0IHt9YCBibG9jayBhbmQgcnVubmluZyBgdGVycmFmb3JtIHBsYW4gLWdlbmVyYXRlLWNvbmZpZy1vdXRgIHRvIGF1dG8tZ2VuZXJhdGUgdGhlIEhDTCBjb2RlLiIsIkJ5IGV4cG9ydGluZyB0aGUgZGF0YWJhc2UgaW50byBhIENTViBmaWxlIGFuZCBydW5uaW5nIGB0ZXJyYWZvcm0gaW5pdGAuIl0=",
    "answer": "Mg=="
  },
  {
    "subject": "terraform",
    "subjectLabel": "🧘 Terraform Infrastructure Mastery",
    "question": "204. Which flag causes `terraform plan` to return an exit code of `2` when real-world cloud resources differ from code state?",
    "options": "WyItYXV0by1hcHByb3ZlIiwiLWNvbXBhY3Qtd2FybmluZ3MiLCItanNvbiIsIi1kZXRhaWxlZC1leGl0Y29kZSJd",
    "answer": "Mw=="
  },
  {
    "subject": "terraform",
    "subjectLabel": "🧘 Terraform Infrastructure Mastery",
    "question": "205. In an Unshakable Pipeline, how does automated self-healing reconcile unauthorized console changes back to the source of truth?",
    "options": "WyJCeSBzZW5kaW5nIGFuIHVyZ2VudCBTTVMgYWxlcnQgdG8gdGhlIGxlYWQgYXJjaGl0ZWN0IGV2ZXJ5IDMwIHNlY29uZHMuIiwiQnkgYXV0b21hdGljYWxseSByZS1hcHBseWluZyB0aGUgYXBwcm92ZWQgR2l0IGJhc2VsaW5lIGNvZGUgd2hlbmV2ZXIgZHJpZnQgaXMgZGV0ZWN0ZWQuIiwiQnkgdGVybWluYXRpbmcgdGhlIEFXUyBhY2NvdW50IGFuZCBsYXVuY2hpbmcgYSBuZXcgb3JnYW5pemF0aW9uIHRlbmFudC4iLCJCeSByZXZlcnRpbmcgdGhlIEdpdCByZXBvc2l0b3J5IHRvIGEgY29tbWl0IGZyb20gMzAgZGF5cyBhZ28uIl0=",
    "answer": "MQ=="
  },
  {
    "subject": "prometheus-observability",
    "subjectLabel": "🧘 The Zen of Prometheus: Production-Grade Observability",
    "question": "206. In the Monk's monastery metaphor, how does Prometheus's pull architecture avoid 'Push Disorder' during sudden traffic spikes?",
    "options": "WyJCeSByZXF1aXJpbmcgZXZlcnkgbWljcm9zZXJ2aWNlIHRvIGluc3RhbGwgYSBoZWF2eSBwdXNoaW5nIGFnZW50IGRhZW1vbiIsIkJ5IGRyb3BwaW5nIDUwJSBvZiBpbmNvbWluZyBQT1NUIHBheWxvYWRzIHdoZW4gQ1BVIHVzYWdlIHRvdWNoZXMgODAlIiwiQnkgaGF2aW5nIFByb21ldGhldXMgcHVsbCBtZXRyaWNzIGF0IGNhbG0sIHByZWRpY3RhYmxlIGludGVydmFscyByYXRoZXIgdGhhbiBiZWluZyBmbG9vZGVkIGJ5IHRob3VzYW5kcyBvZiBwdXNoaW5nIGFnZW50cyIsIkJ5IGJ1ZmZlcmluZyBtZXRyaWMgcGF5bG9hZHMgaW4gYW4gZXh0ZXJuYWwgUmVkaXMgY2x1c3RlciBvbiB0aGUgZWRnZSJd",
    "answer": "Mg=="
  },
  {
    "subject": "prometheus-observability",
    "subjectLabel": "🧘 The Zen of Prometheus: Production-Grade Observability",
    "question": "207. What is the fundamental distinction between the three primary observability signals (Metrics, Logs, and Traces)?",
    "options": "WyJNZXRyaWNzIHRlbGwgeW91IGlmIHNvbWV0aGluZyBpcyBicm9rZW4gcmlnaHQgbm93LCBMb2dzIHRlbGwgeW91IHdoeSBpdCBicm9rZSwgYW5kIFRyYWNlcyBzaG93IHdoZXJlIHRoZSBsYXRlbmN5IG9jY3VycmVkIiwiTWV0cmljcyBwcm92aWRlIGRldGFpbGVkIGV2ZW50IGRpYXJpZXMsIExvZ3MgdHJhY2sgbGF0ZW5jeSwgYW5kIFRyYWNlcyBtZWFzdXJlIHN5c3RlbSB0ZW1wZXJhdHVyZSIsIk1ldHJpY3MgYXJlIGZvciBzZWN1cml0eSBhdWRpdHMsIExvZ3MgYXJlIGZvciByZWFsLXRpbWUgYWxlcnRzLCBhbmQgVHJhY2VzIHJlcGxhY2UgZGF0YWJhc2UgYmFja3VwcyIsIk1ldHJpY3MgYW5kIExvZ3MgYXJlIGlkZW50aWNhbCBpbiBQcm9tZXRoZXVzOyBUcmFjZXMgYXJlIG9ubHkgdXNlZCBpbiBtb25vbGl0aGljIGFwcGxpY2F0aW9ucyJd",
    "answer": "MA=="
  },
  {
    "subject": "prometheus-observability",
    "subjectLabel": "🧘 The Zen of Prometheus: Production-Grade Observability",
    "question": "208. Why should you never query a raw Counter metric directly on a Grafana dashboard without wrapping it in rate() or increase()?",
    "options": "WyJCZWNhdXNlIHJhdyBDb3VudGVycyBhdXRvbWF0aWNhbGx5IHJlc2V0IHRvIHplcm8gZXZlcnkgaG91ciIsIkJlY2F1c2UgcXVlcnlpbmcgYSByYXcgQ291bnRlciBjYXVzZXMgUHJvbWV0aGV1cyB0byBkcm9wIFRTREIgYmxvY2tzIiwiQmVjYXVzZSByYXcgQ291bnRlcnMgc3RvcmUgc3RyaW5nIGRhdGEgaW5zdGVhZCBvZiBmbG9hdGluZy1wb2ludCBudW1iZXJzIiwiQmVjYXVzZSByYXcgQ291bnRlcnMgb25seSBnbyB1cCwgZ2l2aW5nIGN1bXVsYXRpdmUgdG90YWxzIHJhdGhlciB0aGFuIHBlci1zZWNvbmQgcmVxdWVzdCB2ZWxvY2l0eSJd",
    "answer": "Mw=="
  },
  {
    "subject": "prometheus-observability",
    "subjectLabel": "🧘 The Zen of Prometheus: Production-Grade Observability",
    "question": "209. Which of the following operational data points must be recorded using a Gauge data type instead of a Counter?",
    "options": "WyJUb3RhbCBIVFRQIHJlcXVlc3RzIHByb2Nlc3NlZCBzaW5jZSBkZXBsb3ltZW50IiwiQ3VycmVudCBhY3RpdmUgZGF0YWJhc2UgY29ubmVjdGlvbiBwb29sIGRlcHRoIG9yIFJBTSB1c2FnZSIsIkN1bXVsYXRpdmUgc3VtIG9mIHBheW1lbnQgYXV0aG9yaXphdGlvbiBlcnJvcnMiLCJDb21wbGV0ZWQgYmFja2dyb3VuZCBjcm9uIGpvYnMgY291bnQiXQ==",
    "answer": "MQ=="
  },
  {
    "subject": "prometheus-observability",
    "subjectLabel": "🧘 The Zen of Prometheus: Production-Grade Observability",
    "question": "210. What is the technical difference between an Instant Vector and a Range Vector in PromQL?",
    "options": "WyJBbiBJbnN0YW50IFZlY3RvciBldmFsdWF0ZXMgYSBzaW5nbGUgc2FtcGxlIHBlciBzZXJpZXMgYXQgb25lIG1vbWVudCAoJ25vdycpLCB3aGlsZSBhIFJhbmdlIFZlY3RvciBjb250YWlucyBhIGJ1ZmZlciBvZiBoaXN0b3JpY2FsIHNhbXBsZXMgb3ZlciBhIGR1cmF0aW9uIiwiQW4gSW5zdGFudCBWZWN0b3IgY2FuIG9ubHkgYmUgdXNlZCBpbiBBbGVydG1hbmFnZXIsIHdoaWxlIGEgUmFuZ2UgVmVjdG9yIGlzIHVzZWQgaW4gR3JhZmFuYSIsIkFuIEluc3RhbnQgVmVjdG9yIHN0b3JlcyB0ZXh0IGxvZ3MsIHdoaWxlIGEgUmFuZ2UgVmVjdG9yIHN0b3JlcyBudW1lcmljIG1ldHJpY3MiLCJSYW5nZSBWZWN0b3JzIGNhbiBiZSBncmFwaGVkIGRpcmVjdGx5IGFzIGxpbmVzIGluIEdyYWZhbmEgd2l0aG91dCBhbnkgd3JhcHBpbmcgZnVuY3Rpb25zIl0=",
    "answer": "MA=="
  },
  {
    "subject": "prometheus-observability",
    "subjectLabel": "🧘 The Zen of Prometheus: Production-Grade Observability",
    "question": "211. When writing alerting rules vs. dashboard graphs, how do rate() and irate() differ in performance?",
    "options": "WyJyYXRlKCkgaWdub3JlcyBjb3VudGVyIHJlc2V0cywgd2hpbGUgaXJhdGUoKSBmYWlscyB3aGVuZXZlciBhIHNlcnZpY2UgcmVzdGFydHMiLCJyYXRlKCkgcmVxdWlyZXMgUzMgb2JqZWN0IHN0b3JhZ2UsIHdoaWxlIGlyYXRlKCkgcmVhZHMgZGlyZWN0bHkgZnJvbSBSQU0iLCJyYXRlKCkgYXZlcmFnZXMgaW5jcmVhc2Ugb3ZlciBhbiBlbnRpcmUgdGltZSB3aW5kb3cgZm9yIHN0YWJsZSBhbGVydHMsIHdoaWxlIGlyYXRlKCkgdXNlcyB0aGUgbGFzdCB0d28gcG9pbnRzIGZvciBpbnN0YW50IHNwaWtlIHZpc2liaWxpdHkiLCJyYXRlKCkgY2FuIG9ubHkgYmUgcnVuIG9uIEdhdWdlIG1ldHJpY3MsIHdoaWxlIGlyYXRlKCkgb25seSB3b3JrcyBvbiBTdW1tYXJpZXMiXQ==",
    "answer": "Mg=="
  },
  {
    "subject": "prometheus-observability",
    "subjectLabel": "🧘 The Zen of Prometheus: Production-Grade Observability",
    "question": "212. What developer practice triggers a high-cardinality explosion in Prometheus TSDB memory?",
    "options": "WyJVc2luZyBqb2I9J2FwaS1zZXJ2ZXInIGFzIGEgbGFiZWwgb24gbWljcm9zZXJ2aWNlcyIsIlNjcmFwaW5nIG1vcmUgdGhhbiAxMCBwb2RzIHNpbXVsdGFuZW91c2x5IGluIGEgc2luZ2xlIGNsdXN0ZXIiLCJTZXR0aW5nIHRoZSBzY3JhcGVfaW50ZXJ2YWwgcGFyYW1ldGVyIHRvIDUgc2Vjb25kcyIsIkF0dGFjaGluZyBkeW5hbWljLCB1bmJvdW5kZWQgdmFsdWVzIGxpa2UgdXNlcl9pZCBvciBvcmRlcl9pZCBhcyBtZXRyaWMgbGFiZWxzIl0=",
    "answer": "Mw=="
  },
  {
    "subject": "prometheus-observability",
    "subjectLabel": "🧘 The Zen of Prometheus: Production-Grade Observability",
    "question": "213. How does the Prometheus TSDB engine ensure real-time query speed while protecting incoming samples against system crashes?",
    "options": "WyJCeSB3cml0aW5nIGRpcmVjdGx5IHRvIFMzIGNsb3VkIHN0b3JhZ2UgYmVmb3JlIGJ1ZmZlcmluZyBpbiBSQU0iLCJCeSBidWZmZXJpbmcgaW5jb21pbmcgc2FtcGxlcyBpbiB0aGUgaW4tbWVtb3J5IEhlYWQgQmxvY2sgd2hpbGUgc2ltdWx0YW5lb3VzbHkgd3JpdGluZyB0byB0aGUgb24tZGlzayBXcml0ZS1BaGVhZCBMb2cgKFdBTCkiLCJCeSBzZW5kaW5nIGFsbCB0aW1lLXNlcmllcyBkYXRhIHRvIEFsZXJ0bWFuYWdlciBmb3IgZGlzayBjYWNoaW5nIiwiQnkgcnVubmluZyBhbiBhdXRvbWF0aWMgZGF0YWJhc2UgYmFja3VwIGV2ZXJ5IDE1IHNlY29uZHMgdG8gZXh0ZXJuYWwgZGlzayJd",
    "answer": "MQ=="
  },
  {
    "subject": "prometheus-observability",
    "subjectLabel": "🧘 The Zen of Prometheus: Production-Grade Observability",
    "question": "214. How does the Prometheus Operator achieve declarative target auto-discovery in Kubernetes?",
    "options": "WyJCeSB1c2luZyBsYWJlbCBzZWxlY3RvcnMgdG8gbWF0Y2ggdGFyZ2V0IEt1YmVybmV0ZXMgU2VydmljZXMgYW5kIGR5bmFtaWNhbGx5IHNjcmFwZSBtYXRjaGluZyBwb2RzIGFzIHRoZXkgc3BpbiB1cCIsIkJ5IG1vZGlmeWluZyB0aGUgY29yZSBLdWJlcm5ldGVzIEFQSSBzZXJ2ZXIgYmluYXJ5IGR1cmluZyBjbHVzdGVyIGluc3RhbGxhdGlvbiIsIkJ5IHJlcXVpcmluZyBtYW51YWwgSVAgYWRkcmVzcyBlbnRyaWVzIGluIHByb21ldGhldXMueW1sIHdoZW5ldmVyIGEgcG9kIHJlc3RhcnRzIiwiQnkgZm9yY2luZyBhbGwgcG9kcyB0byBwdXNoIG1ldHJpY3MgZGlyZWN0bHkgdG8gUHVzaGdhdGV3YXkiXQ==",
    "answer": "MA=="
  },
  {
    "subject": "prometheus-observability",
    "subjectLabel": "🧘 The Zen of Prometheus: Production-Grade Observability",
    "question": "215. In what scenario should you deploy a PodMonitor CRD instead of a ServiceMonitor CRD?",
    "options": "WyJTZXJ2aWNlTW9uaXRvcnMgY2FuIG9ubHkgc2NyYXBlIEhUVFBTIGVuZHBvaW50cywgd2hpbGUgUG9kTW9uaXRvcnMgc2NyYXBlIEhUVFAiLCJQb2RNb25pdG9ycyByZXF1aXJlIHJvb3QgcHJpdmlsZWdlcyBvbiB0aGUgaG9zdCBub2RlLCB3aGlsZSBTZXJ2aWNlTW9uaXRvcnMgZG8gbm90IiwiUG9kTW9uaXRvcnMgc2NyYXBlIHRhcmdldCBwb2RzIGRpcmVjdGx5IHdpdGhvdXQgbmVlZGluZyBhIEt1YmVybmV0ZXMgQ2x1c3RlcklQIFNlcnZpY2UgYWJzdHJhY3Rpb24iLCJTZXJ2aWNlTW9uaXRvcnMgYXJlIG9ic29sZXRlIGFuZCByZXBsYWNlZCBlbnRpcmVseSBieSBQcm9tZXRoZXVzUnVsZSBDUkRzIl0=",
    "answer": "Mg=="
  },
  {
    "subject": "prometheus-observability",
    "subjectLabel": "🧘 The Zen of Prometheus: Production-Grade Observability",
    "question": "216. What is the core role of a PrometheusRule Custom Resource Definition (CRD)?",
    "options": "WyJUbyBjb25maWd1cmUgY29udGFpbmVyIENQVSBhbmQgUkFNIGxpbWl0cyBmb3IgUHJvbWV0aGV1cyBwb2RzIiwiVG8gc3RvcmUgZGF0YWJhc2UgcGFzc3dvcmRzIHNlY3VyZWx5IGluc2lkZSBUU0RCIHN0b3JhZ2UiLCJUbyBvdmVycmlkZSBLdWJlcm5ldGVzIFJCQUMgcnVsZXMgZm9yIGNsdXN0ZXIgbm9kZXMiLCJUbyBkZWZpbmUgcmVjb3JkaW5nIGFuZCBhbGVydGluZyBydWxlcyBkZWNsYXJhdGl2ZWx5IGFzIG5hdGl2ZSBLdWJlcm5ldGVzIFlBTUwgbWFuaWZlc3RzIl0=",
    "answer": "Mw=="
  },
  {
    "subject": "prometheus-observability",
    "subjectLabel": "🧘 The Zen of Prometheus: Production-Grade Observability",
    "question": "217. When a target displays state DOWN in Prometheus Target Status, what is the first step on the Target Debugger checklist?",
    "options": "WyJEZXBsb3kgYSBzZWNvbmQgS3ViZXJuZXRlcyBjbHVzdGVyIGltbWVkaWF0ZWx5IiwiVmVyaWZ5IGlmIHRoZSBTZXJ2aWNlTW9uaXRvciBwb3J0IG5hbWUgbWF0Y2hlcyB0aGUgS3ViZXJuZXRlcyBTZXJ2aWNlIG5hbWVkIHBvcnQgZXhhY3RseSIsIkNvbnZlcnQgYWxsIENvdW50ZXIgbWV0cmljcyBpbnRvIFN1bW1hcmllcyIsIkRpc2FibGUgQWxlcnRtYW5hZ2VyIGRlZHVwbGljYXRpb24iXQ==",
    "answer": "MQ=="
  },
  {
    "subject": "prometheus-observability",
    "subjectLabel": "🧘 The Zen of Prometheus: Production-Grade Observability",
    "question": "218. Which combination of DevSecOps practices is required to secure internal /metrics scrape pathways under PCI-DSS or HIPAA standards?",
    "options": "WyJFeHBvc2luZyAvbWV0cmljcyBvdmVyIHB1YmxpYyBIVFRQIHdpdGhvdXQgYXV0aGVudGljYXRpb24iLCJSdW5uaW5nIFByb21ldGhldXMgYXMgcm9vdCB1c2VyIHdpdGggcHJpdmlsZWdlIGVzY2FsYXRpb24gZW5hYmxlZCIsIkVuZm9yY2luZyBNdXR1YWwgVExTIChtVExTKSwgQmVhcmVyIFRva2VucywgYW5kIG5vbi1yb290IGNvbnRhaW5lciBleGVjdXRpb24gKHJ1bkFzVXNlcjogNjU1MzQpIiwiU3RvcmluZyBwbGFpbi10ZXh0IHBhc3N3b3JkcyBkaXJlY3RseSBpbiB0aGUgcHJvbWV0aGV1cy55bWwgc2NyYXBlIGpvYiJd",
    "answer": "Mg=="
  },
  {
    "subject": "prometheus-observability",
    "subjectLabel": "🧘 The Zen of Prometheus: Production-Grade Observability",
    "question": "219. How does setting the environment variable GOMEMLIMIT prevent Prometheus StatefulSets from getting OOMKilled under traffic surges?",
    "options": "WyJJdCBmb3JjZXMgdGhlIEdvIGdhcmJhZ2UgY29sbGVjdG9yIHRvIHJ1biBhZ2dyZXNzaXZlbHkgYmVmb3JlIHRoZSBMaW51eCBrZXJuZWwgT09NLWtpbGxlciB0ZXJtaW5hdGVzIHRoZSBjb250YWluZXIiLCJJdCBjb21wcmVzc2VzIFRTREIgYmxvY2tzIGRpcmVjdGx5IG9udG8gUzMgb2JqZWN0IHN0b3JhZ2UiLCJJdCBlbmNyeXB0cyBtZXRyaWMgcGF5bG9hZHMgdXNpbmcgQUVTLTI1NiBpbiBtZW1vcnkiLCJJdCBsaW1pdHMgdGhlIG1heGltdW0gbnVtYmVyIG9mIFByb21RTCBxdWVyaWVzIGFsbG93ZWQgcGVyIG1pbnV0ZSJd",
    "answer": "MA=="
  },
  {
    "subject": "prometheus-observability",
    "subjectLabel": "🧘 The Zen of Prometheus: Production-Grade Observability",
    "question": "220. Which parameter must be paired with time-based retention to prevent Prometheus from filling up local Persistent Volumes?",
    "options": "WyItLXN0b3JhZ2UudHNkYi53YWwtY29tcHJlc3Npb249ZmFsc2UiLCItLXN0b3JhZ2UudHNkYi5yZXRlbnRpb24uc2l6ZT04MEdCIiwiLS13ZWIuZW5hYmxlLWxpZmVjeWNsZSIsIi0tc3RvcmFnZS50c2RiLm1pbi1ibG9jay1kdXJhdGlvbj0yNGgiXQ==",
    "answer": "MQ=="
  },
  {
    "subject": "prometheus-observability",
    "subjectLabel": "🧘 The Zen of Prometheus: Production-Grade Observability",
    "question": "221. How does the Thanos Sidecar pattern provide long-term metric retention without exhausting local pod storage?",
    "options": "WyJUaGFub3MgcmVwbGFjZXMgUHJvbWV0aGV1cyBlbnRpcmVseSBzbyBubyBsb2NhbCBzY3JhcGluZyBpcyBuZWVkZWQiLCJUaGFub3Mgc3RvcmVzIGFsbCByZWFsLXRpbWUgbWV0cmljcyBpbiBhbiB1bmNvbXByZXNzZWQgUG9zdGdyZVNRTCBkYXRhYmFzZSIsIlRoYW5vcyByZXF1aXJlcyBhbGwgYXBwbGljYXRpb24gbWljcm9zZXJ2aWNlcyB0byByZS1pbnN0cnVtZW50IGNvZGUgd2l0aCBUaGFub3MgU0RLcyIsIlRoYW5vcyBTaWRlY2FyIG9mZmxvYWRzIGNvbXBsZXRlZCAyLWhvdXIgVFNEQiBibG9ja3MgdG8gY2xvdWQgb2JqZWN0IHN0b3JhZ2Ugd2hpbGUgVGhhbm9zIFF1ZXJpZXIgcHJvdmlkZXMgYSB1bmlmaWVkIFByb21RTCBlbmRwb2ludCJd",
    "answer": "Mw=="
  },
  {
    "subject": "prometheus-observability",
    "subjectLabel": "🧘 The Zen of Prometheus: Production-Grade Observability",
    "question": "222. What is the relationship between an SLI, an SLO, and an Error Budget?",
    "options": "WyJTTEkgaXMgdGhlIGN1cnJlbnQgbWVhc3VyZW1lbnQsIFNMTyBpcyB0aGUgdGFyZ2V0IGdvYWwsIGFuZCBFcnJvciBCdWRnZXQgaXMgdGhlIGFsbG93YWJsZSBmYWlsdXJlIG1hcmdpbiAoMTAwJSAtIFNMTykiLCJTTEkgaXMgdGhlIGFsZXJ0IGNoYW5uZWwsIFNMTyBpcyB0aGUgZGF0YWJhc2UgZW5naW5lLCBhbmQgRXJyb3IgQnVkZ2V0IGlzIHRoZSBzZXJ2ZXIgY29zdCIsIlNMSSBpcyBmb3IgbG9ncywgU0xPIGlzIGZvciB0cmFjZXMsIGFuZCBFcnJvciBCdWRnZXQgaXMgZm9yIENQVSBtZXRyaWNzIiwiU0xJLCBTTE8sIGFuZCBFcnJvciBCdWRnZXQgYXJlIGlkZW50aWNhbCB0ZXJtcyBmb3IgR3JhZmFuYSBkYXNoYm9hcmRzIl0=",
    "answer": "MA=="
  },
  {
    "subject": "prometheus-observability",
    "subjectLabel": "🧘 The Zen of Prometheus: Production-Grade Observability",
    "question": "223. Why do production multi-window burn-rate alerts require BOTH a short window (5m) and long window (1h) evaluation?",
    "options": "WyJCZWNhdXNlIHNob3J0IHdpbmRvd3MgcmVxdWlyZSBtb3JlIFJBTSB0aGFuIGxvbmcgd2luZG93cyIsIkJlY2F1c2Ugc2luZ2xlLXdpbmRvdyBhbGVydHMgYXV0b21hdGljYWxseSBkZWxldGUgVFNEQiBibG9ja3MiLCJUaGUgc2hvcnQgd2luZG93IGVuc3VyZXMgdGhlIGVtZXJnZW5jeSBpcyBhY3RpdmUgbm93LCB3aGlsZSB0aGUgbG9uZyB3aW5kb3cgdmVyaWZpZXMgdGhlIGJ1ZGdldCBidXJuIGlzIHN1c3RhaW5lZCwgcHJldmVudGluZyBmYWxzZSBhbGVydHMgZnJvbSBzaG9ydCBibGlwcyIsIkJlY2F1c2UgQWxlcnRtYW5hZ2VyIG9ubHkgYWNjZXB0cyBydWxlcyB0aGF0IGNvbnRhaW4gYXQgbGVhc3QgdGhyZWUgdGltZSBkdXJhdGlvbnMiXQ==",
    "answer": "Mg=="
  },
  {
    "subject": "prometheus-observability",
    "subjectLabel": "🧘 The Zen of Prometheus: Production-Grade Observability",
    "question": "224. What is the correct order of the Monk's 4-Step Incident Triage Sequence when an SLO burn-rate alert fires?",
    "options": "WyJSZWJvb3QgdGhlIEt1YmVybmV0ZXMgY2x1c3RlciAtPiBEZWxldGUgVFNEQiBkYXRhIC0+IFJld3JpdGUgUHJvbVFMIHF1ZXJpZXMgLT4gTm90aWZ5IGxlYWRlcnNoaXAiLCJEZXRlY3QgKGJ1ZGdldCBidXJuIGFsZXJ0KSAtPiBJc29sYXRlIChjaGVjayBzY3JhcGUgaGVhbHRoICYgdXAgPT0gMCkgLT4gSW5zcGVjdCAocmVzb3VyY2VzICYgbGVha3MpIC0+IE1pdGlnYXRlIChyb2xsYmFjayBvciBzY2FsZSkiLCJJZ25vcmUgYWxlcnQgLT4gV2FpdCA0IGhvdXJzIC0+IFNjYWxlIGRhdGFiYXNlIHRvIG1heGltdW0gc2l6ZSAtPiBDbGVhciBsb2dzIiwiRGVwbG95IG5ldyBjb2RlIC0+IEluY3JlYXNlIHNjcmFwZSBpbnRlcnZhbCB0byAxIGhvdXIgLT4gRGlzYWJsZSBBbGVydG1hbmFnZXIgLT4gQ2hlY2sgU2xhY2siXQ==",
    "answer": "MQ=="
  },
  {
    "subject": "prometheus-observability",
    "subjectLabel": "🧘 The Zen of Prometheus: Production-Grade Observability",
    "question": "225. What is the Monk philosophy of the 'Middle Way' when applied to DevSecOps monitoring?",
    "options": "WyJEZW1hbmRpbmcgMTAwJSBwZXJmZWN0aW9uIGFuZCB6ZXJvIGRvd250aW1lIG9uIGV2ZXJ5IGNvbXBvbmVudCIsIlR1cm5pbmcgb2ZmIGFsbCBhbGVydHMgYW5kIHJlbHlpbmcgc3RyaWN0bHkgb24gZGFpbHkgbWFudWFsIGNoZWNrcyIsIlNldHRpbmcgQ1BVIHRocmVzaG9sZCBhbGVydHMgYXQgNTAlIGFjcm9zcyBhbGwgc3RhZ2luZyBhbmQgcHJvZHVjdGlvbiBwb2RzIiwiQWNjZXB0aW5nIHRoYXQgc3lzdGVtcyBzd2F5LCBkZWZpbmluZyBhIGNhbGN1bGF0ZWQgRXJyb3IgQnVkZ2V0LCBhbmQgYWxlcnRpbmcgb25seSB3aGVuIGJ1ZGdldCBjb25zdW1wdGlvbiB0aHJlYXRlbnMgY3VzdG9tZXIgZXhwZXJpZW5jZSJd",
    "answer": "Mw=="
  },
  {
    "subject": "grafana-observability",
    "subjectLabel": "🧘 Grafana Observability (Zen & Production-Grade)",
    "question": "226. According to the Monk's theme, what defines 'Sattvic Observability' in a modern DevSecOps pipeline?",
    "options": "WyJTdG9yaW5nIGFsbCB0ZWxlbWV0cnkgaW4gbG9jYWwgdGV4dCBmaWxlcyB3aXRob3V0IGluZGV4aW5nIiwiQ29uc29saWRhdGluZyBtZXRyaWNzLCBsb2dzLCBhbmQgdHJhY2VzIGludG8gYSBzaW5nbGUgcGFuZSBvZiBnbGFzcyB3aXRob3V0IGNvZ25pdGl2ZSBibG9hdCIsIkRlcGxveWluZyAyMCBzZXBhcmF0ZSBtb25pdG9yaW5nIHRhYnMgZm9yIGV2ZXJ5IG1pY3Jvc2VydmljZSIsIkFsZXJ0aW5nIGVuZ2luZWVycyBvbiBldmVyeSB0cmFuc2llbnQgQ1BVIHNwaWtlIl0=",
    "answer": "MQ=="
  },
  {
    "subject": "grafana-observability",
    "subjectLabel": "🧘 Grafana Observability (Zen & Production-Grade)",
    "question": "227. Which of the 'Three Eyes of the Monk' is represented by Grafana Tempo and OpenTelemetry?",
    "options": "WyJUcmFjZXMgKFRoZSBGb290cHJpbnRzKSIsIk1ldHJpY3MgKFRoZSBQdWxzZSkiLCJMb2dzIChUaGUgSm91cm5hbCkiLCJBdWRpdHMgKFRoZSBMZWRnZXIpIl0=",
    "answer": "MA=="
  },
  {
    "subject": "grafana-observability",
    "subjectLabel": "🧘 Grafana Observability (Zen & Production-Grade)",
    "question": "228. Why is embedded SQLite strictly prohibited for production Grafana deployments?",
    "options": "WyJTUUxpdGUgcmVxdWlyZXMgYW4gZXhwZW5zaXZlIGNvbW1lcmNpYWwgbGljZW5zZSBmb3IgbXVsdGktdXNlciBhY2Nlc3MiLCJTUUxpdGUgY2Fubm90IHBhcnNlIEpTT04gbG9nIGxpbmVzIGZyb20gTG9raSIsIlNRTGl0ZSBsb2NrcyB0aGUgZW50aXJlIGRhdGFiYXNlIGZpbGUgZHVyaW5nIHdyaXRlcywgcHJldmVudGluZyBIaWdoIEF2YWlsYWJpbGl0eSBhbmQgY2F1c2luZyB3cml0ZSBib3R0bGVuZWNrcyIsIlNRTGl0ZSBkb2VzIG5vdCBzdXBwb3J0IGN1c3RvbSBkYXNoYm9hcmQgdGhlbWVzIl0=",
    "answer": "Mg=="
  },
  {
    "subject": "grafana-observability",
    "subjectLabel": "🧘 Grafana Observability (Zen & Production-Grade)",
    "question": "229. Which setting in 'grafana.ini' enforces strict, verified TLS encryption for backend PostgreSQL connections?",
    "options": "WyJzc2xfbW9kZSA9IGRpc2FibGUiLCJzc2xfbW9kZSA9IGFsbG93Iiwic3NsX21vZGUgPSBwcmVmZXIiLCJzc2xfbW9kZSA9IHZlcmlmeS1mdWxsIl0=",
    "answer": "Mw=="
  },
  {
    "subject": "grafana-observability",
    "subjectLabel": "🧘 Grafana Observability (Zen & Production-Grade)",
    "question": "230. What is the core objective of the '5-Second Zen Rule' in dashboard creation?",
    "options": "WyJBbGxvdyBhbiBlbmdpbmVlciB0byBkZXRlcm1pbmUgc3lzdGVtIGhlYWx0aCBhbmQgZmFpbGluZyBtaWNyb3NlcnZpY2VzIHdpdGhpbiA1IHNlY29uZHMgZHVyaW5nIGFuIG91dGFnZSIsIkVuc3VyZSBkYXNoYm9hcmRzIHJlbmRlciBpbiB1bmRlciA1IG1pbGxpc2Vjb25kcyBvbiBtb2JpbGUgZGV2aWNlcyIsIkF1dG9tYXRpY2FsbHkgcmVmcmVzaCBQcm9tZXRoZXVzIHF1ZXJpZXMgZXZlcnkgNSBzZWNvbmRzIHdpdGhvdXQgc2VydmVyIGNhY2hpbmciLCJMaW1pdCB0aGUgbWF4aW11bSBudW1iZXIgb2YgZGFzaGJvYXJkIHZhcmlhYmxlcyB0byBleGFjdGx5IDUiXQ==",
    "answer": "MA=="
  },
  {
    "subject": "grafana-observability",
    "subjectLabel": "🧘 Grafana Observability (Zen & Production-Grade)",
    "question": "231. Which three panels form the RED Method mandala for monitoring user-facing microservices?",
    "options": "WyJSZXNvdXJjZXMsIEV4ZWN1dGlvbiwgYW5kIERlcGxveW1lbnQiLCJSZWFkLCBFZGl0LCBhbmQgRGVsZXRlIiwiTGF0ZW5jeSwgU2F0dXJhdGlvbiwgYW5kIFRyYWZmaWMiLCJSYXRlLCBFcnJvcnMsIGFuZCBEdXJhdGlvbiJd",
    "answer": "Mw=="
  },
  {
    "subject": "grafana-observability",
    "subjectLabel": "🧘 Grafana Observability (Zen & Production-Grade)",
    "question": "232. What does the PromQL query 'rate(http_requests_total[5m])' measure?",
    "options": "WyJUaGUgdG90YWwgY291bnQgb2YgSFRUUCByZXF1ZXN0cyByZWNvcmRlZCBvdmVyIHRoZSBsYXN0IDUgbWludXRlcyIsIlRoZSBwZXItc2Vjb25kIGF2ZXJhZ2UgcmF0ZSBvZiBIVFRQIHJlcXVlc3QgZ3Jvd3RoIG92ZXIgYSA1LW1pbnV0ZSB3aW5kb3ciLCJUaGUgcGVyY2VudGFnZSBvZiBIVFRQIHJlcXVlc3RzIHRoYXQgcmV0dXJuZWQgYSA1MDAgc3RhdHVzIGNvZGUiLCJUaGUgbWF4aW11bSBwZWFrIGxhdGVuY3kgZXhwZXJpZW5jZWQgaW4gdGhlIGxhc3QgNSBtaW51dGVzIl0=",
    "answer": "MQ=="
  },
  {
    "subject": "grafana-observability",
    "subjectLabel": "🧘 Grafana Observability (Zen & Production-Grade)",
    "question": "233. How does LogQL extract structured key-value attributes from raw JSON log lines?",
    "options": "WyJVc2luZyB0aGUgJ3wgcGFyc2UteG1sJyBwaXBlbGluZSBzdGFnZSIsIlVzaW5nIHRoZSAnfCByZWdleC1tYXRjaCcga2V5d29yZCIsIlVzaW5nIHRoZSAnfCBqc29uJyBwaXBlbGluZSBzdGFnZSIsIlVzaW5nIHRoZSAnU0VMRUNUIGpzb25fZXh0cmFjdCgpJyBTUUwgc3RhdGVtZW50Il0=",
    "answer": "Mg=="
  },
  {
    "subject": "grafana-observability",
    "subjectLabel": "🧘 Grafana Observability (Zen & Production-Grade)",
    "question": "234. In accordance with 'Temple Bell' alerting principles, which metric should trigger an immediate On-Call notification?",
    "options": "WyJBIGJyaWVmIDEwLXNlY29uZCBDUFUgdXRpbGl6YXRpb24gc3Bpa2UgcmVhY2hpbmcgODUlIGR1cmluZyBiYXRjaCBqb2JzIiwiQSBzaW5nbGUgYmFja2dyb3VuZCB3b3JrZXIgcG9kIHJlc3RhcnRpbmcgaW4gYSBzdGFnaW5nIGNsdXN0ZXIiLCJNZW1vcnkgdXNhZ2UgcmVhY2hpbmcgNTAlIG9uIGFuIGlkbGUgd29ya2VyIG5vZGUiLCJVc2VyLWZhY2luZyBIVFRQIDV4eCBlcnJvciByYXRlcyBleGNlZWRpbmcgNSUgZm9yIG1vcmUgdGhhbiAyIGNvbnNlY3V0aXZlIG1pbnV0ZXMiXQ==",
    "answer": "Mw=="
  },
  {
    "subject": "grafana-observability",
    "subjectLabel": "🧘 Grafana Observability (Zen & Production-Grade)",
    "question": "235. What function in PromQL calculates the 99th percentile response duration from histogram buckets?",
    "options": "WyJoaXN0b2dyYW1fcXVhbnRpbGUoMC45OSwgLi4uKSIsImF2Z19vdmVyX3RpbWUoLi4uKSIsInRvcGsoMC45OSwgLi4uKSIsImNvdW50X3NjYWxhcl9wZXJjZW50aWxlKC4uLikiXQ==",
    "answer": "MA=="
  },
  {
    "subject": "grafana-observability",
    "subjectLabel": "🧘 Grafana Observability (Zen & Production-Grade)",
    "question": "236. What is the correct PromQL formula to calculate active non-idle CPU usage percentage on a host server?",
    "options": "WyJyYXRlKG5vZGVfY3B1X3NlY29uZHNfdG90YWx7bW9kZT1cImlkbGVcIn1bMW1dKSAqIDEwMCIsIjEwMCAtIChhdmcgYnkgKGluc3RhbmNlKSAocmF0ZShub2RlX2NwdV9zZWNvbmRzX3RvdGFse21vZGU9XCJpZGxlXCJ9WzFtXSkpICogMTAwKSIsInN1bShub2RlX2NwdV9zZWNvbmRzX3RvdGFsKSAvIDEwMCIsIm1heChub2RlX2NwdV9zZWNvbmRzX3RvdGFse21vZGU9XCJhY3RpdmVcIn0pIl0=",
    "answer": "MQ=="
  },
  {
    "subject": "grafana-observability",
    "subjectLabel": "🧘 Grafana Observability (Zen & Production-Grade)",
    "question": "237. Which Grafana variable query function auto-populates dropdown options using Prometheus metric labels?",
    "options": "WyJsYWJlbF92YWx1ZXMobWV0cmljX25hbWUsIGxhYmVsX2tleSkiLCJmZXRjaF9sYWJlbHMobWV0cmljX25hbWUpIiwic2VsZWN0X2Rpc3RpbmN0X2xhYmVscygpIiwicXVlcnlfcHJvbWV0aGV1c190YWdzKCkiXQ==",
    "answer": "MA=="
  },
  {
    "subject": "grafana-observability",
    "subjectLabel": "🧘 Grafana Observability (Zen & Production-Grade)",
    "question": "238. What is a 'chained variable' in Grafana dashboard design?",
    "options": "WyJBIHZhcmlhYmxlIGVuY3J5cHRlZCB1c2luZyBhIGJsb2NrY2hhaW4ga2V5IiwiQSB2YXJpYWJsZSB0aGF0IGxpbmtzIHR3byBzZXBhcmF0ZSBwaHlzaWNhbCBkYXNoYm9hcmRzIHRvZ2V0aGVyIiwiQSB2YXJpYWJsZSB3aG9zZSBkcm9wZG93biBvcHRpb25zIGFyZSBmaWx0ZXJlZCBkeW5hbWljYWxseSBiYXNlZCBvbiB0aGUgc2VsZWN0aW9uIG1hZGUgaW4gYSBwcmVjZWRpbmcgdmFyaWFibGUiLCJBIHN0YXRpYyB2YXJpYWJsZSB0aGF0IGNhbm5vdCBiZSBjaGFuZ2VkIGJ5IHJlYWQtb25seSB2aWV3ZXJzIl0=",
    "answer": "Mg=="
  },
  {
    "subject": "grafana-observability",
    "subjectLabel": "🧘 Grafana Observability (Zen & Production-Grade)",
    "question": "239. In a stateless multi-node Grafana cluster, how are active user login sessions preserved across pod restarts?",
    "options": "WyJTZXNzaW9uIGRhdGEgaXMgc3RvcmVkIGluIGJyb3dzZXIgY29va2llcyBvbmx5IiwiU2Vzc2lvbiBmaWxlcyBhcmUgc2F2ZWQgdG8gbG9jYWwgZXBoZW1lcmFsIGRpc2sgc3RvcmFnZSBvbiBlYWNoIG5vZGUiLCJTZXNzaW9ucyBhcmUgc3RvcmVkIGluIGEgbG9jYWwgU1FMaXRlIGZpbGUgbWlycm9yZWQgdmlhIEdpdCIsIlNlc3Npb24gc3RhdGUgaXMgb2ZmbG9hZGVkIHRvIGEgc2hhcmVkIFJlZGlzIGNsdXN0ZXIgY29uZmlndXJlZCBpbiBncmFmYW5hLmluaSJd",
    "answer": "Mw=="
  },
  {
    "subject": "grafana-observability",
    "subjectLabel": "🧘 Grafana Observability (Zen & Production-Grade)",
    "question": "240. What is the primary risk of creating dashboards and data sources through manual UI clicks ('ClickOps')?",
    "options": "WyJDbGlja09wcyBzbG93cyBkb3duIHNlcnZlciBDUFUgcHJvY2Vzc2luZyBzcGVlZCIsIkNsaWNrT3BzIGRhc2hib2FyZCBkZWZpbml0aW9ucyBhcmUgdW52ZXJzaW9uZWQsIHByb25lIHRvIGNvbmZpZ3VyYXRpb24gZHJpZnQsIGFuZCBkaWZmaWN1bHQgdG8gYXVkaXQgb3IgcmVzdG9yZSBhdXRvbWF0aWNhbGx5IiwiQ2xpY2tPcHMgcHJldmVudHMgdXNlcnMgZnJvbSBzd2l0Y2hpbmcgYmV0d2VlbiBsaWdodCBhbmQgZGFyayB0aGVtZXMiLCJDbGlja09wcyBhdXRvbWF0aWNhbGx5IGRlbGV0ZXMgb2xkIFByb21ldGhldXMgbWV0cmljIGhpc3RvcnkiXQ==",
    "answer": "MQ=="
  },
  {
    "subject": "grafana-observability",
    "subjectLabel": "🧘 Grafana Observability (Zen & Production-Grade)",
    "question": "241. How does Grafana integrate with Keycloak OIDC without storing local passwords?",
    "options": "WyJCeSBwYXNzaW5nIEtleWNsb2FrIHRva2VucyBhbmQgbWFwcGluZyBncm91cCBjbGFpbXMgKCdyb2xlc1sqXScpIGRpcmVjdGx5IHRvIEdyYWZhbmEgUkJBQyByb2xlcyIsIkJ5IGV4cG9ydGluZyBLZXljbG9hayBwYXNzd29yZHMgdG8gYW4gdW5lbmNyeXB0ZWQgQ1NWIGZpbGUiLCJCeSByZXF1aXJpbmcgdXNlcnMgdG8gZW50ZXIgYm90aCBLZXljbG9hayBhbmQgbG9jYWwgR3JhZmFuYSBwYXNzd29yZHMgZXZlcnkgbG9naW4iLCJCeSBkaXNhYmxpbmcgYXV0aGVudGljYXRpb24gY29tcGxldGVseSBhbmQgcmVseWluZyBvbiBJUCB3aGl0ZWxpc3RpbmciXQ==",
    "answer": "MA=="
  },
  {
    "subject": "grafana-observability",
    "subjectLabel": "🧘 Grafana Observability (Zen & Production-Grade)",
    "question": "242. How should database passwords and API tokens be passed into Grafana provisioning manifests safely?",
    "options": "WyJIYXJkY29kaW5nIHBsYWluLXRleHQgY3JlZGVudGlhbHMgaW4gR2l0LWNvbW1pdHRlZCBZQU1MIGZpbGVzIiwiRW5jb2RpbmcgY3JlZGVudGlhbHMgaW4gQmFzZTY0IGFuZCBzdG9yaW5nIHRoZW0gaW4gcHVibGljIEdpdEh1YiByZXBvc2l0b3JpZXMiLCJJbmplY3Rpbmcgc2VjcmV0cyBhdCBjb250YWluZXIgcnVudGltZSB2aWEgSGFzaGlDb3JwIFZhdWx0IGVudmlyb25tZW50IHZhcmlhYmxlcyIsIlByaW50aW5nIGNyZWRlbnRpYWxzIGRpcmVjdGx5IGludG8gY29udGFpbmVyIHN0ZG91dCBsb2dzIl0=",
    "answer": "Mg=="
  },
  {
    "subject": "grafana-observability",
    "subjectLabel": "🧘 Grafana Observability (Zen & Production-Grade)",
    "question": "243. How do Loki 'derived fields' assist FinTech engineers during payment failure investigations?",
    "options": "WyJCeSBjb252ZXJ0aW5nIGxvZyBmaWxlcyBpbnRvIE1QMyBhdWRpbyBhbGVydHMiLCJCeSBhdXRvbWF0aWNhbGx5IHJlZnVuZGluZyBmYWlsZWQgY3JlZGl0IGNhcmQgcGF5bWVudHMiLCJCeSBlbmNyeXB0aW5nIGxvZyBmaWxlcyB3aXRoIFNIQS0yNTYgYmVmb3JlIHN0b3JhZ2UiLCJCeSBleHRyYWN0aW5nIHRoZSAndHJhY2VfaWQnIGZyb20gSlNPTiBsb2cgbGluZXMgYW5kIGdlbmVyYXRpbmcgYSBkaXJlY3QgY2xpY2thYmxlIGxpbmsgdG8gVGVtcG8gZGlzdHJpYnV0ZWQgdHJhY2VzIl0=",
    "answer": "Mw=="
  },
  {
    "subject": "grafana-observability",
    "subjectLabel": "🧘 Grafana Observability (Zen & Production-Grade)",
    "question": "244. Where should Social Security Numbers and patient health data be scrubbed to guarantee HIPAA compliance?",
    "options": "WyJBdCB0aGUgUHJvbXRhaWwgbG9nIGluZ2VzdGlvbiBwaXBlbGluZSBzdGFnZSBiZWZvcmUgc2VuZGluZyBsb2dzIHRvIExva2kiLCJJbnNpZGUgdGhlIHVzZXIncyB3ZWIgYnJvd3NlciBhZnRlciByZW5kZXJpbmcgdGhlIGRhc2hib2FyZCIsIkluc2lkZSB0aGUgUG9zdGdyZVNRTCBiYWNrZW5kIGRhdGFiYXNlIGV2ZXJ5IDI0IGhvdXJzIiwiSW4gdGhlIFNsYWNrIG5vdGlmaWNhdGlvbiBwYXlsb2FkIGFmdGVyIGFuIGFsZXJ0IGZpcmVzIl0=",
    "answer": "MA=="
  },
  {
    "subject": "grafana-observability",
    "subjectLabel": "🧘 Grafana Observability (Zen & Production-Grade)",
    "question": "245. How do you prevent a Grafana dashboard graph from becoming unreadable when a pod fleet scales from 5 to 50 instances?",
    "options": "WyJEZWxldGUgdGhlIHBhbmVsIHdoZW5ldmVyIHBvZCBjb3VudCBleGNlZWRzIDEwIiwiTWFudWFsbHkgY3JlYXRlIDUwIHNlcGFyYXRlIHBhbmVscyBmb3IgZXZlcnkgbmV3IHBvZCIsIlBsb3QgYWdncmVnYXRlZCBzdGF0aXN0aWNhbCBtZXRyaWNzICgnYXZnJywgJ3F1YW50aWxlJywgJ21heCcpIGFjcm9zcyB0aGUgcG9kIGZsZWV0IGluc3RlYWQgb2YgaW5kaXZpZHVhbCBwb2QgbGluZXMiLCJEaXNhYmxlIFByb21ldGhldXMgc2NyYXBpbmcgZHVyaW5nIGhpZ2gtdHJhZmZpYyBldmVudHMiXQ==",
    "answer": "Mg=="
  },
  {
    "subject": "alert-manager",
    "subjectLabel": "🧘 The Zen of Alerting: Prometheus Alertmanager",
    "question": "246. What is the primary operational risk of allowing Prometheus Alertmanager to forward raw, unfiltered metric alerts directly to on-call channels?",
    "options": "WyJQcm9tZXRoZXVzIHdpbGwgaW1tZWRpYXRlbHkgc3RvcCBzY3JhcGluZyBtZXRyaWNzIHRvIHByZXZlbnQgbWVtb3J5IG92ZXJmbG93IiwiT24tY2FsbCBlbmdpbmVlcnMgZGV2ZWxvcCBzZXZlcmUgYWxlcnQgZmF0aWd1ZSBmcm9tIG5vbi1hY3Rpb25hYmxlIG5vaXNlLCBsZWFkaW5nIHRoZW0gdG8gaWdub3JlIHJlYWwgcHJvZHVjdGlvbiBvdXRhZ2VzIiwiQWxlcnRtYW5hZ2VyIHBlcm1hbmVudGx5IGRlbGV0ZXMgdW4tcm91dGVkIGFsZXJ0IHJ1bGVzIGZyb20gbG9jYWwgc3RvcmFnZSIsIldlYmhvb2sgcmVjZWl2ZXJzIGF1dG9tYXRpY2FsbHkgcmV2b2tlIEFQSSBjcmVkZW50aWFscyBkdWUgdG8gcGF5bG9hZCBjb25nZXN0aW9uIl0=",
    "answer": "MQ=="
  },
  {
    "subject": "alert-manager",
    "subjectLabel": "🧘 The Zen of Alerting: Prometheus Alertmanager",
    "question": "247. What is the fundamental architectural split between Prometheus and Alertmanager?",
    "options": "WyJQcm9tZXRoZXVzIGFjdHMgYXMgdGhlIFdhdGNobWFuIChldmFsdWF0aW5nIHJ1bGVzIHNpbGVudGx5KSwgd2hpbGUgQWxlcnRtYW5hZ2VyIGFjdHMgYXMgdGhlIFdpc2UgTWVzc2VuZ2VyIChkZWR1cGxpY2F0aW5nLCBncm91cGluZywgYW5kIHJvdXRpbmcgbm90aWZpY2F0aW9ucykiLCJQcm9tZXRoZXVzIHJvdXRlcyBhbGVydHMgdG8gU2xhY2ssIHdoaWxlIEFsZXJ0bWFuYWdlciBzY3JhcGVzIGFwcGxpY2F0aW9uIG1ldHJpY3MiLCJQcm9tZXRoZXVzIGhhbmRsZXMgc2lsZW5jZXMsIHdoaWxlIEFsZXJ0bWFuYWdlciBzdG9yZXMgdGltZS1zZXJpZXMgZGF0YSBvbiBkaXNrIiwiUHJvbWV0aGV1cyBpcyBvbmx5IGZvciBub24tcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMsIHdoaWxlIEFsZXJ0bWFuYWdlciBpcyBmb3IgcHJvZHVjdGlvbiJd",
    "answer": "MA=="
  },
  {
    "subject": "alert-manager",
    "subjectLabel": "🧘 The Zen of Alerting: Prometheus Alertmanager",
    "question": "248. According to the Zen Golden Rules of Alerting, what should happen to an alert that wakes an engineer at 3 AM but requires no human action within 15 minutes?",
    "options": "WyJJbmNyZWFzZSBpdHMgc2V2ZXJpdHkgdG8gQ3JpdGljYWwgc28gaXQgcGFnZXMgdHdvIGVuZ2luZWVycyIsIkZvcndhcmQgaXQgdG8gdGhlIGV4ZWN1dGl2ZSB0ZWFtJ3MgZW1haWwgaW5ib3giLCJSZS1zZW5kIHRoZSBub3RpZmljYXRpb24gZXZlcnkgNjAgc2Vjb25kcyB1bnRpbCBhY2tub3dsZWRnZWQiLCJEZW1vdGUgaXQgdG8gYSBsb2cgZW50cnkgb3Igc3VtbWFyeSBkYXNoYm9hcmQgYmVjYXVzZSBub24tYWN0aW9uYWJsZSBwYWdlcyBicmVlZCBhbGVydCBmYXRpZ3VlIl0=",
    "answer": "Mw=="
  },
  {
    "subject": "alert-manager",
    "subjectLabel": "🧘 The Zen of Alerting: Prometheus Alertmanager",
    "question": "249. During a major network outage where 50 microservices fail simultaneously, how does Grouping preserve peace of mind?",
    "options": "WyJJdCBkcm9wcyA0OSBvZiB0aGUgYWxlcnRzIHBlcm1hbmVudGx5IGZyb20gc3lzdGVtIGxvZ3MiLCJJdCBkZWxheXMgYWxlcnQgZXZhbHVhdGlvbiBpbiBQcm9tZXRoZXVzIGZvciAyIGhvdXJzIiwiSXQgYWdncmVnYXRlcyByZWxhdGVkIGFsZXJ0cyBzaGFyaW5nIGNvbW1vbiBsYWJlbHMgaW50byBhIHNpbmdsZSB1bmlmaWVkIHN1bW1hcnkgbm90aWZpY2F0aW9uIGR1cmluZyB0aGUgZ3JvdXBfd2FpdCB3aW5kb3ciLCJJdCBjb252ZXJ0cyBhbGwgY3JpdGljYWwgYWxlcnRzIGludG8gbG93LXByaW9yaXR5IGVtYWlsIHdhcm5pbmdzIl0=",
    "answer": "Mg=="
  },
  {
    "subject": "alert-manager",
    "subjectLabel": "🧘 The Zen of Alerting: Prometheus Alertmanager",
    "question": "250. Which Alertmanager timing parameter controls how long to wait before sending updates when NEW alerts join an ALREADY firing alert group?",
    "options": "WyJncm91cF93YWl0IiwiZ3JvdXBfaW50ZXJ2YWwiLCJyZXBlYXRfaW50ZXJ2YWwiLCJyZXNvbHZlX3RpbWVvdXQiXQ==",
    "answer": "MQ=="
  },
  {
    "subject": "alert-manager",
    "subjectLabel": "🧘 The Zen of Alerting: Prometheus Alertmanager",
    "question": "251. In FinTech, why is the 'equal: ['cluster']' parameter critical inside an Alertmanager inhibition rule?",
    "options": "WyJJdCBlbnN1cmVzIGRhdGFiYXNlIENQVSBhbGVydHMgYXJlIGRlbGV0ZWQgYWZ0ZXIgMjQgaG91cnMiLCJJdCBlbmNyeXB0cyBhbGVydCBwYXlsb2FkcyB1c2luZyBUTFMgYmVmb3JlIHNlbmRpbmcgdGhlbSB0byBQYWdlckR1dHkiLCJJdCBkdXBsaWNhdGVzIGFsbCBpbmhpYml0ZWQgYWxlcnRzIHRvIGEgYmFja3VwIFNsYWNrIGNoYW5uZWwiLCJJdCByZXN0cmljdHMgYWxlcnQgc3VwcHJlc3Npb24gc3RyaWN0bHkgd2l0aGluIHRoZSBzYW1lIGNsdXN0ZXIsIHByZXZlbnRpbmcgYSBmYWlsdXJlIGluIENsdXN0ZXIgQSBmcm9tIG11dGluZyBsZWdpdGltYXRlIGFsZXJ0cyBpbiBDbHVzdGVyIEIiXQ==",
    "answer": "Mw=="
  },
  {
    "subject": "alert-manager",
    "subjectLabel": "🧘 The Zen of Alerting: Prometheus Alertmanager",
    "question": "252. How does an Alertmanager Silence differ from deleting an alert rule in Prometheus during database maintenance?",
    "options": "WyJBIFNpbGVuY2Uga2VlcHMgbWV0cmljIGV2YWx1YXRpb24gYW5kIHJ1bGUgZmlyaW5nIGludGFjdCBpbiBQcm9tZXRoZXVzLCBidXQgdGVtcG9yYXJpbHkgc3VwcHJlc3NlcyBub3RpZmljYXRpb24gZGVsaXZlcnkgaW4gQWxlcnRtYW5hZ2VyIiwiQSBTaWxlbmNlIHN0b3BzIFByb21ldGhldXMgZnJvbSBzY3JhcGluZyBtZXRyaWNzIGVudGlyZWx5IiwiQSBTaWxlbmNlIGRlbGV0ZXMgaGlzdG9yaWMgbWV0cmljcyBmcm9tIHRoZSBUU0RCIiwiQSBTaWxlbmNlIGF1dG9tYXRpY2FsbHkgcmVzdGFydHMgdGhlIGRhdGFiYXNlIGFmdGVyIG1haW50ZW5hbmNlIGZpbmlzaGVzIl0=",
    "answer": "MA=="
  },
  {
    "subject": "alert-manager",
    "subjectLabel": "🧘 The Zen of Alerting: Prometheus Alertmanager",
    "question": "253. What is the operational effect of setting 'continue: true' on a child route in an Alertmanager routing tree?",
    "options": "WyJJdCBhdXRvbWF0aWNhbGx5IHJlc29sdmVzIHRoZSBhbGVydCBpZiBubyB0ZWFtIHJlc3BvbmRzIHdpdGhpbiAxMCBtaW51dGVzIiwiSXQgcmV0cmllcyBzZW5kaW5nIHRoZSBub3RpZmljYXRpb24gaW5kZWZpbml0ZWx5IHVudGlsIHRoZSBlbmRwb2ludCByZXR1cm5zIEhUVFAgMjAwIiwiSXQgZm9yY2VzIEFsZXJ0bWFuYWdlciB0byBub3RpZnkgdGhlIGN1cnJlbnQgcm91dGUncyByZWNlaXZlciBBTkQgY29udGludWUgZXZhbHVhdGluZyBzaWJsaW5nIHJvdXRlcyBmb3Igc2Vjb25kYXJ5IHJvdXRpbmciLCJJdCBieXBhc3NlcyBhbGwgaW5oaWJpdGlvbiBydWxlcyBmb3IgdGhhdCBzcGVjaWZpYyBhbGVydCJd",
    "answer": "Mg=="
  },
  {
    "subject": "alert-manager",
    "subjectLabel": "🧘 The Zen of Alerting: Prometheus Alertmanager",
    "question": "254. Which top-level configuration block in 'alertmanager.yml' is responsible for defining global HTTP client settings and default Slack webhook URLs?",
    "options": "WyJyZWNlaXZlcnMiLCJpbmhpYml0X3J1bGVzIiwidGVtcGxhdGVzIiwiZ2xvYmFsIl0=",
    "answer": "Mw=="
  },
  {
    "subject": "alert-manager",
    "subjectLabel": "🧘 The Zen of Alerting: Prometheus Alertmanager",
    "question": "255. What is the recommended production setting for 'repeat_interval' to avoid constantly spamming on-call channels with un-resolved alerts?",
    "options": "WyIzMCBzZWNvbmRzIHRvIDEgbWludXRlIiwiNCBob3VycyB0byAxMiBob3VycyIsIjUgbWludXRlcyB0byAxMCBtaW51dGVzIiwiNyBkYXlzIHRvIDE0IGRheXMiXQ==",
    "answer": "MQ=="
  },
  {
    "subject": "alert-manager",
    "subjectLabel": "🧘 The Zen of Alerting: Prometheus Alertmanager",
    "question": "256. Why should custom Go templates in Alertmanager dynamically include runbook URLs inside notification messages?",
    "options": "WyJUbyBnaXZlIG9uLWNhbGwgZW5naW5lZXJzIGRpcmVjdCAxLWNsaWNrIGFjY2VzcyB0byBFbWVyZ2VuY3kgT3BlcmF0aW5nIFByb2NlZHVyZXMgZHVyaW5nIGNyaXRpY2FsIG91dGFnZXMiLCJUbyBzYXRpc2Z5IFByb21ldGhldXMgVFNEQiBzdG9yYWdlIGZvcm1hdHRpbmcgcmVxdWlyZW1lbnRzIiwiVG8gcHJldmVudCBTbGFjayBmcm9tIHRydW5jYXRpbmcgbG9uZyBKU09OIGFsZXJ0IGJvZGllcyIsIlRvIGF1dG9tYXRpY2FsbHkgcmVzb2x2ZSB0aGUgYWxlcnQgd2hlbiBjbGlja2VkIGJ5IGFuIGVuZ2luZWVyIl0=",
    "answer": "MA=="
  },
  {
    "subject": "alert-manager",
    "subjectLabel": "🧘 The Zen of Alerting: Prometheus Alertmanager",
    "question": "257. Which CLI command allows a DevSecOps engineer to verify 'alertmanager.yml' syntax before deploying it to production?",
    "options": "WyJwcm9tZXRoZXVzIC0tY2hlY2stY29uZmlnIiwiZG9ja2VyIGluc3BlY3QgYWxlcnRtYW5hZ2VyIiwiYW10b29sIGNoZWNrLWNvbmZpZyAvZXRjL2FsZXJ0bWFuYWdlci9hbGVydG1hbmFnZXIueW1sIiwia3ViZWN0bCBhcHBseSAtLWRyeS1ydW49Y2xpZW50IC1mIGFsZXJ0bWFuYWdlci55bWwiXQ==",
    "answer": "Mg=="
  },
  {
    "subject": "alert-manager",
    "subjectLabel": "🧘 The Zen of Alerting: Prometheus Alertmanager",
    "question": "258. How can you test which receiver an alert with labels 'service=payment' and 'severity=critical' will reach without triggering a real notification?",
    "options": "WyJhbXRvb2wgY29uZmlnIHJvdXRlcyB0ZXN0IHNlcnZpY2U9cGF5bWVudCBzZXZlcml0eT1jcml0aWNhbCIsImFtdG9vbCBhbGVydCBhZGQgc2VydmljZT1wYXltZW50IHNldmVyaXR5PWNyaXRpY2FsIiwiY3VybCAtWCBQT1NUIGh0dHA6Ly9sb2NhbGhvc3Q6OTA5My9hcGkvdjEvYWxlcnRzIiwiYW10b29sIHNpbGVuY2UgcXVlcnkgc2VydmljZT1wYXltZW50Il0=",
    "answer": "MA=="
  },
  {
    "subject": "alert-manager",
    "subjectLabel": "🧘 The Zen of Alerting: Prometheus Alertmanager",
    "question": "259. Why is practicing in a local Docker Compose workshop ('the forge') considered a core DevSecOps best practice?",
    "options": "WyJCZWNhdXNlIGxvY2FsIERvY2tlciBjb250YWluZXJzIHJ1biAxMHggZmFzdGVyIHRoYW4gY2xvdWQgc2VydmVycyIsIkJlY2F1c2UgQWxlcnRtYW5hZ2VyIGNhbm5vdCBiZSBjb25maWd1cmVkIG9uIGNsb3VkIHZpcnR1YWwgbWFjaGluZXMiLCJCZWNhdXNlIGFtdG9vbCBvbmx5IHdvcmtzIGluc2lkZSBsb2NhbCBEb2NrZXIgbmV0d29ya3MiLCJCZWNhdXNlIHRlc3RpbmcgYWxlcnRpbmcgcGlwZWxpbmVzIHVuZGVyIHNpbXVsYXRlZCBmYXVsdCBpbmplY3Rpb24gYnVpbGRzIG11c2NsZSBtZW1vcnkgYW5kIGNhdGNoZXMgcm91dGluZyBidWdzIGJlZm9yZSByZWFsIHByb2R1Y3Rpb24gb3V0YWdlcyBvY2N1ciJd",
    "answer": "Mw=="
  },
  {
    "subject": "alert-manager",
    "subjectLabel": "🧘 The Zen of Alerting: Prometheus Alertmanager",
    "question": "260. In the 'Muted Bell' scenario, why did a junior engineer's inhibition rule silently drop ALL system alerts?",
    "options": "WyJUaGUgQWxlcnRtYW5hZ2VyIGJpbmFyeSBjcmFzaGVkIGR1ZSB0byBvdXQtb2YtbWVtb3J5IGVycm9yIiwiVGhlIHJ1bGUgbWF0Y2hlZCAnZW52aXJvbm1lbnQ6IGxhYicgd2l0aG91dCBzcGVjaWZpYyBhbGVydG5hbWUgb3Igc2V2ZXJpdHkgcmVzdHJpY3Rpb25zLCBjYXVzaW5nIHRoZSBmaXJzdCBhbGVydCB0byBpbmhpYml0IGV2ZXJ5dGhpbmciLCJQcm9tZXRoZXVzIHN0b3BwZWQgc2NyYXBpbmcgTm9kZSBFeHBvcnRlciIsIlRoZSB3ZWJob29rIHJlY2VpdmVyIHdhcyBjb25maWd1cmVkIHdpdGggYW4gaW52YWxpZCBJUCBhZGRyZXNzIl0=",
    "answer": "MQ=="
  },
  {
    "subject": "alert-manager",
    "subjectLabel": "🧘 The Zen of Alerting: Prometheus Alertmanager",
    "question": "261. When testing local CPU fault injection with Node Exporter, what sequence of states does a Prometheus alert pass through?",
    "options": "WyJGaXJpbmcgLT4gUGVuZGluZyAtPiBJbmFjdGl2ZSIsIlNpbGVuY2VkIC0+IEluaGliaXRlZCAtPiBGaXJpbmciLCJJbmFjdGl2ZSAtPiBQZW5kaW5nIC0+IEZpcmluZyAtPiBSZXNvbHZlZCIsIkRyYWZ0IC0+IFB1Ymxpc2hlZCAtPiBBcmNoaXZlZCJd",
    "answer": "Mg=="
  },
  {
    "subject": "alert-manager",
    "subjectLabel": "🧘 The Zen of Alerting: Prometheus Alertmanager",
    "question": "262. How should automated CI/CD backup pipelines manage database alerts during scheduled nightly maintenance?",
    "options": "WyJCeSBwcm9ncmFtbWF0aWNhbGx5IGNyZWF0aW5nIGEgdGltZS1ib3VuZCBTaWxlbmNlIHZpYSB0aGUgQWxlcnRtYW5hZ2VyIEFQSSBiZWZvcmUgYmFja3VwIGFuZCBleHBpcmluZyBpdCBwb3N0LWNvbXBsZXRpb24iLCJCeSBzaHV0dGluZyBkb3duIHRoZSBBbGVydG1hbmFnZXIgY29udGFpbmVyIGZvciAxNSBtaW51dGVzIiwiQnkgZGVsZXRpbmcgdGhlIGRhdGFiYXNlIGFsZXJ0IHJ1bGUgZmlsZSBmcm9tIHRoZSByZXBvc2l0b3J5IiwiQnkgbWFudWFsbHkgY2xpY2tpbmcgJ0Fja25vd2xlZGdlJyBpbiBQYWdlckR1dHkgZXZlcnkgbmlnaHQgYXQgMiBBTSJd",
    "answer": "MA=="
  },
  {
    "subject": "alert-manager",
    "subjectLabel": "🧘 The Zen of Alerting: Prometheus Alertmanager",
    "question": "263. According to Google SRE guidelines and Zen Alerting principles, which of the following represents the Four Golden Signals?",
    "options": "WyJDUFUsIFJBTSwgRGlzaywgTmV0d29yayIsIkxhdGVuY3ksIFRyYWZmaWMsIEVycm9ycywgYW5kIFNhdHVyYXRpb24iLCJCdWlsZCBUaW1lLCBUZXN0IENvdmVyYWdlLCBDb2RlIFNtZWxscywgYW5kIFZ1bG5lcmFiaWxpdGllcyIsIkdyb3VwaW5nLCBJbmhpYml0aW9uLCBTaWxlbmNpbmcsIGFuZCBSb3V0aW5nIl0=",
    "answer": "MQ=="
  },
  {
    "subject": "alert-manager",
    "subjectLabel": "🧘 The Zen of Alerting: Prometheus Alertmanager",
    "question": "264. What happens when Prometheus stops sending an alert payload to Alertmanager without an explicit end timestamp?",
    "options": "WyJUaGUgYWxlcnQgc3RheXMgaW4gRmlyaW5nIHN0YXRlIGluZGVmaW5pdGVseSIsIkFsZXJ0bWFuYWdlciBjb25zaWRlcnMgdGhlIGFsZXJ0IHJlc29sdmVkIGFmdGVyIHRoZSAncmVzb2x2ZV90aW1lb3V0JyB3aW5kb3cgKGRlZmF1bHQgNW0pIHBhc3NlcyIsIkFsZXJ0bWFuYWdlciBkZWxldGVzIHRoZSBhbGVydCBmcm9tIFRTREIgc3RvcmFnZSBpbW1lZGlhdGVseSIsIkFsZXJ0bWFuYWdlciBlc2NhbGF0ZXMgdGhlIGFsZXJ0IGRpcmVjdGx5IHRvIHRoZSBDVE8iXQ==",
    "answer": "MQ=="
  },
  {
    "subject": "alert-manager",
    "subjectLabel": "🧘 The Zen of Alerting: Prometheus Alertmanager",
    "question": "265. How do healthcare and fintech platforms ensure compliance when dispatching alerts to third-party receivers like Slack?",
    "options": "WyJCeSBkaXNhYmxpbmcgYWxsIGFsZXJ0cyBhY3Jvc3MgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMiLCJCeSBzZW5kaW5nIGFsZXJ0cyB2aWEgdW5lbmNyeXB0ZWQgU01TIHRleHQgbWVzc2FnZXMiLCJCeSB1c2luZyBjdXN0b20gR28gdGVtcGxhdGVzIHRvIHNhbml0aXplIGFuZCByZWRhY3Qgc2Vuc2l0aXZlIFBJSS9QSEkgbGFiZWxzIGJlZm9yZSBkaXNwYXRjaGluZyBwYXlsb2FkcyIsIkJ5IGhhcmRjb2RpbmcgcGF0aWVudCBwYXNzd29yZHMgZGlyZWN0bHkgaW50byB0aGUgYWxlcnQgc3VtbWFyeSJd",
    "answer": "Mg=="
  },
  {
    "subject": "argocd-mastery",
    "subjectLabel": "🧘‍♂️ ArgoCD GitOps & DevSecOps Mastery",
    "question": "266. Like a monk holding up a mirror to reflect reality, how does ArgoCD's pull-based continuous reconciliation loop handle manual 'kubectl edit' drift in a live cluster when 'selfHeal: true' is enabled?",
    "options": "WyJJdCBpZ25vcmVzIG1hbnVhbCBjaGFuZ2VzIHVudGlsIGEgaHVtYW4gb3BlcmF0b3IgZXhlY3V0ZXMgYSBDTEkgY29tbWFuZC4iLCJJdCBhbGVydHMgdGhlIHRlYW0gdmlhIGVtYWlsIGJ1dCBsZWF2ZXMgdGhlIG1hbnVhbCBjaGFuZ2UgaW50YWN0LiIsIkl0IGF1dG9tYXRpY2FsbHkgZGV0ZWN0cyB0aGUgZGlzY3JlcGFuY3kgYW5kIGluc3RhbnRseSByZXZlcnRzIHRoZSBsaXZlIGNsdXN0ZXIgc3RhdGUgYmFjayB0byB0aGUgR2l0IHRhcmdldCBzdGF0ZS4iLCJJdCBkZWxldGVzIHRoZSBlbnRpcmUgbmFtZXNwYWNlIHRvIHByZXZlbnQgc2VjdXJpdHkgYnJlYWNoZXMuIl0=",
    "answer": "Mg=="
  },
  {
    "subject": "argocd-mastery",
    "subjectLabel": "🧘‍♂️ ArgoCD GitOps & DevSecOps Mastery",
    "question": "267. Why does the pull-based GitOps model provide a stronger security posture than traditional push-based CI/CD pipelines?",
    "options": "WyJQdWxsLWJhc2VkIHRvb2xzIGVuY3J5cHQgYWxsIERvY2tlciBpbWFnZXMgYXV0b21hdGljYWxseSBiZWZvcmUgZGVwbG95bWVudC4iLCJBcmdvQ0QgcnVucyBpbnNpZGUgdGhlIHRhcmdldCBjbHVzdGVyLCBwdWxsaW5nIG1hbmlmZXN0cyBkaXJlY3RseSB3aXRob3V0IHJlcXVpcmluZyBleHRlcm5hbCBDSSBydW5uZXJzIHRvIHN0b3JlIHNlbnNpdGl2ZSBjbHVzdGVyLWFkbWluIGNyZWRlbnRpYWxzLiIsIlB1c2ggcGlwZWxpbmVzIGNhbiBvbmx5IGRlcGxveSBzaW5nbGUtY29udGFpbmVyIGFwcGxpY2F0aW9ucy4iLCJQdWxsIHBpcGVsaW5lcyBlbGltaW5hdGUgdGhlIG5lZWQgZm9yIEdpdCB2ZXJzaW9uIGNvbnRyb2wgZW50aXJlbHkuIl0=",
    "answer": "MQ=="
  },
  {
    "subject": "argocd-mastery",
    "subjectLabel": "🧘‍♂️ ArgoCD GitOps & DevSecOps Mastery",
    "question": "268. Which core ArgoCD microservice is responsible for cloning Git repositories, rendering Helm charts or Kustomize overlays, and generating hydrated YAML manifests?",
    "options": "WyJhcmdvY2Qtc2VydmVyIiwiYXJnb2NkLWFwcGxpY2F0aW9uLWNvbnRyb2xsZXIiLCJhcmdvY2QtcmVkaXMiLCJhcmdvY2QtcmVwby1zZXJ2ZXIiXQ==",
    "answer": "Mw=="
  },
  {
    "subject": "argocd-mastery",
    "subjectLabel": "🧘‍♂️ ArgoCD GitOps & DevSecOps Mastery",
    "question": "269. A FinTech team wants ArgoCD to automatically delete Kubernetes resources in the live cluster when their corresponding YAML files are removed from Git. Which sync policy setting enforces this clean discipline?",
    "options": "WyJwcnVuZTogdHJ1ZSIsIkNyZWF0ZU5hbWVzcGFjZT10cnVlIiwiU2VydmVyU2lkZUFwcGx5PXRydWUiLCJBcHBseU91dE9mU3luY09ubHk9dHJ1ZSJd",
    "answer": "MA=="
  },
  {
    "subject": "argocd-mastery",
    "subjectLabel": "🧘‍♂️ ArgoCD GitOps & DevSecOps Mastery",
    "question": "270. In the App-of-Apps architectural pattern, what is the primary role of the root parent Application?",
    "options": "WyJUbyBnZW5lcmF0ZSBUTFMgY2VydGlmaWNhdGVzIGZvciBhbGwgaW5ncmVzcyByb3V0ZXMgYWNyb3NzIHRoZSBjbHVzdGVyLiIsIlRvIHN0b3JlIGRhdGFiYXNlIHBhc3N3b3JkcyBpbiBwbGFpbi10ZXh0IGVudmlyb25tZW50IHZhcmlhYmxlcy4iLCJUbyBtb25pdG9yIGEgc2luZ2xlIEdpdCByZXBvc2l0b3J5IGRpcmVjdG9yeSBjb250YWluaW5nIG11bHRpcGxlIGNoaWxkIEFwcGxpY2F0aW9uIGN1c3RvbSByZXNvdXJjZXMsIGF1dG9tYXRpY2FsbHkgYm9vdHN0cmFwcGluZyB0aGUgZW50aXJlIGZsZWV0LiIsIlRvIGFjdCBhcyBhIHJldmVyc2UgcHJveHkgZm9yIHVzZXIgYXV0aGVudGljYXRpb24uIl0=",
    "answer": "Mg=="
  },
  {
    "subject": "argocd-mastery",
    "subjectLabel": "🧘‍♂️ ArgoCD GitOps & DevSecOps Mastery",
    "question": "271. When integrating enterprise Single Sign-On (SSO) with ArgoCD using OpenID Connect (OIDC), where are the client ID and issuer URL configured?",
    "options": "WyJJbnNpZGUgYXJnb2NkLXJiYWMtY20gQ29uZmlnTWFwIiwiSW5zaWRlIGFyZ29jZC1ub3RpZmljYXRpb25zLWNtIENvbmZpZ01hcCIsIkluc2lkZSB0aGUgS3ViZXJuZXRlcyBtYXN0ZXIgbm9kZSBrdWJlbGV0IGNvbmZpZ3VyYXRpb24iLCJJbnNpZGUgYXJnb2NkLWNtIENvbmZpZ01hcCJd",
    "answer": "Mw=="
  },
  {
    "subject": "argocd-mastery",
    "subjectLabel": "🧘‍♂️ ArgoCD GitOps & DevSecOps Mastery",
    "question": "272. In ArgoCD's Casbin RBAC policy engine (argocd-rbac-cm), what is the recommended zero-trust default policy setting for unassigned users?",
    "options": "WyJwb2xpY3kuZGVmYXVsdDogcm9sZTpyZWFkb25seSIsInBvbGljeS5kZWZhdWx0OiByb2xlOmFkbWluIiwicG9saWN5LmRlZmF1bHQ6IHJvbGU6ZGV2ZWxvcGVyIiwicG9saWN5LmRlZmF1bHQ6IHJvbGU6c3VwZXItdXNlciJd",
    "answer": "MA=="
  },
  {
    "subject": "argocd-mastery",
    "subjectLabel": "🧘‍♂️ ArgoCD GitOps & DevSecOps Mastery",
    "question": "273. How does Bitnami Sealed Secrets uphold zero-trust security when managing database credentials in public Git repositories?",
    "options": "WyJCeSB1cGxvYWRpbmcgcmF3IHNlY3JldHMgdG8gYSBwdWJsaWMgRlRQIHNlcnZlci4iLCJCeSBoaWRpbmcgcGFzc3dvcmRzIGluc2lkZSBiYXNlNjQgZW5jb2RlZCBzdHJpbmdzLiIsIkJ5IGVuY3J5cHRpbmcgc2VjcmV0cyBsb2NhbGx5IHdpdGggdGhlIGNsdXN0ZXIncyBwdWJsaWMga2V5IHNvIHRoYXQgb25seSB0aGUgaW4tY2x1c3RlciBjb250cm9sbGVyIGhvbGRpbmcgdGhlIHByaXZhdGUga2V5IGNhbiBkZWNyeXB0IHRoZW0uIiwiQnkgcmVxdWlyaW5nIGRldmVsb3BlcnMgdG8gdHlwZSByYXcgcGFzc3dvcmRzIGRpcmVjdGx5IGludG8gdGVybWluYWwgcHJvbXB0cy4iXQ==",
    "answer": "Mg=="
  },
  {
    "subject": "argocd-mastery",
    "subjectLabel": "🧘‍♂️ ArgoCD GitOps & DevSecOps Mastery",
    "question": "274. In the spirit of the tea master dropping a single droplet of hot tea to test its temperature, how does a Canary deployment using Argo Rollouts protect production workloads?",
    "options": "WyJJdCByZXBsYWNlcyAxMDAlIG9mIHByb2R1Y3Rpb24gcG9kcyBzaW11bHRhbmVvdXNseSBpbiBhIHNpbmdsZSByYXBpZCBzdXJnZS4iLCJJdCByZWRpcmVjdHMgYWxsIHByb2R1Y3Rpb24gdHJhZmZpYyB0byBhbiBvZmZsaW5lIHNhbmRib3ggY2x1c3Rlci4iLCJJdCBkZWxldGVzIHRoZSBkYXRhYmFzZSBzY2hlbWEgYmVmb3JlIGRlcGxveWluZyBuZXcgY29kZS4iLCJJdCByb3V0ZXMgYSBzbWFsbCBmcmFjdGlvbiBvZiBsaXZlIHVzZXIgdHJhZmZpYyAoZS5nLiwgNSUpIHRvIHRoZSBuZXcgY29udGFpbmVyIHZlcnNpb24gd2hpbGUgbW9uaXRvcmluZyB0ZWxlbWV0cnkgYmVmb3JlIHNjYWxpbmcgZnVydGhlci4iXQ==",
    "answer": "Mw=="
  },
  {
    "subject": "argocd-mastery",
    "subjectLabel": "🧘‍♂️ ArgoCD GitOps & DevSecOps Mastery",
    "question": "275. What key advantage does a Blue/Green rollout strategy provide over standard rolling updates during high-stakes releases?",
    "options": "WyJJdCBtYWludGFpbnMgYW4gaXNvbGF0ZWQgcHJldmlldyBlbnZpcm9ubWVudCBmb3Igc3ludGhldGljIHRlc3RpbmcgYmVmb3JlIGV4ZWN1dGluZyBhIHN1Yi1zZWNvbmQgdHJhZmZpYyBzd2l0Y2ggdG8gdGhlIG5ldyBhY3RpdmUgdmVyc2lvbi4iLCJJdCB1c2VzIDUwJSBsZXNzIENQVSBhbmQgbWVtb3J5IGR1cmluZyBkZXBsb3ltZW50LiIsIkl0IGJ5cGFzc2VzIGFsbCBLdWJlcm5ldGVzIFJCQUMgcGVybWlzc2lvbnMuIiwiSXQgZWxpbWluYXRlcyB0aGUgbmVlZCBmb3IgY29udGFpbmVyIGltYWdlIHJlZ2lzdHJpZXMuIl0=",
    "answer": "MA=="
  },
  {
    "subject": "argocd-mastery",
    "subjectLabel": "🧘‍♂️ ArgoCD GitOps & DevSecOps Mastery",
    "question": "276. How does an AnalysisTemplate in Argo Rollouts automatically trigger a self-healing rollback during a canary release?",
    "options": "WyJCeSByYW5kb21seSBzdG9wcGluZyBwb2RzIGFmdGVyIDEwIG1pbnV0ZXMuIiwiQnkgcXVlcnlpbmcgbWV0cmljcyAoZS5nLiwgUHJvbWV0aGV1cyBIVFRQIGVycm9yIHJhdGVzKSBhbmQgYWJvcnRpbmcgdGhlIHJvbGxvdXQgaWYgZmFpbHVyZSB0aHJlc2hvbGRzIGFyZSBleGNlZWRlZC4iLCJCeSBzZW5kaW5nIGFuIGVtYWlsIHRvIHRoZSBsZWFkIGRldmVsb3BlciBhc2tpbmcgZm9yIG1hbnVhbCBhcHByb3ZhbC4iLCJCeSByZXN0YXJ0aW5nIHRoZSBLdWJlcm5ldGVzIHdvcmtlciBub2Rlcy4iXQ==",
    "answer": "MQ=="
  },
  {
    "subject": "argocd-mastery",
    "subjectLabel": "🧘‍♂️ ArgoCD GitOps & DevSecOps Mastery",
    "question": "277. Why is a 3-node HA Redis Sentinel cluster recommended over a single Redis pod in production ArgoCD control planes?",
    "options": "WyJUbyBlbmNyeXB0IGFsbCBHaXQgY29tbWl0cyBhdXRvbWF0aWNhbGx5LiIsIlRvIHNwZWVkIHVwIGRvY2tlciBpbWFnZSBidWlsZCB0aW1lcyBpbiBDSSBwaXBlbGluZXMuIiwiVG8gZW5zdXJlIGhpZ2ggYXZhaWxhYmlsaXR5IGFuZCBwcmV2ZW50IGNvbnRyb2wgcGxhbmUgb3V0YWdlcyBpZiBhIHNpbmdsZSBjYWNoaW5nIHBvZCBjcmFzaGVzIHVuZGVyIGhlYXZ5IGxvYWQuIiwiVG8gY29tcGlsZSBDKysgY29kZSBpbnNpZGUgdGhlIHJlcG9zaXRvcnkgc2VydmVyLiJd",
    "answer": "Mg=="
  },
  {
    "subject": "argocd-mastery",
    "subjectLabel": "🧘‍♂️ ArgoCD GitOps & DevSecOps Mastery",
    "question": "278. How does ArgoCD scale its Application Controller when reconciling thousands of custom resources across dozens of Kubernetes clusters?",
    "options": "WyJCeSBkaXNhYmxpbmcgY29udGludW91cyByZWNvbmNpbGlhdGlvbiBsb29wcy4iLCJCeSBzdG9yaW5nIGFsbCBjbHVzdGVyIG1hbmlmZXN0cyBpbiBhIHNpbmdsZSBTUUxpdGUgZGF0YWJhc2UgZmlsZS4iLCJCeSBleGVjdXRpbmcgYWxsIHJlY29uY2lsaWF0aW9uIGNvbW1hbmRzIG9uIGRldmVsb3BlciBsYXB0b3BzLiIsIkJ5IHJ1bm5pbmcgdGhlIGNvbnRyb2xsZXIgYXMgYSBzaGFyZGVkIFN0YXRlZnVsU2V0IGFjcm9zcyBtdWx0aXBsZSByZXBsaWNhIHBvZHMuIl0=",
    "answer": "Mw=="
  },
  {
    "subject": "argocd-mastery",
    "subjectLabel": "🧘‍♂️ ArgoCD GitOps & DevSecOps Mastery",
    "question": "279. Which argocd-notifications trigger alerts engineers immediately when a Kubernetes deployment enters a CrashLoopBackOff state?",
    "options": "WyJvbi1kZXBsb3llZCIsIm9uLWhlYWx0aC1kZWdyYWRlZCIsIm9uLXN5bmMtcnVubmluZyIsIm9uLXJlcG8tY2xvbmVkIl0=",
    "answer": "MQ=="
  },
  {
    "subject": "argocd-mastery",
    "subjectLabel": "🧘‍♂️ ArgoCD GitOps & DevSecOps Mastery",
    "question": "280. If an enterprise management cluster suffers catastrophic storage loss, which administrative CLI command exports the complete, self-contained state of ArgoCD for instant disaster recovery?",
    "options": "WyJrdWJlY3RsIGdldCBhbGwgLS1hbGwtbmFtZXNwYWNlcyIsImdpdCBwdXNoIG9yaWdpbiAtLWZvcmNlIiwiYXJnb2NkLXV0aWwgYWRtaW4gZXhwb3J0IiwiaGVsbSB1bmluc3RhbGwgYXJnb2NkIl0=",
    "answer": "Mg=="
  },
  {
    "subject": "argocd-mastery",
    "subjectLabel": "🧘‍♂️ ArgoCD GitOps & DevSecOps Mastery",
    "question": "281. What happens when 'prune: true' is disabled in an ArgoCD Application's automated sync policy?",
    "options": "WyJBcmdvQ0Qgd2lsbCByZWZ1c2UgdG8gZGVwbG95IGFueSBuZXcgbWFuaWZlc3RzIGZyb20gR2l0LiIsIkFyZ29DRCB3aWxsIGF1dG9tYXRpY2FsbHkgZGVsZXRlIHRoZSBlbnRpcmUgS3ViZXJuZXRlcyBuYW1lc3BhY2UuIiwiQWxsIHBvZCBsb2dzIHdpbGwgYmUgcHVyZ2VkIGV2ZXJ5IGhvdXIuIiwiUmVzb3VyY2VzIGRlbGV0ZWQgZnJvbSB0aGUgR2l0IHJlcG9zaXRvcnkgd2lsbCByZW1haW4gcnVubmluZyBpbmRlZmluaXRlbHkgaW4gdGhlIGxpdmUgS3ViZXJuZXRlcyBjbHVzdGVyLiJd",
    "answer": "Mw=="
  },
  {
    "subject": "argocd-mastery",
    "subjectLabel": "🧘‍♂️ ArgoCD GitOps & DevSecOps Mastery",
    "question": "282. In External Secrets Operator (ESO), how are sensitive database passwords safely injected into Kubernetes pods without committing plain-text secrets to Git?",
    "options": "WyJFU08gZmV0Y2hlcyBjcmVkZW50aWFscyBhdCBydW50aW1lIGZyb20gZXh0ZXJuYWwgc2VjcmV0IHZhdWx0cyAoZS5nLiwgQVdTIFNlY3JldHMgTWFuYWdlciBvciBWYXVsdCkgYW5kIGNyZWF0ZXMgbmF0aXZlIEt1YmVybmV0ZXMgU2VjcmV0cy4iLCJEZXZlbG9wZXJzIHBhc3RlIHNlY3JldHMgaW50byB0aGUgQXJnb0NEIFdlYiBVSSBjaGF0IGJveC4iLCJTZWNyZXRzIGFyZSB3cml0dGVuIGRpcmVjdGx5IGludG8gRG9ja2VyZmlsZSBFTlYgaW5zdHJ1Y3Rpb25zLiIsIlBhc3N3b3JkcyBhcmUgYnJvYWRjYXN0ZWQgb3ZlciB1bmVuY3J5cHRlZCBIVFRQIGVuZHBvaW50cy4iXQ==",
    "answer": "MA=="
  },
  {
    "subject": "argocd-mastery",
    "subjectLabel": "🧘‍♂️ ArgoCD GitOps & DevSecOps Mastery",
    "question": "283. What is the role of the 'finalizer' setting ('resources-finalizer.argocd.argoproj.io') in a production ArgoCD Application manifest?",
    "options": "WyJJdCBwcmV2ZW50cyBkZXZlbG9wZXJzIGZyb20gbG9nZ2luZyBpbnRvIHRoZSBjbHVzdGVyIHZpYSBTU0guIiwiSXQgZW5zdXJlcyBjYXNjYWRpbmcgZGVsZXRpb24gc28gdGhhdCByZW1vdmluZyB0aGUgQXJnb0NEIEFwcGxpY2F0aW9uIHJlc291cmNlIGNsZWFubHkgZGVsZXRlcyBhbGwgYXNzb2NpYXRlZCBwb2RzLCBzZXJ2aWNlcywgYW5kIGluZ3Jlc3Nlcy4iLCJJdCBmb3JjZXMgS3ViZXJuZXRlcyB0byByZXN0YXJ0IGFsbCBwb2RzIGV2ZXJ5IDI0IGhvdXJzLiIsIkl0IGVuY3J5cHRzIHRoZSBHaXQgY29tbWl0IGhpc3RvcnkgdXNpbmcgQUVTLTI1Ni4iXQ==",
    "answer": "MQ=="
  },
  {
    "subject": "argocd-mastery",
    "subjectLabel": "🧘‍♂️ ArgoCD GitOps & DevSecOps Mastery",
    "question": "284. In Argo Rollouts, what does the 'scaleDownDelaySeconds' parameter do during a Blue/Green deployment?",
    "options": "WyJJdCBkZWxheXMgdGhlIGNyZWF0aW9uIG9mIG5ldyBjb250YWluZXIgaW1hZ2VzIGJ5IDUgbWludXRlcy4iLCJJdCBzbG93cyBkb3duIENQVSBjbG9jayBzcGVlZHMgZHVyaW5nIHBlYWsgc2FsZXMgZXZlbnRzLiIsIkl0IGtlZXBzIHRoZSBvbGQgKEJsdWUpIHBvZHMgd2FybSBmb3IgYSBzcGVjaWZpZWQgZHVyYXRpb24gYWZ0ZXIgdHJhZmZpYyBzaGlmdHMgdG8gR3JlZW4sIGFsbG93aW5nIGluc3RhbnQgemVyby1kb3dudGltZSByb2xsYmFjayBpZiBhbm9tYWxpZXMgb2NjdXIuIiwiSXQgbGltaXRzIHRoZSBtYXhpbXVtIG51bWJlciBvZiBpbmNvbWluZyBIVFRQIHJlcXVlc3RzIHBlciBzZWNvbmQuIl0=",
    "answer": "Mg=="
  },
  {
    "subject": "argocd-mastery",
    "subjectLabel": "🧘‍♂️ ArgoCD GitOps & DevSecOps Mastery",
    "question": "285. According to the Nudge Theory self-reflection micro-question, what is the ultimate test of a production-grade DevSecOps control plane?",
    "options": "WyJXaGV0aGVyIGRldmVsb3BlcnMgY2FuIHdyaXRlIDEsMDAwIGxpbmVzIG9mIFlBTUwgY29kZSBwZXIgZGF5IHdpdGhvdXQgYnJlYWtzLiIsIldoZXRoZXIgeW91ciBkZXBsb3ltZW50IGVuZ2luZSBjYW4gY29tcGxldGVseSByZWNvdmVyIGl0cyBzdGF0ZSBhbmQgc2VsZi1oZWFsIGxpdmUgd29ya2xvYWRzIGF1dG9tYXRpY2FsbHkgZnJvbSBHaXQgd2l0aG91dCBtYW51YWwgY2x1c3RlciBzdXJnZXJ5LiIsIldoZXRoZXIgdGhlIFdlYiBVSSB1c2VzIGRhcmsgbW9kZSBjb2xvciB0aGVtZXMuIiwiV2hldGhlciB0aGUgQ0kgcGlwZWxpbmUgdGFrZXMgbGVzcyB0aGFuIDUgc2Vjb25kcyB0byBydW4uIl0=",
    "answer": "MQ=="
  }
];;

let activeQuestions = [];
  let currentIndex = 0;
  let userSelection = null;
  let attemptedCount = 0;
  let trueCount = 0;
  let falseCount = 0;

  // ⭐️ NEW: Timer and Shuffling variables
  let questionTimer = null;
  let timeLeft = 30;
  let currentCorrectAnswerIndex = 0;

  // ⭐️ NEW: Array Shuffler (Fisher-Yates)
  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function b64DecodeUnicode(str) {
    try {
      if (typeof Buffer !== "undefined" && typeof process !== "undefined") {
        return Buffer.from(str, "base64").toString("utf8");
      }
      if (typeof atob === "function") {
        const binStr = atob(str);
        const len = binStr.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
          bytes[i] = binStr.charCodeAt(i);
        }
        if (typeof TextDecoder !== "undefined") {
          return new TextDecoder().decode(bytes);
        }
        return decodeURIComponent(escape(binStr));
      }
      return str;
    } catch (e) {
      return str;
    }
  }

  function getResolvedQuestion(q) {
    if (!q) return null;
    let decodedOptions = q.options;
    if (typeof q.options === "string") {
      try {
        decodedOptions = JSON.parse(b64DecodeUnicode(q.options));
      } catch (e) {
        decodedOptions = q.options;
      }
    }
    let decodedAnswer = q.answer;
    if (typeof q.answer === "string") {
      try {
        const strVal = b64DecodeUnicode(q.answer);
        decodedAnswer = !isNaN(strVal) ? parseInt(strVal, 10) : strVal;
      } catch (e) {
        decodedAnswer = q.answer;
      }
    }
    return {
      ...q,
      options: decodedOptions,
      answer: decodedAnswer
    };
  }

  if (typeof window !== "undefined") {
    window.b64DecodeUnicode = b64DecodeUnicode;
    window.getResolvedQuestion = getResolvedQuestion;
  }

  function initQuizEngine() {
    applyAntiCopy();
    const root = document.getElementById("db-quiz-root");
    if (!root) return;

    const style = document.createElement("style");
    style.textContent = `
      #db-quiz-root, #db-quiz-root * {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
      }
      #db-quiz-root {
        --db-bg: #f8fafc; --db-card: #ffffff; --db-text: #0f172a; --db-muted: #64748b;
        --db-border: #e2e8f0; --db-primary: #2563eb; --db-primary-hover: #1d4ed8;
        --db-primary-light: #eff6ff; --db-stat-bg: #f1f5f9; --db-success: #16a34a;
        --db-success-bg: #dcfce7; --db-danger: #dc2626; --db-danger-bg: #fee2e2;
        --db-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        width: 100%; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      #db-quiz-root[data-theme="dark"] {
        --db-bg: #0f172a; --db-card: #1e293b; --db-text: #f8fafc; --db-muted: #94a3b8;
        --db-border: #334155; --db-primary: #3b82f6; --db-primary-hover: #60a5fa;
        --db-primary-light: #1e293b; --db-stat-bg: #0f172a; --db-success: #22c55e;
        --db-success-bg: #064e3b; --db-danger: #ef4444; --db-danger-bg: #7f1d1d;
        --db-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
      }
      .db-card { max-width: 800px; margin: 0 auto; background: var(--db-card); border-radius: 16px; box-shadow: var(--db-shadow); padding: 24px; border: 1px solid var(--db-border); transition: all 0.3s ease; }
      .db-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--db-border); padding-bottom: 14px; margin-bottom: 18px; }
      .db-brand { display: flex; align-items: center; gap: 10px; }
      .db-header h2 { font-size: 1.35rem; color: var(--db-text); margin: 0; font-weight: 700; }
      .db-header p { font-size: 0.85rem; color: var(--db-muted); margin: 2px 0 0 0; }
      .db-theme-toggle { background: var(--db-stat-bg); border: 1px solid var(--db-border); border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 1.1rem; }
      .db-subject-section { margin-bottom: 18px; }
      .db-subject-section label { font-weight: 600; display: block; margin-bottom: 6px; color: var(--db-text); font-size: 0.9rem; }
      .db-select { width: 100%; padding: 10px 12px; border-radius: 8px; border: 1px solid var(--db-border); font-size: 0.95rem; background: var(--db-card); color: var(--db-text); outline: none; cursor: pointer; }
      .db-dashboard { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-bottom: 16px; }
      .db-stat-box { background: var(--db-stat-bg); padding: 8px; border-radius: 8px; border: 1px solid var(--db-border); text-align: center; }
      .db-stat-label { display: block; font-size: 0.7rem; color: var(--db-muted); font-weight: 600; text-transform: uppercase; }
      .db-stat-val { display: block; font-size: 1.2rem; font-weight: 800; color: var(--db-text); margin-top: 2px; }
      .db-stat-true .db-stat-val { color: var(--db-success); }
      .db-stat-false .db-stat-val { color: var(--db-danger); }
      .db-progress-track { width: 100%; height: 6px; background: var(--db-border); border-radius: 10px; overflow: hidden; margin-bottom: 20px; }
      .db-progress-bar { height: 100%; width: 0%; background: var(--db-primary); transition: width 0.3s ease; }
      .db-question-tag { display: inline-block; padding: 4px 8px; border-radius: 6px; background: var(--db-primary-light); color: var(--db-primary); font-size: 0.75rem; font-weight: 700; text-transform: uppercase; margin-bottom: 8px; }
      .db-timer { display: inline-block; font-size: 0.85rem; font-weight: 800; color: var(--db-text); background: var(--db-stat-bg); padding: 4px 12px; border-radius: 12px; margin-bottom: 8px; border: 1px solid var(--db-border); }
      #dbResultsHeading { color: var(--db-text); margin-top: 0; }
      .db-question-title { font-size: 1.1rem; font-weight: 600; color: var(--db-text); margin-bottom: 14px; line-height: 1.4; }
      .db-options-list { display: flex; flex-direction: column; gap: 8px; }
      .db-option-btn { width: 100%; padding: 12px 14px; border: 1.5px solid var(--db-border); border-radius: 8px; background: var(--db-card); color: var(--db-text); text-align: left; font-size: 0.95rem; cursor: pointer; transition: all 0.2s ease; line-height: 1.35; box-sizing: border-box; }
      .db-option-btn:hover:not(:disabled) { border-color: var(--db-primary); }
      .db-option-btn.correct { background: var(--db-success-bg) !important; border-color: var(--db-success) !important; color: var(--db-text) !important; font-weight: 600; }
      .db-option-btn.incorrect { background: var(--db-danger-bg) !important; border-color: var(--db-danger) !important; color: var(--db-text) !important; }
      .db-controls { display: flex; justify-content: space-between; align-items: center; padding-top: 14px; border-top: 1px solid var(--db-border); margin-top: 18px; }
      #dbProgressText { font-size: 0.85rem; color: var(--db-muted); font-weight: 600; }
      .db-btn { padding: 10px 20px; border: none; border-radius: 8px; background: var(--db-primary); color: #ffffff; font-size: 0.95rem; font-weight: 700; cursor: pointer; }
      .db-btn:hover:not(:disabled) { background: var(--db-primary-hover); }
      .db-btn:disabled { opacity: 0.5; cursor: not-allowed; }
      .db-results-screen { text-align: center; display: none; padding: 20px 0; }
      .db-results-score { font-size: 2.8rem; font-weight: 900; color: var(--db-primary); margin-bottom: 8px; }
      @media (max-width: 600px) {
        .db-card { padding: 16px; }
        .db-dashboard { grid-template-columns: repeat(2, 1fr); }
        .db-controls { flex-direction: column; gap: 10px; align-items: stretch; text-align: center; }
        .db-btn { width: 100%; }
      }
    `;
    document.head.appendChild(style);

    root.setAttribute("data-theme", "dark");

    root.innerHTML = `
      <div class="db-card">
        <header class="db-header">
          <div class="db-brand">
            <span style="font-size:1.5rem">🚀</span>
            <div>
              <h2>DevOps Beacon Exam Portal</h2>
              <p>Surpass the 75% threshold, Claim your Certificate ...</p>
            </div>
          </div>
          <button class="db-theme-toggle" id="dbThemeBtn" title="Toggle Light/Dark Mode">🌙</button>
        </header>

        <div class="db-subject-section">
          <label for="dbSubjectSelect">📚 Select Subject:</label>
          <select id="dbSubjectSelect" class="db-select">
            <option value="all">⚡ All Topics (285 Questions)</option>
            <option value="docker_foundations">🐳 Docker Foundations & Mindset (10 Qs)</option>
            <option value="change_governance">🧘 AI-Assisted Change Governance (35 Qs)</option>
            <option value="jenkins">🎩 Jenkins CI/CD Fundamentals (20 Qs)</option>
            <option value="gitlab-ci">🦊 GitLab CI (20 Qs)</option>
            <option value="azure-devops">☁️ Microsoft Azure DevOps (20 Qs)</option>
            <option value="sast_sonarqube">🧘‍♂️ Mindful SAST & SonarQube (20 Qs)</option>
            <option value="springboot">🍃 SpringBoot (20 Qs)</option>
            <option value="kubernetes-devsecops">☸️ Kubernetes (20 Qs)</option>
            <option value="istio">☸️ Istio (20 Qs)</option>
            <option value="terraform">🧘 Terraform (20 Qs)</option>
            <option value="prometheus-observability">🧘 Prometheus (20 Qs)</option>
            <option value="grafana-observability">🧘 Grafana (20 Qs)</option>
            <option value="alert-manager">🧘 Alert Manager (20 Qs)</option>
            <option value="argocd-mastery">🧘‍♂️ ArgoCD = GitOps (20 Qs)</option>
          </select>
        </div>

        <div class="db-dashboard">
          <div class="db-stat-box"><span class="db-stat-label">Total Qs</span><span class="db-stat-val" id="dbStatTotal">0</span></div>
          <div class="db-stat-box"><span class="db-stat-label">Attempted</span><span class="db-stat-val" id="dbStatAttempted">0</span></div>
          <div class="db-stat-box db-stat-true"><span class="db-stat-label">True</span><span class="db-stat-val" id="dbStatTrue">0</span></div>
          <div class="db-stat-box db-stat-false"><span class="db-stat-label">False</span><span class="db-stat-val" id="dbStatFalse">0</span></div>
        </div>

        <div class="db-progress-track"><div class="db-progress-bar" id="dbProgressBar"></div></div>

        <div id="dbQuizScreen">
          <div style="display: flex; justify-content: space-between; align-items: center;">
             <div class="db-question-tag" id="dbQuestionTag">Docker Foundations</div>
             <div id="dbTimerDisplay" class="db-timer">30s</div>
          </div>
          <div class="db-question-title" id="dbQuestionText">Loading Question...</div>
          <div class="db-options-list" id="dbOptionsContainer"></div>
          <div class="db-controls">
            <span id="dbProgressText">Question 1 of 10</span>
            <button class="db-btn" id="dbNextBtn" disabled>Next Question ➔</button>
          </div>
        </div>

        <div id="dbResultsScreen" class="db-results-screen">
          <div id="dbTrophyIcon" style="font-size:3rem;margin-bottom:8px">🏆</div>
          <h3 id="dbResultsHeading">Assessment Completed!</h3>
          <div class="db-results-score" id="dbFinalScore">0%</div>
          <p id="dbSummaryText" style="color:var(--db-muted);font-size:1rem;margin-top:6px"></p>
          <button class="db-btn" id="dbRestartBtn" style="margin-top:16px">🔄 Retake Assessment</button>
        </div>
      </div>
    `;

    document.getElementById("dbThemeBtn").onclick = () => {
      const current = root.getAttribute("data-theme");
      const next = current === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      document.getElementById("dbThemeBtn").innerText = next === "light" ? "🌙" : "☀️";
    };

    document.getElementById("dbSubjectSelect").onchange = loadSubject;
    document.getElementById("dbNextBtn").onclick = nextQuestion;
    document.getElementById("dbRestartBtn").onclick = restartExam;

    loadSubject();
  }

  function applyAntiCopy() {
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('copy', e => e.preventDefault());
    document.addEventListener('cut', e => e.preventDefault());
    document.addEventListener('selectstart', e => e.preventDefault());
    document.addEventListener('keydown', function(e) {
      if (e.keyCode === 123) { e.preventDefault(); return false; } 
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) { e.preventDefault(); return false; } 
      if ((e.ctrlKey || e.metaKey) && e.keyCode === 85) { e.preventDefault(); return false; } 
      if ((e.ctrlKey || e.metaKey) && e.keyCode === 67) { e.preventDefault(); return false; } 
    });
  }

  function loadSubject() {
    const sel = document.getElementById("dbSubjectSelect").value;
    const filtered = sel === "all" ? [...quizDataset] : quizDataset.filter(q => q.subject === sel);
    // ⭐️ Shuffle the questions array so they appear in random order
    activeQuestions = shuffleArray(filtered);
    restartExam();
  }

  function restartExam() {
    currentIndex = 0; attemptedCount = 0; trueCount = 0; falseCount = 0; userSelection = null;
    
    if (questionTimer) clearInterval(questionTimer);

    const quizScreen = document.getElementById("dbQuizScreen");
    const resultsScreen = document.getElementById("dbResultsScreen");
    
    if (quizScreen) quizScreen.style.display = "block";
    if (resultsScreen) resultsScreen.style.display = "none";
    
    const certForm = document.getElementById('dbCertForm');
    if (certForm && certForm.parentNode) {
        certForm.parentNode.removeChild(certForm);
    }
    
    updateStats();
    renderQuestion();
  }

  function updateStats() {
    document.getElementById("dbStatTotal").innerText = activeQuestions.length;
    document.getElementById("dbStatAttempted").innerText = attemptedCount;
    document.getElementById("dbStatTrue").innerText = trueCount;
    document.getElementById("dbStatFalse").innerText = falseCount;
    document.getElementById("dbProgressBar").style.width = `${(currentIndex / activeQuestions.length) * 100}%`;
  }

  function renderQuestion() {
    if (questionTimer) clearInterval(questionTimer);

    const q = getResolvedQuestion(activeQuestions[currentIndex]);
    document.getElementById("dbQuestionTag").innerText = q.subjectLabel;
    document.getElementById("dbQuestionText").innerText = q.question;
    document.getElementById("dbProgressText").innerText = `Question ${currentIndex + 1} of ${activeQuestions.length}`;
    
    const container = document.getElementById("dbOptionsContainer");
    container.innerHTML = "";
    userSelection = null;
    document.getElementById("dbNextBtn").disabled = true;

    // ⭐️ Shuffle the options for the current question
    const originalCorrectOptionText = q.options[q.answer];
    const shuffledOptions = shuffleArray(q.options);
    currentCorrectAnswerIndex = shuffledOptions.indexOf(originalCorrectOptionText);

    shuffledOptions.forEach((optText, idx) => {
      const btn = document.createElement("button");
      btn.className = "db-option-btn";
      btn.innerText = optText;
      btn.onclick = () => selectOption(idx, btn);
      container.appendChild(btn);
    });
    updateStats();

    // ⭐️ Start 30-second timer
    timeLeft = 30;
    const timerDisplay = document.getElementById("dbTimerDisplay");
    timerDisplay.innerText = timeLeft + "s";
    timerDisplay.style.color = ""; // Let the CSS theme handle the color
    
    questionTimer = setInterval(() => {
      timeLeft--;
      timerDisplay.innerText = timeLeft + "s";
      if (timeLeft <= 0) {
        clearInterval(questionTimer);
        handleTimeOut();
      }
    }, 1000);
  }

  // ⭐️ Handle timeout automatically marking as incorrect
  function handleTimeOut() {
    if (userSelection !== null) return;
    userSelection = -1; // -1 represents timeout
    attemptedCount++;
    falseCount++; 

    const allBtns = document.querySelectorAll("#db-quiz-root .db-option-btn");
    if (allBtns[currentCorrectAnswerIndex]) {
        allBtns[currentCorrectAnswerIndex].classList.add("correct");
    }

    allBtns.forEach(b => b.disabled = true);
    updateStats();
    document.getElementById("dbNextBtn").disabled = false;
  }

  function selectOption(idx, btn) {
    if (userSelection !== null) return;
    userSelection = idx;
    attemptedCount++;

    if (questionTimer) clearInterval(questionTimer);

    const allBtns = document.querySelectorAll("#db-quiz-root .db-option-btn");

    if (idx === currentCorrectAnswerIndex) {
      btn.classList.add("correct");
      trueCount++;
    } else {
      btn.classList.add("incorrect");
      allBtns[currentCorrectAnswerIndex].classList.add("correct");
      falseCount++;
    }

    allBtns.forEach(b => b.disabled = true);
    updateStats();
    document.getElementById("dbNextBtn").disabled = false;
  }

  function nextQuestion() {
    currentIndex++;
    if (currentIndex < activeQuestions.length) {
      renderQuestion();
    } else {
      showResults();
    }
  }

  function triggerCelebration() {
    if (typeof confetti === 'function') {
      launchFireworks();
    } else {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
      script.onload = launchFireworks;
      document.head.appendChild(script);
    }
  }

  function launchFireworks() {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  }

  function showResults() {
    if (questionTimer) clearInterval(questionTimer);

    document.getElementById("dbProgressBar").style.width = "100%";
    const quizScreen = document.getElementById("dbQuizScreen");
    const resultsScreen = document.getElementById("dbResultsScreen");
    
    if (quizScreen) quizScreen.style.display = "none";
    if (resultsScreen) resultsScreen.style.display = "block";
    
    const score = Math.round((trueCount / activeQuestions.length) * 100);
    document.getElementById("dbFinalScore").innerText = `${score}%`;

    const topicDropdown = document.getElementById("dbSubjectSelect");
    const passedTopicRaw = topicDropdown ? topicDropdown.options[topicDropdown.selectedIndex].text : "Assessment";
    window.currentPassedTopic = passedTopicRaw.replace(/\s*\(\d+\s*Qs\)/, '').trim();
  
    if (typeof html2canvas === 'undefined') {
        const h2cScript = document.createElement("script");
        h2cScript.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
        document.head.appendChild(h2cScript);
    }

    if (score >= 75) {
      document.getElementById("dbTrophyIcon").innerText = "🎉";
      document.getElementById("dbResultsHeading").innerText = "Congratulations! You Passed!";
      document.getElementById("dbSummaryText").innerText = `Outstanding job! You scored ${trueCount} out of ${activeQuestions.length} (${score}%).`;
      
      triggerCelebration();

      let certForm = document.getElementById('dbCertForm');
      if (!certForm) {
          certForm = document.createElement('div');
          certForm.id = 'dbCertForm';
          certForm.style.marginTop = '25px';
          certForm.style.padding = '20px';
          certForm.style.backgroundColor = 'var(--db-stat-bg)';
          certForm.style.borderRadius = '12px';
          certForm.style.border = '1px solid var(--db-border)';
          if (resultsScreen) resultsScreen.appendChild(certForm);
      }
      
      certForm.innerHTML = `
        <h4 style="margin: 0 0 15px 0; color: var(--db-text);">Claim Your Certificate (${window.currentPassedTopic})</h4>
        <input type="text" id="dbCertName" placeholder="Enter Your Full Name" required 
               style="width: 100%; padding: 10px; margin-bottom: 15px; border-radius: 8px; border: 1px solid var(--db-border); outline: none; background: var(--db-card); color: var(--db-text); box-sizing: border-box;">
        <button class="db-btn" id="dbGenCertBtn" style="background-color: #16a34a; width: 100%;">🏆 Generate Certificate</button>
      `;

      document.getElementById('dbGenCertBtn').onclick = function() {
          window.generateAndDownloadCert(score);
      };

    } else {
      document.getElementById("dbTrophyIcon").innerText = "📚";
      document.getElementById("dbResultsHeading").innerText = "Keep Practicing!";
      document.getElementById("dbSummaryText").innerText = `You scored ${trueCount} out of ${activeQuestions.length} (${score}%). Review the modules and try again to achieve 75%+!`;
    }
  }

  window.generateAndDownloadCert = function(score) {
    const studentName = document.getElementById("dbCertName").value.trim();
    if (!studentName) {
        alert("Please enter your name to claim the certificate.");
        return;
    }

    if (typeof html2canvas === 'undefined') {
        alert("Certificate engine is still initializing. Please wait a couple of seconds and try again.");
        return;
    }

    const downloadBtn = document.getElementById('dbGenCertBtn');
    const originalText = downloadBtn ? downloadBtn.innerText : "Generate";
    if (downloadBtn) {
        downloadBtn.innerText = "⏳ Rendering Master Certificate...";
        downloadBtn.disabled = true;
    }

    const passedTopic = window.currentPassedTopic || "Assessment";
    const todayDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    const bgSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1056 816" width="1056" height="816">
      <defs>
        <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fdf0cd" />
          <stop offset="25%" stop-color="#d4af37" />
          <stop offset="50%" stop-color="#aa771c" />
          <stop offset="75%" stop-color="#d4af37" />
          <stop offset="100%" stop-color="#fdf0cd" />
        </linearGradient>
        <linearGradient id="cyan" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#00f2fe" />
          <stop offset="100%" stop-color="#00e5ff" />
        </linearGradient>
        <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill="#1e293b" opacity="0.4" />
        </pattern>
      </defs>

      <rect width="1056" height="816" fill="#0A0F1D" />
      <rect width="1056" height="816" fill="url(#grid)" />

      <rect x="35" y="35" width="986" height="746" stroke="url(#gold)" stroke-width="4" fill="none" />
      <rect x="47" y="47" width="962" height="722" stroke="#00E5FF" stroke-width="1.5" fill="none" opacity="0.6" />

      <path d="M 25 75 L 25 25 L 75 25" stroke="url(#gold)" stroke-width="6" fill="none" />
      <path d="M 1031 75 L 1031 25 L 981 25" stroke="url(#gold)" stroke-width="6" fill="none" />
      <path d="M 25 741 L 25 791 L 75 791" stroke="url(#gold)" stroke-width="6" fill="none" />
      <path d="M 1031 741 L 1031 791 L 981 791" stroke="url(#gold)" stroke-width="6" fill="none" />

      <path d="M 0 100 L 47 100 L 100 153" stroke="url(#cyan)" stroke-width="2" fill="none" opacity="0.8"/>
      <circle cx="100" cy="153" r="4" fill="#00E5FF" />
      <path d="M 1056 100 L 1009 100 L 956 153" stroke="url(#cyan)" stroke-width="2" fill="none" opacity="0.8"/>
      <circle cx="956" cy="153" r="4" fill="#00E5FF" />
      <path d="M 0 716 L 47 716 L 100 663" stroke="url(#cyan)" stroke-width="2" fill="none" opacity="0.8"/>
      <circle cx="100" cy="663" r="4" fill="#00E5FF" />
      <path d="M 1056 716 L 1009 716 L 956 663" stroke="url(#cyan)" stroke-width="2" fill="none" opacity="0.8"/>
      <circle cx="956" cy="663" r="4" fill="#00E5FF" />

      <g transform="translate(528, 781)">
        <circle cx="0" cy="0" r="65" fill="#0A0F1D" />
        <polygon points="-30,-10 -45,35 -20,25 0,35 -10,-10" fill="#aa771c" />
        <polygon points="30,-10 10,-10 0,35 20,25 45,35" fill="#d4af37" />
        <circle cx="0" cy="-25" r="48" fill="url(#gold)" />
        <circle cx="0" cy="-25" r="42" fill="#0A0F1D" />
        <circle cx="0" cy="-25" r="38" stroke="url(#gold)" stroke-width="2.5" stroke-dasharray="5 3" fill="none" />
        <circle cx="0" cy="-25" r="33" fill="url(#gold)" />
        <circle cx="0" cy="-25" r="29" fill="#0A0F1D" />
        <path d="M0,-40 L4,-30 L15,-29 L7,-21 L9,-10 L0,-16 L-9,-10 L-7,-21 L-15,-29 L-4,-30 Z" fill="url(#gold)" />
      </g>
    </svg>`;

    const bgBase64 = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(bgSvg)));

    const certElement = document.createElement('div');
    certElement.id = 'db-temp-cert-stage';
    certElement.style.position = 'absolute';
    certElement.style.top = '0px';
    certElement.style.left = '-15000px'; 
    certElement.style.zIndex = '-9999';

    certElement.innerHTML = `
        <div style="width: 1056px; height: 816px; position: relative; box-sizing: border-box; font-family: 'Helvetica Neue', Arial, sans-serif; display: flex; flex-direction: column; align-items: center; color: #ffffff;">
            <img src="${bgBase64}" style="position: absolute; top: 0; left: 0; width: 1056px; height: 816px; z-index: 1;" />
            <div style="position: relative; z-index: 10; width: 100%; height: 100%; padding: 90px 80px 45px 80px; display: flex; flex-direction: column; justify-content: space-between; align-items: center; box-sizing: border-box;">
                <div style="text-align: center;">
                    <div style="font-size: 1.15rem; font-weight: 800; letter-spacing: 8px; color: #fdf0cd; text-transform: uppercase; margin-bottom: 12px;">DEVOPS BEACON ACADEMY</div>
                    <div style="font-size: 5rem; font-weight: 900; letter-spacing: 6px; color: #d4af37; text-shadow: 0 4px 10px rgba(0,0,0,0.5); margin-bottom: 5px;">CERTIFICATE</div>
                    <div style="font-size: 1.6rem; font-weight: 800; letter-spacing: 10px; color: #00E5FF; text-transform: uppercase;">OF ACHIEVEMENT</div>
                    <div style="width: 150px; height: 3px; background-color: #d4af37; margin: 25px auto 0 auto; border-radius: 2px;"></div>
                </div>
                <div style="text-align: center; width: 100%;">
                    <div style="font-size: 1.1rem; font-weight: 700; letter-spacing: 5px; color: #94a3b8; text-transform: uppercase; margin-bottom: 15px; display: flex; align-items: center; justify-content: center; gap: 20px;">
                        <span style="display: inline-block; width: 60px; height: 1.5px; background-color: #d4af37;"></span>
                        PROUDLY PRESENTED TO
                        <span style="display: inline-block; width: 60px; height: 1.5px; background-color: #d4af37;"></span>
                    </div>
                    <div style="font-family: Georgia, 'Times New Roman', serif; font-style: italic; font-size: 5rem; color: #ffffff; margin-bottom: 20px; text-shadow: 0 2px 8px rgba(212,175,55,0.4);">
                        ${studentName}
                    </div>
                    <div style="font-size: 1.2rem; font-weight: 600; letter-spacing: 2px; color: #cbd5e1; text-transform: uppercase; line-height: 1.8;">
                        FOR DEMONSTRATING OUTSTANDING MASTERY IN<br>
                        <span style="font-size: 2.2rem; font-weight: 800; color: #00E5FF; letter-spacing: 1px; display: inline-block; margin-top: 8px; text-transform: none;">
                            ${passedTopic}
                        </span>
                        <div style="font-size: 1.2rem; color: #94a3b8; font-weight: 700; letter-spacing: 2px; margin-top: 12px;">
                            VERIFIED SCORE: <span style="color: #fdf0cd; font-weight: 900; font-size: 1.5rem;">${score}%</span>
                        </div>
                    </div>
                </div>
                <div style="width: 100%; display: flex; justify-content: space-between; align-items: flex-end; padding: 0 20px; box-sizing: border-box; margin-bottom: 8px;">
                    <div style="text-align: center; width: 240px; background-color: #0A0F1D; padding: 5px 0; z-index: 20;">
                        <div style="font-size: 1.3rem; font-weight: 600; color: #fdf0cd; margin-bottom: 8px;">${todayDate}</div>
                        <div style="width: 100%; height: 2px; background-color: #d4af37; margin-bottom: 6px;"></div>
                        <div style="font-size: 0.85rem; font-weight: 800; letter-spacing: 3px; color: #94a3b8; text-transform: uppercase;">DATE</div>
                    </div>
                    <div style="width: 180px;"></div>
                    <div style="text-align: center; width: 260px; background-color: #0A0F1D; padding: 5px 0; z-index: 20;">
                        <div style="font-family: 'Brush Script MT', 'Lucida Handwriting', Georgia, cursive; font-size: 2rem; color: #ffffff; margin-bottom: 4px; line-height: 1; white-space: nowrap;">
                            DevOps Beacon
                        </div>
                        <div style="width: 100%; height: 2px; background-color: #d4af37; margin-bottom: 6px;"></div>
                        <div style="font-size: 0.85rem; font-weight: 800; letter-spacing: 3px; color: #94a3b8; text-transform: uppercase;">AUTHORIZED SIGNATURE</div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(certElement);

    setTimeout(() => {
        html2canvas(certElement, { 
            scale: 2, 
            logging: false,
            backgroundColor: '#0A0F1D',
            allowTaint: true
        }).then(canvas => {
            if (document.body.contains(certElement)) {
                document.body.removeChild(certElement);
            }
            const imgData = canvas.toDataURL('image/png');
            const certForm = document.getElementById('dbCertForm');
            
            certForm.innerHTML = `
                <h4 style="margin: 0 0 10px 0; color: var(--db-text);">🎉 Your Certificate is Ready!</h4>
                <div style="background: var(--db-primary-light); padding: 15px; border-radius: 8px; border-left: 4px solid var(--db-primary); margin-bottom: 15px; text-align: left; font-size: 0.9rem; color: var(--db-text); line-height: 1.6;">
                    <strong>Step 1: Save Your Certificate</strong><br>
                    Right-click (or long-press) the certificate below and select <em>"Save image as..."</em>
                    <div style="margin-top: 10px; border-top: 1px solid rgba(0,0,0,0.1); padding-top: 10px;">
                        <strong>Step 2: Share on LinkedIn</strong><br>
                        Attach your saved certificate image to your LinkedIn post and tag your peers!
                        <div style="margin-top: 10px;">
                            <a href="https://www.linkedin.com/feed/?shareActive=true" target="_blank" style="background-color: #0a66c2; color: white; text-decoration: none; padding: 8px 16px; border-radius: 6px; font-weight: bold; font-size: 0.9rem; display: inline-flex; align-items: center; gap: 6px;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg>
                                Post to LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
                <img id="finalCertImg" src="${imgData}" style="width: 100%; border: 1px solid var(--db-border); border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" alt="DevOps Beacon Certificate">
            `;

            const finalImg = document.getElementById('finalCertImg');
            finalImg.addEventListener('contextmenu', function(e) { e.stopPropagation(); });
            finalImg.addEventListener('mousedown', function(e) { e.stopPropagation(); });
            finalImg.addEventListener('touchstart', function(e) { e.stopPropagation(); });
            finalImg.style.userSelect = 'auto';
            // ⭐️ ADD THIS: Smoothly scroll the screen down to the new certificate
            setTimeout(() => {
                certForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }).catch(err => {
            console.error("html2canvas render error:", err);
            alert("Error rendering image. Please try again.");
            if (document.body.contains(certElement)) {
                document.body.removeChild(certElement);
            }
            if (downloadBtn) {
                downloadBtn.innerText = originalText;
                downloadBtn.disabled = false;
            }
        });
    }, 500);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initQuizEngine);
  } else {
    initQuizEngine();
  }
})();
