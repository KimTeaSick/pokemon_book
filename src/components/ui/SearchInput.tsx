import InputHeadless from "../headless/InputHeadless"

const SearchInput = () => {
  return(
    <InputHeadless>
    {
      ({value, onChange}: {value:string, onChange:(e: React.ChangeEvent<HTMLInputElement>) => void})=>{
        return(
          <div>
            <input type="text" value={value} onChange={onChange} />
          </div>
        )
      }
    }
    </InputHeadless>
  )
}

export default SearchInput