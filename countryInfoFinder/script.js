// $(document).ready(function () {
//     $('#searchBtn').click(function () {
//         let country = $('#countryInfo').val().trim();       // get value and trim spaces
//         let region = $('#regionSelect').val();              // get value
//         $('#result').empty();       // empty on every click 
//         if (region) {
//             getCountriesByRegion(region);
//         } else if (country) {
//             getCountriesByName(country);
//         } else {
//             alert('Please enter a country or select a region');
//         }
//     });


//     //to get name of coutries 
//     function getCountriesByName(name) {
//         $.ajax({
//             url: `https://restcountries.com/v3.1/name/${name}`,
//             method:'get',
//             success: function(data){
//                 displayCountries(data);
//             },
//             error:function(){
//                 $('#result').html(`<p class='text-danger text-center'>Country not found</P>`)
//             }
//         });
//     }

//     //to get region of counteis
//     function getCountriesByRegion(region){
//         $.ajax({
//             url:`https://restcountries.com/v3.1/region/${region}`,
//             method:'get',
//             success:function(data){
//                 displayCountries(data);
//             },
//             error:function(){
//                 $('#result').html(`<p class='text-danger text-center'>No Countries found</p>`)
//             }
//         });
//     }

//     function displayCountries(countries){
//         if(countries.length === 0){
//             $('#result').html(`<p class='text-warnig text-center'>Contry not found</p>`);
//             return;
//         }
//         countries.forEach(country=> {
//             const {name,flags,capital,population,languages} = country;
//             const languagesList = languages ? Object.values(languages).join(', '): 'No Languages';

//             const card = `
//                         <div class='col-md-6 col-lg-4 mb-4'>
//                             <div class='card p-3'>
//                                 <img src=${flags.png} alt='flag' class='flag-img card-img top'>
//                                 <h5 class='card-title text-primary'>${name.common}</h5> 
//                                 <p><strong>Capital:</strong> ${capital ? capital[0] : "N/A"}</p>
//                                 <p><strong>Population:</strong> ${population.toLocaleString()}</p>
//                                 <p><strong>Languages:</strong> ${languagesList}</p>
//                             </div>
//                         </div>
//             `;
//             $('#result').append(card);
//         });
//     }

// });
