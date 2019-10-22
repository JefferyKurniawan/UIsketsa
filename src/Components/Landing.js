import React, {Component} from 'react'

class Landing extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">WELCOME TO SKETSBOARD</h1>
                    </div>
                </div>
                <div className="flex">
                    <div className="container-fluid">
                        <div className="col-lg-12">
                            <h1 className="ourteamtitle">OUR TEAM</h1>
                        </div>
                    </div>
                </div>
                <div className="flex">
                <div className="col-lg-4">
                        <div className="card">
                            <img className="profile1" src="jeffery.jpg" alt="jeffery" ></img>
                            <h4 className="card-title">Jeffery Kurniawan</h4>
                            <p className="card-text">Some example text some example text. Jane Doe is an architect and engineer</p>
                            <a hrefName="#" class="btn btn-warning">See Profile</a>
                        </div>
                </div>
                <div className="col-lg-4">
                        <div className="card">
                            <img className="profile1" src="aep.jpg" alt="aep" ></img>
                            <h4 className="card-title">Aep Saefulloh</h4>
                            <p className="card-text">Some example text some example text. Jane Doe is an architect and engineer</p>
                            <a hrefName="#" class="btn btn-warning">See Profile</a>
                        </div>
                </div>
                <div className="col-lg-4">
                        <div className="card">
                            <img className="profile1" src="afzan.jpg" alt="afzan" ></img>
                            <h4 className="card-title">Afzan Maraghi</h4>
                            <p className="card-text">Some example text some example text. Jane Doe is an architect and engineer</p>
                            <a hrefName="#" class="btn btn-warning">See Profile</a>
                        </div>
                </div>
                </div>

                <div className="flex margintop">
                <div className="col-lg-4">
                        <div className="card">
                            <img className="profile1" src="jeffery.jpg" alt="jeffery" ></img>
                            <h4 className="card-title">Jeffery Kurniawan</h4>
                            <p className="card-text">Some example text some example text. Jane Doe is an architect and engineer</p>
                            <a hrefName="#" class="btn btn-warning">See Profile</a>
                        </div>
                </div>
                <div className="col-lg-4">
                        <div className="card">
                            <img className="profile1" src="aep.jpg" alt="aep" ></img>
                            <h4 className="card-title">Aep Saefulloh</h4>
                            <p className="card-text">Some example text some example text. Jane Doe is an architect and engineer</p>
                            <a hrefName="#" class="btn btn-warning">See Profile</a>
                        </div>
                </div>
                <div className="col-lg-4">
                        <div className="card">
                            <img className="profile1" src="afzan.jpg" alt="afzan" ></img>
                            <h4 className="card-title">Afzan Maraghi</h4>
                            <p className="card-text">Some example text some example text. Jane Doe is an architect and engineer</p>
                            <a hrefName="#" class="btn btn-warning">See Profile</a>
                        </div>
                </div>
                </div>
            </div>
        )
    }
}
export default Landing