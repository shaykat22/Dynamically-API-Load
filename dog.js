const loadDog = () => {
    fetch("https://api.thedogapi.com/v1/breeds")
        .then(res => res.json())
        .then(data => displayDog(data))
}

const displayDog = (dogList) => {
    const main = document.getElementById('main');
    const firstTen = dogList.slice(0, 10);

    for (const dog of firstTen) {
        const div = document.createElement('div')
        div.className = "col-lg-4"
        console.log(dog.weight.imperial);
        div.innerHTML = `
        <h2> ${dog.name}</h2>
        `
    }
}