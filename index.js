function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target');
}

function deepestChild() {
  let current = document.querySelector('#grand-node');
  let next = [];

  while (current) {
    if(!current.children) {
      return current;
    }

    if(current.children) {
      for (let i = 0; i < current.children.length; i++) {
        next.push(current.children[i]);
      }
    }

    current = next.shift();
  }

  return null;
}

function increaseRankBy(n) {
  var rankedList = document.querySelectorAll('.ranked-list');
  for(var i = 0; i < rankedList.length; i++) {
    for(var j = 0; j < rankedList[i].children.length; j++) {
       rankedList[i].children[j].innerHTML = parseInt(rankedList[i].children[j].innerHTML) + n;
    }
  }
}
