const _ = require('lodash');

function getStatusBeer({minimumTemperature, maximumTemperature, temperature}) {

    if (_.isNumber(minimumTemperature) && _.isNumber(maximumTemperature) && _.isNumber(temperature) ) {
        if (temperature < minimumTemperature) {
            return 'too low';
        } else if (temperature > maximumTemperature) {
            return 'too high';
        } else if (temperature >= minimumTemperature && temperature <= maximumTemperature) {
            return 'all good';
        }
    }

    return null;
}

module.exports = getStatusBeer; 
