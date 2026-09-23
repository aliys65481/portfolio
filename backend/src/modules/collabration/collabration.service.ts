import { createCollabrationDto } from "./collabration.dto";
import { collabrationRepository } from "./collabration.repository";
import { createCollabrationData } from "./collabration.types";

class collabrationService {
  async create(dto: createCollabrationData) {
    try {
        // i should combine user data with ip,agent
      
      const clb = await collabrationRepository.create(dto);
      
    } catch (err) {
      throw new Error(
        `Something went wrong while want to creating a clb ; ${err}`,
      );
    }
  }
}

export default new collabrationService();