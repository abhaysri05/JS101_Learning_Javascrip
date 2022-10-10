//Given stored username and password and input username and password, Print if the user can login or not.

let user_name = "abhay@gamil.com";
let user_pass = "123abc";
//for my login
let my_name = "abhay@gmail.com";
let my_pass = "123abc";

if (user_name == my_name) {
  if(user_pass == my_pass) {
    console.log("Login")
  } else {
    console.log("Not")
  }
} else{
  console.log("wrong credentials")
}