function Home(){
    window.location="index.html";
}

function AboutUs(){
    window.location="Destination5.html"
}

function Contact(){
    window.location="Destination6.html"
}

function Bhajans(){
    window.location="Destination2.html";
}

function Songs(){
     window.location="Destination3.html";
}

function More1(){
     window.location="Destination4.html";
}

 var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thank You Our Team Will Get Back To You Soon Please Check Your Email After Some Time ";
        status.classList.add('success')
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem";
        status.classList.add('error')
        form.reset()
      })
       
    }
    form.addEventListener("submit", handleSubmit)