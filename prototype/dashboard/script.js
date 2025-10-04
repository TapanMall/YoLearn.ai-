// Dashboard script for YoLearn.ai
document.addEventListener('DOMContentLoaded', () => {
    // Avatar selection functionality
    const avatarModal = document.getElementById('avatar-modal');
    const avatarBtn = document.getElementById('user-avatar');
    const closeAvatarModalBtn = document.getElementById('close-avatar-modal');
    const avatarOptions = document.querySelectorAll('.avatar-option');
    const userAvatar = document.getElementById('user-avatar');

    // Load saved avatar from localStorage
    const savedAvatar = localStorage.getItem('selectedAvatar');
    if (savedAvatar) {
        userAvatar.textContent = savedAvatar;
        avatarOptions.forEach(option => {
            if (option.dataset.avatar === savedAvatar) {
                option.classList.add('selected');
            }
        });
    }

    // Open avatar modal on avatar click
    avatarBtn.addEventListener('click', () => {
        avatarModal.classList.remove('hidden');
    });

    // Close avatar modal
    closeAvatarModalBtn.addEventListener('click', () => {
        avatarModal.classList.add('hidden');
    });

    // Select avatar option
    avatarOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedAvatar = option.dataset.avatar;
            userAvatar.textContent = selectedAvatar;
            localStorage.setItem('selectedAvatar', selectedAvatar);

            // Update selected class
            avatarOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');

            // Close modal
            avatarModal.classList.add('hidden');
        });
    });

    // Close modal when clicking outside
    avatarModal.addEventListener('click', (e) => {
        if (e.target === avatarModal) {
            avatarModal.classList.add('hidden');
        }
    });

    // Mood selection
    const moodBtns = document.querySelectorAll('.mood-btn');
    const aiAvatar = document.getElementById('ai-avatar');
    const aiMoodDesc = document.getElementById('ai-mood-desc');
    const moods = {
        fun: { avatar: '🤡', desc: 'Fun AI: Ready to make learning hilarious!' },
        chill: { avatar: '😎', desc: 'Chill Buddy: Taking it easy while you learn 🌴' },
        serious: { avatar: '👔', desc: 'Serious AI: Focused on delivering knowledge 💼' }
    };

    moodBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            moodBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const mood = btn.dataset.mood;
            aiAvatar.textContent = moods[mood].avatar;
            aiMoodDesc.textContent = moods[mood].desc;
            showPopup(`Switched to ${mood} mode!`, 'top');
        });
    });

    // Activity feed animations
    const activityCards = document.querySelectorAll('.activity-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = '0s';
            }
        });
    }, { threshold: 0.1 });

    activityCards.forEach(card => observer.observe(card));

    // Action buttons
    document.querySelectorAll('.action-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.textContent.toLowerCase().replace(' ', '-');
            showPopup(`Starting ${btn.textContent}...`, 'center');
        });
    });

    // Tool buttons
    document.querySelectorAll('.tool-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            showPopup(`Opening ${btn.textContent}...`, 'center');
        });
    });

    // Floating actions
    document.getElementById('quick-ai-chat').addEventListener('click', () => {
        showPopup('Starting new AI chat!', 'center');
    });

    document.getElementById('quick-challenge').addEventListener('click', () => {
        showPopup('Challenge started!', 'center');
    });

    document.getElementById('quick-rewards').addEventListener('click', () => {
        showPopup('Checking rewards...', 'center');
    });

    // Notification badge
    document.querySelector('.notification-badge').addEventListener('click', () => {
        showPopup('You have 3 new notifications!', 'top');
    });

    // XP bar animations
    const headerXpBar = document.getElementById('header-xp-bar');
    setTimeout(() => {
        headerXpBar.style.width = '75%';
        showPopup('XP increased!', 'bottom');
    }, 2000);

    // Stat card hover effects
    document.querySelectorAll('.stat-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            const fill = card.querySelector('.mini-fill');
            fill.style.width = '100%';
        });
        card.addEventListener('mouseleave', () => {
            const fill = card.querySelector('.mini-fill');
            fill.style.width = fill.getAttribute('style').split(':')[1].trim();
        });
    });

    // Activity card interactions
    activityCards.forEach(card => {
        card.addEventListener('click', () => {
            const badge = card.querySelector('.activity-badge');
            badge.style.transform = 'scale(1.5)';
            setTimeout(() => badge.style.transform = 'scale(1)', 300);
            showPopup('Activity details!', 'center');
        });
    });

    // Motivational message animation
    const msg = document.querySelector('.motivational-msg');
    setInterval(() => {
        msg.style.transform = 'scale(1.05)';
        setTimeout(() => msg.style.transform = 'scale(1)', 500);
    }, 5000);

    // Popup function
    function showPopup(message, position) {
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.textContent = message;
        document.getElementById('popup-container').appendChild(popup);

        // Position
        if (position === 'top') {
            popup.style.top = '2rem';
            popup.style.left = '50%';
            popup.style.transform = 'translateX(-50%)';
        } else if (position === 'center') {
            popup.style.top = '50%';
            popup.style.left = '50%';
            popup.style.transform = 'translate(-50%, -50%)';
        } else if (position === 'bottom') {
            popup.style.bottom = '2rem';
            popup.style.left = '50%';
            popup.style.transform = 'translateX(-50%)';
        }

        setTimeout(() => {
            popup.remove();
        }, 3000);
    }

    // Initial animations
    activityCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Companion adoption functionality
    const adoptButtons = document.querySelectorAll('.adopt-btn');

    const companions = {
        coding: {
            icon: '💻',
            name: 'Coding Buddy',
            description: 'GitHub Copilot meets Study Partner - Code smarter, learn faster!',
            moodDesc: 'Your Coding Buddy is here to help you debug and learn!'
        },
        creativity: {
            icon: '🎨',
            name: 'Creativity Mentor',
            description: 'Portfolio, arts, design - Unleash your creative genius!',
            moodDesc: 'Your Creativity Mentor is ready to inspire your next masterpiece!'
        },
        fitness: {
            icon: '🧘',
            name: 'Mental Fitness Coach',
            description: 'Stress hacks, time boxing - Master your mind and productivity!',
            moodDesc: 'Your Mental Fitness Coach is here to keep you calm and focused!'
        }
    };

    adoptButtons.forEach(button => {
        button.addEventListener('click', () => {
            const companionKey = button.closest('.companion-card').dataset.companion;
            const companion = companions[companionKey];
            if (companion) {
                showPopup(`You adopted the ${companion.name}!`, 'center');
                // Update AI Buddy display to companion icon and description
                aiAvatar.textContent = companion.icon;
                aiMoodDesc.textContent = companion.moodDesc;
            }
        });
    });
});
