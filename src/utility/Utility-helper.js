const { Name_Regex, Email_Regex, Password_Regex, UpperCase_Regex, LowerCase_Regex, Number_Regex, Special_Character_Regex } = require("../constants/Regex");

export const isNameValid = (name) => {
  return Name_Regex.test(name);
};
export const isEmailValid = (emailId) => {
  return Email_Regex.test(emailId);
};
export const isPasswordValid = (password) => {
  return Password_Regex.test(password);
};
export const isUpperCaseExists=(password)=>{

    return UpperCase_Regex.test(password);
}
export const isLowerCaseExists=(password)=>{
    return LowerCase_Regex.test(password);
}
export const isNumberExists=(password)=>{
    return Number_Regex.test(password);
}
export const isSpecialCharacterExists=(password)=>{
    return Special_Character_Regex.test(password);
}
export const isLengthGreaterThanSeven=(password)=>{
    return password.length>7;
}