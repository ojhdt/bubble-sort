const numset = document.getElementById("textfield");
const sortshow = document.getElementById("displayfield");
const slider = document.getElementById("slider");
var Array = [];

var Rand = function(){
  return Math.round(Math.random() * 100);
}

var Getnum = function(){
    let num = slider.value;
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
    slider.setAttribute("disabled","");
    mdui.updateSliders();
    let nums = document.querySelectorAll('#textfield input');
    for(let[index, num] of nums.entries())
    {
        Array[index] = num.value;
        num.setAttribute("disabled","");
    }
    mdui.mutation();
    Sort();
}

var Random = function(){
    let nums = document.querySelectorAll('#textfield input');
    for(let[index, num] of nums.entries())
    {
        num.value = Rand();
    }
}

var Sort = function(){
    for(i = 0; i < Getnum() - 1; i++)
    {
        for(j = 0; j < Getnum() - 1; j++)
        {
            if(Array[j] < Array[j+1])
            {
                temp = Array[j];
                Array[j] = Array[j+1];
                Array[j+1] = temp;
            }
        }
    }
}

var Display = function(){
    sortshow.innerHTML = "";
    for(i = 1; i <= Getnum(); i++)
    {
        let old_content = sortshow.innerHTML;
        let new_content = "<div class='mdui-textfield mdui-textfield-floating-label'><label class='mdui-textfield-label'>" + "num" + i + "</label><input type='text' class='mdui-textfield-input'></div>";
        sortshow.innerHTML = old_content + new_content;
    }
}