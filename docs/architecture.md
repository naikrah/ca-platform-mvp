# Architecture Overview (MVP)

## Assumptions
- Indian compliance context (GST + IT returns), but no complex filings in MVP.
- JWT auth for client/CA/admin roles.
- File storage is abstracted behind a service and can be local for MVP.

## System Architecture
- **Frontend (React SPA):** Handles onboarding, booking, document flows, and messaging UI.
- **Backend (Node.js + Express):** REST API for auth, services, bookings, documents, payments, and messaging.
- **Database (PostgreSQL):** Primary data store.
- **Storage (Local/Mock):** Stores uploaded documents; metadata stored in DB.
- **Audit Logging:** Central table to log key actions (booking, upload, payment).

## Data Model (PostgreSQL-friendly)

### users
- `id` (uuid, pk)
- `email` (text, unique, not null)
- `password_hash` (text, not null)
- `role` (text: client|ca|admin, not null)
- `name` (text)
- `phone` (text)
- `status` (text: active|pending|disabled)
- `created_at`, `updated_at` (timestamptz)

### cas
- `id` (uuid, pk)
- `user_id` (uuid, fk -> users.id)
- `firm_name` (text)
- `specialization` (text)
- `experience_years` (int)
- `rating` (numeric)
- `bio` (text)
- `onboarding_status` (text: pending|approved|rejected)
- `created_at`, `updated_at`

### clients
- `id` (uuid, pk)
- `user_id` (uuid, fk -> users.id)
- `company_name` (text)
- `gstin` (text)
- `created_at`, `updated_at`

### services
- `id` (uuid, pk)
- `name` (text)
- `description` (text)
- `price_inr` (numeric)
- `is_active` (boolean)

### bookings
- `id` (uuid, pk)
- `client_id` (uuid, fk -> clients.id)
- `ca_id` (uuid, fk -> cas.id)
- `service_id` (uuid, fk -> services.id)
- `scheduled_at` (timestamptz)
- `status` (text: requested|confirmed|completed|cancelled)
- `created_at`, `updated_at`

### documents
- `id` (uuid, pk)
- `booking_id` (uuid, fk -> bookings.id, nullable)
- `uploader_id` (uuid, fk -> users.id)
- `file_name` (text)
- `file_url` (text)
- `access_level` (text: client|ca|shared)
- `created_at`

### payments
- `id` (uuid, pk)
- `booking_id` (uuid, fk -> bookings.id)
- `amount_inr` (numeric)
- `status` (text: pending|paid|failed)
- `method` (text: mock|upi|card)
- `invoice_url` (text)
- `created_at`, `updated_at`

### audit_logs
- `id` (uuid, pk)
- `actor_id` (uuid, fk -> users.id)
- `action` (text)
- `entity_type` (text)
- `entity_id` (uuid)
- `metadata` (jsonb)
- `created_at`

### messages
- `id` (uuid, pk)
- `booking_id` (uuid, fk -> bookings.id)
- `sender_id` (uuid, fk -> users.id)
- `recipient_id` (uuid, fk -> users.id)
- `content` (text)
- `created_at`

## API Contracts (REST)

### Auth
- `POST /api/auth/register` (client/ca)
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/auth/me`

### CA Profiles
- `GET /api/cas`
- `GET /api/cas/:id`
- `PATCH /api/cas/:id` (CA only)
- `POST /api/cas/:id/availability` (CA only)

### Services
- `GET /api/services`
- `POST /api/services` (admin)
- `PATCH /api/services/:id` (admin)

### Bookings
- `POST /api/bookings`
- `GET /api/bookings` (filter by role)
- `GET /api/bookings/:id`
- `PATCH /api/bookings/:id/status`

### Documents
- `POST /api/documents/upload`
- `GET /api/documents` (filter by booking/client)
- `GET /api/documents/:id/download`

### Payments
- `POST /api/payments`
- `GET /api/payments/:id`
- `PATCH /api/payments/:id/status`

### Messaging
- `POST /api/messages`
- `GET /api/messages?bookingId=...`
