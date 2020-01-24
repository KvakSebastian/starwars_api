var content = document.getElementById('content');
var page = 1;
var getPeople = function (page) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://swapi.co/api/people?page=' + page, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        let status = xhr.status;
        if (status == 200) {
            console.log(xhr.response.results);
            for (var item of xhr.response.results) {
                content.innerHTML += '<p>' + item.name + '<br> </p>';
            }
        }

    };
    xhr.send();
}
window.onload = getPeople(page);
function onloading() {
    getPeople(++page);
}





