"use strict";

var React = require('react');

var About = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">
                        linkToHome
                    </a>
                    <ul className="nav navbar-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/#about" target="_self">About</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = About;