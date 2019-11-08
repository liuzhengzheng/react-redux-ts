const initialState = {
  info: {}
};

export default function(state = initialState, action: any) {
  switch (action.type) {
    case "getUser":
      const res: any = { xxx: "xxx" };
      return {
        ...state,
        info: res
      };
    default:
      return state;
  }
}
