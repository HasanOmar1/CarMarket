const carMarket =  require("./obj");

// 1 Agency Operations

// Search for a car agency by its name or ID.

const getAgencyByNameOrId = (name) => {
    return carMarket.sellers.find((agency) => {
         return (agency.agencyName === name ||
             agency.agencyId === name)}) 
        }
// console.log(getAgencyByNameOrId('Best Deal'))

// ----------------------------------------------------------------

// Retrieve all agencies' names

function allAgencies(){
    const arr = []
    carMarket.sellers.forEach( name => {
    
      arr.push(name.agencyName )
    })
    return arr;
    
}
console.log(allAgencies())

// -------------------------------------------------------------------------


//Add a new car to an agency's inventory.

function addCars(agencyId , car , brand ){

    const agency = getAgencyByNameOrId(agencyId)
    if(agency){
      const carBrand =  agency.cars.find(brands => {
           return brands.brand === brand
           
        })
        if(carBrand){
            carBrand.models.push(car)
        }else{
            agency.cars.push(
                {
                brand : brand,
                models : [car]
                }
             )
        }

    }
    else{
        return `Agency not FOUND`
    }
}

addCars('Plyq5M5AZ' , {
    name : 'sonic',
    year : 2023,
    price : 500000,
    carNumber : 'ASD9',
    ownerId : "Plyq5M5AZ" 
},'Ferrari')

// console.log(carMarket.sellers[0].cars[0])
  

// ------------------------------------------------------------------------


//Remove a car from an agency's inventory. 

// console.log(carMarket.sellers[0].cars[2].models[1])
delete carMarket.sellers[0].cars[2].models[1] // deleted ford year 2005
// console.log(carMarket.sellers[0].cars[2].models[1])
// console.log(Object.values(carMarket.sellers[0].cars[2].models))

// -----------------------------------------------------------------------

// change cash of an agency

function changeCash(name , newCash){
    let agencyName = getAgencyByNameOrId(name);
    return agencyName.cash = newCash
}
// console.log(changeCash('Plyq5M5AZ' , 40000))
// console.log(getAgencyByNameOrId('Best Deal'))

// change credit of an agency


function changeCredit(name , newCredit){
    let agencyName = getAgencyByNameOrId(name);
    return agencyName.credit = newCredit
}

// console.log(changeCredit('26_IPfHU1' , 10000))
// console.log(getAgencyByNameOrId('26_IPfHU1'))



// -----------------------------------------------------------------------------

// Update the price of a specific car in an agency

// console.log(carMarket.sellers[0].cars[2].models[0].price)
carMarket.sellers[0].cars[2].models[0].price = 67_000 // updated the price of the ford
// console.log(carMarket.sellers[0].cars[2].models[0].price)


// ------------------------------------------------------------------------------

//  Calculate and return the total revenue for a specific agency

// Agency Name = Carsova 

let startingCash = carMarket.sellers[4].cash // starting cash before selling any cars
// console.log(`Agency's cash : ${startingCash}`)

const carsovaTotal = carMarket.sellers[4].cars.reduce((acc1, seller) => {
       return (acc1 +  seller.models.reduce((acc2, model) => {
            return acc2 + model.price;
       }, 0)
       )
        }, 0);

//   console.log(`Revenue made from selling the vehicles : ${carsovaTotal}`); 

  let afterSelling = startingCash + carsovaTotal;
//   console.log(`Carsova's cash after selling : ${afterSelling}`)

 
// -------------------------------------------------------------------------------

// Transfer a car from one agency to another 


let landCruiser = carMarket.sellers[3].cars[1].models[1]
// console.log(carMarket.sellers[3].cars[1].models[1])

let carsovaToyota = carMarket.sellers[4].cars[1].models
// console.log(carMarket.sellers[4].cars[1].models)

let transferringCar = Object.assign(carsovaToyota , landCruiser) // transferred the land cruiser from Car Werks agency to Carsova agency
// console.log(transferringCar)

delete carMarket.sellers[3].cars[1].models[1] // removed the land cruiser from Car Werks agency

// console.log(carMarket.sellers[3].cars[1].models[1]) // land cruiser is not there anymore
// console.log(carMarket.sellers[4].cars[1]) // land Cruiser has been transferred.








// ------------------------------------------------------------------------------------------

// 2. Customer Operations:

//Search for a customer by their name or ID.


const getCustomerByNameOrId = name => {
    return carMarket.customers.find((nameOrId) => {
        return (nameOrId.name === name || nameOrId.id === name)
    })
    
}
// console.log(getCustomerByNameOrId('Ravi Murillo'))

// ---------------------------------------------------------------------------

//Retrieve all customers' names.

let arr2 = []
const customersNames = customers => {
    carMarket.customers.forEach(names => {
    arr.push({ Name : names.name })    

    })
    return arr2
}

// console.log(customersNames())


// -----------------------------------------------------------------------


// Change the cash of a customer


function changeCustomerCash(name , newCash){
    let customerName = getCustomerByNameOrId(name);
    return customerName.cash = newCash
}
// console.log(changeCustomerCash('BGzHhjnE8' , 60000))
// console.log(getCustomerByNameOrId('BGzHhjnE8'))





let lilahCashBefore = carMarket.customers[0].cash // first customer's name
// console.log(lilahCashBefore) // first customer's cash [before]

let lilahCashAfter = carMarket.customers[0].cash = 50000  // changed customer cash
// console.log(lilahCashAfter) // first customer cash [after]

// console.log(carMarket.customers[0]) // checking if it worked.

// ----------------------------------------------------------------


// Calculate the total value of all cars owned by a specific customer


