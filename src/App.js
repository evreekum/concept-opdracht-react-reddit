import "./App.css";
import React, {useEffect} from "react";
import NavBar from "./components/navigation/NavBar";
import {Route, Switch} from "react-router-dom";
import Home from "./pages/home/Home";
import Subreddit from "./pages/subreddit/Subreddit";
import axios from "axios";


function App() {

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://www.reddit.com/hot.json?limit=15`);
                console.log(result.data);
            } catch (e) {
                console.error(e);
            }

        }
        fetchData();
    }, []);

    return (
        <>
            <div className="outer_container">
                <NavBar/>

                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/subreddit/:subredditId">
                        <Subreddit/>
                    </Route>
                </Switch>
            </div>
        </>
    );
}

export default App;
