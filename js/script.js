let user = {
  firstName: "Вася",
};

function func() {
  console.log(this.firstName);
}

let funcUser = func.bind(user);
funcUser();

console.log('test 2' );



























// class Menu {
//   constructor(elem) {
//     this._elem = elem;
//     elem.onclick = this.onClick.bind(this);
//   }

//   save() {
//     alert("Сохраняю");
//   }

//   load() {
//     alert("Загружаю");
//   }

//   search() {
//     alert("Ищу");
//   }

//   onClick(event) {
//     let action = event.target.dataset.action;
//     if (action) {
//       this[action]();
//     }
//   };
// }

// new Menu(menu);