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
const noticeList = document.getElementById('notice-list');
const noticeContainer = document.getElementById('notice-container');

let scrollInterval;

function startScrolling() {
    scrollInterval = setInterval(() => {
        // Pehla notice upar slide karega
        noticeList.style.transition = 'margin-top 0.5s ease-in-out';
        noticeList.style.marginTop = '-40px';

        setTimeout(() => {
            // Pehle notice ko list ke end mein bhej dena
            noticeList.appendChild(noticeList.firstElementChild);
            noticeList.style.transition = 'none';
            noticeList.style.marginTop = '0px';
        }, 500);
    }, 3000); // Har 3 second mein scroll hoga
}

// Mouse upar aane par stop
noticeContainer.addEventListener('mouseenter', () => {
    clearInterval(scrollInterval);
});

// Mouse hatne par firse shuru
noticeContainer.addEventListener('mouseleave', () => {
    startScrolling();
});

// Pehli baar shuru karne ke liye
startScrolling();
