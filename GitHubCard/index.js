import axios from 'axios'


/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

// function axiosTest() {
//   // create a promise for the axios request
//   const promise = axios.get('https://api.github.com/users/melaniechele')
//   // using .then, create a new promise which extracts the data
//   const dataPromise = promise.then((response) => response.data)
//   // return it
//   return dataPromise
// }
// // now we can use that data from the outside!
// axiosTest()
//   .then(data => {
//       console.log(data);
//       // response.json({ message: 'Request received!', data });
//   })
//   .catch(err => console.log(err))



let resArray= []
axios.get('https://api.github.com/users/melaniechele')
  .then( res => {
    console.log(`Res: ${res}`)
    resArray.push(res.data)
    console.log(resArray)

    cards.appendChild(createGithubCard(resArray))

  })
  .catch(err => {
    console.log(`Err: ${err}`)
  })
/*
  STEP 2: Inspect a
  nd study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
const eachUser = []
const followersArray = ['https://api.github.com/users/tetondan', 'https://api.github.com/users/dustinmyers','https://api.github.com/users/justsml',
'https://api.github.com/users/luishrd', 'https://api.github.com/users/bigknell'];

followersArray.forEach(url => {
  axios
  .get(url)
  .then((res) =>{
    console.log('here is the res:', res);

  eachUser.push(res.data);
  let manipulated = eachUser.splice(0, 1);
  cards.appendChild(createGithubCard(manipulated));
    
   

  })

  .catch((err)=>{
    console.log('here is the err: ', err)
  })

})





/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function createGithubCard(object){
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card')

    const img = document.createElement('img');
    img.src = object[0].avatar_url
    cardDiv.appendChild(img)

    const secondDiv = document.createElement('div');
    secondDiv.classList.add('card-info')
    cardDiv.appendChild(secondDiv)

    const name = document.createElement('h3')
    name.classList.add('name')
    name.textContent = object[0].name
    secondDiv.appendChild(name)

    const userName = document.createElement('p')
    userName.classList.add('username')
    userName.textContent = object[0].login
    secondDiv.appendChild(userName)

    const location = document.createElement('p')
    location.textContent = object[0].location
    secondDiv.appendChild(location)

    const profile = document.createElement('p')
    profile.textContent =  'Profile: '
    secondDiv.appendChild(profile)

    const aProfile = document.createElement('a')
    aProfile.textContent = object[0].html_url
    aProfile.href = object[0].html_url
    profile.appendChild(aProfile)

    const followers = document.createElement('p')
    followers.textContent = `Followers: ${object[0].followers}`
    secondDiv.appendChild(followers)

    const following = document.createElement('p')
    following.textContent = `Following: ${object[0].following}`
    secondDiv.appendChild(following)

    const bio = document.createElement('p')
    bio.textContent = `Bio: ${object[0].bio}`
    secondDiv.appendChild(bio)



    
  return cardDiv

}

const cards = document.querySelector('.cards')


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
