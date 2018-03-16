 <html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Regex to allow special characters, spaces and alphanumeric</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript">
$(function() {
$('#btnValidate').click(function() {
var txt = $('#txtdesc').val();
var re = /^[ A-Za-z0-9@./-]*$/
if (re.test(txt)) {
alert('Valid Text')
}
else {
alert('Please Enter Valid Text');
return false;
}
})
})
</script>
</head>
<body>
<div>
Enter Text :<input type="text" id="txtdesc" />
<input type="button" id="btnValidate" value="Validate" />
</div>
</body>
</html>
