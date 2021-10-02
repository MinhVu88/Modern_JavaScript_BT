/* IIFE (Immediately Invoked Function Expression):
* Regular IIFE: (function() {})() 
* Arrow IIFE: (() => {})() 
- https://blog.bitsrc.io/understanding-javascript-iifes-like-a-boss-35d20dc923db

- https://javascript.plainenglish.io/https-medium-com-javascript-in-plain-english-stop-feeling-iffy-about-using-an-iife-7b0292aba174

- https://flaviocopes.com/javascript-iife/

- https://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript
*/

const itemList = document.querySelector('#item-list');
const addBtn = document.querySelector('.add-btn');
const updateBtn = document.querySelector('.update-btn');
const deleteBtn = document.querySelector('.delete-btn');
const backBtn = document.querySelector('.back-btn');
const clearBtn = document.querySelector('.clear-btn');
const itemNameInput = document.querySelector('#item-name');
const itemCaloriesInput = document.querySelector('#item-calories');
const allCalories = document.querySelector('.total-calories');

let itemId;
let foundItem;
let storedItems;
const localStorageKey = 'tracalorieItems';

// Storage Controller/Module
/*
  - By default, local storage stores key-value pairs,
    in which value contains only JSON strings

  - storedItems is an array of objects, so JSON.stringify() 
    turns it into a string value that can be added to local storage

  - JSON.parse() turns it back to an array of objects or an object,
    once it's pulled out of local storage to be used in js files
*/
const StorageController = (function() {
  return {
    addItemToLocalStorage(item) {
      // check if there's any key named "items" in local storage
      if (localStorage.getItem(localStorageKey) === null) {
        storedItems = [];

        storedItems.push(item);

        localStorage.setItem(localStorageKey, JSON.stringify(storedItems));
      } else {
        storedItems = JSON.parse(localStorage.getItem(localStorageKey)) || [];

        storedItems.push(item);

        // reset local storeage with new added items
        localStorage.setItem(localStorageKey, JSON.stringify(storedItems));
      }
    },
    getItemFromLocalStorage() {
      if(localStorage.getItem(localStorageKey === null)) {
        storedItems = [];
      } else {
        storedItems = JSON.parse(localStorage.getItem(localStorageKey)) || [];
      }

      return storedItems;
    },
    updateLocalStorage(updatedItem) {
      storedItems = JSON.parse(localStorage.getItem(localStorageKey)) || [];

      /* More about Array.splice()

       - https://www.freecodecamp.org/news/javascript-splice-how-to-use-the-splice-js-array-method/

       - https://www.javascripttutorial.net/javascript-array-splice/
       
       - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
      */
      storedItems.forEach((storedItem, index) => {
        if(storedItem.id === updatedItem.id) {
          storedItems.splice(index, 1, updatedItem);
        }
      });
    },
    deleteItemFromLocalStorage(id) {
      storedItems = JSON.parse(localStorage.getItem(localStorageKey)) || [];

      storedItems = storedItems.filter(item => item.id !== id);

      localStorage.setItem(localStorageKey, JSON.stringify(storedItems));
    },
    clearLocalStorage() {
      localStorage.removeItem(localStorageKey);
    }
  };
})();

// Item Controller/Module
const ItemController = (function() {
  // item constructor: for each food item added in the input field
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // data structures (state in ReactJS)
  // this's private & can't accessed directly in the browser
  const data = {
    // items: [
    //   {id: 0, name: 'pizza', calories: 1200},
    //   {id: 1, name: 'pasta', calories: 400},
    //   {id: 2, name: 'hotdog', calories: 300}
    // ],
    items: StorageController.getItemFromLocalStorage(),
    // an updated item is a current one
    currentItem: null,
    totalCalories: 0
  };

  // whatever's returned from the module function can be accessed in the browser 
  // in other words, the methods specified within the returned object here are all public
  return {
    getItems() {
      return data.items;
    },
    addNewItemToDataArray(name, calories) {
      let totalItems = data.items.length;

      // generate id auto-incrementally
      if (totalItems > 0) {
        itemId = data.items[totalItems - 1].id + 1;
      } else {
        itemId = 0;
      }

      // add new item to data
      const newItem = new Item(itemId, name, calories);

      data.items.push(newItem);

      return newItem;
    },
    getTotalCalories() {
      let total_calories = 0;

      // as item.calories is a string, so it must be converted into a number
      // by placing "+" in front of it for subsequent calculations
      data.items.forEach(item => total_calories += +item.calories);

      data.totalCalories = total_calories;

      return data.totalCalories;
    },
    getItemById(id) {
      data.items.forEach(item => {
        if(item.id === id) {
          foundItem = item;
        }
      });

      return foundItem;
    },
    getCurrentItem() {
      return data.currentItem;
    },
    setCurrentItem(item) {
      data.currentItem = item;
    },
    updateItem(name, calories) {
      data.items.forEach(item => {
        // a potentially updated item === the current item
        if(item.id === data.currentItem.id) {
          item.name = name;
          item.calories = +calories;
          foundItem = item;
        }
      });

      return foundItem;
    },
    deleteItem(id) {
      data.items = data.items.filter(item => item.id !== id);
    },
    clearAllItems() {
      data.items = [];
    },
    logData() {
      return data;
    }
  };
})();

