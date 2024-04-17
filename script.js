let generate_btn = document.querySelector(".generate_btn");

generate_btn.addEventListener("click", fetchPics);

//document.getElementById("generate_btn").onclick = fetchPics;

function fetchPics() {
    let catsImgDiv = document.querySelector(".catsImgDiv")
    catsImgDiv.innerHTML = ''

    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        let catsImgUrl = data[0].url
        console.log(catsImgUrl)

        let catsImgEl = document.createElement("img")
        catsImgEl.setAttribute('src', catsImgUrl)
        catsImgEl.classList.add("showcase")
        
        console.log(catsImgEl)

        let catsImgDiv = document.querySelector(".catsImgDiv")
        catsImgDiv.appendChild(catsImgEl)

    })
    .catch(err => console.log(err))
}