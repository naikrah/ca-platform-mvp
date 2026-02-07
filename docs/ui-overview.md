# UI Overview (MVP)

## Assumptions
- Mobile-first layout with a simple top bar and bottom navigation for key areas.
- Authentication is via email + password with OTP/verification in a later phase.
- Services and pricing are static for MVP and surfaced in the booking flow.

## Navigation Model
- **Unauthenticated:** Landing → Client/CA onboarding → Login.
- **Client:** Dashboard, Bookings, Documents, Messages, Payments.
- **CA:** Dashboard, Schedule, Clients, Documents, Messages, Payments, Analytics.
- **Admin (minimal):** CA approvals, platform metrics.

---

## 1) Client Onboarding & Login
**Layout**
- Single-column, mobile-first form card.
- Header with logo and tagline.

**Key Components**
- Role toggle (Client / CA).
- Email + password fields.
- Basic profile fields (name, phone).
- Primary CTA: “Create account” or “Login”.
- Legal links (Terms, Privacy).

---

## 2) CA Onboarding & Dashboard
**Layout**
- Two-step onboarding flow.
- Step 1: profile + KYC docs upload.
- Step 2: services & availability.

**Key Components**
- Profile form: name, firm, specialization, experience.
- Document upload: ICAI registration, PAN.
- Service toggle list: Tax Filing, GST, Audit, Advisory.
- Availability calendar (weekly slots).
- Dashboard cards: today’s bookings, pending approvals, revenue (basic).

---

## 3) Client Dashboard
**Layout**
- Top bar with profile icon and notifications.
- Card grid for key actions.

**Key Components**
- “Book a CA” primary CTA.
- Upcoming bookings list with status.
- Recent documents list with quick download.
- Payment status banner (if pending).

---

## 4) Booking Flow
**Layout**
- 3-step wizard: Service → CA → Time.

**Key Components**
- Service catalog cards with static pricing.
- CA list with name, specialization, rating.
- Calendar picker + available slots.
- Summary panel with price + confirmation button.
- Booking confirmation screen with status tracking.

---

## 5) Document Upload Flow
**Layout**
- Simple upload panel with file list.

**Key Components**
- Drag-and-drop zone + “Browse files”.
- File list with metadata (uploader, date).
- Access badge (Client-only / CA-only / Shared).
- Activity log: who uploaded/downloaded.
- CTA: “Notify CA” when client uploads.
