# 🛠️ JHB NORTH PLUMBING WEBSITE

## ST10496279-GRP1-WEDE5020W-POE

---

## 1. Student Information

* **Name:** Taite Perumal
* **Student Number:** ST10496279
* **Module:** WEDE5020W (Web Development Introduction)
* **Assessment:** Part 1,2,3 of my Web Development POE.

---

## 2. Project Overview & Goals

This project represents a fully responsive website built for **JHB North Plumbing**, a long-standing plumbing business in Johannesburg North.

### Website Goals
* Showcase the full range of services offered.
* Provide authentic client testimonials (`client-feedback.html`).
* Offer clear contact details and location (`contact.html`).
* Build trust with potential clients through a professional online presence.

---

## 3. Sitemap

The project consists of five primary HTML pages:

* `index.html` (Home)
* `about.html` (About Us)
* `services.html` (Our Services)
* `client-feedback.html` (Client Feedback)
* `contact.html` (Contact Us)

---

## 4. Key Features & Styling 🎨

This site uses **HTML5** for structure, **CSS3** for styling, and **JavaScript (jQuery)** for interactivity.

### Layout & Structure (CSS Grid & Flexbox)

* **Header Navigation:** Styled using **Flexbox**.
* **History Section (`about.html`):** Uses **CSS Grid** for a responsive text and image layout.
* **Services Page (`services.html`):** Uses **CSS Grid** for the main service item cards.
* **Contact Page (`contact.html`):** Uses **CSS Grid** to separate contact details and the form.
* **Helpful Tips (`about.html`):** Uses **CSS Grid** for the 4 tip cards.
* **Image Gallery (`index.html`):** Uses **Flexbox** for home page image grouping.
* **Responsiveness:** Implemented comprehensive **media queries** for full adaptability across devices.

### Decoration & Typography

* **Color Scheme:** Blue (`--primary`), gold (`--secondary`), and white for a professional look.
* **Headings:** New, consistent styling for all main section headings (`main h2`).
* **Client Sections:** Testimonial and Tip cards use strong visual accents (e.g., gold `border-left`) and include box shadows and hover effects.
* **Decoration:** Includes rounded corners, box shadows, and a sticky header/styled footer.

---

## 5. CSS Sitemap / Style Guide

This outlines the main sections of the `style.css` file:

1.  **Global Styles:** `:root` variables, `body` reset, and consistent `main h2` styling.
2.  **Header:** `header`, `.logo img`, `nav` (Flexbox).
3.  **Hero / Main Title:** `.Home-page h1` styling.
4.  **Content Container:** `.Content-container` max width and padding.
5.  **History Section:** `.history-section` (Grid layout), text, and images.
6.  **Services & Gallery Layouts:** `.service-grid` (Grid) and `.plumbers-gallery .gallery-images` (Flexbox).
7.  **Client Feedback:** `.testimonial-card` styling.
8.  **About Us - Helpful Tips:** `.helpful-tips-section` and `.tips-grid` (Grid layout) with `.tip-card` styling.
9.  **Footer:** `footer` background and text.
10. **Responsive Design:** All `@media` queries.

---

## 6. Changelog

This is a record of key development commits and changes made throughout the project.

1.  **[2025-10-02] Feature Implementation & Refinement**
    * **Implemented professional card layouts** for key client sections (FEAT).
        * Enhanced the 'Client-feedback.html' page by wrapping testimonials in the `.testimonial-card` style.
        * Implemented the **CSS Grid layout for the 'Quick Plumbing Tips'** on 'about.html', styling each tip as a distinct card with hover effects.
        * Added consistent global styling for all `<h2>` section headings.

2.  **[2025-09-29] Semantic & Layout Implementation**
    * Implemented semantic HTML structure (using `<section>` tags) across all pages.
    * Added a Call-to-Action (CTA) button on 'index.html' and removed default text-decoration.
    * Implemented **CSS Grid and Flexbox layouts** on 'services.html' and the 'index.html' gallery.
    * Corrected semantic structure of 'about.html' by moving all content inside `<main>` and correcting footer placement.
    * Added a new 'Helpful Tips' section with a CSS Grid layout to 'about.html'.
    * Fixed minor layout issues (margin collapse) on global body/content containers.

3.  **[2025-09-28] Initial Setup & Git Management**
    * Fixed merge conflicts in Git repository.
    * Updated History section images and text in CSS.

4.  **[2025-09-27] Initial Structure**
    * Created initial project structure (header, hero, content, and footer sections).
    * Added navigation menu and linked all pages.
    * Organized files into `css/`, `js/`, and `images/`.

---

## 7. References

* **Images:** Sourced from [Unsplash](https://unsplash.com) and [Pexels](https://pexels.com) (royalty-free).
* **Documentation:**
    * MDN Web Docs, 2025. HTML & CSS.
    * W3Schools, 2025. HTML & CSS Tutorial.
* **Layout Guidance:**
    * CSS Tricks, 2025. A Complete Guide to Flexbox.
    * CSS Tricks, 2025. A Complete Guide to Grid.
* **Community:**
    * Stack Overflow, 2025.