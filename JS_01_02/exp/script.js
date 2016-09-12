'use strict'; 

(function () {
    
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
    
    function calculate() {
    
        var num = prompt('Введите целое число a', '');
        
        var message = {
            equal: 'Результат равен ', 
            error: 'Вы допустили ошибку, ',
            errX: 'введите целую степень x',
            errA: 'число a должно быть целым'
        };

        if (parseInt(num) == num) {
          var a = num;
          console.log ('a = ' + a);

          var ex = prompt('Введите степень x (целое число), в которую нужно возвести a', '');

          if (parseInt(ex) == ex) {
            var x = ex;
            console.log ('x = ' + x);

            alert ( message.equal + pow(a,x) );
            console.log ( message.equal + pow(a,x) );
        } else {
            alert( message.error + message.errX );
            console.log ('Ошибка, x = ' + ex);
           }

         } else {
            alert(message.error + message.errA );
            console.log ('Ошибка, a = ' + num);
        }
    }
    
    calculate();
    
}());
