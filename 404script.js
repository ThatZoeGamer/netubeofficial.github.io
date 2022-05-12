 function news() {
			    
		    Swal.fire({
  icon: 'error',
  title: "OFFLINE",
  text: 'It Looks Like An Error Happened Either On Your End Or Our End, if this keeps happening, please email support... ',
  showCancelButton: false,
  footer: 'if you do call support, here is the error code to give them - 404GHI '
}).then((result) => {
  if (result.isConfirmed) {
    window.open("\index.html");
  }
        
});
		    }
