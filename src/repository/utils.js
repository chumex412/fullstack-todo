const crypto =  require("crypto");
const fs = require("fs");
const util = require("util");

const scrypt = util.promisify(crypto.scrypt);

module.exports = class Repo {
  //constructor(filename) {
  //  if(!filename) {
  //    throw new Error("Creating a repository requires a filename");
  //  }
  //  this.filename = filename;
  //  try {
  //    fs.accessSync(this.filename, )
  //  } catch(err) {
  //    fs.writeFileSync(this.filename, '[]');
  //  }
  //}

  //async getAll() {
  //  const data = await JSON.parse(fs.promises.readFile(this.filename, { encoding: 'utf8' }))
//
  //  return data
  //}

  async write(records) {
    // Add the updated records to the file
    return await fs.promises.writeFile(this.filename, JSON.stringify(records, null, 2), { encoding: 'utf8' });
  }

  async create(attr) {
    attr.id = this.randomId()
    //const records = await this.getAll();

    //records.push(attr);
    //this.write(records)

    return attr
  }

  randomId() {
    return crypto.randomBytes(4).toString("hex");
  }

  //async getOne(id) {
  //  const records = await this.getAll();
//
  //  const record = records.find(record => record.id === id);
//
  //  return record;
  //}

  async getOneBy(filters) {
    const records = await this.getAll();

    for(let record of records) {
      let found = true;
      for(let key in filters) {
        if(record[key] !== filters[key]) {
          found = false
        }
      }
      if(found) {
        return record;
      }
    }
  }

  async comparePasswords(saved, supplied) {
    const [hashed, salt] = saved.split(".");

    const hashedSupplied = await scrypt(supplied, salt, 64);

    return hashed === hashedSupplied.toString("hex");
  }
}