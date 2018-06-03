function sortDescending(a, b) {
	if (b[1] === a[1]) { return 0; }
    else               { return (b[1] < a[1]) ? -1 : 1; }
}


function makeChange(cid, change) {
	var faceValues = [ 0.01, 0.05, 0.10, 0.25, 1.00, 5.00, 10.00, 20.00, 100.00];
	var changeBack = [['PENNY',   0], ['NICKEL',      0], ['DIME',        0],
                      ['QUARTER', 0], ['ONE',         0], ['FIVE',        0],
                      ['TEN',     0], ['TWENTY',      0], ['ONE HUNDRED', 0]];

    for ( var i = cid.length - 1; i >= 0; i-- ) {
    	while( faceValues[i] <= change && cid[i][1] > 0 && change > 0 ) {
    		changeBack[i][1] += faceValues[i];
    		cid[i][1]        -= faceValues[i];
    		change           -= faceValues[i];
    		change            = Number((change).toFixed(2))
    	}
    }

    var changeBack = changeBack.filter(function(item){ 
    	return item[1] != 0; 
    }); 

    return changeBack;
}


function getDrawerTotal(change, cid) {
	var drawerTotal = 0;

	for ( var i = 0; i < cid.length; i++ ) {
		drawerTotal += cid[i][1];
		drawerTotal  = Number((drawerTotal).toFixed(2))
	}

	return drawerTotal;
}


function hasSufficientFunds(change, cid) {
	var drawerTotal = getDrawerTotal(change, cid);

	if (drawerTotal < change) {
		return "Insufficient Funds";
	} else if (drawerTotal == change) {
		return "Closed";
	} else {
		return "Open";
	}
}


function sufficientTotal(change, cashInDrawer) {
	var sufficient = hasSufficientFunds(change, cashInDrawer);

	switch(sufficient) {
		case "Insufficient Funds":
			return "Insufficient Funds";
			break;

		case "Closed":
			return "Closed";
			break;
		case "Open":
			return true;
			break;
	}
}


function correctArgs(total, payment, cashInDrawer) {
	var correctDrawer = checkDrawer(cashInDrawer);

	if      ( !(typeof(total)   == "number") ) { return "Incorrect first argument supplied"; }
	else if ( !(typeof(payment) == "number") ) { return "Incorrect second argument supplied"; }
	else if ( !correctDrawer )                 { return "Incorrect third argument supplied"; }
	else                                       { return true; }
}


function checkDrawer(cid) {
	var isDrawerTrue = true;

	for ( var i = 0; i < cid.length; i++ ) {
		var currency = cid[i];

		if ( typeof(currency[0]) == "string" && typeof(currency[1]) == "number" ) { 
			currency[0] = currency[0].toUpperCase();

			var faceValues = ["PENNY", "NICKEL", "DIME",   "QUARTER", "ONE",   
			                  "FIVE",  "TEN",    "TWENTY", "ONE HUNDRED"];

			if (faceValues.indexOf(currency[0]) == -1) { isDrawerTrue = false; }
		} else { isDrawerTrue = false; }
	}

	return isDrawerTrue;
}


function checkCashRegister(total, payment, cashInDrawer) {
	// Check if proper arguments have been supplied
	var argsState = correctArgs(total, payment, cashInDrawer);
	if ( argsState != true ) { return argsState; }

	var change = payment - total;

	// If proper arguments, check if drawer total is less than or equal to the change due
	var drawerState = sufficientTotal(change, cashInDrawer);
	if ( drawerState != true ) { return drawerState; }

	// If drawer has sufficient total for change, make change
	var faceValues   = makeChange(cashInDrawer, change);
	var sortedChange = faceValues.sort(sortDescending);
	
	// Check if the change is sufficient to satisfy change due
	finalTotal = getDrawerTotal(change, sortedChange);

	if ( finalTotal == change ) { return sortedChange; } 
	else                        { return "Insufficient Funds"; }
}