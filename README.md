# Fondation Bien étre - Wellness & Therapy Center

A modern, responsive website for a wellness and therapy center specializing in holistic healing services. The site showcases various therapeutic services including massage therapy, traditional Chinese medicine, and wellness treatments with a **functional contact form powered by EmailJS**.

## 🌿 About

Fondation Bien étre is a professional wellness center website that provides information about therapeutic services, pricing, training programs, and contact details. The site features a clean, modern design with intuitive navigation, responsive layout optimized for all devices, and a **fully integrated email contact system** for seamless client communication.

## ✨ Features

### Core Pages
- **Home** - Welcome page with hero section and service overview
- **Services** - Detailed information about therapeutic offerings
- **Pricing** - Transparent pricing structure for all services
- **Training** - Educational programs and formation opportunities
- **Contact** - **Functional contact form with EmailJS integration** and location details

### Key Components
- **Responsive Navigation** - Mobile-friendly navigation with hamburger menu
- **Hero Section** - Engaging landing area with compelling visuals
- **Service Cards** - Interactive cards showcasing different therapy services
- **Google Maps Integration** - Embedded map for easy location finding
- **Contact Form** - **Professional email form with real-time validation and sending**
- **Modern UI Components** - Built with shadcn/ui for consistent design

### Technical Features
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Modern Design** - Clean, professional aesthetic with Tailwind CSS
- **Fast Loading** - Optimized with Vite build system
- **Email Integration** - **EmailJS powered contact form with professional templates**
- **Form Validation** - **Real-time form validation with error handling**
- **Loading States** - **Smooth user feedback during form submission**
- **Accessible** - Built with accessibility best practices
- **SEO Friendly** - Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS for utility-first styling
- **UI Components**: shadcn/ui component library
- **Email Service**: **EmailJS for contact form functionality**
- **Build Tool**: Vite for fast development and optimized builds
- **Icons**: Lucide React for consistent iconography
- **Routing**: React Router DOM for navigation
- **Package Manager**: Bun for fast package management

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun runtime
- Modern web browser

### Installation

1. Clone the repository:
```bash
git clone https://github.com/FediMechergui/zen-data-miner.git
cd zen-data-miner
```

2. Install dependencies:
```bash
# Using bun (recommended)
bun install

# Or using npm
npm install
```

3. Start the development server:
```bash
# Using bun
bun run dev

# Or using npm
npm run dev
```

4. Open your browser and navigate to [http://localhost:5173](http://localhost:5173)

## 📧 EmailJS Configuration

The contact form uses EmailJS to send emails directly from the website. To enable email functionality:

### Quick Setup

1. **Copy environment variables:**
```bash
cp .env.example .env.local
```

2. **Configure EmailJS:**
   - Create an account at [EmailJS.com](https://www.emailjs.com/)
   - Set up an email service (Gmail recommended)
   - Create an email template using the provided `email-template.html`
   - Update `.env.local` with your EmailJS credentials

3. **Environment Variables:**
```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id  
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Detailed Setup Guide

📖 **Complete setup instructions:** See `EMAILJS-SETUP.md` for step-by-step configuration

### Email Template Features

- ✨ **Professional design** matching the wellness theme
- 📱 **Mobile-responsive** HTML template
- 🎨 **Brand colors** and typography
- 📋 **All form fields** properly mapped
- 📧 **Auto-formatted** client information

## 📋 Available Scripts

- `dev` - Start development server with hot reload
- `build` - Build the project for production
- `preview` - Preview the production build locally
- `lint` - Run ESLint to check code quality

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── EmbeddedMap.tsx # Google Maps integration
│   ├── GoogleMap.tsx   # Map component
│   ├── Hero.tsx        # Hero section component
│   ├── Navigation.tsx  # Navigation component
│   └── ServiceCard.tsx # Service display cards
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Main application pages
│   ├── Contact.tsx     # Contact page with EmailJS form
│   ├── Formations.tsx  # Training programs
│   ├── Home.tsx        # Homepage
│   ├── Index.tsx       # Main layout
│   ├── NotFound.tsx    # 404 page
│   └── Tarifs.tsx      # Pricing information
└── assets/             # Images and media files

config/
├── .env.example        # Environment variables template
├── .env.local          # Your EmailJS configuration (create this)
├── email-template.html # Professional email template for EmailJS
└── EMAILJS-SETUP.md   # Complete setup guide
```

## 🎨 Design System

The project uses a consistent design system with:
- **Color Palette**: Earthy, calming colors suitable for wellness
- **Typography**: Clean, readable fonts optimized for web
- **Spacing**: Consistent spacing scale using Tailwind utilities
- **Components**: Reusable UI components with shadcn/ui

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Mobile Optimization

The website is fully optimized for mobile devices with:
- Responsive grid layouts
- Touch-friendly navigation
- Optimized images
- Mobile-first design approach

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact Form Features

The website includes a **fully functional contact form** with the following capabilities:

### ✨ User Experience
- **Real-time validation** - Instant feedback on form fields
- **Loading states** - Visual feedback during email sending
- **Success/Error notifications** - Clear user feedback
- **Mobile-optimized** - Touch-friendly form controls
- **Accessibility compliant** - Screen reader friendly

### 📧 Email Functionality
- **Professional email templates** - Branded email design
- **Automatic email delivery** - Powered by EmailJS
- **Form data mapping** - All fields properly captured
- **Business information included** - Complete contact details
- **Timestamp tracking** - When the message was sent

### 🔧 Technical Implementation
- **TypeScript integration** - Type-safe form handling
- **Error boundaries** - Graceful error handling
- **Environment-based config** - Secure credential management
- **Form reset on success** - Clean user experience

## 📞 Contact

For any questions or inquiries about the website, please visit the Contact page or reach out through the provided contact information on the site.

---

Built with ❤️ for wellness and healing
