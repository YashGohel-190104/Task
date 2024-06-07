const product = [
    {
        id: 1,
        name: "T-Shirt",
        price: 700 ,
        gender: "Male",
        color : "Black",
        image : "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR6olHNBmvG_m1rQPd6sHRWz3WzhOaMtvyAUU5QUhhf4V2gYqvn5oiS6D82cP_arY3TrF34AHeZGCqrUxQ7qU-SegGDJlvewp4jFQPUR6jqjsDclzmbLoUBcA"
    }
]
// @ts-ignore
const cart = JSON.parse(localStorage.getItem("card"));

function saveCart() {
    localStorage.setItem("cart",JSON.stringify(cart));
}