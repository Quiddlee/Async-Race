export enum FormTypes {
  CREATE = 'create',
  UPDATE = 'update',
}

export enum ApiUrls {
  MAIN = 'http://localhost:3000',
  GARAGE = `${MAIN}/garage/`,
  ENGINE = `${MAIN}/engine/`,
  WINNERS = `${MAIN}/winners/`,
}

export enum ApiQueries {
  PAGE = '_page=',
  LIMIT = '_limit=',
  ID = 'id=',
  STATUS = 'status=',
  STARTED = 'started',
  STOPPED = 'stopped',
  DRIVE = 'drive',
  SORT = '_sort=',
  ORDER = '_order=',
}

export enum RequestMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

export enum GarageViewCarControlButtonsContent {
  SELECT = 'select',
  DELETE = 'remove',
}

export enum Headers {
  JSON = 'application/json',
  TOTAL_COUNT = 'X-Total-Count',
}

export enum GarageViewCarDriveButtonsContent {
  A = 'A',
  B = 'B',
}

export enum ControlGarageButtonTypes {
  RACE = 'race',
  RESET = 'reset',
  GENERATE_CARS = 'generate-cars',
}

export enum SortTypes {
  ID = 'id',
  WINS = 'wins',
  BEST_TIME = 'time',
}

export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum CarStates {
  DRIVE = 'drive',
  STOP = 'stop',
}

export enum ViewTypes {
  GARAGE = 'garage',
  WINNERS = 'winners',
}
