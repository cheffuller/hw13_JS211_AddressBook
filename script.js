const addressBook = []

window.onload = () => {
  getData();
};

const getData = async () => {
  const response = await fetch("https://randomuser.me/api/");
  let randomUserData = await response.json();
  addressBook.push(randomUserData.results[0])
  console.log(randomUserData)
  console.log(addressBook)
  console.log(addressBook[0].gender)
  console.log(addressBook[0].name.title + " " + addressBook[0].name.first + " " + addressBook[0].name.last)
  displayData();
};

const displayData = () => {
    const displayWindow = document.querySelector("#display")
    const figure = document.createElement("figure")
    const img = document.createElement("img")
    img.src = addressBook[0].picture.large
    const caption = document.createElement("figcaption")
    caption.innerHTML = (addressBook[0].name.title + " " + addressBook[0].name.first + " " + addressBook[0].name.last)
    displayWindow.appendChild(figure)
    figure.appendChild(img)
    figure.appendChild(caption)
}