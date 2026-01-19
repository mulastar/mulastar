function navigate(section){
    if(section){
    document.querySelector(section).scrollIntoView({behavior: "smooth"});
    }
    }
    
    const answers = document.querySelectorAll(".faq-answer");
    const arrows = document.querySelectorAll(".arrow");
    
    function toggleFAQ(index){
    if(answers[index].style.display === "block"){
    answers[index].style.display = "none";
    arrows[index].textContent = "▼";
    } else {
    answers[index].style.display = "block";
    arrows[index].textContent = "▲";
    }
    }
    
