let modal = document.querySelector("#myModal");
let openBtn = document.querySelector("#myBtn");
let closeBtn = document.querySelector(".close"); 

openBtn.onclick =() => {
    modal.style.display = "block";
};

closeBtn.onclick =() =>{
    modal.style.display = 'none';
};

window.onclick =(event) =>{
    if(event.target === modal ){
        modal.style.display = "none";
    }
};
