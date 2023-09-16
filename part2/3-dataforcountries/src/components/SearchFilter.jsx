export default function SearchFilter ({searchValue, handleSearchValue}){
    return (
    <div>
        <label>Find countries</label>
          <input type="text" value={searchValue} 
              onChange={handleSearchValue} />
        </div>
    )
}