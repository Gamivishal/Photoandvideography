(function () {
  // Determine if we are at root or in a subfolder based on path depth
  const pathDepth = window.location.pathname.split('/').filter(p => p.length > 0 && !p.endsWith('.html')).length;
  const isSubPage = pathDepth > 0;

  // Base URL resolution
  const root = isSubPage ? '../' : './';

  const footerHTML = `
  <footer class="footer" id="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">Yash Raj Motion Picture</div>
          <p>Capturing love stories across Gujarat and India.</p>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="${root}">Home</a></li>
            <li><a href="${root}about/">About</a></li>
            <li><a href="${root}portfolio/">Portfolio</a></li>
            <li><a href="${root}packages/">Packages</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="${root}wedding-photography/">Wedding</a></li>
            <li><a href="${root}pre-wedding/">Pre-Wedding</a></li>
            <li><a href="${root}corporate-events/">Corporate</a></li>
            <li><a href="${root}drone-photography/">Drone</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <ul class="footer-contact">
            <li>📍 Ahmedabad, Gujarat 380015</li>
            <li>📞 <a href="tel:+919876543210">+91 98765 43210</a></li>
            <li>💬 <a href="https://wa.me/919876543210" target="_blank" rel="noopener">WhatsApp Us</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 Yash Raj Motion Picture. All rights reserved.</p>
      </div>
    </div>
  </footer>
  `;
  document.write(footerHTML);
})();
