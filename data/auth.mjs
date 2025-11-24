import { db } from "../db/database.mjs";

// 과제 코드
// export async function signup(userid, password, name, email) {
//     const user = {
//         id: Date.now().toString(),
//         userid: userid,
//         password: password,
//         name: name,
//         email: email
//     };

//     users = [user, ...users];

//     return user;
// }

// export async function login(userid, password) {
//     return users.find((user) => user.userid === userid && user.password === password);
// }


// 수업 코드
export async function createUser(user) {
    const { userid, password, name, email, url } = user;
    return db.execute("insert into users (userid, password, name, email, url) values (?, ?, ?, ?, ?)", [userid, password, name, email, url])
        .then((result) => result[0].insertId);
}

export async function login(userid, password) {
    const user = users.find((user) => user.userid === userid && user.password === password);
    return user;
}

export async function findByUserid(userid) {
    return db.execute("select idx, password from users where userid = ?", [userid]).then((result) => {
        console.log(result);
        return result[0][0];
    });
}

export async function findById(idx) {
    return db.execute("select idx, userid from users where idx = ?", [idx]).then((result) => result[0][0]);
}