/**
 * Created by mshuang on 2017/6/11.
 */
var Btn = document.getElementById('button');
var input_box = document.getElementById('input');
var prompt = document.getElementById('prompt');

//去除输入字符的两端空格
var input = input_box.value.replace(/(^\s*)|(\s*$)/g,"");

//获取输入字符串的长度
function str_length(str){
    var len = 0;
    for(var i=0; i<str.length; i++){
        //字符串下标
        var val = str.charCodeAt(i);
        //英文字符
        if(val>0 && val<128){
            len++;
        }else{
            //汉字占两个字符
            len = len + 2;
        }
    }
    return len;//返回一个长度
}

function check_valid(){
    if(input == ""){
        input_box.style.borderColor = 'red';
        prompt.innerHTML="姓名不能为空";
        prompt.style.color = "red";
    }else{
        if(str_length(input)<4 || str_length(input)>16){
            input_box.style.borderColor='red';
            prompt.innerHTML="名称格式错误";
            prompt.style.color="red";
        }else{
            input_box.style.borderColor='red';
            prompt.innerHTML="通过校验";
            prompt.style.color="green";
        }
    }
}

//按钮绑定事件
Btn.onclick=check_valid;