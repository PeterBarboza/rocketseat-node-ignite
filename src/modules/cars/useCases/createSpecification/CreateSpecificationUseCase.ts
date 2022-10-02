import { ISpecificationRepository } from "../../repositories/ISpecificationRepository"

interface IRequest {
  name: string
  description: string
}

export class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationRepository) {}

  execute({ name, description }: IRequest) {
    const specificationAlreadyEixsts =
      this.specificationsRepository.findByName(name)

    if (specificationAlreadyEixsts) {
      throw new Error("Specification already eixsts")
    }

    this.specificationsRepository.create({ name, description })
  }
}
