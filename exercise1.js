let containerWithIcons = document.getElementById("divResourceLinks")
containerWithIcons.classList.add("col-lg-6")
let containerDellEmc = document.getElementById('divEnterpriseProductLinks')
containerDellEmc.classList.add("col-lg-6")

let divForTwo = document.createElement("div")
containerWithIcons.parentElement.insertBefore(divForTwo, containerWithIcons)

let itensEmc = containerDellEmc.querySelectorAll(".container > div >div ");

itensEmc.forEach(it => it.classList.add("col-md-12"))

divForTwo.appendChild(containerWithIcons)
divForTwo.appendChild(containerDellEmc)
divForTwo.classList.add("row")

let container = containerWithIcons.firstElementChild

let containerRow = containerWithIcons.querySelector(".row")
let containerRow2 = containerRow.cloneNode()

containerRow2.classList.add("row2") 
containerRow2.classList.add("mt-6") 
let rows = Array.from(containerRow.children)

rows.forEach(r => r.classList.add("col-lg-6"))

let itens12 = [rows[0], rows[1]]

let itens34 = [rows[2], rows[3]]

containerRow.remove()

    containerRow.appendChild(itens12[0])
    containerRow.appendChild(itens12[1])
    containerRow2.appendChild(itens34[0])
    containerRow2.appendChild(itens34[1])
    container.appendChild(containerRow)
    container.appendChild(containerRow2)
