const Repo = require('./utils');
const crypto = require('crypto');
const util = require('util');
const scrypt = util.promisify(crypto.scrypt);

class UserRepo extends Repo {
  async create(attr) {
    //attr.userId = this.randomId()
    //const records = await this.getAll();
    const salt = crypto.randomBytes(8).toString('hex');
    const buf = await scrypt(attr.password, salt, 64);
    const record = Object.assign(attr, { password: `${buf.toString('hex')}.${salt}` });
    //records.push({
    //  ...attr,
    //  password: `${buf.toString("hex")}.${salt}`
    //})

    return record
  }
}

module.exports = new UserRepo();