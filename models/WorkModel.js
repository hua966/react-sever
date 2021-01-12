/*
能操作users集合数据的Model
 */
// 1.引入mongoose
const mongoose = require('mongoose')


const Works = new mongoose.Schema({
  name: String, // 员工名
  worka: String, // 奖罚类型
  categoryId: {type: String, required: true}, // 所属分类的id
  pCategoryId: {type: String, required: true}, //工资类别
  workb: String,    //请假情况
  workc: String,   //工作天数
  workd: String, // 缺勤天数
  worke: String, // 态度分数
  workf: String, // 发布时间
})

const WorkModel = mongoose.model('Work', Works)

// 4. 向外暴露Model
module.exports = WorkModel