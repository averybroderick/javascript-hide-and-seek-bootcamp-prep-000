function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target');
}

function deepestChild() {

}

function increaseRankBy(n) {
  var rankedList = document.querySelectorAll('.ranked-list');
  for(var i = 0; i < rankedList.length; i++) {
    for(var j = 0; j < rankedList[i].children.length; j++) {
       rankedList[i].children[j].innerHTML = parseInt(rankedList[i].children[j].innerHTML) + n;
    }
  }
}
