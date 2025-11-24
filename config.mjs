import dotenv from "dotenv";

dotenv.config();

function require(key, defaultValue=undefined) {
    const value = process.env[key] || defaultValue;
    if(value == null) {
        throw new Error(`키 ${key}는 undefined!`);
    }
    return value;
}

export const config = {
    jwt: {
        secretKey: require("JWT_SECRET"),
        expiresInSec: parseInt(require("JWT_EXPIRES_SEC"))
    },
    bcrypt: {
        saltRounds: parseInt(require("BCRYPT_SALT_ROUNDS", 12))
    },
    host: {
        port: parseInt(require("HOST_PORT", 9090))
    },
    db: {
        host: require("DB_HOST"),
        user: require("DB_USER"),
        password: require("DB_PASSWORD"),
        database: require("DB_DATABASE"),
        port: require("DB_PORT")
    }
};