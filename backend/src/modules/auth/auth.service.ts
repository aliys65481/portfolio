import { IUser } from "./auth.dto";
import { userRepository } from "./auth.repository";
import bcrypt from "bcrypt"

class authService {
  async signup(user: IUser) {
    try {
      const isUserExisted = await userRepository.findByEmail(user.email);
      if (isUserExisted) throw new Error("user has already exist.");
      const hashedPassword = await bcrypt.hash(user.password,12)
      return await userRepository.create({
        ...user,
        password:hashedPassword
      })
    } catch (err) {
      throw new Error(
        `Something went wrong while want to creating a user ; ${err}`,
      );
    }
  }
}

export default new authService();
