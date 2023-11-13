document.addEventListener('DOMContentLoaded', function () {
    const leftList = document.getElementById('leftList');
    const rightList = document.getElementById('rightList');
  
    const fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Strawberry', 'Watermelon'];
  
    function addToRightBasket(fruit) {
      const listItem = document.createElement('li');
      listItem.textContent = fruit;
      rightList.appendChild(listItem);
    }
  
    fruits.forEach(fruit => {
      const listItem = document.createElement('li');
      listItem.textContent = fruit;
      listItem.addEventListener('click', function () {
        addToRightBasket(fruit);
      });
      leftList.appendChild(listItem);
    });
  });
  