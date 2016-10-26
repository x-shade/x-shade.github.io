'use strict'; 

(function () {
    var generateDom = {
        
        generateForm: function(formId) {
        var xForm = document.createElement('form');
        xForm.id = formId;
        xForm.setAttribute('action', '');
        document.body.appendChild(xForm);
        },
        
        generateTitle: function(titleName, titleText, titleClass) {
            var xTitle = document.createElement(titleName);
            xTitle.className = titleClass;
	        xTitle.innerHTML = titleText;
            document.getElementById(parentId).appendChild(xTitle);
        },
        
        generateQuestion: function(questionName, questionText, questionClass) {
            for (var i = 0; i < questionText.length; i++) {
                var xQuestion = document.createElement(questionName); 
                 xQuestion.className = questionClass;
                 var numberQ = i + 1;
                 xQuestion.innerHTML = numberQ + '. ' + questionText[i];
                 document.getElementById(parentId).appendChild(xQuestion);
            }
        },
        
        generateOption: function(optionName, optionText, optionClass) {
             for (var i = 0; i < questionText.length; i++) { 
                for (var j = 0; j < optionText[i].length; j++) {
                    var xOption = document.createElement(optionName);
                    xOption.className = optionClass;
                    var numberQ = i + 1;
                    var numberO = j + 1;
                    xOption.innerHTML = '<input type="checkbox" class="checkbox" id="option-' + numberQ + '-' + numberO + '"> <label for="option-' + numberQ + '-' + numberO + '">' + optionText[i][j] + '</label>';
                    test.insertBefore(xOption, document.getElementsByClassName(questionClass)[numberQ]);
                }
            }
        }, 
        
        generateSubmit: function(submitValue) {
            var xSubmit = document.createElement('input');
            xSubmit.setAttribute('type', 'submit');
            xSubmit.setAttribute('value', submitValue);
            document.getElementById(parentId).appendChild(xSubmit);
        }
        
    }
    
    generateDom.generateForm('test');
    
    var parentId = 'test';
    
    var mainTitleText = 'Тест по программированию';
    
    generateDom.generateTitle('h1', mainTitleText, 'test__title');
    
    var questionText = ['Вопрос №1', 'Вопрос №2', 'Вопрос №3'];
    
    var questionClass = 'test__question';
    
    generateDom.generateQuestion('h3', questionText, questionClass);
    
    var optionText = [
        ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
        ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
        ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3']
    ];
    
    generateDom.generateOption('div', optionText, 'option');
    
    var submitValue = 'Проверить мои результаты';
    
    generateDom.generateSubmit(submitValue);
    
}());