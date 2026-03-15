const profile = {
  username: "Jacob",
  playTime: 300,

  // 1. Kullanıcı adını değiştiren metod
  changeUsername(newName) {
    this.username = newName;
  },

  // 2. Oyun süresini artıran metod
  updatePlayTime(hours) {
    this.playTime += hours;
  },

  // 3. Profil bilgilerini özetleyen metod
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  }
};
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
