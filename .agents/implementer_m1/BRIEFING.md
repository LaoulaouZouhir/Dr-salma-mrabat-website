# BRIEFING — 2026-08-04

## Mission
Milestone 1: Relocate images and convert raw HTML articles 1-5 to React JSX components in `src/pages/dermatologie-medicale/`.

## 🔒 My Identity
- Archetype: teamwork_preview_worker
- Roles: orchestrator, user_liaison, human_reporter, successor
- Working directory: /Volumes/Stockage/Siteweb-samia2/.agents/implementer_m1
- Original parent: parent
- Original parent conversation ID: 6071814e-b8fe-4d3a-bf26-06669fa5aa58

## 🔒 My Workflow
- **Pattern**: Project
- **Scope document**: /Volumes/Stockage/Siteweb-samia2/.agents/explorer_m1/analysis.md
1. **Decompose**: Relocate images, convert HTML 1-5 to JSX, verify build, write report.
2. **Dispatch & Execute**: Delegate work to worker subagent.
3. **On failure**: Retry / replace.
4. **Succession**: Self-succeed if spawn count >= 16.

- **Work items**:
  1. Image relocation for Articles 1-5 [in-progress]
  2. HTML to JSX conversion for Articles 1-5 [in-progress]
  3. Build verification [in-progress]
  4. Worker report generation [in-progress]

## 🔒 Key Constraints
- DO NOT CHEAT. Genuine implementation only.
- Preserve text content accurately from original HTML.
- Replace class= with className=.
- Self-closing void tags (<img ... />, <br />, <hr />).
- Translate image src to /articles/article<N>/images/XXX.
- Put converted article HTML inside <article className="medical-article">.
- External links must have rel="noopener noreferrer".
- Run build verification.

## Team Roster
| Agent | Type | Work Item | Status | Conv ID |
|-------|------|-----------|--------|---------|
| worker_1 | self | Articles 1-5 HTML to JSX & Image Relocation | in-progress | 3716fbfc-a529-4473-877d-c60cf034cf8d |

## Succession Status
- Spawn count: 1 / 16
- Pending subagents: 3716fbfc-a529-4473-877d-c60cf034cf8d
