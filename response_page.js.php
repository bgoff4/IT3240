<html>
<body>
<!-- This PHP code will loop through all of the input fields and output the IDs and names. Both options of the get and post methods are checked. -->
<?php

foreach($_POST as $key =>$value){
    echo $key . ": " . $value . "<br/>";
}
foreach($_GET as $key =>$value){
    echo $key . ": " . $value . "<br/>";
}

?>
</body>
</html> 