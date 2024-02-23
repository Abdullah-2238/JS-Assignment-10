const numbers  = [0,1,1,2,3,5,8,13,21,34,55]

console.log(numbers)
let len = numbers.length;
len -= 1;
const addElement = () => {
    let addedNum = prompt("Enter the number to be added:");
    addedNum = Number(addedNum);
    if (!isNaN(addedNum)){
        numbers.push(addedNum);
        console.log("New array:",numbers);
    }else{
        console.log("Enter a valid number!");
    }
}

const removeElement = () =>{
    let remNum = prompt("Enter the element to remove:");
    remNum = Number(remNum);
    if(!isNaN(remNum) && remNum >= 0 && remNum <= numbers[len] ){
        for (let i = 0; i < numbers.length; i++) {
            if (remNum === numbers[i]) {
                numbers.splice(i,1)
            }
        }
        console.log("New array:",numbers);
    }else{
        console.log("Enter a valid number!");
    }
}

const checkIndex = () => {
    let chkInd = prompt("Check Index of Number:");
    chkInd = Number(chkInd)
    if(!isNaN(chkInd) && chkInd >= 0 && chkInd <= numbers[len] ){
        for (let i = 0; i < numbers.length; i++){
            if (chkInd === numbers[i]){
                console.log("Index of the given number is:",i);
            }
        }
    }
}