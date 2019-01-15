
describe('data types in javascript', () => {
    describe('strings in javascript', () => {
        it('can be single-quoted', () => {
            const name = 'Teddy';
            expect(name).toBe("Teddy");
        });
        it('fun with strings', () => {

            const name = "John O'Connor";
            const report = 'She said "Do not do it!" again';
            const report2 = 'She said "Don\'t do it!" again';
        });
        it('has template strings', () => {
            let name = 'Sue', age = 42;

            const m1 = 'Her name is ' + name + ' and her age is ' + age;
            expect(m1).toBe('Her name is Sue and her age is 42');

            const m2 = `Her name is ${name} and her age is ${age}`;
            expect(m2).toBe('Her name is Sue and her age is 42');

            const myLifeStory = `By Jeff
            It was a dark and stormy night.
            The End.`;
            console.log(myLifeStory);
        });
    });

    describe('a few actual types and literals', () => {
        it('some examples', () => {
            const v1 = 'Tacos';
            expect(typeof v1).toBe('string');
            const v2 = 3.1415927;
            expect(typeof v2).toBe("number");
            let v3 = true;
            expect(typeof v3).toBe("boolean");
            v3 = 'Fun!';
            expect(typeof v3).toBe("string");
        });
        it('const and let and all that', () => {
            
            const PI = 3.1415927;

            // PI = 3;

            const flavors = ['chocolate', 'strawberry', 'vanilla'];

            // flavors = ['mango'];
            flavors[0] = 'Mango';
            expect(flavors[0]).toBe('Mango');



        });
        it('why is var so bad anyhow', () => {
           
            // var does not offer block scope. It is bad. Avoid it.
            if(true) {
                var y = 42;
            }

            expect(y).toBe(42); // this should not pass but does!
        
        });
    });
});