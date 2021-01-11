import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import UserService from '../../services/user.service';
import AuthService from '../../services/auth.service';

import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import ListView from '../../components/ListView/ListView';
import DetailsView from '../../components/DetailsView/DetailsView';
import './Home.css';

function Home(props) {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [studyListDefault, setStudyListDefault] = useState();
    const [studyList, setStudyList] = useState();
    const [studyData, setStudyData] = useState({
        "study_id": '',
        "timestamps": ''
    });

    const updateStudyList = async (searchKeyword) => {
        const filteredStudyList = studyListDefault.filter(studyId => {
            console.log(searchKeyword);
            return studyId.study_id.toLowerCase().includes(searchKeyword.toLowerCase());
        });
        setSearchKeyword(searchKeyword);
        setStudyList(filteredStudyList);
    };

    useEffect(() => {
        UserService.getStudyData()
            .then(response => {
                setStudyList(response.data.data);
                setStudyListDefault(response.data.data);             
            },
            (error) => {
                console.log("error: ", error);              
            }
        );
    }, []);    

    const handleLogout = () => {
        AuthService.logout();
        props.history.push('/login');
    };

    const handleStudyClick = (_studyId) => {
        studyList.forEach(studyItem => {
            if(studyItem._id === _studyId) {
                setStudyData(studyItem);
            }
        });
    };

    return(
        <div className="bg">
            <NavBar handleLogout={handleLogout}/>
            <div className="container">
                <SearchBar 
                    searchKeyword={searchKeyword}
                    updateStudyList={updateStudyList}
                />
                <div className="row">
                    <ListView 
                        studyList={studyList}
                        handleClick={handleStudyClick}
                    />
                    <DetailsView
                        studyData={studyData}
                    />
                </div>
            </div>            
        </div>
    );
}

export default withRouter(Home);