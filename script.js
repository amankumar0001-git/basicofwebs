// const mailButton = document.querySelector(".")+
const skills = document.querySelector(".skills");
const hello = document.querySelector(".hello");
skills.addEventListener("click",(e)=>{
    if(e.target.classList[0] === "skill-box"){
        console.log("yes its clicked =====")
switch (e.target.innerText) {
    case "HTML":
        setTimeout(()=>{
            alert("HTML stands for a HyperText Markup Language");
        },1e2);
        break;
         case "CSS":
        setTimeout(()=>{
            alert("CSS stands for a Cascading Style Sheet");
        },1e2);
        break;
         case "JavaScript":
        setTimeout(()=>{
            alert("JavaScript is a programming language which works on the ecmascript 6");
        },1e2);
        break;
         case "Gaming":
        setTimeout(()=>{
            alert("Gaming is in mine blood");
        },1e2);
        break;
         case "Football":
        setTimeout(()=>{
            alert("Football is my favourite sport i am able to play football for a whole day without getting exhausted ");
        },1e2);
        break;
    default:
        break;
}
}});
// hello.addEventListener("click",(e)=>{
// alert("Hello from Aman Sides Swagat Hai aapka hamari website par");
// });
hello.addEventListener('click', function() {
    const recipientEmail = 'dilip0928@gmail.com'; // Replace with your email address
    const subject = 'Hello from your website visitor!';
    const body = 'Hello, I am a visitor from your website.';

    // URL-encode the subject and body to handle spaces and special characters correctly
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    // Construct the mailto URL
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;

    // Redirect the user to their default email client
    window.location.href = mailtoLink;
});
