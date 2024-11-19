import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userRegister = createAsyncThunk("user/register", async (user) => {
  try {
    let response = await axios.post(
      "http://localhost:5000/user/register",
      user
    );
    return response;
  } catch (error) {
    console.log(error);
  }
});
export const userlogin = createAsyncThunk("user/logi", async (user) => {
  try {
    let response = await axios.post("http://localhost:5000/user/login", user);
    return await response;
  } catch (error) {
    console.log(error);
  }
});
export const userCurrent = createAsyncThunk("user/current", async () => {
  try {
    let response = await axios.get("http://localhost:5000/user/current", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return await response;
  } catch (error) {
    console.log(error);
  }
});

export const getuser=createAsyncThunk("user/get",async()=>{
  try {
      let result =await axios.get("http://localhost:5000/user/")
      return result 
  
      
  } catch (error) {
      console.log(error)
      
  }
  
  })
export const deleteuser=createAsyncThunk("user/delete",async(id)=>{
  try {
      let result =await axios.delete(`http://localhost:5000/user/${id}`)
      return result 
  
      
  } catch (error) {
      console.log(error)
      
  }
  
  })
  export const updateuser=createAsyncThunk("user/update",async({id,edited})=>{
    try {
        let result =await axios.put(`http://localhost:5000/user/${id}`,edited)
        return result 
    
        
    } catch (error) {
        console.log(error)
        
    }
    
    })
const initialState = {
  user: null,
  status: null,
  userlist:null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [userRegister.pending]: (state) => {
      state.status = "pending";
    },
    [userRegister.fulfilled]: (state, action) => {
      state.status = "successsss";
      state.user = action.payload.data.newUserToken;
      localStorage.setItem("token", action.payload.data.token);
    },
    [userRegister.rejected]: (state) => {
      state.status = "fail";
    },
    [userlogin.pending]: (state) => {
      state.status = "pending";
    },
    [userlogin.fulfilled]: (state, action) => {
      state.status = "successsss";
      state.user = action.payload.data.user;
      localStorage.setItem("token", action.payload.data.token);
    },
    [userlogin.rejected]: (state) => {
      state.status = "fail";
    },
    [userCurrent.pending]: (state) => {
      state.status = "pending";
    },
    [userCurrent.fulfilled]: (state, action) => {
      state.status = "successsss";
      state.user = action.payload?.data.user;
    },
    [userCurrent.rejected]: (state) => {
      state.status = "fail";
    },
    [getuser.pending]: (state) => {
      state.status = "pending";
    },
    [getuser.fulfilled]: (state, action) => {
      state.status = "successsss";
      state.userlist = action.payload?.data.users;
    },
    [getuser.rejected]: (state) => {
      state.status = "fail";
    },
    [updateuser.pending]: (state) => {
      state.status = "pending";
    },
    [updateuser.fulfilled]: (state, action) => {
      state.status = "successsss";
    
    },
    [updateuser.rejected]: (state) => {
      state.status = "fail";
    },
    [deleteuser.pending]: (state) => {
      state.status = "pending";
    },
    [deleteuser.fulfilled]: (state, action) => {
      state.status = "successsss";
    
    },
    [deleteuser.rejected]: (state) => {
      state.status = "fail";
    },
    
    
    
    
  },
});

// Action creators are generated for each case reducer function
export const { logout } = userSlice.actions;

export default userSlice.reducer;
