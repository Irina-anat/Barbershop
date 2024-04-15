AOS.init({ duration: 1000,
    offset: 300,
    once: false, 
    disableMutationObserver: true  });
AOS.refreshHard();

// function checkWindowSize() {
//     if (window.innerWidth <= 768) { 
//         AOS.refresh(); 
//         AOS.init({ offset: 200 }); 
//     } else {
//         AOS.refresh(); 
//         AOS.init({ offset: 300 }); 
//     }
// }

// checkWindowSize();

// window.addEventListener('resize', checkWindowSize);



