let obj = [];
let dat = fetch("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json").then(function(a){return a.json()}).then(function(data){ 
obj=[...data];
});
let input = document.getElementById("searchData");
input.addEventListener("input",function(){
    for(let i in obj){
        if(input.value.toUpperCase()===obj[i].state.toUpperCase()){
            document.getElementById("seaPar").innerHTML = obj[i].city + obj[i].state + " " + obj[i].population + "<br>";
        }
    }
})

// let obj = [];
// let dat = fetch("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json").then(function(a){return a.json()}).then(function(data){ 
// obj=[...data];
// });
// let input = document.getElementById("searchData");

// function sear(){
//     input.innerHTML = value;
//     }
// input.addEventListener("input",function(){
//     for(let i in obj){
//         if(obj[i].state.toUpperCase().includes(input.value.toUpperCase())){
//             document.getElementById("seaPar").innerHTML += obj[i].state + "<br>";
//         }
//     //     let par = document.getElementById("seaPar");
//     //     if(){
//     //         par.addEventListener("click",function(){input.innerHTML===obj[i].state;})
//     //     }
//     }
// })

let obj = [];
let dat = fetch("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json").then(function(a){return a.json()}).then(function(data){ 
obj=[...data];
});

function search(){
    let input = document.getElementById("searchData").value.toUpperCase();
    let d = obj;
    let par = document.getElementById("seaPar");

    for(let i=0; i<d.length;i++){
        if(d[i].innerHTML.toUpperCase().indexOf(input) >= 0){
            obj[i].state = "";
        }else {
            obj[i].state = input.value;
        }
    }
}




