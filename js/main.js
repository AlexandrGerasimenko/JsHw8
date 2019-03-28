// Напилите код, выводящий на страницу текущее время в течение 100 секунд

// Подсказка: создайте элемент, в котором будет отображаться текущее время

// Контент элемента должен обновляться каждую секунду

// var watch = document.body.appendChild(document.createElement('div'));
// var timerId = setInterval(function() {
//     var sec = new Date().getSeconds();
//     if (sec < 10) sec = '0' + sec;
//     var time = new Date().getHours().toLocaleString() + ':' +new Date().getMinutes().toLocaleString() + ':' + sec;
//     watch.innerText = time;
//   }, 1000);

//   setTimeout(function() {
//       watch.innerText = '';
//     clearInterval(timerId);
//     alert( 'Прошло 100 сек !!!' );
//   }, 100000);

var watch = document.body.appendChild(document.createElement('div'));
watch.innerText = new Date().toLocaleString().split(', ')[1];
  for( var x = 0; x < 101; x++){
    (function(arg){
        return function () {
            setTimeout(
                () => {watch.innerText = new Date().toLocaleString().split(', ')[1],
                arg<100? null :(watch.innerText = '',alert('Прошло '+ arg + ' сек!!!'))
                },1000 * arg
            );
        };
    })(x)();
  }




//   Завершите код рекурсивной функции typeMessage так, чтобы при ее вызове на страницу выводился один символ в секунду

// var typeMessage = ( function ( velocity ) {
//     let container = document.getElementById ( "demo" ) ?
//         document.getElementById ( "demo" ) :
//         document.body.appendChild (
//             document.createElement ( "h3" )
//         )
//     container.style = `color: magenta;`
//     var index = 0
//     return function ( message ) {
//         ...
//     }
// })( 1 )

// typeMessage ( `Welcome to the hell` )


var typeMessage = (function(velocity) {
    let container = document.getElementById("demo") ?
      document.getElementById("demo") :
      document.body.appendChild(
        document.createElement("h3")
      );
    container.style = `color: magenta;`
    var index = 0
    return function(message) {
      var timerId = setTimeout(function showMessage() {
        setTimeout(showMessage, velocity * 1000);
        index++;
        index > message.length  ? clearTimeout(timerId) : container.innerText = message.substring(0, index);
      });
    }
})(1)
  
  typeMessage(`Welcome to the hell`);


//   Нужно сделать так, чтобы у всех экзепляров, созданных конструктором User, был унаследованный метод counter(), который считает созданные конструктором экземпляры

// Каждый вызов конструктора увеличивает счетчик экземпляров на 1 и помещать новое значение счетчика в свойство id созданного экземпляра:

// function User ( name ) {
//     this.name = name
//     this.id = this.counter()
// }

// ...

// var users = [
//     new User ( "Семен" ),
//     new User ( "Антон" ),
//     new User ( "Демьян" ),
//     new User ( "Василий" )
// ]
// :warning: После выполнения кода:

// users[1].id = users[1].counter()
// свойство id экземпляра не должно измениться, так же, как и значение счетчика

function User ( name ) {
    this.name = name
    this.id = this.counter()
      
    
}

User.prototype.counter = (function ( ) {
  var counter = 1;
  return function () {
      return counter ++;
  }
})()


var users = [
    new User ( "Семен" ),
    new User ( "Антон" ),
    new User ( "Демьян" ),
    new User ( "Василий" )
]




