import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "redux/store";
/*
  ClientList.tsx 에서 참고 
  const [clientList, setClientList] = useState([
    {
      id: '',
      loginId: '',
      clientName: '',
      remarks: '',
      pwInit: '',
      dateOfCreated: '',
      dateOfUpdated: '',
      password: '',
      role: '',
      details: '',
      delete: '',
    },
  ]);
*/
interface Client {
  id: number;
  loginId: number;
  clientName: string;
  remarks: string;
  pwInit: string;
  dateOfCreated: Date;
  dateOfUpdated: Date;
  password: string;
  role: string;
  details: string;
  delete: string;
}

// Define a type for the slice state
interface ClientsState {
  loading: boolean;
  clients: Client[];
}

// Define the initial state using that type
const initialState: ClientsState = {
  loading: false,
  clients: [],
}

export const fetchClients = createAsyncThunk(
  'clients/fetchClients',
  async () => {
    // 비동기로 api 호출 후 결과 리턴
    return {
      clients: [],
    }   // 결과를 보내게 되면 아래 extraReducer에서 받음
  }
)

export const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    setAllClients: (state, action: PayloadAction<Client[]>) => {
      state.clients = action.payload;
    },
    addOneClient: (state, action: PayloadAction<Client>) => {
      state.clients.push(action.payload);
    },
    removeClientById: (state, action: PayloadAction<Client['id']>) => {
      state.clients = state.clients.filter((client: Client) => client.id !== action.payload);
    },
    removeAllClients: (state) => {
      state.clients = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchClients.pending, (state) => { // fetchClients 호출시
        state.loading = true;
      })
      .addCase(fetchClients.fulfilled, (state, action: PayloadAction<{clients: Client[]}>) => { // fetchClients에서 리턴
        state.clients = action.payload.clients;
        state.loading = false;
      })
      .addCase(fetchClients.rejected, (state) => {  // fetchClients 에서 error 발생시
        state.loading = false;
      })
  }
});

export const {
  setAllClients,
  addOneClient,
  removeAllClients,
  removeClientById,
} = clientsSlice.actions;

export const selectAllClients = (state: RootState) => state.clients.clients;

export const selectClientById = (id: Client['id']) => ({ clients }: RootState) => {
  return clients.clients.find((client: Client) => client.id === id);
}

export default clientsSlice.reducer;