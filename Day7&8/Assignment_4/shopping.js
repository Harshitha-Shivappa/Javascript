let products = [
  {
    id: 1,
    name: "White Tshirt",
    size: "L",
    color: "white",
    price: 1200,
    image: "white.jpg",
    description: "Good looking white tshirt",
  },
  {
    id: 2,
    name: "Black Shirt",
    size: "M",
    color: "Black",
    price: 1500,
    image: "bshirt.jpg",
    description: "Good looking black shirt",
  },

  {
    id: 3,
    name: "Checked Shirt",
    size: "S",
    color: "White & Black",
    price: 900,
    image: "cshirt.jpg",
    description: "Good looking Checked Shirt",
  },

  {
    id: 4,
    name: "Black Female Blazer",
    size: "M",
    color: "Black",
    price: 3000,
    image: "blazer.jpg",
    description: "Beautifull Blazer",
  },

  {
    id: 5,
    name: "Navy Blue Top",
    size: "S",
    color: "Blue",
    price: 1300,
    image: "top.jpg",
    description: "Good looking Top",
  },

  {
    id: 6,
    name: "Indian Dress",
    size: "M",
    color: "Henna",
    price: 1500,
    image: "indian.jpg",
    description: "Good looking Traditional Dress",
  },
  {
    id: 7,
    name: "Kurtas",
    size: "XS",
    color: "Yellow",
    price: 1300,
    image: "kurtas.jpg",
    description: "Good looking Traditional Kurtas",
  },
  {
    id: 8,
    name: "Kurtis",
    size: "S",
    color: "Red",
    price: 1100,
    image: "kurti.jpg",
    description: "Good looking Traditional Kurtis",
  },
  {
    id: 9,
    name: "Jeans",
    size: "30",
    color: "Grey",
    price: 1800,
    image: "jeans.jpg",
    description: "Good looking Stripped Modern Jeans",
  },
  {
    id: 10,
    name: "Earrings",
    size: "Free Size",
    color: "Blue",
    price: 1000,
    image: "earrings.jpeg",
    description: "Good looking Traditional Earrings",
  },
  {
    id: 11,
    name: "Shoes",
    size: "48",
    color: "Brown",
    price: 2200,
    image: "shoes.jpeg",
    description: "Good looking Office Shoes",
  },
  {
    id: 12,
    name: "Socks",
    size: "Free Size",
    color: "Black",
    price: 500,
    image: "socks.jpg",
    description: "Good looking Office Wear Socks",
  },
];

cart = [];
function displayProducts(productsData, who = "productwrapper") {
  let productsString = "";

  productsData.forEach(function (product, index) {
    let { id, name, image, color, description, price, size } = product;

    if (who == "productwrapper") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="productimages/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="alreadySearch(${id})">Add to Cart</button>
        </p>
      </div>`;
    } else if (who == "cart") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="productimages/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="removeFromCart(${id})">Remove from Cart</button>
        </p>
      </div>`;
    }
  });

  document.getElementById(who).innerHTML = productsString;
}

displayProducts(products);

function searchProduct(searchValue) {
  let searchedProducts = products.filter(function (product, index) {
    let searchString =
      product.name + " " + product.color + " " + product.description;

    return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });

  displayProducts(searchedProducts);
}

// this is a function to get a product based on id from a particular array
// @param 1 the array u want to get products from
// @param 2 the id u want to search

function getProductByID(productArray, id) {
  return productArray.find(function (product) {
    return product.id == id;
  });
}

function removeFromCart(id) {
  // getting the index based on id
  let index = cart.findIndex(function (product) {
    return product.id == id;
  });

  //   removing from cart based on index
  cart.splice(index, 1);
  displayProducts(cart, "cart");
   document.getElementById("tag").innerHTML = "Total number of products "+cart.length;
}

function myFunction(minimum, maximum) {
	 let filteredProducts = products.filter(function (product) {
    let searchString = product.price;
	
    if(searchString >= minimum && searchString <= maximum) {
		return (product);
	}
    });
	displayProducts(filteredProducts);
}

function alreadySearch(id) {
	console.log(cart.length);
	let t=0;
	if(cart.length == 0) {
		addToCart(id);
	}
	else {
		for(let i=0; i<cart.length; i++) {
		console.log("Outside if"+ cart[i].id+ "  " +id);
		if(cart[i].id == id) {
			console.log("Inside if"+ cart[i].id+ "  " +id);
			alert("Product already exists");
			t=1;
		}
		}
		if(t!=1) {
			addToCart(id);
		}
		
	}
		
}	
function addToCart(id) {
  // getting the product
  let pro = getProductByID(products, id);
  //   putting in cart
  cart.push(pro);
  displayProducts(cart, "cart");
  document.getElementById("tag").innerHTML = "Total number of products "+cart.length;
	}
