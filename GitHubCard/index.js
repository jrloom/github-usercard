/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

const cardMaker = data => {
  const card = document.createElement("div");
  const img = document.createElement("img");
  const info = document.createElement("div");
  const name = document.createElement("h3");
  const username = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const gitPage = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  card.classList.add("card");
  info.classList.add("card-info");
  name.classList.add("name");
  username.classList.add("username");

  img.src = data.avatar_url;
  gitPage.href = data.html_url;

  card.appendChild(img);
  card.appendChild(info);
  info.appendChild(name);
  info.appendChild(username);
  info.appendChild(location);
  info.appendChild(profile);
  profile.appendChild(gitPage);
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(bio);

  name.textContent = data.name;
  username.textContent = data.login;
  location.textContent = data.location;
  gitPage.textContent = data.html_url;
  followers.textContent = `Followers: ${data.followers}`;
  following.textContent = `Following: ${data.following}`;
  bio.textContent = data.bio;

  return card;
};

axios
  .get("https://api.github.com/users/jrloom")
  .then(resolve => {
    console.log(resolve);
    const cards = document.querySelector(".cards");
    cards.appendChild(cardMaker(resolve.data));
  })
  .catch(error => console.log(error));
//

// data: {…}
// ​​
// avatar_url: "https://avatars0.githubusercontent.com/u/40191456?v=4"
// ​​
// bio: null
// ​​
// blog: ""
// ​​
// company: null
// ​​
// created_at: "2018-06-12T04:07:17Z"
// ​​
// email: null
// ​​
// events_url: "https://api.github.com/users/jrloom/events{/privacy}"
// ​​
// followers: 3
// ​​
// followers_url: "https://api.github.com/users/jrloom/followers"
// ​​
// following: 8
// ​​
// following_url: "https://api.github.com/users/jrloom/following{/other_user}"
// ​​
// gists_url: "https://api.github.com/users/jrloom/gists{/gist_id}"
// ​​
// gravatar_id: ""
// ​​
// hireable: null
// ​​
// html_url: "https://github.com/jrloom"
// ​​
// id: 40191456
// ​​
// location: "Wayne, MI"
// ​​
// login: "jrloom"
// ​​
// name: "Jason Loomis"
// ​​
// node_id: "MDQ6VXNlcjQwMTkxNDU2"
// ​​
// organizations_url: "https://api.github.com/users/jrloom/orgs"
// ​​
// public_gists: 0
// ​​
// public_repos: 35
// ​​
// received_events_url: "https://api.github.com/users/jrloom/received_events"
// ​​
// repos_url: "https://api.github.com/users/jrloom/repos"
// ​​
// site_admin: false
// ​​
// starred_url: "https://api.github.com/users/jrloom/starred{/owner}{/repo}"
// ​​
// subscriptions_url: "https://api.github.com/users/jrloom/subscriptions"
// ​​
// type: "User"
// ​​
// updated_at: "2019-07-17T07:14:41Z"
// ​​
// url: "https://api.github.com/users/jrloom"
