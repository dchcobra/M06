function main(){
	var a = document.getElementsByTagName("p");
	
	for(var i = 0; i < a.length; i++){
		if(a[i].innerText == "Me gusta mucho esta página."){
			
			var ol = document.createElement("ol");
			
			var li_a = document.createElement("li");
			li_a.innerText = "ElementA";
			
			var li_b = document.createElement("li");
			li_b.innerText = "ElementB";
			
			ol.appendChild(li_a);
			ol.appendChild(li_b);
			
			
			a[i].parentNode.insertBefore(ol, a[i].nextSibling);
			
		}
	}
}
window.onload = main();
