import { inject, injectable } from "tsyringe";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { IUsersRespository } from "../../repositories/IUsersRepository";
import { CONFIG } from "../../../../configs";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRespository: IUsersRespository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRespository.findByEmail(email);

    if (!user) {
      throw new Error("Email or password incorrect!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email or password incorrect!");
    }

    const token = sign({}, CONFIG.jwtSecret, {
      subject: user.id,
      expiresIn: "1d",
    });

    return {
      user: {
        email: user.email,
        name: user.name,
      },
      token,
    };
  }
}
