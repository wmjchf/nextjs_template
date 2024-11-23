// lib/api.ts
import { fetcher } from "@/utils/request";

interface IGetRegionResponse {
  countryCode: string;
  timezone: string;
}
export const getRegion = async () => {
  return fetcher<IGetRegionResponse>(`/user/region`, {
    method: "POST",
  });
};
