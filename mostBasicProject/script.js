// const mailButton = document.querySelector(".")+
const skills = document.querySelector(".skills");
const hello = document.querySelector(".hello");
skills.addEventListener("click", (e) => {
    if (e.target.classList[0] === "skill-box") {
        console.log("yes its clicked =====")
        switch (e.target.innerText) {
            case "HTML":
                setTimeout(() => {
                    alert("HTML stands for a HyperText Markup Language");
                }, 1e2);
                break;
            case "CSS":
                setTimeout(() => {
                    alert("CSS stands for a Cascading Style Sheet");
                }, 1e2);
                break;
            case "JavaScript":
                setTimeout(() => {
                    alert("JavaScript is a programming language which works on the ecmascript 6");
                }, 1e2);
                break;
            case "Gaming":
                setTimeout(() => {
                    alert("Gaming is in mine blood");
                }, 1e2);
                break;
            case "Football":
                setTimeout(() => {
                    alert("Football is my favourite sport i am able to play football for a whole day without getting exhausted ");
                }, 1e2);
                break;
            default:
                break;
        }
    }
});
hello.addEventListener("click",(e)=>{
alert("Hello from Aman Sides Swagat Hai aapka hamari website par");
});
