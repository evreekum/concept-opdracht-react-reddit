import React, {useEffect, useState} from "react";
import "./Subreddit.css";
import Header from "../../components/header/Header";
import {useParams} from "react-router-dom";
import axios from "axios";

function Subreddit() {
    // const [subRedditHeaderTitle, setSubRedditHeaderTitle] = useState("")
    const {subredditId} = useParams();
    const [subRedditData, setSubRedditData] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://www.reddit.com/r/${subredditId}/about.json`);
                console.log(result.data);
                setSubRedditData(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, [subredditId]);

    return (
        <>
            {/*<Header*/}
            {/*    title={}>*/}

            {/*</Header>*/}

            <div className="inner_container">

                <h2>Subreddit page</h2>
                <h5>subreddit specifications</h5>
                {subRedditData &&
                    <>
                        <section key={subRedditData.data.id}>
                            <article>
                                <h3>title</h3>
                                <p>{subRedditData.data.title}</p>
                            </article>
                            <article>
                                <h3>description</h3>
                                <p>{subRedditData.data.public_description}</p>
                            </article>
                            <article>
                                <h3>number of subscribers</h3>
                                <p>{subRedditData.data.subscribers}</p>
                            </article>
                        </section>
                    </>
                }

            </div>
        </>
    );
}

export default Subreddit;