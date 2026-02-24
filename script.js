// 1. Welcome Message (Jab website load ho)
window.onload = function() {
    console.log("Navdeep Public School website is ready!");
    // Aap chaho toh yahan ek popup bhi laga sakte ho
};

// 2. Sticky Header Effect
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.background = "#001226"; // Scroll karne par dark navy blue
        header.style.padding = "10px 50px";  // Header thoda chota ho jayega
    } else {
        header.style.background = "#001f3f"; // Wapas purana color
        header.style.padding = "20px 50px";
    }
});

// 3. Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Header ki height minus kar di
                behavior: 'smooth'
            });
        }
    });
});

// 4. Mobile Menu (Future ke liye - agar hum hamburger menu banaye)
// Isme hum click karne par menu open/close karne ka logic daal sakte hain