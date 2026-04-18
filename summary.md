# System Architectural Summary — Senior Deployment Ready

This document provides a high-level overview of the professional architecture, security layers, and cloud integrations implemented in the Shipping Logistics application.

## 🏗️ Core Architecture
- **Decoupled Entity Management**: All domain objects (User, Order, Dock, etc.) are centralized in `src/entities/`, ensuring high reusability and clean imports across the system.
- **Service-Oriented Logic**: Core business logic is isolated into specialized services (`AuthService`, `ProfileService`, `AuditService`, `StorageService`), separating domain rules from the HTTP layer.
- **Pluggable Providers**: The system uses a factory pattern for external integrations, allowing for seamless switching between providers (e.g., SMTP vs. SendGrid) without changing business logic.

## 🔐 Security & Identity Infrastructure
- **Identity Lifecycle**: Comprehensive management including mandatory Email Verification, multi-transport Password Recovery, and secure authenticated Password Changes.
- **Multi-Factor Authentication (MFA)**: Implementation of 2FA (TOTP) using standard authenticator apps, with a secure challenge-response login flow.
- **Advanced Authorization (RBAC)**: Centralized middleware for role-based access control (Admin, Manager, Staff, Customer) with superuser bypass for governance.
- **Session Management**: 
  - **Dual-Token Architecture**: Short-lived Access Tokens (15m) paired with long-lived Refresh Tokens (7d).
  - **Token Rotation**: Every refresh issues a new token pair, invalidating the old ones to prevent replay attacks.
  - **Explicit Revocation**: Logout and Password Resets automatically kill all active persistent sessions.
- **Brute-Force Protection**: 
  - **Account Lockout**: Automated temporary restriction after 5 failed attempts in 15 minutes.
  - **Constant-Time Checks**: Protection against timing attacks during login.
  - **Tiered Rate Limiting**: Specialized limiters for Auth (`authLimiter`), Uploads (`uploadLimiter`), and sensitive operations (`strictLimiter`).
- **Data Integrity**: 
  - **XSS & HPP**: Deep sanitization and parameter pollution protection applied globally.
  - **Zod Validation**: Strict schema enforcement on every incoming request.
  - **CORS & Helmet**: Production-grade HTTP headers and origin protection.

## ☁️ Cloud & External Integrations
- **Firebase Cloud Storage**: Professional image management with secure file streaming and automatic cleanup of replaced assets.
- **Email System**: Pluggable architecture supporting both **SMTP (Nodemailer)** and **SendGrid**. Includes structured HTML templates for all system events.
- **PostgreSQL & Prisma**: Type-safe database queries with advanced indexing and automated audit relationships.

## 📊 Observability & Monitoring
- **Professional Auditing**: Dual-layer logging system:
  - **Middleware**: Automatic mutation tracking for every state-changing request.
  - **Domain-Specific**: Explicit high-value logging via `AuditService` (e.g., "Account Locked", "Address Changed").
- **Device Auditing**: Professional parsing of User-Agent strings via `ua-parser-js` into structured OS, Browser, and Device Type metadata.
- **Winston & Morgan**: Structured JSON logging for production monitoring and pretty-printed logs for development.
- **Health Checks**: Dedicated `GET /health` endpoint for real-time system and database connectivity monitoring.

## 🚀 DevOps & Stability
- **Graceful Shutdown**: Robust signal handling (SIGTERM/SIGINT) with a 10-second timeout guard to ensure zero data loss during deployments.
- **Environment Safety**: Strict Zod-based validation of `.env` at startup—the system will refuse to start if critical production secrets are missing.
- **Global Error Handling**: Centralized error middleware ensuring consistent API responses and preventing stack trace leakage in production.

---
*Created by Antigravity — Your Senior Al Coding Partner.*
