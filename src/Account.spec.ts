import AccountBuilder from "./AccountBuilder";
import TransferService from "./TransferService";

test("Should be able to create an account", () => {
  
  const account = new AccountBuilder("123.456.789-10")
      .setBank("123")
      .setBranch("1122")
      .setAccount("123456-7")
      .build();
  
  expect(account.getBalance()).toBe(0);
})

test("Should be able to create an account and make a credit", () => {
  
  const account = new AccountBuilder("123.456.789-10")
      .setBank("123")
      .setBranch("1122")
      .setAccount("123456-7")
      .build();
  
  account.credit(1000);
  expect(account.getBalance()).toBe(1000);
})

test("Should be able to create an account and make a debit", () => {
  
  const account = new AccountBuilder("123.456.789-10")
      .setBank("123")
      .setBranch("1122")
      .setAccount("123456-7")
      .build();
  
  account.credit(1000);
  account.debit(700)
  expect(account.getBalance()).toBe(300);
})

test("Should be able to create two accounts and make a transfer between them", () => {
  
  const accountFrom = new AccountBuilder("123.456.789-10")
      .setBank("123")
      .setBranch("1122")
      .setAccount("123456-7")
      .build();
  
  const accountTo = new AccountBuilder("234.567.890-01")
      .setBank("123")
      .setBranch("1122")
      .setAccount("987654-5")
      .build();
  
  accountFrom.credit(1000);
  accountTo.credit(500)
  
  const transferService = new TransferService();
  transferService.transfer(accountFrom, accountTo, 400);

  expect(accountFrom.getBalance()).toBe(600);
  expect(accountTo.getBalance()).toBe(900);
})