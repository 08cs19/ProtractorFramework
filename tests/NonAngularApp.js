describe('Non Angular Application', function () {
    it('Non Angular Application', function () {
        //browser.waitForAngularEnabled(false);
        browser.ignoreSynchronization = true;
        browser.get('http://testing.cqsapps.com/');
        //browser.driver.get('http://testing.cqsapps.com/');
        browser.sleep(3000)
        element(by.id('txtUserName')).sendKeys('2');
        browser.sleep(5000)
    })
})