function FDAResult(target) {
    this.target = target;
    this.url = "https://api.fda.gov/food/enforcement.json?limit=10";

    this.loadData = function () {
        var request = new XMLHttpRequest();
        let parent = this;

        request.open('GET', this.url, true);
        request.onload = function () {
            var data = JSON.parse(this.response).results;
            var result = [];
            if (request.status >= 200 && request.status < 400) {
                data.forEach((recall) => {
                    result.push(`${recall.reason_for_recall}<br>`)
                })
                parent.loadArrayToTarget(result);
            } else {
                console.log("error")
            }
        }
        request.send()
    }

    this.loadArrayToTarget = function (result) {
        target.innerHTML = result.join(" ");
    }

}