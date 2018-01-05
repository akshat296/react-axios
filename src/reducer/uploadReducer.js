let uploadReducer = {
	status:"",
	result:""
}

function uploadReducer(state=uploadReducer,action){
	switch(action.type){
		case 'UPLOAD_PROCESS':
			return Object.assign({},state,{status:action.status})
		case 'UPLOAD_DONE':
			return Object.assign({},state,{status:action.status,result:action.result})
		case 'UPLOAD_ERROR':
			return Object.assign({},state,{status:action.status})
		default:
			return state
	}
}

export default uploadReducer
