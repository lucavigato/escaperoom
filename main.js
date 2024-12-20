function moveOnMax(field, nextFieldID) {
    if (field.value.length >= field.maxLength) {
        document.getElementById(nextFieldID).focus();
    }
}

document.addEventListener('keyup', function(event) {
    const key = event.key; // "a", "1", "Shift", etc.
    if (key == "Backspace") {
        
        moveBackwards()
    }
});

function moveBackwards() {

    const focusedElement = document.activeElement.id;

    const ids = ['L', 'A', 'D', 'Y', 'M', 'n7', 'n2'];
    
    let index = ids.indexOf(focusedElement);

    if (index - 1 >= 0) {
        document.getElementById(ids[index - 1]).focus();
    }
}

function download(url) {
    const a = document.createElement('a');
    a.href = url;
    a.download = url.split('/').pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function checkCode() {
    const ids = ['L', 'A', 'D', 'Y', 'M', 'n7', 'n2'];
    const values = [];
    for (let i = 0; i < ids.length; i++) {
        values.push(document.getElementById(ids[i]).value);
    }
    
    let code = values.join('');

    code = code.toLowerCase();

    if (code == 'ladym72') {
        console.log('codice corretto, decriptato')
    }

    // download the files

    download("Aprimi.zip");

    // it only works one file at the time, if you want to download a folder you can only zip it
    // you could also download multiple files, but it won't do it automatically. Google will ask permission to the user.
}
