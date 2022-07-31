import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Navbar from './Navbar';
// import NewHome from './NewHome';
// import Home from './Home';
// import Userlist from './Userlist';
// import SignIn from './SignIn';
// import SignUp from './SignUp';
// import Leaderboard from './Leaderboard';
import Chat from './Chat';
import SignUp from './NewSign';
import { useSelector } from 'react-redux';
import NewNavbar from './NewNavbar';
import CustomHome from './CustomHome';
import NewUserlist from './NewUserlist';
import NewLeaderboard from './NewLeaderboard';
import Error from './Error'
import Games from './Games';
import LoveCalculator from './LoveCalculator';
import LoveSongs from './LoveSongs';
import NoGame from './NoGame';

const Index = () => {

    const substituteData = useSelector(state => state);
    const [user, setUser] = useState(substituteData.loggedin)

    const toggleUser = (set) => {
        setUser(set)
    }

    return (
        <>
            <Router>
                {/* <Navbar user={user} toggleUser={toggleUser} /> */}
                <NewNavbar user={user} toggleUser={toggleUser} />
                <Routes>
                    <Route exact path="/" element={<CustomHome />} />
                    <Route exact path="/users" element={user === true ? <NewUserlist /> : <SignUp toggleUser={toggleUser} />} />
                    <Route exact path="/chat" element={user === true ? <Chat /> : <SignUp toggleUser={toggleUser} />} />
                    <Route exact path="/leaderboard" element={user === true ? <NewLeaderboard /> : <SignUp toggleUser={toggleUser} />} />
                    <Route exact path="/games" element={user === true ? <Games /> : <SignUp toggleUser={toggleUser} /> } />
                    <Route exact path="/games/lovecalculator" element={user === true ? <LoveCalculator /> : <SignUp toggleUser={toggleUser} /> } />
                    <Route exact path="/games/musicplayer" element={user === true ? <LoveSongs /> : <SignUp toggleUser={toggleUser} /> } />
                    <Route exact path="/games/*" element={<NoGame />} />
                    <Route exact path="/signup" element={<SignUp toggleUser={toggleUser} />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
        </>
    );
};

export default Index;
