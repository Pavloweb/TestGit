window.onload = function(){
    document.getElementById('container').addEventListener('click', close);
    document.getElementById('tree').addEventListener('click', tree);
}
function close(e) {
    if(e.target.tagName == 'BUTTON') {
        e.target.parentNode.remove();
    }
}

function tree(e) {
    if(e.target.tagName == 'LI' && e.target.children[0].classList) {
        console.log(e.target.children[0].classList.toggle('d-none'));
    }
}