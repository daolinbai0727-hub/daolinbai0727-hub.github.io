/* All navigation, PDF links, and abstracts also work without JavaScript. */
for (const button of document.querySelectorAll('[data-copy-email]')) {
  if (!navigator.clipboard?.writeText) continue;
  button.hidden = false;
  button.addEventListener('click', async () => {
    const label = button.querySelector('[data-copy-label]');
    const status = document.getElementById('copy-status');
    try {
      await navigator.clipboard.writeText(button.dataset.copyEmail);
      label.textContent = 'Email copied';
      status.textContent = 'Email address copied to your clipboard.';
    } catch {
      label.textContent = 'Copy unavailable';
      status.textContent = 'Please copy the email address shown in the contact section.';
    }
  });
}
