
// Task 40: 
// Album.

function make_album(name, album, track) {
    this.artist_name = name;
    this.album = album;
    this.tracks = track;
}


var artist1 = new make_album('Yo Yo honey', "Saiyaan G", 10);
console.log(artist1);

var artist2 = new make_album('Atif', "Tery saang yara", 5);
console.log(artist2);

var artist3 = new make_album('Talha anjum', "karchi mera", 12);
console.log(artist3);

