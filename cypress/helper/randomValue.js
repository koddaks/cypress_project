class RandomValue{
  generateValidEmail(email) {
    const symbols = "abcdefghijklmnopqrstuvwxyz1234567890";
    let string = "";
    for (let x = 0; x < 15; x++) {
      string += symbols[Math.floor(Math.random() * symbols.length)];
    }
    email = string + "@gmail.com";
    return email;
  }

  generateValidUsername(username) {
    const symbols = "abcdefghijklmnopqrstuvwxyz1234567890";
    let string = "";

    for (let x = 0; x < 15; x++) {
      string += symbols[Math.floor(Math.random() * symbols.length)];
    }
    username = string[0].toUpperCase() + string.slice(1);
    return username;
  }

  generateValidPassword(password) {
    const symbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let string = "";
    for (let x = 0; x < 15; x++) {
      string += symbols[Math.floor(Math.random() * symbols.length)];
    }
   password = string;
    return password;
  }
}
export default RandomValue