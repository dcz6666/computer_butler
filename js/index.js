function page1(){
	var bananerMenu_l = document.getElementById('animation-left');
	console.log(bananerMenu_l);
	var bananerMenu_r=document.getElementById('animation-right');
	var aBananerMenu=bananerMenu_l.getElementsByTagName('li');
	var aTab_show=bananerMenu_r.children;
	var oTab=document.getElementById('tab');
	var aTab=oTab.children;
	var timer=0;
	var num=0;
	function Timer(){
		timer=setInterval(play,2000);
	}
	Timer();
    function play(){
    	num++;
    	for(var j=0;j<aBananerMenu.length;j++){
            aBananerMenu[j].class="";
    	}
    	if(num==aBananerMenu.length){
    		num=0;
    	}
    	aBananerMenu[num].className='Opaque';
         i=num+1;
         old=num;
         if(i !=old){
         	fn1(0,2,'top','275','150','80',i,'-font.png');
         	fn1(1, 3, 'right', '-180', '-90', '0', i, '.png')
         }
        aTab[0].style.top=num*(aTab[0].scrollHeight)+'px';
    }
    var i=0;
    var old=1;
    var a=0;
    var onOff=true
    for(var i=0;i<aBananerMenu.length;i++){
    	aBananerMenu[i].index=i;
    	aBananerMenu[i].onmouseover=function(){
    		clearInterval(timer);
    		timer=0;
    		clearInterval(a);
    		a=0;
    		var _this=this;
    		a=setInterval(function(){
    			Effect.call(_this,i)
    		},150);
    		function Effect(i){
    			i=num+1;
    			if(!this.className){
    				for(var j=0;j<aBananerMenu.length;j++){
    					aBananerMenu[j].className="";
    				}
    				aBananerMenu[num].className='Opaque';
    				if(onOff){
    					onOff=false;
    					fn1(0,2,'top','275','150','80',i,'-font.png');
    					fn1(1,3,'right','-180','-90','-30',i,'.png',function(){
    						onOff=true;
    					});
    				}
    			}
    		}
    		num=this.index;
    		aTab[0].style.top=num*(aTab[0].scrollHeight)+'px';
    	}
    	aBananerMenu[i].onmouseout=function(){
    		Timer();
    		old=this.index+1;
    	}
    } 
    function fn1(l,n,dir,dis1,dis2,dis3,i,png,callb){
    	aTab_show[n].src='./img/tab-'+(i)+png;
    	aTab_show[l].style[dir]=dis2+'px';
    	aTab_show[l].style.opacity='1';
    	aTab_show[n].style[dir]=dis1+'px';
    	aTab_show[n].style.opacity='0';
    	aTab_show[l].style.transition='';
    	aTab_show[n].style.transition='';
             setTimeout(function(){
             	aTab_show[l].style.transition='.3s';
             	aTab_show[n].style.transition='.3s';
             	aTab_show[l].style[dir]=dis3+'px';
             	aTab_show[n].style[dir]=dis2+'px';
             	aTab_show[l].style.opacity='0';
             	aTab_show[n].style.opacity='1';
             	setTimeout(function(){
             		aTab_show[l].src='./img/tab-'+(i)+png;
             		callb&&callb();
             	},300)
             },50)
    }
}
page1();

var oClean=document.getElementById('clean');
var aStatus=oClean.getElementsByTagName('img');
function Clean(){
	for(var i=1;i<aStatus.length;i++){
		aStatus[i].onmouseover=function(){
			this.style.width='210px';
		}
		aStatus[i].onmouseout=function(){
			this.style.width='200px';
		}
	}
}


