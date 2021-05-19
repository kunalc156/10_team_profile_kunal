const Manager = require('../lib/Manager');

describe('Manabger', () => {
    it(' It should create an instance of manager', () => {
        const name = "Kunal" , id = 7, email ='kc@test.com', officeNumber = 1004;

        const manager = new Manager(name, id, email, officeNumber);
        expect(manager.name).toEqual(name);
        expect(manager.id).toEqual(id);
        expect(manager.email).toEqual(email);
        expect(manager.officeNumber).toEqual(officeNumber);
    });

    it('should return the office number via getOfficeNumber()', () => {

        const officeNumber = 1004 ;

        const mngr = new Manager('Kunal', 1, 'kc@test.com', officeNumber);

        expect(mngr.getOfficeNumber()).toEqual(officeNumber);
    });

    it('should return the role via getRole()', () => {

        const name = 'Kunal', id = 1, email = 'kc@test.com', officeNumber = 1004;

        const role = 'Manager';

        const mngr = new Manager(name, id, email, officeNumber);

        expect(mngr.getRole()).toEqual(role);
    });

});