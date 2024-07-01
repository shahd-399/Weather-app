async function getLocation(location){
    var url = await fetch(`https://api.weatherapi.com/v1/search.json?key=2d28e8ff822e437f93b131622242506&q=${location}`)
    var data = await url.json();
    if(data[0]!='' && data[0]!=null){
        getCountry(location);
    }
}
getLocation("cairo");

var search = document.getElementById('search');
search.addEventListener('input',function(e){
    var term =e.target.value.toLowerCase().trim();
    if(term !=''){
        getLocation(term)
    }
})



var wearherList=[]
var wearherLocation=[]
async function getCountry(country,id){
    var url = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=2d28e8ff822e437f93b131622242506&q=${country}&days=3`)
    var data = await url.json();
    wearherList = (data.forecast.forecastday);
    wearherLocation =data.location
    display()
}
var weekday = ['Saturday','Sunday','Monday','Tuesday','Wednesday','Thursday','Fryday']
var momthday = ['January','February','March','April','May','June','Juli','August','September','October','November','December']
const d = new Date();


var firstDay = document.getElementById('day1');
var secoundDay = document.getElementById('day2');
var thirdDay = document.getElementById('day3');

function display(){
    const d = new Date();
    var displayDay1=
    displayDay1 = `<div class="card-header d-flex justify-content-between">
                <p class="mb-0">${weekday[d.getDay()+1]}</p>
                <p class="mb-0">${momthday[d.getMonth()]}</p>
    </div>
                    <div class="card-body p-5">
                        <h3 class="location">${wearherLocation.name}</h3>
                        <h4 class="degree display-1 fw-bolder text-light">${wearherList[0].day.maxtemp_c}
                            <sup>o</sup>
                            C
                        </h4>
                        <div class="icon w-100"><img src="http:${wearherList[0].day.condition.icon}" alt=""></div>

                        <div class="custom mb-3">${wearherList[0].day.condition.text}</div>

                        <span><img class="me-2" src="images/icon-umberella@2x.png" alt="">20%</span>
                        <span><img class="mx-2" src="images/icon-wind@2x.png" alt="">18km/h</span>
                        <span><img class="mx-2" src="images/icon-compass@2x.png" alt="">East</span>
                    </div>`
    firstDay.innerHTML= displayDay1

    var displayDay2
    displayDay2 = `<div class="card-header text-center">
                        <p class="mb-0">${weekday[(d.getDay()+2)%7]}</p>
                    </div>
                    <div class="card-body p-5 text-center">
                        <img src="http:${wearherList[1].day.condition.icon}" alt="">
                        <h4 class="degree text-light">${wearherList[1].day.maxtemp_c}
                            <sup>o</sup>
                            C
                        </h4>
                        <p class="degree">${wearherList[1].day.mintemp_c}
                            <sup>o</sup>
                        </p>
                        <div class="custom mb-3">${wearherList[1].day.condition.text}</div>
                    </div>`
    secoundDay.innerHTML= displayDay2


    var displayDay3
    displayDay3 = `<div class="card-header text-center">
                        <p class="mb-0">${weekday[(d.getDay()+3)%7]}</p>
                    </div>
                    <div class="card-body p-5 text-center">
                        <img src="http:${wearherList[2].day.condition.icon}" alt="">
                        <h4 class="degree text-light">${wearherList[2].day.maxtemp_c}
                            <sup>o</sup>
                            C
                        </h4>
                        <p class="degree">${wearherList[2].day.mintemp_c}
                            <sup>o</sup>
                        </p>
                        <div class="custom mb-3">${wearherList[2].day.condition.text}</div>
                    </div>`
    thirdDay.innerHTML= displayDay3
}

var inputs =document.querySelectorAll('input');
inputs.forEach(function(ele){
    ele.addEventListener('focus',function(e){
        e.target.style.color='white'
    })
})

var contactLink = document.getElementById('contactLink')
var homeLink = document.getElementById('homeLink')
var home = document.getElementById('Home');
var contact = document.getElementById('contact');
contactLink.addEventListener('click',function(){
    contact.classList.replace('d-none','d-block')
    home.classList.replace('d-block','d-none')
})
homeLink.addEventListener('click',function(){
    home.classList.replace('d-none','d-block')
    contact.classList.replace('d-block','d-none')
})

