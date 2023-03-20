

export function Searchbar ({onSubmit,onChange}) {
    
  
        return (
    
        <form 
        onSubmit={onSubmit}
                >
        <button type="submit" >
            <span >Search</span>
        </button>

        <input
         
         type="text"
         
        placeholder="Search images and photos"
        onChange={onChange}                
    />
  </form>

        )
    }
