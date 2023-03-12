let fotos = 5;
let gallerySection = document.getElementById("gallery");
let captions = ["ExpoIngenierías FJ2022", "ExpoIngenierías AD2022", "Poposta", "Tutoreo Prep@Net", "Acondicionamiento dancístico"];

for(let i = 1; i <= fotos; i++){
    gallerySection.innerHTML += '<figure> <img src="Material/Gallery/' + i + '.jpg" height="111px"> <figcaption>' + captions[i-1] + '</figcaption> </figure>';
}
