
                        <!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <style>
                body {
                  background-color: white; /* Ensure the iframe has a white background */
                }

                /* =========================================
   SchoolPDF - Persian Student Questions
   Modern Educational Website Styles
   ========================================= */

/* ---------- CSS Variables (Theming) ---------- */
:root {
  --primary: #4f46e5;
  --primary-dark: #3730a3;
  --primary-light: #818cf8;
  --secondary: #06b6d4;
  --accent: #f59e0b;
  --success: #10b981;
  --danger: #ef4444;

  --bg: #ffffff;
  --bg-soft: #f8fafc;
  --bg-card: #ffffff;
  --text: #1e293b;
  --text-soft: #64748b;
  --border: #e2e8f0;
  --shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.1);

  --radius: 14px;
  --radius-sm: 8px;
  --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --font: 'Vazirmatn', 'IRANSansX', Tahoma, sans-serif;
}

[data-theme="dark"] {
  --bg: #0f172a;
  --bg-soft: #1e293b;
  --bg-card: #1e293b;
  --text: #f1f5f9;
  --text-soft: #94a3b8;
  --border: #334155;
  --shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.5);
}

/* ---------- Reset ---------- */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font);
  background: var(--bg);
  color: var(--text);
  line-height: 1.7;
  direction: rtl;
  text-align: right;
  transition: background var(--transition), color var(--transition);
  overflow-x: hidden;
}

a {
  text-decoration: none;
  color: inherit;
  transition: color var(--transition);
}

ul { list-style: none; }

img { max-width: 100%; display: block; }

button {
  font-family: inherit;
  cursor: pointer;
  border: none;
  background: none;
  color: inherit;
}

input, textarea, select {
  font-family: inherit;
  outline: none;
}

/* ---------- Container ---------- */
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
}

/* ---------- Header ---------- */
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(10px);
  transition: all var(--transition);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  gap: 20px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--primary);
}

.logo i {
  font-size: 1.8rem;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav a {
  padding: 8px 14px;
  border-radius: var(--radius-sm);
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--text-soft);
  transition: all var(--transition);
}

.nav a:hover,
.nav a.active {
  color: var(--primary);
  background: rgba(79, 70, 229, 0.08);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.icon-btn {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--bg-soft);
  color: var(--text);
  font-size: 1.1rem;
  transition: all var(--transition);
}

.icon-btn:hover {
  background: var(--primary);
  color: #fff;
  transform: translateY(-2px);
}

.menu-toggle {
  display: none;
}

/* Mobile Nav */
.mobile-nav {
  position: fixed;
  top: 0;
  right: -100%;
  width: 80%;
  max-width: 320px;
  height: 100vh;
  background: var(--bg);
  box-shadow: var(--shadow-lg);
  padding: 24px;
  z-index: 1100;
  transition: right var(--transition);
  overflow-y: auto;
}

.mobile-nav.open { right: 0; }

.mobile-nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
}

.mobile-nav a {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 12px;
  border-radius: var(--radius-sm);
  font-weight: 500;
  color: var(--text);
  transition: all var(--transition);
}

.mobile-nav a:hover {
  background: rgba(79, 70, 229, 0.08);
  color: var(--primary);
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1050;
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition);
}

.overlay.show {
  opacity: 1;
  visibility: visible;
}

/* ---------- Hero / Slider ---------- */
.hero {
  position: relative;
  height: 520px;
  overflow: hidden;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
}

.slide {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.8s ease;
  text-align: center;
  color: #fff;
  padding: 20px;
}

.slide.active { opacity: 1; }

.slide::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
}

.slide-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  animation: fadeUp 0.8s ease;
}

.slide-content h1 {
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 16px;
  line-height: 1.3;
}

.slide-content p {
  font-size: clamp(1rem, 2vw, 1.2rem);
  margin-bottom: 24px;
  opacity: 0.95;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  transition: all var(--transition);
  cursor: pointer;
}

.btn-primary {
  background: #fff;
  color: var(--primary);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.btn-outline {
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
}

.btn-outline:hover {
  background: #fff;
  color: var(--primary);
}

.btn-solid {
  background: var(--primary);
  color: #fff;
}

.btn-solid:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.slider-dots {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all var(--transition);
}

.dot.active {
  background: #fff;
  width: 32px;
  border-radius: 6px;
}

.slider-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  color: #fff;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all var(--transition);
}

.slider-arrow:hover { background: rgba(255, 255, 255, 0.35); }
.slider-arrow.prev { right: 20px; }
.slider-arrow.next { left: 20px; }

/* ---------- Section ---------- */
.section {
  padding: 80px 0;
}

.section-head {
  text-align: center;
  margin-bottom: 48px;
}

.section-head h2 {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 800;
  margin-bottom: 12px;
  position: relative;
  display: inline-block;
}

.section-head h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  right: 50%;
  transform: translateX(50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  border-radius: 2px;
}

.section-head p {
  color: var(--text-soft);
  max-width: 600px;
  margin: 20px auto 0;
}

/* ---------- Grades Grid ---------- */
.grades-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}

.grade-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 32px 24px;
  text-align: center;
  transition: all var(--transition);
  position: relative;
  overflow: hidden;
}

.grade-card::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  transform: scaleX(0);
  transform-origin: right;
  transition: transform var(--transition);
}

.grade-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-light);
}

.grade-card:hover::before { transform: scaleX(1); }

.grade-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #fff;
  transition: transform var(--transition);
}

.grade-card:hover .grade-icon {
  transform: scale(1.1) rotate(-8deg);
}

.grade-card h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.grade-card p {
  color: var(--text-soft);
  font-size: 0.9rem;
  margin-bottom: 16px;
}

.grade-card .count {
  display: inline-block;
  padding: 4px 14px;
  background: rgba(79, 70, 229, 0.1);
  color: var(--primary);
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
}

