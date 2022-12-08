
const button1 = document.querySelector("#button-1");
const button2 = document.querySelector("#button-2");
const button3 = document.querySelector("#button-3");

const popup1 = document.querySelector("#popup-1");
const popup2 = document.querySelector("#popup-2");
const popup3 = document.querySelector("#popup-3");

button1.addEventListener("click", () => togglePopup("popup-1"));
button2.addEventListener("click", () => togglePopup("popup-2"));
button3.addEventListener("click", () => togglePopup("popup-3"));

function togglePopup(popupName) {
    const element = document.getElementById(popupName);
    const popupShown = element.getAttribute("shown");

    if (popupShown) {
        element.removeAttribute("shown");
    } else {
        element.setAttribute("shown", true);

        const closePopup = () => {
            element.removeAttribute("shown");
        }
        elementCloseManager.addElement(closePopup, this, element);
    }
}