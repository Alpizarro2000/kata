let StringCalculator = require ('./StringCalcultor')

test('Given "" When sum Then 0', () => {
    // GIVEN 
    const calculator = new StringCalculator();
    const input = "";

    // WHEN
    const actualOutput = calculator.sum(input);

    // THEN 
    const expectedOutput = 0;
    expect(actualOutput).toBe(expectedOutput);
})