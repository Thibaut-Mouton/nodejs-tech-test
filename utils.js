const FILTER_ARG = '--filter'
const COUNT_ARG = '--count'

function checkParams() {
    return [FILTER_ARG, COUNT_ARG].find(element => (process.argv[2] ?? '').includes(element))
}

/**
 *
 * @param str expected format : "xxxxx [5]"
 */
function extractNumberFromTemplateString(str) {
    const firstSplit = str.split(' ')[1]
    return parseInt((firstSplit ?? '').replace('[', '').replace(']', ''), 10)
}

function lintAndPrintResult(response) {
    if (typeof response === "object") {
        const formattedResponse = JSON.stringify(response, null, 3);
        console.log("---------- Result from count ----------")
        console.log(formattedResponse)
        console.log("---------------------------- ----------")
    } else {
        console.error('Cannot print response. Not object type')
    }
}

module.exports = {
    FILTER_ARG,
    COUNT_ARG,
    extractNumberFromTemplateString,
    checkParams,
    lintAndPrintResult
}
