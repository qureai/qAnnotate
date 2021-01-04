import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import './Home.css';

function Home(props) {
    // useEffect(() => {
    //     axios.get(API_BASE_URL+'/user/me', { headers: { 'token': localStorage.getItem(ACCESS_TOKEN_NAME) }})
    //     .then(function (response) {
    //         if(response.status !== 200){
    //           redirectToLogin()
    //         }
    //     })
    //     .catch(function (error) {
    //       redirectToLogin()
    //     });
    //   })

    function handleLogout() {
        props.history.push('/login');
    }

    return(
        <div className="bg">
            <div className="">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <h2 className="navbar-brand">Head CT Standalone Study</h2>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">                    
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item pr-4">
                                <a className="nav-link" href="#">Instructions</a>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-outline-light my-2 my-sm-0" type="button" onClick={() => handleLogout()}>
                                    Logout
                                </button>
                            </li>
                        </ul>                          
                    </div>
                </nav>
            </div>
            <div className="container">
                <div className="row py-4">
                    <div className="col-12">
                        <form>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Search for patient names..." aria-label="Search" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="list-group">
                            <a href="#" className="list-group-item list-group-item-action list-group-item-light active">Image 0</a>
                            <a href="#" className="list-group-item list-group-item-action list-group-item-light">Image 1</a>
                            <a href="#" className="list-group-item list-group-item-action list-group-item-light">Image 2</a>
                            <a href="#" className="list-group-item list-group-item-action list-group-item-light">Image 3</a>
                            <a href="#" className="list-group-item list-group-item-action list-group-item-light">Image 4</a>
                        </div>
                    </div>
                    <div className="col-8">
                        <form>
                            <div className="form-group row text-light">
                                <label htmlFor="viewImage" className="col-sm-2 col-form-label">Image 0</label>                                
                                <button className="btn btn-outline-light my-2 my-sm-0" id="viewImage" type="button">
                                    View Image
                                </button>
                            </div>
                            <div className="form-group text-light">
                                <label>Clinical history:</label>                                
                            </div>
                            <div className="form-group text-light">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="intracranialHyperdensity" />
                                    <label className="form-check-label" htmlFor="intracranialHyperdensity">
                                        Intracranial hyperdensities
                                    </label>
                                </div>
                                <div className="form-check text-light">
                                    <input className="form-check-input" type="checkbox" value="" id="midlineShift" />
                                    <label className="form-check-label" htmlFor="midlineShift">
                                        Midline shift
                                    </label>
                                </div>
                            </div>
                            <div className="form-group row form-inline  text-light">
                                <div className="col">
                                    <label htmlFor="midlineShift" className="col-sm-12 col-form-label white">Please note the midline shift (mm)</label>
                                </div>
                                <div className="col">
                                    <input className="form-control" type="text" placeholder="Midline shift (mm)" aria-label="midlineShift" />
                                </div>                                
                            </div>
                            <div className="form-group  text-light">
                                <label htmlFor="remarks" className=" col-form-label-lg white">Remarks</label>
                                <textarea className="form-control" type="text" placeholder="Please note down remarks." aria-label="remarks" />
                            </div>
                            <div className="form-group  text-light">
                                <label htmlFor="remarks" className=" col-form-label white">Last updated: </label>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-outline-light my-2 my-sm-0" id="viewImage" type="submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>            
        </div>
    );
}

export default withRouter(Home);