/* ---------- Questions ---------- */
.questions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

.question-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  transition: all var(--transition);
  display: flex;
  flex-direction: column;
}

.question-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-light);
}

.question-meta {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 14px;
}

.tag {
  padding: 4px 12px;
  background: rgba(79, 70, 229, 0.1);
  color: var(--primary);
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
}

.tag.hot {
  background: rgba(239, 68, 68, 0.1);
  color: var(--danger);
}

.question-card h4 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 10px;
  line-height: 1.5;
}

.question-card .desc {
  color: var(--text-soft);
  font-size: 0.9rem;
  margin-bottom: 16px;
  flex: 1;
}

.question-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid var(--border);
}

.question-stats {
  display: flex;
  gap: 14px;
  color: var(--text-soft);
  font-size: 0.85rem;
}

.question-stats span {
  display: flex;
  align-items: center;
  gap: 4px;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: var(--primary);
  color: #fff;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  transition: all var(--transition);
}

.download-btn:hover {
  background: var(--primary-dark);
  transform: scale(1.05);
}

/* ---------- Tabs ---------- */
.tabs {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.tab {
  padding: 10px 24px;
  border-radius: 50px;
  background: var(--bg-soft);
  color: var(--text-soft);
  font-weight: 600;
  transition: all var(--transition);
}

.tab.active {
  background: var(--primary);
  color: #fff;
}

/* ---------- News ---------- */
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.news-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: all var(--transition);
}

.news-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.news-img {
  height: 180px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 3rem;
}

.news-body {
  padding: 20px;
}

.news-date {
  color: var(--text-soft);
  font-size: 0.85rem;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.news-body h4 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 10px;
  line-height: 1.5;
}

.news-body p {
  color: var(--text-soft);
  font-size: 0.9rem;
  margin-bottom: 14px;
}

.read-more {
  color: var(--primary);
  font-weight: 600;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.read-more:hover { gap: 10px; }

/* ---------- Page Hero ---------- */
.page-hero {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #fff;
  padding: 80px 0 60px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.page-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="1" fill="white" opacity="0.1"/><circle cx="80" cy="60" r="1.5" fill="white" opacity="0.1"/><circle cx="40" cy="80" r="1" fill="white" opacity="0.1"/></svg>');
}

.page-hero h1 {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 12px;
  position: relative;
}

.breadcrumb {
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
  font-size: 0.95rem;
  opacity: 0.9;
  position: relative;
}

.breadcrumb a:hover { text-decoration: underline; }

/* ---------- Search Page ---------- */
.search-box {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  margin-bottom: 32px;
  box-shadow: var(--shadow);
}

.search-form {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  gap: 12px;
}

.search-form input,
.search-form select {
  padding: 12px 16px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--bg-soft);
  color: var(--text);
  font-size: 0.95rem;
  transition: all var(--transition);
}

.search-form input:focus,
.search-form select:focus {
  border-color: var(--primary);
  background: var(--bg);
}

.search-form button {
  padding: 12px 28px;
  background: var(--primary);
  color: #fff;
  border-radius: var(--radius-sm);
  font-weight: 600;
  transition: all var(--transition);
}

.search-form button:hover {
  background: var(--primary-dark);
}

/* ---------- About / Contact ---------- */
.about-grid,
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}

.about-text h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--primary);
}

.about-text p {
  color: var(--text-soft);
  margin-bottom: 14px;
  line-height: 1.9;
}

.features-list {
  margin-top: 24px;
}

.features-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px dashed var(--border);
}

.features-list li i {
  color: var(--success);
  font-size: 1.2rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 24px;
}

.stat-card {
  background: var(--bg-soft);
  padding: 20px;
  border-radius: var(--radius);
  text-align: center;
  border: 1px solid var(--border);
}

.stat-card .num {
  font-size: 2rem;
  font-weight: 800;
  color: var(--primary);
  display: block;
}

.stat-card .label {
  color: var(--text-soft);
  font-size: 0.9rem;
}

.contact-info {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 32px;
}

.contact-info h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 0;
  border-bottom: 1px solid var(--border);
}

.contact-item:last-child { border: none; }

.contact-item i {
  width: 44px;
  height: 44px;
  background: rgba(79, 70, 229, 0.1);
  color: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
}

.contact-item .info strong {
  display: block;
  margin-bottom: 4px;
}

.contact-item .info span {
  color: var(--text-soft);
  font-size: 0.9rem;
}

.contact-form {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 32px;
}

.contact-form h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 18px;
}

.form-group label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  font-size: 0.9rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--bg-soft);
  color: var(--text);
  transition: all var(--transition);
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--primary);
  background: var(--bg);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

/* ---------- Footer ---------- */
.footer {
  background: var(--bg-soft);
  border-top: 1px solid var(--border);
  padding: 60px 0 20px;
  margin-top: 60px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.footer-col h4 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 18px;
  position: relative;
  padding-bottom: 10px;
}

.footer-col h4::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40px;
  height: 3px;
  background: var(--primary);
  border-radius: 2px;
}

.footer-col p {
  color: var(--text-soft);
  font-size: 0.9rem;
  line-height: 1.8;
  margin-bottom: 16px;
}

.footer-col ul li {
  margin-bottom: 10px;
}

.footer-col ul a {
  color: var(--text-soft);
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all var(--transition);
}

.footer-col ul a:hover {
  color: var(--primary);
  padding-right: 6px;
}

.social-links {
  display: flex;
  gap: 10px;
  margin-top: 16px;
}

.social-links a {
  width: 40px;
  height: 40px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-soft);
  transition: all var(--transition);
}

.social-links a:hover {
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
  transform: translateY(-3px);
}

