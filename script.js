function hoverEffect(element) {
  element.style.backgroundColor = 'rgba(66, 134, 244, 0.3)';
}
function goBack() {
  window.history.back();
}
function removeHoverEffect(element) {
  element.style.backgroundColor = 'transparent';
}

function openVipps() {
  const vippURL = 'vipps://vipp?amount=0&receiverId=40886048';
  window.location.href = vippURL;
}

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
            // Open YouTube app on mobile
            link = isMobileDevice() ? 'vnd.youtube://www.youtube.com/channel/UCpawSZMyYJ3T3HR5I8yg33oQ' : 'https://www.youtube.com/channel/UCpawSZMyYJ3T3HR5I8yg33oQ';
            break;
        case 'Facebook':
            // Redirect to the profile
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

function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

  if (platform === 'More') {
    link = 'socials-update.html';  // Change this to the desired page
  }

  window.open(link, '_blank');  // Open in a new tab
}

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
