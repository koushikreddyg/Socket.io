var {User}= require('./users');
var expect=require('expect');

describe('testing User class',()=>{
   
    var users=new User();
    beforeEach(()=>{
        users.users=[{
            id:'1',
            name: 'Mike',
            room: 'Node Course'
        },{
            id:'2',
            name: 'Jen',
            room: 'React Course'
        },{
            id:'3',
            name: 'Julie',
            room: 'Node Course'
        }]
    })

    it('should remove user',()=>{
        var userId='3';
        var user=users.removeUser(userId);
        expect(users.users.length).toBe(2);
        expect(user.id).toBe(userId);
    })

    it('should not remove user',()=>{
        var userId='30';
        var user=users.removeUser(userId);
        expect(user).toNotExist();
        expect(users.users.length).toBe(3)
    })

    it('should find user',()=>{
        var userId='2';
        var user=users.getUser(userId);
        expect(user.id).toBe(userId)
    })

    it('should not find user',()=>{
        var userId='99';
        var user=users.getUser(userId);
        expect(user).toNotExist()
    })

    it('should add User',()=>{     
        var resUser=users.addUser(1, 'koushik', 'react')
        expect(resUser).toEqual({id:1,name:'koushik',room:'react'})
        expect(users.users).toInclude({id:1,name:'koushik',room:'react'})
    })
    it('should return names for node course',()=>{
        var userList= users.getUserList('Node Course');
        expect(userList).toEqual(['Mike','Julie'])
    })
})