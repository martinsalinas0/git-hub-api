//Here are some requirements:

// Each time a SHA_HASH is entered and search for, display the associated user's login and image. You can find that via their avatar_url. Append these to the page on every search (the page can have multiple if there are multiple searches).
// This is the url you'll want to use (to search through the React repo, and find SHA Hahes): https://api.github.com/repos/facebook/react/commits
// This is a sample url you'll want to use in your app for getting specific information on a given user: https://api.github.com/repos/facebook/react/commits/e09097a75da040f428ca335e9d181186a61247d1

// create array for the results 
let faces = []; 


//create the click event for the search button 
document.querySelector('.search').addEventListener('click', function (){ 
  const sha = document.querySelector('#search-query').value; 

  document.querySelector('#search-query').value = ''; 

  fetchData(sha)
})
//create funciton to fetch the results 
const fetchData = (sha) => { 
  const url = 'https://api.github.com/repos/facebook/react/commits/' + sha; 
  fetch(url, { 
    method: 'GET', 
    dataType: 'json'
  })
  .then(data => data.json())
  .then(data => addFace(data))
}


// create function to add the photos

const addFace = () => { 

}



// create the render function 
const renderFace = () =>  { 
  document.querySelector('.faces').replaceChildren(); 

  for (let i = 0; i < faces.length; i++){ 
    const template = `
    <div class="face col-md-6">
    <h4>(${sha})</h4>
    <img src="https://avatars.githubusercontent.com/u/8071845?v=4" alt="lol" class="img-fluid"/>
    </div>`
  }
}




//call the render funciton


