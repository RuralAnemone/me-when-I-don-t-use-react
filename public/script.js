var wordl = [];
for (let i = 0; i < 6; i++) {
    let j = [];
    document.querySelectorAll('tr').forEach(e => {
        j.push(f);
    });
    wordl.push(j);
}

function set(i, j, type) {
    wordl[i][j].style = `background-color: var(--${type});`;
}
document.querySelector('span').innerHTML = "e"
// set(1, 1, "present")