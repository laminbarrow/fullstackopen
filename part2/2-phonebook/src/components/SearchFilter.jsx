export default function SearchFilter ({searchQuery, handleSearchQuery}){
    return (
    <div>
          filter show with 
          <input value={searchQuery} 
              onChange={handleSearchQuery} />
        </div>
    )
}