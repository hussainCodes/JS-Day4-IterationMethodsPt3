const transactions = [
	["income",1000],
 	["income",1500],	
        ["expense",500],
        ["expense",300],
        ["income",700]
];

const onlyIncomeTansactions = transactions.filter((transaction)=> transaction[0] == "income");
const onlyExpenseTansactions = transactions.filter((transaction)=> transaction[0] == "expense");


let totalIn = 0;
let totalEx = 0;

onlyIncomeTansactions.forEach((income)=>totalIn+=income[1]);
console.log("Total Income: ",totalIn);


onlyExpenseTansactions.forEach((expense)=>totalEx+=expense[1]);
console.log("Total Expense: ",totalEx);

console.log("Only Income Transactions",onlyIncomeTansactions)
console.log("Only Expense Transactions",onlyExpenseTansactions)


const totalNet = (ex,inc)=>{return ex-inc};
console.log("Total Net: ",totalNet(totalIn, totalEx))

const transactionsAbove500 = transactions.filter((transaction)=>transaction[1] > 500)
console.log("Transactions above 500: ",transactionsAbove500);


