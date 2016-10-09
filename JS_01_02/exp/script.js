'use strict'; 

(function () {
    var a = prompt('Введите целое число a', '');
    
    var x = prompt('Введите степень x (целое число), в которую нужно возвести a', '');
    
    var message = {
            equal: 'Результат равен ', 
            error: 'Вы допустили ошибку в значениях, ',
            errX: 'введите целую степень x',
            errA: 'число a должно быть целым',
            errTotal: 'Ошибка в значениях функции!'
        };
    
    function pow(a, x) {
        var result = 1;
        
        if (x == 0) {
            result = 1;
        } else {
            if (x > 0) {
                for (var i = 0; i < x; ++i) {
                    result *= a;
                }
            } else {
                x = Math.abs(x);
                
                for (var k = 0; k < x; ++k) {
                    result /= a;
                }
            }
        }
        return result;   
      }
    
    function checkUserData () {
        check = 0;

        if (parseInt(a) == a) {
          console.log ('a = ' + a);

          if (parseInt(x) == x) {
            console.log ('x = ' + x);
          } else {
              alert( message.error + message.errX );
              console.log ('Ошибка, x = ' + x);
              check++;
          }
            
        } else {
            alert(message.error + message.errA );
            console.log ('Ошибка, a = ' + a);
            check++;
        }
        
        console.log ('check = ' + check);
        return check;
    }
    
    var check = checkUserData ();
    
    function calculate (check) {
    
        if (check == 0) {
            alert ( message.equal + pow(a,x) );
            console.log ( message.equal + pow(a,x) );
        } else {
            alert(message.errTotal)
        }
        
    }
    
    calculate (check);
    
}());
