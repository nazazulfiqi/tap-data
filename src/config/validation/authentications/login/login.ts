import { z } from 'zod';

export const validationSchemaLogin = z.object({
  email: z.string().min(1, { message: 'Username harus diisi' }),
  password: z.string().min(1, { message: 'Password harus diisi' }),
  remember: z.boolean().optional(),
});
