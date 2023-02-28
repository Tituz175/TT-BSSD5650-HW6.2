function CatFact(target) {
    this.target = target;
    this.url = "https://catfact.ninja/fact";

    this.loadFact = function (){
        var request = new XMLHttpRequest();
        let parent = this;

        request.open('GET', this.url, true);
        request.onload = function () {
            var data = JSON.parse(this.response)

            if (request.status >= 200 && request.status < 400) {
                parent.loadArrayToTarget(data.fact);
            } else {
                console.log("error")
            }
        }
        request.send()
    }

    this.loadArrayToTarget = function (result) {
        this.target.innerHTML = result
    }

}