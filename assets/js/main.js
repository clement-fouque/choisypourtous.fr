// Initialize Lucide Icons
lucide.createIcons();

// Modal Logic
const modal = document.getElementById('candidate-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalPanel = document.getElementById('modal-panel');
const modalName = document.getElementById('modal-name');
const modalJob = document.getElementById('modal-job');
const modalLocation = document.getElementById('modal-location');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');

function openCandidateModal(button) {
    // Find the card element (parent of parent of button)
    const card = button.closest('.candidate-card');
    const img = card.querySelector('img');
    const name = card.querySelector('h3').innerText;
    const job = card.querySelector('p').innerText;
    // The location text is inside a div with flex, we can just get the text content and trim
    // Structure: <div class="flex ..."><i ...></i> Location</div>
    // We use querySelector with the lucide icon's parent
    const locationDiv = card.querySelector('.flex.items-center.text-slate-400');
    const location = locationDiv ? locationDiv.innerText.trim() : '';

    // Populate Modal
    modalImage.src = img.src;
    modalImage.alt = img.alt;
    
    modalName.innerText = name;
    modalJob.innerText = job;
    modalLocation.innerText = location;
    
    // Description logic
    const descriptionEl = card.querySelector('.candidate-description');
    if (descriptionEl) {
        modalDescription.innerHTML = descriptionEl.innerHTML;
    } else {
        modalDescription.innerText = "Madame, Monsieur,\n\nEngagé(e) pour Choisy, je souhaite apporter mon expérience et mon dynamisme au service de notre commune. C'est avec enthousiasme que je rejoins l'équipe 'Choisy pour tous' pour porter nos projets communs.";
    }

    // Show Modal with transition
    modal.classList.remove('hidden');
    // Small timeout to allow display:block to apply before opacity transition
    setTimeout(() => {
        modalBackdrop.classList.remove('opacity-0');
        modalPanel.classList.remove('opacity-0', 'translate-y-4', 'sm:translate-y-0', 'sm:scale-95');
    }, 10);
}

function closeCandidateModal() {
    modalBackdrop.classList.add('opacity-0');
    modalPanel.classList.add('opacity-0', 'translate-y-4', 'sm:translate-y-0', 'sm:scale-95');
    
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

// Close on backdrop click
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target === modalBackdrop || e.target.closest('#modal-backdrop')) {
            closeCandidateModal();
        }
    });
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
        closeCandidateModal();
    }
});

// Navbar Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Mobile Menu Toggle
if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Close mobile menu on link click
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu) mobileMenu.classList.add('hidden');
    });
});

// Copy Email Function
function copyEmail() {
    const email = 'contact@choisypourtous.fr';
    // Create a temporary input element
    const tempInput = document.createElement('input');
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Show feedback
    const feedback = document.getElementById('copy-feedback');
    if (feedback) {
        feedback.classList.remove('opacity-0');
        setTimeout(() => {
            feedback.classList.add('opacity-0');
        }, 2000);
    }
}
