'use strict';

(function () {
    var arr = [];
    arr.length = 5;
    
    function fillArray() {
        var i;
        
        for (i = 0; i < arr.length; ++i) {
        arr[i] = prompt('Введите имя пользователя ' + (i + 1), '');
      }
        
    console.log(arr);
    }
    
    fillArray();
    
    var name = prompt('Введите Ваше имя', '');
    console.log(name);
    
    function hello(name) {
        var check = false;
        
        if (name == null) {
            alert ('Вы не ввели имя пользователя');
                console.log('Ошибка, отсутствует имя пользователя');
        } else {
        
            for (var k = 0; k < arr.length; ++k) {
                if (name == arr[k]) {
                    check = true;
                }
            }

            if (check == true) {
                alert(name + ', Вы успешно вошли');
                console.log(name + ', Вы успешно вошли');
            } else {
                alert('Пользователя с таким именем нет');
                console.log('Ошибка, пользователя с таким именем нет');
            }
        }
    }
    
    hello(name);
}());