.footer-bottom {
  padding-top: 20px;
  border-top: 1px solid var(--border);
  text-align: center;
  color: var(--text-soft);
  font-size: 0.9rem;
}

/* ---------- Back to Top ---------- */
.back-to-top {
  position: fixed;
  bottom: 24px;
  left: 24px;
  width: 48px;
  height: 48px;
  background: var(--primary);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  box-shadow: var(--shadow-lg);
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: all var(--transition);
  z-index: 999;
}

.back-to-top.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.back-to-top:hover {
  background: var(--primary-dark);
  transform: translateY(-4px);
}

/* ---------- Animations ---------- */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ---------- Responsive ---------- */
@media (max-width: 992px) {
  .nav { display: none; }
  .menu-toggle { display: flex; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
  .about-grid, .contact-grid { grid-template-columns: 1fr; }
  .search-form { grid-template-columns: 1fr; }
}

@media (max-width: 600px) {
  .section { padding: 50px 0; }
  .hero { height: 420px; }
  .footer-grid { grid-template-columns: 1fr; gap: 30px; }
  .stats-grid { grid-template-columns: 1fr; }
  .slider-arrow { display: none; }
}

/* ---------- Utility ---------- */
.text-center { text-align: center; }
.mt-20 { margin-top: 20px; }
.mb-20 { margin-bottom: 20px; }
.hidden { display: none !important; }


              </style>
                        </head>
                        <body>
                            <!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="نمونه سؤالات امتحانی دانش‌آموزان ایران از پایه هفتم تا دوازدهم - دانلود رایگان PDF">
  <meta name="keywords" content="نمونه سوال, نمونه سؤال, امتحان, دانش آموز, هفتم, هشتم, نهم, دهم, یازدهم, دوازدهم, PDF">
  <meta name="author" content="SchoolPDF">
  <meta property="og:title" content="نمونه سؤال - مرجع سؤالات امتحانی دانش‌آموزان">
  <meta property="og:description" content="دانلود رایگان نمونه سؤالات امتحانی تمام پایه‌ها">
  <meta property="og:type" content="website">
  <title>نمونه سؤال | مرجع سؤالات امتحانی دانش‌آموزان ایران</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="header" id="header"></header>

  <!-- Hero Slider -->
  <section class="hero">
    <div class="slide active" style="background: linear-gradient(135deg, #4f46e5, #06b6d4);">
      <div class="slide-content">
        <h1>نمونه سؤالات امتحانی تمام پایه‌ها</h1>
        <p>بهترین منبع برای آمادگی در امتحانات - از هفتم تا دوازدهم</p>
        <a href="#grades" class="btn btn-primary"><i class="fa-solid fa-rocket"></i> شروع کنید</a>
      </div>
    </div>
    <div class="slide" style="background: linear-gradient(135deg, #06b6d4, #10b981);">
      <div class="slide-content">
        <h1>دانلود رایگان فایل‌های PDF</h1>
        <p>هزاران نمونه سؤال با پاسخ تشریحی در انتظار شماست</p>
        <a href="search.html" class="btn btn-primary"><i class="fa-solid fa-magnifying-glass"></i> جستجو</a>
      </div>
    </div>
    <div class="slide" style="background: linear-gradient(135deg, #f59e0b, #ef4444);">
      <div class="slide-content">
        <h1>موفقیت تحصیلی با نمونه سؤال</h1>
        <p>با تمرین مداوم، بهترین نتایج را در امتحانات کسب کنید</p>
        <a href="about.html" class="btn btn-outline"><i class="fa-solid fa-circle-info"></i> درباره ما</a>
      </div>
    </div>

    <button class="slider-arrow prev"><i class="fa-solid fa-chevron-right"></i></button>
    <button class="slider-arrow next"><i class="fa-solid fa-chevron-left"></i></button>

    <div class="slider-dots">
      <span class="dot active"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
  </section>

  <!-- Grades Section -->
  <section class="section" id="grades">
    <div class="container">
      <div class="section-head fade-in">
        <h2>پایه‌های تحصیلی</h2>
        <p>پایه تحصیلی خود را انتخاب کنید و به نمونه سؤالات دسترسی پیدا کنید</p>
      </div>
      <div class="grades-grid">
        <a href="pages/grade7.html" class="grade-card fade-in">
          <div class="grade-icon"><i class="fa-solid fa-7"></i></div>
          <h3>پایه هفتم</h3>
          <p>دوره اول متوسطه</p>
          <span class="count">+۱۲۰ نمونه سؤال</span>
        </a>
        <a href="pages/grade8.html" class="grade-card fade-in">
          <div class="grade-icon"><i class="fa-solid fa-8"></i></div>
          <h3>پایه هشتم</h3>
          <p>دوره اول متوسطه</p>
          <span class="count">+۱۴۰ نمونه سؤال</span>
        </a>
        <a href="pages/grade9.html" class="grade-card fade-in">
          <div class="grade-icon"><i class="fa-solid fa-9"></i></div>
          <h3>پایه نهم</h3>
          <p>دوره اول متوسطه</p>
          <span class="count">+۱۸۰ نمونه سؤال</span>
        </a>
        <a href="pages/grade10.html" class="grade-card fade-in">
          <div class="grade-icon"><i class="fa-solid fa-book"></i></div>
          <h3>پایه دهم</h3>
          <p>دوره دوم متوسطه</p>
          <span class="count">+۲۰۰ نمونه سؤال</span>
        </a>
        <a href="pages/grade11.html" class="grade-card fade-in">
          <div class="grade-icon"><i class="fa-solid fa-book-open"></i></div>
          <h3>پایه یازدهم</h3>
          <p>دوره دوم متوسطه</p>
          <span class="count">+۲۲۰ نمونه سؤال</span>
        </a>
        <a href="pages/grade12.html" class="grade-card fade-in">
          <div class="grade-icon"><i class="fa-solid fa-graduation-cap"></i></div>
          <h3>پایه دوازدهم</h3>
          <p>دوره دوم متوسطه</p>
          <span class="count">+۲۵۰ نمونه سؤال</span>
        </a>
      </div>
    </div>
  </section>

  <!-- Popular Questions -->
  <section class="section" style="background: var(--bg-soft);">
    <div class="container">
      <div class="section-head fade-in">
        <h2>پرطرفدارترین نمونه سؤالات</h2>
        <p>محبوب‌ترین سؤالات که توسط دانش‌آموزان دانلود شده‌اند</p>
      </div>
      <div class="tabs">
        <button class="tab active">همه</button>
        <button class="tab">جدیدترین</button>
        <button class="tab">پر بازدید</button>
        <button class="tab">با پاسخ</button>
      </div>
      <div class="questions-grid" id="popularQuestions"></div>
    </div>
  </section>

  <!-- News Section -->
  <section class="section" id="news">
    <div class="container">
      <div class="section-head fade-in">
        <h2>اخبار آموزشی</h2>
        <p>آخرین اخبار و اطلاعیه‌های مربوط به آموزش و پرورش</p>
      </div>
      <div class="news-grid">
        <article class="news-card fade-in">
          <div class="news-img"><i class="fa-solid fa-newspaper"></i></div>
          <div class="news-body">
            <div class="news-date"><i class="fa-regular fa-calendar"></i> ۲۰ تیر ۱۴۰۵</div>
            <h4>تغییرات جدید در برنامه درسی پایه دهم</h4>
            <p>وزارت آموزش و پرورش تغییرات جدیدی را در برنامه درسی پایه دهم اعلام کرد...</p>
            <a href="#" class="read-more">ادامه مطلب <i class="fa-solid fa-arrow-left"></i></a>
          </div>
        </article>
        <article class="news-card fade-in">
          <div class="news-img"><i class="fa-solid fa-bullhorn"></i></div>
          <div class="news-body">
            <div class="news-date"><i class="fa-regular fa-calendar"></i> ۱۸ تیر ۱۴۰۵</div>
            <h4>زمان برگزاری امتحانات نهایی اعلام شد</h4>
            <p>برنامه زمانی امتحانات نهایی خرداد ماه پایه‌های دوازدهم منتشر شد...</p>
            <a href="#" class="read-more">ادامه مطلب <i class="fa-solid fa-arrow-left"></i></a>
          </div>
        </article>
        <article class="news-card fade-in">
          <div class="news-img"><i class="fa-solid fa-award"></i></div>
          <div class="news-body">
            <div class="news-date"><i class="fa-regular fa-calendar"></i> ۱۵ تیر ۱۴۰۵</div>
            <h4>معرفی برترین دانش‌آموزان المپیادی</h4>
            <p>نتایج المپیادهای علمی کشور اعلام و دانش‌آموزان برتر معرفی شدند...</p>
            <a href="#" class="read-more">ادامه مطلب <i class="fa-solid fa-arrow-left"></i></a>
          </div>
        </article>
      </div>
    </div>
  </section>

  <footer class="footer" id="footer"></footer>

  <script src="script.js"></script>
  <script>
    // Render popular questions on homepage
    document.addEventListener('DOMContentLoaded', () => {
      const container = document.getElementById('popularQuestions');
      if (!container) return;
      const popular = [
        { title: 'نمونه سؤال ریاضی نهم - خرداد ۱۴۰۴', grade: '9', subject: 'ریاضی', type: 'نوبت دوم', downloads: 2340, hot: true },
        { title: 'نمونه سؤال فیزیک یازدهم - تجربی', grade: '11', subject: 'فیزیک', type: 'تجربی', downloads: 1890, hot: true },
        { title: 'نمونه سؤال فارسی دهم - با پاسخ', grade: '10', subject: 'فارسی', type: 'با پاسخ', downloads: 1650, hot: true },
        { title: 'نمونه سؤال زیست دوازدهم - کنکوری', grade: '12', subject: 'زیست', type: 'کنکوری', downloads: 2100, hot: true },
        { title: 'نمونه سؤال شیمی نهم - فصل به فصل', grade: '9', subject: 'شیمی', type: 'فصل به فصل', downloads: 1420, hot: false },
        { title: 'نمونه سؤال عربی هشتم - گرامر', grade: '8', subject: 'عربی', type: 'گرامر', downloads: 980, hot: false }
      ];
      container.innerHTML = popular.map(item => `
        <div class="question-card fade-in">
          <div class="question-meta">
            <span class="tag">پایه ${toPersianNum(item.grade)}</span>
            <span class="tag">${item.subject}</span>
            ${item.hot ? '<span class="tag hot"><i class="fa-solid fa-fire"></i> پرطرفدار</span>' : ''}
          </div>
          <h4>${item.title}</h4>
          <p class="desc">نمونه سؤال ${item.subject} پایه ${toPersianNum(item.grade)} - ${item.type}</p>
          <div class="question-footer">
            <div class="question-stats">
              <span><i class="fa-solid fa-download"></i> ${toPersianNum(item.downloads)}</span>
              <span><i class="fa-solid fa-file-pdf"></i> PDF</span>
            </div>
            <a href="#" class="download-btn" onclick="event.preventDefault(); alert('فایل نمونه به زودی اضافه می‌شود');">
              <i class="fa-solid fa-download"></i> دانلود
            </a>
          </div>
        </div>
      `).join('');
      initScrollAnimations();
    });
  </script>
</body>
</html>
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="جستجوی نمونه سؤالات امتحانی دانش‌آموزان ایران">
  <title>جستجو | نمونه سؤال</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="header" id="header"></header>

  <section class="page-hero">
    <div class="container">
      <h1>جستجوی نمونه سؤال</h1>
      <div class="breadcrumb">
        <a href="index.html">خانه</a>
        <span>/</span>
        <span>جستجو</span>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="search-box">
        <form class="search-form" id="searchForm">
          <input type="text" id="searchInput" placeholder="نام درس یا عنوان سؤال را وارد کنید...">
          <select id="gradeFilter">
            <option value="">همه پایه‌ها</option>
            <option value="7">پایه هفتم</option>
            <option value="8">پایه هشتم</option>
            <option value="9">پایه نهم</option>
            <option value="10">پایه دهم</option>
            <option value="11">پایه یازدهم</option>
            <option value="12">پایه دوازدهم</option>
          </select>
          <select id="subjectFilter">
            <option value="">همه دروس</option>
            <option value="ریاضی">ریاضی</option>
            <option value="علوم">علوم</option>
            <option value="فارسی">فارسی</option>
            <option value="عربی">عربی</option>
            <option value="انگلیسی">انگلیسی</option>
            <option value="فیزیک">فیزیک</option>
            <option value="شیمی">شیمی</option>
            <option value="زیست">زیست</option>
            <option value="تاریخ">تاریخ</option>
            <option value="هندسه">هندسه</option>
            <option value="آمار">آمار</option>
            <option value="فلسفه">فلسفه</option>
          </select>
          <button type="submit"><i class="fa-solid fa-magnifying-glass"></i> جستجو</button>
        </form>
      </div>

      <div class="questions-grid" id="searchResults"></div>
    </div>
  </section>

  <footer class="footer" id="footer"></footer>
  <script src="script.js"></script>
</body>
</html>
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="درباره سایت نمونه سؤال - مرجع سؤالات امتحانی دانش‌آموزان">
  <title>درباره ما | نمونه سؤال</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="header" id="header"></header>

  <section class="page-hero">
    <div class="container">
      <h1>درباره ما</h1>
      <div class="breadcrumb">
        <a href="index.html">خانه</a>
        <span>/</span>
        <span>درباره ما</span>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="about-grid">
        <div class="about-text fade-in">
          <h3>ما کی هستیم؟</h3>
          <p>سایت <strong>نمونه سؤال</strong> یک پلتفرم آموزشی رایگان است که با هدف کمک به دانش‌آموزان سراسر ایران طراحی شده است. ما معتقدیم هر دانش‌آموزی باید به منابع باکیفیت آموزشی دسترسی داشته باشد.</p>
          <p>تیم ما متشکل از معلمان باتجربه، طراحان آموزشی و متخصصان فناوری اطلاعات است که با همکاری یکدیگر، بهترین نمونه سؤالات امتحانی را برای پایه‌های هفتم تا دوازدهم گردآوری و منتشر می‌کنند.</p>
          <p>تمامی سؤالات با دقت انتخاب شده و دارای پاسخ تشریحی هستند تا دانش‌آموزان بتوانند خودشان را بهتر ارزیابی کنند.</p>

          <ul class="features-list">
            <li><i class="fa-solid fa-circle-check"></i> نمونه سؤالات استاندارد و تأیید شده</li>
            <li><i class="fa-solid fa-circle-check"></i> پاسخ‌های تشریحی و آموزشی</li>
            <li><i class="fa-solid fa-circle-check"></i> به‌روزرسانی مداوم محتوا</li>
            <li><i class="fa-solid fa-circle-check"></i> دسترسی رایگان برای همه</li>
            <li><i class="fa-solid fa-circle-check"></i> پشتیبانی ۲۴ ساعته</li>
          </ul>
        </div>

        <div class="fade-in">
          <div class="stats-grid">
            <div class="stat-card">
              <span class="num">۱۱۰۰+</span>
              <span class="label">نمونه سؤال</span>
            </div>
            <div class="stat-card">
              <span class="num">۵۰۰۰۰+</span>
              <span class="label">دانش‌آموز فعال</span>
            </div>
            <div class="stat-card">
              <span class="num">۶</span>
              <span class="label">پایه تحصیلی</span>
            </div>
            <div class="stat-card">
              <span class="num">۲۰+</span>
              <span class="label">درس مختلف</span>
            </div>
          </div>
          <div class="contact-info" style="margin-top: 24px;">
            <h3>ارزش‌های ما</h3>
            <div class="contact-item">
              <i class="fa-solid fa-heart"></i>
              <div class="info">
                <strong>کیفیت</strong>
                <span>ارائه محتوای باکیفیت و استاندارد</span>
              </div>
            </div>
            <div class="contact-item">
              <i class="fa-solid fa-handshake"></i>
              <div class="info">
                <strong>صداقت</strong>
                <span>شفافیت در ارائه خدمات</span>
              </div>
            </div>
            <div class="contact-item">
              <i class="fa-solid fa-users"></i>
              <div class="info">
                <strong>همیاری</strong>
                <span>کمک به موفقیت همه دانش‌آموزان</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer" id="footer"></footer>
  <script src="script.js"></script>
</body>
</html>
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="تماس با سایت نمونه سؤال">
  <title>تماس با ما | نمونه سؤال</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="header" id="header"></header>

  <section class="page-hero">
    <div class="container">
      <h1>تماس با ما</h1>
      <div class="breadcrumb">
        <a href="index.html">خانه</a>
        <span>/</span>
        <span>تماس با ما</span>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="contact-grid">
        <div class="contact-info fade-in">
          <h3>راه‌های ارتباطی</h3>
          <p style="color: var(--text-soft); margin-bottom: 20px;">ما همیشه آماده پاسخگویی به سؤالات و پیشنهادات شما هستیم.</p>
          <div class="contact-item">
            <i class="fa-solid fa-phone"></i>
            <div class="info">
              <strong>تلفن تماس</strong>
              <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
            </div>
          </div>
          <div class="contact-item">
            <i class="fa-solid fa-envelope"></i>
            <div class="info">
              <strong>ایمیل</strong>
              <span>info@schoolpdf.ir</span>
            </div>
          </div>
          <div class="contact-item">
            <i class="fa-solid fa-location-dot"></i>
            <div class="info">
              <strong>آدرس</strong>
              <span>تهران، خیابان ولیعصر، پلاک ۱۲۳</span>
            </div>
          </div>
          <div class="contact-item">
            <i class="fa-solid fa-clock"></i>
            <div class="info">
              <strong>ساعات کاری</strong>
              <span>شنبه تا چهارشنبه - ۹ صبح تا ۶ عصر</span>
            </div>
          </div>
        </div>

        <form class="contact-form fade-in" id="contactForm">
          <h3>ارسال پیام</h3>
          <div class="form-group">
            <label for="name">نام و نام خانوادگی</label>
            <input type="text" id="name" required placeholder="نام خود را وارد کنید">
          </div>
          <div class="form-group">
            <label for="email">ایمیل</label>
            <input type="email" id="email" required placeholder="example@mail.com">
          </div>
          <div class="form-group">
            <label for="subject">موضوع</label>
            <input type="text" id="subject" required placeholder="موضوع پیام">
          </div>
          <div class="form-group">
            <label for="message">پیام شما</label>
            <textarea id="message" required placeholder="متن پیام خود را بنویسید..."></textarea>
          </div>
          <button type="submit" class="btn btn-solid" style="width: 100%; justify-content: center;">
            <i class="fa-solid fa-paper-plane"></i> ارسال پیام
          </button>
        </form>
      </div>
    </div>
  </section>

  <footer class="footer" id="footer"></footer>
  <script src="script.js"></script>
</body>
</html>
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="نمونه سؤالات پایه هفتم - ریاضی، علوم، فارسی و...">
  <title>نمونه سؤال پایه هفتم | نمونه سؤال</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link rel="stylesheet" href="../style.css">
</head>
<body>
  <header class="header" id="header"></header>

  <section class="page-hero">
    <div class="container">
      <h1>نمونه سؤالات پایه هفتم</h1>
      <div class="breadcrumb">
        <a href="../index.html">خانه</a>
        <span>/</span>
        <a href="../index.html#grades">پایه‌ها</a>
        <span>/</span>
        <span>پایه هفتم</span>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head">
        <h2>دروس پایه هفتم</h2>
        <p>روی درس مورد نظر کلیک کنید تا نمونه سؤالات آن را ببینید</p>
      </div>

      <div class="grades-grid">
        <a href="../search.html" class="grade-card fade-in">
          <div class="grade-icon"><i class="fa-solid fa-calculator"></i></div>
          <h3>ریاضی هفتم</h3>
          <p>نوبت اول و دوم</p>
          <span class="count">+۲۵ سؤال</span>
        </a>
        <a href="../search.html" class="grade-card fade-in">
          <div class="grade-icon"><i class="fa-solid fa-flask"></i></div>
          <h3>علوم هفتم</h3>
          <p>فیزیک، شیمی، زیست</p>
          <span class="count">+۳۰ سؤال</span>
        </a>
        <a href="../search.html" class="grade-card fade-in">
          <div class="grade-icon"><i class="fa-solid fa-book-open"></i></div>
          <h3>فارسی هفتم</h3>
          <p>دستور زبان و آرایه</p>
          <span class="count">+۲۰ سؤال</span>
        </a>
        <a href="../search.html" class="grade-card fade-in">
          <div class="grade-icon"><i class="fa-solid fa-mosque"></i></div>
          <h3>عربی هفتم</h3>
          <p>ترجمه و قواعد</p>
          <span class="count">+۱۵ سؤال</span>
        </a>
        <a href="../search.html" class="grade-card fade-in">
          <div class="grade-icon"><i class="fa-solid fa-language"></i></div>
          <h3>انگلیسی هفتم</h3>
          <p>گرامر و لغات</p>
          <span class="count">+۱۵ سؤال</span>
        </a>
        <a href="../search.html" class="grade-card fade-in">
          <div class="grade-icon"><i class="fa-solid fa-earth-americas"></i></div>
          <h3>مطالعات اجتماعی</h3>
          <p>تاریخ، جغرافیا، مدنی</p>
          <span class="count">+۱۵ سؤال</span>
        </a>
      </div>

      <div style="margin-top: 60px;">
        <div class="section-head">
          <h2>جدیدترین نمونه سؤالات</h2>
        </div>
        <div class="questions-grid" id="gradeQuestions"></div>
      </div>
    </div>
  </section>

  <footer class="footer" id="footer"></footer>
  <script src="../script.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const container = document.getElementById('gradeQuestions');
      if (!container) return;
      const questions = sampleData.filter(q => q.grade === '7');
      renderResults(questions, container);
    });
  </script>
