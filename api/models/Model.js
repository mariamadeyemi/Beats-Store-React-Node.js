const conn = require("./connection");
const pluralize = require("pluralize");
class Model {
  constructor(obj = {}) {
    this.setProp(obj);
  }
  setProp(obj) {
    for (const key in obj) {
      this[key] = obj[key];
    }
  }

  static get tableName() {
    let snake_case = this.name.replace(
      /.[A-Z]/g,
      (mch) => mch[0] + "_" + mch[1]
    );
    return pluralize(snake_case.toLowerCase());
  }

  static get classField() {
    return "";
  }

  async save() {
    let columns = Object.keys(this);
    let sql = `INSERT INTO ${this.constructor.tableName} (${columns.join(
      ", "
    )}) VALUES (${"?".repeat(columns.length).split("").join(", ")})`;
    let [result] = await conn.execute(sql, Object.values(this));
    this.id = result.insertId;
  }

  static async query(sql, params = []) {
    if (this.classField != "") {
      if (sql.toLowerCase().indexOf("where") == -1) sql += " WHERE ";
      else sql += " AND ";
      sql += this.classField;
    }
    let [results] = await conn.execute(sql, params);
    return results;
  }

  static async find(filters = []) {
    let result = [];
    let sql = `SELECT * from ${this.tableName}`;
    let params = [];
    if (filters.length > 0) {
      sql += " WHERE ";
      let opr = "=";
      let prop = "";
      let val = "";
      for (const filter of filters) {
        if (Array.isArray(filter)) {
          if (filter.length > 2) {
            opr = filter[1];
            prop = filter[0];
            val = filter[2];
          } else if (filter.length == 2) {
            prop = filter[0];
            val = filter[1];
          }
          sql += ` ${prop} ${opr} ? AND`;
          params.push(val);
        } else {
          if (filters.length > 2) {
            opr = filters[1];
            prop = filters[0];
            val = filters[2];
          } else if (filters.length == 2) {
            prop = filters[0];
            val = filters[1];
          }
          sql += ` ${prop} ${opr} ? AND`;
          params.push(val);
          break;
        }
      }
    }
    sql = sql.replace(/ AND$/, "");
    let rows = await this.query(sql, params);
    
    for (const row of rows) {
      result.push(new this(row));
    }
    return result;
  }

  static async findById(id) {
    let sql = `SELECT * FROM ${this.tableName} WHERE id=?`;
    
    let [rows] = await conn.execute(sql, [id]);
    if (rows.length) {
      let row = rows[0];
      return new this(row);
    }
    return null;
  }

  async update() {
    let { id, ...objWithoutId } = this;
    let columns = Object.keys(objWithoutId);
    let sql = `UPDATE ${this.constructor.tableName} SET `;
    let i = 1;
    for (const column of columns) {
      sql += `${column} = ?${i == columns.length ? "" : ","} `;
      i++;
    }
    sql += `WHERE id = ?`;
    let [result] = await conn.execute(sql, [
      ...Object.values(objWithoutId),
      this.id,
    ]);
    return result.affectedRows > 0;
  }

  async delete() {
    let sql = `DELETE FROM ${this.constructor.tableName} WHERE id = ?`;
    let [result] = await conn.execute(sql, [this.id]);
    return result.affectedRows > 0;
  }

  static async delete(id) {
    let sql = `DELETE FROM ${this.tableName} WHERE id = ?`;
    let [result] = await conn.execute(sql, [id]);
    return result.affectedRows > 0;
  }

  toString() {
    return this.name || "No string representation of the object";
  }
}

module.exports = Model;
