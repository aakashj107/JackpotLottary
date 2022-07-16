const {pool} = require("../../db");

module.exports = async (login_id,hashed_password,retailer_name,mobile_number,address,pincode,balance) => {
  try {
    const newUserAdd = await pool.query(
      `INSERT INTO app_user (login_id,hashed_password,retailer_name,mobile_number,address,pincode,balance,login_status,account_lock) VALUES ($1, $2, $3, $4, $5, %6, $7, $8, $9) RETURNING *`,
      [login_id, hashed_password, retailer_name, mobile_number,address,pincode,balance,'active','N']
    );

    return newUserAdd.rows[0];
  } catch (error) {
    throw error;
  }
};
