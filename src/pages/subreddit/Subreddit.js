import React, {useEffect, useState} from "react";
import "./Subreddit.css";
import Header from "../../components/header/Header";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import numberDots from "../../helperfuncties/numberDots";
import Footer from "../../components/Footer";


function Subreddit() {
    const {subredditId} = useParams();
    const [subRedditData, setSubRedditData] = useState();
    const [subRedditTitle, setSubRedditTitle] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://www.reddit.com/r/${subredditId}/about.json`);
                console.log(result.data);
                setSubRedditData(result.data);
                setSubRedditTitle(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, [subredditId]);

    return (
        <>
            {subRedditTitle &&
                <>
                    <div className="header_container" key={subRedditTitle.data.title}>
                        <Header
                            title={subRedditTitle.data.display_name_prefixed}
                            subtitle="Subreddit specifications"
                        />
                    </div>
                </>
            }

            <div className="inner_container">
                {subRedditData &&
                    <>
                        <section className="subreddit-card" key={subRedditData.data.id}>
                            <article>
                                <h4>title</h4>
                                <p>{subRedditData.data.title}</p>
                            </article>
                            {/*<a className="subReddit-title"*/}
                            {/*   href={subRedditData.data.url}*/}
                            {/*   target="_blank"*/}
                            {/*   rel="noreferrer">{subRedditData.data.title}</a>*/}

                            <article>
                                <h4>description</h4>
                                <p>{subRedditData.data.public_description}</p>
                            </article>
                            <article>
                                <h4>number of subscribers</h4>
                                <p>{numberDots(subRedditData.data.subscribers)}</p>
                            </article>
                            <Link className="back-link-link" to="/"><p className="back-link">Take me back</p></Link>
                        </section>
                    </>
                }

            </div>


            <Footer/>
        </>
    );
}

export default Subreddit;