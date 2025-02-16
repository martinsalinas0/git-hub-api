//Here are some requirements:

// Each time a SHA_HASH is entered and search for, display the associated user's login and image. You can find that via their avatar_url. Append these to the page on every search (the page can have multiple if there are multiple searches).
// This is the url you'll want to use (to search through the React repo, and find SHA Hahes): https://api.github.com/repos/facebook/react/commits
// This is a sample url you'll want to use in your app for getting specific information on a given user: https://api.github.com/repos/facebook/react/commits/e09097a75da040f428ca335e9d181186a61247d1

// create array for the results 
let profiles = []; 


//create the click event for the search button 
document.querySelector('.search').addEventListener('click', function (){ 
  const search = document.querySelector('#search-query').value; 
})
//create funciton to fetch the results 
const fetchBooks = () => { 
  const url = //
  fetch(url, { 
    method: 'GET', 
    dataType: 'json'
  })
  .then(data => data.json())
  .then(data => addBooks(data))
}


// create function to add the photos

const addPhoto = () => { 

}



// create the render function 





//call the render funciton 