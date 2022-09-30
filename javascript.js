
//Runners + Medals

  let runner = prompt(`Runners Name`);
  let position = +prompt(`Runners Position`);
  let medal

  if (position===1) {
    medal='gold';
    console.log(`Runner ${runner} ${position} got ${medal}`);
  } else if (position===2) {
    medal='silver';
    console.log(`Runner ${runner} ${position} got ${medal}`);
  } else if (position===3) {
    medal='bronze'
    console.log(`Runner ${runner} ${position} got ${medal}`);
  } else {
    console.log(`${runner} try next time`)
  }



//Shipping message

  const x = +prompt('Iveskite prekes kaina');
  const delivery = confirm('Ar reikalingas pristatymas?');
  let deliveryPrice

  if (delivery===true){
    const city = prompt('I kuri mies reiks pristatyti?');
    if (city==='Vilnius'|| x>=50) {
      deliveryPrice = 0;
      console.log(`Prekes kaina ${x}eur, prekes nemokamai pristatysime i ${city} per 1-3 dienas.`);
    } else {
        deliveryPrice = 20;
        console.log(`Prekes kaina ${x}eur, pristatymas ${deliveryPrice}, suma ${x + deliveryPrice}, prekes pirstatysime i ${city} per 1-3 dienas.`);
      }
    } else {
      console.log(`Prekes kaina ${x}eur, prekes galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a`);
    }


//Bank Account checher

  let isActive = confirm(`Is your Account active?`);

  if (isActive===false){
    console.log(`Your account is no longer active.`);
  } else {
    balance = +prompt(`Bank Account balace`);
    checkBalance = confirm(`Do you wanna check balance?`);
    if (checkBalance===false){
      console.log(`Thank you. Have a nice day!`);
    } else if (balance>0){
      console.log(`Your balance is $${balance}`);
    } else if (balance===0){
      console.log(`Your account is empty.`);
    } else {
      console.log(`Your balance is negative. Please contact bank.`);
    } 
  }

