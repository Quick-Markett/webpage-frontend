'use client'

import { usePathname } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { InputField } from '@/components/toolkit/Fields/InputField'
import { PhoneNumber } from '@/components/toolkit/PhoneNumber'
import { getMappedHubspotData } from '@/utils/hubspot/getMappedHubspotData'
import { hubspotFormSubmit } from '@/utils/hubspot/hubspotFormSubmit'
import { zodResolver } from '@hookform/resolvers/zod'

import { freeDemoFormSchema } from './schema'
import { FreeDemoFormInputs } from './types'

export const FreeDemoForm: React.FC = ({
  className
}: {
  className: string
}) => {
  const pathname = usePathname()

  const formMethods = useForm({
    resolver: zodResolver(
      freeDemoFormSchema({
        requiredFieldCopy: 'O campo é obrigatório'
      })
    )
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = formMethods

  const sendDataToHubspot = async (payload: FreeDemoFormInputs) => {
    const hubspotMappedData = getMappedHubspotData({
      ...(payload as Required<FreeDemoFormInputs>)
    })

    await hubspotFormSubmit({
      data: {
        ...hubspotMappedData,
        email: payload.email,
        phone: payload.phone,
        page: pathname
      },
      formVariant: 'freeDemo',
      url: pathname
    })
  }

  return (
    <form
      className={className}
      id="free-demo-form"
      onSubmit={handleSubmit(sendDataToHubspot)}
    >
      <InputField
        id="name"
        placeholder="Seu nome"
        {...register('name')}
        errorMessage={errors?.root?.message}
      />
      <InputField
        id="email"
        placeholder="Seu email"
        {...register('email')}
        errorMessage={errors?.root?.message}
      />

      <div className="flex flex-col gap-4 sm:flex-row">
        <PhoneNumber
          formMethods={formMethods}
          id="phone"
          name="phone"
          placeholder="Insira seu telefone"
        />
      </div>
    </form>
  )
}
