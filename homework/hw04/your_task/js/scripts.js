const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

const getTracks = (term) => {
    document.querySelector("#tracks").innerHTML = "";
    console.log(`
        get tracks from spotify based on the search term
        "${term}" and load them into the #tracks section 
        of the DOM...`);
    fetch('https://www.apitutor.org/spotify/simple/v1/search?type=track&q=' + term)
    .then(response => response.json())
    .then(tracks => {
            console.log(tracks);
        if (tracks.length == 0){
            document.querySelector('#tracks').innerHTML = `
                <p>No tracks found for ${term}</p>
            `;
        }
        
            counter = 0;
        
            for (const track of tracks){
        //     document.querySelector('#tracks').innerHTML += `
        //     <p>${track.name}</p>
        // `;
        document.querySelector('#tracks').innerHTML += `
        <button class="track-item preview" data-preview-track="${track.preview_url}" onclick="handleTrackClick(event)" aria-label="Preview Track">
        <img src="${track.album.image_url}" alt="Track image for ${track.name}">
        <i class="fas fa-play play-track" aria-hidden="true"></i>
        <div class="label track-label">
            <h2>${track.name}</h2>
            <p>
                ${track.artist.name}
            </p>
        </div>
    </button>
        `;
        if (track.preview_url == null) {
            const labels= document.getElementsByClassName("track-label");
            labels[labels.length-1].innerHTML =""
            labels[labels.length-1].innerHTML +=` <h2>${track.name}</h2>
            <p>
            "${track.artist.name}" (preview not availible)
        </p>
        
       `
       const playTracks= document.getElementsByClassName("play-track");
       playTracks[playTracks.length-1].style.display = "none";
    };

        counter += 1;
        if (counter >= 5)
        break
            console.log(`
                <p>${track.name}</p>
            `)
        }
    })
};

const getAlbums = (term) => {
    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);
        document.querySelector("#albums").innerHTML ="";
        fetch('https://www.apitutor.org/spotify/simple/v1/search?type=album&q=' + term)
        .then(response => response.json())
        .then(albums => {
                console.log(albums);
            if (albums.length == 0){
                document.querySelector('#albums').innerHTML = `
                    <p>No albums found for ${term}</p>
                `;
            }
            
                // counter = 0;
            
                for (const album of albums){
            //     document.querySelector('#tracks').innerHTML += `
            //     <p>${track.name}</p>
            // `;
            document.querySelector('#albums').innerHTML += `
        
            <section class="album-card" id ="${album.id}">
            <div>
            <img src="${album.image_url}" alt="Album cover for ${album.name}">
            <div class="label">
                <h2>${album.name}</h2>
                <div class="footer">
            <a href="${album.spotify_url}" target="_blank">
                view on spotify
            </a>
        </div>
            </div>
            </div>
            </section>
        
            `;
    
    
            // counter += 1;
            // if (counter >= 5)
            // break
            //     console.log(`
            //         <p>${album.name}</p>
            //     `)
            }
        })
};

const getArtistHTML = (artist) => {
    if (!artist.image_url){
        artist.image_url = "";
    }
    return `<section class="artist-card" id="${artist.id}">
    <div>
        <img src="${artist.image_url}" alt="Artist picture of ${artist.name}">
        <h2>${artist.name}</h2>
        <div class="footer">
            <a href="${artist.spotify_url}" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>`
};

const getArtist = (term) => {
    console.log(`
        get artists from spotify based on the search term
        "${term}" and load the first artist into the #artist section 
        of the DOM...`);
    document.querySelector("#artist").innerHTML = "";
    fetch(baseURL + "?type=artist&q=" + term)
    .then(response => response.json()) 
    .then(data => {
        if (data.length > 0) {
            const firstArtist = data[0]
            document.querySelector("#artist").innerHTML = getArtistHTML(firstArtist);
        }
        else {
            document.querySelector("#artist").innerHTML = "No Artists found."
        }
    })
};

const handleTrackClick = (ev) => {
    const previewUrl = ev.currentTarget.getAttribute('data-preview-track');
    console.log(previewUrl);
    audioPlayer.setAudioFile(previewUrl);
    audioPlayer.play();
    
    
    
    
    
    
    
    const footerHead = ev.currentTarget.getElementsByTagName("h2")
    const footPara = ev.currentTarget.getElementsByTagName("p")
    const footImage = ev.currentTarget.getElementsByTagName("img")


      document.querySelector("#current-track").innerHTML ="";
    document.querySelector("#current-track").innerHTML += `
    <img src="${footImage[0].src}" alt="Track image for ${footerHead[0].innerText}">
    <div class="label">
    <h2>${footerHead[0].innerText}</h2>
    <p>
        ${footPara[0].innerText}
    </p>
    </div>
    `;

    // document.querySelector("#current-track").innerHTML ="";
    // document.querySelector("#current-track").innerHTML += `
    // <div class="label">
    // <h2>"${track.name}"</h2>
    // <p>
    //     "${track.artist.name}"
    // </p>
    // </div>
    // `;

};


// document.querySelector("#tracks").onclick = handleTrackClick;





document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
};


