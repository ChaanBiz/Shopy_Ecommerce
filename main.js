//variation

const oz = [
  "40oz",
  "32oz",
  "22oz",
  "18oz",
  "14oz"
]

const variant = [
  "ST Amethyst",
  "ST Hunter",
  "ST Malibu",
  "ST Moss Green",
  "ST Stone Gray",
  "Emerald",
  "Obsidian",
  "Pearl",
  "Rose Quartz",
  "Ruby",
  "Sapphire",
  "Tarzanite",
  "Topaz"
]

const ozlist = document.getElementById("oz"),
varlist = document.getElementById("variant")


oz.forEach((item) => {
  const list = document.createElement("div")
  list.innerHTML = item;
  list.classList.add("com_btn")
  ozlist.appendChild(list)
})

variant.forEach((item) => {
  let list = document.createElement("div")
  list.innerHTML = item;
  list.classList.add("com_btn")
  varlist.appendChild(list)
})

//quantity & total

const minus = document.getElementById("minus"),
add = document.getElementById("add"),
quantity = document.getElementById("quantity"),
total = document.getElementById("total"),
stock = document.getElementById("available")

let stockCount = 1516
let itemCount = 1
let price = 1900

minus.addEventListener("click", () => {
  if(itemCount > 1) {
    itemCount--;
    stockCount++
    price = price - 1900;
    update()
  } else {
    alert("1 item is set by default")
  }
})

add.addEventListener("click", () => {
  itemCount++;
  stockCount--
  price = price + 1900;
  update()
})

function update() {
  quantity.innerHTML = itemCount;
  total.innerHTML = price.toLocaleString();
  stock.innerHTML = stockCount;
}