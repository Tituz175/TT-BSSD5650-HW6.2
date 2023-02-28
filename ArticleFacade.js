function ArticleFacade() {
     this.allText = function () { 
        let articleDiv = document.createElement('div');

        let ul = document.createElement('ul');
        let li1 = document.createElement('li');
        let li2 = document.createElement('li');

        new CatFact(li1).loadFact();
        new FDAResult(li2).loadData();

        ul.append(li1);
        ul.append(li2);
        articleDiv.append(ul);

        document.getElementById("results").prepend(articleDiv);
    }
}