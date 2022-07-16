const { pool } = require("../../db");

// Concatenates an array of objects or arrays of values, according to the template,
// to use with insert queries. Can be used either as a class type or as a function.
//
// template = formatting template string
// data = array of either objects or arrays of values
function Inserts(template, data, staticCol) {
    if (!(this instanceof Inserts)) {
        return new Inserts(template, data, staticCol);
    }
    this._rawDBType = true;
    this.formatDBType = function () {
        return data.map(d => '(' + staticCol + ',' + pgp.as.format(template, d) + ')').join(',');
    };
}

module.exports = async (reqData,loggedInUser) => {
    try {

        const newGameAdd = await pool.query(
            `INSERT INTO daily_game_details(gameID, retailerID) VALUES ($1, $2) RETURNING *`,
            [reqData.gameID, loggedInUser.login_id]
        );

        let dailyGameId = newGameAdd.rows[0].dailygameid

        const gameAmountAdd = await pool.query(
            `INSERT INTO current_lottery_details(dailyGameID,lottery_number,lottery_amt) VALUES ${reqData.lottery_amt.map(r => `('${dailyGameId}','${r.count}','${r.value}')`)} RETURNING *`
        );

        const newlottaryAdd = await pool.query(
            `INSERT INTO current_lottery(dailyGameID,lottery_number) VALUES ${reqData.lottery.map(r => `('${dailyGameId}','${r}')`)} RETURNING *`
        );


        return newGameAdd.rows[0];
    } catch (error) {
        throw error;
    }
};
