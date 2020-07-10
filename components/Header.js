// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    let header = document.createElement('div')
    header.className = 'header'
    let date = document.createElement('span')
    header.appendChild(date)
    date.textContent = 'MARCH 28, 2020'
    date.className = 'date'
    let h1 = document.createElement('h1')
    header.appendChild(h1)
    h1.textContent = 'Lambda Times'
    let temp = document.createElement('span')
    header.appendChild(temp)
    temp.textContent = '98'
    temp.className = 'temp'
    return header
}
document.querySelector('div.header-container').appendChild(Header())