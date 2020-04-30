describe('Drag and Drop operation', function () {
    it('DragDrop', function () {
        browser.get('https://codef0rmer.github.io/angular-dragdrop/#!/');
        let source = element(by.model('list1'))
        let destination = element(by.model('list2'))
        browser.actions().dragAndDrop(source, destination).perform()

        browser.sleep(5000)
    })
})