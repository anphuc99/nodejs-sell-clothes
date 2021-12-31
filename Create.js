const createMigration = require("@longanphuc/orm-mysql/migration/createMigration");
const createModel = require("@longanphuc/orm-mysql/model/createModel");

let type = process.argv[2]
let fileName = process.argv[3]

switch(type){
    case "migration":
        createMigration(fileName)
        break;
    case "model":
        createModel(fileName)
        break;
}