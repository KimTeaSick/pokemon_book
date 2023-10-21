import React, { FC } from "react"
import { ChangeEvent } from "react"

type InputHeadlessProps = {
  value: string, 
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

interface Props {
  children: (args: InputHeadlessProps) => JSX.Element
}

const InputHeadless:FC<Props> = ({children}) => {
const [value, setValue] = React.useState("")
const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
}
return children({
  value,
  onChange: handleValue
})
}
export default InputHeadless