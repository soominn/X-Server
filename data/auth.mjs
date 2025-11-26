import mongoose from "mongoose";
import { useVirtualId } from "../db/database.mjs";

// versionKey: Mongoose가 문서를 저장할 때 자동으로 추가하는 _v라는 필드를 설정
const userSchema = new mongoose.Schema({
    userid: { type: String, require: true },
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    url: String
}, { versionKey: false });

useVirtualId(userSchema);
const User = mongoose.model("User", userSchema); // 이렇게 작성하면 users라는 스키마(테이블)에 저장되게 됨

export async function createUser(user) {
    return new User(user).save().then((data) => data.id);
}

export async function findByUserid(userid) {
    return User.findOne({ userid });
}

export async function findById(id) {
    return User.findById(id);
}