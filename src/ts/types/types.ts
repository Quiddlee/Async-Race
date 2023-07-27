import {
  ApiQueries,
  ApiUrls,
  FormTypes,
  RequestMethods,
  SortOrder,
  SortTypes,
  State,
} from '.';

export type Car = Readonly<{
  name: string;
  color: string;
  id: number;
}>;

export type CarsData = Readonly<Car[]>;

export type UploadCarData = Readonly<Omit<Car, 'id'>>;

export type WinnerData = Readonly<{
  id: number;
  wins: number;
  time: number;
}>;

export type WinnersTableData = WinnerData &
  Readonly<{
    name: string;
    color: string;
  }>;

export type UpdateWinnersData = Readonly<Omit<WinnerData, 'id'>>;

export type UploadData = UploadCarData | WinnerData | UpdateWinnersData;

export type Handler<
  TFirstArg = void,
  TSecondArg = void,
  TThirdArg = void,
  TFourthArg = void,
  TReturn = void,
> = (
  args: TFirstArg,
  secondArg: TSecondArg,
  thirdArg: TThirdArg,
  FourthArg: TFourthArg,
) => TReturn;

export type UpdateCarUrl = `${ApiUrls.GARAGE}${number}`;

export type StartStopCarsEngineUrl = `${ApiUrls.ENGINE}${string}`;

export type UpdateWinnerUrl = `${ApiUrls.WINNERS}${number}`;

export type SortWinnersUrl =
  `${ApiUrls.WINNERS}?${ApiQueries.SORT}${SortTypes}&${ApiQueries.PAGE}${number}&${ApiQueries.LIMIT}${number}&${ApiQueries.ORDER}${SortOrder}`;

export type GetCars =
  `${ApiUrls.GARAGE}?${ApiQueries.PAGE}${number}&${ApiQueries.LIMIT}${number}`;

export type Url =
  | ApiUrls
  | ApiQueries
  | UpdateCarUrl
  | GetCars
  | StartStopCarsEngineUrl
  | UpdateWinnerUrl
  | SortWinnersUrl;

export type FormTypesKeys = keyof typeof FormTypes;

export type ReadOnlyState = Readonly<State>;

export type Ajax<TUploadData extends UploadData> = Readonly<{
  url: Url;
  uploadData?: TUploadData;
  method: RequestMethods;
}>;

export type StartCarResponse = Readonly<{ velocity: number; distance: number }>;

export type DriveModeResponse = Readonly<{ success: boolean }>;

export type FetchData =
  | Car
  | CarsData
  | StartCarResponse
  | DriveModeResponse
  | Response
  | WinnerData
  | WinnerData[];

export type AjaxResponse<TData extends FetchData> = [TData, string];

export type StartStopState = ApiQueries.STOPPED | ApiQueries.STARTED;
