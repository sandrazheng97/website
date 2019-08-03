import React, { Component } from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

import "./Profile.css";
import DesignElements from "./DesignData";
import IllustrationElements from "./IllustrationData.js";

const kNumColumns = 6;
const kColumnSpacing = 10;

class Profile extends Component {
    constructor(props) {
        super(props);
        const source =
            props.match.path !== "/" ? props.match.path : "/illustration";
        var elements =
            source === "/illustration" ? IllustrationElements : DesignElements;

        this.state = {
            source,
            elements
            //
        };
        this.onScroll = this.onScroll.bind(this);
        this.profileElement = React.createRef();
    }

    getGridHeight() {
        return Math.floor(
            (this.profileElement.current.offsetWidth - kColumnSpacing * 2) /
                kNumColumns
        );
    }

    onScroll() {
        this.setState({
            gridHeight: this.getGridHeight()
        });
    }

    componentDidMount() {
        window.addEventListener("resize", this.onScroll, false);
        this.setState({ gridHeight: this.getGridHeight() });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.onScroll, false);
    }

    render() {
        return (
            <div
                ref={this.profileElement}
                className="profile"
                style={{ width: "100%" }}
            >
                <div
                    className="gallery"
                    style={{
                        gridAutoRows: this.state.gridHeight,
                        gridGap: kColumnSpacing
                    }}
                >
                    {this.state.elements.map(
                        ({ height, src, width, imageStyles }, i) => {
                            var style = {};
                            if (height) {
                                style.gridRowEnd = "span " + parseInt(height);
                            }
                            if (width) {
                                style.gridColumnEnd = "span " + parseInt(width);
                            }
                            return (
                                <div key={i} className="card" style={style}>
                                    <Link
                                        to={
                                            "/carousel" +
                                            this.state.source +
                                            "/" +
                                            parseInt(i)
                                        }
                                    >
                                        <LazyLoad>
                                            <img
                                                alt={src}
                                                src={src}
                                                style={imageStyles}
                                            />
                                        </LazyLoad>
                                    </Link>
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        );
    }
}

export default Profile;
