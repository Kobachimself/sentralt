function toggleSocialMediaIcons() {
    const socialMediaIcons = document.getElementById('social-media-icons');
    socialMediaIcons.style.display = (socialMediaIcons.style.display === 'block') ? 'none' : 'block';
}
// Legg til event listeners for klikkfunksjonalitet
document.querySelectorAll('.social-info').forEach((element) => {
    element.addEventListener('click', () => {
        // Hent lenken fra det første ankerelementet i elementet som ble klikket
        const link = element.querySelector('a').getAttribute('href');
        // Åpne lenken i ny fane
        window.open(link, '_blank');
    });
});
