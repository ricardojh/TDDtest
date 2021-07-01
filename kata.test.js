const kata = require('./kata');

decribe("kata", () => {

    test("Se espera 76642 con 46672", () => {
        const expect = 76642;
        const result = kata(46672);

        expect(result).toEqual(expected);
        
    })
})