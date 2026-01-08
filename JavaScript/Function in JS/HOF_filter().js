//Filter()

const number = [1, 2,5,6,-1,-5,4,-19, 20, 0, "", null, undefined, NaN, 1]

const positiveNum = number.filter(nonNegNum)

function nonNegNum(num){
    return num > 0
}
// console.log(positiveNum)

const negNum = number.filter((num)=> num<0)
// console.log(negNum)

// const RemoveFalsy = number.filter((num)=>Boolean(num))
const RemoveFalsy = number.filter(Boolean)
console.log(RemoveFalsy)