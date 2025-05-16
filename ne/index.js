



function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        home: document.getElementById("home").value,
        dob: document.getElementById("dob").value,
        doa: document.getElementById("doa").value,
        citizen: document.getElementById("citizen").value,
        citizen1: document.getElementById("citizen1").value,
        employer: document.getElementById("employer").value,
        felony: document.getElementById("felony").value,
        exp: document.getElementById("exp").value,
        high: document.getElementById("high").value,
        citys: document.getElementById("citys").value,
        graduatee: document.getElementById("graduatee").value,
        college: document.getElementById("college").value,
        cityc: document.getElementById("cityc").value,
        graduate: document.getElementById("graduate").value
    }

     emailjs
     
     .send("service_dqszwvj","template_1jgzvvr",parms)
     
     .then(() => {
                alert("Your Application has been sent Successfully")
            })
            .catch((error) => {
                console.log("error sending email:", error)
                alert("failed to send mail")
            })
     
     
     
     
    
}