</body>
</html>


              <script>
                              /* =========================================
   SchoolPDF - Main JavaScript
   Modular & Clean Code
   ========================================= */

'use strict';

/* ---------- 1. Header & Footer Injection ---------- */
const headerHTML = `
  <div class="container header-inner">
    <a href="index.html" class="logo">
      <i class="fa-solid fa-graduation-cap"></i>
      <span>نمونه سؤال</span>
    </a>
    <nav class="nav" id="mainNav">
      <a href="index.html">خانه</a>
      <a href="search.html">جستجو</a>
      <a href="index.html#grades">پایه‌ها</a>
      <a href="index.html#news">اخبار</a>
      <a href="about.html">درباره ما</a>
      <a href="contact.html">تماس</a>
    </nav>
    <div class="header-actions">
      <button class="icon-btn" id="themeToggle" aria-label="تغییر تم">
        <i class="fa-solid fa-moon"></i>
      </button>
      <button class="icon-btn menu-toggle" id="menuToggle" aria-label="منو">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
  </div>
`;

const mobileNavHTML = `
  <div class="overlay" id="overlay"></div>
  <aside class="mobile-nav" id="mobileNav">
    <div class="mobile-nav-header">
      <span class="logo"><i class="fa-solid fa-graduation-cap"></i> منو</span>
      <button class="icon-btn" id="closeMenu"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <a href="index.html"><i class="fa-solid fa-house"></i> خانه</a>
    <a href="search.html"><i class="fa-solid fa-magnifying-glass"></i> جستجو</a>
    <a href="pages/grade7.html"><i class="fa-solid fa-book"></i> پایه هفتم</a>
    <a href="pages/grade8.html"><i class="fa-solid fa-book"></i> پایه هشتم</a>
    <a href="pages/grade9.html"><i class="fa-solid fa-book"></i> پایه نهم</a>
    <a href="pages/grade10.html"><i class="fa-solid fa-book"></i> پایه دهم</a>
    <a href="pages/grade11.html"><i class="fa-solid fa-book"></i> پایه یازدهم</a>
    <a href="pages/grade12.html"><i class="fa-solid fa-book"></i> پایه دوازدهم</a>
    <a href="about.html"><i class="fa-solid fa-circle-info"></i> درباره ما</a>
    <a href="contact.html"><i class="fa-solid fa-envelope"></i> تماس با ما</a>
  </aside>
`;

