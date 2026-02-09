# Payment Success Page

A clean, responsive **payment success/receipt** page built with modern frontend technologies.  
Displays transaction details, allows PDF receipt download, and includes a non-navigating "Return" button as specified.

Current date reference in the app logic: February 09, 2026

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **PDF Generation**: jsPDF
- **React**: Client Components (`'use client'`)
- **Build Tool**: Next.js built-in (with Turbopack support in dev mode)

## Features

- Fully responsive design (mobile, tablet, desktop)
- Success confirmation with checkmark icon
- Transaction details card
- **Download Receipt** button → generates and downloads a PDF with payment info
- **Return to Store** button → does **not** navigate (placeholder behavior)
- Clean, modern UI with subtle animations on hover

## Project Structure (key files)
