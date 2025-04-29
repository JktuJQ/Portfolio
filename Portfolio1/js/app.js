function scrollToElement(elementSelector) {
    const element = document.getElementsByClassName(elementSelector)[0];
    element.scrollIntoView({ behavior: "smooth" });
}

const about = document.getElementById("about");
about.addEventListener("click", () => {
    scrollToElement("about");
});

const projects = document.getElementById("projects");
projects.addEventListener("click", () => {
    scrollToElement("projects");
});

const contact = document.getElementById("contact");
contact.addEventListener("click", () => {
    scrollToElement('contact');
});