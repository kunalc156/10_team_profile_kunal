const Intern = require('../lib/Intern');

describe('Intern', () =>{

    it('should create an instance of an Intern', () => {
        const name = 'Kunal', id = 20, email = 'kc@test.com', school = 'Swinburne' ;

        const intern = new Intern(name, id, email, school);

        expect(intern.name).toEqual(name);
        expect(intern.id).toEqual(id);
        expect(intern.email).toEqual(email);
        expect(intern.school).toEqual(school);
    });
    
    it('should return the school via getSchool()', () => {

        const school = 'Swinburne' ;

        const intern = new Intern('Kunal', 1, 'kc@test.com', school);

        expect(intern.getSchool()).toEqual(school);
    });

    it('should return the role via getRole()', () => {

        const name = 'Kunal', id = 1, email = 'kc@test.com', school = 'Swinburne';

        const role = 'Intern';

        const intern = new Intern(name, id, email, school);

        expect(intern.getRole()).toEqual(role);
    });
});