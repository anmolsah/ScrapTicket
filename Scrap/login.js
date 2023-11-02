const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated){
        window.location.href = "rail.html"
    }else{
        alert("wrong")
    }
})

// function for checking username and password

function authentication(username,password){
    if(username === "anmol" && password === "anmol"){
        return true
    }else if(username === "himanshu" && password === "himanshu"){
            return true 
    }else if(username === "rohit" && password === "rohit"){
        return true 
    }else if(username === "ananth" && password === "ananth"){
        return true 
    }else{
        return false
    }
}