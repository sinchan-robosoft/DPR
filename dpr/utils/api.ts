import { homeScreenData } from "../Constants/rawData";

export const getData = async (pageParam: number) => {
  await new Promise<void>((resolve) => setTimeout(resolve, 5000));

  return homeScreenData.find((item) => item.page === pageParam);
};