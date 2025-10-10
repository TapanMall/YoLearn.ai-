// Question page script
document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username');
    if (!username) {
        // If no username, redirect to login
        window.location.href = 'login.html';
        return;
    }

    let studyGoal = localStorage.getItem('studyGoal') || '';
    let aiStyle = localStorage.getItem('aiStyle') || '';

    const onboardingMessage = document.getElementById('onboarding-message');
    let currentQuestion = 1;

    function showQuestion(questionNumber) {
        document.querySelectorAll('.question').forEach(q => q.classList.remove('active'));
        const questionElem = document.getElementById(`question-${questionNumber}`);
        if (questionElem) {
            questionElem.classList.add('active');
        }
        onboardingMessage.textContent = '';
    }

    showQuestion(currentQuestion);

    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const value = btn.dataset.value;
            const question = btn.closest('.question').id;

            // Remove selected class from siblings
            btn.parentElement.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');

            if (question === 'question-1') {
                studyGoal = value;
                localStorage.setItem('studyGoal', studyGoal);
            } else if (question === 'question-2') {
                aiStyle = value;
                localStorage.setItem('aiStyle', aiStyle);
            }

            if (studyGoal && aiStyle) {
                let message = '';
                switch (aiStyle) {
                    case 'fun':
                        message = 'Awesome! Your Fun AI is ready with jokes & memes 🤪';
                        break;
                    case 'serious':
                        message = 'Perfect! Your Serious AI will deliver straight facts 📊';
                        break;
                    case 'chill':
                        message = 'Chill! Your Chill Buddy is here for relaxed vibes 😎';
                        break;
                }
                onboardingMessage.textContent = message;
                setTimeout(() => {
                    window.location.href = 'dashboard/dashboard.html';
                }, 2000);
            } else {
                if (question === 'question-1') {
                    onboardingMessage.textContent = 'Nice choice! Your study goal is set 🎯';
                    setTimeout(() => {
                        currentQuestion = 2;
                        showQuestion(2);
                    }, 1500);
                }
            }
        });
    });
});
