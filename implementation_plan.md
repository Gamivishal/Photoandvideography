# Form Validation, Date Availability & Field Adjustments

This implementation plan outlines the changes to enable robust client-side validation, visual error highlighting, date availability validation, and field adjustments for both the **Contact Us** form (`contact/index.html`) and the **Book Now** form (`book-now/index.html`).

## User Review Required

No breaking changes are anticipated. This enhancement will ensure that:
1. Submitting either form with empty compulsory fields will block submission and show validation error messages.
2. **For Book Now Form**:
   - The **Partner's Name** field is removed.
   - The **Your Name** field is styled to be full-width.
   - **Event Date** and **Event City** are now compulsory fields (indicated by a `*` and enforced by JS).
3. If a customer selects an unavailable date (dates with 2 or more orders already booked), a validation error is displayed: *"This date is fully booked (max 2 bookings per day). Please choose another date."*
4. Visual cues (red borders and shadow glows) indicate which fields are invalid.
5. JavaScript crashes on the homepage and other sub-pages are resolved.

---

## Proposed Changes

### 1. Date Availability Logic

We will define a set of pre-booked dates with 2 orders (fully booked).
Mock fully booked dates for testing:
- `2026-06-15` (June 15, 2026)
- `2026-07-01` (July 1, 2026)
- `2026-12-25` (December 25, 2026)

If a user selects any of these dates, validation fails and reports that the date is fully booked. We will add hint text next to the Date labels so the user knows which dates are fully booked for testing.

### 2. JavaScript Logic

#### [MODIFY] [main.js](file:///c:/Users/Admin/source/repos/Photoandvideography/js/main.js)
- Guard `updatePackageOptions()` against null checks for `categorySelect`, `packageSelect`, and `packageWrapper` to prevent script execution crashes on pages without the contact form.
- Update the Contact Form validation:
  - Add validation for the Event Date check against the mock fully booked dates.
  - Show validation error if the selected date matches a fully booked date.

#### [MODIFY] [book-now/index.html](file:///c:/Users/Admin/source/repos/Photoandvideography/book-now/index.html)
- Remove the **Partner's Name** form-group.
- Make the **Your Name** form-group full-width by placing it in its own full-width row instead of a split two-column row.
- Remove references to `bookPartner` and `partnerName` in the JavaScript validation and submission code.
- Add validation for:
  - **Event Date**: Check if it's empty (required). If chosen, check it against the mock fully booked dates (showing `#bookDateError`).
  - **Event City**: Check if it's empty (required, showing `#bookCityError`).

### 3. Styles

#### [MODIFY] [pages.css](file:///c:/Users/Admin/source/repos/Photoandvideography/css/pages.css)
- Add `.form-control.error:focus` style rule to preserve the red border and shadow outline when an invalid input is focused in the **Book Now** form.

#### [MODIFY] [contact/index.html](file:///c:/Users/Admin/source/repos/Photoandvideography/contact/index.html)
- Add inline CSS rules for `.contact-form-container .form-control.error` and `.contact-form-container .form-control.error:focus` in the `<style>` block to override the high-specificity default form control styles.
- Add `<div class="field-error" id="eventDateError" aria-live="polite"></div>` under the date field.
- Add a helper text span inside the `<label for="eventDate">` tag to list the mock fully booked dates for easy testing.

---

## Verification Plan

### Automated Tests
- Run `npm run lint` to verify that there are no syntax or style violations in our modified JavaScript files.

### Manual Verification
1. Navigate to the **Contact Us** page (`/contact/index.html`).
2. Without entering any information, click **Send Enquiry** and verify validation errors appear.
3. Enter correct name and email, choose a category, and select `2026-06-15` or `2026-07-01` as the Event Date. Click **Send Enquiry**.
4. Verify that the date field shows the red border and the error message *"This date is fully booked (max 2 bookings per day). Please choose another date."*.
5. Navigate to the **Book Now** page (`/book-now/index.html`).
6. Verify that:
   - The **Partner's Name** field is removed and **Your Name** is full-width.
   - **Event Date** and **Event City** have `*` next to their labels.
7. Click **Book Now** with all fields empty, and verify that Name, Email, Phone, Event Date, Event City, and Category show validation errors.
8. Fill in Name, Email, Phone, Category, and City, select `2026-06-15` as the Event Date, and click **Book Now**. Verify that the date-unavailable error blocks submission.
9. Inspect the console on the home page and other sub-pages to verify that the JS loads cleanly without any crashes.
