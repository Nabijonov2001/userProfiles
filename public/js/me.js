let imageInput = document.querySelector('#avatar')
let your_name = document.querySelectorAll('#your_name')
        imageInput.addEventListener('change', (e)=>{
            let file = e.target.files[0]
            console.log(file)
        })

        your_name.addEventListener('change', (e)=>{
            let yourname = e.target.value
            console.log(yourname)
        })

        