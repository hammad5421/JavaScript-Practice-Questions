const button= document.querySelectorAll('.button');
const body=document.querySelector('body');

button.forEach(function(button){
button.addEventListener('click' , function(e){

if(e.target.id === 'brown'){
 
body.style.backgroundColor = e.target.id;

}

if(e.target.id === 'white'){
 
body.style.backgroundColor = e.target.id;

}

if(e.target.id === 'yellow'){
 
body.style.backgroundColor = e.target.id;

}

if(e.target.id === 'blue'){
 
body.style.backgroundColor = e.target.id;

}
})
});

// also with switch statment

{/* <script>
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        switch (e.target.id) {
            case 'brown':
                body.style.backgroundColor = 'brown';
                break;
            case 'blue':
                body.style.backgroundColor = 'blue';
                break;
            case 'yellow':
                body.style.backgroundColor = 'yellow';
                break;
            case 'white':
                body.style.backgroundColor = 'rgb(255, 255, 255)';
                break;
            default:
                body.style.backgroundColor = 'white';
                break;
        }
    });
});
</script> */}