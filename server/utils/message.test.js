var expect = require('expect');
var {generateMessage, generateLocationMessage}= require('./message');
// beforeEach((done)=>{
//     navigator.geolocation.getCurrentPosition((position)=>{
//         var latitude= position.coords.latitude;
//         var longitude=position.coords.longitude;
//         done()
//     })
// })
describe('generate Message',()=>{
    it('should generate correct message object',()=>{
        var store=generateMessage("Admin","welcome to app");
        expect(store.text).toBe('welcome to app');
        expect(store.from).toBe('Admin');
        expect(store.createdAt).toBeA('number')
    })

})

describe('generateLocationMessage',()=>{
    it('should generate location message',()=>{
        var store=generateLocationMessage("Admin1", 1,10);
        expect(store.from).toBe('Admin1');
        expect(store.url).toBe('https://www.google.com/maps?q=1,10')
        expect(store.createdAt).toBeA('number')

    })
})
