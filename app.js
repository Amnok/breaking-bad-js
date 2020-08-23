const data = [
    {
        "id": 1,
        "title": "cake 1",
        "price": 10,
        "type": "CAKES",
        "src": "https://media.gettyimages.com/photos/designers-decorate-your-own-cake-kit-picture-id182786645?s=2048x2048"
    },
    {
        "id": 2,
        "title": "cake 2",
        "price": 12,
        "type": "CAKES",
        "src": "https://media.gettyimages.com/photos/designers-decorate-your-own-cake-kit-picture-id182786645?s=2048x2048"
    },
    {
        "id": 3,
        "title": "cake 3",
        "price": 8,
        "type": "CAKES",
        "src": "https://media.gettyimages.com/photos/designers-decorate-your-own-cake-kit-picture-id182786645?s=2048x2048"
    },
    {
        "id": 4,
        "title": "cake 4",
        "price": 16,
        "type": "CAKES",
        "src": "https://media.gettyimages.com/photos/designers-decorate-your-own-cake-kit-picture-id182786645?s=2048x2048"
    },
    {
        "id": 5,
        "title": "cupcake 1",
        "price": 20,
        "type": "CUPCAKES",
        "src": "https://cdn.pixabay.com/photo/2014/03/04/15/36/cupcake-279523_960_720.jpg"
    },
    {
        "id": 6,
        "title": "cupcake 2",
        "price": 21,
        "type": "CUPCAKES",
        "src": "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
    },
    {
        "id": 7,
        "title": "cupcake 3",
        "price": 19,
        "type": "CUPCAKES",
        "src": "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/05/yellow-cupcakes-with-chocolate-frosting-sprinkles.jpg"
    },
    {
        "id": 8,
        "title": "cupcake 4",
        "price": 30,
        "type": "CUPCAKES",
        "src": "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/05/yellow-cupcakes-with-chocolate-frosting-sprinkles.jpg"

    },
    {
        "id": 9,
        "title": "sweets 1",
        "price": 39,
        "type": "SWEETS",
        "src": "https://media.gettyimages.com/photos/designers-decorate-your-own-cake-kit-picture-id182786645?s=2048x2048"
    },
    {
        "id": 10,
        "title": "sweets 2",
        "price": 10,
        "type": "SWEETS",
        "src": "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/05/yellow-cupcakes-with-chocolate-frosting-sprinkles.jpg"
    },
    {
        "id": 11,
        "title": "sweets 3",
        "price": 10,
        "type": "SWEETS",
        "src": "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/05/yellow-cupcakes-with-chocolate-frosting-sprinkles.jpg"
    },
    {
        "id": 12,
        "title": "sweets 4",
        "price": 29,
        "type": "SWEETS",
        "src": "https://media.gettyimages.com/photos/designers-decorate-your-own-cake-kit-picture-id182786645?s=2048x2048"
    },
    {
        "id": 13,
        "title": "doughnuts 1",
        "price": 10,
        "type": "DOUGHNUTS",
        "src": "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/05/yellow-cupcakes-with-chocolate-frosting-sprinkles.jpg"
    },
    {
        "id": 14,
        "title": "doughnuts 2",
        "price": 50,
        "type": "DOUGHNUTS",
        "src": "https://media.gettyimages.com/photos/designers-decorate-your-own-cake-kit-picture-id182786645?s=2048x2048"
    },
    {
        "id": 15,
        "title": "doughnuts 3",
        "price": 40,
        "type": "DOUGHNUTS",
        "src": "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/05/yellow-cupcakes-with-chocolate-frosting-sprinkles.jpg"
    },
    {
        "id": 16,
        "title": "doughnuts 4",
        "price": 29,
        "type": "DOUGHNUTS",
        "src": "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/05/yellow-cupcakes-with-chocolate-frosting-sprinkles.jpg"
    },
]

// create a card element
// para.appendChild(node);

