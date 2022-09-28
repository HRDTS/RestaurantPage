import mainPage from "./module";
import menu from "./menu";
import contact from "./contact"
import './style.css';

// mainPage() will default the homepage
mainPage()

const header = document.querySelector("ul")
const homeList = document.getElementsByClassName("home")[0]
const menuList = document.getElementsByClassName("menu")[0]
const contactList = document.getElementsByClassName("contact")[0]
console.log(homeList)

homeList.addEventListener("click", mainPage())

menuList.addEventListener("click", menu())

contactList.addEventListener("click", contact())