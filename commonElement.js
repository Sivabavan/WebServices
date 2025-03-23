
/*a=[4,5,6,3,7]
b=[8,3,2,1,5]
find the common element between a and b
*/
let a = [4,5,6,3,7];
let b = [8,3,2,1,5];
let commonElement =[];
let commomElementsize=0;
for(let c=0;c<a.length;c++){
	for(let d =0;d<b.length;d++){
		if(a[c]==b[d])
		{
			commonElement[commomElementsize] = a[c];
			commomElementsize++;
			break;
		}
	}
}
console.log("common element:"+commonElement);
