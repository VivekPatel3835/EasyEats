exports.up = function (knex) {
  return Promise.all([
    knex.schema.table('order_logs', function (table) {
      table.dropColumn('cart_items_id');
    })
  ])
};

exports.down = function (knex) {
  return Promise.all([
    knex.schema.table('order_logs', function (table) {
      table.integer('cart_items_id').references('id').inTable('cart_items');
    })
  ])
};
