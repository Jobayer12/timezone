import React, {Component} from 'react';
import Logo from '../../../assets/img/logo/logo.png';
import './loader.scss';
class Index extends Component {
    render() {
        return (
            <div id="preloader-active">
                <div className="preloader d-flex align-items-center justify-content-center">
                    <div className="preloader-inner position-relative">
                        <div className="preloader-circle"/>
                        <div className="preloader-img pere-text">
                            <img src={Logo} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;