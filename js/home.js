// add money part
document.getElementById('addMoney').addEventListener('click',function(){
    document.getElementById('outContainer').classList.add('hidden');
    const addMoney=document.getElementById('addContainer');
    addMoney.classList.remove('hidden');
    document.getElementById('add').addEventListener('click',function(event){
        event.preventDefault();
        const mainBalance=parseFloat(document.getElementById('mainBalance').innerText);
        const inpBalance=parseFloat(document.getElementById('addBalance').value);
        const pinForAdd=document.getElementById('pinForAdd').value;
        if(pinForAdd==='1234'){
            const newBalance=mainBalance+inpBalance;
            document.getElementById('mainBalance').innerText=newBalance;
            document.getElementById('addBalance').value='';
            document.getElementById('pinForAdd').value='';
        } else{
            alert('Enter valid input.');
        }
        
    })
})
// cash out
document.getElementById('cashOut').addEventListener('click',function(){
    document.getElementById('addContainer').classList.add('hidden');
    const outMoney=document.getElementById('outContainer');
    outMoney.classList.remove('hidden');

    document.getElementById('out').addEventListener('click',function(event){
        event.preventDefault();
        const mainBalance=parseFloat(document.getElementById('mainBalance').innerText);
        const inpBalance=parseFloat(document.getElementById('outBalance').value);
        const pinForAdd=document.getElementById('pinForOut').value;
        if(pinForAdd==='1234'){
            const newBalance=mainBalance-inpBalance;
            document.getElementById('mainBalance').innerText=newBalance;
            document.getElementById('outBalance').value='';
            document.getElementById('pinForOut').value='';
        } else{
            alert('Enter valid input.');
        }
        
    })
})

