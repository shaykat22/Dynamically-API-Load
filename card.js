const searchButton = () => {
    input = document.getElementById('input-value');
    error = document.getElementById('error');
    inputValue = input.value;
    if (isNaN(inputValue) || (inputValue == "")) {
        error.innerText = 'Please give a number';
        input.value = "";
        main.innerHTML = "";
    }
    else if (inputValue <= 0) {
        error.innerText = "Please give a positive number";
        input.value = "";
        main.innerHTML = '';
    }
    else {
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
            .then(res => res.json())
            .then(data => displayCards(data.cards))
        input.value = "";
        main.innerHTML = '';
    }

}
const displayCards = (card) => {
    console.log(card);
    for (const cards of card) {
        console.log(cards.value);

        const div = document.createElement('div');
        // div.className = 'mb-5'
        // div.className = 'col-lg-4'
        div.classList.add('col-lg-4')
        div.classList.add('mb-5')

        div.innerHTML = `
        <div class="card  p-4" style="width: 18rem;">
            <img src="${cards.image}" class="card-img-top" alt="...">
            <div class="card-body ">
                <h5 class="card-title">${cards.suit}</h5>
                <p class="card-text">${cards.code}</p>
                <button onclick="cardDetails('${cards.code}')" class="btn btn-primary">See Details</button>
            </div>
        </div>
        `
        main.appendChild(div);
    }

}

const cardDetails = (code) => {
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`)
        .then(res => res.json())
        .then(data => {
            const allCards = data.cards;
            const singleCard = allCards.find(cards => cards.code === code)
            const div = document.createElement("div");
            main.innerHTML = "";
            div.innerHTML = `
                <div class="card" style="width: 18rem;">
                    <img src="${singleCard.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${singleCard.suit}</h5>
                        <p class="card-text">${singleCard.code}</p>
                        <p class="card-text">${singleCard.value}</p>
                    </div>
                </div>
            `
            main.appendChild(div)
        })
}