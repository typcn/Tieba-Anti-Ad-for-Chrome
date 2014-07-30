document.getElementsByClassName("sign_tip_sbox_hd")[0].innerHTML="<a target='_blank' href='http://s.eqoe.cn'>自动签到</a>";
var hyred = document.getElementsByClassName("threadlist_author");
for(var i=0;i < hyred.length;i++){
hyred[i].innerHTML=hyred[i].innerHTML.replace("no_icon_author","").replace("vip_red","");
}
var hyred2 = document.getElementsByClassName("d_author");
for(var i=0;i < hyred2.length;i++){
hyred2[i].innerHTML=hyred2[i].innerHTML.replace("vip_red","").replace("beMember_fl","").replace(/style=.*no-repeat;border:none\"/g,"");
}
setTimeout(function(){
var hyred3 = document.getElementsByClassName("lzl_cnt");
for(var i=0;i < hyred3.length;i++){
hyred3[i].innerHTML=hyred3[i].innerHTML.replace("vip_red","");
}
},2000);
document.getElementById("thread_list").innerHTML=document.getElementById("thread_list").innerHTML.replace(/fiesta_member/g,"");