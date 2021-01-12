/*
能操作users集合数据的Model
 */
// 1.引入mongoose
const mongoose = require('mongoose')
const md5 = require('blueimp-md5')


// 2.字义Schema(描述文档结构)           创建集合规则
const userSchema = new mongoose.Schema({
  username: {type: String, required: true}, // 用户名
  password: {type: String, required: true}, // 密码
  age: String,    //年龄
  phone: String,   //电话
  department: String, // 部门
  education: String,   //学历
  email: String, // 电子邮箱
  create_time: {type: Number, default: Date.now},  //创建时间
  role_id: String,  //用户职能
  state: String,   //状态
  workmoney: {type: mongoose.Schema.Types.ObjectId, ref: 'Work'},
})

// 3. 定义Model(与集合对应, 可以操作集合)   使用规则去创建集合  
// 用户集合
const UserModel = mongoose.model('users', userSchema)


// 初始化默认超级管理员用户: admin/admin
UserModel.findOne({username: 'admin'}).then(user => {
  if(!user) {
    // 创建文档
    UserModel.create({username: 'admin', password: md5('admin')})
            .then(user => {
              console.log('初始化用户: 用户名: admin 密码为: admin')
            })
  }
})



// 4. 向外暴露Model
module.exports = UserModel