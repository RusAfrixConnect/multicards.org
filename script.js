console.log('🌍 WorldCards.org chargé !');

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button');
    
    if (button) {
        button.addEventListener('click', function() {
            alert('Bienvenue sur WorldCards.org ! 🎉');
        });
    }
    
    // Message de confirmation
    console.log('✅ Site prêt !');
});
