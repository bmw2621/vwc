// Closed Form

const closedForm = (k) => {
    let answer = 0;
    for(let i=1; i<=k; i++){
        answer += i;
    }
    return answer;
}

// Recursive Form
const recursiveForm = (k) => {
    if(k == 1){return 1}
    return k + recursiveForm(k-1)
}

console.log(recursiveForm(5));