const z = require("zod");


const productSchema = z.object({
  id: z.number().int().positive(),
  name: z.string(),
  price: z.number().int().positive(),
  quantity: z.number().int().positive(),
 });

const invoiceSchema = z.object({
  client: z.number().int().positive(),
  date: z.string({
    invalid_type_error: 'Invoice date must be a string',
    required_error: 'Invoice date is required.'
  }),
  subtotal: z.number(),
  discount: z.number(),
  total: z.number(),
  products: z.array(productSchema)
})

//validar factura safeparse devuelve un objeto indicando si hay error o no
function validateInvoice (object) {
  return invoiceSchema.safeParse(object)
}

module.exports = {
  validateInvoice,
}