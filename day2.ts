//Function
//getFullName(first: string, last: string): string
function getFullName(first: string, last: string): string {
    return `${first} ${last}`;
}

//square(num: number): number
function square(num: number): number {
    return num * num;
}


//isPassed(score: number): boolean
function isPassed(score: number): boolean {
    return score >= 5;
}


//formatId(id: string | number): string
function formatId(id: string | number): string {
    return `ID: ${id}`; 
}



console.log(formatId("123")); // true