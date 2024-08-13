// Axios
import { AxiosResponse } from "axios";
import { _axios } from "../../_base/_axios";
// Axios

// Models
import { I_Competition } from "../../../Models/interfaces/Competitions/CompetitionsInterfaces";
// Models

export const getAllCompetitionsService = (): Promise<
  AxiosResponse<I_Competition[]>
> => {
  return _axios.get(`/getEvents`);
};