const footerHTML = `
  <div class="container">
    <div class="footer-grid">
      <div class="footer-col">
        <h4>درباره نمونه سؤال</h4>
        <p>پلتفرم جامع نمونه سؤالات امتحانی دانش‌آموزان ایران از پایه هفتم تا دوازدهم. هدف ما کمک به یادگیری بهتر و موفقیت تحصیلی شماست.</p>
        <div class="social-links">
          <a href="#" aria-label="اینستاگرام"><i class="fa-brands fa-instagram"></i></a>
          <a href="#" aria-label="تلگرام"><i class="fa-brands fa-telegram"></i></a>
          <a href="#" aria-label="واتساپ"><i class="fa-brands fa-whatsapp"></i></a>
          <a href="#" aria-label="یوتیوب"><i class="fa-brands fa-youtube"></i></a>
        </div>
      </div>
      <div class="footer-col">
        <h4>دسترسی سریع</h4>
        <ul>
          <li><a href="index.html"><i class="fa-solid fa-angle-left"></i> خانه</a></li>
          <li><a href="search.html"><i class="fa-solid fa-angle-left"></i> جستجو</a></li>
          <li><a href="about.html"><i class="fa-solid fa-angle-left"></i> درباره ما</a></li>
          <li><a href="contact.html"><i class="fa-solid fa-angle-left"></i> تماس با ما</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>پایه‌های تحصیلی</h4>
        <ul>
          <li><a href="pages/grade7.html"><i class="fa-solid fa-angle-left"></i> پایه هفتم</a></li>
          <li><a href="pages/grade8.html"><i class="fa-solid fa-angle-left"></i> پایه هشتم</a></li>
          <li><a href="pages/grade9.html"><i class="fa-solid fa-angle-left"></i> پایه نهم</a></li>
          <li><a href="pages/grade10.html"><i class="fa-solid fa-angle-left"></i> پایه دهم</a></li>
          <li><a href="pages/grade11.html"><i class="fa-solid fa-angle-left"></i> پایه یازدهم</a></li>
          <li><a href="pages/grade12.html"><i class="fa-solid fa-angle-left"></i> پایه دوازدهم</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>تماس با ما</h4>
        <ul>
          <li><a href="tel:02112345678"><i class="fa-solid fa-phone"></i> ۰۲۱-۱۲۳۴۵۶۷۸</a></li>
          <li><a href="mailto:info@schoolpdf.ir"><i class="fa-solid fa-envelope"></i> info@schoolpdf.ir</a></li>
          <li><a href="#"><i class="fa-solid fa-location-dot"></i> تهران، ایران</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© ۱۴۰۵ تمامی حقوق برای سایت نمونه سؤال محفوظ است. | طراحی با ❤️ برای دانش‌آموزان ایران</p>
    </div>
  </div>
`;

