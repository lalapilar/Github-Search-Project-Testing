///////git hub async js//////
//// https://bootswatch.com/
//// https://getbootstrap.com/


  

    ////instantiate Github to variable github para ma-access
const github = new Github();

    ////instantiate Github to variable github para ma-access 
const ui = new UI();   

    //// search input
const searchUser = document.getElementById('searchUser');

    //// search input addeventlistener
searchUser.addEventListener('keyup', (e) => {

        //// get input text
    const userText = e.target.value;
        if(userText != '') {
            //console.log(userText);
            github.getUser(userText)
            .then(data => {
                //console.log(data);
                if(data.profile.message === 'Not Found') {
                        // show alert
                        ui.showAlert('User not found', 'alert alert-danger');
                }   else {
                            // show profile
                        ui.showProfile(data.profile);
                            // show repos
                        ui.showRepos(data.repos);
                }
            }); 
                
        }   else {
            clearProfile();
            }
});