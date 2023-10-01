// Function to open the correct link based on the platform
function openLink(platform) {
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
        case 'PayPal/Donation':
            link = 'https://paypal.me/sentralt';
            break;
        default:
            link = '#'; // Default case
    }
    window.open(link, '_blank');
}

// Add event listeners to all social media icons
document.querySelectorAll('.social-info').forEach((element) => {
    element.addEventListener('click', () => {
        const platform = element.querySelector('h2').innerText;
        openLink(platform);
    });

    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = 'rgba(66, 134, 244, 0.3)';
    });

    element.addEventListener('mouseout', () => {
        element.style.backgroundColor = 'transparent';
    });
// Function to open the correct link based on the platform
function openLink(platform) {
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
        case 'PayPal/Donation':
            link = 'https://paypal.me/sentralt';
            break;
        default:
            link = '#'; // Default case
    }
    window.open(link, '_blank');
}

// Add event listeners to all social media icons
document.querySelectorAll('.social-info').forEach((element) => {
    element.addEventListener('click', () => {
        const platform = element.querySelector('h2').innerText;
        openLink(platform);
    });

    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = 'rgba(66, 134, 244, 0.3)';
    });

    element.addEventListener('mouseout', () => {
        element.style.backgroundColor = 'transparent';
    });
 // Function to handle Vipps click
 <script>
    function openVipps() {
        const vippURL = `vipps://vipp?amount=0&receiverId=40886048`;
        window.location.href = vippURL;
    }

    // Add event listener for Vipps
    document.querySelector('.social-info h2:nth-child(6)').addEventListener('click', () => {
        openVipps();
    });
</script>