const backToTopHTML = `
  <button class="back-to-top" id="backToTop" aria-label="بازگشت به بالا">
    <i class="fa-solid fa-arrow-up"></i>
  </button>
`;

function injectLayout() {
  const header = document.getElementById('header');
  const footer = document.getElementById('footer');
  if (header) header.innerHTML = headerHTML;
  if (footer) footer.innerHTML = footerHTML;
  document.body.insertAdjacentHTML('beforeend', mobileNavHTML);
  document.body.insertAdjacentHTML('beforeend', backToTopHTML);
}

/* ---------- 2. Theme Management ---------- */
function initTheme() {
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);

  const btn = document.getElementById('themeToggle');
  if (btn) {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateThemeIcon(next);
    });
  }
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  const icon = btn.querySelector('i');
  if (!icon) return;
  icon.className = theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
}

/* ---------- 3. Mobile Menu ---------- */
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const close = document.getElementById('closeMenu');
  const nav = document.getElementById('mobileNav');
  const overlay = document.getElementById('overlay');

  const openMenu = () => {
    nav.classList.add('open');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  };
  const closeMenu = () => {
    nav.classList.remove('open');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
  };

  if (toggle) toggle.addEventListener('click', openMenu);
  if (close) close.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);
}

/* ---------- 4. Slider ---------- */
function initSlider() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prev = document.querySelector('.slider-arrow.prev');
  const next = document.querySelector('.slider-arrow.next');

  if (slides.length === 0) return;

  let current = 0;
  let interval;

  const show = (idx) => {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[idx].classList.add('active');
    if (dots[idx]) dots[idx].classList.add('active');
    current = idx;
  };

  const nextSlide = () => show((current + 1) % slides.length);
  const prevSlide = () => show((current - 1 + slides.length) % slides.length);

  const startAuto = () => { interval = setInterval(nextSlide, 5000); };
  const stopAuto = () => clearInterval(interval);

  dots.forEach((dot, i) => dot.addEventListener('click', () => { stopAuto(); show(i); startAuto(); }));
  if (next) next.addEventListener('click', () => { stopAuto(); nextSlide(); startAuto(); });
  if (prev) prev.addEventListener('click', () => { stopAuto(); prevSlide(); startAuto(); });

  startAuto();
}

