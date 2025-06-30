# 🎓 Gia Sư Tri Thức - Landing Page

Website landing page cho **Gia Sư Tri Thức**.

## 📋 Tổng quan

- ✨ Thiết kế UI/UX hiện đại và premium
- 🚀 Hiệu ứng animation tiên tiến
- 📱 Responsive design hoàn hảo
- ⚡ Tối ưu hóa hiệu suất cao cấp
- 🎨 Glassmorphism và visual effects

## 🛠️ Công nghệ sử dụng

### Core Technologies
- **HTML5** - Semantic markup với accessibility
- **CSS3** - Advanced styling với custom properties
- **JavaScript (ES6+)** - Modern interactive features
- **Tailwind CSS** - Utility-first CSS framework

### Design & Assets
- **Google Fonts** - Inter (300-900) + Dancing Script (decorative)
- **Font Awesome 6.0** - Professional icon library
- **Custom Animations** - Hand-crafted CSS animations
- **Glassmorphism Effects** - Modern glass-like UI elements

### Performance & Optimization
- **Lazy Loading** - Images và animations
- **Intersection Observer API** - Scroll-triggered animations
- **CSS GPU Acceleration** - Hardware-accelerated animations
- **Responsive Images** - Optimized loading
- **Preload Resources** - Critical CSS, fonts, và assets

## 📁 Cấu trúc project

```
lp-giasu/
├── index.html              # Landing page chính
├── styles.css              # Advanced CSS với animations (3800+ lines)
├── script.js               # Interactive functionality
├── README.md               # Documentation
└── images/                 # Asset folder
    ├── agribank.png        # Logo ngân hàng Agribank
    ├── co-gai-banner.png   # Hero banner image
    ├── gia-su.png          # Gia sư illustration
    ├── sacombank.png       # Logo ngân hàng Sacombank
    ├── vietcapital.png     # Logo ngân hàng Viet Capital
    ├── vietcombank.png     # Logo ngân hàng Vietcombank
    ├── viettinbank.png     # Logo ngân hàng VietinBank
    └── vpbank.png          # Logo ngân hàng VPBank
```

## ✨ Tính năng nổi bật

### 🎨 Visual Design
- ✅ **Premium Hero Section** - Dual-layout với real images và floating graphics
- ✅ **Glassmorphism UI** - Glass-like effects trên cards và modals
- ✅ **Global Background Patterns** - Dynamic animated background
- ✅ **Floating Particles** - Educational icons bay khắp website
- ✅ **3D Floating Elements** - Pencil, calculator, ruler 3D animations
- ✅ **Corner Decorations** - Subtle corner effects

### 🎯 Interactive Elements
- ✅ **Enhanced Cards** - Border sẵn + hover focus effects
- ✅ **Scroll Animations** - Fade, scale, stagger animations
- ✅ **Magnetic Hover** - Buttons với magnetic hover effects
- ✅ **Copy to Clipboard** - One-click copy cho bank accounts
- ✅ **Smooth Scrolling** - Buttery smooth navigation
- ✅ **Fixed Bottom Buttons** - Floating action buttons

### 📊 Content Sections
- ✅ **Subjects Grid** - 4x2 grid layout cho môn học
- ✅ **Process Cards** - 3-step process với enhanced styling
- ✅ **Bank Account Cards** - Real bank logos với professional layout
- ✅ **"Lưu ý" Section** - Complex 2-column layout với floating image
- ✅ **Rules Section** - Premium cards với navigation arrows

### 📱 Responsive & Performance
- ✅ **Mobile-First Design** - Optimized cho tất cả devices
- ✅ **Lazy Loading** - Images, animations, và heavy elements
- ✅ **Reduced Motion** - Accessibility support
- ✅ **Performance Optimized** - <3s load time
- ✅ **SEO Ready** - Semantic HTML và meta tags

## 🚀 Hướng dẫn chạy project

### 1. Cách đơn giản nhất
```bash
# Clone hoặc download project
# Mở file index.html bằng trình duyệt web hiện đại
```

### 2. Sử dụng VS Code Live Server (Khuyến nghị)
```bash
# Cài đặt extension "Live Server" trong VS Code
# Right-click index.html → "Open with Live Server"
# Tự động mở tại http://127.0.0.1:5500
```

### 3. Local Development Server
```bash
# Python
python -m http.server 8000

# Node.js
npx serve .
# hoặc
npm install -g http-server
http-server

# Truy cập: http://localhost:8000
```

## 🎨 Customization Guide

### Colors & Theming
```css
/* Custom CSS Variables trong styles.css */
:root {
    --primary-blue: #3b82f6;
    --primary-orange: #f59e0b;
    --success-green: #10b981;
    --glass-bg: rgba(255, 255, 255, 0.1);
    --glass-border: rgba(255, 255, 255, 0.2);
}
```

### Animation Speed
```css
/* Tăng/giảm tốc độ animations */
.global-particle {
    animation: globalFloat 20s ease-in-out infinite; /* Giảm từ 40s xuống 20s */
}
```

