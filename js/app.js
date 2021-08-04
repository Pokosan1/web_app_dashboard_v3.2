const alertBanner = document.getElementById('alert');

alertBanner.innerHTML = 
`
<div class="alert-banner">
    <div class="alert">
        <p><strong>Alert: </strong> You have unread messages</p>
        <p class="alert-btn"-close"> X </p>
    </div>
</div>
`
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if(element.classList.contains("alert-btn")) {
        alertBanner.style.display = "none"
    }

});


const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
    
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and messaage fields before sending");
    } else if (user.value === "") {
        alert("Please fill out user field before sending");
    } else if (message.value === "") {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }

});





















