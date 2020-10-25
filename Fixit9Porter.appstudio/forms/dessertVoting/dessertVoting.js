var dessertList = ['Chocolate Cake','Creme Brulee','Cheesecake',
                  'Keylime Pie','Cherry Cobbler','Chocolate Chip Cookies']

dessertVoting.onshow=function(){
  // clear before populating 
  drpDesserts.clear()
  // loop to add desserts in dropdown 
  for (i = 0; i <= dessertList.length - 1; i++)
      drpDesserts.addItem(dessertList[i])
}

drpDesserts.onclick=function(s){
    // this 'if' kicks user out if they just clicked on the control 
    if (typeof(s) == "object")   
      return                    
    else {  // the user picked something
      drpDesserts.value = s
      switch(s) {
      case "Chocolate Cake":
        lblPrompt.value = `You picked ${s} -- that is a great choice!`;
        break;
      case "Creme Brulee":
        lblPrompt.value = `You picked ${s} -- that is a great choice!`;
        break;
      case "Cheesecake":
        lblPrompt.value = `You picked ${s} -- that is a great choice!`;
        break;
      case "Keylime Pie":
        lblPrompt.value = `You picked ${s} -- that is a great choice!`;
        break;
      case "Cherry Cobbler":
        lblPrompt.value = `You picked ${s} -- that is a great choice!`;
        break;
      case "Chocolate Chip Cookies":
        lblPrompt.value = `You picked ${s} -- that is a great choice!`;
        break;
       default: 
        lblPrompt.value = `Error.`;
        break; 
      }
    }
  }


btnNext.onclick=function(){
  ChangeForm(describeYou)
}


