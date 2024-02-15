class Login {
  constructor(page) {
    this.page = page;
    this.username = page.locator('[data-test="username"]');
    this.password = page.locator('[data-test="password"]');
    this.loginBtn = page.locator('[data-test="login-button"]');
  }

  async fillUserName(name) {
    await this.username.fill(name);
  }

  async fillPassword(password) {
    await this.password.fill(password);
  }

  async clickLoginBtn() {
    await this.loginBtn.click();
  }
}

exports.Login = Login;
