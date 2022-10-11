function plusMinus(arr) {

    const arrLength = arr.length  

    const minLength = arr.filter(el => el < 0).length
    const positiveLength = arr.filter(el => el > 0).length

    const zeroNumLength = arr.filter(el => el === 0).length

    const minOutput = (minLength / arrLength).toPrecision(6)
    const positiveOutput = (positiveLength / arrLength).toPrecision(6)
    const zeroNumOutput = (zeroNumLength / arrLength).toPrecision(6)

    console.log(minOutput)
    console.log(positiveOutput)
    console.log(zeroNumOutput)

}


const arr = [-4, 3, -9, 0, 4, 1]
plusMinus(arr)