const Schema = require('@longanphuc/orm-mysql').Schema
const Table = require("@longanphuc/orm-mysql").Table
const up = async()=>{
    await Schema.CreateTable(()=>{
        let table = new Table("TaiKhoan")
    })
}
const down = async()=>{
    
}
module.exports = {
    up: up,
    down: down
}