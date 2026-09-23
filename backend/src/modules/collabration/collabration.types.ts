import { ICollabration } from "./collabration.model";
type createCollabrationData = Omit<
  ICollabration,
  "createdAt" | "updatedAt"
>;

export {
createCollabrationData
}