//Create map
const map = L.map('mapid').setView([-27.222633,-49.6455874], 15)

//Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

//Create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

//Create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector("[name=lat]").value = lat
    document.querySelector("[name=lng]").value = lng

    //Remove icon
    marker && map.removeLayer(marker)     

    //Add icon layer
    marker = L.marker([lat, lng], {icon}).addTo(map)
})

//Add photos field
function addPhotoField() {
    //Pegar o container de fotos #image
    const container = document.querySelector("#image")

    //Pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll(".new-upload")

    //Realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //Verificar se o campo está vazio, se sim,  não add ao container de imagens
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }
    
    //Limpar o campo antes de adicionar ao container de imagens
    input.value = ""

    //Adicionar o clone ao container de #image
    container.appendChild(newFieldContainer)
}

//Delete Field
function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll(".new-upload")

    if(fieldsContainer.length <= 1){
        //Limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    //Delete field
    span.parentNode.remove()
}

//Select yes or no
function toggleSelect(event) {
    //Remove the class .active(The of buttons)
    document.querySelectorAll(".button-select button").forEach((button) => {
        button.classList.remove("active")
    })

    //Put the class .active in that button clicked
    const button = event.currentTarget
    button.classList.add("active")

    //Update the input hidden with the value selected
    const input = document.querySelector('[name="open_on_weekends"]')
    
    //Check be yes or no
    input.value = button.dataset.value
}
