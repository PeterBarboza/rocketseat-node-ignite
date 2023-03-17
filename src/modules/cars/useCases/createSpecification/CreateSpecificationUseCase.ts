import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";

import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
export class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationRepository
  ) {}

  async execute({ name, description }: IRequest) {
    const specificationAlreadyEixsts =
      await this.specificationsRepository.findByName(name);

    if (specificationAlreadyEixsts) {
      throw new AppError("Specification already eixsts", 400);
    }

    await this.specificationsRepository.create({ name, description });
  }
}
