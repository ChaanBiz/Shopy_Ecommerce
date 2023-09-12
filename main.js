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