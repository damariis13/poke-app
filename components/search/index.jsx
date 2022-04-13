import Image from 'next/image';
import styles from './search.module.scss';
import searchIcon from '../../assets/search-icon.svg';
import searchIcon1 from '../../assets/search-regular-24.png'

const Search = () => {
    return (
        <div className={styles.search}>
            <Image 
            src={searchIcon}
            alt="search-img"
            />
            <input type="text" placeholder="Buscar pokemon" />
        </div>
    )
}

export default Search