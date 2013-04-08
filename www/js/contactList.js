var db;
var dbCreated = false;

var scroll = new iScroll('wrapper', { vScrollbar: false, hScrollbar:false, hScroll: false });





document.addEventListener("pagecreate", startup, false);

function startup() {
    $('#contactList').append('<li>Fireball</li>');
    db = window.openDatabase("ContactDirectoryDB", "1.0", "PhoneBook", 200000);
    if (dbCreated)
    	db.transaction(getContacts, transaction_error);
    else
    	db.transaction(populateDB, transaction_error, populateDB_success);
}

function transaction_error(tx, error) {
	$('#busy').hide();
    alert("Database Error: " + error);
}

function populateDB_success() {
	dbCreated = true;
    db.transaction(getContacts, transaction_error);
}

function getContacts(tx) {
	console.log("1");
	var sql = "select o.organization_name, o.base_number from organizations";
	console.log("2");
	tx.executeSql(sql, [], getContacts_success);
}

function getContacts_success(tx, results) {
	$('#busy').hide();
    var len = results.rows.length;
    for (var i=0; i<len; i++) {
    	var contact = results.rows.item(i);
		$('#contactList').append('<li><a href="contactdetails.html?id=' + contact.base_number + '">' +
				'<p class="line1">' + contact.name + '</p>' +
				'<span class="bubble">' + contact.base_number + '</span></a></li>');
    }
	setTimeout(function(){
		scroll.refresh();
	},100);
	db = null;
}

function populateDB(tx) {
	$('#busy').show();
	tx.executeSql('DROP TABLE IF EXISTS organizations');
	var sql = 
		"CREATE TABLE IF NOT EXISTS organizations ( " +
		"`organization_name` varchar(50) NOT NULL,"+
		"`base_number` varchar(12) NOT NULL,"+
		"PRIMARY KEY(`base_number`)"+
		");"
        tx.executeSql(sql);
    
        tx.executeSql("INSERT INTO organizations (organization_name, base_number) VALUES (`UMD`, `301305`), " +
		      "(`Other Place`, `1234567890,`)");

}
