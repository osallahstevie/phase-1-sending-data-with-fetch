// Add your code here
// function submitData(userName, userEmail) {
    let name = "Sam"
    let email = "sam@sam.com"   

    function submitData(name, email)  {   
    return fetch(`http://localhost:3000/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify( {
            name,
            email
        } )
    })
    .then( response =>  response.json())
    .then( object => document.body.innerHTML = object ["id"] )
    .catch( error => document.body.innerHTML = error.message )
    }

    submitData(name, email)


    //         console.log(data);
    // })
    // .catch(error => {
    //     document.querySelector("div").innerHTML = error
    // })

// submitData(name, email)
