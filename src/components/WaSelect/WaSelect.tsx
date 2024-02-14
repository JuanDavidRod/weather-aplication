import { Select } from 'antd'
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

  const textWhite = (t:string) => <p style={{ color: '#fff' }}>{t}</p>

  return (
    <Select
      loading={loading}
      className={style.waSelect}
      showSearch
      placeholder={textWhite(placeholder)}
      optionFilterProp='children'
      onChange={onChange}
      filterOption={filterOption}
      options={options}
      onSearch={onSearch}
      notFoundContent={textWhite('Sin sugerencias')}
      style={{ height: 40 }}
    />
  )
}

export default WaSelect
