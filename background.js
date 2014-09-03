function removeClass(obj, cls){
		var obj_class = ' '+obj.className+' ';
		obj_class = obj_class.replace(/(\s+)/gi, ' '),
		removed = obj_class.replace(' '+cls+' ', ' ');
		removed = removed.replace(/(^\s+)|(\s+$)/g, '');
		obj.className = removed;
}
document.getElementsByClassName("sign_tip_sbox_hd")[0].innerHTML = "<a target='_blank' href='http://s.eqoe.cn'>自动签到</a>";
var hyred = document.getElementsByClassName("threadlist_author");
for (var i = 0; i < hyred.length; i++) {
	hyred[i].innerHTML = hyred[i].innerHTML.replace("no_icon_author", "").replace("vip_red", "")
}
var hyred2 = document.getElementsByClassName("d_author");
for (var i = 0; i < hyred2.length; i++) {
	hyred2[i].innerHTML = hyred2[i].innerHTML.replace("vip_red", "").replace("beMember_fl", "").replace(/style=.*no-repeat;border:none\"/g, "").replace(/src=.*?tb-lazyload=\"(.*?)\"/g, "src=\"$1\"")
}
var hyred3 = document.getElementsByClassName("threadlist_title");
for (var i = 0; i < hyred3.length; i++) {
	removeClass(hyred3[i],"member_thread_title_frs");
}
setTimeout(function() {
	var hyred4 = document.getElementsByClassName("lzl_cnt");
	for (var i = 0; i < hyred4.length; i++) {
		hyred4[i].innerHTML = hyred4[i].innerHTML.replace("vip_red", "")
	}
},
2000);
var levelnode = document.getElementsByClassName("user_level")[0].parentNode.parentNode;
var infonode = document.getElementById("user_info").parentNode.parentNode;
infonode.parentNode.insertBefore(levelnode, infonode.nextSibling);