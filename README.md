# SpringPetals

SpringPetals is an AI-powered flower discovery platform that integrates multiple external APIs with real-time search, caching, schema validation, and AI enrichment. It delivers high-speed, context-aware results with a focus on **post-purchase care guidance** and **occasion-based recommendations**.

## 🌸 Overview

Most flower search experiences are slow, fragmented, and lack personalization. SpringPetals solves this by combining image inspiration, symbolic meaning, and care tips in one place — optimized for performance, reliability, and scalability.

##  Live Demo
[https://spring-petals.com](https://spring-petals.com)

---

## Features

- **Multi-Source API Search**  
  Aggregates results from APIs such as Unsplash, Pexels, and floristry data sources, merges them into a unified feed, and deduplicates entries.

- **Caching & Fallback Logic**  
  Stores frequent queries in Supabase for <300ms load times. Falls back to cached data if external APIs fail.

- **AI Enrichment**  
  Generates care tips, symbolism explanations, and occasion-based suggestions via OpenAI API.

- **Personalized Vision Board**  
  Users can save searches, pin flowers, and receive tailored recommendations.

- **Public Analytics Dashboard**  
  Displays top searches, seasonal trends, and care tip engagement rates.

---

## 🛠 Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS  
- **Backend:** Next.js API Routes, Supabase (PostgreSQL), Edge Functions  
- **APIs:** Unsplash, Pexels, [floristry data API]  
- **AI:** OpenAI API  
- **Testing:** Playwright, Postman, JSON Schema Validation  
- **Deployment:** Vercel + GitHub Actions (CI/CD)  
- **Analytics:** Supabase + Chart.js

---

##  Engineering Highlights

- **API Reliability Layer**  
  Validates API responses with JSON Schema, handles rate limits with retries and queueing.

- **Performance Optimization**  
  Edge caching and on-demand image optimization with Next.js Image component.

- **Security & Guardrails**  
  Sanitizes user input for search, detects prompt injection attempts.

- **Scalability**  
  Modular API integration layer to add/remove data sources with minimal code changes.

- **Testing & CI/CD**  
  Automated schema and E2E tests run on every commit. Deployed via GitHub Actions → Vercel.

---
