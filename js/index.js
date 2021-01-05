const numset = document.getElementById("textfield");

var Array = [];

var Rand = function(){
  return Math.round(Math.random() * 100);
}

var Getnum = function(){
    let num = document.getElementById("slider").value;
    return num;
}

var Fresh = function(){
    numset.innerHTML = "";
    for(i = 1; i <= Getnum(); i++)
    {
        let old_content = numset.innerHTML;
        let new_content = "<div class='mdui-textfield mdui-textfield-floating-label'><label class='mdui-textfield-label'>" + "num" + i + "</label><input type='text' class='mdui-textfield-input'></div>";
        numset.innerHTML = old_content + new_content;
    }
}

var Confirm = function(){
    let nums = document.querySelectorAll('#textfield input');
    for(let[index, num] of nums.entries())
    {
        Array[index] = num.value;
    }
}

var Random = function(){
    let nums = document.querySelectorAll('#textfield input');
    for(let[index, num] of nums.entries())
    {
        num.value = Rand();
    }  
}

var Retry = function(){

}