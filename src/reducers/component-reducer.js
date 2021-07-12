export function dashboardReducer(state = [], action) {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    case "call_vin": {
      return {
        ...state,
        visible: true,
        visibleLastCheck: false,
      };
    }
    case "clear_vin_data": {
      return {
        ...state,
        vin: "",
        visible: false,
        visibleLastCheck: true,
      };
    }
    default:
      break;
  }
}
