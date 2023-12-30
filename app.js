const wrapper = document.querySelector(".sliderwrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "New Nike Jeans",
        price: "119",
        colors: [
            {
                code:"black",
                img:"./img/blackjeans.png",
            },
            {
                code:"skyblue",
                img:"./img/bsssh.png",
            },
        ],
    },
    {
        id: 2,
        title: "New suit",
        price: "500",
        colors: [
            {
                code:"maroon",
                img:"./img/kttt.png",
            },
            {
                code:"blue",
                img:"./img/bluesuit.png",
            },
        ],
    },
    {
        id: 3,
        title: "New shirts",
        price: "110",
        colors: [
            {
                code:"white-black",
                img:"./img/httt.png",
            },
            {
                code:"red",
                img:"./img/redshirt.png",
            },
        ],
    },
    {
        id: 4,
        title: "New court",
        price: "180",
        colors: [
            {
                code:"blue",
                img:"./img/btt.png",
            },
            {
                code:"silver",
                img:"./img/silver.png",
            },
        ],
    },
    {
        id: 5,
        title: "New shoes",
        price: "200",
        colors: [
            {
                code:"grey",
                img:"./img/wttt.png",
            },
            {
                code:"blue",
                img:"./img/bshs.png",
            },
        ],
    },
];

let choosenProduct = products[0]
const currentProductImg = document.querySelector(".ProductImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProducPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
       wrapper.style.transform = `translateX(${-100 * index}vw)`;
       choosenProduct = products[index];
       currentProductTitle.textContent = choosenProduct.title;
       currentProducPrice.textContent =  "$"+choosenProduct.price;
       currentProductImg. src = choosenProduct.colors[0].img;

       currentProductColors.forEach((color,index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;
       })
    });
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src = choosenProduct.colors[index].img;  
    });
});

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor="white";
            size.style.color="black";

        });
        size.style.backgroundColor="black";
        size.style.color="white";
    });
});

const productbuy= document.querySelector(".productbuy");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productbuy.addEventListener("click",()=>{
    payment.style.display="flex"
})
close.addEventListener("click",()=>{
    payment.style.display="none"
})

