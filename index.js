export function addNum(num){
    let num1 = num
    let size = num1.toString().length - Number.parseInt(num).toString().length
    console.log(Number.parseInt(num1 / (1 / Math.pow(10, size-1))))
}
addNum(73.892838728383)