let btn=document.querySelector("#log");
let navbar=document.querySelector("navbar");
let acc=document.querySelector(".form")
let blu=document.querySelector(".middle_1")
let cross=document.querySelector("#cross");
let submi=document.querySelector(".rare");
let cart=document.querySelector("#cart");
let carts=document.querySelector(".carts");
let clos=document.querySelector("#close");
let ham=document.querySelector("#hide");
let nav=document.querySelector(".navbar2");
let cross2=document.querySelector("#cross2");
let log2=document.querySelector("#log2")
let cartitem=document.querySelector(".cart-item")
let butto=document.querySelectorAll(".card-btn")
let quantity=document.querySelectorAll(".quantity")
let total=document.querySelector(".totals");
let header=document.querySelector(".header");
let i;
document.addEventListener('scroll',()=>{
  if(window.scrollY > 0){
  header.style.backgroundColor="rgba(30, 28, 25, 1)";
  header.style.color="white";
  for(i=0;i<5;i++){
document.querySelectorAll(".navbar a")[i].style.color="white";
  }
  }
  else{
    header.style.backgroundColor="rgb(255, 254, 250)"; 
    header.style.color="black";
     for(i=0;i<5;i++){
document.querySelectorAll(".navbar a")[i].style.color="black";
  }
  }
})

btn.addEventListener("click",()=>{
  acc.removeAttribute("id","disappear")
  acc.style.transform="scale(1.1)";
  blu.style.filter="blur(0.5rem)";
})

cross.onclick=()=>{
    acc.setAttribute("id","disappear")
     blu.style.filter="blur(0)";
     window.location.reload();
}
submi.onclick=()=>{
    alert("you are logged in")
 acc.setAttribute("id","disappear")
     blu.style.filter="blur(0)";
     window.location.reload();
}

cart.onclick=()=>{
 carts.removeAttribute("id","disappear");
 carts.style.transform="translateX(0)";
}
clos.onclick=()=>{
  carts.setAttribute("id","disappear");
}

ham.onclick=()=>{
  nav.removeAttribute("id","disappear");
   blu.style.filter="blur(0.5rem)";
}
cross2.onclick=()=>{
    nav.setAttribute("id","disappear")
     blu.style.filter="blur(0)";
    window.location.reload();
}
log2.onclick=()=>{
   acc.removeAttribute("id","disappear")
     nav.setAttribute("id","disappear")
  acc.style.transform="scale(1.1)";
  blu.style.filter="blur(0.5rem)";
}
let products=[];
console.log(products)
 function getdata(){
fetch("product.json").then((res)=>{
  return res.json();
}).then((data)=>{
products=data;

}).catch((err)=>{
  console.log("error ocured"+err);
})
}
getdata();


let cash=0;

function active(size,nos){
 let price=products[size].price
let amount=products[size].price;
  let tota=price;
  cash=cash+tota;
  console.log(cash);
total.innerHTML=`Total: $${parseFloat(cash).toFixed(2)}`;
  let no=1; 
let items=document.createElement("div")
  items.setAttribute("class","items");
  items.innerHTML=`<img src=${products[size].image} width="60px" height="60px">
        <div class="section">
            <h1>${products[size].name}</h1>
             <p class="change">$${price}</p>
        </div>
        <div class="quantity">
           <i class="fa-solid fa-circle-minus minus"  ></i>
             <p class="num">${no}</p>
           <i class="fa-solid fa-circle-plus plus"></i>
        </div>`
        cartitem.append(items);
      if(products[size].id==size){
 let plus=items.querySelector(".plus");
 let num=items.querySelector(".num");
  let change=items.querySelector(".change");
  plus.addEventListener('click',()=>{
   no++;
   num.innerHTML=no;
   amount=amount+price; 
   cash=cash+price;
total.innerHTML=`Total: $${parseFloat(cash).toFixed(2)}`;
 change.innerHTML=`$${parseFloat(amount).toFixed(2)}`;
  
  })
  let minus=items.querySelector(".minus");
  minus.addEventListener('click',()=>{
    no--;
     num.innerHTML=no;
      amount=amount-price;
        cash=cash-price;
total.innerHTML=`Total: $${parseFloat(cash).toFixed(2)}`;
     change.innerHTML=`$${parseFloat(amount).toFixed(2)}`;
     if(no==0){
      items.remove();
     }
     
  })
      }
 
}

 
butto[0].addEventListener("click",(e)=>{
 active(0,0);
 e.preventDefault();
});


butto[1].addEventListener("click",()=>{
 active(1,1);
});

butto[2].addEventListener("click",()=>{
  active(2,2) 
})

butto[3].addEventListener("click",()=>{
  active(3,3)
})

butto[4].addEventListener("click",()=>{
  active(4,4)
});
butto[5].addEventListener("click",()=>{
 active(5,5)
})
butto[6].addEventListener("click",()=>{
  active(6,6)
})
butto[7].addEventListener("click",()=>{
 active(7)
})


 
