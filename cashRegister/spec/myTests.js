describe('Scott Bishop Tests', function() {

  describe('Incorrect arguments to function checkCashRegister():', function() {
    it('Should be an incorrect first argument', function() {
      var cashInDrawer = [['PENNY',         1.01],
                          ['NICKEL',        2.05],
                          ['DIME',          3.10],
                          ['QUARTER',       4.25],
                          ['ONE',          90.00],
                          ['FIVE',         55.00],
                          ['TEN',          20.00],
                          ['TWENTY',       60.00],
                          ['ONE HUNDRED', 100.00]];

      expect(checkCashRegister('string', 20.00, cashInDrawer)).toEqual('Incorrect first argument supplied');
    });

    it('Should be an incorrect second argument', function() {
      var cashInDrawer = [['PENNY',         1.01],
                          ['NICKEL',        2.05],
                          ['DIME',          3.10],
                          ['QUARTER',       4.25],
                          ['ONE',          90.00],
                          ['FIVE',         55.00],
                          ['TEN',          20.00],
                          ['TWENTY',       60.00],
                          ['ONE HUNDRED', 100.00]];

      expect(checkCashRegister(19.50, 'string', cashInDrawer)).toEqual('Incorrect second argument supplied');
    });

    it('Should be an incorrect third argument (curreny key is an integer)', function() {
      var cashInDrawer = [[15.00,           1.01],
                          ['NICKEL',        2.05],
                          ['DIME',          3.10],
                          ['QUARTER',       4.25],
                          ['ONE',          90.00],
                          ['FIVE',         55.00],
                          ['TEN',          20.00],
                          ['TWENTY',       60.00],
                          ['ONE HUNDRED', 100.00]];

      expect(checkCashRegister(19.50, 20.00, cashInDrawer)).toEqual('Incorrect third argument supplied');
    });

    it('Should be an incorrect third argument(currency value is string)', function() {
      var cashInDrawer = [['PENNY',         '10'],
                          ['NICKEL',        2.05],
                          ['DIME',          3.10],
                          ['QUARTER',       4.25],
                          ['ONE',          90.00],
                          ['FIVE',         55.00],
                          ['TEN',          20.00],
                          ['TWENTY',       60.00],
                          ['ONE HUNDRED', 100.00]];

      expect(checkCashRegister(19.50, 20.00, cashInDrawer)).toEqual('Incorrect third argument supplied');
    });

    it('Should be an incorrect third argument (key name is incorrect)', function() {
      var cashInDrawer = [['PENNY',         1.01],
                          ['NICKEL',        2.05],
                          ['DIME',          3.10],
                          ['QUARTER',       4.25],
                          ['ONE',          90.00],
                          ['FVIE',         55.00],
                          ['TEN',          20.00],
                          ['TWENTY',       60.00],
                          ['ONE HUNDRED', 100.00]];

      expect(checkCashRegister(19.50, 20.00, cashInDrawer)).toEqual('Incorrect third argument supplied');
    });

  });

});
