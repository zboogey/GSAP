import React from 'react'
import {cocktailLists, mockTailLists} from "../../constants/index.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

function Cocktails() {
    useGSAP(() => {
        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#cocktails",
                start: "top 30%",
                end: "bottom 80%",
                scrub: true,
            },
        })

        parallaxTimeline.from(
            "#c-left-leaf",
            {
                y: 100,
                x: -100,
            },
            0
        ).from('#c-right-leaf', {
            y: 100,
            x: 100,
        })
    })


    return (
        <section id="cocktails" className="noisy">
            <img src="/images/cocktail-left-leaf.png" id="c-left-leaf" alt='l-leaf' />
            <img src="/images/cocktail-right-leaf.png" id="c-right-leaf" alt='r-leaf' />

            <div className="list">
                <div className="popular">
                    <h2>Most popular cocktails:</h2>

                    <ul>
                        {cocktailLists.map(({name, country, detail, price}) => (
                            <li key={name}>
                                <div className="md:me-28">
                                    <h3>{name}</h3>
                                    <p>{country} | {detail}</p>
                                </div>
                                <span>- {price}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="loved">
                    <h2>Most loved mocktails:</h2>

                    <ul>
                        {mockTailLists.map(({name, country, detail, price}) => (
                            <li key={name}>
                                <div className="me-28">
                                    <h3>{name}</h3>
                                    <p>{country} | {detail}</p>
                                </div>
                                <span>- {price}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

        </section>
    )
}

export default Cocktails
