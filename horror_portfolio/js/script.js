document.addEventListener('DOMContentLoaded', function() {

    // Fade-in elements on scroll
    const fadeElems = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, // relative to document viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the item has to be visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: unobserve the element after it's visible
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElems.forEach(elem => {
        // Add the fade-in class if not already present (for elements that might be added dynamically)
        // Though for this project, they are static.
        if (!elem.classList.contains('fade-in')) {
            elem.classList.add('fade-in');
        }
        observer.observe(elem);
    });

    // Placeholder for future JS
    console.log("Horror Portfolio script loaded.");

    // Background Ambience Control
    const bgAudio = document.getElementById('background-ambience');
    const muteToggleButton = document.getElementById('mute-toggle');

    if (bgAudio && muteToggleButton) {
        // Attempt to play audio on user interaction, as autoplay is often restricted
        // For this example, let's try to play it very softly initially,
        // but be aware browsers might block this without prior user gesture.
        // A better approach might be to have a "Enter Site" button that starts audio.
        bgAudio.volume = 0.05; // Very subtle volume

        // We can't reliably autoplay, so we'll leave it to the user to unmute/play
        // or link it to another interaction. For now, the button will toggle mute/unmute.
        // A more robust solution would handle play states explicitly.

        muteToggleButton.addEventListener('click', () => {
            if (bgAudio.paused) {
                bgAudio.play().catch(e => console.error("Error playing audio:", e));
                muteToggleButton.textContent = 'Mute Sound';
            } else if (bgAudio.muted) {
                bgAudio.muted = false;
                muteToggleButton.textContent = 'Mute Sound';
                // If you want play to resume from where it was
                bgAudio.play().catch(e => console.error("Error playing audio:", e));
            } else {
                bgAudio.muted = true;
                // Or bgAudio.pause() if you prefer to stop it
                muteToggleButton.textContent = 'Unmute Sound';
            }
        });

        // Optional: Try to play after a general user interaction on the page
        // document.body.addEventListener('click', () => {
        //     if (bgAudio.paused && !bgAudio.muted) {
        //        bgAudio.play().catch(e => console.error("Error playing audio on interaction:", e));
        //     }
        // }, { once: true }); // Only trigger once
    }

    console.log("Audio controls initialized.");

    console.log("%cDeep within the code, the old ones whisper...", "color: #ff0000; font-family: 'Creepster', cursive; font-size: 16px;");
    console.log("%cBeware the data streams.", "color: #00e1ff; font-family: 'Roboto Mono', monospace;");
});