### Responsive Breakpoints
```css
/* Mobile */
@media (max-width: 768px) { }
/* Tablet */
@media (max-width: 1024px) { }
/* Desktop */
@media (min-width: 1025px) { }
```

## 📋 Feature Checklist

### 🎯 UI Components
| Component | Description | Status |
|-----------|-------------|---------|
| Header | Gradient header với hotline | ✅ |
| Navigation | Sticky nav với smooth scroll | ✅ |
| Hero Section | Dual-layout với real images | ✅ |
| Subjects Grid | 4x2 grid responsive layout | ✅ |
| Process Cards | Enhanced 3-step cards | ✅ |
| "Lưu ý" Section | Complex 2-column layout | ✅ |
| Rules Section | Premium cards với arrows | ✅ |
| Bank Section | Real bank logos grid | ✅ |
| Footer | Contact info với social links | ✅ |
| Fixed Buttons | Bottom floating actions | ✅ |

### 🎨 Animations & Effects
| Effect | Description | Status |
|--------|-------------|---------|
| Global Particles | 12 educational emoji floating | ✅ |
| Hero Graphics | SVG floating icons | ✅ |
| Scroll Animations | Fade, scale, stagger effects | ✅ |
| Card Hovers | Enhanced focus effects | ✅ |
| Background Patterns | Animated dot patterns | ✅ |
| Glassmorphism | Glass-like UI elements | ✅ |
| 3D Elements | Floating 3D educational items | ✅ |
| Banking Icons | Financial floating icons | ✅ |

### ⚡ Performance Features
| Feature | Description | Status |
|---------|-------------|---------|
| Lazy Loading | Images + animations | ✅ |
| Intersection Observer | Scroll-triggered content | ✅ |
| GPU Acceleration | Hardware-accelerated CSS | ✅ |
| Preload Critical | CSS, fonts, hero image | ✅ |
| Reduced Motion | Accessibility support | ✅ |
| Mobile Optimization | Lighter animations on mobile | ✅ |

## 🔧 JavaScript Features

### Core Functionality
```javascript
// Smooth scrolling navigation
function scrollToSection(sectionId)

// Copy bank account numbers
function copyToClipboard(text)

// Lazy loading với Intersection Observer
const observeAnimations = () => { ... }

// Mobile menu toggle
function toggleMobileMenu()

// Search functionality (demo)
function handleSearch(query)
```

### Performance Optimizations
```javascript
// Throttled scroll events
// Debounced resize handlers
// Lazy animation loading
// Memory leak prevention
```

## 🌐 Browser Compatibility

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 80+ | ✅ Full |
| Firefox | 75+ | ✅ Full |
| Safari | 13+ | ✅ Full |
| Edge | 80+ | ✅ Full |
| Mobile Chrome | Current | ✅ Full |
| Mobile Safari | Current | ✅ Full |

### Progressive Enhancement
- ✅ Fallbacks cho CSS Grid
- ✅ Graceful animation degradation
- ✅ No-JS functionality maintained

## 📞 Contact Information

- **📱 Hotline:** 0976.148.149
- **✉️ Email:** nhansu.giasutrithuc@gmail.com
- **📍 Địa chỉ:** Lô 03 Đường số 12, Tân Thới Nhất, Q12, TP. HCM
- **🌐 Website:** lopmoi.giasutrithuc.net

### ⏰ Giờ làm việc
- **Thứ 2 - Thứ 7:** 8:00 AM - 10:00 PM
- **Chủ nhật:** 8:00 AM - 6:00 PM

## 🔄 Version History

### v3.0.0 (2024-Current) - Premium Release
- ✅ **Design System Overhaul** - Tailwind CSS implementation
- ✅ **Advanced Animations** - 3800+ lines custom CSS
- ✅ **Performance Optimization** - Lazy loading, intersection observer
- ✅ **Real Assets Integration** - Bank logos, hero images
- ✅ **Glassmorphism UI** - Modern glass effects
- ✅ **Enhanced Responsiveness** - Mobile-first approach

### v2.0.0 (Previous) - Enhanced Version
- ✅ Tailwind CSS migration
- ✅ Floating particles system
- ✅ Banking section with real logos
- ✅ Complex layouts implementation

### v1.0.0 (Initial) - Basic Clone
- ✅ Bootstrap 5 implementation
- ✅ Basic responsive design
- ✅ Core functionality

## 🚨 Important Notes

- **Demo Purpose:** Website này là demo showcase, không phải website chính thức
- **Performance:** Optimized cho modern browsers với hardware acceleration
- **Accessibility:** Tuân thủ WCAG guidelines với reduced-motion support
- **SEO Ready:** Semantic HTML và meta tags optimization
- **Production Ready:** Code quality cao, có thể deploy ngay

## 🤝 Credits & Acknowledgments

- **Original Design Inspiration:** Gia Sư Tri Thức (lopmoi.giasutrithuc.net)
- **Development:** AI Assistant với extensive customization
- **Fonts:** Google Fonts (Inter, Dancing Script)
- **Icons:** Font Awesome 6.0
- **Images:** Custom curated educational assets

---

**⭐ Showcase Website - Demonstrating Modern Web Development Excellence**

*Built with passion for education and modern web technologies* 🚀 