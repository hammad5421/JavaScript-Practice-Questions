const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

   const height=  parseInt(document.querySelector('#height').value);
    const weight= parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results')

    if(height === '' || height < 0 ||isNaN(height) )
    {
        results.innerHTML= `Please Enter valid hights ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight))
    {
        results.innerHTML= `Please Enter valid weights ${weight}`;
    } 
    else{
        const Sum = height + weight;
        const bmi = (weight / ((height * height) / 10000 )).toFixed(2);
        results.innerHTML= `<span> BMI is : ${bmi} and Sum is ${Sum} </span>`
    }
    
});



// const form = document.querySelector('form');
// const results = document.querySelector('#results');

// form.addEventListener('submit', function(e) {
//     e.preventDefault();

//     const height = parseInt(document.querySelector('#height').value);
//     const weight = parseInt(document.querySelector('#weight').value);

//     if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
//         results.innerHTML = "Please enter valid height and weight.";
//     } else {
//         const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//         results.innerHTML = `Your BMI is <span>${bmi}</span>`;
//     }
// });























// const form = document.querySelector('form');
// const results = document.querySelector('#results');

// form.addEventListener('submit', function(e) {
//     e.preventDefault();

//     const height = parseFloat(document.querySelector('#height').value);
//     const weight = parseFloat(document.querySelector('#weight').value);

//     if (isNaN(height) || height <= 0) {
//         results.innerHTML = `Please Enter a valid height`;
//     } else if (isNaN(weight) || weight <= 0) {
//         results.innerHTML = `Please Enter a valid weight`;
//     } else {
//         const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//         results.innerHTML = `Your BMI: <span>${bmi}</span>`;
//     }
// });
