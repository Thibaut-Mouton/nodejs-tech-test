/**
 * Resources :
 * https://www.digitalocean.com/community/tutorials/nodejs-command-line-arguments-node-scripts
 * https://stackoverflow.com/questions/38375646/filtering-array-of-objects-with-arrays-based-on-nested-value
 * https://stackoverflow.com/questions/957537/how-can-i-display-a-javascript-object
 * https://stackoverflow.com/questions/71476237/how-to-mock-or-stub-process-argv
 */

const {data} = require("./data");
const {lintAndPrintResult, checkParams, FILTER_ARG, COUNT_ARG} = require("./utils");


function handleFilterArg(basedData) {
    const filter = process.argv[2].split('=')[1]

    return basedData.reduce((previousValue, currentValue) => {
        const people = currentValue.people.reduce((acc, person) => {
            const newAnimals = person.animals.filter((animal) => animal.name.includes(filter))
            const newPerson = {
                name: person.name,
                animals: newAnimals
            }
            if (newPerson.animals.length) {
                acc.push(newPerson)
            }
            return acc
        }, [])
        if (people.length) {
            previousValue.push({
                name: currentValue.name,
                people
            })
        }
        return previousValue
    }, [])
}

function handleCountArg(basedData) {
    return basedData.reduce((previousValue, currentValue) => {
        const people = currentValue.people.reduce((acc, person) => {
            const newPerson = {
                name: `${person.name} [${person.animals.length}]`,
                animals: [...person.animals]
            }
            acc.push(newPerson)
            return acc
        }, [])
        previousValue.push({
            name: `${currentValue.name} [${people.length}]`,
            people
        })
        return previousValue
    }, [])
}

function processArgsFromCmd() {
    const currentArg = checkParams()
    if (!currentArg) {
        console.warn(`An argument "${FILTER_ARG}" or "${COUNT_ARG}" is required to run script.`)
        return
    }
    let result = {}
    switch (currentArg) {
        case FILTER_ARG:
            result = handleFilterArg(data)
            break
        case COUNT_ARG:
            result = handleCountArg(data)
            break
        default:
            console.error('Unexpected error. Unknown argument.')
            break
    }
    lintAndPrintResult(result)
}

module.exports = {
    handleCountArg,
    handleFilterArg
}


processArgsFromCmd()
