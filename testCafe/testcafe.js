import { Selector } from 'testcafe';

fixture `Simple test`
    .page `./index.html`;

    test('Name Test', async test => {
        await test
            // .click("#clearName")
            .typeText('#name', 'Pinheiro')
            .click('#setName')
            .expect(Selector('#result').innerText).eql('Pinheiro');
    });