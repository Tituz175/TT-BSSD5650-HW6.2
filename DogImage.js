function DogImage(target) {
    this.target = target;
    this.url = "https://dog.ceo/api/breeds/image/random";

    this.loadImage = function () {
        var request = new XMLHttpRequest();
        let parent = this;

        request.open('GET', this.url, true);
        request.onload = function () {
            var data = JSON.parse(this.response);

            if (request.status >= 200 && request.status < 400) {
                parent.loadImageToTarget(data.message);
            } else {
                console.log("error")
            }
        }
        request.send()
    };
    this.loadImageToTarget = function (result) {
        let dogImg = document.createElement('img');
        dogImg.src = result;
        dogImg.width = "100";
        dogImg.height = "100";
        this.target.append(dogImg);
    };
}