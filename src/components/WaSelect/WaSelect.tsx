import { Select } from 'antd'
import style from './WaSelect.module.css'

type optionsSelect = {label: string, value: string}

interface Props {
  options: optionsSelect[]
  placeholder: string
  onChange: () => void
}

const WaSelect = ({ options, placeholder, onChange }: Props) => {
  const filterOption = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())

  return (
    <Select
      className={style.waSelect}
      showSearch
      placeholder={placeholder}
      optionFilterProp='children'
      onChange={onChange}
      filterOption={filterOption}
      options={options}
    />
  )
}

export default WaSelect
