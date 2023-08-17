<!DOCTYPE html>
<html>
<head> 
    <link rel="stylesheet" type="text/css" href="styling.css">
    <title>Practice Perfect | By musicians, for musicians</title>
    </head>

<body>

    <div class="todo-wrapper">
        <h2>My Repertoire</h2>
        <p>Double-click an item to select it.</p>
        <form name="todo-adder">
            <input type="text" id="input-box" />
        </form>
        <button id="add-button" class="pretty-button">Add</button>
        <br />
        <ol id="repertoire">
        </ol>
        <div id="control-wrapper">
            <button id="clear-button" class="pretty-button">Clear Selected</button>
            <button id="empty-button" class="pretty-button">Empty Repertoire</button>
            <button id="save-button" class="pretty-button">Save Repertoire</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>

