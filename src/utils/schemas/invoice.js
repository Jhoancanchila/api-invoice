const z = require("zod");

const invoiceSchema = z.object({
  client: z.number().int().positive(),
  date: z.string({
    invalid_type_error: 'Invoice date must be a string',
    required_error: 'Invoice date is required.'
  }),
  subtotal: z.number().int().positive(),
  discount: z.number().int().positive(),
  total: z.number().int().positive()
})

//validar factura safeparse devuelve un objeto indicando si hay error o no
function validateInvoice (object) {
  return invoiceSchema.safeParse(object)
}

module.exports = {
  validateInvoice,
}