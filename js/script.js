// Typing animation

var typed = new Typed(".typing",{
    strings:["Web Developer" , "Web Designer" , "Perfume Vendor"],
    typeSpeed:200,
    Backspeed:60,
    loop:true
})


// Aside

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length; // Corrected to use navList.length

    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {

        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("back-section");
        }
    

        removeBackSection();
    
    
        for (let j = 0; j < totalNavList; j++) {

            if(navList[j].querySelector("a").classList.contains("active")){

                addBackSecton(j);

            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);

        if(window.innerWidth < 1200){
            asideSectionTogglerBtn(); 
        }
    });
}

function addBackSecton(num){
                    allSection[num].classList.add("back-section");


}

function removeBackSection(){
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("back-section");
    }


}

function showSection(element){

    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("active");
    }

    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}


function updateNav(element){
    for(let i=0; i<totalNavList; i++){
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];

        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("active");


        }
    }


}

document.querySelector(".hire-me").addEventListener("click", function(){

    const sectionIndex = this.getAttribute("data-section-index");


    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSecton(sectionIndex);

})


const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navTogglerBtn.addEventListener("click", () => {

        asideSectionTogglerBtn();

    })

    function asideSectionTogglerBtn(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.toggle("open"); 
        }
    }


    // alert

    let notifications = document.querySelector('.notifications');
    let success = document.getElementById('success');




    
//    message

function createToast(type, icon , title , text){
    let newToast = document.createElement('div');
    newToast.innerHTML = ` 
     <div class="toast ${type}">
        <i class="${icon}"></i>
    <div class="content">
    <div class="title">${title}</div>
        <span>${text}</span>
    </div>
    <i class="fa-solid fa-xmark onclick="(this.parentElement).remove()"></i>
</div>`;

    notifications.appendChild(newToast);

    // Remove the toast after 5 seconds
    setTimeout(() => {
        newToast.remove();
    }, 5000);
}


function SendMail(){

    var params = {
        from_name : document.getElementById("fullname").value,
        email_id : document.getElementById("email_id").value,
        subject : document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

    let type = 'success';
    let icon = 'fa-solid fa-circle-check';
    let title = 'Message Sent!';
    let text = 'Your Message to kashthrob has been sent successfully!';
    createToast(type,icon,title,text);


    emailjs.send("service_ev4f4qt", "template_p6vohdq", params).then(function (res){

        // Sweet Alert


        // Swal.fire({
        //     icon: "success",
        //     title: "Message Sent!",
        //     text: "Thank You, I will get back to you soon",
        //     showClass: {
        //       popup: `
        //         animate__animated
        //         animate__fadeInUp
        //         animate__faster
        //       `
        //     },
        //     hideClass: {
        //       popup: `
        //         animate__animated
        //         animate__fadeOutDown
        //         animate__faster
        //       `
        //     }
        //   });

                // Reset the input fields after successful send
    document.getElementById("fullname").value = "";
    document.getElementById("email_id").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";

            })
}




