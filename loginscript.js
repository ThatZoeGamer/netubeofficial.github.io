function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  Swal.fire({
  icon: 'success',
  title: "Signed in successfully",
  text: 'You have signed in successfully! enjoy your expirience!',
  footer: ''
})
  $("#name").text(profile.getName());
  $("#email").text(profile.getEmail());
  $("#image").attr('src', profile.getImageUrl());
  $(".data").css("display", "block");
  $(".g-signin2").css("display", "none");
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      Swal.fire({
  icon: 'success',
  title: "Signed out successfully",
  text: 'You have signed out successfully! I hope you enjoyed your expirience!',
  footer: ''
})
      $(".data").css("display", "none");
      $(".g-signin2").css("display", "block");
      
  });
}