// UI Controller/Module
const UIController = (function() {
  return {
    setInitialState() {
      // in the initial state, all the input fields are empty
      UIController.clearInputFields();

      // add-btn is clickable (to keep the 'Enter' keypress functionality)
      addBtn.disabled = false;

      // when this method's called, all the buttons, except add btn, are hidden
      updateBtn.style.display = 'none';
      deleteBtn.style.display = 'none';
      backBtn.style.display = 'none';
      addBtn.style.display = 'inline';
    },
    populateItemList(items) {
      let html = '';

      items.forEach(item => {
        html += `
          <li class="collection-item" id="item-${item.id}">
            <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
              <i class="edit-item material-icons left">edit</i>
            </a>
          </li>
        `;
      });

      // add the items (li) to the list (ul)
      itemList.innerHTML = html;
    },
    getItemInput() {
      return {name: itemNameInput.value, calories: itemCaloriesInput.value};
    },
    addNewItemToList(item) {
      // 1st, show list if there's any item in it
      itemList.style.display = 'block';

      // create li tag in the DOM
      const li = document.createElement('li');

      li.className = 'collection-item';

      li.id = `item-${item.id}`;

      li.innerHTML = `
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item material-icons left">edit</i>
        </a>
      `;

      // add li/newItem to ul/itemList
      itemList.insertAdjacentElement('beforeend', li);
    },
    deleteItemFromList(id) {
      document.querySelector(`#item-${id}`).remove();
    },
    clearInputFields() {
      itemNameInput.value = '';
      itemCaloriesInput.value = null;
    },
    clearAllItemsInList() {
      const allListItems = document.querySelectorAll('#item-list li');

      allListItems.forEach(item => item.remove());
    },
    hideEmptyList() {
      itemList.style.display = 'none';
    },
    showTotalCalories(calories) {
      allCalories.textContent = calories;
    },
    showPotentiallyUpdatedItemInInputFields() {
      itemNameInput.value = ItemController.getCurrentItem().name;
      itemCaloriesInput.value = ItemController.getCurrentItem().calories;

      // when a potentially edited item shows up in the input fields,
      // add-btn is hidden & other buttons are visible (update-btn, delete-btn & back-btn)
      // this is the edit/update state, which's opposite to the initial state
      UIController.setEditState();
    },
    setEditState() {
      updateBtn.style.display = 'inline';
      deleteBtn.style.display = 'inline';
      backBtn.style.display = 'inline';
      addBtn.style.display = 'none';

      // add-btn is disabled (to keep the 'Enter' keypress functionality)
      addBtn.disabled = true;
    },
    showUpdatedItemInList(item) {
      // Solution #1 (verbose)
      // const all_li_tags = document.querySelectorAll('#item-list li');
      // all_li_tags.forEach(li => {
      //   itemId = li.getAttribute('id');
      //   if(itemId === `item-${item.id}`) {
      //     document.querySelector(`#${itemId}`).innerHTML = `
      //       <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
      //       <a href="#" class="secondary-content">
      //         <i class="edit-item material-icons left">edit</i>
      //       </a>
      //     `;
      //   }
      // });

      // Solution #2 (succinct)
      // document.querySelector(`#item-${item.id}`).innerHTML = `
      //   <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
      //   <a href="#" class="secondary-content">
      //     <i class="edit-item material-icons left">edit</i>
      //   </a>
      // `;

      // Solution #3 (more succinct)
      document.querySelector(`#item-${item.id}> strong`).textContent = `${item.name}: `;
      document.querySelector(`#item-${item.id}> em`).textContent = `${item.calories} Calories`;
    }
  };
})();

