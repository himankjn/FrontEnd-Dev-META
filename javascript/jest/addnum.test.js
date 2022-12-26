const addnum= require(`./addnum.js`);

function testfn(){
    expect(addnum(2,3)).toBe(5);
}

test('returns the sum of two numbers:',testfn)