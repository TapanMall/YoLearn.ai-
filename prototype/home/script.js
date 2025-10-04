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
        posts.forEach(post => {
            if (filter === 'all') {
                post.style.display = 'block';
            } else if (post.classList.contains(filter + '-post')) {
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

// Initial Load Animation
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);
});
