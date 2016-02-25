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
   function startmove(obj,json,fnEnd)
   {
	   clearInterval(obj.timer);
	 
	   obj.timer=setInterval(function(){
	   var bStop=true;//假设所有值都到了
	   for(var attr in json)
	   {
	   var cur=0;
	   if(attr=='opacity')
	   {
		   cur=Math.round(parseFloat(getStyle(obj,attr))*100);
	   }
	   else
	   { 
		   cur=parseInt(getStyle(obj,attr));
	   }
	 	
	 	var speed=(json[attr]-cur)/5;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		if(cur!=json[attr])
		{
			bStop=false;
		}
		if(cur==json[attr])
		{
		    clearInterval(obj.timer);
		    if(fnEnd)fnEnd();
		}
		else
		{   
			if(attr=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(cur+speed)+')';
				obj.style.opacity=(cur+speed)/100;
				document.getElementById('txt1').value=obj.style.opacity;
				
			}else
			{
				obj.style[attr]=cur+speed+'px';
			}
		}
	   }
	   
	 },30)
	 
   }