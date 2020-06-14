


var map;
var markers = [];
var infoWindow;
var locationSelect;

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});
//This how a google map get initialized
function initMap() {
    var Kenya = {
        lat: 0,
        lng: 37.9062
    };
    map = new google.maps.Map(document.getElementById('map'), {
      center: Kenya,
      zoom: 7,
      mapTypeId: 'roadmap'
      //mapTypeId: 'terrain'
      //mapTypeId: 'hybrid'
      //mapTypeId: 'satellite'
    });
    infoWindow = new google.maps.InfoWindow();
    searchCountries();
}



function searchCountries(){
    var foundCountry = [];
    var countryName = document.getElementById('CountryRegion').value;
    if(countryName){
        World_Covid_19.forEach(function(country,index){
            var nation = country.CountryRegion;
            if (nation == countryName){
                foundCountry.push(country);
            }
        })

    } else {
        foundCountry = World_Covid_19;
    }
    clearLocations();
    displayCountries(foundCountry);
    showPositionMarkers(foundCountry);
    setOnClickListener();
}


function clearLocations() {
    infoWindow.close();
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers.length = 0;
}




function setOnClickListener(){
    var countryElements = document.querySelectorAll('.country-container');
    countryElements.forEach(function(Covid_19_Country, index){
        Covid_19_Country.addEventListener('click', function(){
            new google.maps.event.trigger(markers[index],'click');
        })
    })

}




function displayCountries(World_Covid_19){
    var countriesHtml = '';
    World_Covid_19.forEach(function(Covid_19, index){
        var CountryRegion = Covid_19.CountryRegion;
        var Confirmed     = Covid_19.Confirmed;
        var Deaths        = Covid_19.Deaths;
        var Recovered     = Covid_19.Recovered;



        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes();
        var dateTime = date+' '+time;
        var ProvinceState = Covid_19.ProvinceState;

        countriesHtml +=`
            <div class="country-container">
                <div class="country-name">
                    <i class="fas fa-globe"></i>
                    <span>Country:${CountryRegion}-${ProvinceState}Date:${dateTime}</span>
                </div>
                <div class="country-confrimed-cases">
                    <i class="fas fa-viruses"></i>
                    <span>Confirmed cases ${Confirmed}</span>

                </div>
                <div class="country-recovered-cases">
                    <i class="fas fa-heartbeat"></i>
                    <span>Recovered cases ${Recovered}</span>

                </div>
                <div class="country-death-cases">
                    <i class="fas fa-heart-broken"></i>
                    <span>Death cases ${Deaths}</span>
                </div>
            </div>

        `

    });

    document.querySelector('.country-list').innerHTML = countriesHtml;
}

function showPositionMarkers(World_Covid_19){
    var bounds = new google.maps.LatLngBounds();
    World_Covid_19.forEach(function(Covid_19, index){
        var latlng = new google.maps.LatLng(
            Covid_19.Lat,
            Covid_19.Long);

        var ProvinceState = Covid_19.ProvinceState;
        var CountryRegion = Covid_19.CountryRegion;
        var Confirmed     = Covid_19.Confirmed;
        var Deaths        = Covid_19.Deaths;
        var Recovered     = Covid_19.Recovered;


        bounds.extend(latlng);
        createMarker(latlng, ProvinceState, CountryRegion, Confirmed, Deaths, Recovered, index+1);

    })
    map.fitBounds(bounds);
}


function createMarker(latlng, ProvinceState, CountryRegion, Confirmed, Deaths, Recovered, index){
    var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes();
        var dateTime = date+' '+time;
    var html = `
        <div class="country-info-window">
            <div class="thecountry-info-name">
                ${CountryRegion}-${ProvinceState}
            </div>
            <div class="theDate-info-date">
                <div class="circle">
                    <i class="fas fa-calendar-day"></i>
                </div>
                <span>Date:${dateTime}</span>
            </div>
            <div class="thecountry-confirmed-cases">
                <div class="circle">
                    <i class="fas fa-virus"></i>
                </div>
                <span>Confirmed cases:${Confirmed}</span>
            </div>
            <div class="thecountry-recovered-cases">
                <div class="circle">
                    <i class="fas fa-heartbeat"></i>
                </div>
                <span>Recovered cases:${Recovered}</span>
            </div>
            <div class="thecountry-death-cases">
                <div class="circle">
                    <i class="fas fa-heart-broken"></i>
                </div>
                <span>Death cases:${Deaths}</span>
            </div>
        </div>
    `;  

    var marker = new google.maps.Marker({
        map: map,
        position: latlng,
        /*label: index.toString()*/
    });

    google.maps.event.addListener(marker, 'click', function() {
        infoWindow.setContent(html);
        infoWindow.open(map, marker);
    });
    markers.push(marker);
}
