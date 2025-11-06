# Wedding Landing Page

A beautiful and elegant wedding invitation landing page built with React, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Beautiful hero section with custom wedding photography and flipping text animation
- ⏱️ Live countdown timer with smooth number transitions
- 📅 Wedding day schedule timeline
- 📝 RSVP form with elegant animations and toast notifications
- 🖼️ Auto-rotating image carousel with swipe support
- 📱 Fully responsive design with mobile-optimized carousel
- ✨ Smooth animations powered by Framer Motion

## Tech Stack

- React 19
- Vite
- Tailwind CSS 3
- Framer Motion (Animations)
- Sonner (Toast notifications)

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Deploy to Netlify

1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

The `_redirects` file is already configured for SPA routing.

## Customization

- **Wedding Date**: Edit `src/components/Countdown.jsx`
- **Colors**: Edit `tailwind.config.js`
- **Hero Image**: Replace `src/assets/images/hero.jpg`
- **Schedule Events**: Edit `src/components/Schedule.jsx`

## Key Features Details

### Hero Section
- Flipping text animation on page load
- Continuous floating animation for couple names
- Responsive typography scaling

### Image Carousel
- 3-image layout on desktop (center focused with side previews)
- Mobile-optimized with 20% peek of adjacent images
- Touch/swipe navigation support
- Auto-rotation every 5 seconds
- Smooth transitions with no white flash

### RSVP Form
- Multi-person support
- Real-time form validation
- Animated form sections
- Success notifications with Sonner

### Countdown Timer
- Real-time updates every second
- Smooth number transitions
- Days, hours, minutes, and seconds display

---

Built with modern web technologies for a seamless wedding invitation experience.
