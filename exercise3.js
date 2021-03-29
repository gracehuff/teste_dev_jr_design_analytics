let divs = document.querySelectorAll("div.anavmfe_accordionitem_name")
let divAdjascente = document.querySelector("#cat-primary")



let div = document.createElement('div')
div.style.display = 'flex'
div.style.justifyContent = 'space-between'
div.style.alignItems = 'center'
div.style.flexWrap = 'wrap'

divs.forEach(dv =>{

    let divInputs = dv.parentNode.previousSibling.parentNode
    let allInput = divInputs.querySelectorAll("input")
    let allIds = []
    allInput.forEach(ip =>{
        allIds.push(ip.value)
    })

    let baseUrl = "https://www.dell.com/en-us/shop/dell-laptops/sr/laptops/dell?appliedRefinements="

    allIds.forEach(id =>{
        baseUrl += id+","
    })


    let divAux = document.createElement("div")
    
    divAux.style.padding = '10px'
    divAux.style.display = 'flex'

    let a = document.createElement("a")
    a.href = baseUrl
    a.innerText = dv.innerHTML
    divAux.appendChild(a)
    div.appendChild(divAux);
})

divAdjascente.parentElement.insertBefore( div, divAdjascente)