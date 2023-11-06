const titres = document.querySelectorAll("h3")
console.log((titres))

document.addEventListener("DOMContentLoaded", function() {
    titres.forEach(titre => {
        titre.addEventListener("click", (e) => {
            const dates = titre.nextElementSibling;
            console.log(dates)
            if (dates && dates.tagName === "H4") {
                const p = document.createElement("p");
                p.innerHTML = "voici ma description";
                dates.appendChild(p);
                console.log(dates);
            }
        });
    });
});