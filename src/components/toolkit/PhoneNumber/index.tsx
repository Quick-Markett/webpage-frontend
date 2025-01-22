'use client'

import { useEffect, useState } from 'react'
import { PhoneInput } from 'react-international-phone'

import { FieldError } from './FieldError'
import { FieldLabel } from './FieldLabel'
import { PhoneNumberProps } from './types'

export const PhoneNumber: React.FC<PhoneNumberProps> = ({
  id,
  label,
  name,
  defaultValue,
  formMethods: {
    register,
    setValue,
    formState: { errors },
    clearErrors
  }
}) => {
  const [phone, setPhone] = useState(String(defaultValue))

  useEffect(() => {
    register(name)
  }, [name, register])

  const error = errors[name]?.message

  const handleSetPhone = (value: string) => {
    setValue(name, value)

    setPhone(value)

    if (error) {
      clearErrors(name)
    }
  }

  return (
    <div
      className="flex w-full flex-col items-start gap-1"
      data-cid="phone-number"
    >
      <FieldLabel id={id} label={label} />
      <PhoneInput
        preferredCountries={[
          'br',
          'mx',
          'us',
          'us',
          'co',
          'pe',
          'cl',
          'ec',
          'ar',
          'py'
        ]}
        defaultCountry={'br'}
        name={name}
        onChange={handleSetPhone}
        value={phone}
        forceDialCode
      />
      <FieldError error={errors[name]?.message} />
    </div>
  )
}
