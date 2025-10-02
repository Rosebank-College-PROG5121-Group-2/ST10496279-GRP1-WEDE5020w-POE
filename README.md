# JHB NORTH PLUMBING WEBSITE
## ST10496279-GRP1-WEDE5020W-POE

## Changelog

1 [2025-10-02]
- **Implemented professional card layouts for key client sections (FEAT)**.
    - Enhanced the 'Client-feedback.html' page by wrapping testimonials in the `.testimonial-card` style for a modern, box-like look.
    - Implemented the **CSS Grid layout for the 'Quick Plumbing Tips'** on 'about.html', styling each tip as a distinct card with hover effects.
    - Added consistent global styling for all `<h2>` section headings.

1 [2025-09-29]
- Implemented semantic HTML structure (using <section> tags) across all pages.
- Added a Call-to-Action (CTA) button on 'index.html' and removed the default text-decoration (underline).
- Implemented CSS Grid and Flexbox layouts on 'services.html' and the 'index.html' gallery.
- Corrected semantic structure of 'about.html' by moving all content inside <main> and corrected footer placement.
- Added a new 'Helpful Tips' section with a CSS Grid layout to 'about.html'.
- Fixed minor layout issues (margin collapse) on global body/content containers.

1 [2025-09-29]
- Added CSS sitemap section to README
- Updated README formatting

1[2025-09-28]
- Fixed merge conflicts in Git repository
- Updated History section images and text in CSS

1 [2025-09-27]
- Created initial project structure
- Added header, hero, content, and footer sections in HTML and CSS

1

1. Student Info

- Name: Taite Perumal
- Student Number: ST10496279

1. Project Overview
   This is Part 1 of my Web Development POE.  
   The website is built for JHB North Plumbing, a plumbing business in Johannesburg North.  
   It showcases services, client feedback, and provides an easy way to contact the business.

1. Website Goals

- Showcase services offered
- Provide client testimonials
- Offer contact details and location
- Build trust with potential clients

1. Sitemap

- index.html (Home)
- about.html (About Us)
- services.html (Our Services)
- client-feedback.html (Client Feedback)
- contact.html (Contact Us)

1. Changelog

-  Initial HTML structure created
-  Added navigation menu and linked all pages
-  Organised files into css/, js/, images/
-  Added comments for readability
-  Updated image paths and added alt text
-  Initial HTML structure created
-  Added navigation menu and linked all pages
-  Organised files into css/, js/, images/
-   bAdded comments for readability
-  Updated image paths and added alt text

1. References

- Images sourced from [Unsplash](https://unsplash.com) and [Pexels](https://pexels.com) (royalty-free).


Part 2 css & styling
This is a responsive website for JHB North Plumbing, created using HTML and CSS.

Features

Layout:

Header navigation styled with Flexbox.

History section uses CSS Grid for text and images.

Services page uses CSS Grid for the service item cards.

Contact page uses CSS Grid to separate details and form.

Media queries for responsive design.

Typography:

Headings styled with different sizes and colors for hierarchy. **Now includes custom styling for all H2 section headings.**

Body text is 17px, justified, with line-height for readability.

Decoration:

Blue, gold, and white color scheme for a professional look.

Box shadows, rounded corners, and hover effects.

Sticky header and styled footer.


Sitemap: 

1. Global Styles

:root : color variables primary,secondary, light, text-dark

body: base font, background, text color, spacing, margin: 0 reset

**main h2: New consistent styling for main section headings.**

2. Header

header : flex layout, sticky, shadow, padding

.logo img - logo sizing

nav - flex navigation container

nav a - link styles (padding, font, transition)

nav a:hover - hover effect gold background, black text

3. Hero / Main Title

.Home-page h1 large bold centered title, uppercase, navy color

4. Content Container

.Content-container max width, padding, centered layout

5. History Section

.history-section  grid, background, border-left accent, shadow

.history-section .text h2  subsection heading

.history-section .text p  justified paragraph text

.history-section .images  grid for images

.history-section .images img  rounded, shadow, hover zoom

6. Services & Gallery Layouts

.service-grid - CSS Grid layout for service items (primary layout)

.plumbers-gallery .gallery-images - Flexbox layout for home page image grouping

7. Client Feedback

.testimonial-card - styled background and gold border-left accent. **Now applied to all testimonials on client-feedback.html.**

8. About Us - Helpful Tips

.helpful-tips-section - gold accent border (border-left), light background, padding.

.tips-grid - CSS Grid layout for 4 tip cards.

.tip-card - white background, shadow, hover effect. **Styling and hover effect added.**

.cta-tip - centered button for tips section

9. Footer

footer  navy background, white text, centered, padding

10. Responsive Design 

.history-section  single column layout, smaller padding

.history-section .images  stacked images

nav reduced gap and font size

nav a smaller padding

## References

- Images sourced from [Unsplash](https://unsplash.com) and [Pexels](https://pexels.com) (royalty-free).
- MDN Web Docs, 2025. HTML. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/HTML> [Accessed 29 September 2025].
- MDN Web Docs, 2025. CSS. [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/CSS> [Accessed 29 September 2025].
- W3Schools, 2025. HTML & CSS Tutorial. [online] Available at: <https://www.w3schools.com/> [Accessed 29 September 2025].
- CSS Tricks, 2025. A Complete Guide to Flexbox. [online] Available at: <https://css- tricks.com/snippets/css/a-guide-to-flexbox/> [Accessed 29 September 2025].
- CSS Tricks, 2025. A Complete Guide to Grid. [online] Available at: <https://css-tricks.com/snippets/css/complete-guide-grid/> [Accessed 29 September 2025].
- Stack Overflow, 2025. [online] Available at: <https://stackoverflow.com/> [Accessed 29 September 2025].