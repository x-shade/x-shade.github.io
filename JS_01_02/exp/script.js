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
    
    var num = prompt('Введите целое число a', '');
    
    if (parseInt(num) == num) {
      var a = num;
      console.log ('a = ' + a);
        
      var ex = prompt('Введите степень x (целое число), в которую нужно возвести a', '');
        
      if (parseInt(ex) == ex) {
        var x = ex;
        console.log ('x = ' + x);
          
        alert ( 'Результат равен ' + pow(a,x) );
        console.log ( 'Результат равен ' + pow(a,x) );
    } else {
        alert('Вы допустили ошибку, введите целую степень x');
        console.log ('Ошибка, x = ' + ex);
       }
    
     } else {
        alert('Вы допустили ошибку, число a должно быть целым');
        console.log ('Ошибка, a = ' + num);
    }
    
}());

//'use strict'; 
//
//(function () {
//    var num = prompt('Введите целое число a', '');
//    
//    if (parseInt(num) == num) {
//      var a = num;
//      console.log ('a = ' + a);
//        
//    } else {
//        alert('Вы допустили ошибку, число a должно быть целым');
//        console.log ('Ошибка, a = ' + num);
//    }
//    
//    var ex = prompt('Введите степень x (целое число), в которую нужно возвести a', '');
//    
//    if (parseInt(ex) == ex) {
//        var x = ex;
//        console.log ('x = ' + x);
//    } else {
//        alert('Вы допустили ошибку, введите целую степень x');
//        console.log ('Ошибка, x = ' + ex);
//    }
//    
//    function pow(a, x) {
//        var result = 1;
//        
//        if (x == 0) {
//            result = 1;
//        } else {
//            if (x > 0) {
//                for (var i = 0; i < x; i++) {
//                    result *= a;
//                }
//            } else {
//                x = Math.abs(x);
//                
//                for (var k = 0; k < x; k++) {
//                    result /= a;
//                }
//            }
//        }
//        return result;
//    }
//    
//    alert ( 'Результат равен ' + pow(a, x) );
//    console.log ( 'Результат равен ' + pow(a, x) );
//}());