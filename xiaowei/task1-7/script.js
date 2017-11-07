window.onload=function(){
	var topBtn=document.querySelector('.toTop');
	function toTop(){
		document.documentElement.scrollTop=0+"px";
	}
	function init(){
		topBtn.onclick=toTop;
	}
	init();
}