import {
  isNameValid,
  isPasswordValid,
  isEmailValid,
  isLengthGreaterThanSeven,
  isSpecialCharacterExists,
  isNumberExists,
  isUpperCaseExists,
  isLowerCaseExists,
} from "../../utility/Utility-helper";

describe("Utility-helper test suites", () => {
  test("Should return false if first name contains any special character except space and underscore", async () => {
    const input = "@#Test";
    expect(isNameValid(input)).toBeFalsy();
  });
  test("Should return true if first name contain special character underscore", async () => {
    const input = "Test_test";
    expect(isNameValid(input)).toBeTruthy();
  });
  test("Should return true if first name contain special character space", async () => {
    const input = "Test test";
    expect(isNameValid(input)).toBeTruthy();
  });
  test("Should return true if first name contain only lower case letters", async () => {
    const input = "test";
    expect(isNameValid(input)).toBeTruthy();
  });
  test("Should return true if first name contain only upper case letters", async () => {
    const input = "TEST";
    expect(isNameValid(input)).toBeTruthy();
  });
  test("Should return true if first name contain special character '-'", async () => {
    const input = "Test-test";
    expect(isNameValid(input)).toBeTruthy();
  });
  test("Should return false if email does not has symbol @", async () => {
    const input = "testcom";
    expect(isEmailValid(input)).toBeFalsy();
  });
  test("Should return false if email does not has any character before symbol @", async () => {
    const input = "@gmail.com";
    expect(isEmailValid(input)).toBeFalsy();
  });
  test("Should return false if email has more than one symbol @ or '.'", async () => {
    const input = "test@gmail@gmail.com";
    expect(isEmailValid(input)).toBeFalsy();
  });
  test("Should return true if email has letters, one symbol @ and '.'", async () => {
    const input = "test@gmail.com";
    expect(isEmailValid(input)).toBeTruthy();
  });
  test("Should return false if password length is less than 8 characters", async () => {
    const input = "Test@12";
    expect(isPasswordValid(input)).toBeFalsy();
  });
  test("Should return false if password length is 8 characters but does not contain any Uppercase letter", async () => {
    const input = "test@123";
    expect(isPasswordValid(input)).toBeFalsy();
  });
  test("Should return false if password length is 8 characters but does not contain any lowercase letter", async () => {
    const input = "TEST@123";
    expect(isPasswordValid(input)).toBeFalsy();
  });
  test("Should return false if password length is 8 characters but does not contain any special character", async () => {
    const input = "TEST0123";
    expect(isPasswordValid(input)).toBeFalsy();
  });
  test("Should return false if password length is 8 characters but does not contain any numbers", async () => {
    const input = "TEST@tes";
    expect(isPasswordValid(input)).toBeFalsy();
  });
  test("Should return true if password length is 8 characters and has atleast one special character,one lowercase, one uppercase letter and one number", async () => {
    const input = "Test@123";
    expect(isPasswordValid(input)).toBeTruthy();
  });
  test("Should return true if password length is greater than 7", async () => {
    const input = "Test@123";
    expect(isLengthGreaterThanSeven(input)).toBeTruthy();
  });
  test("Should return false if password length is less or equal to 7", async () => {
    const input = "Test@12";
    expect(isLengthGreaterThanSeven(input)).toBeFalsy();
  });
  test("Should return true if password contains atleast one special character", async () => {
    const input = "Test@12";
    expect(isSpecialCharacterExists(input)).toBeTruthy();
  });
  test("Should return false if password does not contains any  special character", async () => {
    const input = "Test12";
    expect(isSpecialCharacterExists(input)).toBeFalsy();
  });
  test("Should return false if password does not contains any number", async () => {
    const input = "Test";
    expect(isNumberExists(input)).toBeFalsy();
  });
  test("Should return true if password contains atleast one number", async () => {
    const input = "Test123";
    expect(isNumberExists(input)).toBeTruthy();
  });
  test("Should return false if password does not contains any upperCase letter", async () => {
    const input = "test";
    expect(isUpperCaseExists(input)).toBeFalsy();
  });
  test("Should return true if password contains atleast one upperCase", async () => {
    const input = "Test";
    expect(isUpperCaseExists(input)).toBeTruthy();
  });
  test("Should return false if password does not contains any lowercase letter", async () => {
    const input = "TEST";
    expect(isLowerCaseExists(input)).toBeFalsy();
  });
  test("Should return true if password contains atleast one lowercase letter", async () => {
    const input = "Test";
    expect(isLowerCaseExists(input)).toBeTruthy();
  });
});
