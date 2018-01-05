
let filesState = {
	status:"",
	files:[]
}

function filesReducer(state=filesState,action){
	switch(action.type){
		case 'FILES_FETCHING':
			return Object.assign({},state,{status:action.status})
		case 'FILES_FETCHED':
			return Object.assign({},state,{status:action.status,files:action.files})
		case 'FILES_ERROR':
			return Object.assign({},state,{status:action.status})
		default:
			return state
	}
}

export default filesReducer