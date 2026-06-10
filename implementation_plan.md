# Implementation Plan — Mobile Navigation Sidebar Drawer & Toggleable Sub-menus

This plan outlines the changes to implement a sliding sidebar menu (drawer) from the left side on mobile/tablet devices, add toggleable dropdown sub-menus, and ensure the drawer closes automatically when links are clicked.

## Proposed Changes

### 1. Left-Side Sliding Drawer Menu & Toggle Sub-menus

#### [MODIFY] [style.css](file:///c:/Users/Admin/source/repos/Photoandvideography/css/style.css)
- Add styling for the `.nav-overlay` element (dark backdrop backdrop-filter blur) which will cover the rest of the screen when the sidebar is open.
- Refactor the `@media (max-width: 1024px)` media query:
  - Position `.nav-links` as a fixed panel on the left side: `position: fixed; top: 0; left: -320px; width: 300px; height: 100vh;` with a smooth transition on the `left` property.
  - Show `.nav-links` sliding to `left: 0` when the class `.nav-links.open` is active.
  - Re-style the links to align to the left inside the sidebar drawer.
  - Hide the `.nav-dropdown` nested list inside `.nav-links` on mobile/tablet views by default, using `max-height: 0` and `overflow: hidden`.
  - When `.nav-dropdown.active` is toggled, animate it open with a smooth max-height transition.

### 2. JavaScript Toggle and Auto-Close Logic

#### [MODIFY] [main.js](file:///c:/Users/Admin/source/repos/Photoandvideography/js/main.js)
- Dynamically create a `<div class="nav-overlay" id="navOverlay"></div>` element on the page if it doesn't already exist.
- When `navToggle` is clicked, toggle the `.open` class on `navLinks` and the `.active` class on the `navOverlay`.
- Add a click event listener on the `navOverlay` to close the menu when the user clicks outside.
- Prevent default navigation and toggle the `.active` sub-menu when clicking on parent dropdown links (like "Services") on mobile views (`max-width: 1024px`).
- Ensure clicking on any standard link (like Home, About, Portfolio, or nested service sub-links) closes the drawer menu and overlay immediately.

---

## Verification Plan

### Manual Verification
1. Resize screen to tablet/mobile view (< 1024px).
2. Click the hamburger "three line" toggle button.
3. Verify that the menu slides in smoothly from the **left** side of the screen, and a dark blurred overlay backdrop appears behind it.
4. Click on the background overlay backdrop; verify that the drawer menu slides back to the left (closes) and the backdrop disappears.
5. Open the drawer, click on the **Services** link. Verify that it expands the sub-menu dropdown (Wedding Photography, Pre-Wedding, etc.) showing all options with an arrow change (▾ to ▴), and does *not* close the drawer or navigate away.
6. Click on a specific service (e.g. "Wedding Photography") or any other main link (e.g. "About"). Verify that the menu closes automatically and navigates to the requested page.
