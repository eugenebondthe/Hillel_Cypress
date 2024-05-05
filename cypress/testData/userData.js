export const defaultUser = {
  name: "Vasiliy",
  lastName: "Pupkin",
  password: "Password123",
};

export function generateRandomEmail() {
    const chars = "abcdefghijklmnopqrstuvwxyz1234567890";
    let email = "";
    for (let i = 0; i < 15; i++) {
      email += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return email + "@example.com";
  }
