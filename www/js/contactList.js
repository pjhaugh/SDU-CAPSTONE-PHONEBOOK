var serviceURL = "http://localhost/directory/services/";

var contacts;

$('#contactListPage').bind('pageinit', function(event) {
	getContactList();
});

function getContactList() {
	$.getJSON(serviceURL + 'getContact.php', function(data) {
		$('#contactList li').remove();
		contacts = data.items;
		$.each(contacts, function(index, contact) {
			$('#contactList').append('<li><a href="contactdetails.html?id=' + contact.id + '">' +
					'<h4>' + contact.name + contact.Department + '<h/4>')
		});
		$('#contactList').listview('refresh');
	});
}