// Axios
import { AxiosResponse } from "axios";
import { _axios } from "../../_base/_axios";
import { I_HomePageChart } from "../../../Models/interfaces/HomePageData/HomePageDataInterfaces";
// Axios

export const getHomePageChartDataService = (): Promise<
  AxiosResponse<I_HomePageChart[]>
> => {
  return _axios.get(`/getChartsData`);
};
