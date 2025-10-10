// Section Switching
const sectionButtons = document.querySelectorAll('.section-btn');
const sections = document.querySelectorAll('.section-content');

sectionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        sectionButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const targetSection = btn.getAttribute('data-section');
        sections.forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(targetSection).classList.add('active');
    });
});

// AI Mode Switching
const modeButtons = document.querySelectorAll('.mode-btn');
modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        modeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// Chat Functionality
const chatInput = document.querySelector('.chat-text');
const sendBtn = document.querySelector('.send-btn');
const chatMessages = document.querySelector('.chat-messages');

function addMessage(content, isAI = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    messageDiv.innerHTML = `
        <div class="message-avatar">${isAI ? '🤖' : '👤'}</div>
        <div class="message-content">
            <p>${content}</p>
        </div>
    `;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

sendBtn.addEventListener('click', () => {
    const text = chatInput.value.trim();
    if (text) {
        addMessage(text);
        chatInput.value = '';
        // Simulate AI response
        setTimeout(() => {
            const responses = [
                "Great question! Let me break it down for you...",
                "That's a tricky one! Here's how I think about it:",
                "Awesome! Let's dive deep into this topic.",
                "Nice! I love explaining this. Here's the key points:"
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            addMessage(randomResponse, true);
        }, 1000);
    }
});

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendBtn.click();
    }
});

// Sample Prompts
const promptButtons = document.querySelectorAll('.prompt-btn');
promptButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        chatInput.value = btn.textContent.replace(/^[^\s]+/, '').trim();
        chatInput.focus();
    });
});

// Feed Animation
const postCards = document.querySelectorAll('.post-card');
postCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    card.classList.add('fade-in');
});

// Feed Filters
const filterButtons = document.querySelectorAll('.filter-btn');
const posts = document.querySelectorAll('.post-card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.textContent.toLowerCase();
        let className = '';
        switch(filter) {
            case 'all':
                className = 'all';
                break;
            case 'study groups':
                className = 'group-post';
                break;
            case 'achievements':
                className = 'achievement-post';
                break;
            case 'resources':
                className = 'resource-post';
                break;
            case 'videos':
                className = 'video-post';
                break;
            case 'memes':
                className = 'meme-post';
                break;
            default:
                className = filter + '-post';
        }
        posts.forEach(post => {
            if (filter === 'all') {
                post.style.display = 'block';
            } else if (post.classList.contains(className)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    });
});

// Like Buttons
const likeButtons = document.querySelectorAll('.like-btn');
likeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const currentLikes = parseInt(btn.getAttribute('data-likes'));
        const newLikes = currentLikes + 1;
        btn.setAttribute('data-likes', newLikes);
        btn.textContent = `👍 ${newLikes}`;
    });
});

// Comment Buttons
const commentButtons = document.querySelectorAll('.comment-btn');
commentButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const currentComments = parseInt(btn.textContent.split(' ')[1]);
        const newComments = currentComments + 1;
        btn.textContent = `💬 ${newComments}`;
    });
});

// Share Buttons
const shareButtons = document.querySelectorAll('.share-btn');
shareButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const currentShares = parseInt(btn.textContent.split(' ')[1]);
        const newShares = currentShares + 1;
        btn.textContent = `🔄 ${newShares}`;
    });
});

// Action Buttons Animation
const actionButtons = document.querySelectorAll('.action-btn');
actionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.style.transform = 'scale(1.1)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 150);
    });
});

// Navbar Buttons
const navButtons = document.querySelectorAll('.nav-btn');
navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        navButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// User Dropdown
const avatarBtn = document.getElementById('avatar-btn');
const userDropdown = document.getElementById('user-dropdown');

avatarBtn.addEventListener('click', () => {
    userDropdown.classList.toggle('show');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!avatarBtn.contains(e.target) && !userDropdown.contains(e.target)) {
        userDropdown.classList.remove('show');
    }
});

// Notification Button
const notificationBtn = document.querySelector('.notification-btn');
notificationBtn.addEventListener('click', () => {
    alert('Opening Notifications! 🔔');
    userDropdown.classList.remove('show');
});

// Dashboard Button
const dashboardBtn = document.querySelector('.dashboard-btn');
dashboardBtn.addEventListener('click', () => {
    window.location.href = '../dashboard/dashboard.html';
});

// Settings Button
const settingsBtn = document.querySelector('.settings-btn');
settingsBtn.addEventListener('click', () => {
    alert('Opening Settings! ⚙️');
    userDropdown.classList.remove('show');
});

// AI Selfie Buddy
const selfieUpload = document.getElementById('selfie-upload');
const selfieLabel = document.querySelector('.selfie-upload-label');

selfieLabel.addEventListener('click', () => {
    selfieUpload.click();
});

selfieUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        alert(`AI Buddy activated! Processing your selfie: ${file.name}`);
        // Here you would typically send the file to an AI service
    }
});

// Create Reel Button
const createReelBtn = document.querySelector('.create-reel-btn');
createReelBtn.addEventListener('click', () => {
    alert('Opening Reel Creator! 🎥');
    // In a real app, this would open a reel creation modal or page
});

// Generate Study Playlist Button
const playlistBtn = document.querySelector('.playlist-btn');
playlistBtn.addEventListener('click', () => {
    alert('Generating personalized study playlist! 🎵');
    // In a real app, this would generate and display a playlist
});

// Referral Rewards Button
const referralBtn = document.querySelector('.referral-btn');
referralBtn.addEventListener('click', () => {
    alert('Share your referral link and earn rewards! 🎁');
    // In a real app, this would open a referral modal or copy link
});

// Initial Load Animation
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);
});
