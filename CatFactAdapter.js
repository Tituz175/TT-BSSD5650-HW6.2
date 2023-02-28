function CatFactAdapter(target) {

    let catFact = new CatFact(target);

    return {
        loadData: function (argument) {
            catFact.loadFact(argument);
        },
        loadArrayToTarget: function () {
            catFact.loadArrayToTarget();
        }
    }
}