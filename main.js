document.addEventListener("DOMContentLoaded", function() {
    const stigmaScrollBtn = document.getElementById("stigma-scroll-btn");
    
    if (stigmaScrollBtn) {
        stigmaScrollBtn.addEventListener("click", function(event) {
            event.preventDefault();
            
            // Hinahanap nito ang card na may klase o katangian ng breaking the stigma
            const stigmaCard = document.querySelector(".border-purple-200");
            
            if (stigmaCard) {
                stigmaCard.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }
});