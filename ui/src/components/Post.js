import React, { Component } from 'react';
import Chip from 'material-ui/Chip';
import { hashHistory, Link } from 'react-router';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const style = {
	marginTop: "10px"
};

class Post extends Component
{
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div style={style}>
				<Card>
					<CardHeader
						title={this.props.Title}
						subtitle={this.props.Source}
						actAsExpander={true}
						showExpandableButton={true}>


					</CardHeader>
					<CardText>
					</CardText>

					<CardActions>
						<Link to={"/downloads"}>
							<FlatButton label="Download" />
						</Link>

						<Link to={"/stream/" + this.props.InfoHash}>
							<FlatButton label="Stream" />
						</Link>
					</CardActions>
				</Card>
			</div>)
	}
}

export default Post;
