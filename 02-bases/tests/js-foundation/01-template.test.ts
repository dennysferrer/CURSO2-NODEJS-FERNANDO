import { emailTemplate } from "../../src/js-foundation/01-template";


describe('js-foundation/01-template.ts', () => {

    test('emailTemplate should contain a message', () => {
        expect(emailTemplate).toContain('Hi, ');
    });

    test('emailTemplate should contain {{name}} and {{orderID}}', () => {
        expect(emailTemplate).toContain('{{name}}');
        expect(emailTemplate).toContain('{{orderID}}');
    })


})


