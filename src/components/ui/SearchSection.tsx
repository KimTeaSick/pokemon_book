import { FC } from "react";
import InputHeadless from "../headless/InputHeadless"

interface Props {
  event: (value: string) => React.MouseEventHandler<HTMLDivElement> | void
}

const SearchSection: FC<Props> = ({ event }) => {
  return (
    <InputHeadless>
      {
        ({ value, onChange }: { value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => {
          return (
            <div>
              <input type="text" value={value} onChange={onChange} />
              <div onClick={() => event(value)}>검색</div>
            </div>
          )
        }
      }
    </InputHeadless>
  )
}

export default SearchSection