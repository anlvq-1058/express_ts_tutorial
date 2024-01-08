import express from "express";
const {pool} = require('../../db');
import User from '../../models/user';

export const home = async (req: express.Request, res: express.Response) => {
  try {
    // pool.query('SELECT * FROM users', (err: any, result: any) => {
    //   if (err) throw err;
    //   console.log('res.rows', result.rows);
    //   return res.status(200).json(result.rows);
    // });
    const user = await User.findAll();
    // console.log(user instanceof User); // true
    // console.log(user);
    return res.status(200).json(JSON.stringify(user, null, 2));
  } catch (error) {
    console.log(error);
    return res.status(400);
  }
}
