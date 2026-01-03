# Ancarta Technologies Website

A fully functional, responsive corporate website for Ancarta Technologies Pvt. Ltd., built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## 🚀 Features

- **Modern Tech Stack**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4
- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **SEO Optimized**: Proper metadata, semantic HTML, and Open Graph tags
- **Fast Performance**: Static generation for optimal load times
- **Accessible**: ARIA labels, proper heading hierarchy, and keyboard navigation

## 📄 Pages

1. **Home** (`/`) - Hero section, services overview, testimonials, and CTAs
2. **About** (`/about`) - Company overview, mission, vision, values, and core principles
3. **Services** (`/services`) - Detailed service offerings with benefits and use cases
4. **Blog** (`/blog`) - Insights and articles with individual post pages
5. **Contact** (`/contact`) - Contact form with validation and company information

## 🎨 Design System

### Colors
- **Primary**: Deep Blue (#1e40af)
- **Secondary**: Cool Gray (#374151)
- **Accent**: Cyan (#06b6d4)
- **Success**: Green (#10b981)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 400, 500, 600, 700, 800

## 🧩 Components

All reusable components are located in `/components`:

- `Button.tsx` - Multi-variant button component (primary, secondary, outline)
- `Header.tsx` - Responsive navigation with mobile menu
- `Footer.tsx` - Company info, links, and contact details
- `Hero.tsx` - Page hero sections with gradient backgrounds
- `ServiceCard.tsx` - Service display cards with icons and benefits
- `Layout.tsx` - Wrapper component with header and footer

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📁 Project Structure

```
/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Button.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Layout.tsx
│   └── ServiceCard.tsx
├── public/
│   └── (static assets)
└── package.json
```

## 🎯 Services Offered

1. **IT Consulting** - Strategic technology guidance and infrastructure optimization
2. **Custom Software Development** - Tailored solutions for unique business needs
3. **Web Application Development** - Modern, responsive web applications
4. **Mobile Application Development** - Native and cross-platform mobile apps
5. **Cloud & Smart Digital Solutions** - Cloud migration and DevOps services
6. **Software Maintenance & Support** - 24/7 support and regular updates

## 📝 Content

The website showcases:
- Company tagline: "Experts in IT Consulting & Custom Software Development – Smart Solutions for a Digital World"
- Professional, confident tone for B2B audience
- Clear value propositions and trust indicators
- Sample blog posts on various technology topics

## ✨ Animations & Transitions

- Smooth fade-in animations on scroll
- Hover effects on cards and buttons
- Gradient background animations
- CSS transitions (0.3s ease)

## 📱 Responsive Breakpoints

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

## 🔒 Form Validation

The contact form includes:
- Required field validation
- Email format validation
- Message length validation
- Success state handling

## 📊 SEO & Meta Tags

Each page includes:
- Custom title and description
- Open Graph tags for social sharing
- Twitter card metadata
- Proper heading hierarchy

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

© 2024 Ancarta Technologies Pvt. Ltd. All rights reserved.

## 🤝 Contact

- **Email**: info@ancarta.tech
- **Phone**: +1 (555) 123-4567
- **Address**: 123 Tech Boulevard, Innovation District, San Francisco, CA 94105
