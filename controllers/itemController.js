const ItemRepository = require('../repository/itemRepository');

class ItemController {
  constructor() {}

  async getItems() {
    try {
      const itemRepo = new ItemRepository();
      return await itemRepo.getItems();
    } catch (error) {
      throw error;
    }
  }
}

module.exports.ItemController = ItemController;
