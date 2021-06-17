import {getByText } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
import { JSDOM } from 'jsdom'
import fs from 'fs'
import path from 'path'

const html = fs.readFileSync(path.resolve("D:\\Rishav\\jest-test-framework\\src\\html\\Registration.html"), 'utf8');
// const dir=__dirname.split('\\');
// let filePath="";
// dir.map((x,key)=>{
//     if(key<dir.length-2)

// {
//     filePath+=x+"\\";
// }
    
// })
let dom;
let container

describe('Registration.html test suites', () => {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously' })
    container = dom.window.document.body
  })

  it('Should render heading element', () => {
    expect(container.querySelector('#create_Account')).not.toBeNull()
    expect(getByText(container, 'Create Your Account')).toBeInTheDocument()
  })
  it('Should render first name label element', () => {
    expect(container.querySelector('#first_name_label')).not.toBeNull()
    expect(getByText(container, 'First Name')).toBeInTheDocument()
  })
  it('Should render last name label element', () => {
    expect(container.querySelector('#last_name_label')).not.toBeNull()
    expect(getByText(container, 'Last Name')).toBeInTheDocument()
  })
  it('Should render email label element', () => {
    expect(container.querySelector('#email_label')).not.toBeNull()
    expect(getByText(container, 'Email')).toBeInTheDocument()
  })
  it('Should render password label element', () => {
    expect(container.querySelector('#password_label')).not.toBeNull()
    expect(getByText(container, 'Password')).toBeInTheDocument()
  })
  it('Should render confirm password label element', () => {
    expect(container.querySelector('#confirm_password_label')).not.toBeNull()
    expect(getByText(container, 'Please Re-Enter Your Password')).toBeInTheDocument()
  })
  it('Should render create account button element', () => {
    expect(container.querySelector('#createAccount')).not.toBeNull()
    expect(getByText(container, 'Create Account')).toBeInTheDocument()
  })
  it('Should render footer element', () => {
    expect(container.querySelector('#footer')).not.toBeNull();
    const footer=container.querySelector('#footer');
    expect(footer.textContent).toContain("By registring you confirm that you have read and agree to our Terms of Service, and that you have read Privacy Policy.");
  })
  it('Should render forgot password anchor element', () => {
    expect(container.querySelector('#forgot_password')).not.toBeNull()
    expect(getByText(container, 'Forgot Password?')).toBeInTheDocument()
  })
















  
//   it('renders a button element', () => {
//     expect(container.querySelector('button')).not.toBeNull()
//     expect(getByText(container, 'Click me for a terrible pun')).toBeInTheDocument()
//   })

//   it('renders a new paragraph via JavaScript when the button is clicked', async () => {
//     const button = getByText(container, 'Click me for a terrible pun')
    
//     fireEvent.click(button)
//     let generatedParagraphs = container.querySelectorAll('#pun-container p')
//     expect(generatedParagraphs.length).toBe(1)

//     fireEvent.click(button)
//     generatedParagraphs = container.querySelectorAll('#pun-container p')
//     expect(generatedParagraphs.length).toBe(2)

//     fireEvent.click(button)
//     generatedParagraphs = container.querySelectorAll('#pun-container p')
//     expect(generatedParagraphs.length).toBe(3)
//   })
})