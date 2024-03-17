import { utilService } from "./services/util.service.js";


downloadCountryFlags()
function downloadCountryFlags() {
const countries = getCountries()
console.log('Countries:', countries.map(c => c.name))
downloadFlags(countries)
.then(() => {
console.log('Your flags are ready')
})
}
function getCountries() {
var countries = []
// TODO: get the countries from file (require),
// sort by population (descending)
// and return the top 5
return countries
}
function downloadFlags(countries) {}
// TODO: use the download() function to download a flag