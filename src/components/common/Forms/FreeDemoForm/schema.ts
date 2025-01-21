import { z } from 'zod'

import { fullNameValidation } from '@/utils/helpers/fullNameValidation'
import { normalEmailValidation } from '@/utils/helpers/normalEmailValidation'
import { verifyPhoneMinLength } from '@/utils/helpers/verifyPhoneMinLength'

export const freeDemoFormSchema = ({
  requiredFieldCopy
}: {
  requiredFieldCopy: string
}) =>
  z.object({
    name: z
      .string()
      .nonempty(requiredFieldCopy)
      .refine(value => fullNameValidation({ value }), {
        message: requiredFieldCopy
      }),
    page: z.string().nonempty(),
    email: z
      .string()
      .nonempty(requiredFieldCopy)
      .email({ message: requiredFieldCopy })
      .refine(value => normalEmailValidation({ value }), {
        message: requiredFieldCopy
      }),
    phone: z
      .string()
      .nonempty(requiredFieldCopy)
      .refine(value => verifyPhoneMinLength({ value }), {
        message: requiredFieldCopy
      })
  })
