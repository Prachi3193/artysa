const artistsData = [
    {
        image: "https://i.natgeofe.com/n/37c3c776-b8cb-4be1-988a-cf593c776b88/01-leonardo-da-vinci-book-talk_3x4.jpg?w=718&h=957",
        name: "Atif aslam",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat omnis labore eveniet laudantium blanditiis aliquam amet corporis alias, et minima sunt ea eligendi dolorem natus molestias unde accusamus tempora adipisci?"
    },
    {
        image: "https://i.natgeofe.com/n/37c3c776-b8cb-4be1-988a-cf593c776b88/01-leonardo-da-vinci-book-talk_3x4.jpg?w=718&h=957",
        name: "KK",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat omnis labore eveniet laudantium blanditiis aliquam amet corporis alias, et minima sunt ea eligendi dolorem natus molestias unde accusamus tempora adipisci?"
    },
    {
        image: "https://i.natgeofe.com/n/37c3c776-b8cb-4be1-988a-cf593c776b88/01-leonardo-da-vinci-book-talk_3x4.jpg?w=718&h=957",
        name: "Rampal",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat omnis labore eveniet laudantium blanditiis aliquam amet corporis alias, et minima sunt ea eligendi dolorem natus molestias unde accusamus tempora adipisci?"
    },
    {
        image: "https://i.natgeofe.com/n/37c3c776-b8cb-4be1-988a-cf593c776b88/01-leonardo-da-vinci-book-talk_3x4.jpg?w=718&h=957",
        name: "ala hu akbar",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat omnis labore eveniet laudantium blanditiis aliquam amet corporis alias, et minima sunt ea eligendi dolorem natus molestias unde accusamus tempora adipisci?"
    },
]

const artistsSection = document.getElementById('artistsSection')
const setArtistsData = (array) => {
    let clutter = ``;
    array.forEach((artist, index) => {
        if (index % 2 === 0) {
            clutter += `<div class="leftCard">
            <div class="leftCardInnerOuter">
                <div class="leftCardInner" data-card-name='${artist.name}'>
                    <img
                        src=${artist.image}>
                </div>
            </div>
            <div class="leftCardContent">
                <div class="leftCardContentName">${artist.name}</div>
                <p class="leftCardContentDescription">${artist.about}</p>
                <div class="leftCardContentButton">More <i class="fa-solid fa-arrow-right"></i></div>
            </div>
        </div>`
        } else {
            clutter += `<div class="rightCard">
            <div class="rightCardInnerOuter">
                <div class="rightCardInner" data-card-name="${artist.name}">
                    <img
                        src="${artist.image}">
                </div>
            </div>
            <div class="rightCardContent">
                <div class="rightCardContentName">${artist.name}</div>
                <p class="rightCardContentDescription">${artist.about}</p>
                <div class="rightCardContentButton">More <i class="fa-solid fa-arrow-right"></i></div>
            </div>
        </div>`
        }
    })
    artistsSection.innerHTML = clutter;
}
setArtistsData(artistsData);