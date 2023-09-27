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
// Finn riktig lenke basert på hvilken sosial medieknapp som blir klikket
function openSocialMediaLink(platform) {
    let link;
    switch (platform) {
        case 'Twitter':
            link = 'https://twitter.com/ytsentralt';
            break;
        case 'Twitch':
            link = 'https://www.twitch.tv/ytsentralt';
            break;
        case 'YouTube':
            link = 'https://www.youtube.com/@sentralt';
            break;
        case 'Facebook':
            link = 'https://www.facebook.com/profile/ytsentralt';
            break;
        case 'Instagram':
            link = 'https://www.instagram.com/sentralt.07/';
            break;
        default:
            link = '#'; // Default case
    }
    window.open(link, '_blank');
}

// Legg til event listeners for klikkfunksjonalitet
document.querySelectorAll('.social-info').forEach((element) => {
    element.addEventListener('click', () => {
        const platform = element.querySelector('h2').innerText;
        openSocialMediaLink(platform);
    });
});
