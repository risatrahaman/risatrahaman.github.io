fetchData();

let i = 0;
let j = 0;
let txt = 'Welcome!';
let disc = "There is not much anything here for now. Update is coming soon."


function typeWriter1() {
    if (i < txt.length) {
        document.getElementById("welcome").textContent += txt.charAt(i);
        i++;
        setTimeout(typeWriter1, 100);
    }
}
function typeWriter2() {
    if (j < disc.length) {
        document.getElementById("disc").textContent += disc.charAt(j);
        j++;
        setTimeout(typeWriter2, 50);
    }
}

window.onload = ()=>{
    typeWriter1();
    typeWriter2();
}

async function fetchData(){
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    const randIndex = Math.floor(Math.random() * data.length);

    document.getElementById("quote").textContent = data[randIndex].text
    document.getElementById("author").textContent = '- ' + data[randIndex].author
}

nextBtn = document.getElementById("next");
nextBtn.addEventListener("click", ()=>{
    fetchData();
});
