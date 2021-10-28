import AccountBuilder from "./AccountBuilder";

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