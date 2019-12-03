function addValues(addnum1, addnum2){
    var addnum1, addnum2, res;
    addnum1=Number(document.add.addnum1.value);
    addnum2=Number(document.add.addnum2.value);
    res=addnum1+addnum2;
    document.add.answer.value=res;
}

function subValues(subnum1, num2){
    var subnum1, subnum2, res;
    subnum1=Number(document.sub.subnum1.value);
    subnum2=Number(document.sub.subnum2.value);
    res=subnum1-subnum2;
    
    document.sub.answer.value=res;
}

function divideValues(dividenum1, dividenum2){
    var dividenum1, dividenum2, res;
    dividenum1=Number(document.divide.dividenum1.value);
    dividenum2=Number(document.divide.dividenum2.value);
    res=dividenum1/dividenum2;
    document.divide.answer.value=res;
}   