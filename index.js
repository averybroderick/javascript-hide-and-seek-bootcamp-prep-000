function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target');
}

function deepestChild() {
  debugger;
  let current = document.querySelector('#grand-node');
  let next = [];

  while (current) {
    console.log(current.children)
    console.log(current.childElementCount)
    if(current.childElementCount === 0) {
      return current;
    }

    if(current.childElementCount > 0) {
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
