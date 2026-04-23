document.addEventListener('DOMContentLoaded', () => {
    const portalCards = document.querySelectorAll('.portal-card');

    portalCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const destination = card.getAttribute('data-target');
            
            // Add a brief delay for the visual "wow" factor if desired, 
            // but for now, we just teleport the subject.
            if (destination) {
                console.log(`Navigating to ${destination}...`);
                window.location.href = destination;
            }
        });
    });
});
