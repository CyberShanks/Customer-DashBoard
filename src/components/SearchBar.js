
const SearchBar = ({ updateQuery }) => {

    const triggerQueryUpdate = args => {
        updateQuery(args);
    }
    return (
        <input type="text" placeholder="Search" className="search" onChange={(e) => triggerQueryUpdate(e.target.value)}/>
    )
}
export default SearchBar;