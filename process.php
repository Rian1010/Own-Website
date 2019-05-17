<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" type="text/css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.3.1/css/hover-min.css" type="text/css" />
    <link rel="stylesheet" href="../assets/css/style.css" type="text/css" />
    <title>Document</title>
</head>

<body class="php_body">
    <div class="border_php">
        <?php
            $name = $_POST["username"];
            echo "Hello, ".$name."!";
        ?>
        <br />
        <?php
    
            $loggedIn = true;
                if ($loggedIn == true) {
                    echo "Thank you for logging in.";
                } else {
                      echo "Please try again.";
                }
        ?>
        
        <?php
            $name = $_GET["password"];
            echo $name;
            
            echo "<p class=\"p_php\">Please click <button><a href='index.html'>here</a></button> to continue!</p>" 
        ?>
    </div>
        
</body>

</html>
