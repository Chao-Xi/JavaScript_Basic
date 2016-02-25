  function getStyle(obj,name)
   {
   	if(obj.currentStyle)
	{
	   return obj.currentStyle[name];	
	}else
	{
		return getComputedStyle(obj,false)[name];
	}
   }
   function startmove(obj,attr,iTarget,fnEnd)
   {
	   clearInterval(obj.timer);
	 
	   obj.timer=setInterval(function(){
	 	var cur=parseInt(getStyle(obj,attr));
	 	var speed=(iTarget-cur)/5;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		if(cur==iTarget)
		{
		    clearInterval(obj.timer);
		    if(fnEnd)fnEnd();
		}else
		{
			obj.style[attr]=cur+speed+'px';
		}
	 },30)
	 
   }