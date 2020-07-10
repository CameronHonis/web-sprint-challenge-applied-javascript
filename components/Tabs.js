// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
const data = {
    topics: ['javascript','bootstrap','technology','jquery','node.js']
}
axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(obj => {
        obj.data.topics.forEach(v => {
            let topic = document.createElement('div')
            document.querySelector('div.topics').appendChild(topic)
            topic.className = 'tab'
            topic.textContent = v
            topic.addEventListener('click',e => {
                topic.classList.toggle('active-tab')
                const cards = document.querySelectorAll('.card')
                cards.forEach(vv => {
                    let corrTab;
                    let anySelected = false
                    document.querySelectorAll('.tab').forEach(vvv => {
                        if (vv.className.includes(vvv.textContent.toLowerCase())){
                            corrTab = vvv
                        }
                        if (vvv.className.includes('active-tab')){
                            anySelected = true
                        }
                    })
                    if (anySelected){
                        if (corrTab.className.includes('active-tab')){
                            vv.style.display = 'flex'
                        } else {
                            vv.style.display = 'none'
                        }
                    } else {
                        vv.style.display = 'flex'
                    }
                })
            })
        })
    })