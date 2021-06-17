export const Name_Regex = new RegExp("^[A-Za-z0-9 _-]*$");
export const Email_Regex = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
export const Password_Regex = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/);
export const UpperCase_Regex=new RegExp(/[A-Z]/);
export const LowerCase_Regex=new RegExp(/[a-z]/);
export const Number_Regex=new RegExp(/\d/);
export const Special_Character_Regex=new RegExp(/[~`!#$@%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);