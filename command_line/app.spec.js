const {handleFilterArg, handleCountArg} = require("./app");
const {lintAndPrintResult} = require("./utils");

describe('app.js', () => {
    const mockTemplate = [
        {
            name: 'France',
            people: [
                {
                    name: 'Paris',
                    animals: [
                        {name: 'pigeon'},
                        {name: 'silure'}
                    ]
                },
                {
                    name: 'Dunkerque',
                    animals: [
                        {name: 'bees'},
                        {name: 'pigeon'},
                    ]
                }
            ]
        },
        {
            name: 'Australia',
            people: [
                {
                    name: 'Sydney',
                    animals: [
                        {name: 'pigeon'},
                        {name: 'silure'}
                    ]
                },
                {
                    name: 'Canberra',
                    animals: [
                        {name: 'kangaroos'},
                    ]
                }
            ]
        }
    ]

    beforeEach(() => {
        jest.spyOn(console, 'warn').mockImplementation(() => {
        });
        jest.resetModules();
    })

    describe(handleFilterArg.name, () => {
        it('should filter by arg command', () => {
            process.argv[2] = '--filter=geo'
            const result = handleFilterArg(mockTemplate)
            const expected = [
                {
                    name: 'France',
                    people: [
                        {
                            name: 'Paris',
                            animals: [
                                {name: 'pigeon'},
                            ]
                        },
                        {
                            name: 'Dunkerque',
                            animals: [
                                {name: 'pigeon'},
                            ]
                        }
                    ]
                },
                {
                    name: 'Australia',
                    people: [
                        {
                            name: 'Sydney',
                            animals: [
                                {name: 'pigeon'},
                            ]
                        }
                    ]
                }
            ]
            expect(result).toStrictEqual(expected)
        });
    });

    describe(handleCountArg.name, () => {
        it('should count entries', () => {
            const result = handleCountArg(mockTemplate)
            console.log('RES', result[0].name)
            expect(parseInt(result[0].name.split(' ')[1].replace('[', '').replace(']', ''), 10)).toEqual(mockTemplate[0].people.length)
            expect(parseInt(result[0].people[0].name.split(' ')[1].replace('[', '').replace(']', ''), 10)).toEqual(mockTemplate[0].people[0].name)
        });
    });
});
