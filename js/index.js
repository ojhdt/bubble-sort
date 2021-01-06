const numset = document.getElementById("textfield");
const sortshow = document.getElementById("displayfield");
const slider = document.getElementById("slider");
const logset = document.getElementById("logfield");
const result = document.getElementById("result");
var Array = [];
var doing = 0;
var docut = 0;

var inst = new mdui.Dialog('#dialog');

window.onload = function(){
    Fresh();
    result.setAttribute("style", "display:none");
}

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
    window.scrollTo(0,0);
    result.setAttribute("style", "display:none");
    document.getElementById("btn1").setAttribute("disabled","");
    document.getElementById("btn2").setAttribute("disabled","");
    slider.setAttribute("disabled","");
    mdui.updateSliders();
    let nums = document.querySelectorAll('#textfield input');
    for(let[index, num] of nums.entries())
    {
        Array[index] = num.value;
        num.setAttribute("disabled","");
    }
    mdui.mutation();
    //Sort();
    var times = Getnum()*(Getnum()-1)*500;
    var interval1 = window.setInterval("Swap()", 1000);
    setTimeout(function() {window.clearInterval(interval1);Done();}, times);
}

var Swap = function(){
    var j = this.doing;
    // - Math.floor((this.doing / (Getnum()-1)))
    let is_change = Number(Array[j]) < Number(Array[j+1]) ? "swapped" : "needn't swap";
    let old_content = logset.innerHTML;
    let new_content = "Comparing "+ Array[j] + " with " + Array[j+1] + ", " + is_change + "</br>";
    logset.innerHTML = new_content + old_content;
    if(Number(Array[j]) < Number(Array[j+1]))
    {
        temp = Array[j];
        Array[j] = Array[j+1];
        Array[j+1] = temp;
    }
    Display();
    if(this.doing < (Getnum() - 2 - this.docut))
    {
        this.doing++;
    }
    else
    {
        this.doing = 0;
        this.docut++;
    }
}

var Done = function(){
    inst.open();
    this.doing = 0;
    this.docut = 0;
    result.setAttribute("style", "display:block");
    document.getElementById("btn1").removeAttribute("disabled");
    document.getElementById("btn2").removeAttribute("disabled");
    slider.removeAttribute("disabled");
    mdui.updateSliders();
    let nums = document.querySelectorAll('#textfield input');
    for(let[index, num] of nums.entries())
    {
        num.removeAttribute("disabled");
    }
    mdui.mutation();
    let sum = 0;
    for(i = 0; i < Getnum(); i++)
    {
        sum += Number(Array[i]);
    }
    document.getElementById("listitem1").innerHTML = Array[0];
    document.getElementById("listitem2").innerHTML = Array[Getnum()-1];
    document.getElementById("listitem3").innerHTML = Array[1];
    document.getElementById("listitem4").innerHTML = sum;
    document.getElementById("listitem5").innerHTML = sum/Getnum();
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
        for(j = 0; j < Getnum() - 2; j++)
        {
            if(Number(Array[j]) < Number(Array[j+1]))
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
    for(i = 0; i < Getnum(); i++)
    {
        let old_content = sortshow.innerHTML;
        let new_content = "<button class='mdui-btn mdui-btn-raised mdui-ripple'>" + Array[i] + "</button>";
        sortshow.innerHTML = old_content + new_content;
    }
}

var Clear = function(){
    logset.innerHTML = "";
}