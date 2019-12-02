document.passenger.addEventListener("submit", function(e){
    e.preventDefault()
    
        var firstName = document.passenger.firstName.value
        var lastName = document.passenger.lastName.value
        var age = document.passenger.age.value
        var gender = document.passenger.gender.value
        var countries = document.passenger.countries.value
        
        const Restrictions = [];
        for(let i = 0; i < passenger.restrictions.length; i++){
            if(passenger.restrictions[i].checked){
                Restrictions.push(passenger.restrictions[i].value)
            }
        }
    
    alert("First Name: " + firstName + "\r\n" + "Last Name: " + lastName + "\r\n" + "Age: " + age + "\r\n" + "Gender: " + gender + "\r\n" + "Location: " + countries + "\r\n" + "Dietary Restrictions: " + Restrictions)
    })