var Datastrings =  {
        name: 'input-name',
        answer1: 'USD',
        answer2: 'BTC',
        answer3: 'python',
        answer4: 'C+',
        answer5: 'react',
        answer6: 'angular',
        button1: 'btn-1',
        button2: 'btn-2',
        button3: 'btn-3',
        button4: 'btn-4'
    }


var dataController =(function(){

    var inputName, inputAnswer1, inputAnswer2, inputAnswer3, inputAnswer4, inputAnswer5, inputAnswer6

    inputName = document.getElementById(Datastrings.name).value;

    return{

        getName: function(){



            fetch(`http://127.0.0.1:8000/data/data/`, {
                     method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token 01f899065c8dbf06624db62c5455c8a338a69453'

                    },
                    body: JSON.stringify( inputName )
                    }).then ( resp => resp.json())
                    .then (resp => (resp))
                    .catch (error => console.log(error))





         },



        getAnswerOfQ1: function(){

             if (document.getElementById(Datastrings.answer1).checked && document.getElementById(Datastrings.answer2).checked) {

                    inputAnswer1 = document.getElementById(Datastrings.answer1).value;
                    inputAnswer2 = document.getElementById(Datastrings.answer2).value;

                 fetch(`http://127.0.0.1:8000/data/data/`, {
                     method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token 01f899065c8dbf06624db62c5455c8a338a69453'

                    },
                    body: JSON.stringify( inputAnswer1, inputAnswer2 )
                    }).then ( resp => resp.json())
                    .then (resp => (resp))
                    .catch (error => console.log(error))


                } else if (document.getElementById(Datastrings.answer2).checked){

                    inputAnswer2 = document.getElementById(Datastrings.answer2).value;

                    fetch(`http://127.0.0.1:8000/data/data/`, {
                     method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token 01f899065c8dbf06624db62c5455c8a338a69453'

                    },
                    body: JSON.stringify( inputAnswer2)
                    }).then ( resp => resp.json())
                    .then (resp =>(resp))


                } else if (document.getElementById(Datastrings.answer1).checked) {

                    inputAnswer1 = document.getElementById(Datastrings.answer1).value;

                    fetch(`http://127.0.0.1:8000/data/data/`, {
                     method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token 01f899065c8dbf06624db62c5455c8a338a69453'

                    },
                    body: JSON.stringify( inputAnswer2)
                    }).then ( resp => resp.json())
                    .then (resp =>(resp))
                }


        },



        getAnswerOfQ2: function(){

            if (document.getElementById(Datastrings.answer3).checked && document.getElementById(Datastrings.answer4).checked) {

                    inputAnswer3 = document.getElementById(Datastrings.answer3).value;
                    inputAnswer4 = document.getElementById(Datastrings.answer4).value;

                fetch(`http://127.0.0.1:8000/data/data/`, {
                     method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token 01f899065c8dbf06624db62c5455c8a338a69453'

                    },
                    body: JSON.stringify( inputAnswer3, inputAnswer4 )
                    }).then ( resp => resp.json())
                    .then (resp => (resp))
                    .catch (error => console.log(error))


                } else if (document.getElementById(Datastrings.answer3).checked){

                    inputAnswer3 = document.getElementById(Datastrings.answer3).value;

                    fetch(`http://127.0.0.1:8000/data/data/`, {
                     method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token 01f899065c8dbf06624db62c5455c8a338a69453'

                    },
                    body: JSON.stringify( inputAnswer3)
                    }).then ( resp => resp.json())
                    .then (resp =>(resp))

                } else if (document.getElementById(Datastrings.answer4).checked) {

                    inputAnswer4 = document.getElementById(Datastrings.answer4).value;

                    fetch(`http://127.0.0.1:8000/data/data/`, {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Token 01f899065c8dbf06624db62c5455c8a338a69453'

                        },
                        body: JSON.stringify( inputAnswer4)
                        }).then ( resp => resp.json())
                        .then (resp =>(resp))
                }

        },



        getAnswerOfQ3: function(){

            if (document.getElementById(Datastrings.answer5).checked && document.getElementById(Datastrings.answer6).checked) {

                    inputAnswer5 = document.getElementById(Datastrings.answer5).value;
                    inputAnswer6 = document.getElementById(Datastrings.answer6).value;

                fetch(`http://127.0.0.1:8000/data/data/`, {
                     method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token 01f899065c8dbf06624db62c5455c8a338a69453'

                    },
                    body: JSON.stringify( inputAnswer5, inputAnswer6 )
                    }).then ( resp => resp.json())
                    .then (resp => (resp))
                    .catch (error => console.log(error))


                } else if (document.getElementById(Datastrings.answer5).checked){

                    inputAnswer5 = document.getElementById(Datastrings.answer5).value;

                    fetch(`http://127.0.0.1:8000/data/data`, {
                     method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token 01f899065c8dbf06624db62c5455c8a338a69453'

                    },
                    body: JSON.stringify( inputAnswer5)
                    }).then ( resp => resp.json())
                    .then (resp =>(resp))

                } else if (document.getElementById(Datastrings.answer6).checked) {

                    inputAnswer6 = document.getElementById(Datastrings.answer6).value;

                    fetch(`http://127.0.0.1:8000/data/data`, {
                     method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token 01f899065c8dbf06624db62c5455c8a338a69453'

                    },
                    body: JSON.stringify( inputAnswer6)
                    }).then ( resp => resp.json())
                    .then (resp =>(resp))
                }
        }
    };



})();





