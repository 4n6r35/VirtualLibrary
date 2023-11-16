class BookModel {
  constructor(id = "", title = "", description = "", link = "", cover = "") {
    this.id = id;
    this.title = title;
    this.description = description;
    this.link = link;
    this.cover = cover;
  }

  toString() {
    return (
      this.id +
      ", " +
      this.title +
      ", " +
      this.description +
      ", " +
      this.link +
      ", " +
      this.cover
    );
  }
}

export const modelBookModel = {
  toFirestore: (bookModel) => {
    return {
      id: bookModel.id,
      title: bookModel.title,
      description: bookModel.description,
      link: bookModel.link,
      cover: bookModel.cover,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new BookModel(
      data.id,
      data.title,
      data.description,
      data.link,
      data.cover
    );
  },
};
