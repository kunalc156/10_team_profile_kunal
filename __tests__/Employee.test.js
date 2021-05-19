const Employee = require('../lib/Employee');

describe('Employee', () => {

    it('should create a new instance of employee', () => {
        const name = 'Kunal', id = 1, email = 'kc@test.com';

        const emp = new Employee(name, id, email);

        expect(emp.name).toEqual(name);
        expect(emp.id).toEqual(id);
        expect(emp.email).toEqual(email);

    });
});

describe('Employee', () => {

    it('should get name via getName()', () => {
        const name = 'Kunal';

        const emp = new Employee(name);

        expect(emp.getName()).toEqual(name);
    });
});

describe('Employee', () => {

    it('should get name via getId()', () => {
        const id = 1;

        const emp = new Employee('Kunal', id);

        expect(emp.getId()).toEqual(id);
    });

    it('should get name via getEmail()', () => {
        const email = 'kc@test.com';

        const emp = new Employee('Andrew', 15, email);

        expect(emp.getEmail()).toEqual(email);
    });
    
    const name = 'Kunal', id = 1, email = 'kc@test.com';
    const role = 'Employee';


    it('should get name via getRole()', () => {

        const emp = new Employee(name, id, email);

        expect(emp.getRole()).toEqual(role);
    });
});