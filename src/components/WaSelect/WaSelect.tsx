import { Alert, Select } from 'antd'
import style from './WaSelect.module.css'
import { type City } from '@/vite-env'

interface Props {
  options: City[]
  placeholder: string
  onChange: (value: any, option: City | City[]) => void
  onSearch: (value: string) => void
  loading:boolean
}

const WaSelect = ({ options, placeholder, loading, onChange, onSearch }: Props) => {
  const filterOption = (input: string, option?: City) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())

  return (
    <Select
      loading={loading}
      className={style.waSelect}
      showSearch
      placeholder={placeholder}
      optionFilterProp='children'
      onChange={onChange}
      filterOption={filterOption}
      options={options}
      onSearch={onSearch}
      notFoundContent={<Alert message='No hay ciudades sugeridas' type='info' />}
    />
  )
}

export default WaSelect
