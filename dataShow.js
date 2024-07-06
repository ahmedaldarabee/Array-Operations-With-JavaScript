function dataElement(){
    var arrList = []

    var addedElement = document.getElementById('addedElement').addEventListener("click",function(){
        var dataNeed = document.getElementById('nameOFStudent').value;
        arrList.push(dataNeed);
        document.getElementById('result').innerHTML = arrList
    });

    var removedElement = document.getElementById('removedElement').addEventListener("click",function(){
        var dataNeed = document.getElementById('nameOFStudent').value;
        arrList.pop();
        document.getElementById('result').innerHTML = arrList
    });

    var addFirst = document.getElementById('addFirst').addEventListener("click",function(){
        var dataNeed = document.getElementById('nameOFStudent').value;
        arrList.unshift(dataNeed);
        document.getElementById('result').innerHTML = arrList
    });

    document.getElementById('finding').addEventListener("click", function() {
        var dataNeed = document.getElementById('nameOFStudent').value;
        var resultOFFind = arrList.includes(dataNeed);
        var indexLocation = arrList.indexOf(dataNeed) + 1;

        if (resultOFFind) {
            window.alert("Your data [ " + dataNeed + " ] exists at index " + indexLocation);
        } else {
            window.alert("Sorry, your data [ " + dataNeed + " ] does not exist!");
        }
    });

}

dataElement();