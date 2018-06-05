window.onload=function(){
  console.log('main.js is loaded');
};

function _(id){ return document.getElementById(id);}

function submitForm() {
	console.log("submitForm function");
 _("mybtn").disabled = true;
 _("status").innerHTML = "please wait...";
 var formdata = new FormData();
 formdata.append( 'n', _('n').value );
 formdata.append( 'e', _('e').value );
 formdata.append( 'm', _('m').value );
 var ajax = new XMLHttpRequest ();
 ajax.open( "POST", "contact.php");
 ajax.onreadystatechange = function(){
 	if(ajax.readyState == 4 && ajax.status == 200) {
 		if(ajax.responseText == "success") {
 			_("my_form").innerHTML = "<h3>Thanks you for sending me a message " + _('n').value + 'I will get back to you as soon as I can.</h3>'; 
 		} else {
 			_('status').innerHTML = ajax.responseText;
 			_('mybtn').disabled = false; 
 		}
 	}
 }
 ajax.send( formdata )
}
//will put the automatic photogallery here
