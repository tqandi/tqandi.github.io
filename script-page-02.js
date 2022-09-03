$('.navbar-toggler').on('click',function() {
  $(this).toggleClass('menu-open');
})

function showAlert() {
  alert ("Welcome!");
}
function showExitAlert() {
  // confirm ("You Are Leaving!");
  return "Are you sure you want to leave?";
}

//   $(body).bind('beforeunload', function(){
//     return 'Are you sure you want to leave?';
//   });

// window.onbeforeunload = function(){
//     return 'Are you sure you want to leave?';
//     //   confirm("confim");
//   };

$(body).bind('beforeunload', function(){
  // showExitAlert();
  return "Are you sure you want to leave?";
});