var UIController = (function(){





    return{

        btnBeginn: function(){
            document.getElementById(Datastrings.button1).disabled = false;
            document.getElementById(Datastrings.button2).disabled = true;
            document.getElementById(Datastrings.button3).disabled = true;
            document.getElementById(Datastrings.button4).disabled = true;

            //Radiobuttons
            document.getElementById(Datastrings.answer1).disabled = true;
            document.getElementById(Datastrings.answer2).disabled = true;
            document.getElementById(Datastrings.answer3).disabled = true;
            document.getElementById(Datastrings.answer4).disabled = true;
            document.getElementById(Datastrings.answer5).disabled = true;
            document.getElementById(Datastrings.answer6).disabled = true;

        },



        firstClick: function(){
            document.getElementById(Datastrings.button2).disabled = false;
            document.getElementById(Datastrings.button1).disabled = true;

            document.getElementById(Datastrings.answer1).disabled = false;
            document.getElementById(Datastrings.answer2).disabled = false;
        },



        secondClick: function(){
            document.getElementById(Datastrings.button3).disabled = false;
            document.getElementById(Datastrings.button2).disabled = true;

            document.getElementById(Datastrings.answer1).disabled = true;
            document.getElementById(Datastrings.answer2).disabled = true;
            document.getElementById(Datastrings.answer3).disabled = false;
            document.getElementById(Datastrings.answer4).disabled = false;
        },



        thirdClick: function(){
            document.getElementById(Datastrings.button4).disabled = false;
            document.getElementById(Datastrings.button3).disabled = true;

            document.getElementById(Datastrings.answer3).disabled = true;
            document.getElementById(Datastrings.answer4).disabled = true;
            document.getElementById(Datastrings.answer5).disabled = false;
            document.getElementById(Datastrings.answer6).disabled = false;
        },



        clearFields: function(){
            var fieldHTML, radioButton1, radioButton2;

            radioButton1 = document.getElementsByName('antwort1');

            for(var i = 0; i<radioButton1.length; i++){
                radioButton1[i].checked = false;
            }


             radioButton2 = document.getElementsByName('antwort2');

            for(var i = 0; i<radioButton2.length; i++){
                radioButton2[i].checked = false;
            }


            radioButton3 = document.getElementsByName('antwort3');

            for(var i = 0; i<radioButton3.length; i++){
                radioButton3[i].checked = false;
            }


            radioButton4 = document.getElementsByName('antwort4');

            for(var i = 0; i<radioButton4.length; i++){
                radioButton4[i].checked = false;
            }


            radioButton5 = document.getElementsByName('antwort5');

            for(var i = 0; i<radioButton5.length; i++){
                radioButton5[i].checked = false;
            }


            radioButton6 = document.getElementsByName('antwort6');

            for(var i = 0; i<radioButton6.length; i++){
                radioButton6[i].checked = false;
            }


            document.getElementById('input-name').value = "";

        },


    };


})();





var controller = (function(dataCtrl, UICtrl){




    var btnEnabling = function(){


       UICtrl.btnBeginn();


        document.getElementById(Datastrings.button1).addEventListener('click', function(){

            UICtrl.firstClick();

            dataCtrl.getName();


            document.getElementById(Datastrings.button2).addEventListener('click', function(){

                UICtrl.secondClick();

                dataCtrl.getAnswerOfQ1();


               document.getElementById(Datastrings.button3).addEventListener('click', function(){

                   UICtrl.thirdClick();

                   dataCtrl.getAnswerOfQ2();

                   document.getElementById(Datastrings.button4).addEventListener('click', function(){

                        UICtrl.btnBeginn();
                        UICtrl.clearFields();

                        dataCtrl.getAnswerOfQ3();


                   });
               });
            });
        });
    }


    btnEnabling();

})(dataController, UIController);