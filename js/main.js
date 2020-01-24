window.onload = function () {
    let getJSON = function (url, callback) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function () {
            let status = xhr.status;
            if (status == 200) {
                callback(null, xhr.response)
            }
            else{
                callback(status, xhr.response);
            }    
            };
    xhr.send();
}

getJSON('https://spreadsheets.google.com/feeds/list/1bLe6_mQakrnM6NCYyQr8llzPNo8C0jDOFXeluF7nx3E/od6/public/values?alt=json',function(err,data){
    console.log(data);
    if (err != null){
        console.log('Error:');
    }
    else{
         data = data['feed']['entry'];
         console.log(data);
         document.getElementById('goods').innerHTML += ShowGoods(data);
    }
});
}


function ShowGoods(data){
    var out = '';
for (var key in data) {
    out += `<a href="#">`
    out += `<div class="card self-item text-center" style="width: 18rem;">`;
    out += `<img class="card-img-top" src="${data[key]['gsx$image']['$t']}" alt="${data[key]['gsx$name']['$t']}">`;
    out += `<div class="card-body">`;
    out += `<p class="card-text d-flex justify-content-around">${data[key]['gsx$name']['$t']}<span></span><span>${data[key]['gsx$cost']['$t']}</span></p>`;
    out += `</div>`;
    out += `</div>`;
    out += `</a>`;
}
return out;  
}
document.onclick = function(e){
    console.log(e);
}
