/*
能操作categorys集合数据的Model
 */
// 1.引入mongoose
const mongoose = require('mongoose')

// 2.字义Schema(描述文档结构)      创建集合规则
const categorySchema = new mongoose.Schema({
  name: {type: String, required: true},
  parentId: {type: String, required: true, default: '0'}
})
        //  使用规则去创建集合
// 3. 定义Model(与集合对应, 可以操作集合)   //  使用规则去创建集合
const CategoryModel = mongoose.model('categorys', categorySchema)

// 4. 向外暴露Model
module.exports = CategoryModel