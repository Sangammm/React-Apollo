import { decorator, observable } from "mobx-react";

class signupstore {
  constructor() {
    this.user = null;
    this.token = null;
  }

  mutationsignup = data => {};
}
decorator(signupstore, {
  user: observable
});

export default signupstore;
