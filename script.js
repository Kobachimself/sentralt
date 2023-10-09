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
            link = 'https://www.facebook.com/ytsentralt';
            break;
        case 'Instagram':
            link = 'https://www.instagram.com/ytsentralt';
            break;
        case 'PayPal':
            link = 'https://paypal.me/sentralt';
            break;
        case 'Vipps':
            openVipps();
            return; // Stop here to prevent opening a new tab
        case 'More':
            link = 'socials-update.html';  // Change this to the desired page
            break;
        default:
            link = '#'; // Default case
    }

    window.open(link, '_blank');  // Open in a new tab
}

function openVipps() {
    const vippURL = 'vipps://vipp?amount=0&receiverId=40886048';
    window.location.href = vippURL;
}

// Rest of the script remains the same
