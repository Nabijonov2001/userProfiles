
let file = document.querySelector('#avatar')
let fullname = document.querySelector('#your_name')
let email = document.querySelector('#email')
let submit = document.querySelector('.profile_button')

submit.addEventListener('click', (e)=>{
    fetch('/api/users/me', {
        method:'put',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            name:fullname.value,
            email:email.value
        })
    }).then(res=>res.json()).then(data=>console.log(data)).catch(e=>console.log(e))
})

 
