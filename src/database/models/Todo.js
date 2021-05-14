const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    static getTodoList() {
      return this.findAll({
        attributes: [
          ['id', 'id'],
          ['title', 'title'],
          ['detail', 'detail'],
          ['category', 'category'],
          ['is_finished', 'isFinished'],
        ],
      });
    };

    static addTodo(param) {
      return this.create({
        title: param.title,
        content: param.content,
        is_finished: param.isFinished,
        user_id: param.userId,
      });
    };

    static updateTodo(param) {
      return this.update({
        title: param.title,
        detail: param.detail,
        category: param.category,
        is_finished: param.isFinished,
      }, {
        where: {
          id: param.id,
        },
      });
    };

    static deleteTodo(id) {
      return this.destroy({
        where: {
          id,
        },
      });
    };
  };

  Todo.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    detail: DataTypes.STRING,
    category: DataTypes.STRING,
    is_finished: DataTypes.BOOLEAN,
  }, {
    sequelize,
    underscored: true,
    modelName: 'Todo',
  });
  return Todo;
}
