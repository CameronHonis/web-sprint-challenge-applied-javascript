// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article 
//      is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
function createCard(topic,obj){
    let card = document.createElement('div')
    card.className = 'card'
    card.classList.add(topic === 'node' ? 'node.js' : topic)
    let headline = document.createElement('div')
    card.appendChild(headline)
    headline.className = 'headline'
    headline.textContent = obj.headline
    let author = document.createElement('div')
    card.appendChild(author)
    author.className = 'author'
    let imgcont = document.createElement('div')
    author.appendChild(imgcont)
    imgcont.className = 'img-container'
    let img = document.createElement('img')
    imgcont.appendChild(img)
    img.src = obj.authorPhoto
    let span = document.createElement('span')
    author.appendChild(span)
    span.textContent = obj.authorName
    return card
}
const testData = {
    data: {
        articles: {
            one: [{authorName: 'one',authorPhoto: './assets/fido.jpg',headline: 'test'}]
        }
    }
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(obj => {
        for (let k in obj.data.articles){
            for (let i = 0; i < obj.data.articles[k].length; i++){
                document.querySelector('.cards-container').appendChild(createCard(k.toLowerCase(),obj.data.articles[k][i]))
            }
        }
    })
    .catch(obj => {
        document.querySelector('#error').classList.remove('hidden')
    })