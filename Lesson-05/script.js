/**************************************
 * Executing code
 **************************************/
startApp();



/**************************************
 * Function definitions
 **************************************/

/* Starts the banking app. */
function startApp() {
  let running = true;
  let balance = 0;

  while(running) {
    const input = prompt('Enter a command (\'W\', \'D\', \'B\', \'Q\').');
    const sanitizedInput = sanitize(input);

    switch (sanitizedInput) {
      case 'W':
        balance = withdrawalFlow(balance);
        break;
      case 'D':
        balance = depositFlow(balance);
        break;
      case 'B':
        balanceFlow(balance);
        break;
      case 'Q':
        alert('Have a nice day!');
        running = false;
        break;
      default:
        help(input);
        break;
    }
  }
}

/* Clean up the input (e.g. trim, normalize case, ...). */
function sanitize(input) {
  try {
    let sanitizedInput = input.trim();
    sanitizedInput = sanitizedInput.toUpperCase();
    return sanitizedInput;
  } catch (error) {
    console.log('ERROR: bad input: ' + input, error);
    return input;
  }
}

/* Handle the flow for a withdrawal. */
function withdrawalFlow(currentBalance) {
  const withdrawalAmountRaw = prompt('Enter an amount to withdraw.');
  const withdrawalAmount = Number(withdrawalAmountRaw);
  const newBalance = currentBalance - withdrawalAmount;

  if (newBalance < 0) {
    alert('Transaction failed: insufficient funds');
    return currentBalance;
  } else if (newBalance < 300) {
    const confirmationRaw = prompt('Transaction will reduce balance to below $300. Are you sure? (\'Y\' or \'N\').');
    const confirmation = sanitize(confirmationRaw);

    if (confirmation === 'Y') {
      alert('Transaction successful');
      return newBalance;
    } else {
      alert('Transaction canceled');
      return currentBalance;
    }

  } else {
    alert('Transaction successful');
    return newBalance;
  }
}

/* Handle the flow for a deposit. */
function depositFlow(currentBalance) {
  const depositAmountRaw = prompt('Enter an amount to deposit.');
  const depositAmount = Number(depositAmountRaw);

  if (depositAmount > 50000) {
    alert('Transaction failed: cannot deposit greater than $50,000');
    return currentBalance;
  } else {
    const newBalance = currentBalance + depositAmount;
    alert("Transaction successful.");
    return newBalance;
  }
}

/* Handle the flow for a balance check. */
function balanceFlow(balance) {
  if (balance < 100) {
    alert('WARNING: low balance\nCurrent balance: ' + balance);
  } else {
    alert('Current balance: ' + balance);
  }
}

/* Handle the case of an unknown command. */
function help(input) {
  const errorMessage = '\'' + input + '\' is not a valid command. Please try again.';
  alert(errorMessage);
}
