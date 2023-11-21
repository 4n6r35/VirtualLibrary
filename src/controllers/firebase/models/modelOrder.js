class ModelOrder {
  constructor(idOrder = "", bookId = "", userId = "") {
    this.idOrder = idOrder;
    this.bookId = bookId;
    this.userId = userId;
  }

  toString() {
    return this.idOrder + ", " + this.bookId + ", " + this.userId;
  }
}

export const modelOrder = {
  toFirestore: (orderModel) => {
    return {
      id: orderModel.idOrder,
      idBooks: orderModel.bookId,
      idUser: orderModel.userId,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new ModelOrder(data.idOrder, data.bookId, data.userId);
  },
};
