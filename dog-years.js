function dogYears(planet, age) {
    const earthYear = 31557600;
    let currenPlanetEarthYear;

    if (planet === 'mercury') {
        currenPlanetEarthYear = 0.2408467;
    } else if (planet === 'venus') {
        currenPlanetEarthYear = 0.61519726;
    } else if (planet === 'mars') {
        currenPlanetEarthYear = 1.8808158;
    } else if (planet === 'jupiter') {
        currenPlanetEarthYear = 11.862615;
    } else if (planet === 'saturn') {
        currenPlanetEarthYear = 29.447498;
    } else if (planet === 'uranus') {
        currenPlanetEarthYear = 84.016846;
    } else if (planet === 'neptune') {
        currenPlanetEarthYear = 164.79132;
    } else {
        currenPlanetEarthYear = 1.0;
    }

    const ageEarthYears = age / earthYear;
    const ageInDogYears = Math.round((ageEarthYears / 7 / currenPlanetEarthYear)*100)/100;

    return ageInDogYears;
}
