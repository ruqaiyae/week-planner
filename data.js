var data = readData();
function writeData() {
    var dataJSON = JSON.stringify(data);
    localStorage.setItem('data-storage', dataJSON);
}
function readData() {
    if (localStorage.getItem('data-storage')) {
        var parsedJSON = JSON.parse(localStorage.getItem('data-storage') || '[]');
        return parsedJSON;
    }
    else {
        return [];
    }
}
