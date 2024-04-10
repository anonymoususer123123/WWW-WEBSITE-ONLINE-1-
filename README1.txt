<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Input Transfer</title>
</head>
<body>
    <label for="inputText">Enter Text:</label>
    <input type="text" id="inputText" name="inputText">
    <button onclick="transferInput()">ENTER</button>

    <script>
        function transferInput() {
            const inputText = document.getElementById('inputText').value;
            console.log('User input:', inputText);
            // Here you can add code to send inputText to the server
        }
    </script>
</body>
</html>