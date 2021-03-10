function buttonDoubleclick(e){
	let eId= e.dataset.stuId;
	let isStu = true;
	if(eId==undefined){
		isStu=false;
		eId=e.dataset.ttuId;
	}
	Array.from(document.getElementsByTagName('span')).forEach(elem=>{
		let d=elem.dataset;
		if((isStu?d.ttuId:d.stuId)==eId){
			elem.style="display: inline;";
			let p=elem.parentNode;
			if(p.tagName=="SPAN"){p.style="display: inline;"};
		}
	})
	e.style="display: none;";
}

document.addEventListener("dblclick", function(e) {
	if(e.target.tagName=="SPAN"){buttonDoubleclick(e.target);}
}, false);
