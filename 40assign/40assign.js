/*
Album: Write a function called make_album() that builds a Object
describing a music album. The function should take in
 an artist name and an album title, and it should
 return a Object containing these two pieces of information.
 Use the function to make three dictionaries representing
  different albums. Print each return value to show that Objects
   are storing the album information correctly. Add an optional
    parameter to make_album() that allows you to store the number
    of tracks on an album. If the calling line includes a value for
    the number of tracks, add that value to the album’s Object.
    Make at least one new function call that includes the number
    of tracks on an album.
*/
//function make_album(artist: string, title: string,tracks?: number): { artist: string; title: string;tracks?: number }
function make_album(artistname, artisttitle, tracks) {
    if (tracks === void 0) { tracks = 0; }
    var album = {
        artistname: artistname,
        artisttitle: artisttitle,
        tracks: tracks
    };
    if (tracks !== undefined) {
        //album.tracks=tracks;
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album('Abidaperveen', 'Album 100');
var album2 = make_album('MehdiHassan', 'Album 200', 5);
var album3 = make_album('Astad Nusrat Ali', 'Album 128', 2);
console.log(album1);
console.log(album2);
console.log(album3);