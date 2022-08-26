
export default class operands{
    a;
    b;
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
}
function sum(a,b){
    return a+b;
}
export function subtract(a,b) {
    return a-b;
}


export {sum}