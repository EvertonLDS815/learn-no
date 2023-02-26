
const filterElement = document.getElementById("search-no");
const cards = document.querySelectorAll(".container-card");
const view = document.querySelector("body");

filterElement.addEventListener("input", filterNameCards);

window.addEventListener("scroll", scrollRoll)
function filterNameCards() {
    if (filterElement.value !== "") {
        for (let card of cards) {
            let title = card.querySelector(".name-no h3");
            title = title.textContent.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            let filterText = filterElement.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            if (!title.includes(filterText)) {
                card.style.display = "none";
            } else {
                    card.style.display = "flex";
            }
        }
    } else {
        for (let card of cards) {
                card.style.display = "flex";
        }
    }
}

function goBack() {
    window.history.back();
}