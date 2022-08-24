import React from 'react';
import './TopSection.scss'
import SearchIcon from '../../images/search-copy.png'
const TopSection = () => {
    return (
        <div class="header-container">
        <div class="container">
            <div class="header-title">The Joke Bible</div>
            <div class="header-subtitle">Daily laughs for you and yours</div>
            <div class="search-input">
                <input type="text" class="search-item" placeholder="What are you looking for?"/>
                <button type="submit" class="search-button">
                    <div class="search-icon"> <img src={SearchIcon} alt=""/></div>
                </button>
            </div>
        </div>
    </div>

    );
};

export default TopSection;
