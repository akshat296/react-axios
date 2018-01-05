import React from 'react'
import {getAllFiles} from '../action/getFiles'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

const mapStateToProps = (state)=>{
    return {files:state.files.files}
}

const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({getAllFiles},dispatch)
}

class ListFile extends React.Component{
	constructor(props){
		super(props)
	}

	componentWillMount(){
		this.props.getAllFiles()
	}
	render(){
		let file = this.props.files.map((file)=>{
			return(
				<li key={file.id}>{file.file_path}</li>
			);
		})
		return(
			<div>
				<ul>
					{file}
				</ul>
			</div>
		);
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(ListFile)