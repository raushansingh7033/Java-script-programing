let userContainer = document.querySelector('.userContainer');
const arr = [
  {
    profileUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Amit Kumar",
    email: "amit.kumar@gmail.com"
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Neha Sharma",
    email: "neha.sharma@gmail.com"
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Vikash Gupta",
    email: "vikash.gupta@gmail.com"
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Priya Singh",
    email: "priya.singh@gmail.com"
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Rahul Verma",
    email: "rahul.verma@gmail.com"
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Sneha Patel",
    email: "sneha.patel@gmail.com"
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Arjun Yadav",
    email: "arjun.yadav@gmail.com"
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Pooja Kumari",
    email: "pooja.kumari@gmail.com"
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Ankit Raj",
    email: "ankit.raj@gmail.com"
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/women/10.jpg",
    name: "Divya Mishra",
    email: "divya.mishra@gmail.com"
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Ravi Ranjan",
    email: "ravi.ranjan@gmail.com"
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Komal Jha",
    email: "komal.jha@gmail.com"
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/men/13.jpg",
    name: "Manish Tiwari",
    email: "manish.tiwari@gmail.com"
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/women/14.jpg",
    name: "Ayesha Khan",
    email: "ayesha.khan@gmail.com"
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/men/15.jpg",
    name: "Kunal Mehta",
    email: "kunal.mehta@gmail.com"
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/women/16.jpg",
    name: "Ritika Sharma",
    email: "ritika.sharma@gmail.com"
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/men/17.jpg",
    name: "Sandeep Kumar",
    email: "sandeep.kumar@gmail.com"
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/women/18.jpg",
    name: "Meena Rani",
    email: "meena.rani@gmail.com"
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/men/19.jpg",
    name: "Deepak Sharma",
    email: "deepak.sharma@gmail.com"
  },
  {
    profileUrl: "https://randomuser.me/api/portraits/women/20.jpg",
    name: "Simran Kaur",
    email: "simran.kaur@gmail.com"
  }
];


function rendersUser(arr) {
  userContainer.innerHTML = '';
  arr.map((item) => {

    let divElem = document.createElement('div')
    divElem.className = 'userItem'
    divElem.innerHTML = `
          <div class="image">
            <img
              src=${item.profileUrl}
            />
          </div>
          <div class="userDetails">
            <h3>${item.name}</h3>
            <p>${item.email}</p>
          </div>
         
        `

    userContainer.append(divElem)
  })

}
rendersUser(arr)

let searchInput = document.querySelector('#searchInput');
function handleSearch(event) {
  //console.log(searchInput.value)
  // console.log(event.target.value)
  let searchValue = event.target.value;
  let filteredUsers = arr.filter(obj => {
    return (

      obj.name.toLowerCase().includes(searchValue.toLowerCase()) || obj.email.toLowerCase().includes(searchValue.toLowerCase())
    )
  })
  rendersUser(filteredUsers)
}

searchInput.addEventListener('input', handleSearch)