/* ---------- 5. Back to Top ---------- */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 300);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ---------- 6. Fade-in on Scroll ---------- */
function initScrollAnimations() {
  const items = document.querySelectorAll('.fade-in');
  if (items.length === 0) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  items.forEach(el => observer.observe(el));
}

/* ---------- 7. Search Functionality ---------- */
const sampleData = [
  { title: 'نمونه سؤال ریاضی هفتم - نوبت اول', grade: '7', subject: 'ریاضی', type: 'نوبت اول', downloads: 1240, hot: true },
  { title: 'نمونه سؤال علوم هشتم - فصل به فصل', grade: '8', subject: 'علوم', type: 'فصل به فصل', downloads: 890, hot: false },
  { title: 'نمونه سؤال فارسی نهم - با پاسخ تشریحی', grade: '9', subject: 'فارسی', type: 'با پاسخ', downloads: 1560, hot: true },
  { title: 'نمونه سؤال فیزیک دهم - تجربی', grade: '10', subject: 'فیزیک', type: 'تجربی', downloads: 720, hot: false },
  { title: 'نمونه سؤال شیمی یازدهم - ریاضی', grade: '11', subject: 'شیمی', type: 'ریاضی', downloads: 640, hot: false },
  { title: 'نمونه سؤال زیست دوازدهم - کنکوری', grade: '12', subject: 'زیست', type: 'کنکوری', downloads: 2100, hot: true },
  { title: 'نمونه سؤال عربی هفتم - تمام درس‌ها', grade: '7', subject: 'عربی', type: 'کامل', downloads: 540, hot: false },
  { title: 'نمونه سؤال انگلیسی هشتم - گرامر', grade: '8', subject: 'انگلیسی', type: 'گرامر', downloads: 430, hot: false },
  { title: 'نمونه سؤال تاریخ نهم - امتحان نهایی', grade: '9', subject: 'تاریخ', type: 'نهایی', downloads: 380, hot: false },
  { title: 'نمونه سؤال هندسه دهم - با جواب', grade: '10', subject: 'هندسه', type: 'با پاسخ', downloads: 910, hot: true },
  { title: 'نمونه سؤال آمار یازدهم - انسانی', grade: '11', subject: 'آمار', type: 'انسانی', downloads: 290, hot: false },
  { title: 'نمونه سؤال فلسفه دوازدهم - انسانی', grade: '12', subject: 'فلسفه', type: 'انسانی', downloads: 510, hot: false }
];

