document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("getText").addEventListener("click", (event) =>{
        let article = new ArticleFacade();
        article.allText();
    })
    document.getElementById("getPet").addEventListener("click", (event) =>{
        let image = new ImageFacade();
        image.allImage();
    })
})