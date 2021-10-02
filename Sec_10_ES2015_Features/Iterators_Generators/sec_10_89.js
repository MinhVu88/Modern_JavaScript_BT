const data = [
  {
    name: 'Jake Foley',
    age: 56,
    gender: 'male',
    desiredPartner: 'female',
    location: 'Sale Lake City, CO',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Sarah Baker',
    age: 26,
    gender: 'female',
    desiredPartner: 'male',
    location: 'Springfield, OH',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'Keith Bridges',
    age: 38,
    gender: 'male',
    desiredPartner: 'female',
    location: 'Sacramento, CA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  }
];

const nextBtn = document.querySelector('#next');
const img = document.querySelector('#img');
const profile = document.querySelector('#profile');

// profile iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length 
             ? {value: profiles[nextIndex++], done: false} 
             : {done: true};
    }
  };
}

const profiles = profileIterator(data);

// when the page 1st loads or reloads, the 1st profile also shows up
// this must be called after the initialization of profiles
nextProfile();

function nextProfile() {
  const currentProfile = profiles.next().value;

  if(currentProfile !== undefined) {
    profile.innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Gender: ${currentProfile.gender}</li>
        <li class="list-group-item">Desire partner: ${currentProfile.desiredPartner}</li>
      </ul>
    `;

    img.innerHTML = `<img src=${currentProfile.image}>`;
  }else {
    // reload the page when the last profile is reached
    window.location.reload();
  }
}

nextBtn.addEventListener('click', nextProfile);