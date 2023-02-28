function ImageFacade() {

    this.allImage = function () { 
        let containerDiv = document.createElement('div');

        let imageContainer = document.createElement('div');
        imageContainer.style.display = "flex";
        let image1 = document.createElement('div');
        let image2 = document.createElement('div');
        let catFact = document.createElement('p');

        new DogImage(image1).loadImage();
        new DogImage(image2).loadImage();
        new CatFact(catFact).loadFact();


        imageContainer.append(image1);
        imageContainer.append(image2);
        containerDiv.append(imageContainer);
        containerDiv.append(catFact);

        document.getElementById("results").prepend(containerDiv);
    }
}