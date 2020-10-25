rdoDescribe.onchange= function(){
  lblDescribe.value = `I agree you are a very ${$("input[name=radDescribeYou]:checked").prop("value")} person!`
  }
btnNext.onclick = function(){
  ChangeForm(favExercises)
}




