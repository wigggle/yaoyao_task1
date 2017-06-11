/**
 * Created by mshuang on 2017/6/11.
 */
var Btn = document.getElementById('button');
var input_box = document.getElementById('input');
var prompt = document.getElementById('prompt');

//ȥ�������ַ������˿ո�
var input = input_box.value.replace(/(^\s*)|(\s*$)/g,"");

//��ȡ�����ַ����ĳ���
function str_length(str){
    var len = 0;
    for(var i=0; i<str.length; i++){
        //�ַ����±�
        var val = str.charCodeAt(i);
        //Ӣ���ַ�
        if(val>0 && val<128){
            len++;
        }else{
            //����ռ�����ַ�
            len = len + 2;
        }
    }
    return len;//����һ������
}

function check_valid(){
    if(input == ""){
        input_box.style.borderColor = 'red';
        prompt.innerHTML="��������Ϊ��";
        prompt.style.color = "red";
    }else{
        if(str_length(input)<4 || str_length(input)>16){
            input_box.style.borderColor='red';
            prompt.innerHTML="���Ƹ�ʽ����";
            prompt.style.color="red";
        }else{
            input_box.style.borderColor='red';
            prompt.innerHTML="ͨ��У��";
            prompt.style.color="green";
        }
    }
}

//��ť���¼�
Btn.onclick=check_valid;