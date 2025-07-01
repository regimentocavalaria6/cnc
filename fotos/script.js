// Função para mostrar a imagem selecionada
function showImage(imageId) {
    const overlay = document.getElementById("overlay");
    const imgElement = document.getElementById("overlay-img");

    overlay.style.display = "flex";
    imgElement.src = imageId;

    document.body.classList.add('blur');
}

// Função para fechar a imagem ampliada
function closeImage() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    document.body.classList.remove('blur');
}

// Função para carregar as imagens dinamicamente
function loadGallery() {
    const gallery = document.getElementById("gallery");

    // Lista de imagens (adicione ou remova conforme necessário)
    const images = [
        "images/foto1.jpg",
        "images/foto2.jpg",
        "images/foto3.jpg",
        "images/foto4.jpg",
        // Você pode adicionar mais imagens manualmente aqui
    ];

    // Preencher a galeria com as imagens
    images.forEach(image => {
        const imageDiv = document.createElement("div");
        imageDiv.classList.add("image");

        const imgElement = document.createElement("img");
        imgElement.src = image;
        imgElement.alt = "Imagem do Evento";
        imgElement.onclick = function () { showImage(image); };

        imageDiv.appendChild(imgElement);
        gallery.appendChild(imageDiv);
    });
}

// Carregar a galeria quando a página for carregada
window.onload = loadGallery;
