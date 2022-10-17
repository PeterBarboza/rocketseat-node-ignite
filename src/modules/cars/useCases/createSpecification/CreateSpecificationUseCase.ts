import { inject, injectable } from "tsyringe";

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
      throw new Error("Specification already eixsts");
    }

    await this.specificationsRepository.create({ name, description });
  }
}
