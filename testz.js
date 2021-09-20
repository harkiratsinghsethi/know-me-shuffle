// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Input: 
// Output: [["bay”],[“net","ten"],["ate","eat","tea”]….]


const findAnagrams=(strs)=>{
let resultMap={}

for(let item of strs){
    let countArr = createCountArray(item)
    if(resultMap[countArr]) resultMap[countArr].push(item)
    else resultMap[countArr]= [item]
}
console.log(Object.values(resultMap))
return Object.values(resultMap)

}

const createCountArray=(str)=>{
let resultArray = new Array(26).fill(0)
for(let char of str) {
    resultArray[char.charCodeAt(0)-97]+=1
}
return resultArray
}

// const createEmptyArray = (length,initValue)=>{
// let arr =[]
// for(let count =0;count<length;count++){
// arr.push(initValue)
// }
// return arr
// }

let strs = ["bay","eat","tea","and","not","net","end","ate","nat","ton","ten"]

findAnagrams(strs)



const CreateToggle =({bool}){

    return(<div className={bool?class1:class2}>
        <button id='square'></button>
        bool?<i>tick</i> : <i>cross</i>
        </div>) 
}



