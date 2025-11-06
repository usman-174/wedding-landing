# Wedding App - Component Structure

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.jsx           - Hero section with parallax effect
│   ├── Invitation.jsx     - Invitation message section
│   ├── Countdown.jsx      - Live countdown timer
│   ├── Schedule.jsx       - Wedding schedule timeline
│   ├── RSVPForm.jsx       - RSVP form with toast notifications
│   ├── Carousel.jsx       - Image carousel
│   └── Footer.jsx         - Footer with credits
├── assets/
│   └── images/
│       └── hero.jpg       - Hero background image
├── App.jsx               - Main app component
├── App.css               - Global styles and animations
└── index.css             - Tailwind imports and base styles
```

## 🎨 Components Overview

### 1. **Hero.jsx**
- Full-screen hero section with parallax scrolling
- Uses local hero image from assets
- GSAP animations: parallax effect on image, fade-out text on scroll
- Displays: Wedding date "14.7.2026 | SRIJEDA" and couple names "Vit & Josip"

### 2. **Invitation.jsx**
- Croatian invitation message
- GSAP animation: fade-in from bottom on scroll

### 3. **Countdown.jsx**
- Live countdown timer to wedding date (July 14, 2026)
- Updates every second
- GSAP animation: staggered bounce-in effect for each time unit
- Shows: Days, Hours, Minutes, Seconds

### 4. **Schedule.jsx**
- Wedding day timeline with 3 events
- Vertical timeline with icons
- GSAP animations: fade-in section, staggered slide-in for timeline items
- Events:
  - 14:00 - Gathering
  - 18:00 - Church ceremony
  - 20:00 - Reception

### 5. **RSVPForm.jsx**
- RSVP form with form validation
- Fields: First name, Last name, Phone, Attendance (Yes/No)
- Option to add second person
- Optional message field
- **Sonner toast notifications** on successful submission
- GSAP animation: slide-in from bottom

### 6. **Carousel.jsx**
- Auto-rotating image carousel (4 second intervals)
- Manual navigation with indicator dots
- GSAP animation: zoom-in effect on scroll

### 7. **Footer.jsx**
- Simple footer with "Made with ♥ and Smatik Group"

## 🛠️ Technologies Used

- **React 19** - UI framework
- **Vite** - Build tool
- **Tailwind CSS 3** - Utility-first CSS
- **Sonner** - Toast notifications
- **Google Fonts** - Cormorant Garamond (serif) & Montserrat (sans-serif)

## 🎭 Animations

Simple CSS animations for a lightweight experience:
- **Fade-in/Slide-up/Slide-down** animations on hero text
- **Smooth transitions** on hover states
- **Carousel fade transitions** between images
- All animations use pure CSS keyframes

## 🎨 Theme Colors

```js
wedding-beige: #f5f3f0
wedding-sage: #c8d5d0
wedding-mint: #b8c9c3
wedding-dark: #2b2b2b
wedding-gray: #8a8a8a
```

## 🔔 Toast Notifications

Toast messages appear on form submission using Sonner:
- Position: Top center
- Style: Rich colors with wedding theme
- Custom styling with Montserrat font
- Success message in Croatian with emoji

## 🚀 Running the App

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
```

## 📝 Notes

- All ScrollTrigger animations are properly cleaned up in useEffect return
- Hero image path: `src/assets/images/hero.jpg`
- Form data is logged to console on submission
- Responsive design for mobile, tablet, and desktop