// App Controller/Module
const MainController = (function(itemCtrl, storageCtrl, uiCtrl) {
  const loadEventListeners = function() {
    // EVENT #1: click | add-btn
    addBtn.addEventListener('click', e => {
      e.preventDefault();

      const item = uiCtrl.getItemInput();

      // item can only be added to the list if both name & calories are provided
      if(item.name !== undefined && item.calories !== undefined) {
        const newItem = itemCtrl.addNewItemToDataArray(item.name, item.calories);

        uiCtrl.addNewItemToList(newItem);

        // get total calories & show the number in the ui
        const totalCalories = itemCtrl.getTotalCalories();
        uiCtrl.showTotalCalories(totalCalories);

        // store added items in local storage
        storageCtrl.addItemToLocalStorage(newItem);

        // clear the input fields after a new item is added to the list
        uiCtrl.clearInputFields();
      }
    });

    /*
    - In either state (inital or edit), if "enter" is pressed 
      while 1 of the input field is in focus

    - The potentially updated item gets added to the list again, 
      creating duplicate items

    - To fix this, "enter" must be disabled during both states
    */
    // document.addEventListener('keypress', e => {
    //   if(e.key === 'Enter') {
    //     e.preventDefault();
    //     return false;
    //   }
    // });

    // EVENT #2: click | item-list & edit-item
    // as the edit icon isn't displayed when the page 1st loads
    // it's only shown when an item's in edit mode 
    // so to get it, event delegation is utilized by 1st targeting its parent element (item-list)
    itemList.addEventListener('click', e => {
      e.preventDefault();

      if(e.target.classList.contains('edit-item')) {
        // get item id (in index.html -> item-#)
        /* 
          <li id="item-#"> (parentNode)
            <a> (parentNode)
              <i class="edit-item">edit</i> (child)
            </a>
          </li>
        */
        itemId = e.target.parentNode.parentNode.id;

        let IDsArray = itemId.split('-');

        // get the actual number id in item-# (#: 0, 1, 2, etc.)
        const id = +IDsArray[1];

        const potentiallyUpdatedItem = itemCtrl.getItemById(id);

        // a potentially updated item === the current item
        itemCtrl.setCurrentItem(potentiallyUpdatedItem);
        uiCtrl.showPotentiallyUpdatedItemInInputFields();
      }
    });

    // EVENT #3: click | update-btn
    updateBtn.addEventListener('click', e => {
      e.preventDefault();

      // update item on the ui
      const itemInput = uiCtrl.getItemInput();
      const updatedItem = itemCtrl.updateItem(itemInput.name, itemInput.calories);
      uiCtrl.showUpdatedItemInList(updatedItem);

      // update the total calories on the ui
      const totalCalories = itemCtrl.getTotalCalories();
      uiCtrl.showTotalCalories(totalCalories);

      // update stored items in local storage
      storageCtrl.updateLocalStorage(updatedItem);

      // set the ui back to the initial state
      uiCtrl.setInitialState();
    });

    // EVENT #4: click | delete-btn
    deleteBtn.addEventListener('click', e => {
      e.preventDefault();

      const currentItem = itemCtrl.getCurrentItem();

      // remove an item by its id both from the local data & the ui
      itemCtrl.deleteItem(currentItem.id);
      uiCtrl.deleteItemFromList(currentItem.id);

      // update the total calories on the ui
      const totalCalories = itemCtrl.getTotalCalories();
      uiCtrl.showTotalCalories(totalCalories);

      // remove item from local storage
      storageCtrl.deleteItemFromLocalStorage(currentItem.id);

      // set the ui back to the initial state
      uiCtrl.setInitialState();
    });

    // EVENT #5: click | clear-btn
    clearBtn.addEventListener('click', e => {
      e.preventDefault();

      // remove all local data
      itemCtrl.clearAllItems();

      // update the total calories on the ui
      const totalCalories = itemCtrl.getTotalCalories();
      uiCtrl.showTotalCalories(totalCalories);

      // remove all items in the ui
      uiCtrl.clearAllItemsInList();

      // clear items in local storage
      storageCtrl.clearLocalStorage();

      // with all items gone, the empty list should be hidden
      uiCtrl.hideEmptyList();
    });

    // EVENT #6: click | back-btn
    // while in the edit state, if back-btn is clicked, the app's initial state is set
    backBtn.addEventListener('click', uiCtrl.setInitialState());
  };

  return {
    // the starting point/method of the app
    init() {
      // set the app's initial state
      uiCtrl.setInitialState();

      // fetch data from ItemController
      const items = itemCtrl.getItems();

      // if the list is empty, then hide it
      // otherwise, use UIController to populate it with items
      if(items.length === 0) {
        uiCtrl.hideEmptyList();
      }else {
        uiCtrl.populateItemList(items);
      }

      // show the total calories when the page 1st loads
      const totalCalories = itemCtrl.getTotalCalories();
      uiCtrl.showTotalCalories(totalCalories);

      loadEventListeners();
    }
  }
})(ItemController, StorageController, UIController);

// Initialize App
MainController.init();