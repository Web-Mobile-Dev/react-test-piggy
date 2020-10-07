export interface IItem {
  id: number;
  color: string;
  shape: string;
}

export interface IState {
  selectedColors: string[];
  selectedShapes: string[];
  filterItems: IItem[];
  title: string;
}

export interface IAction {
  type: string;
  payload: string;
}
