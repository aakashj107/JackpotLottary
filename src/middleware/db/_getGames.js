const {pool} = require("../../db");

module.exports = async () => {
  try {
    const queryResult = await pool.query(
      `SELECT * FROM (
        SELECT gameid,gamename,CURRENT_TIME, starttime::time,endtime::time
        ,LAG(starttime,1) OVER (
                ORDER BY gamename
            ) Previous_game
        ,Lead(starttime,1) OVER (
                ORDER BY gamename
            ) next_game
        from daily_game_master )t
        WHERE CURRENT_TIME >= starttime::time AND current_time <= endtime::time;`
    );
    return queryResult.rows.length > 0 ? queryResult.rows[0] : null;
  } catch (error) {
    throw error;
  }
};
