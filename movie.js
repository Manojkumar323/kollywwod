// const right = document.getElementById("aright")[0]
// const left = document.getElementById("aleft")[0]
// const card = document.querySelector(".card1")


// function left(){
//     card.scrollLeft -= 140
// }
// function right(){
//     card.scrollLeft += 140
// }


// let right = document.getElementsByClassName("fa-arrow-right");
// let left = document.getElementsByClassName(" fa-arrow-left");
// let card = document.getElementsByClassName("card1");

// left.addEventListener('click',() => {
//     card.scrollLeft-= 140;
// });

// right.addEventListener('click',() => {
//     card.scrollLeft+= 140;
// });

// console.log(right);

// console.log(left);

// console.log(card);


// 
const rightButton = document.getElementById("aright");
const leftButton = document.getElementById("aleft");
const cardContainer = document.querySelector(".cards1");
console.log(cardContainer);
const user = document.querySelector(".searchUser")
const searchinput = document.getElementById("input")

// Event listener for the right button
rightButton.addEventListener('click', () => {
    cardContainer.scrollLeft += 140; // Scrolls the container to the right by 140 pixels
});

// Event listener for the left button
leftButton.addEventListener('click', () => {
    cardContainer.scrollLeft -= 140; // Scrolls the container to the left by 140 pixels
});



let jsonurl = "app.json"

fetch(jsonurl).then(respone => respone.json())
    .then(data => {
        data.forEach((value, i) => {
            let { name, imdb, date, sposter, bposter, genre, url } = value //object destcuring

            let card = document.createElement('a')
            card.classList.add('card1')
            card.href = url
            card.innerHTML = `
      
           <img src="${sposter}" alt="${name}" class="poster">

                    <div class="rest-card">
                        <img src="${bposter}" alt="">
                        <div class="cont">

                            <h4>${name}</h4>
                            <div class="sub">
                                <p>${genre},${date}</p>
                                <h3><span>IMDB</span><i class="fa-solid fa-star"> 9.5</i></h3>
                            </div>
                          
                        </div>
                    </div>
           `
            cardContainer.appendChild(card)
        })


        let title = document.getElementById("tittle").innerText = data[0].name
        let gen = document.getElementById("gen").innerText = data[0].genre
        let date = document.getElementById("Date").innerText = data[0].date
        let rate = document.getElementById("rate").innerHtml = `<span>IMDB</span><i class="fa-solid fa-star">${data[0].imdb} </i>`

        data.forEach((ele) => {
            let { name, imdb, date, sposter, bposter, genre, url } = ele //object destcuring

            let card3 = document.createElement('a')
            card3.classList.add('card')
            card3.href = url
            card3.innerHTML = ` 
    <img src="${sposter}" alt="">
    <div class="content">
        <h3>${name}</h3>
        <p>${genre} , ${date} <span>IMDB</span> <i class="fa-solid fa-star"> 9.5</i></p>
    </div>
`
            user.appendChild(card3)
        })

        searchinput.addEventListener('keyup', () => {
            let filter = searchinput.value.toUpperCase()
            let a = user.getElementsByTagName('a')

            for (let i = 0; i < a.length; i++) {

                let b = a[i].getElementsByClassName('content')[0]


                let textvalue = b.textContent || b.innerHTML
                if (textvalue.toUpperCase().indexOf(filter) > -1) {
                    a[i].style.display = "flex"
                    user.style.visibility = "visible"
                    user.style.opacity = "1"
                } else {
                    a[i].style.display = "none"
                }
                if (searchinput.value == 0) {
                    user.style.visibility = "hidden"
                    user.style.opacity = "0"

                }
            }
        })

        let video = document.getElementsByTagName('video')[0]
        let play = document.getElementById('play')
        play.addEventListener("click", () => {
            if (video.paused) {
                video.play()
                play.innerHTML = `Watch<i class="fa-solid fa-play"></i></a>`
            } else {
                video.pause()
                play.innerHTML = 'Play<i class="fa-solid fa-pause"></i>'
            }
        })

        let series = document.getElementById("series")


        series.addEventListener('click', () => {
            cardContainer.innerHTML = ""
            seriesArray = data.filter((elem, i) => {
                return elem.type === "series"

            })

//series list 


            seriesArray.forEach((value, i) => {
                let { name, imdb, date, sposter, bposter, genre, url } = value //object destcuring

                let card = document.createElement('a')
                card.classList.add('card1')
                card.href = url
                card.innerHTML = `
      
           <img src="${sposter}" alt="${name}" class="poster">

                    <div class="rest-card">
                        <img src="${bposter}" alt="">
                        <div class="cont">

                            <h4>${name}</h4>
                            <div class="sub">
                                <p>${genre},${date}</p>
                                <h3><span>IMDB</span><i class="fa-solid fa-star"> 9.5</i></h3>
                            </div>
                          
                        </div>
                    </div>
           `
                cardContainer.appendChild(card)
            })
        })

//movies list

        let movies = document.getElementById("movie")
        movies.addEventListener('click', () => {
            cardContainer.innerHTML = ""
            moviearray = data.filter((elem, i) => {
                return elem.type === "movie"

            })


            moviearray.forEach((value, i) => {
                let { name, imdb, date, sposter, bposter, genre, url } = value //object destcuring

                let card = document.createElement('a')
                card.classList.add('card1')
                card.href = url
                card.innerHTML = `
      
           <img src="${sposter}" alt="${name}" class="poster">

                    <div class="rest-card">
                        <img src="${bposter}" alt="">
                        <div class="cont">

                            <h4>${name}</h4>
                            <div class="sub">
                                <p>${genre},${date}</p>
                                <h3><span>IMDB</span><i class="fa-solid fa-star"> 9.5</i></h3>
                            </div>
                          
                        </div>
                    </div>
           `
                cardContainer.appendChild(card)
            })
        })


        //home 



        let homes = document.getElementById("home")
        homes.addEventListener('click', () => {
        
          homes.forEach((value, i) => {
                let { name, imdb, date, sposter, bposter, genre, url } = value //object destcuring

                let card = document.createElement('a')
                card.classList.add('card1')
                card.href = url
                card.innerHTML = `
      
           <img src="${sposter}" alt="${name}" class="poster">

                    <div class="rest-card">
                        <img src="${bposter}" alt="">
                        <div class="cont">

                            <h4>${name}</h4>
                            <div class="sub">
                                <p>${genre},${date}</p>
                                <h3><span>IMDB</span><i class="fa-solid fa-star"> 9.5</i></h3>
                            </div>
                          
                        </div>
                    </div>
           `
                cardContainer.appendChild(card)
            })
        })





    })

