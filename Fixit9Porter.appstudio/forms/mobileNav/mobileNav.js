
hmbNav.onclick=function(s){
  if (typeof(s) == "object") {
    return
  } else {
    switch(s) {
  case "Log in":
    ChangeForm(login)
    break
  case "Favorite Foods":
    ChangeForm(favFoods)
    break
  case "Dessert Voting":
    ChangeForm(dessertVoting)
    break
  case "Describe Me":
    ChangeForm(describeYou)
    break
  case "Favorite Exercises":
    ChangeForm(favExercises)
    break
}
}
}