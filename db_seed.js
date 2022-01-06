(async function () {
    const faker = require("faker")
    const category = require("./Model/category")
    const lib = require("./Helper/lib")
    let i = 0

    while (i <= 5) {
        let c = new category()
        c.name = faker.commerce.productName()
        c.link = lib.bodauTiengViet(c.name)
        await c.save()
        i++
    }

    i = 0

    while (i <= 30) {
        let c = new category()
        c.name = faker.commerce.productName()
        c.link = lib.bodauTiengViet(c.name)
        c.parent = Math.floor(Math.random()*6) + 1
        await c.save()
        i++
    }

}())
