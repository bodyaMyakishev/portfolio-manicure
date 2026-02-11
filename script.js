/* ══════════════════════════════════════
   NailSilk Studio — Script
   Phone mask + basic form validation
   ══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.getElementById('phone');
    const form = document.getElementById('bookingForm');

    // ── Phone mask: +7 (___) ___-__-__ ──
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            let digits = e.target.value.replace(/\D/g, '');

            // Always start with 7
            if (digits.length === 0) {
                e.target.value = '';
                return;
            }

            if (digits[0] === '8') digits = '7' + digits.slice(1);
            if (digits[0] !== '7') digits = '7' + digits;

            // Limit to 11 digits (7 + 10)
            digits = digits.slice(0, 11);

            let formatted = '+7';
            if (digits.length > 1) formatted += ' (' + digits.slice(1, 4);
            if (digits.length >= 4) formatted += ') ';
            if (digits.length > 4) formatted += digits.slice(4, 7);
            if (digits.length > 7) formatted += '-' + digits.slice(7, 9);
            if (digits.length > 9) formatted += '-' + digits.slice(9, 11);

            e.target.value = formatted;
        });

        // Prepopulate +7 on focus
        phoneInput.addEventListener('focus', () => {
            if (!phoneInput.value) phoneInput.value = '+7';
        });
    }

    // ── Smooth scroll for anchor links ──
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
