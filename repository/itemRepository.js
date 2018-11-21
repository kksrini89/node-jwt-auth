const ItemModel = require('../models/item');

class ItemRepository {
  constructor() {}

  async getItems() {
    try {
      const items = await ItemModel.find().exec();
      if (items && items.length < 0) {
        throw new Error('No items exist!');
      }
      return items;
    } catch (error) {
      throw error;
    }
  }

  async postItem(newItem) {
    try {
      const item = {
        name: 'Srinivasan'
      };
      await ItemModel.create(item);
    } catch (error) {
      throw error;
    }
  }
}
module.exports = ItemRepository;
