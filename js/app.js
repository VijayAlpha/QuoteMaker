const postHeader =  document.querySelector('#post-header');
const postContent =  document.querySelector('#post-content');
const postAuthor =  document.querySelector('#post-author');
const postCreator =  document.querySelector('#post-creator');

const contentHeader = document.querySelector('.content--header');
const contentMain = document.querySelector('.content--main');
const contentAuthor = document.querySelector('.content--author');
const contentCreator = document.querySelector('.content--creator');

function makePost() {
    contentHeader.innerText = postHeader.value;
    contentMain.innerText = postContent.value;
    contentAuthor.innerText = postAuthor.value;
    contentCreator.innerText = postCreator.value;
}


function downloadimage() {
            
    var container = document.getElementById("post");
    html2canvas(container).then(function (canvas) {

        var link = document.createElement("a");
        document.body.appendChild(link);
        link.download = "html_image.jpg";
        link.href = canvas.toDataURL();
        link.target = '_blank';
        link.click();
    });
}



