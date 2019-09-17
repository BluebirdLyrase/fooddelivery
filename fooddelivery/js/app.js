// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <!-- TODO: Add SDKs for Firebase products that you want to use
//firebase.google.com/docs/web/setup#config-web-app -->

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBAdq_u89QmDH-kYoEfjnSBK6yFy5jjWIU",
  authDomain: "food247-6c698.firebaseapp.com",
  databaseURL: "https://food247-6c698.firebaseio.com",
  projectId: "food247-6c698",
  storageBucket: "food247-6c698.appspot.com",
  messagingSenderId: "518082427459",
  appId: "1:518082427459:web:56a83897767553feaff2f6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

var db = firebase.firestore();

db.collection("recommended").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    //object
    console.log(`${doc.id} => ${doc.data()}`);
    // each
    console.log("name : " + doc.data().name);
    console.log("id : " + doc.data().id);
    var carousel = `<ons-carousel-item modifier="nodivider" id="item1" class="recomended_item">
            <div class="thumbnail" style="background-image: url( ${doc.data().photourl} )">
            </div>
            <div class="recomended_item_title" id="item1_name">${doc.data().name}</div>
            </ons-carousel-item>`;
    $('#carousel').append(carousel);
    //` ` for ต่อ string

  });
});

db.collection("category").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    //object
    console.log(`${doc.id} => ${doc.data()}`);
    // each
    console.log("name : " + doc.data().name);
    console.log("id : " + doc.data().id);
    var category = ` <ons-col width="50%" modifier="nodivider" style="margin-top:10px;">
          <div class="category_wrapper" style="background-image: url(${doc.data().photourl} )">
              <figure class="category_thumbnail">
                  <div class="category_title" id="Category_1_name">${doc.data().name}</div>
              </figure>
          </div>
      </ons-col>`;
    $('#category').append(category);
    //` ` for ต่อ string

  });
});





document.addEventListener('init', function (event) {
  var page = event.target;


  if (page.id === 'homePage') {
    console.log("homePage");

    $("#menubtn").click(function () {
      $("#sidemenu")[0].open();
    });
  }

  if (page.id === 'menuPage') {
    console.log("menuPage");

    $("#login").click(function () {
      $("#content")[0].load("login.html");
      $("#sidemenu")[0].close();
    });

    $("#home").click(function () {
      $("#content")[0].load("home.html");
      $("#sidemenu")[0].close();
    });
  }

  if (page.id === 'loginPage') {
    console.log("loginPage");

    $("#backhomebtn").click(function () {
      $("#content")[0].load("home.html");
    });
  }
});
