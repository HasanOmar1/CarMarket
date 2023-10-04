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
// console.log(allAgencies())

// -------------------------------------------------------------------------

// my own code to help me find the brand

function carBrand(agencyId , brand){
const agency = getAgencyByNameOrId(agencyId)
const carBrands = agency.cars.find(brands => {
    return brands.brand === brand
})
if(carBrands){
    return carBrands
}
}
// console.log(carBrand('Plyq5M5AZ' , 'Ford'))


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


function removeCar(agencyId , brand ,   carNumber){

    const agency = getAgencyByNameOrId(agencyId);
    const carBrand = agency.cars.find(brands => {
        return brands.brand === brand;
        
    })
    if(carBrand){
        let index = carBrand.models.findIndex(models => {
                return models.carNumber ===  carNumber;
        })
            if(index !== -1){
            carBrand.models.splice(index , 1)
        }
    }
}

removeCar('Plyq5M5AZ' , 'Ford' ,   'LJTCs')
// console.log(carMarket.sellers[0].cars[2].models)

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

function updateCarPrice(agencyId , brand ,  carNumber ,  newPrice){

    let brands = carBrand(agencyId , brand)
    let numOfCar = brands.models.find(carId => {
        return carId.carNumber === carNumber;
    })
    const carPrice = brands.models.find(prices => {
        return prices.price = newPrice
    })
    
}
updateCarPrice('Plyq5M5AZ', 'Ford' , 'kN3HP' , 67000)
// console.log(carMarket.sellers[0].cars[2].models[0].price)

// -----------------------------------------------------------------------------

//  Calculate and return the total revenue for a specific agency


function getTotalAgencyRevenue(agencyId){

    let agency = getAgencyByNameOrId(agencyId)
    const total = agency.cars.reduce((acc1, seller) => {
       return (acc1 +  seller.models.reduce((acc2, model) => {
            return acc2 + model.price;
       }, 0)
       )
        }, 0);

        return total;

}

// console.log(getTotalAgencyRevenue('Plyq5M5AZ'))


// -----------------------------------------------------------------------------

// Transfer a car from one agency to another  // [NOT RIGHT]


function transferCarBetweenAgencies(firstAgencyId , secondAgencyId , brand , carNumber){

    let firstAgency = getAgencyByNameOrId(firstAgencyId)
    let secondAgency = getAgencyByNameOrId(secondAgencyId)
    let brands = carBrand(firstAgencyId , brand)
    let numOfCar = brands.models.find(carId => {
        return carId.carNumber === carNumber;
    })
    // console.log(numOfCar)
    return  removeCar(firstAgencyId , brand ,   carNumber)
}
transferCarBetweenAgencies( 'Carsova' , 'Car Werks'  , 'toyota' , 'AZJZ4')
// console.log(transferCarBetweenAgencies( 'Carsova' , 'Car Werks'  , 'toyota' , 'AZJZ4'))
// console.log(carMarket.sellers[4].cars[1])
// console.log(carMarket.sellers[3].cars[1])

// -------------------------------------------------------------------------------





// ------------------------------------------------------------------------------------------

// 2. Customer Operations:

//Search for a customer by their name or ID.


const getCustomerByNameOrId = name => {
    return carMarket.customers.find((nameOrId) => {
        return (nameOrId.name === name || nameOrId.id === name)
    })
    
}
// console.log(getCustomerByNameOrId('BGzHhjnE8'))

// ---------------------------------------------------------------------------

//Retrieve all customers' names.

function customersNames(){
    let arr2 = []
    carMarket.customers.forEach(names => {
    arr2.push(names.name)    

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
changeCustomerCash('BGzHhjnE8' , 60000)
// console.log(getCustomerByNameOrId('BGzHhjnE8'))


// ----------------------------------------------------------------


// Calculate the total value of all cars owned by a specific customer

function getCustomerTotalCarValue(customerId){
let customer =  getCustomerByNameOrId(customerId)
let carsValue = customer.cars.reduce((acc,currVal) => {
    return acc + currVal.price
} , 0)

console.log(`Cars Value of ${customer.name} are ${carsValue + customer.cash}`)
}

// getCustomerTotalCarValue('2RprZ1dbL')



// ------------------------------------------------------------------------------------

// 3. Car Operations:

//Retrieve all cars available for purchase


function carsForSale(){
    const carsArray = []
    for(let sellers of carMarket.sellers){
        for(let cars of sellers.cars){
                carsArray.push(...cars.models)
        }
    }
    return carsArray
}

// console.log(carsForSale())


// -----------------------------------------------------------------------------------------------

//Search for cars based on certain criteria. The search parameters should include the
// production year, price, and optionally, the brand of the car.



//----------------------------------------------------------------------------------------------------


// Return the most expensive car available for sale


function getMostExpensiveCar(){

    const cars = carsForSale()
    let expensiveCars = cars.reduce((acc,curr , index) => {
        return acc.price > curr.price ? acc : {price : curr.price , index : index}
    },{price : cars[0].price , index : 0})
    
return cars[expensiveCars.index]
}
// console.log(getMostExpensiveCar())

 //----------------------------------------------------------------------------------------------------


// Return the cheapest car available for sale


function getCheapestCar(){
  
    const cars = carsForSale()
    let cheapestCar = cars.reduce((acc,curr , index) => {
        return acc.price < curr.price ? acc : {price : curr.price , index : index}
    },{price : cars[0].price , index : 0})
    
return cars[cheapestCar.index]
    
}
// console.log(getCheapestCar())


// ----------------------------------------------------------------------------------------------------------------------------
       

// 4. Car Purchase Operations:




// ------------------------------------------------------------

//Calculate and return the total revenue of the entire market 

function getTotalMarketRevenue(){
const total = carMarket.sellers.reduce((acc1, seller) => {
    return ( acc1 + seller.cars.reduce((acc2, car) => {
        return (acc2 + car.models.reduce((acc3, model) => {
            return acc3 + model.price;
          }, 0)
        );
      }, 0)
    );
  }, 0);
  return `The Market's Revenue is ${total}`
}
// console.log(getTotalMarketRevenue())
