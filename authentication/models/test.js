const mongoose = require("mongoose");
const crypto = require("crypto");
const uuid = require('uuid');

const testSchema = new mongoose.Schema({
    value: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
    },
}, {timestamps: true})

// userSchema.virtual("password")
// .set(function(password) {
//     this._password = password
//     this.salt = uuid.v4()
//     this.encry_password = this.securePassword(password)
// })
// .get(function() {
//     return this._password
// })

// userSchema.methods = {
//     authenticate: function(plainpassword){
//         return this.securePassword(plainpassword) === this.encry_password
//     },

//     securePassword: function(plainpassword) {
//         if(!plainpassword) return "";
//         try {
//             return crypto.createHmac("sha256", this.salt).update(plainpassword).digest("hex")
//         } catch (err) {
//             return ""
//         }
//     }
// }

module.exports = mongoose.model("Test", testSchema)