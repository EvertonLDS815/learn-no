const filterElement = document.getElementById("search-no");
const clean = document.getElementById("clean");
const cards = document.querySelectorAll(".nada");

filterElement.addEventListener("input", filterNameCards);
clean.addEventListener("click", filterNameCards);

function filterNameCards() {
    if (filterElement.value !== "") {
        for (let card of cards) {
            let title = card.querySelector(".name-no h3");
            let type = card.querySelector(".name-no .type");
            let nivel = card.querySelector(".name-no .secondtype");
            title = title.textContent.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
            type = type.textContent.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
            nivel = nivel.textContent.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
            let filterText = filterElement.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
            if (!title.includes(filterText)) {
                card.style.display = "none";
                if (!title.includes(filterText)) {
                    card.style.display = "none";
                } else {
                    card.style.display = "block";
                }
                if (!nivel.includes(filterText)) {
                    card.style.display = "none";
                    if (!type.includes(filterText)) {
                        card.style.display = "none";
                    } else {
                        card.style.display = "block";
                    }
                } else {
                    card.style.display = "block";
                }
            } else {
                card.style.display = "block";
            }
        }
    } else {
        for (let card of cards) {
            card.style.display = "block";
        }
    }
}

function goBack() {
    window.history.back();
}

function iconClick() {
    filterElement.value = "";
}