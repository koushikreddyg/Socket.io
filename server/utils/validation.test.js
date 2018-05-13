const expect=require('expect');
const { isRealString }= require('./validation');
describe('test isRealString function',()=>{
    it('should return false',()=>{
        var store= isRealString(' rr ');
        expect(store).toBe(true)
    })
    
})