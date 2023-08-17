var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addMaterial);
function addMaterial() {
  var MaterialText = InputBox.value;
    newMaterial(MaterialText, false);
}

var InputBox = document.getElementById("input-box");
var Repertoire = document.getElementById("repertoire");

function newMaterial(MaterialText, select) {
    var Material = document.createElement("li");
    var RepertoireText = document.createTextNode(MaterialText);
    Material.appendChild(RepertoireText);

    if (select) {
        Material.classList.add("select");
    }

    Repertoire.appendChild(Material);
    Material.addEventListener("dblclick", toggleMaterialState);
}

var clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearRepertoire);
function clearRepertoire() {
  var selectedItems = Repertoire.getElementsByClassName("select");

    while (selectedItems.length > 0) {
        selectedItems.item(0).remove();
    }
}

var emptyButton = document.getElementById("empty-button");
emptyButton.addEventListener("click", emptyRepertoire);
function emptyRepertoire() {
    var Material = Repertoire.children;
    while (Material.length > 0) {
        Material.item(0).remove();
    }
}


function toggleMaterialState() {
    if (this.classList.contains("select")) {
        this.classList.remove("select");
    } else {
        this.classList.add("select");
    }
}


var saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", saveRepertoire);
function saveRepertoire() {
    var RepertoireList = [];

    for (var i = 0; i < Repertoire.children.length; i++) {
        var item = Repertoire.children.item(i);

        var itemInfo = {
            "task": item.innerText,
            "completed": item.classList.contains("select")
        };

        RepertoireList.push(itemInfo);

    }

    localStorage.setItem("RepertoireList", JSON.stringify(RepertoireList));
}


function loadRepertoire() {
    if (localStorage.getItem("RepertoireList") != null) {
        var RepertoireList = JSON.parse(localStorage.getItem("RepertoireList"));

        for (var i = 0; i < RepertoireList.length; i++) {
            var item = RepertoireList[i];
            newMaterial(item.task, item.select);
        }
    }
}

loadRepertoire();

