// Write a method that calculates the total price of a purchase, including tax.
const calculateTotalPrice = (price, car) => {
            if (car) {
              return price * 2;
            } else {
              return price * 5;
            }
          };
          
          console.log(calculateTotalPrice(100, false)); 
          console.log(calculateTotalPrice(100, true));  
          