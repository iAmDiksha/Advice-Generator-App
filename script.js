let button = document.querySelector('.circle');

button.addEventListener('click',adviceGenerator);

function adviceGenerator()
{
    let URL = 'https://api.adviceslip.com/advice';

    fetch(URL)
    .then(response => response.json())
    .then(data => {
        let ID = `ADVICE #${data.slip.id}`;
        document.querySelector('.advice_id').innerHTML = ID;

        let quote = `<q>${data.slip.advice}</q>`;
        document.querySelector('.advice').innerHTML = quote;
    })
}


if(window.innerWidth < 375){
    let divider = document.querySelector('.divider');
    divider.src = 'pattern-divider-mobile.svg';
    divider.style.width = '200px';
}