let customerTwo = Object.values(carMarket.customers[1].cars)
// console.log(Object.values(carMarket.customers[1].cars)) // customer's cars
let sumOf = customerTwo.reduce((a,b) => {
    return a + b.price
} , 0)

// console.log(`Cars Value : ${sumOf}`)



// ------------------------------------------------------------------------------------

// 3. Car Operations:

//Retrieve all cars available for purchase



let companyOne = carMarket.sellers[0].cars;
let companyTwo = carMarket.sellers[1].cars;
let companyThree = carMarket.sellers[2].cars;
let companyFour = carMarket.sellers[3].cars;
let companyFive = carMarket.sellers[4].cars;


// console.log(`All the available vehicles :`)
// for(let prop of companyOne){
//     console.log(prop)
// }
// for(let prop of companyTwo){
//     console.log(prop)
// }
// for(let prop of companyThree){
//     console.log(prop)
// }
// for(let prop of companyFour){
//     console.log(prop)
// }
// for(let prop of companyFive){
//     console.log(prop)
// }

// -----------------------------------------------------------------------------------------------

//Search for cars based on certain criteria. The search parameters should include the
// production year, price, and optionally, the brand of the car.



//----------------------------------------------------------------------------------------------------


// Return the most expensive car available for sale

//--------------------------------------MOST EXPENSIVE VEHICLES-------------------------------------- //company 1

//company 1

// function mostExpensiveCarsInFirstCompany() {
// for(let key of carMarket.sellers[0].cars){
//     let maxi =  key.models.reduce((prev,current) => {
//         return prev.price > current.price ? prev : current
//     })
//     console.log(maxi)
// }
// }
// mostExpensiveCarsInFirstCompany() // this returns the most expensive vehicles from each brand in the first company


//company 2

// function mostExpensiveCarsInSecondCompany() {
//     for(let key of carMarket.sellers[1].cars){
//         let maxi =  key.models.reduce((prev,current) => {
//             return prev.price > current.price ? prev : current
//         })
//         console.log(maxi)
//     }
//     }
//     mostExpensiveCarsInSecondCompany() // this returns the most expensive vehicles from each brand in the 2nd company
        

//company 3


// function mostExpensiveCarsInThirdCompany() {
//     for(let key of carMarket.sellers[2].cars){
//         let maxi =  key.models.reduce((prev,current) => {
//             return prev.price > current.price ? prev : current
//         })
//         console.log(maxi)
//     }
//     }
//     mostExpensiveCarsInThirdCompany() // this returns the most expensive vehicles from each brand in the 3rd company



//company 4

        
 // function mostExpensiveCarsInFourthCompany() {
//     for(let key of carMarket.sellers[3].cars){
//         let maxi =  key.models.reduce((prev,current) => {
//             return prev.price > current.price ? prev : current
//         })
//         console.log(maxi)
//     }
//     }
//     mostExpensiveCarsInFourthCompany() // this returns the most expensive vehicles from each brand in the 4th company
        
    
//company 5
    

// function mostExpensiveCarsInFifthCompany() {
//     for(let key of carMarket.sellers[4].cars){
//         let maxi =  key.models.reduce((prev,current) => {
//             return prev.price > current.price ? prev : current
//         })
//         console.log(maxi)
//     }
//     }
//     mostExpensiveCarsInFifthCompany() // this returns the most expensive vehicles from each brand in the 5th company
        

   


//-----------------------------------------CHEAPEST VEHICLES------------------------------------


// company 1

//  function cheapestCarsInFirstCompany() {
//     for(let key of carMarket.sellers[0].cars){
//         let min =  key.models.reduce((prev,current) => {
//             return prev.price < current.price ? prev : current
//         })
//         console.log(min)
//     }
//     }
//     cheapestCarsInFirstCompany() // this returns the cheapest vehicles from each brand in the first company
        


//company 2

// function cheapestCarsInSecondCompany() {
//     for(let key of carMarket.sellers[1].cars){
//         let min =  key.models.reduce((prev,current) => {
//             return prev.price < current.price ? prev : current
//         })
//         console.log(min)
//     }
//     }
//     cheapestCarsInSecondCompany() // this returns the cheapest vehicles from each brand in the 2nd company


//company 3

// function cheapestCarsInThirdCompany() {
//     for(let key of carMarket.sellers[2].cars){
//         let min =  key.models.reduce((prev,current) => {
//             return prev.price < current.price ? prev : current
//         })
//         console.log(min)
//     }
//     }
//     cheapestCarsInThirdCompany() // this returns the cheapest vehicles from each brand in the 3rd company



//company 4


// function cheapestCarsInFourthCompany() {
//     for(let key of carMarket.sellers[3].cars){
//         let min =  key.models.reduce((prev,current) => {
//             return prev.price < current.price ? prev : current
//         })
//         console.log(min)
//     }
//     }
//     cheapestCarsInFourthCompany() // this returns the cheapest vehicles from each brand in the 4rd company



//company 5

// function cheapestCarsInFifthCompany() {
//     for(let key of carMarket.sellers[4].cars){
//         let min =  key.models.reduce((prev,current) => {
//             return prev.price < current.price ? prev : current
//         })
//         console.log(min)
//     }
//     }
//     cheapestCarsInFifthCompany() // this returns the cheapest vehicles from each brand in the 5th company



// ----------------------------------------------------------------------------------------------------------------------------
       

// 4. Car Purchase Operations:




// ------------------------------------------------------------

//Calculate and return the total revenue of the entire market 

const total = carMarket.sellers.reduce((acc1, seller) => {
    return ( acc1 + seller.cars.reduce((acc2, car) => {
        return (acc2 + car.models.reduce((acc3, model) => {
            return acc3 + model.price;
          }, 0)
        );
      }, 0)
    );
  }, 0);

//   console.log(`Market revenue : ${total}`)