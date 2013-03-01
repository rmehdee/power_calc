	onload="document.getElementById('x').value=''"
      function $(x){ return document.getElementById(x);}
	
	function add(){
        var a = parseInt($('a').value, 10);
        var b = parseInt($('b').value, 10);
	var c = parseInt($('c').value, 10);
	var d = parseInt($('d').value, 10);
	var e = parseInt($('e').value, 10);
	var f = parseInt($('f').value, 10);
	var g = parseInt($('g').value, 10);
	var h = parseInt($('h').value, 10);
	var i = parseInt($('i').value, 10);
	var j = parseInt($('j').value, 10);
	var k = parseInt($('k').value, 10);
	var l = parseInt($('l').value, 10);
	var i1 = parseInt($('i1').value, 10);
	var j1 = parseInt($('j1').value, 10);
	var i2 = parseInt($('i2').value, 10);
	var j2 = parseInt($('j2').value, 10);
	var a1 = parseInt($('a1').value, 10);
	var b1 = parseInt($('b1').value, 10);

         $('x').value= (a*b) + (c*d) + (e*f) + (g*h) + (i*j) + (k*l) + (i1*j1) + (i2*j2) + (a1*b1);
	
	{if ($('x').value >= 11 && $('x').value <= 120)
		{alert("You Need 200 VA")
	if(confirm("Click OK to see our products & your need")){document.location="http://sunbeament.com/products/";}}
	
	if ($('x').value >= 121 && $('x').value <= 200)
		{alert("You Need 300 VA")
	if(confirm("Click OK to see our products & your need")){document.location="http://sunbeament.com/products/";}}
	
	else if ($('x').value >= 201 && $('x').value <= 300)
		{alert("You Need 400 VA")
	if(confirm("Click OK to see our products & your need")){document.location="http://sunbeament.com/products/";}}

	else if ($('x').value >= 301 && $('x').value <= 400)
		{alert("You Need 500 VA")
	if(confirm("Click OK to see our products & your need")){document.location="http://sunbeament.com/products/";}}

	else if ($('x').value >= 401 && $('x').value <= 500)
		{alert("You Need 600 VA")
	if(confirm("Click OK to see our products & your need")){document.location="http://sunbeament.com/products/";}}

	else if ($('x').value >= 501 && $('x').value <= 590)
		{alert("You Need 700 VA")
	if(confirm("Click OK to see our products & your need")){document.location="http://sunbeament.com/products/";}}

	else if ($('x').value >= 591 && $('x').value <= 700)
		{alert("You Need 800 VA")
	if(confirm("Click OK to see our products & your need")){document.location="http://sunbeament.com/products/";}}	
	
	else if ($('x').value >= 701 && $('x').value <= 900)
		{alert("You Need 1000 VA")
	if(confirm("Click OK to see our products & your need")){document.location="http://sunbeament.com/products/";}}

	else if ($('x').value >= 901 && $('x').value <= 1200)
		{alert("You Need 1200 VA")
	if(confirm("Click OK to see our products & your need")){document.location="http://sunbeament.com/products/";}}

	else if ($('x').value == 0 )
		{alert("You have to put quantity :)")
	}

	else
	alert("Sorry! we don't have your IPS ready. Please contact & place your order");
	
      }
}

