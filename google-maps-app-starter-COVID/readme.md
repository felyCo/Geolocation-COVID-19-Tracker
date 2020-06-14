# Plan Of Action

- Import Google Maps into the Window DONE

- Add the header `WORLD COVID 2019` DONE

- Add markers of countries to the map DONE

- Add info window with name of country to each marker DONE

- Add input box DONE

- Add country list container DONE

- Add individual country container  DONE

- Show all the stores in the stores list using `store-data.js`DONE

- Open the info window of the marker on store selection in stores list DONE

- Complete the styling for the marker info window DONE

- Allow a user to search for country in a zip code DONE

- Add a beautiful transition on the hover of an individual country

**DONE**


var html = "<b>" +  CountryRegion + "</b> <br/>" + ProvinceState +  "</b> <br/>" + Date + "</b> <br/>" + Confirmed + "</b> <br/>" + Recovered +  "</b> <br/>" + Deaths;  



`
        <div class="country-info-window">
            <div class="country-info-name">
                <div class="circle">
                    <i class="fal fa-flag"></i>
                </div>
                ${CountryRegion}-${ProvinceState}
            </div>
            <div class="Date-info-date">
                <div class="circle">
                    <i class="fas fa-calendar-day"></i>
                </div>
                <span>Date:${dateTime}</span>
            </div>
            <div class="country-confirmed-cases">
                <div class="circle">
                    <i class="fas fa-virus"></i>
                </div>
                <span>Confirmed cases:${Confirmed}</span>
            </div>
            <div class="country-recovered-cases">
                <div class="circle">
                    <i class="fas fa-virus"></i>
                </div>
                <span>Recovered cases:${Recovered}</span
            </div>
            <div class="country-confirmed-deaths">
                <div class="circle">
                    <i class="far fa-tombstone"></i>
                </div>
                <span>Death cases:${Deaths}</span>
            </div>
        </div>
    `




