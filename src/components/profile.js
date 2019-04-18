import React, { Component, Content } from 'react';
import { ReactiveBase, DataSearch } from '@appbaseio/reactivesearch';
import "../utils/App.css"


export default class UserProfile extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name:'',
        email:'',
        password:'',
        id:''
      };
       
    }
     
    render() {
      return (
        <ReactiveBase
            app="uboat"
            credentials="3qrO6vlEh:dcef3f3f-0fa8-4f58-aeed-61c0dfc61718"
            theme={{
                primaryColor: '#FF3A4E',
            }}
        >
      
        
         <nav className="nav">
                <div className="title" href="/"><i className="fas fa-ship"></i>Stowaway</div>
                
                <DataSearch
                    componentId="SearchSensor"
                    dataField="name"
                    autosuggest={false}
                    placeholder="Search by boat names"
                    iconPosition="left"
                    className="search"
                    highlight={true}
                />
                
                <div className="logout" href="#">Logout</div>
            </nav> 

        {/* login */}
        {/* <div className="col-md-5">
          <div className="form-area">  
              <form role="form">
                <br styles="clear:both" />
                <div className="form-group">
                  <input value={this.state.name} type="text" onChange={this.handleNameChange} className="form-control" placeholder="Name" required />
                </div>
                <div className="form-group">
                  <input value={this.state.password} type="password" onChange={this.handlePasswordChange} className="form-control" placeholder="Password" required />
                </div>
                
                <button type="button" onClick={this.updateProfile} id="submit" name="submit" className="btn btn-primary pull-right">Update</button>
              </form>
          </div>
        </div> */}

        </ReactiveBase>
       
        
      );
    }
}