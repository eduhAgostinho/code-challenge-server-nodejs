const getStatusBeer = require('./getStatusBeer');

describe('getStatusBeer', () => {
    
    describe('Given a temperature, minimumTemperature and maximumTemperature', () => {
        it('shoud return \'all good\'', () => {
            expect(getStatusBeer({ temperature: 2, minimumTemperature: 0, maximumTemperature: 3 })).toEqual('all good');
            expect(getStatusBeer({ temperature: 5, minimumTemperature: 3, maximumTemperature: 5 })).toEqual('all good');
            expect(getStatusBeer({ temperature: 4, minimumTemperature: 4, maximumTemperature: 9 })).toEqual('all good');
            expect(getStatusBeer({ temperature: -4, minimumTemperature: -9, maximumTemperature: 0 })).toEqual('all good');
        });

        it('shoud return \'too high\'', () => {
            expect(getStatusBeer({ temperature: 6, minimumTemperature: 1, maximumTemperature: 4 })).toEqual('too high');
            expect(getStatusBeer({ temperature: -1, minimumTemperature: -8, maximumTemperature: -2 })).toEqual('too high');
        });

        it('shoud return \'too low\'', () => {
            expect(getStatusBeer({ temperature: 2, minimumTemperature: 4, maximumTemperature: 6 })).toEqual('too low');
            expect(getStatusBeer({ temperature: -12, minimumTemperature: -4, maximumTemperature: -2 })).toEqual('too low');
        });
    });

    describe('Given an invalid temperature', () => {
        it('should return null', () => {
            expect(getStatusBeer({ temperature: '2', minimumTemperature: 4, maximumTemperature: 6 })).toBeNull();
            expect(getStatusBeer({ temperature: null, minimumTemperature: '4', maximumTemperature: 6 })).toBeNull();
        });
    })
});
