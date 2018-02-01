String.prototype.replaceAll = function (c, r) {
	// replace with sth faster / this here is for simplicity
	var temp = this,
		i = temp.indexOf(c);

	while(i !== -1){
		temp = temp.replace(c, r);
		i = temp.indexOf(c); 
	}
	
	return temp;
};
  
String.prototype.insertAt = function(s, i, c) {
	return this.substr(0,i) + c + this.substr(i, this.length);
};
  
function generateDotVariants (s) {
	var newS, currentLen,
		len = s.length,
		desiLen = 2*len-1,
		variants = [],
		insertPos = 1,
		pos = 1;
		i = len;

	while (i != desiLen){		
		newS = insertAt(s,insertPos,'.');
		insertPos++;
		variants.push(newS);
		i = newS.length;

		if (insertPos == len){				
			do {
				s = variants[pos-1];
				insertPos= s && s.lastIndexOf('.')+2;
				len = s && s.length;
				pos++;
			} while(insertPos >= len && pos < variants.length)
		}
	}

	return variants;
};

function listDotVariants (s) {
	var dotVariants = generateDotVariants(s);
	
	for(var i = 0; i < dotVariants.length; i++){
		console.log(dotVariants[i]);
	}
}
