


function salary (hourWork, eHour = 0) {
  const normalPay = hourWork * 1000;
  const extraPay = eHour * 200;
  const totalPayment = normalPay + extraPay;
  
  if(eHour > 0) {
    return `Salary is ${totalPayment} because there is extra work Hour`;
  }
  else {
    return `Salary is ${normalPay} because there is no extra work Hour`  ;
  }
}

