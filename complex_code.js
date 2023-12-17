Filename: complex_code.js

/*
This code demonstrates a complex implementation of a banking system. It includes various classes, methods, and data structures to handle customer accounts, transactions, and balances.

The code is designed to showcase advanced techniques and concepts in JavaScript programming, including object-oriented programming, closures, error handling, and data manipulation.

NOTE: This code is for illustrative purposes only and may not be complete or suitable for production use.
*/

// Account Class Definition
class Account {
  constructor(accountNumber, customerName, initialBalance) {
    this.accountNumber = accountNumber;
    this.customerName = customerName;
    this.balance = initialBalance;
    this.transactionHistory = [];
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Invalid deposit amount.");
    }

    this.balance += amount;
    this.transactionHistory.push({
      type: "Deposit",
      amount,
      date: new Date(),
    });
  }

  withdraw(amount) {
    if (amount <= 0 || amount > this.balance) {
      throw new Error("Invalid withdrawal amount.");
    }

    this.balance -= amount;
    this.transactionHistory.push({
      type: "Withdrawal",
      amount,
      date: new Date(),
    });
  }

  getTransactionHistory() {
    return this.transactionHistory;
  }
}

// Bank Class Definition
class Bank {
  constructor(bankName) {
    this.bankName = bankName;
    this.accounts = {};
  }

  createAccount(accountNumber, customerName, initialBalance) {
    if (this.accounts[accountNumber]) {
      throw new Error("Account already exists.");
    }

    const account = new Account(accountNumber, customerName, initialBalance);
    this.accounts[accountNumber] = account;
    return account;
  }

  getAccount(accountNumber) {
    if (!this.accounts[accountNumber]) {
      throw new Error("Account not found.");
    }

    return this.accounts[accountNumber];
  }

  closeAccount(accountNumber) {
    if (!this.accounts[accountNumber]) {
      throw new Error("Account not found.");
    }

    delete this.accounts[accountNumber];
  }

  getBankBalance() {
    let totalBalance = 0;

    for (const accountNumber in this.accounts) {
      totalBalance += this.accounts[accountNumber].balance;
    }

    return totalBalance;
  }
}

// Usage Example
const bank = new Bank("My Bank");

const account1 = bank.createAccount(1001, "John Doe", 1000);
account1.deposit(500);
account1.withdraw(200);

const account2 = bank.createAccount(1002, "Jane Smith", 2000);
account2.deposit(1000);

console.log("Account 1:", account1);
console.log("Account 2:", account2);

console.log("Bank Balance:", bank.getBankBalance());
console.log("Account 1 Transactions:", account1.getTransactionHistory());
console.log("Account 2 Transactions:", account2.getTransactionHistory());