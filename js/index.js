// submit button setup
document.getElementById('loginBtn').addEventListener('click',function(event){
    event.preventDefault();
    const phoneNumber=document.getElementById('numberInp').value;
    const pinNUmber=document.getElementById('pinInp').value;
    if(phoneNumber==='5' && pinNUmber==='1234'){
        console.log("logged in");
        alert('you are logged in');
        location.href='/home.html';
    }
    else{
        console.log('phone or pin is incorrect.');
        alert('phone or pin is incorrect.')
    }
    
});