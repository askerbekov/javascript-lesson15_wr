const input = document.querySelector('#input')
const weatherData = document.querySelector('#weatherData')
const submit = document.querySelector('#submit')
const status = document.querySelector('#status')

input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        fetch(`http://api.weatherapi.com/v1/current.json?key=1682cd204c444820aee90014232807&q=${input.value}`)
            .then(res => res.json())
            .then(data => {
                weatherData.innerHTML =  `
                    <div>
                        <h2>${data.location.name}</h2>
                        <h2>${data.location.region}</h2>
                        <h2>${data.location.country}</h2>
                        <p>${data.location.localtime}</p> 
                    </div>
                    <div>
                        <span>Temperature ${data.current.temp_c} °C /${data.current.temp_f} °F </span>
                        <div id="status">
                            <img src="${data.current.condition.icon}" alt="">
                            <span>${data.current.condition.text}</span>
                        </div>
                    </div>
                `
            })
    }



})