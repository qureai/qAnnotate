import React from 'react';

const DetailsView = () => {
    return (
        <div className="col-8">
            <form>
                <div className="form-group row text-light">
                    <button className="btn btn-outline-light mx-2 my-sm-0" id="viewImage" type="button">
                        View Image
                    </button>
                    <label htmlFor="viewImage" className="col-sm-2 col-form-label">Image 0</label>                                                    
                </div>
                <div className="form-group text-light my-4">
                    <label>
                        <h4>
                            <small>
                                Clinical history:
                            </small>
                        </h4>
                    </label>
                </div>
                <div className="form-group text-light">
                    <div className="form-check">
                        <input className="form-check-input my-3" type="checkbox" value="" id="intracranialHyperdensity" />
                        <label className="form-check-label" htmlFor="intracranialHyperdensity">
                            <h3>
                                <small>
                                Intracranial hyperdensities
                                </small>
                            </h3>
                        </label>
                    </div>
                    <div className="form-check text-light">
                        <input className="form-check-input my-3" type="checkbox" value="" id="midlineShift" />
                        <label className="form-check-label" htmlFor="midlineShift">
                            <h3>
                                <small>
                                    Midline shift
                                </small>
                            </h3>                            
                        </label>
                    </div>
                </div>
                <div className="form-group row form-inline text-light">
                    <div className="col">
                        <label htmlFor="midlineShift" className="col-sm-12 col-form-label white">
                            <h4>
                                <small>
                                    Please note the midline shift (mm)
                                </small>
                            </h4>                            
                        </label>
                    </div>
                    <div className="col">
                        <input className="form-control" type="text" placeholder="Midline shift (mm)" aria-label="midlineShift" />
                    </div>                                
                </div>
                <div className="form-group text-light">
                    <label htmlFor="remarks" className="col-form-label-lg white">Remarks</label>
                    <textarea className="form-control" type="text" placeholder="Please note down remarks." aria-label="remarks" />
                </div>
                <div className="form-group text-light">
                    <label htmlFor="remarks" className="col-form-label white">Last updated: </label>
                </div>
                <div className="form-group">
                    <button className="btn btn-outline-light my-2 my-sm-0" id="viewImage" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default DetailsView;