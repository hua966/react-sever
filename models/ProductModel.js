/*
能操作products集合数据的Model
 */
// 1.引入mongoose
const mongoose = require('mongoose')

// 2.字义Schema(描述文档结构)       创建集合规则
const productSchema = new mongoose.Schema({
  categoryId: {type: String, required: true}, // 所属分类的id
  pCategoryId: {type: String, required: true}, //工资类别
  name: String, 
  // 所属分类的父分类id  
  workmoney: String, // 基本工资
  workjixiao: String, // 绩效
  workbuzhu: String,//生活补助 
  workover: String,// 加班工资
  status: {type: Number, default: 1}, // 商品状态: 1:在售, 2: 下架了
  workaddmoney: String, //奖金
  worktime: String  // 总工资 
})


// 3. 定义Model(与集合对应, 可以操作集合)   使用规则去创建集合
const ProductModel = mongoose.model('products', productSchema)

// 4. 向外暴露Model
module.exports = ProductModel