
document.body.innerHTML = `
<div class="container">
<div class="heading-container">
<h1>GET A RANDOM EXCUSE<h1>
<p>Click the below button to get a random excuse.</p>
</div>
<button onclick="getExcuse()">Click Me</button>
<div class="result-container"></div>
`
let result = document.querySelector('.result-container')

const getExcuse = () => {
    fetch("https://excuser.herokuapp.com/v1/excuse")
    .then((res)=> res.json())
    .then((data) => {
        console.log(data[0].excuse)
        result.innerHTML = data[0].excuse;
    }).catch((err) => {
        console.log(err)
    })
}