const Schema = require('@longanphuc/orm-mysql').Schema
const Table = require("@longanphuc/orm-mysql").Table
const up = async()=>{
    await Schema.CreateTable(()=>{
        let table = new Table("users")
        table.name("id").type("int").primaryIncrement()
        table.name("name").type("varchar",50).notNull()
        table.name("sex").type("tinyint").notNull()
        table.name("date_birth").type("date")
        table.name("number").type("varchar",12)
        table.name("email").type("varchar",100)
        table.name("username").type("varchar",50)
        table.name("password").type("varchar",32)
        table.name("status").type("int")
        table.name("address").type("varchar",100)
        table.name("city_id").type("varchar",5)
        table.name("district").type("varchar",5)
        table.name("ward_id").type("varchar",5)        
        table.name("node").type("varchar",200)
        table.name("role").type("int").default(0)
        table.name("created_at").type("datetime").defaultCurrent_Timestamp()
        table.name("deleted_at").type("datetime")
        table.name("facebook_id").type("varchar",200).unique()
        return table
    },true)
    await Schema.CreateTable(()=>{
        let table = new Table("products")
        table.name("id").type("int").primaryIncrement()
        table.name("name").type("varchar",50).notNull()
        table.name("link").type("varchar",50).notNull()
        table.name("avatar").type("int").notNull()
        table.name("summary").type("varchar",255)
        table.name("content").type("text").notNull()
        table.name("author").type("int").notNull()
        table.name("price").type("int").notNull()
        table.name("promotion").type("int")
        table.name("category_id").type("int").notNull()
        table.name("created_at").type("datetime").defaultCurrent_Timestamp()
        table.name("deleted_at").type("datetime")
        return table
    },true)
    await Schema.CreateTable(()=>{
        let table = new Table("category")
        table.name("id").type("int").primaryIncrement()
        table.name("name").type("varchar",50).notNull()
        table.name("link").type("varchar",50).notNull()
        table.name("node").type("varchar",200)
        table.name("created_at").type("datetime").defaultCurrent_Timestamp()
        return table
    })
    await Schema.CreateTable(()=>{
        let table = new Table("picture")
        table.name("id").type("int").primaryIncrement()
        table.name("URL").type("varchar",200).unique().notNull()
        table.name("folder").type("varchar",50).notNull().default("storage")
        table.name("created_at").type("datetime").defaultCurrent_Timestamp()
        return table
    },true)

    await Schema.CreateTable(()=>{
        let table = new Table("blog")
        table.name("id").type("int").primaryIncrement()
        table.name("name").type("varchar",50).notNull()
        table.name("author").type("int").notNull()
        table.name("avatar").type("int").notNull()
        table.name("summary").type("varchar",255)
        table.name("content").type("text")
        table.name("created_at").type("datetime").defaultCurrent_Timestamp()
        return table
    },true)

    await Schema.CreateTable(()=>{
        let table = new Table("act_users")
        table.name("id").type("int").primaryIncrement()
        table.name("product_id").type("int")
        table.name("user_id").type("int").notNull()
        table.name("type_act").type("int").notNull()
        table.name("feedback").type("int")
        table.name("node").type("varchar",255)
        table.name("created_at").type("datetime").defaultCurrent_Timestamp()
        return table
    },true)

    await Schema.CreateTable(()=>{
        let table = new Table("order")
        table.name("id").type("int").primaryIncrement()
        table.name("user_id").type("int").notNull()
        table.name("delivery_date").type("datetime")
        table.name("delivery_address").type("varchar",200).notNull()
        table.name("node").type("varchar",255)
        table.name("status").type("int").notNull().default(0)
        table.name("created_at").type("datetime").defaultCurrent_Timestamp()
        return table
    },true)

    await Schema.CreateTable(()=>{
        let table = new Table("order_details")        
        table.name("order_id").type("int").notNull()
        table.name("product_id").type("int").notNull()
        table.name("quantily").type("int").notNull()
        table.name("price").type("int").notNull()
        table.name("promotion").type("int")
        table.name("created_at").type("datetime").defaultCurrent_Timestamp()
        table.primary = ["order_id","product_id"]
        return table
    },true)
}
const down = async()=>{
    await Schema.DropTable("users")
    await Schema.DropTable("products")
    await Schema.DropTable("category")
    await Schema.DropTable("picture")
    await Schema.DropTable("blog")
    await Schema.DropTable("act_users")
    await Schema.DropTable("order")
    await Schema.DropTable("order_details")
}
module.exports = {
    up: up,
    down: down
}