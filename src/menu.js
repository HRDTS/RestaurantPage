import Icon from './icon.png';

const menu = () => {
    const div = document.getElementById("content");
    div.innerHTML = ""

    const title = document.createElement("div")
    title.innerHTML = "PestoResto";
    title.setAttribute("id", "titleID")
    div.appendChild(title)

    const titleText = document.createElement("div")
    titleText.innerHTML = "MENU PAGE";
    titleText.setAttribute("id", "titleTextID")
    div.appendChild(titleText)


    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.height = "500";
    myIcon.setAttribute("id", "imageID")
    div.appendChild(myIcon);

    const description = document.createElement("div")
    description.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae tincidunt erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse vel risus vestibulum, ultrices nibh eu, convallis neque. Nulla purus purus, tempor sit amet metus nec, rhoncus dapibus quam. Maecenas a ligula condimentum, bibendum massa ut, blandit orci. In hac habitasse platea dictumst. Donec nec dolor eget metus bibendum consequat";
    description.setAttribute("id", "descriptionID")
    div.appendChild(description)
}

export default menu;