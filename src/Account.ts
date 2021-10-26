import AccountBuilder from "./AccountBuilder";

export default class Account {
  bank: string | undefined;
  branch: string | undefined;
  account: string | undefined;
  balance: number;

  constructor(accountBuilder: AccountBuilder) {
    this.bank = accountBuilder.bank;
    this.branch = accountBuilder.branch;
    this.account = accountBuilder.account;    
    this.balance = 0;
  }

  credit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }

}