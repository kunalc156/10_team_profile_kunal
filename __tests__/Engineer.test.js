const Engineer = require('../lib/Engineer');

describe('Engineer', () =>{

    it('should create an instance of an engineer', () => {
        const name = 'Kunal', id = 20, email = 'kc@test.com', github = 'www.github.com/kunalc156' ;

        const eng = new Engineer(name, id, email, github);

        expect(eng.name).toEqual(name);
        expect(eng.id).toEqual(id);
        expect(eng.email).toEqual(email);
        expect(eng.github).toEqual(github);
    });
    
    it('should return the github via getGithub()', () => {

        const github = 'www.github.com/kunalc156' ;

        const eng = new Engineer('Kunal', 1, 'kc@test.com', github);

        expect(eng.getGithub()).toEqual(github);
    });

    it('should return the role via getRole()', () => {

        const name = 'Kunal', id = 1, email = 'kc@test.com', github = 'www.github.com/kunalc156';

        const role = 'Engineer';

        const eng = new Engineer(name, id, email, github);

        expect(eng.getRole()).toEqual(role);
    });
});