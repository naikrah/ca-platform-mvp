# Architecture

## Overview
- **Frontend**: Vite + React for the client-facing app and CA dashboard.
- **Backend**: Express API with placeholder controllers for MVP flows.

## API surface (initial)
- `POST /api/auth/login`
- `POST /api/auth/register`
- `GET /api/bookings`
- `POST /api/bookings`
- `GET /api/cas`
- `GET /api/documents`
- `GET /api/messages`
- `GET /api/payments`
- `GET /api/services`

## Next steps
- Replace placeholders with database-backed services.
- Add validation, logging, and error handling.
