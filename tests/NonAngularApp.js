describe('Non Angular Application', function () {
    it('Non Angular Application', function () {
        //browser.waitForAngularEnabled(false);
        browser.ignoreSynchronization = true;
        browser.get('http://testing.cqsapps.com/');
        browser.sleep(3000)
        element(by.id('txtUserName')).sendKeys('Test123');
        element(by.id('txtPassword')).sendKeys('Ct$1#2020');
        element(by.id('btnLogin')).click()
        browser.sleep(5000)
    })
})