describe('FREECODECAMP TESTS', function() {
  describe('return type', function() {
    it('should be an array if there are sufficient funds.', function() {
      var cashInDrawer = [['PENNY',         1.01],
                          ['NICKEL',        2.05],
                          ['DIME',          3.10],
                          ['QUARTER',       4.25],
                          ['ONE',          90.00],
                          ['FIVE',         55.00],
                          ['TEN',          20.00],
                          ['TWENTY',       60.00],
                          ['ONE HUNDRED', 100.00]];

      expect(Array.isArray(checkCashRegister(19.50, 20.00, cashInDrawer))).toEqual(true);
    });

    it('should be a string if there are insufficient funds.', function() {
      var cashInDrawer = [['PENNY',       0.01],
                          ['NICKEL',      0],
                          ['DIME',        0],
                          ['QUARTER',     0],
                          ['ONE',         0],
                          ['FIVE',        0],
                          ['TEN',         0],
                          ['TWENTY',      0],
                          ['ONE HUNDRED', 0]];

      expect(typeof checkCashRegister(19.50, 20.00, cashInDrawer)).toEqual('string');
    });

    it('should be a string if the register is closed.', function() {
      var cashInDrawer = [['PENNY',       0.50],
                          ['NICKEL',      0],
                          ['DIME',        0],
                          ['QUARTER',     0],
                          ['ONE',         0],
                          ['FIVE',        0],
                          ['TEN',         0],
                          ['TWENTY',      0],
                          ['ONE HUNDRED', 0]];

      expect(typeof checkCashRegister(19.50, 20.00, cashInDrawer)).toEqual('string');
    });
  });

  describe('return value', function() {
    it('should be a two-dimensional array of bills and values adding up to the total change due.', function() {
      var cashInDrawerOne = [['PENNY',         1.01],
                             ['NICKEL',        2.05],
                             ['DIME',          3.10],
                             ['QUARTER',       4.25],
                             ['ONE',          90.00],
                             ['FIVE',         55.00],
                             ['TEN',          20.00],
                             ['TWENTY',       60.00],
                             ['ONE HUNDRED', 100.00]];

      expect(checkCashRegister(19.50, 20.00, cashInDrawerOne)).toEqual([['QUARTER', 0.50]]);

      var cashInDrawerTwo = [['PENNY',         1.01],
                             ['NICKEL',        2.05],
                             ['DIME',          3.10],
                             ['QUARTER',       4.25],
                             ['ONE',          90.00],
                             ['FIVE',         55.00],
                             ['TEN',          20.00],
                             ['TWENTY',       60.00],
                             ['ONE HUNDRED', 100.00]];

      expect(checkCashRegister(3.26, 100.00, cashInDrawerTwo)).toEqual([['TWENTY', 60.00],
                                                                        ['TEN',    20.00],
                                                                        ['FIVE',   15.00],
                                                                        ['ONE',     1.00],
                                                                        ['QUARTER', 0.50],
                                                                        ['DIME',    0.20],
                                                                        ['PENNY',   0.04]]);
    });

    it('should be `Insufficient Funds` if the drawer does not have sufficient change.', function() {
      var cashInDrawerOne = [['PENNY',       0.01],
                             ['NICKEL',      0],
                             ['DIME',        0],
                             ['QUARTER',     0],
                             ['ONE',         0],
                             ['FIVE',        0],
                             ['TEN',         0],
                             ['TWENTY',      0],
                             ['ONE HUNDRED', 0]];

      expect(checkCashRegister(19.50, 20.00, cashInDrawerOne)).toEqual('Insufficient Funds');

      var cashInDrawerTwo = [['PENNY',       0.01],
                             ['NICKEL',      0],
                             ['DIME',        0],
                             ['QUARTER',     0],
                             ['ONE',         1.00],
                             ['FIVE',        0],
                             ['TEN',         0],
                             ['TWENTY',      0],
                             ['ONE HUNDRED', 0]];

      expect(checkCashRegister(19.50, 20.00, cashInDrawerTwo)).toEqual('Insufficient Funds');
    });

    it('should be `Closed` if the cash drawer is emptied.', function() {
      var cashInDrawer = [['PENNY',       0.50],
                          ['NICKEL',      0],
                          ['DIME',        0],
                          ['QUARTER',     0],
                          ['ONE',         0],
                          ['FIVE',        0],
                          ['TEN',         0],
                          ['TWENTY',      0],
                          ['ONE HUNDRED', 0]];

      expect(checkCashRegister(19.50, 20.00, cashInDrawer)).toEqual('Closed');
    });
  });
});