//节约空间 一键解决
var oSavespace =document.getElementById('savespace');
console.log('12343554');
var oSavespace_l=document.getElementById('savespace_l');
var aHistogram=oSavespace_l.getElementsByTagName('li');
var aIcon =    oSavespace_l.getElementsByTagName('span');
var oSavespace_r=document.getElementById('savespace_r');
var aHandle=oSavespace_r.getElementsByTagName('li');
var timer=null;
var num=0;
function Savespace(){
	function Timer(){
		clearInterval(timer)
		timer=setInterval(play,1500);
	}
    Timer();
    function play(){
    	num++;
    	for(var j=0;j<aHandle.length;j++){
    		aHandle[j].style.borderColor='#e9ebea';
    		aHistogram[j].style.opacity=0;
    		aIcon[j].style.backgroundPositionY='0';
    		// console.log(aIcon[j])
    	}
    	if(num==aHandle.length){
    		num=0;
    	}
    	aHandle[num].style.borderColor="#06ae61";
    	aHistogram[num].style.opacity='1';
    	aIcon[num].style.backgroundPositionY='-13px';
    }
    for(var i=0;i<aHandle.length;i++){
    	aHandle[i].index=i;
    	aHandle[i].onmouseover=function(){
    		for(var j=0;j<aHandle.length;j++){
    			aHandle[j].style.borderColor='#e9ebea';
    			aHistogram[j].style.opacity=0;
    		    aIcon[j].style.backgroundPositionY='0';
    		}
    		clearInterval(timer);
    		num=this.index;
    		this.style.borderColor='#06ae61';
    		aHistogram[this.index].style.opacity='1';
    		aIcon[this.index].style.backgroundPositionY='-13px';
    	}
    	aHandle[i].onmouseout=function(){
    		Timer()
    	}
    }
}


function Exercise(Parent,Label,i,Direction,s){
	var Object =Parent.getElementsByTagName(Label)[i];
	Object.style[Direction]='0';
	Object.style.opacity='1';
	Object.style.transition=s;
}
function ImgExercise(Parent,Label,i,Direction,Range,s){
	var Object=Parent.getElementsByTagName(Label)[i];
	Object.style[Direction]=Range+'px';
	Object.style.opacity='1';
	Object.style.transition=s;

}

var oManage=document.getElementById('manage');
var oMobilespace=document.getElementById('mobilespace');
var oSquare=document.getElementById('square');
var oPrettymuch=document.getElementById('prettymuch');
var oImgbox=document.getElementById('imgbox');
var oCrystal=document.getElementById('crystal');
console.log(oImgbox);
window.onscroll=function(){
	var oScroll=document.body.scrollTop||document.documentElement.scrollTop;
	function Scroll(){
		var n=0;
		if(oScroll>640){
            function oStatus(i,msec){
            	n=setTimeout(function(){
            		aStatus[i].style.width='200px';
            		aStatus[i].style.margin='0';
            	},msec);
            };
            oStatus(1,0);
            oStatus(2,200);
            oStatus(3,400);
            oStatus(4,600);
            n=setTimeout(function(){
            	Clean()
            },600)
		};
	};	
Scroll();
 if(oScroll>1000){
   Exercise(oSavespace,'div',0,'left','1.5s');
   Exercise(oSavespace_r,'h3',0,'top','.7s');
   Exercise(oSavespace_r,'p',0,'bottom','.7s');
   Exercise(oSavespace_r,'ul',0,'bottom','.7s');
   Savespace()
 }
 if(oScroll>1700){
      Exercise(oManage,'div',1,'left','1.5s');
      Exercise(oManage,'h2',0,'top','.7s');
      Exercise(oManage,'ul',0,'bottom','.7s');
 }
 if(oScroll>2500){
 	Exercise(oMobilespace,'div',0,'left','1.5s');
 	Exercise(oMobilespace,'h2',0,'top','.7s');
 	Exercise(oMobilespace,'p',0,'bottom','.7s');
 }
 // console.log('ddfd')
 if(oScroll>3100){
 	Exercise(oSquare,'h2',0,'top','.7s');
 	Exercise(oSquare,'p',0,'bottom','.7s');
 	Exercise(oSquare,'img',1,'left','1.5s')
 }
 if(oScroll>3800){
 	Exercise(oPrettymuch,'h2',0,'top','.7s');
 	Exercise(oPrettymuch,'p',0,'bottom','.7s');
 	ImgExercise(oImgbox,'img',0,'right',384,'1s');
 	ImgExercise(oImgbox,'img',1,'right',284,'2s');
 	ImgExercise(oImgbox,'img',2,'right',41,'2.1s');
 }
 if(oScroll>4400){
 	Exercise(oCrystal,'h2',0,'top','.7s');
 	Exercise(oCrystal,'p',0,'bottom','.7s');
 	setTimeout(function(){
 		ImgExercise(oCrystal,'img',1,'top',100,'1.5s');
 		ImgExercise(oCrystal,'img',1,'left',0,'1.5s');
 	},800);
     setTimeout(function(){
     	ImgExercise(oCrystal,'img',2,'top',100,'1.2s');
     },800);
  ImgExercise(oCrystal,'img',3,'top',70,'1.5s');
 }

}