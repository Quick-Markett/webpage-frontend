'use client'

import { usePathname } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/toolkit/Button'
import { InputField } from '@/components/toolkit/Fields/InputField'
import { LabelField } from '@/components/toolkit/Fields/LabelField'
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
        label="Informe o seu nome"
        placeholder="Seu nome aqui"
        variant="secondary"
        {...register('name')}
        errorMessage={errors?.root?.message}
      />

      <InputField
        id="email"
        label="Informe o seu email"
        placeholder="Seu email aqui"
        variant="secondary"
        {...register('email')}
        errorMessage={errors?.root?.message}
      />

      <div className="flex flex-col gap-1">
        <LabelField
          id="phone"
          label="Seu número de telefone"
          variant="secondary"
        />
        <PhoneNumber
          formMethods={formMethods}
          id="phone"
          name="phone"
          placeholder="Insira seu telefone"
        />
      </div>

      <Button className="mt-6 min-w-full" type="submit" variant="primary">
        Solicitar
      </Button>
    </form>
  )
}