function initSearch() {
  const form = document.getElementById('searchForm');
  const results = document.getElementById('searchResults');
  if (!form || !results) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    const grade = document.getElementById('gradeFilter').value;
    const subject = document.getElementById('subjectFilter').value;

    const filtered = sampleData.filter(item => {
      const matchQuery = !query || item.title.toLowerCase().includes(query) || item.subject.toLowerCase().includes(query);
      const matchGrade = !grade || item.grade === grade;
      const matchSubject = !subject || item.subject === subject;
      return matchQuery && matchGrade && matchSubject;
    });

    renderResults(filtered, results);
  });

  // Initial render
  renderResults(sampleData, results);
}

function renderResults(items, container) {
  if (items.length === 0) {
    container.innerHTML = '<p class="text-center" style="padding:40px;color:var(--text-soft);">نتیجه‌ای یافت نشد.</p>';
    return;
  }
  container.innerHTML = items.map(item => `
    <div class="question-card">
      <div class="question-meta">
        <span class="tag">پایه ${toPersianNum(item.grade)}</span>
        <span class="tag">${item.subject}</span>
        ${item.hot ? '<span class="tag hot"><i class="fa-solid fa-fire"></i> پرطرفدار</span>' : ''}
      </div>
      <h4>${item.title}</h4>
      <p class="desc">نمونه سؤال ${item.subject} پایه ${toPersianNum(item.grade)} - ${item.type}</p>
      <div class="question-footer">
        <div class="question-stats">
          <span><i class="fa-solid fa-download"></i> ${toPersianNum(item.downloads)}</span>
          <span><i class="fa-solid fa-file-pdf"></i> PDF</span>
        </div>
        <a href="#" class="download-btn" onclick="event.preventDefault(); alert('فایل نمونه به زودی اضافه می‌شود');">
          <i class="fa-solid fa-download"></i> دانلود
        </a>
      </div>
    </div>
  `).join('');
}

function toPersianNum(num) {
  const persian = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return String(num).replace(/\d/g, d => persian[d]);
}

/* ---------- 8. Contact Form ---------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('پیام شما با موفقیت ارسال شد. به زودی با شما تماس می‌گیریم.');
    form.reset();
  });
}

/* ---------- 9. Active Nav Link ---------- */
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#mainNav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ---------- 10. Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  injectLayout();
  initTheme();
  initMobileMenu();
  initSlider();
  initBackToTop();
  initScrollAnimations();
  initSearch();
  initContactForm();
  setActiveNav();
});


              </script>
                        </body>
                        </html>
                    
