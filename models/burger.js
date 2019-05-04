module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()')
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()')
    }

  });


  return Burger;
};


// const orm = require("../config/orm.js");

// const burger = {
//   all: function(cb) {
//     orm.all('burgers', function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   create: function(cols, vals, cb) {
//     orm.create('burgers', cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   update: function(objColVals, condition, cb) {
//     orm.update('burgers', objColVals, condition, function(res) {
//       cb(res);
//     });
//   },
//   delete: function(id, cb){
//     orm.delete('burgers', id, function(res) {
//       cb(res);
//     });
//   }
// };

// module.exports = burger;


