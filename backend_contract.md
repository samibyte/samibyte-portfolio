# Backend API Contract - SamiByte Portfolio

This document defines the schema designs, expected REST endpoints, and payload formats for the independent Node.js/Express (or NestJS/Fastify) backend that supplies data to this static frontend.

## API Base Address
The frontend points to the backend via the client-side environment variable `NEXT_PUBLIC_API_URL`.

All endpoints listed below are relative to this url (e.g., if `NEXT_PUBLIC_API_URL=https://api.samibyte.dev`, the projects list endpoint is `https://api.samibyte.dev/api/projects`).

---

## 1. Endpoints

### Get All Projects
* **Path:** `GET /api/projects`
* **Response Content-Type:** `application/json`
* **Response Status:** `200 OK`
* **Response Body:** Array of Project items matching the **Project Schema** below.

### Get Single Project
* **Path:** `GET /api/projects/:slug`
* **Response Content-Type:** `application/json`
* **Response Status:** `200 OK` (or `404 Not Found` if slug does not exist)
* **Response Body:** Single Project item matching the **Project Schema** below.

---

## 2. Project Schema

The frontend accepts either a flat database-style structure or a nested schema structure, and normalizes it automatically on load. You can return either formatting.

### Option A: Flat Database Structure (Prisma / SQL style)
This structure maps directly to typical relational tables or document databases.

```json
{
  "id": "stitchlogic",
  "title": "StitchLogic",
  "description": "A garment manufacturing and production management platform for tracking orders.",
  "longDescription": "StitchLogic streamlines garment factory operations by centralizing order management...",
  "videoUrl": null,
  "githubUrl": "https://github.com/samibyte/stitchlogic",
  "demoUrl": "https://stitchlogic.samibyte.dev",
  "order": 0,
  "techStack": [
    { "name": "React", "icon": "react", "color": "#61DAFB" },
    { "name": "Node.js", "icon": "nodejs", "color": "#339933" }
  ],
  "problem": "Garment factories often rely on spreadsheets and manual processes...",
  "solution": "Built a centralized system that tracks production progress...",
  "challenges": "Designing flexible production pipelines while maintaining accurate status tracking...",
  "learnings": "Gained experience designing workflow-driven applications...",
  "results": [
    "Improved production visibility.",
    "Reduced manual record keeping.",
    "Centralized factory operations."
  ]
}
```

### Option B: Nested Frontend Structure
This matches the internal TypeScript interfaces used inside the UI views.

```json
{
  "id": "stitchlogic",
  "title": "StitchLogic",
  "description": "A garment manufacturing and production management platform for tracking orders.",
  "longDescription": "StitchLogic streamlines garment factory operations by centralizing order management...",
  "videoUrl": null,
  "githubUrl": "https://github.com/samibyte/stitchlogic",
  "demoUrl": "https://stitchlogic.samibyte.dev",
  "order": 0,
  "tech": [
    { "name": "React", "icon": "react", "color": "#61DAFB" },
    { "name": "Node.js", "icon": "nodejs", "color": "#339933" }
  ],
  "caseStudy": {
    "problem": "Garment factories often rely on spreadsheets and manual processes...",
    "solution": "Built a centralized system that tracks production progress...",
    "challenges": "Designing flexible production pipelines while maintaining accurate status tracking...",
    "learnings": "Gained experience designing workflow-driven applications...",
    "results": [
      "Improved production visibility.",
      "Reduced manual record keeping.",
      "Centralized factory operations."
    ]
  }
}
```

---

## 3. Reference TypeScript Definitions

```typescript
export interface TechItem {
  name: string;
  icon: string;    // Devicon slug (e.g. "react", "nodejs", "mongodb")
  color?: string;  // Hex color code (e.g. "#61DAFB")
  variant?: "original" | "plain" | "plain-wordmark";
}

export interface Project {
  id: string; // Used as the slug in URL paths
  title: string;
  description: string;
  longDescription: string;
  videoUrl?: string | null;
  tech: TechItem[];
  githubUrl: string;
  demoUrl: string;
  order: number;
  caseStudy: {
    problem: string;
    solution: string;
    challenges: string;
    learnings: string;
    results: string[];
  };
}
```
