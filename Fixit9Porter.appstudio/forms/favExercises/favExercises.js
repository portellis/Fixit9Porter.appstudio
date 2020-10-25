var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercises.onshow=function(){
  selExercises.clear()
  for (i = 0; i <= exercises.length - 1; i++)
    selExercises.addItem(exercises[i])
  for (j = 0; j <= coreExercises.length - 1; j++)
    selExercises.addItem(coreExercises[j])
}

btnSubmit.onclick=function(){
  let exSubmission = selExercises.text.toString()
  if (exSubmission.includes("situps") && exSubmission.includes("plank"))
    lblCheck.value = `You chose situps and planks -- those are the two core exercises.`
  else
    lblCheck.value = `You did not pick the two core exercises.`
}

btnNext2.onclick=function(){
  ChangeForm(mobileNav)
}


