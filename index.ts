#! /usr/bin/env node
import inquirer from "inquirer"


const currency: any = {
    USD: 1,  // Base Currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};


let user_answer = await inquirer.prompt(
    [
        {
    name: 'from',
    message: "Enter From Currency",
    type: "list",
    choices: ["USD","EUR","GBP","INR","PKR"]
        },
        {
            name: 'to',
         message: "Enter to Currency",
            type: "list",
        choices: ["USD","EUR","GBP","INR","PKR"]
        },
        {
          name: "amount",
          message: "Enter Your Amount",
          type: "number"
        }
    ]
);
// This is called Dynamic Approach
let fromAmount = currency[user_answer.from] // exchange rate

let toAmount = currency[user_answer.to] // exchange rate

let amount = user_answer.amount
// USD base Currency // 4
let baseAmount = amount / fromAmount
// Doolar ko Europe mai convert krna hai
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);
