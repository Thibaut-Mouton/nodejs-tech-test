const {lintAndPrintResult, checkParams, extractNumberFromTemplateString} = require("./utils");

describe('utils.js', () => {

    beforeEach(() => {
        jest.spyOn(console, 'error').mockImplementation(() => {
        });
        jest.spyOn(console, 'log').mockImplementation(() => {
        });
    });

    describe(checkParams.name, () => {
        it('should return false because there are no args', () => {
            const result = checkParams()
            expect(result).toBeFalsy()
        });

        it('should return true if correct args are passed', () => {
            process.argv[2] = '--filter'
            const result = checkParams()
            expect(result).toBeTruthy()
        });
    });

    describe(lintAndPrintResult.name, () => {
        it('should return error if response not an object', () => {
            lintAndPrintResult(5)
            expect(console.error).toHaveBeenCalled()
        });

        it('should format and log response', () => {
            lintAndPrintResult({name: 'Hello'})
            expect(console.log).toHaveBeenCalled()
            expect(console.log).toHaveBeenCalledTimes(3)
        });
    });

    describe(extractNumberFromTemplateString.name, () => {
        it('should not format the number', () => {
            const result = extractNumberFromTemplateString('Australia')
            expect(result).toBeNaN()
        });

        it('should format the number correctly', () => {
            const str = 'Australia [10]'
            const result = extractNumberFromTemplateString(str)
            expect(typeof result).toBe('number')
            expect(result).toEqual(10)
        });
    })
});
