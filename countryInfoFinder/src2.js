$(document).ready(function () {
    const loader = $('#loader');
    const error = $('#errorMsg');
    const result = $('#result');
    $('#searchBtn').click(trigeerSearch);

    function trigeerSearch() {
        let country = $('#countryInfo').val().trim();       // get value and trim spaces
        let region = $('#regionSelect').val();              // get value
        result.empty();      // empty on every click 
        error.addClass('d-none').text('')

        if (!country && !region) {
            alert('enter country or region');
            return;
        }
        loader.css('display', 'block'); // show loader
        setTimeout(() => {
            if (region) {
                getCountriesByRegion(region);
            } else if (country) {
                getCountriesByName(country);
            } else {
                alert('Please enter a country or select a region');
            }
        }, 500);
    };


    //to get name of coutries 
    function getCountriesByName(name) {
        $.ajax({
            url: `https://restcountries.com/v3.1/name/${name}`,
            method: 'get',
            success: function (data) {
                loader.hide()
                displayCountries(data);
            },
            error: function () {
                loader.hide()
                result.html(`<p class='text-danger text-center'>Country not found</P>`)
            }
        });
    }

    //to get region of counteis
    function getCountriesByRegion(region) {
        $.ajax({
            url: `https://restcountries.com/v3.1/region/${region}`,
            method: 'get',
            success: function (data) {
                loader.hide()
                displayCountries(data);
            },
            error: function () {
                loader.hide();
                result.html(`<p class='text-danger text-center'>No Countries found</p>`)
            }
        });
    }

    function displayCountries(countries) {
        if (countries.length === 0) {
            result.html(`<p class='text-warning text-center'>Country not found</p>`);
            return;
        }
        countries.forEach(country => {
            const { name, flags, capital, population, languages, maps, borders, currencies } = country;
            const languagesList = languages ? Object.values(languages).join(', ') : 'No Languages';
            const currenciesList = currencies ? Object.values(currencies).map(c => c.name + ' ' + (c.symbol || '')).join(' ,') : 'no currencies';
            const border = borders ? Object.values(borders).join(', ') : 'no border';
            const map = maps && maps.googleMaps ? maps.googleMaps : '';

            const card = `
                        <div class='col-md-6 col-lg-4 mb-4'>
                            <div class='card p-3'>
                                <img src=${flags.png} alt='flag' class='flag-img card-img top'>
                                <h5 class='card-title text-primary'>${name.common}</h5> 
                                <p><strong>Capital:</strong> ${capital ? capital[0] || capital[1] : "N/A"}</p>
                                <p><strong>Population:</strong> ${population.toLocaleString()}</p>
                                <p><strong>Languages:</strong> ${languagesList}</p>
                                <p><strong>Currencies:</strong> ${currenciesList}</p>
                                <p><strong>Borders:</strong> ${border}</p>
                                <p><a href='${map}' target='_blank'>view on Map</a></p>
                            </div>
                        </div>
            `;
            result.append(card);
        });
    }

});
