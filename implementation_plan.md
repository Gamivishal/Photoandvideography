# Implementation Plan — Mobile, Tablet, & PC Responsiveness & Horizontal Scroll Removal

This plan outlines the changes to establish full responsiveness on Mobile, Tablet, and PC, and to eliminate the horizontal scroll (left-right slide) issue. 

## User Review Required

### Navigation Breakpoint Change
The mobile hamburger menu breakpoint will be increased from `768px` to `1024px`. This ensures that on tablets (such as iPads) and smaller laptops, the desktop menu links (which overflow and cause horizontal scrolling) are hidden, and a clean hamburger menu is displayed instead.

## Proposed Changes

### 1. Global Horizontal Overflow Fix
- Enable `overflow-x: hidden;` on the `html` element to ensure mobile/tablet browsers do not allow any accidental horizontal scroll/slide when elements stretch.

### 2. Navbar & Header Responsiveness Breakpoint adjustment

#### [MODIFY] [style.css](file:///c:/Users/Admin/source/repos/Photoandvideography/css/style.css)
- Add `overflow-x: hidden;` to `html`.
- Move the navbar responsiveness rules (hiding `.nav-links`, showing `.nav-toggle`, styling `.btn-book`, and mobile `.nav-links.open` styles) from the `@media (max-width: 768px)` query to `@media (max-width: 1024px)`.
- Keep layout grid rules in `@media (max-width: 768px)` or other queries as appropriate.

### 3. Sub-page Grid Responsiveness

#### [MODIFY] [pages.css](file:///c:/Users/Admin/source/repos/Photoandvideography/css/pages.css)
- Append new media queries to handle the sub-page grid styling so that it stacks beautifully and doesn't squish or overflow on tablet and mobile screens.
- **Grids to update**:
  - `.about-grid` & `.service-detail-card`: Stack to 1 column at `900px`. Reset the alternating `direction: rtl` style on mobile.
  - `.team-grid` & `.product-showcase` & `.video-grid` & `.blog-grid`: Stack to 2 columns at `900px` and 1 column at `600px`.
  - `.packages-grid` & `.industries-grid` & `.locations-grid`: Stack to 2 columns at `1024px` and 1 column at `768px` (or `600px`).
  - `.contact-grid`: Stack to 1 column at `900px` with adjusted gap.
  - `.form-row`: Stack to 1 column at `600px`.

### 4. Remove Inline Grid Styling

#### [MODIFY] [index.html (wedding-photography)](file:///c:/Users/Admin/source/repos/Photoandvideography/wedding-photography/index.html)
- Remove `style="grid-template-columns: repeat(3, 1fr);"` from the `services-grid` wrapper (around line 150) so the grid can fall back to standard CSS responsiveness rules.

---

## Verification Plan

### Manual Verification
1. Open the website on desktop, resize the window down to tablet width (e.g. 768px - 1024px), and check that:
   - The hamburger menu is shown instead of the overflowing desktop nav links.
   - There is no horizontal scrollbar or left-right scroll/slide.
2. Shrink down to mobile width (<768px) and check that:
   - All grids (Services, Team, About, Packages, Locations, Blog, Showcase, etc.) stack cleanly into 1 or 2 columns and fit the screen width.
   - The booking forms on the contact page and booking page stack their fields correctly without horizontal clipping.
3. Test navigation pages (About Us, Services, Portfolio, Pre-wedding, Wedding, Drone, Contact, Book Now) on simulated mobile/tablet viewports to verify all grids are responsive.
