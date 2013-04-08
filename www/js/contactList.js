$(document).on('pageshow', '[data-role=page]', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'getContacts.php?id='+id, getContactList);
});

var serviceURL = "http://localhost/directory/services/";

var contacts = new Array();
var nameSorted = new Array();
var depSorted = new Array();

$('#numberList').on('pageinit', function(event) {
	getContactList();
});


function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}


function getContactList() {
		$('#contactList li').remove();
		for (i in data.items) {
	           contacts.push(i);
		}
		var sort_by = function(field, reverse, primer){
			
		   var key = function (x) {return primer ? primer(x[field]) : x[field]};
		   return function (a,b) {
			  var A = key(a), B = key(b);
			  return ( (A < B) ? -1 : ((A > B) ? 1 : 0) ) * [-1,1][+!!reverse];                  
			}
		}
		
		nameSorted = contacts.sort(sort_by('name', true, function(a){return a.toUpperCase()}));
		depSorted = nameSorted.sort(sort_by('department', true, function(a){return a.toUpperCase()}));
		
		$.each(nameSorted, function(index, nameSorted) {
			$('#namelist').append('<li><a href="tel:id' + nameSorted(index).extension + '"</li>' +
					 nameSorted(index).name + ' : ' + nameSorted(index).department)
		});
		$.each(depSorted, function(index, depSorted) {
			$('#deplist').append('<li><a href="tel:id' + depSorted(index).extension + '"</li>' +
					 depSorted(index).name + ' : ' + depSorted(index).department)
		});
		$('#contactList').listview('refresh');
}		