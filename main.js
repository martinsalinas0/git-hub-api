//Here are some requirements:

// Each time a SHA_HASH is entered and search for, display the associated user's login and image. You can find that via their avatar_url. Append these to the page on every search (the page can have multiple if there are multiple searches).
// This is the url you'll want to use (to search through the React repo, and find SHA Hahes): https://api.github.com/repos/facebook/react/commits
// This is a sample url you'll want to use in your app for getting specific information on a given user: https://api.github.com/repos/facebook/react/commits/e09097a75da040f428ca335e9d181186a61247d1

// create array for the results 

//array for the faces
let faces = [];


//click event for search button 
document.querySelector('.search').addEventListener('click', function () {
  let sha = document.querySelector('#search-query').value;

  document.querySelector('#search-query').value = '';

  fetchData(sha);
  
});



//fetch the results 
let fetchData = function(sha) {
  const url = 'https://api.github.com/repos/facebook/react/commits/' + sha; 

  fetch(url, {
    method: 'GET',
    dataType: 'json'
  })
    .then(data => data.json())
    .then(data => addFace(data));
}


//add faces
let addFace = function(data) {

  faces.push({
    login: data.author.login,
    avatar_url: data.author.avatar_url
  })


  renderFaces();
}


//render the faces 
let renderFaces = function() {
  document.querySelector('.faces').replaceChildren();

  for (let i = 0; i < faces.length; i++) {
    let face = faces[i];

    let template = `
    <div class='col-md-4'>
      <div class='face'>
        <h3>Login: ${face.login}</h3>
        <img src=${face.avatar_url}>
      </div>
    </div>`;

    document.querySelector('.faces').insertAdjacentHTML('beforeend', template);


  }
}