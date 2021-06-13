// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
// import './css/_desktop.scss'
// import './css/_mobile.scss'
// import './css/_normalize.scss'
// import './css/_tablet.scss'

import Customer from './customer';
import Hotel from './hotel';
import apiCalls from './apiCalls';
import domUpdates from './domUpdates';

// import Images here


//Page Selectors
let availableRoomsBackground = document.getElementById('availableRoomsBackground');
let reservationHistoryBackground = document.getElementById('reservationHistoryBackground');

//Form selectors
let bookDate = document.getElementById('bookDate');
let bookRoomType = document.getElementById('bookRoomType');
let bookNumBeds = document.getElementById('bookNumBeds');
let bookYesBidet = document.getElementById('bookYesBidet');
let noBidet = document.getElementById('bookNoBidet');
let doesntMatterBidet = document.getElementById('bookNPBidet');
let searchButton = document.getElementById('searchRooms');
let bookButton = document.getElementById('bookRoom');

//Card selectors
let roomNumber = document.getElementById('roomNumber');
let roomReservationDate = document.getElementById('roomReservationDate');
let roomCost = document.getElementById('roomCost');
let roomType = document.getElementById('roomType');
let roomNumberOfBeds = document.getElementById('roomNumberOfBeds');
let roomBidet = document.getElementById('roomBidet');

// Variables
let bookingData, roomData, customerData, customer, hotel;
let todaysDate ='2020/06/19'
// Event Listeners
window.onload = loadPage();


function loadPage(bookingData, roomData, customer) {
   apiCalls.retrieveData()
    .then((promise) => {
      console.log('promise from scripts:', promise)
      customerData = promise[0];
      //console.log(customerData[0])
      roomData = promise[1];
      //console.log(roomData)
      bookingData = promise[2]
      // console.log(bookingData)
      hotel = new Hotel(roomData, bookingData, customerData)
      // console.log(hotel)
      customer = new Customer(customerData.customers[0])
      //Scripts function that will run customer methods to find findBookingHistory
      retrieveDate();
      // console.log(customer)
      // console.log('booking data in scripts:', bookingData)
      retrieveCustomerData(bookingData, roomData, customer);
      // console.log(customer)
      //DOM Updates function that updates the user's info to the DOM
      //and expense history
      domUpdates.displayCustomerInfo(customer.roomHistory);
    })
    // console.log('customer:', customer)

}

function retrieveCustomerData(bookingData, roomData, customer) {
  console.log('customer:', customer)
  console.log('booking data retrieveCustomerData', bookingData)

  customer.findBookingHistory(bookingData);
  customer.findRoomHistoryWithDate(bookingData, roomData)
  customer.findExpenseTotal(bookingData, roomData);

}

function retrieveDate() {
  bookDate.min = todaysDate;
  bookDate.value = todaysDate.split('/').join('-');
}
