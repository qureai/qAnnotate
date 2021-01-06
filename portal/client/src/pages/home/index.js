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

    const [searchKeyword, setSearchKeyword] = useState('');
    const [studyListDefault, setStudyListDefault] = useState();
    const [studyList, setStudyList] = useState();

    const fetchStudyList = () => {
        // return await fetch('https://restcountries.eu/rest/v2/all')
        //     .then(response => response.json())
        //     .then(data => {
        //         setStudyList(data) 
        //         setStudyListDefault(data)
        //     });
        const data = [{'name':'Image1'},{'name':'Image2'},{'name':'Image3'},{'name':'Image4'}];
        setStudyList(data);
        setStudyListDefault(data);
        return;
    };

    const updateStudyList = async (searchKeyword) => {
        const filteredStudyList = studyListDefault.filter(studyId => {
            console.log(searchKeyword);
            return studyId.name.toLowerCase().includes(searchKeyword.toLowerCase());
        });
        setSearchKeyword(searchKeyword);
        setStudyList(filteredStudyList);
    };

    useEffect(() => {
        fetchStudyList()
        // UserService.getUserBoard().then(
        //     (response) => {
        //         console.log(response);
        //         setContent(response.data);
        //     },
        //     (error) => {
        //         redirectToLogin()
        //         // const _content =
        //         //     (error.response &&
        //         //     error.response.data &&
        //         //     error.response.data.message) ||
        //         //     error.message ||
        //         //     error.toString();

        //         // setContent(_content);
        //     }
        // );
    }, []);

    const redirectToLogin = () => {
        props.history.push('/login');
    }

    const handleLogout = () => {
        AuthService.logout();
        props.history.push('/login');
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
                    />
                    <DetailsView />
                </div>
            </div>            
        </div>
    );
}

export default withRouter(Home);