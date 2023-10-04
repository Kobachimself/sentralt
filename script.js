<script>
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
                link = 'https://www.youtube.com/channel/UCpawSZMyYJ3T3HR5I8yg33oQ';
                break;
            case 'Facebook':
                link = 'https://www.facebook.com/profile/ytsentralt';
                break;
            case 'Instagram':
                link = 'https://www.instagram.com/sentralt.07/';
                break;
            case 'PayPal':
                link = 'https://paypal.me/sentralt';
                break;
            case 'Vipps':
                const vippURL = 'vipps://vipp?amount=0&receiverId=40886048';
                window.location.href = vippURL;
                return; // Stop here to prevent opening a new tab
            default:
                link = '#'; // Default case
        }

        if (platform === 'More') {
            link = 'socials.html';  // Change this to the desired page
        }

        window.open(link, '_blank');  // Open in a new tab
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
    });
</script>
