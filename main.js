function addItem() {
 var text = $("#email").val();
 $("#text").append('Hi   ' +text+ '  :)');
 $("#email").val('');
}

function disItem() {
 var text1 = $("#frname").val();
 var text2 = $("#toname").val();
 $("#heal").append( '<h1>' +text1+ '  To  ' +text2+  '</h1>');
 $("#heal1").append( '<h1>' +text1+ '  To  ' +text2+  '</h1>');
 $("#frname").val('');
 $("#toname").val('');
}

$(function() {
	$("#book").on('click',addItem);
	$("#searchin").on('click',disItem);
});

 function myFunctionBook(){
            document.getElementById("booked").style.display="block";
          
        }
function myFunctionSres() {
        document.getElementById("searchres").style.display="block";
}


