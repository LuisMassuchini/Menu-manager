import { AdminRequest } from "../interface/Admin";
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { Secret } from "jsonwebtoken";

const AdminSchema = require('../model/AdminSchema');

export class AuthService {
    private SECRET: Secret;

    constructor() {
        this.SECRET = process.env.SECRET;
    }

public signIn = async (adminData: AdminRequest) => {
    const {
        email,
        username,
        password
    } = adminData;

    let isValid: boolean;

        const findAdmin = await AdminSchema.findOne({
          $or: [{ email: email }, { username: username }],
        })

        if(!findAdmin) {
            return null;
        } else {
            const validPassword = bcrypt.compareSync(
                password,
                findAdmin.password,
              );
    
              if (!validPassword) {
                return null;
              }
        
              if (username) {
                const token = jwt.sign({ username: findAdmin.username }, this.SECRET);
                    if(token) {;
                        isValid = true;
                    }
                   
              }
        
              if (email) {
                const token = jwt.sign({ email: findAdmin.email }, this.SECRET);
                    if(token) {
                        isValid = true;
                    }
              }
        }

        if(isValid) {
            return findAdmin;
        } else {
            return null;
        }
    }
}