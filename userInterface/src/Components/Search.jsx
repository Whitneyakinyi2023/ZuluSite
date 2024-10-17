import React, { useContext } from 'react'
import imagesData from '../assets/images.json';


const searchImage = imagesData.images.find(image => image.id === 15);
const crossImage = imagesData.images.find(image => image.id === 16);

const Search = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    return showSearch ? (
        <div className=''>
            <div className='bar'>
                <input value={search} onChange={(e) => setSearch(e.target.value)} className="actualbar" type="text" placeholder="Search" />
                <img
                    src={new URL(`../assets/${searchImage.src}`, import.meta.url).href}
                    alt={profileImage.name}
                    className="search-icon"
                />
            </div>
            <img onClick={() => setShowSearch(false)}
                src={new URL(`../assets/${crossImage.src}`, import.meta.url).href}
                alt={profileImage.name}
                className="cross-icon"
            />

        </div>
    ) : null
}

export default Search
