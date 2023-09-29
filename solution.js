const carMarket =  require("./obj");

// 1 Agency Operations

// Search for a car agency by its name or ID.

// const getAgencyByNameOrId = (name) => {
//     return carMarket.sellers.find((agency) => {
//          return (agency.agencyName === name ||
//              agency.agencyId === name)}) 
//         }
// console.log(getAgencyByNameOrId('Best Deal'))



// Retrieve all agencies' names

// let arr = []
// carMarket.sellers.forEach( name => {

//     arr.push( {agencyName : name.agencyName} )
// })
// console.log(arr)



//Add a new car to an agency's inventory.

        carMarket.sellers[0].cars[5] = {
            brand : 'Ferarri',
            models : [
                {
                    name : 'sonic',
                    year : 2023,
                    price : 500_000,
                    carNumber : 'ASD9',
                    ownerId : "Plyq5M5AZ"
                }
            ]
        }
        // console.log(carMarket.sellers[0])
        // console.log(Object.values(carMarket.sellers[0].cars[0]))


//Remove a car from an agency's inventory. 

// console.log(carMarket.sellers[0].cars[2].models[1])
delete carMarket.sellers[0].cars[2].models[1] // deleted ford year 2005
// console.log(carMarket.sellers[0].cars[2].models[1])
// console.log(Object.values(carMarket.sellers[0].cars[2].models))



// Change the cash or credit of an agency

// console.log(carMarket.sellers[0].credit)
carMarket.sellers[0].credit = 100_000 // first agency only has 100k credit instead of 200k.
// console.log(carMarket.sellers[0].credit)



// Update the price of a specific car in an agency

// console.log(carMarket.sellers[0].cars[2].models[0].price)
carMarket.sellers[0].cars[2].models[0].price = 67_000 // updated the price of the ford
// console.log(carMarket.sellers[0].cars[2].models[0].price)




//  Calculate and return the total revenue for a specific agency

// Agency Name = Carsova 

// let startingCash = carMarket.sellers[4].cash // starting cash before selling any cars
// console.log(`Agency's cash : ${startingCash}`)

// let bmwValue =
// carMarket.sellers[4].cars[0].models[0].price +
// carMarket.sellers[4].cars[0].models[1].price
// console.log(`BMWs Value = ${bmwValue}`)

// let toyotaValue =
// carMarket.sellers[4].cars[1].models[0].price + 
// carMarket.sellers[4].cars[1].models[1].price 
// console.log(`Toyotas Value = ${toyotaValue}`)

// let totalRevenue = bmwValue + toyotaValue; // cash made from selling the cars
// console.log(`Cash earned from selling the cars = ${totalRevenue}`)

// let afterSelling = startingCash + totalRevenue; // agency's cash after selling the cars
// console.log(`Agencies cash after selling the cars = ${afterSelling}`)

 


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


// const getCustomerByNameOrId = name => {
//     return carMarket.customers.find((nameOrId) => {
//         return (nameOrId.name === name || nameOrId.id === name)
//     })
// }
// console.log(getCustomerByNameOrId('Ravi Murillo'))



//Retrieve all customers' names.

// let arr = []
// const customersNames = customers => {
//     carMarket.customers.forEach(names => {
//     arr.push({ Name : names.name })    

//     })
//     return arr
// }

// console.log(customersNames())





// Change the cash of a customer

let lilahCashBefore = carMarket.customers[0].cash // first customer name
// console.log(lilahCashBefore) // first customer cash [before]

let lilahCashAfter = carMarket.customers[0].cash = 50_000  // first customer name
// console.log(lilahCashAfter) // first customer cash [after]
// console.log(carMarket.customers[0]) // checking if it worked.




// Calculate the total value of all cars owned by a specific customer


// let firstCarValue = carMarket.customers[1].cars[0].price
// let secondCarValue = carMarket.customers[1].cars[1].price
// let customerCarsValue = firstCarValue + secondCarValue;
// console.log(`Cars Value : ${customerCarsValue}`)



// ------------------------------------------------------------------------------------

// 3. Car Operations:

//Retrieve all cars available for purchase



// let companyOne = carMarket.sellers[0].cars;
// let companyTwo = carMarket.sellers[1].cars;
// let companyThree = carMarket.sellers[2].cars;
// let companyFour = carMarket.sellers[3].cars;
// let companyFive = carMarket.sellers[4].cars;

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




//Search for cars based on certain criteria. The search parameters should include the
// production year, price, and optionally, the brand of the car.


// function search(year){
//     return carMarket.sellers.find(byYear => {
//         return byYear.cars[0].models[0] === year;
//     })
// }
// console.log(carMarket.sellers[0].cars)
// console.log(search(2015))


const getAgencyByNameOrId = (year) => {
    return carMarket.sellers.find((byYear) => {
         return byYear.cars[0].models[0].year === year 
            // byYear.agencyId === year)
        }) 
        }
console.log(getAgencyByNameOrId(2015))
console.log(carMarket.sellers[0].cars[0].models[0].year)











