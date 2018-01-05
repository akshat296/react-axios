import axios from 'axios'

export const getAllFiles = ()=>{
	return function(dispatch){
		dispatch({type:'FILES_FETCHING',status:'files fetching'})
		axios.get("/files").then((response)=>{
			if(response.data.status === "OK"){
				dispatch({type:'FILES_FETCHED',status:'files fetched',files:response.data.files})	
			}
			else{
				dispatch({type:'FILES_ERROR',status:'files fetching error'})
			}
			
		}).catch((error)=>{
			dispatch({type:'FILES_ERROR',status:'files fetching error'})
		})
	}
}