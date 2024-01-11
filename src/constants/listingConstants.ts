export const SUBMIT_LISTING_REQUEST: string = 'SUBMIT_LISTING_REQUEST';
export const SUBMIT_LISTING_SUCCESS: string = 'SUBMIT_LISTING_SUCCESS';
export const SUBMIT_LISTING_ERROR: string = 'SUBMIT_LISTING_ERROR';
export const WALL_GET_DETAILS_FAIL: string = 'WALL_GET_DETAILS_FAIL';
export const WALL_GET_DETAILS_SUCCESS: string = 'WALL_GET_DETAILS_SUCCESS';
export const WALL_GET_DETAILS_LOADING: string = 'WALL_GET_DETAILS_LOADING';
export const WALL_GET_DETAILS_IDLE: string = 'WALL_GET_DETAILS_IDLE';

export const WALL_CONSTRUCTION_TYPES: { [index: number]: string } = {
  0: 'Sheetrock',
  1: 'Brick',
  2: 'Concrete',
  // 3: 'wood',
  3: 'Hoardings',
  4: 'Glass',
};

export const WALL_CONDITIONS: { [index: number]: string } = {
  0: 'all',
  1: 'brand new development',
  2: 'free and clear of all debris',
  3: 'bricks need some attention',
};
