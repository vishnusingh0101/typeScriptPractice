const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button')!;

let numResult: Array<number> = [];  //generic type
let textResult: string[] = [];

type numberOrString = number | string;
type objResult = {val: "number", timestamp: Date};
interface interfaceObjResult {
    val: "number",
     timestamp: Date
};

function add(num1: numberOrString, num2: numberOrString) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;

}

function printResult(obj: interfaceObjResult) {
    return obj;
}

buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add(+num1, +num2);
    console.log(result);
    numResult.push(+result);
    const stringResult = add(num1, num2);
    textResult.push(stringResult as string);

    console.log(printResult({val: result as "number", timestamp: new Date()}));

    console.log(numResult, textResult);
});

const myresult = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        console.log('It worked.')
    },1000)
});

myresult.then((result) => {
    console.log(result.split('w'));
})

