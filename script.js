$('.navbar-toggler').on('click',function() {
    $(this).toggleClass('menu-open');
})
// $(window).bind('beforeunload', function test(){
//     // showExitAlert();
//     return "Are you sure you want to leave?";
//   });
function showAlert() {
    alert ("Welcome!");
  }
  function showExitAlert() {
    confirm ("You Are Leaving!");
    // return "Are you sure you want to leave?";
    // test();
}

// window.onunload=function(){
//     confirm ("You Are Leaving!");
// }
//   $(body).bind('beforeunload', function(){
//     return 'Are you sure you want to leave?';
//   });

window.onbeforeunload = function(){
    return 'Are you sure you want to leave?';
    //   confirm("confim");
  };

