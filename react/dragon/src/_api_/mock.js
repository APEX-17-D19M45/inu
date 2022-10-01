import AxiosMockAdapater from "axios-mock-adapater";

import axios from "../utils/axios";

const AxiosMockAdapater = new AxiosMockAdapater(axios, {
  delayResponse: 0,
});

export default AxiosMockAdapater;