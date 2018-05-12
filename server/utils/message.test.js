var expect = require('expect');
var {generateMessage}= require('./message');
describe('generate Message',()=>{
    it('should generate correct message object',()=>{
        var store=generateMessage("Admin","welcome to app");
        expect(store.text).toBe('welcome to app');
        expect(store.from).toBe('Admin');
        expect(store.createdAt).toBeA('number')
    })
})
