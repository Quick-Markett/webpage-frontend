import { FieldLabelProps } from './types'

export const FieldLabel: React.FC<FieldLabelProps> = ({ id, label }) => {
  return label ? (
    <label className="text-sm text-slate-600" htmlFor={id}>
      {label}
    </label>
  ) : null
}
