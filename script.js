
const arr = []
const names = document.querySelector('.name')

fetch ('https://jsonplaceholder.typicode.com/users')
.then(users => users.json())
.then((data) => {
    for (let key in data){arr.push(data[key].name)}
    arr.forEach(function (el){
        function addName (){
            return `<p class="name">${el}</p>` 
        }
        names.innerHTML += addName (el)
        console.log(el);
    })
})


    
