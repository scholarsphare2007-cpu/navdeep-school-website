// Notice Board Scrolling Logic
const noticeList = document.getElementById('notice-list');
const noticeContainer = document.getElementById('notice-container');

let scrollInterval;

function startScrolling() {
    scrollInterval = setInterval(() => {
        // Har 3 second mein list ko 60px upar shift karega
        if(noticeList) {
            noticeList.style.transition = 'margin-top 0.5s ease-in-out';
            noticeList.style.marginTop = '-60px'; 

            setTimeout(() => {
                // Pehle notice ko uthakar peeche phenk dega
                noticeList.appendChild(noticeList.firstElementChild);
                noticeList.style.transition = 'none';
                noticeList.style.marginTop = '0px';
            }, 500);
        }
    }, 3000); 
}

// Mouse hover par rokne ke liye
if(noticeContainer) {
    noticeContainer.addEventListener('mouseenter', () => clearInterval(scrollInterval));
    noticeContainer.addEventListener('mouseleave', startScrolling);
    startScrolling(); 
}
