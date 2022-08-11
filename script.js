
const xhr = new XMLHttpRequest()


const url = `https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09&maxResults=10`


xhr.open('GET', url)
console.log(`Ready State - ${xhr.readyState}`)





xhr.onreadystatechange = () => {
    console.log(`Ready State - ${xhr.readyState}`)
    if (xhr.readyState === 4 && xhr.status === 200) {
        const objectResponse = JSON.parse(xhr.responseText)
        console.log(objectResponse)
        var output = ''
        for (let i = 0; i < 25; i++) {
            output += `
            <div class="projects-grid">
    <div class="card">
            
     <div class="desc">
        <h3 class="project-tile">${objectResponse[i].userId}</h3>
        <p> ${objectResponse[i].id}</p>
          
        <p>${objectResponse[i].body}</p>
      </div>
      </div>
    </div>

    `

        }

        
        document.querySelector('.projects-grid').innerHTML = output
    }
}


xhr.send()



