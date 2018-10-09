/*
Phase 1:
  search for hotels available for selected dates
Phase 2:
  sorting and search functionality
Phase 3:
  add styling using css
Bonus:
  implement filters for price and rate
*/
const hotels = [
  {
    name: "Media One Hotel",
    price: 102.2,
    city: "dubai",
    rate: 4.1,
    availability: [
      {
        from: "10-10-2018",
        to: "15-10-2018"
      },
      {
        from: "25-10-2018",
        to: "15-11-2018"
      },
      {
        from: "10-12-2018",
        to: "15-12-2018"
      }
    ]
  },
  {
    name: "Rotana Hotel",
    price: 80.6,
    city: "cairo",
    rate: 4.0,
    availability: [
      {
        from: "10-10-2018",
        to: "12-10-2018"
      },
      {
        from: "25-10-2018",
        to: "10-11-2018"
      },
      {
        from: "05-12-2018",
        to: "18-12-2018"
      }
    ]
  },
  {
    name: "Le Meridien",
    price: 89.6,
    city: "london",
    rate: 4.5,
    availability: [
      {
        from: "01-10-2018",
        to: "12-10-2018"
      },
      {
        from: "05-10-2018",
        to: "10-11-2018"
      },
      {
        from: "05-12-2018",
        to: "28-12-2018"
      }
    ]
  },
  {
    name: "Golden Tulip",
    price: 109.6,
    city: "paris",
    rate: 4.4,
    availability: [
      {
        from: "04-10-2018",
        to: "17-10-2018"
      },
      {
        from: "16-10-2018",
        to: "11-11-2018"
      },
      {
        from: "01-12-2018",
        to: "09-12-2018"
      }
    ]
  },
  {
    name: "Novotel Hotel",
    price: 111,
    city: "Vienna",
    rate: 4.8,
    availability: [
      {
        from: "20-10-2018",
        to: "28-10-2018"
      },
      {
        from: "04-11-2018",
        to: "20-11-2018"
      },
      {
        from: "08-12-2018",
        to: "24-12-2018"
      }
    ]
  },
  {
    name: "Concorde Hotel",
    price: 79.4,
    city: "Manila",
    rate: 4.2,
    availability: [
      {
        from: "10-10-2018",
        to: "19-10-2018"
      },
      {
        from: "22-10-2018",
        to: "22-11-2018"
      },
      {
        from: "03-12-2018",
        to: "20-12-2018"
      }
    ]
  }
];

function searchByName() {
  var name = document.getElementById('hotel-name').value;
  var hotel = hotels.find(function (hotel) {

    return hotel.name.toLocaleLowerCase().includes(name.toLocaleLowerCase());
  })
  document.getElementById("tr").innerHTML = "<td>" + hotel.name + '</td>' + "<td>" + hotel.price + "</td>" + "<td>" + hotel.rate + "</td>";
}

function searchByAvilibality() {

}


// var place = Input.value;

// Input.onfocus = function () {
// 	'use strict';
// 	myInput.placeholder = '';
// };

// Input.onblur = function () {
// 	'use strict';
// 	Input.placeholder = place;
// };


// var name1 = getElementById("from").availability
// console.log(from)
// function filter() {
//   hotels.filter(function (hotels) {
//     if (document.getElementById('hotel-name').value == availability.name) {
//       // console.log(document.getElementById('hotel-name').value)

//       return console.log(hotels.availability)

//     }
//     return true
//   })