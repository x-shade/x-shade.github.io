'use strict';

(function () {
    var arr = [];
    arr.length = 5;
    
    function fillArray() {
        var i;
        
        for (i = 0; i < arr.length; ++i) {
        arr[i] = prompt('Введите имя пользователя ' + (i + 1), '');
      };
        
    console.log(arr);
    };
    
    fillArray();
    
    var name = prompt('Введите Ваше имя', '');
    console.log(name);
    
    var message = {
        nullName: 'Вы не ввели имя пользователя',
        nullNameConsole: 'Ошибка, отсутствует имя пользователя', 
        loginComplete: ', Вы успешно вошли',
        loginError: 'Ошибка входа, пользователя с таким именем нет'
    };
    
    function validateData(name) {
        var check = false;
        
        for (var k = 0; k < arr.length; ++k) {
            if (name == arr[k]) {
                    check = true;
            }
        }

        if (check == true) {
            alert(name + message.loginComplete);
            console.log(name + message.loginComplete);
        } else {
            alert( message.loginError );
            console.log( message.loginError );
        }
    };
    
    function authoriseUser(name) {
        
        if (!name) {
            alert ( message.nullName );
                console.log( message.nullNameConsole );
        } else {
            validateData(name);
        }
    };
    
    authoriseUser(name);
}());