const element = document.querySelector('.container-grid');
const inputSearch = document.querySelector('.inputer');
const headerName = document.querySelector('.headerName');
const profileIcon = document.querySelector('.profileIcon');
const dropdownBtn = document.querySelector('.dropdown');
const hamburger = document.querySelector('.hamburger');
const containerButton = document.querySelector('.sidenav-container');


profileIcon.className = 'profileIcon';
headerName.innerHTML = '🇴 🇺 🇷 👇 🇸 🇹 🇴 🇷 🇪';
profileIcon.innerHTML = '😇';

function mainRenderer(data = []) {
    console.log("data", data);
    const element = document.querySelector('.container-grid');
    if (data && data.length <= 0) {
        let noDataDiv = document.createElement("h2"); // parent card
        noDataDiv.innerHTML = 'No Data Available 😃';
        element.appendChild(noDataDiv);
    }
    for (let i = 0; i < data.length; i++) {
        let card = document.createElement("div"); // parent card
        let image = document.createElement("img"); // for storing image
        let content = document.createElement("div"); // for content store (name and price)
        let title = document.createElement("h3") // for title store
        let price = document.createElement("h3") // for price store
        image.src = data[i].src;
        image.className = 'image';

        title.innerHTML = data[i].title;
        price.innerHTML = data[i].price + '💲';

        content.className = 'content';
        content.appendChild(title);
        content.appendChild(price);

        card.className = 'card';
        card.appendChild(image);
        card.appendChild(content);

        element.appendChild(card);
        // element.innerHTML += '<span>' + data[i].title + '</span>';
        console.log(data[i]);
    }
}

// sidenav-container event
containerButton.addEventListener('click', (e) => {
    document.querySelector('.sidebar').setAttribute("style", "width: 0px");
    document.querySelector('.sidenav-container').setAttribute("style", "background-color: rgba(0,0,0,0)");
})


// hamburger event
hamburger.addEventListener('click', () => {
    document.querySelector('.sidebar').setAttribute("style", "width: 200px");
    document.querySelector('.sidenav-container').setAttribute("style", "width: 100vw");
})

//dropdown event
profileIcon.addEventListener('click', () => {
    dropdownBtn.setAttribute("style", "display: flex;");
})

//all button
const allButton = document.querySelector('.all');
allButton.addEventListener('click', (e) => {
    element.innerHTML = '';
    mainRenderer(data);
    e.stopPropagation();
});

//cakes button
const cakesButton = document.querySelector('.cakes');
cakesButton.addEventListener('click', (e) => {
    console.log("inside cakes");
    element.innerHTML = '';
    const cakesData = data.filter(val => val.type === 'CAKES');
    mainRenderer(cakesData);
    e.stopPropagation();
});

// cupcakes button
const cupcakesButton = document.querySelector('.cupcakes');
cupcakesButton.addEventListener('click', (e) => {
    element.innerHTML = '';
    const cakesData = data.filter(val => val.type === 'CUPCAKES');
    mainRenderer(cakesData);
    e.stopPropagation();
});

// sweets button
const sweetsButton = document.querySelector('.sweets');
sweetsButton.addEventListener('click', (e) => {
    element.innerHTML = '';
    const cakesData = data.filter(val => val.type === 'SWEETS');
    mainRenderer(cakesData);
    e.stopPropagation();
});

// doughnuts button 
const doughnutsButton = document.querySelector('.doughnuts');
doughnutsButton.addEventListener('click', (e) => {
    element.innerHTML = '';
    const cakesData = data.filter(val => val.type === 'DOUGHNUTS');
    mainRenderer(cakesData);
    e.stopPropagation();
});

inputSearch.addEventListener('input', (e) => {
    console.log(e.target.value);
    element.innerHTML = '';
    const filteredData = data.filter(val => val.title.includes(e.target.value));
    mainRenderer(filteredData);
    e.stopPropagation();
})
mainRenderer(data);