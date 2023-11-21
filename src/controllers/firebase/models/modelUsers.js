class UserModel {
  constructor(
    id = "",
    email = "",
    username = "",
    typeUser = false,
    books = []
  ) {
    this.id = id;
    this.email = email;

    this.username = username;
    this.typeUser = typeUser;
    this.books = books;
  }

  toString() {
    return (
      this.id +
      ", " +
      this.email +
      ", " +
      this.username +
      ", " +
      this.typeUser +
      ", " +
      JSON.stringify(this.books)
    );
  }
}

export const modelUser = {
  toFirestore: (userModel) => {
    return {
      id: userModel.id,
      email: userModel.email,
      username: userModel.username,
      typeUser: userModel.typeUser,
      books: userModel.books,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new UserModel(
      data.id,
      data.email,
      data.username,
      data.typeUser,
      data.books
    );
  },
};
