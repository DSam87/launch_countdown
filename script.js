
let output = document.querySelector('.output');
output.innerHTML = "";
const para = document.createElement('p');
para.textContent = '';

let i = 10;
while(i>=0){

    if(i === 10){
        para.textContent = 'Countdown 10';
        output.appendChild(para);
    }else if(i !== 0){
        para.textContent = `${i}`;
        output.appendChild(para);
        console.log(i);
    }else if(i === 0){
        para.textContent = `Blast off!`;
        output.appendChild(para);
    }
    i--;
}


