
function calculer() {
	var n = eval(document.form1.entier.value);
	var txt = "\n";
	for(i=1;i<=10;i++) {
		txt+="\t\t"+n+" * "+i+" = "+(n*i)+"\n";
	}
	document.form1.affTable.value=txt;

};





